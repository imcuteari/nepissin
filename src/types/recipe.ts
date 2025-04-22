export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string | string[];
  image: string;
  prepTime: string;
  cookTime?: string;
  totalTime?: string;
  servings: string;
  category: string;
  calories?: string;
  fat?: string;
  carbs?: string;
  protein?: string;
} 