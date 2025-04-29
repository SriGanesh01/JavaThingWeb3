import { Link } from "react-router-dom";
import articlesData from "./data/articles.json";

function Articles() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-100 to-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-green-800">Therapy & Mind-Calming Articles 📚</h1>

      <div className="w-full max-w-xl space-y-6">
        {articlesData.map(article => (
          <Link
            key={article.id}
            to={`/articles/${article.id}`}
            className="block bg-white p-6 rounded-xl shadow-md hover:bg-green-50 transition-all"
          >
            <h2 className="text-xl font-semibold text-green-700">{article.title}</h2>
            <p className="text-sm text-gray-500 mt-2">Read More →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Articles;
