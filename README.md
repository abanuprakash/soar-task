# **Soar Task Dashboard**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![Build Status](https://img.shields.io/github/actions/workflow/status/yourusername/projectname/ci.yml?branch=main)](https://github.com/yourusername/projectname/actions)  
[![GitHub Issues](https://img.shields.io/github/issues/yourusername/projectname.svg)](https://github.com/yourusername/projectname/issues)

---

## **Table of Contents**
1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Husky Setup](#husky-setup)
6. [Branch Strategy](#branch-strategy)
7. [Commit Guidelines](#commit-guidelines)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Overview**

A brief description of your project:  
**Soar Task Dashboard** is a [Next.js](https://nextjs.org/) application configured with the **Page Router**, **TypeScript**, **TailwindCSS**, and **shadcn/ui**. It is designed for [purpose, e.g., building modern web apps].

---

## **Features**
- **TypeScript** for static typing.
- **TailwindCSS** for rapid UI development.
- **shadcn/ui** for modular and customizable components.
- Dark mode with CSS variables.
- Preconfigured with **Husky** for Git hooks and linting.

---

## **Tech Stack**
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Component Library**: [shadcn/ui](https://shadcn.dev/)
- **Type Checking**: TypeScript
- **Node.js**: Requires Node.js 16.8 or later
- **Package Manager**: pnpm

---

## **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/abanuprakash/soar-task.git
   ```

2. Navigate to the project folder:

   ```bash
   cd soar-task
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open `http://localhost:3000` in your browser.

---

## **Husky Setup**

This project uses **Husky** to manage Git hooks for tasks like linting and formatting. Follow these steps to set up Husky:

1. Setup the Husky :
   ```bash
   pnpm prepare
   ```

2. Verify the Husky setup:
   ```bash
   git commit -m "test: verify husky setup"
   ```

---

## **Branch Strategy**

This project follows the **Gitflow Workflow**:

1. **`master`**: The production-ready branch. Contains stable code.
2. **`dev`**: The development branch. All features and bug fixes are merged here.
2. **`qa`**: Used for quality assurance testing.
2. **`staging`**: Mirrors master but allows final testing before production..
3. **Feature Branches**: For specific tasks or features (e.g., `feature/button-component`).
4. **Bugfix Branches**: For hotfixes or bug fixes (e.g., `bugfix/issue-123`).
5. **Release Branches**: For preparing a new production release (e.g., `release/v1.0.0`).

### **Branch Naming Convention**
- **Features**: `feature/[task-name]`
- **Bugfixes**: `bugfix/[issue-id]`
- **Releases**: `release/[version]`

---

## **Commit Guidelines**

This project follows the **Conventional Commit** standard. Format your commit messages as follows:

```
<type>(<scope>): <description>
```

### **Commit Types**
- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Changes to documentation.
- **style**: Code style changes (formatting, missing semicolons, etc.).
- **refactor**: Code refactoring without changing functionality.
- **test**: Adding or fixing tests.
- **chore**: Maintenance tasks (e.g., updating dependencies).

### **Examples**
- `feat(button): add primary button component`
- `fix(auth): resolve login issue`
- `docs(readme): update branch strategy section`
- `chore(deps): update tailwindcss to v3.0.0`

---

## **Contributing**

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a branch for your changes:  
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes with a descriptive message.
4. Push to your forked repository:
   ```bash
   git push origin feature/your-feature
   ```
5. Create a pull request on the **dev** branch.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

