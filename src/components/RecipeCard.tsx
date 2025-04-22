import { Link } from 'react-router-dom';
import { Recipe } from '../types/recipe';
import { useSearchParams } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q')?.toLowerCase() || '';

  const highlightIngredients = (ingredients: string[]) => {
    return ingredients.map((ingredient: string, index: number) => {
      const cleanIngredient = ingredient.trim().toLowerCase();
      const isMatch = searchTerm && cleanIngredient.includes(searchTerm);
      return (
        <span
          key={index}
          className={`text-sm px-2 py-1 rounded-full ${
            isMatch ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
          }`}
        >
          {ingredient.trim()}
        </span>
      );
    });
  };

  // Schema.org Recipe Schema
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.name,
    "image": `/images/${recipe.image}`,
    "description": `${recipe.name} tarifi - Ne Pişsin'de bulabileceğiniz lezzetli ve pratik bir tarif.`,
    "recipeIngredient": recipe.ingredients,
    "recipeCategory": "Yemek Tarifleri",
    "recipeCuisine": "Türk Mutfağı",
    "prepTime": "PT15M",
    "cookTime": "PT30M",
    "totalTime": "PT45M",
    "recipeYield": "4 porsiyon",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100"
    }
  };

  return (
    <Link
      to={`/tarifler/${recipe.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <script type="application/ld+json">
        {JSON.stringify(recipeSchema)}
      </script>
      <div className="relative pb-[56.25%]">
        <img
          src={`/images/${recipe.image}`}
          alt={`Ne Pişsin - ${recipe.name} Tarifi`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
        <div className="flex flex-wrap gap-1">
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <span
              key={index}
              className="bg-white text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full shadow-sm"
            >
              {ingredient.trim()}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{recipe.name}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {highlightIngredients(recipe.ingredients)}
        </div>
      </div>
    </Link>
  );
}; 