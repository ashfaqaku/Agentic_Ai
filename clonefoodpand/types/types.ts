
export enum AppTab {
  HOME = 'home',
  ABOUT = 'about',
  NEWSROOM = 'newsroom',
  PARTNERS = 'partners',
  PANDA_ADS = 'panda-ads',
  CONTACT = 'contact',
  CAREERS = 'careers',
  INSIGHTS = 'insights',
  CASE_STUDIES = 'case-studies',
  RESOURCES = 'resources'

}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  imageUrl?: string;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: Date;
}
