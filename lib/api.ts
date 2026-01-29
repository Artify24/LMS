// This file will eventually connect to your backend API.
// For now, it provides mock data and simulated API calls.

export interface Course {
    id: string;
    title: string;
    instructor: string;
    progress: number;
    thumbnail: string;
    category: string;
    duration: string;
    students: number;
    rating: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'teacher';
    avatar: string;
    level: string;
    completedCourses: number;
    totalPoints: number;
}

export const mockUser: User = {
    id: 'u1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?u=alex',
    level: 'Premium Student',
    completedCourses: 12,
    totalPoints: 2450
};

export const mockCourses: Course[] = [
    {
        id: 'c1',
        title: 'Advanced UI/UX Design Masterclass',
        instructor: 'David Miller',
        progress: 68,
        thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
        category: 'Design',
        duration: '12h 30m',
        students: 1240,
        rating: 4.8
    },
    {
        id: 'c2',
        title: 'Full-stack Web Dev with Next.js',
        instructor: 'Sarah Chen',
        progress: 45,
        thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80',
        category: 'Tech',
        duration: '24h 15m',
        students: 3500,
        rating: 4.9
    },
    {
        id: 'c3',
        title: 'Data Science Basics',
        instructor: 'Michael Brown',
        progress: 12,
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&q=80',
        category: 'Data',
        duration: '18h 45m',
        students: 890,
        rating: 4.7
    },
    {
        id: 'c4',
        title: 'Modern Marketing Strategies',
        instructor: 'Emma Wilson',
        progress: 0,
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        category: 'Business',
        duration: '10h 20m',
        students: 2100,
        rating: 4.6
    }
];

export const apiService = {
    getCourses: async () => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockCourses;
    },
    getCourseById: async (id: string) => {
        await new Promise(resolve => setTimeout(resolve, 400));
        return mockCourses.find(c => c.id === id) || mockCourses[0];
    },
    getUser: async () => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return mockUser;
    },
};
