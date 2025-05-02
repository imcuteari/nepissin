import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Recipes.module.css';
import { recipes as turkishRecipes } from '../data/recipes';
import { recipesBorek } from '../data/recipes_borek';
import { recipesKarma } from '../data/recipes_karma';
import { recipesKekPasta } from '../data/recipes_kek_pasta';
import { recipesSalataMeze } from '../data/recipes_salatalar_mezeler';
import { recipesAnaYemek1 } from '../data/recipes_ana_yemek1';
import { recipesAnaYemek2 } from '../data/recipes_ana_yemek2';
import { recipesAnaYemek3 } from '../data/recipes_ana_yemek3';

import { recipesCorba } from '../data/recipes_corba';
import { recipesKahvalti } from '../data/recipes_kahvalti';
import { recipesTatli } from '../data/recipes_tatli';
import { Link } from 'react-router-dom';
import { generateImageFilename } from '../utils/generateImageFilename';
import { recipesAnaYemek4 } from '../data/recipes_ana_yemek4';

interface Recipe {
  id: string | number;
  name: string;
  description?: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime?: string;
  servings: string | number;
  difficulty?: 'Kolay' | 'Orta' | 'Zor';
  category: string;
}

const processRecipe = (recipe: any): Recipe => ({
  id: recipe.id,
  name: recipe.name,
  description: Array.isArray(recipe.instructions) ? recipe.instructions[0] : recipe.instructions?.split('.')[0] || '',
  ingredients: recipe.ingredients,
  instructions: Array.isArray(recipe.instructions) ? recipe.instructions : recipe.instructions?.split('.') || [],
  prepTime: recipe.prepTime,
  cookTime: recipe.cookTime || '',
  servings: recipe.servings,
  difficulty: recipe.difficulty || 'Orta',
  category: recipe.category
});

const allRecipes: Recipe[] = [
  ...turkishRecipes,
  ...recipesBorek.map(processRecipe),
  ...recipesKarma.map(processRecipe),
  ...recipesKekPasta.map(processRecipe),
  ...recipesSalataMeze.map(processRecipe),
  ...recipesAnaYemek1.map(processRecipe),
  ...recipesAnaYemek2.map(processRecipe),
  ...recipesAnaYemek3.map(processRecipe),
  ...recipesAnaYemek4.map(processRecipe),
 
  ...recipesCorba.map(processRecipe),
  ...recipesKahvalti.map(processRecipe),
  ...recipesTatli.map(processRecipe)
];

const Recipes: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q')?.toLowerCase() || '';

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c');
  };

  const filteredRecipes = searchQuery
    ? allRecipes.filter(recipe => {
        const normalizedQuery = normalizeText(searchQuery);
        const normalizedName = normalizeText(recipe.name);
        const normalizedDescription = normalizeText(recipe.description || '');
        const normalizedIngredients = recipe.ingredients.map(ing => normalizeText(ing)).join(' ');

        return (
          normalizedName.includes(normalizedQuery) ||
          normalizedDescription.includes(normalizedQuery) ||
          normalizedIngredients.includes(normalizedQuery)
        );
      })
    : allRecipes;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {searchQuery ? `"${searchQuery}" için Tarifler` : 'Tüm Tarifler'}
      </h1>
      
      {filteredRecipes.length === 0 ? (
        <div className={styles.noResults}>
          <p>Aradığınız kriterlere uygun tarif bulunamadı.</p>
        </div>
      ) : (
        <div className={styles.recipeGrid}>
          {filteredRecipes.map((recipe) => {
            const normalizedName = recipe.name
              .toLowerCase()
              .replace(/ı/g, 'i')
              .replace(/ğ/g, 'g')
              .replace(/ü/g, 'u')
              .replace(/ş/g, 's')
              .replace(/ö/g, 'o')
              .replace(/ç/g, 'c')
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '');
            
            return (
              <Link to={`/tarifler/${normalizedName}`} key={recipe.id} className={styles.recipeCard}>
                <h2 className={styles.recipeName}>{recipe.name}</h2>
                <div className={styles.imageContainer}>
                  <img
                    src={`/images/${generateImageFilename(recipe.name)}`}
                    alt={`Ne Pişsin - ${recipe.name} Tarifi`}
                    loading="lazy"
                    className={styles.recipeImage}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.log(`Image failed to load for recipe: ${recipe.name}`);
                      console.log(`Generated filename: ${generateImageFilename(recipe.name)}`);
                      console.log(`Full image path: ${target.src}`);
                      target.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.log(`Image loaded successfully for recipe: ${recipe.name}`);
                      console.log(`Generated filename: ${generateImageFilename(recipe.name)}`);
                      console.log(`Full image path: ${target.src}`);
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: `
        <script type="text/javascript">
          var atOptions = {
            'anahtar': '04efbab938f860301c222cf783615f4d',
            'biçim': 'iframe',
            'yükseklik': 250,
            'genişlik': 300,
            'parametreler': {}
          };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/04efbab938f860301c222cf783615f4d/invoke.js"></script>
        <script type='text/javascript' src='//pl26538891.profitableratecpm.com/2c/1f/78/2c1f78762ae2e3f21798b2af9cd8d15f.js'></script>
      ` }} />
    </div>
  );
};

export default Recipes; 