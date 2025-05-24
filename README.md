# 🧩 Front-End Developer Design System (React + Vite + Storybook)

This is a modular, scalable **Design System** built using **React**, **TypeScript**, and **TailwindCSS**, with **Storybook** for documentation. It includes foundational typography, data entry, and feedback components.

## 🌐 Hosted Versions

- 🔗 **Main App (Vite + React)**: Deployed separately for user-facing component usage.
- 🔗 **Storybook (Chromatic or Vercel)**: Deployed for interactive component documentation.

---

## 🚀 Project Overview

This assignment demonstrates:

- Scalable and accessible component architecture
- Responsive theming and design tokens
- Interaction handling and component state management
- Storybook documentation best practices

---

## 🔧 Tech Stack

- ⚛️ React + Vite
- 🟦 TypeScript
- 💨 TailwindCSS (Theming & Utility-First Styling)
- 📘 Storybook (Component Documentation)
- 🌗 Light/Dark Mode Support

---

## 📦 Components Included

### 🧱 Typography System

| Component         | Description                                      |
|------------------|--------------------------------------------------|
| `H1`–`H6`         | Semantic headings with responsive styles         |
| `Paragraph`       | Base text content with scalable font size       |
| `Label`           | Associated text for inputs or context           |
| `Caption`         | Smaller, supportive text                        |
| `HelperText`      | Descriptive guidance for form elements          |

- Custom font-size, weight, letter-spacing tokens
- Responsive behavior and contrast-friendly theming

---

### 🧩 Data Entry Components

| Component     | Supported Features                                                |
|--------------|--------------------------------------------------------------------|
| **Text Input** | Hover, focus, error, disabled states; icon support; sizes        |
| **Checkbox**   | Accessible ARIA roles, keyboard support, focus rings             |

- Each component supports variants and themes.
- States: default, focus, error, disabled
- Built with a11y-first approach

---

### ⚠ Feedback Components

| Component       | Features                                                               |
|----------------|-------------------------------------------------------------------------|
| **Toast**       | Info, Success, Error, Warning variants; auto-dismiss; icon toggle      |
| **Notification**| Banner-style alert with optional dismiss and styling variants          |

- Configurable position (top-right, bottom-left, etc.)
- Mount/unmount logic for clean UX
- ARIA roles and keyboard navigable

---

## 📘 Storybook Documentation

Each component includes:

- ✅ Name + Description
- ✅ Props API with types
- ✅ States (default, hover, focus, error, etc.)
- ✅ All Variants (sizes, icons, theming)
- ✅ Accessibility Notes (ARIA, keyboard behavior)
- ✅ Responsive + Dark/Light Mode Support
- ✅ Usage Examples & Best Practices

---

## 📂 Folder Structure

```
src/
├── components/
│ ├── Typography/
│ │ ├── Heading.tsx
│ │ ├── Paragraph.tsx
│ │ └── ...
│ ├── TextInput/
│ ├── Checkbox/
│ ├── Toast/
│ └── Notification/
├── App.tsx
├── main.tsx
└── index.css

stories/
├── Typography.stories.tsx
├── TextInput.stories.tsx
└── ...

````


---

## 🧪 Run Locally

```bash
# Install dependencies
npm install

# Start the main React app
npm run dev

# Launch Storybook
npm run storybook

```

----

## 🌍 Deployment

| App       | Link                           |
| --------- | ------------------------------ |
| Main App  | \[Your deployed Vite App URL]  |
| Storybook | \[Your deployed Storybook URL] |



---

## 📸 Screenshots (Optional)
- Typography in Light and Dark mode
- Component States (Hover, Focus, Error)
- Storybook interface preview
- Toast behavior on button click

---


## Submission Checklist
 - ✅ GitHub repository with modular structure
 - ✅ Hosted Storybook with all states documented
 - ✅ Components with accessible, responsive, themed UI
 - ✅ README with usage guide and architecture

 ---

## 📬 Feedback & Contribution
This system was built as part of a Front-End Developer evaluation. Feedback and suggestions are welcome!

Designed with ❤️ using React + TailwindCSS + Storybook