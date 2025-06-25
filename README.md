# 🧑‍💼 Employee Task Management System

A role-based task management system built using React and Tailwind CSS. This application enables an admin to assign tasks to employees and monitor their progress, while employees can actively manage their task status. It simulates real-time task workflows in a frontend-only environment using localStorage and React Context.

---

## 🎯 Aim

To create a responsive and role-driven employee task platform that helps simulate real-world task workflows without needing a backend. The system is designed to support efficient task delegation and tracking between admins and employees in a simplified frontend environment.

---

## 🥅 Goal

- Build a dynamic web application using React with TailwindCSS for styling.
- Leverage React Context API and localStorage for persistent global state management.
- Enable real-time status transitions for tasks through seamless UI interactions.

---

## 🚀 Features

### 👤 Admin Panel
- Secure login with predefined credentials.
- Task creation and assignment to employees (via first name).
- Automatic task status tracking for:
  - 🆕 New Tasks
  - 🔄 Active Tasks
  - ✅ Completed Tasks
  - ❌ Failed Tasks
- Clean form with validation and category/date inputs.
- Instant updates reflected across task status and UI.

### 🧑‍💼 Employee Panel
- Login with email and password.
- View tasks assigned by the admin.
- Accept new tasks (updates task status to active).
- Mark active tasks as either completed or failed.
- Status transitions are reflected immediately in the UI and persisted in localStorage.

### 🧩 UI & UX
- Fully responsive layout using Tailwind CSS.
- Each task status rendered with distinct visual cards:
  - **Blue** for New Tasks
  - **Yellow** for Active Tasks
  - **Green** for Completed Tasks
  - **Red** for Failed Tasks
- Smooth state transitions with dynamic card rendering.

---

## 🛠️ Tech Stack

| Technology       | Purpose                                             |
|------------------|-----------------------------------------------------|
| React.js         | Building the user interface and component logic     |
| Tailwind CSS     | Fast and customizable styling                       |
| React Context API| Global state management for authentication and data |
| localStorage API | Persistent data storage without a backend           |
| Vite             | Lightning-fast dev server and build tooling         |

---

## ✅ Advantages

- 🔐 No backend required — runs entirely in the browser.
- ⚡ Instant state updates using Context and `localStorage`.
- 📱 Mobile responsive with adaptive UI design.
- 💡 Modular code structure for future scalability.
- 🧠 Educational — great for understanding React hooks and app state flows.

---

## 🖼️ Screenshots

> _Replace these links with your actual screenshot URLs_

- **Admin Dashboard – Task Assignment**  
  ![Admin Dashboard](https://your-screenshot-link.com/admin-dashboard.png)

- **Employee View – Task Lists**  
  ![Employee Dashboard](https://your-screenshot-link.com/employee-dashboard.png)

---

## 🎥 Demo Video

> _Upload and paste your video link below_

🎬 [Watch the Demo Video](https://your-demo-video-link.com)

---

## 🌐 Live Deployment

> _Add your Netlify/Vercel link here_

🔗 [Visit Live Site](https://your-live-site-link.com)

