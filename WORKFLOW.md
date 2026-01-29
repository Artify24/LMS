# LMS Pro: Project Architecture & Workflow

This document outlines the operational flow, technical standards, and data structures for the LMS Pro platform.

---

## 👥 1. User Personas & Navigation Flows

### 🎓 Student Flow
The student journey focuses on **consumption, engagement, and progress tracking**.
1.  **Landing Page**: Discovery of courses and platform value.
2.  **Login/Signup**: Authentication with role selection.
3.  **Dashboard (`/student`)**: High-level overview of current progress, "Resume" shortcut, and quick stats.
4.  **Course Catalog (`/student/courses`)**: Browsing available content with filters.
5.  **Course Player (`/player/[id]`)**: Focused learning environment with video player, lesson list, and downloadable resources.
6.  **Progress (`/student/progress`)**: Detailed analytics of their learning journey.

### 👨‍🏫 Teacher Flow
The teacher journey focuses on **content creation, management, and student analytics**.
1.  **Teacher Dashboard (`/teacher`)**: High-level overview of revenue, total students, and recent course performance.
2.  **Course Management (`/teacher/courses`)**: CRUD operations for courses.
3.  **Analytics (`/teacher/analytics`)**: Deep dive into student engagement and drop-off rates.
4.  **Student Management (`/teacher/students`)**: List of enrolled students and their individual progress.

---

## 🛠 2. Developer Workflow

### Component Standards
-   **Pure Layouts**: Use `layout.tsx` for persistent sidebars and headers.
-   **UI Atomic Components**: Keep `components/ui` for primitive elements (Buttons, Cards, Badges).
-   **API Isolation**: Never call `fetch` directly in components. Always use `apiService` in `lib/api.ts`.

### Styling Guidelines
-   **Utility First**: Use Tailwind CSS for 90% of styling.
-   **Glassmorphism**: Use the `.glass` class for cards and `.glass-header` for fixed navs.
-   **Opacity Modifiers**: Use `bg-primary/20` instead of hardcoding light colors to maintain consistency.
-   **Color Variables**: Use the defined RGB variables in `globals.css` to allow Tailwind opacity modifiers to work (`rgb(var(--primary) / <alpha-value>)`).

---

## 📊 3. Data Structures (Backend Integration)

When connecting to a real backend (Node.js/Python), this is the shape of data expected:

### Course Object (Abstract/List)
```json
{
  "id": "uuid",
  "title": "Course Title",
  "instructor": "Name",
  "thumbnail": "URL",
  "progress": 45,
  "students": 1200,
  "rating": 4.9,
  "category": "Design",
  "status": "published | draft"
}
```

### User Object
```json
{
  "id": "uuid",
  "name": "Full Name",
  "email": "email@example.com",
  "role": "student | teacher",
  "avatar": "URL",
  "level": "Pro | Free",
  "stats": {
    "completed": 12,
    "points": 2450
  }
}
```

### Full Course (For Player)
```json
{
  "id": "uuid",
  "title": "Title",
  "sections": [
    {
      "title": "Section Name",
      "items": [
        { "title": "Lesson 1", "video_url": "URL", "duration": "12:00", "type": "video" }
      ]
    }
  ]
}
```

---

## 🚀 4. How to Develop a New Feature

1.  **Define Route**: Create folder in `app/student/` or `app/teacher/`.
2.  **Add API Mock**: Add a new method in `lib/api.ts` with mock data.
3.  **Build Interface**: Use existing `Card`, `Badge`, and `Button` components.
4.  **Apply Layout**: Most pages automatically inherit from `student/layout.tsx` or `teacher/layout.tsx`.
5.  **Test Responsiveness**: Always verify on mobile view using browser dev tools.
