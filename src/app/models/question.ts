export interface Question {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}