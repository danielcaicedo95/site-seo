import { useState } from "react";

interface Article {
  title: string;
}

const useTrends = () => {
  const [trends, setTrends] = useState<string[]>([]);

  const fetchTrends = async (keyword: string) => {
    try {
      const response = await fetch(`/api/apinews?query=${encodeURIComponent(keyword)}`);
  
        const trendsData: { articles: Article[] } = await response.json();

      if (trendsData.articles) {
        setTrends(trendsData.articles.slice(0, 3).map(article => article.title));
      }
    } catch (error) {
      console.error("Error al obtener tendencias:", error);
    }
  };

  return { trends, setTrends: fetchTrends };
};

export default useTrends;
