export interface ConversationProps {
  id: string;
  title: string;
  selectedModel: string;
  createdAt: number;
  updatedAt: number;
  providerId: number;
}
export interface ProviderProps {
  id: number;
  name: string;
  title?: string;
  desc?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  models: string[];
}
