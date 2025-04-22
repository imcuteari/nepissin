export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  category: string;
}

export const recipes: Recipe[] = [
  {
    id: 'etli-tere-dolmasi',
    name: 'Etli Tere Dolması',
    description: 'Taze tere otları ile hazırlanan, kıymalı, nefis bir dolma tarifi.',
    ingredients: [
      '500g kıyma',
      '2 demet tere',
      '1 adet soğan',
      '1 su bardağı pirinç',
      'Tuz, karabiber',
      'Zeytinyağı'
    ],
    instructions: [
      'Tere yapraklarını ayıklayıp yıkayın.',
      'Pirinci ıslatın ve süzün.',
      'Soğanı ince doğrayın ve kıyma ile karıştırın.',
      'İç harcı hazırlayın ve baharatları ekleyin.',
      'Tere yapraklarını doldurun ve rulo yapın.',
      'Tencereye dizin ve pişirin.'
    ],
    prepTime: '30 dakika',
    cookTime: '45 dakika',
    servings: 4,
    difficulty: 'Orta',
    category: 'Ana Yemek'
  },
  {
    id: 'tavuk-sote',
    name: 'Tavuk Sote',
    description: 'Sebzeli, baharatlı ve lezzetli bir tavuk sote tarifi.',
    ingredients: [
      '500g tavuk göğsü',
      '2 adet biber',
      '2 adet domates',
      '1 adet soğan',
      'Zeytinyağı',
      'Tuz, karabiber'
    ],
    instructions: [
      'Tavukları kuşbaşı doğrayın.',
      'Sebzeleri julyen doğrayın.',
      'Tavukları soteleyin.',
      'Sebzeleri ekleyin ve pişirin.',
      'Baharatları ekleyin.',
      'Sıcak servis yapın.'
    ],
    prepTime: '15 dakika',
    cookTime: '25 dakika',
    servings: 4,
    difficulty: 'Kolay',
    category: 'Ana Yemek'
  },
  {
    id: 'mercimek-corbasi',
    name: 'Mercimek Çorbası',
    description: 'Geleneksel Türk mutfağının vazgeçilmez lezzeti, kremsi kıvamıyla mercimek çorbası.',
    ingredients: [
      '2 su bardağı kırmızı mercimek',
      '1 adet soğan',
      '1 adet havuç',
      '2 yemek kaşığı un',
      'Tereyağı',
      'Tuz, karabiber, pul biber'
    ],
    instructions: [
      'Mercimeği yıkayın ve süzün.',
      'Sebzeleri doğrayın.',
      'Tereyağında soğanları kavurun.',
      'Mercimek ve sebzeleri ekleyin.',
      'Su ekleyip pişirin.',
      'Blenderdan geçirin ve servis yapın.'
    ],
    prepTime: '10 dakika',
    cookTime: '30 dakika',
    servings: 6,
    difficulty: 'Kolay',
    category: 'Çorba'
  }
]; 