import { http } from "../lib/http";

/**
 * Recupera NavigationCards públicas por 'page' (enum en backend)
 * GET /api/navigation-card/public/by-page/:page
 */
export async function getNavigationCardsByPage(page) {
  if (!page) throw new Error("page is required");
  const { data } = await http.get(`/api/navigation-card/public/by-page/${encodeURIComponent(page)}`);
  return data; // [{_id, title, imageUrl, page, ...}]
}

/**
 * (Opcional) Lista pública genérica si existe
 * GET /api/navigation-card/public/navigation-cards
 */
export async function listNavigationCardsPublic(params = {}) {
  const { data } = await http.get(`/api/navigation-card/public/navigation-cards`, { params });
  return data;
}
