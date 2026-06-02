export interface Artist {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  posterImage: string;
  social: {
    instagram: string;
    tiktok: string;
    youtube: string;
  };
  showName: string;
  showDescription: string;
  videoUrl: string;
  dates: Array<{
    date: string;
    time: string;
    venue: string;
    location: string;
    status: string;
    price: string;
    link: string;
  }>;
  socialContent: Array<{
    type: string;
    thumbnail: string;
    platform: string;
    views: string;
  }>;
  achievements?: Array<string>;
  reviews?: Array<{
    author: string;
    quote: string;
  }>;
  stats?: {
    shows?: number;
    cities?: number;
    followers?: number;
  };
}