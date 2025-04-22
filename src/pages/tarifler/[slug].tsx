import { useParams, Link } from 'react-router-dom';
import { allRecipes } from '../../data/allRecipes';

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? allRecipes.find(recipe => 
    recipe.name.toLowerCase().replace(/\s+/g, '-') === slug
  ) : undefined;

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Tarif Bulunamadı</h1>
            <p className="text-gray-600 mb-8">Üzgünüz, aradığınız tarif mevcut değil.</p>
            <Link 
              to="/"
              className="inline-block bg-[#4F46E5] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#4338CA] transition-colors duration-300"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center text-[#4F46E5] hover:text-[#4338CA] mb-8 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
          <span className="ml-2">Ana Sayfaya Dön</span>
        </Link>

        {/* Recipe Content */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          {/* Recipe Title */}
          <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
            {recipe.name}
          </h1>

          {/* Ingredients */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Malzemeler</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[#4F46E5] rounded-full mr-3"></span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Hazırlanışı</h2>
            <div className="prose prose-lg max-w-none">
              {Array.isArray(recipe.instructions) 
                ? recipe.instructions.map((step: string, index: number) => (
                    <p key={index} className="text-gray-700 mb-4">
                      {step}
                    </p>
                  ))
                : recipe.instructions.split('\n').map((step: string, index: number) => (
                    <p key={index} className="text-gray-700 mb-4">
                      {step}
                    </p>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail; 