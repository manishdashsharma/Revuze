# Contributing to Revuze

Thank you for your interest in contributing to **Revuze**! This guide will assist you in setting up the project, understanding the workflow, and making effective contributions.

## Table of Contents

1. [Prerequisites](#prerequisites)  
2. [Setting Up the Project](#setting-up-the-project)  
3. [Branching Strategy](#branching-strategy)  
4. [Commit Message Guidelines](#commit-message-guidelines)  
5. [Running the Project](#running-the-project)  
6. [Contributing Code](#contributing-code)  
7. [Pull Request Process](#pull-request-process)  
8. [Code of Conduct](#code-of-conduct)  

---

## Prerequisites

Before contributing, ensure you have the following installed:

- **Node.js** (version 14 or higher recommended)  
- **Docker** (with Docker Compose)  
- **Git**  
- A **Datadog** account for monitoring setup (optional for local development)

Additionally, verify that your local development environment meets these requirements:

- Ensure **Husky** is properly configured for pre-commit hooks (run `npm install` to set this up).  
- Use **ESLint** for code linting and **Prettier** for code formatting.

---

## Setting Up the Project

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/manishdashsharma/Revuze.git
   cd revuze
   ```

2. **Create Environment Files**  
   Depending on your intended environment, create the appropriate `.env` files:  
   - `.env.development` (for local development)  
   - `.env.production` (for production deployment) 
   - `.env.example` (as a template)

3. **Ensure Docker Compose Files Exist**  
   - `docker-compose.dev.yml` (for development)  
   - `docker-compose.prod.yml` (for production)  

---

## Branching Strategy

We follow a straightforward branching strategy to maintain consistent development and deployment:

- **main**: The production-ready code.  
- **develop**: The active development branch.  
- **feature/your-feature-name**: Branches for new features or enhancements.  
- **fix/your-fix-name**: Branches for bug fixes.  
- **hotfix/your-hotfix-name**: Branches for urgent fixes merged directly into `main`.

---

## Commit Message Guidelines

We adhere to the **Conventional Commits** format for writing commit messages:

```bash
<type>: <subject>
```

### Types:

- **feat**: A new feature.  
- **fix**: A bug fix.  
- **docs**: Documentation changes.  
- **style**: Changes that do not affect code logic (formatting, missing semicolons, etc.).  
- **refactor**: Code changes that neither fix a bug nor add a feature.  
- **test**: Adding or updating tests.  
- **chore**: Changes to build processes, tools, or dependencies.

Example commit message:
```bash
feat: add feedback widget embed code generator
```

---

## Running the Project

Use the provided `run.sh` script to manage the project in different environments.

1. **Run the script** without arguments to start in interactive mode:
   ```bash
   ./run.sh
   ```

2. **Select the environment**:
   - **1** for Development  
   - **2** for Production  

3. **Choose the services** you want to run:
   - **1** for All (rebuilds and starts everything from scratch)  
   - **2** for Server only  
   - **3** for Client only  
   - **4** for Server & Client  

4. To stop and clean up all containers, images, and volumes, use the `cleanup` option from the menu or run:
   ```bash
   ./run.sh cleanup
   ```

---

## Contributing Code

1. Create a new branch for your feature or fix:  
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes while adhering to existing code style and guidelines.

3. Run pre-commit hooks to ensure code quality:  
   ```bash
   npm run lint
   npm run test
   ```

4. Commit your changes using the [Commit Message Guidelines](#commit-message-guidelines). Example:  
   ```bash
   git commit -m "feat: add feedback export functionality"
   ```

5. Push your branch to your forked repository:  
   ```bash
   git push origin feature/your-feature-name
   ```

---

## Pull Request Process

1. Go to the main repository and open a pull request from your branch.
2. Ensure your pull request includes:
   - A clear description of the changes made.
   - The issue it addresses (if applicable).
   - Any additional context or screenshots that may assist reviewers.

3. Once submitted, your pull request will be reviewed by a maintainer.
4. You may be asked to make changes based on feedback.
5. Once approved, your pull request will be merged into the `develop` branch.

---

## Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](https://github.com/manishdashsharma/Revuze/blob/main/CODE_OF_CONDUCT.md). Please be respectful, inclusive, and collaborative when contributing to this project.

---

## License

By contributing to **Revuze**, you agree that your contributions will be licensed under the MIT License.

---

## Contact

For any questions or further clarification, feel free to open an issue or contact us at [mdashsharm95@gmail.com](mailto:mdashsharm95@gmail.com).
