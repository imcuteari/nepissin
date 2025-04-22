// Ana Yemek Tarifleri
import { recipesAnaYemek1 } from './recipes_ana_yemek1';
import { recipesAnaYemek2 } from './recipes_ana_yemek2';
import { recipesAnaYemek3 } from './recipes_ana_yemek3';
import { recipesAnaYemek4 } from './recipes_ana_yemek4';

// Çorba Tarifleri
import { recipesCorba } from './recipes_corba';

// Kahvaltı Tarifleri
import { recipesKahvalti } from './recipes_kahvalti';

// Börek Tarifleri
import { recipesBorek } from './recipes_borek';

// Tatlı Tarifleri
import { recipesTatli } from './recipes_tatli';

// Salatalar ve Mezeler
import { recipesSalataMeze } from './recipes_salatalar_mezeler';

// Kek ve Pasta Tarifleri
import { recipesKekPasta } from './recipes_kek_pasta';

// Karma Yemekler
import { recipesKarma } from './recipes_karma';

// Tüm tarifleri birleştir
export const allRecipes = [
  // Ana Yemek Tarifleri
  ...recipesAnaYemek1,
  ...recipesAnaYemek2,
  ...recipesAnaYemek3,
  ...recipesAnaYemek4,

  // Çorba Tarifleri
  ...recipesCorba,

  // Kahvaltı Tarifleri
  ...recipesKahvalti,

  // Börek Tarifleri
  ...recipesBorek,

  // Tatlı Tarifleri
  ...recipesTatli,

  // Salatalar ve Mezeler
  ...recipesSalataMeze,

  // Kek ve Pasta Tarifleri
  ...recipesKekPasta,

  // Karma Yemekler
  ...recipesKarma
]; 