
export type Role = 'student' | 'teacher';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  title?: string;
  bio?: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  thumbnail: string;
  category: string;
  rating?: number;
  students?: number;
  duration?: string;
  status?: 'published' | 'draft';
}
