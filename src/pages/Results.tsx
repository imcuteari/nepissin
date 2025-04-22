import { useSearchParams, Link } from 'react-router-dom';
import { allRecipes } from '../data/allRecipes';
import { generateSlug } from '../utils/generateSlug';

const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  // Türkçe karakterleri normalize et
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

  const searchTerms = query.toLowerCase().split(',').map(term => term.trim());

  const matchedRecipes = allRecipes.map(recipe => {
    // Tam eşleşme kontrolü
    const hasExactMatch = (text: string, term: string) => {
      const normalizedText = normalizeText(text);
      const normalizedTerm = normalizeText(term);
      return normalizedText === normalizedTerm || 
             normalizedText.includes(` ${normalizedTerm} `) ||
             normalizedText.startsWith(`${normalizedTerm} `) ||
             normalizedText.endsWith(` ${normalizedTerm}`);
    };

    // Tarif adında eşleşme kontrolü
    const normalizedName = normalizeText(recipe.name);
    const nameExactMatches = searchTerms.some(term => hasExactMatch(recipe.name, term));
    const namePartialMatches = searchTerms.some(term => 
      normalizedName.includes(normalizeText(term))
    );

    // Malzemelerde eşleşme kontrolü
    const matchedIngredients = recipe.ingredients.filter(ingredient => {
      const normalizedIngredient = normalizeText(ingredient);
      return searchTerms.some(term => {
        const normalizedTerm = normalizeText(term);
        return hasExactMatch(ingredient, term) || 
               normalizedIngredient.includes(normalizedTerm);
      });
    });

    // Kategoride eşleşme kontrolü
    const categoryMatches = recipe.category && searchTerms.some(term =>
      normalizeText(recipe.category).includes(normalizeText(term))
    );

    // Talimatlarda eşleşme kontrolü
    const instructions = Array.isArray(recipe.instructions) 
      ? recipe.instructions.join(' ') 
      : recipe.instructions;
    const instructionsMatches = searchTerms.some(term =>
      normalizeText(instructions).includes(normalizeText(term))
    );

    // Eşleşme yüzdesini hesapla
    const ingredientMatchPercentage = matchedIngredients.length / recipe.ingredients.length;
    const totalMatchPercentage = Math.round(
      (nameExactMatches ? 0.5 : (namePartialMatches ? 0.3 : 0)) + // Tam eşleşme %50, kısmi eşleşme %30
      (categoryMatches ? 0.1 : 0) + // Kategori %10
      (ingredientMatchPercentage * 0.3) + // Malzemeler %30
      (instructionsMatches ? 0.1 : 0) // Talimatlar %10
    * 100);

    // Sadece anlamlı eşleşmeleri göster (en az %5 eşleşme)
    if (totalMatchPercentage < 5) {
      return null;
    }
    
    return {
      ...recipe,
      matchPercentage: totalMatchPercentage,
      missingIngredients: recipe.ingredients.filter(ingredient =>
        !searchTerms.some(term => 
          normalizeText(ingredient).includes(normalizeText(term))
        )
      )
    };
  })
  .filter(recipe => recipe !== null) // null olanları filtrele
  .sort((a, b) => b.matchPercentage - a.matchPercentage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/"
            className="inline-flex items-center text-[#4F46E5] hover:text-[#4338CA] mb-6 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
            <span className="ml-2">Aramaya Dön</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            "{query}" için Tarifler
          </h1>
          <p className="text-gray-600">
            {matchedRecipes.length} tarif bulundu
          </p>
        </div>

        {matchedRecipes.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {matchedRecipes.map(recipe => (
              <div 
                key={recipe.id} 
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Recipe Name */}
                  <h2 className="text-4xl font-bold text-[#4F46E5] text-center mb-6">{recipe.name}</h2>

                  {/* Match Percentage */}
                  <div className="flex justify-center mb-6">
                    <div className={`
                      px-4 py-2 rounded-full text-sm font-medium
                      ${recipe.matchPercentage >= 80 ? 'bg-green-100 text-green-800' :
                        recipe.matchPercentage >= 50 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}
                    `}>
                      %{recipe.matchPercentage} Uyumlu
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-700 mb-2">Malzemeler:</h3>
                    <div className="flex flex-wrap gap-2">
                      {recipe.ingredients.map((ingredient, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm
                            ${recipe.missingIngredients.includes(ingredient) 
                              ? 'bg-red-50 text-red-600 border border-red-200'
                              : 'bg-green-50 text-green-600 border border-green-200'
                            }`}
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Missing Ingredients */}
                  {recipe.missingIngredients.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-medium text-red-600 mb-2">
                        Eksik Malzemeler ({recipe.missingIngredients.length}):
                      </h3>
                      <ul className="list-disc list-inside text-red-500 space-y-1">
                        {recipe.missingIngredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* View Recipe Button */}
                  <Link 
                    to={`/tarifler/${generateSlug(recipe.name)}`}
                    className="w-full bg-[#4F46E5] text-white py-3 rounded-xl font-medium hover:bg-[#4338CA] transform hover:scale-105 transition-all duration-300 block text-center"
                  >
                    Tarifi Gör
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl shadow-lg">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Tarif Bulunamadı
            </h2>
            <p className="text-gray-600 mb-8">
              Üzgünüz, bu malzemelerle yapabileceğin bir tarif bulamadık.
            </p>
            <Link 
              to="/"
              className="inline-block bg-[#4F46E5] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#4338CA] transform hover:scale-105 transition-all duration-300"
            >
              Başka Malzemelerle Dene
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results; 