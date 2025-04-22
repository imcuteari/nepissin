export interface Recipe {
  id: string | number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime?: string;
  servings: string | number;
  difficulty?: 'Kolay' | 'Orta' | 'Zor';
  category: string;
} 