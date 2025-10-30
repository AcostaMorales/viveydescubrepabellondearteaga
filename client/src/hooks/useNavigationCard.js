import { useEffect, useState } from "react";
import { getNavigationCardsByPage } from "../services/navigationCard.service";

export function useNavigationCards(page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(!!page);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (!page) return;
    setLoading(true);
    getNavigationCardsByPage(page)
      .then((res) => mounted && setData(res))
      .catch((e) => mounted && setError(e))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [page]);

  return { data, loading, error };
}
