import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allRecipes } from '../data/allRecipes';
import styles from './RecipeDetail.module.css';
import { Helmet } from 'react-helmet';
import { Recipe } from '../types/recipe';

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Önce ID ile ara
  let recipe = allRecipes.find(r => r.id.toString() === id) as Recipe | undefined;
  
  // ID ile bulunamazsa, normalize edilmiş isim ile ara
  if (!recipe) {
    recipe = allRecipes.find(r => normalizeText(r.name) === id) as Recipe | undefined;
  }

  if (!recipe) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Tarif Bulunamadı</h1>
          <p>Üzgünüz, aradığınız tarif bulunamadı.</p>
          <Link to="/tarifler" className={styles.backLink}>
            Tariflere Dön
          </Link>
        </div>
      </div>
    );
  }

  // instructions'ı array'e dönüştür
  const instructions = Array.isArray(recipe.instructions) 
    ? recipe.instructions 
    : recipe.instructions.split('.').filter(Boolean).map(i => i.trim());

  const getRecipeDescription = (recipe: Recipe) => {
    const ingredients = recipe.ingredients.slice(0, 3).join(', ');
    return `${recipe.name} tarifi. Malzemeler: ${ingredients}. Kolay ve lezzetli tarif için hemen göz atın!`;
  };

  const getStructuredData = (recipe: Recipe) => {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Recipe",
      "name": recipe.name,
      "description": getRecipeDescription(recipe),
      "image": `https://nepissin.com/images/${recipe.image}`,
      "url": `https://nepissin.com/tarifler/${recipe.id}`,
      "recipeIngredient": recipe.ingredients,
      "recipeInstructions": recipe.instructions,
      "prepTime": recipe.prepTime,
      "cookTime": recipe.cookTime,
      "totalTime": recipe.totalTime || `${recipe.prepTime} + ${recipe.cookTime || '0'}`,
      "recipeYield": recipe.servings,
      "recipeCategory": recipe.category,
      "recipeCuisine": "Turkish"
    });
  };

  return (
    <>
      <Helmet>
        <title>{`${recipe.name} - Ne Pişsin?`}</title>
        <meta name="description" content={getRecipeDescription(recipe)} />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${recipe.name} - Ne Pişsin?`} />
        <meta property="og:description" content={getRecipeDescription(recipe)} />
        <meta property="og:image" content={`https://nepissin.com/images/${recipe.image}`} />
        <meta property="og:url" content={`https://nepissin.com/tarifler/${recipe.id}`} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${recipe.name} - Ne Pişsin?`} />
        <meta name="twitter:description" content={getRecipeDescription(recipe)} />
        <meta name="twitter:image" content={`https://nepissin.com/images/${recipe.image}`} />
        <meta name="twitter:site" content="@NePissin" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {getStructuredData(recipe)}
        </script>
      </Helmet>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{recipe.name}</h1>
          
          <div className={styles.recipeInfo}>
            {recipe.difficulty && (
              <div className={styles.infoItem}>
                <span className={styles.label}>Zorluk:</span>
                <span className={styles.value}>{recipe.difficulty}</span>
              </div>
            )}
            <div className={styles.infoItem}>
              <span className={styles.label}>Hazırlık:</span>
              <span className={styles.value}>{recipe.prepTime}</span>
            </div>
            {recipe.cookTime && (
              <div className={styles.infoItem}>
                <span className={styles.label}>Pişirme:</span>
                <span className={styles.value}>{recipe.cookTime}</span>
              </div>
            )}
            <div className={styles.infoItem}>
              <span className={styles.label}>Porsiyon:</span>
              <span className={styles.value}>{recipe.servings}</span>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Malzemeler</h2>
            <ul className={styles.ingredients}>
              {recipe.ingredients.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Hazırlanışı</h2>
            <ol className={styles.instructions}>
              {instructions.map((instruction: string, index: number) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          <Link to="/tarifler" className={styles.backLink}>
            Tariflere Dön
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail; 