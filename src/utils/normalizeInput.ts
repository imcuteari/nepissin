// Türkçe karakter düzeltmeleri için mapping
const turkishCharMap: { [key: string]: string } = {
  'a': 'a', 'e': 'e', 'i': 'i', 'o': 'o', 'u': 'u',
  'sogan': 'soğan', 'domates': 'domates', 'biber': 'biber',
  'patlican': 'patlıcan', 'kabak': 'kabak', 'havuc': 'havuç',
  'fasulye': 'fasulye', 'bezelye': 'bezelye', 'nohut': 'nohut',
  'mercimek': 'mercimek', 'pirinc': 'pirinç', 'bulgur': 'bulgur',
  'makarna': 'makarna', 'tavuk': 'tavuk', 'et': 'et',
  'balik': 'balık', 'yumurta': 'yumurta', 'peynir': 'peynir',
  'sut': 'süt', 'yogurt': 'yoğurt', 'salatalik': 'salatalık',
  'maydanoz': 'maydanoz', 'dereotu': 'dereotu'
};

// Yazım hatası düzeltmeleri için mapping
const commonMisspellings: { [key: string]: string } = {
  'dometes': 'domates',
  'biberr': 'biber',
  'patilcan': 'patlıcan',
  'havuc': 'havuç',
  'fasülye': 'fasulye',
  'nohud': 'nohut',
  'mercimak': 'mercimek',
  'pilav': 'pirinç',
  'bulgir': 'bulgur',
  'makarne': 'makarna',
  'tavug': 'tavuk',
  'yumurta': 'yumurta',
  'peynr': 'peynir',
  'süd': 'süt',
  'yoğort': 'yoğurt'
};

// Fuzzy matching için Levenshtein Distance hesaplama
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

// Ana normalizasyon fonksiyonu
export const normalizeIngredient = (input: string): string => {
  // Küçük harfe çevir ve boşlukları temizle
  let normalized = input.toLowerCase().trim();

  // Türkçe karakter düzeltmesi
  Object.entries(turkishCharMap).forEach(([key, value]) => {
    normalized = normalized.replace(new RegExp(key, 'g'), value);
  });

  // Yazım hatası düzeltmesi
  Object.entries(commonMisspellings).forEach(([key, value]) => {
    if (levenshteinDistance(normalized, key) <= 2) {
      normalized = value;
    }
  });

  return normalized;
};

// Kullanıcı girdisini malzeme listesine çevirme
export const parseIngredients = (input: string): string[] => {
  // Virgül veya boşlukla ayrılmış girdileri ayır
  const ingredients = input
    .split(/[,\s]+/)
    .map(i => i.trim())
    .filter(i => i.length > 0)
    .map(normalizeIngredient);

  // Tekrar eden malzemeleri kaldır
  return Array.from(new Set(ingredients));
}; 