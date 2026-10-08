export const FALLBACK_ROAD_IMAGE = 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&auto=format&fit=crop&q=80';

export const getImageUrl = (url) => {
  if (!url || typeof url !== 'string') return FALLBACK_ROAD_IMAGE;
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${cleanBase}${cleanPath}`;
};

export const handleImageError = (e, fallback = FALLBACK_ROAD_IMAGE) => {
  if (e?.target && e.target.src !== fallback) {
    e.target.onerror = null;
    e.target.src = fallback;
  }
};
