# 🚀 GradFE - Modern Next.js Application

A modern, production-ready Next.js application built with **Clean Architecture**, **TypeScript**, **Tailwind CSS**, and industry best practices.

## ✨ Features

- 🏗️ **Clean Architecture** - Well-organized, scalable project structure
- 🔷 **TypeScript** - Full type safety and excellent developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework with custom design system
- 🧩 **Shadcn/UI & Radix UI** - Modern, accessible component library
- 🌍 **Internationalization (i18n)** - Multi-language support
- 🧪 **Testing Suite** - Unit, integration, and E2E tests
- 📱 **Responsive Design** - Mobile-first, responsive layouts
- ⚡ **Performance Optimized** - Built with Next.js 15 and Turbopack
- 🔐 **Type-safe Environment Variables** - Structured configuration management
- 🔄 **CI/CD Pipeline** - Automated testing and deployment

## 🛠️ Tech Stack

### Core

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling

### UI Components

- **[Shadcn/UI](https://ui.shadcn.com/)** - Component library
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Jest](https://jestjs.io/)** - Unit testing
- **[Playwright](https://playwright.dev/)** - E2E testing
- **[Storybook](https://storybook.js.org/)** - Component development

### State Management & Data Fetching

- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation

## 📁 Project Structure

```
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
├── docs/                   # Documentation
├── env/                    # Environment configurations
│   ├── .env.development    # Development environment
│   └── .env.production     # Production environment
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (Button, Input, etc.)
│   │   └── layout/       # Layout components (Header, Footer)
│   ├── features/         # Feature-based modules
│   │   └── auth/         # Authentication feature
│   │       ├── components/   # Feature-specific components
│   │       ├── services/     # Business logic
│   │       └── index.ts      # Feature exports
│   ├── hooks/            # Custom React hooks
│   ├── i18n/             # Internationalization
│   │   └── locales/      # Translation files
│   ├── lib/              # Utility libraries
│   │   ├── config/       # Configuration management
│   │   └── utils/        # Helper functions
│   ├── services/         # API services and HTTP client
│   └── types/            # TypeScript type definitions
├── tests/                # Test files
│   ├── unit/            # Unit tests
│   ├── integration/     # Integration tests
│   └── setup.ts         # Test setup configuration
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── jest.config.js       # Jest configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🏗️ Architecture Overview

This project follows **Clean Architecture** principles:

### 📂 Feature-Based Organization

- Each feature is self-contained with its own components, services, and types
- Clear separation of concerns between UI, business logic, and data access
- Easy to test, maintain, and scale

### 🔄 Dependency Flow

```
UI Components → Features → Services → External APIs
```

### 📱 Responsive Design

- Mobile-first approach
- Breakpoint-based responsive design
- Accessible components following WCAG guidelines

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm 8.0 or later

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gradfe
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Copy environment template
   cp env/.env.development .env.local

   # Edit the environment variables
   nano .env.local
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run clean        # Clean build artifacts
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
```

### Testing

```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
npm run test:e2e     # Run E2E tests
npm run test:e2e:ui  # Run E2E tests with UI
```

### Storybook

```bash
npm run storybook       # Start Storybook dev server
npm run build-storybook # Build Storybook for production
```

## 🌍 Internationalization

The application supports multiple languages:

- **English (en)** - Default language
- **Vietnamese (vi)** - Secondary language

### Adding New Languages

1. Create translation files in `src/i18n/locales/[locale]/`
2. Update the `locales` array in `src/i18n/index.ts`
3. Import and use translations in components

### Usage Example

```typescript
import { useTranslations } from '@/i18n';

function MyComponent() {
  const { t } = useTranslations();
  return <h1>{t('common.welcome')}</h1>;
}
```

## 🧪 Testing Strategy

### Unit Tests

- **Location**: `tests/unit/`
- **Framework**: Jest + React Testing Library
- **Coverage**: Aim for 80%+ code coverage

### Integration Tests

- **Location**: `tests/integration/`
- **Purpose**: Test feature interactions

### E2E Tests

- **Framework**: Playwright
- **Purpose**: Test complete user workflows

### Running Tests

```bash
# Run all tests
npm run test

# Run specific test suites
npm run test -- --testPathPattern=components
npm run test -- --testPathPattern=features

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

### Environment Setup

1. **Development**

   ```bash
   cp env/.env.development .env.local
   npm run dev
   ```

2. **Production**
   ```bash
   cp env/.env.production .env.local
   npm run build
   npm run start
   ```

### Build Optimization

The build process includes:

- **Tree shaking** - Remove unused code
- **Code splitting** - Automatic bundle splitting
- **Image optimization** - Next.js image optimization
- **Bundle analysis** - Run `npm run analyze` to analyze bundle size

### CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. **Linting & Type Checking** - Ensures code quality
2. **Testing** - Runs unit and integration tests
3. **Building** - Creates production build
4. **E2E Testing** - Validates user workflows
5. **Deployment** - Deploys to staging/production environments

## 📊 Performance

### Core Web Vitals Optimization

- **LCP (Largest Contentful Paint)** - Optimized with image optimization and lazy loading
- **FID (First Input Delay)** - Minimized with code splitting and efficient event handlers
- **CLS (Cumulative Layout Shift)** - Prevented with proper image sizing and skeleton loading

### Bundle Size Monitoring

```bash
npm run analyze  # Analyze bundle size
```

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help:

1. **Check the [documentation](docs/)**
2. **Search existing [issues](../../issues)**
3. **Create a new [issue](../../issues/new)**

## 🎯 Roadmap

- [ ] Add authentication with NextAuth.js
- [ ] Implement real-time features with WebSockets
- [ ] Add dark mode support
- [ ] Integrate with CMS (Strapi/Sanity)
- [ ] Add PWA capabilities
- [ ] Implement advanced caching strategies

---

**Built with ❤️ by [Your Name](https://your-website.com)**
