# Cypress-checkpoint
Automated test suite for web application testing using Cypress.

## 📋 Prerequisites

- Node.js v20 or higher
- npm v10.3.0 or higher
- Chrome/Firefox/Edge browser
- VSCode

## 🚀 Getting Started

### Project Structure
```mermaid
cypress/
├── support/          # Custom commands and utilities
├── page_objects/     # Page object model classes
├── e2e/              # Test (spec) files
└── downloads/        # Auto-generated test downloads
config/
└── cypress.config.js # Cypress configuration
```

### 1. Clone the Repository
```bash
git clone https://github.com/humbertovf/cypress-checkpoint.git
```

### 2.Install dependencies
```bash
npm install
```

### 3. Run Tests
#### You can use any option listed
```bash
npm run cy:headless:chrome
```
```bash
npm run cy:open:chrome
```
```bash
npm run cy:open
```
