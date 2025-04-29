import { useParams, Link } from "react-router-dom";
import articlesData from "./data/articles.json";

function SingleArticle() {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold">Article Not Found</h2>
        <Link to="/articles" className="mt-4 text-blue-500 hover:underline">
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-50 to-white p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-green-700 mb-4">{article.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">{article.content}</p>
        <Link to="/articles" className="inline-block mt-8 text-green-600 hover:text-green-800">
          ← Back to Articles
        </Link>
      </div>
    </div>
  );
}

export default SingleArticle;
