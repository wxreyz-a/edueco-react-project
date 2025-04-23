export function getCanonicalUrl(pathname) {
  const baseUrl = "https://edueco.fr";

  // Remove query parameters and hash fragments
  let cleanPath = pathname.split('?')[0].split('#')[0];

  // Remove trailing slash if any, except for root "/"
  cleanPath = cleanPath.endsWith("/") && cleanPath !== "/" ? cleanPath.slice(0, -1) : cleanPath;

  return baseUrl + cleanPath;
}
