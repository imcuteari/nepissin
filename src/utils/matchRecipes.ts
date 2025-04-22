import { Recipe } from '../data/recipes';
import { normalizeIngredient } from './normalizeInput';

interface MatchedRecipe extends Recipe {
  matchPercentage: number;
  missingIngredients: string[];
  matchedIngredients: string[];
}

// Fuzzy matching için benzerlik skoru hesaplama
const calculateSimilarity = (a: string, b: string): number => {
  const normalizedA = normalizeIngredient(a);
  const normalizedB = normalizeIngredient(b);
  
  if (normalizedA === normalizedB) return 1;
  if (normalizedA.includes(normalizedB) || normalizedB.includes(normalizedA)) return 0.9;
  
  // Levenshtein distance'a göre benzerlik hesaplama
  const maxLength = Math.max(normalizedA.length, normalizedB.length);
  const distance = levenshteinDistance(normalizedA, normalizedB);
  return 1 - (distance / maxLength);
};

const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  return matrix[b.length][a.length];
};

export const matchRecipes = (userIngredients: string[], recipes: Recipe[]): MatchedRecipe[] => {
  // Her tarif için eşleşme hesapla
  const matchedRecipes = recipes.map(recipe => {
    const matchResults = recipe.ingredients.map(recipeIngredient => {
      // Her tarif malzemesi için en iyi eşleşmeyi bul
      const bestMatch = userIngredients.reduce(
        (best, userIngredient) => {
          const similarity = calculateSimilarity(recipeIngredient, userIngredient);
          return similarity > best.similarity ? { ingredient: userIngredient, similarity } : best;
        },
        { ingredient: '', similarity: 0 }
      );
      return { ...bestMatch, recipeIngredient };
    });

    // Eşleşen ve eksik malzemeleri belirle
    const matchedIngredients = matchResults
      .filter(result => result.similarity > 0.8)
      .map(result => result.recipeIngredient);

    const missingIngredients = recipe.ingredients.filter(
      ingredient => !matchedIngredients.includes(ingredient)
    );

    // Eşleşme yüzdesini hesapla
    const matchPercentage = Math.round(
      (matchedIngredients.length / recipe.ingredients.length) * 100
    );

    return {
      ...recipe,
      matchPercentage,
      missingIngredients,
      matchedIngredients
    };
  });

  // Tarifleri eşleşme yüzdesine göre sırala
  return matchedRecipes.sort((a, b) => {
    // Önce yüzdeye göre sırala
    if (b.matchPercentage !== a.matchPercentage) {
      return b.matchPercentage - a.matchPercentage;
    }
    // Yüzdeler eşitse, daha az eksik malzemesi olanı öne çıkar
    return a.missingIngredients.length - b.missingIngredients.length;
  });
}; 