# 📁 Cây Thư Mục Chi Tiết - GradFE Project

```
grad/                                    # Root directory
├── .github/                            # GitHub specific files
│   └── workflows/                      # GitHub Actions workflows
│       └── ci-cd.yml                  # CI/CD pipeline configuration
├── .next/                             # Next.js build output (auto-generated)
├── docs/                              # Project documentation
├── env/                               # Environment configurations
│   ├── .env.development              # Development environment variables
│   └── .env.production               # Production environment variables
├── node_modules/                      # NPM dependencies (auto-generated)
├── public/                           # Static assets served by Next.js
│   ├── favicon.ico                   # Website favicon
│   ├── file.svg                      # File icon
│   ├── globe.svg                     # Globe icon
│   ├── next.svg                      # Next.js logo
│   ├── vercel.svg                    # Vercel logo
│   └── window.svg                    # Window icon
├── src/                              # Source code directory
│   ├── app/                          # Next.js App Router (pages & layouts)
│   │   ├── favicon.ico               # App favicon
│   │   ├── globals.css               # Global CSS styles
│   │   ├── layout.tsx                # Root layout component
│   │   └── page.tsx                  # Homepage component
│   ├── components/                   # Reusable UI components
│   │   ├── layout/                   # Layout-specific components
│   │   │   ├── footer.tsx            # Footer component
│   │   │   ├── header.tsx            # Header component
│   │   │   └── index.ts              # Layout components exports
│   │   ├── ui/                       # Base UI components
│   │   │   ├── button.tsx            # Button component
│   │   │   ├── input.tsx             # Input component
│   │   │   └── index.ts              # UI components exports
│   │   └── index.ts                  # All components exports
│   ├── features/                     # Feature-based modules (Clean Architecture)
│   │   ├── auth/                     # Authentication feature
│   │   │   ├── components/           # Auth-specific components
│   │   │   │   ├── login-form.tsx    # Login form component
│   │   │   │   └── index.ts          # Auth components exports
│   │   │   ├── services.ts           # Auth business logic & API calls
│   │   │   └── index.ts              # Auth feature exports
│   │   └── index.ts                  # All features exports
│   ├── hooks/                        # Custom React hooks
│   │   └── index.ts                  # Custom hooks (useDebounce, useLocalStorage, etc.)
│   ├── i18n/                         # Internationalization
│   │   ├── locales/                  # Translation files
│   │   │   ├── en/                   # English translations
│   │   │   │   └── common.json       # Common English terms
│   │   │   └── vi/                   # Vietnamese translations
│   │   │       └── common.json       # Common Vietnamese terms
│   │   └── index.ts                  # i18n configuration & utilities
│   ├── lib/                          # Utility libraries & configurations
│   │   ├── config/                   # Configuration management
│   │   ├── utils/                    # Helper functions & utilities
│   │   │   └── index.ts              # Utility functions (cn, formatCurrency, etc.)
│   │   ├── config.ts                 # App configuration
│   │   └── index.ts                  # Lib exports
│   ├── services/                     # API services & HTTP client
│   │   ├── httpClient.ts             # HTTP client class & API utilities
│   │   └── index.ts                  # Services exports
│   └── types/                        # TypeScript type definitions
│       └── index.ts                  # Global type definitions
├── tests/                            # Test files & configurations
│   ├── integration/                  # Integration tests
│   ├── unit/                         # Unit tests
│   │   ├── components/               # Component tests
│   │   │   └── button.test.tsx       # Button component tests
│   │   ├── features/                 # Feature tests
│   │   │   └── auth.test.tsx         # Auth feature tests
│   │   ├── button.test.tsx           # Legacy button test (to be removed)
│   │   └── utils.test.ts             # Utility functions tests
│   └── setup.ts                     # Jest test setup configuration
├── .eslintrc.js                     # ESLint configuration
├── .gitignore                       # Git ignore rules
├── .prettierrc                      # Prettier configuration
├── eslint.config.mjs                # ESLint modern configuration
├── jest.config.js                   # Jest testing configuration
├── next-env.d.ts                    # Next.js TypeScript definitions
├── next.config.ts                   # Next.js configuration
├── package.json                     # NPM package configuration
├── postcss.config.mjs               # PostCSS configuration
├── README.md                        # Project documentation
├── tailwind.config.ts               # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

## 📋 Giải Thích Chi Tiết Từng Folder/File

### 🎯 Root Level Files

- **package.json**: Quản lý dependencies, scripts, metadata của project
- **tsconfig.json**: Cấu hình TypeScript với path aliases (@/components, @/features...)
- **next.config.ts**: Cấu hình Next.js (Turbopack, optimization...)
- **tailwind.config.ts**: Cấu hình Tailwind CSS (colors, fonts, animations...)
- **eslint.config.mjs**: Cấu hình ESLint rules và coding standards
- **.prettierrc**: Cấu hình code formatting
- **jest.config.js**: Cấu hình testing framework

### 🏗️ Architecture Folders

#### `src/app/` - Next.js App Router

- **Chức năng**: Quản lý routing, layouts, và pages của ứng dụng
- **File chính**:
  - `layout.tsx`: Root layout với Header/Footer
  - `page.tsx`: Homepage component
  - `globals.css`: Global CSS styles

#### `src/components/` - UI Components

- **Chức năng**: Các component UI tái sử dụng được
- **Cấu trúc**:
  - `ui/`: Base components (Button, Input, Modal...)
  - `layout/`: Layout components (Header, Footer, Sidebar...)
- **Đặc điểm**: Không chứa business logic, chỉ UI thuần

#### `src/features/` - Feature Modules (Clean Architecture)

- **Chức năng**: Các module chức năng độc lập theo Clean Architecture
- **Cấu trúc mỗi feature**:
  - `components/`: Components riêng cho feature này
  - `services.ts`: Business logic và API calls
  - `types.ts`: Types riêng cho feature
  - `hooks.ts`: Custom hooks cho feature
- **Ưu điểm**: Dễ maintain, test, và scale

#### `src/services/` - API Layer

- **Chức năng**: Quản lý HTTP requests và API communication
- **File chính**:
  - `httpClient.ts`: HTTP client class với error handling
  - Các service files cho từng domain

#### `src/lib/` - Utilities & Configuration

- **Chức năng**: Utility functions, configurations, helpers
- **Cấu trúc**:
  - `config/`: App configuration management
  - `utils/`: Helper functions (format, validation...)
  - `constants.ts`: App constants

#### `src/hooks/` - Custom React Hooks

- **Chức năng**: Custom hooks tái sử dụng
- **Examples**: useDebounce, useLocalStorage, useApi...

#### `src/types/` - TypeScript Definitions

- **Chức năng**: Global TypeScript types và interfaces
- **Cấu trúc**: API types, UI types, utility types

#### `src/i18n/` - Internationalization

- **Chức năng**: Hỗ trợ đa ngôn ngữ
- **Cấu trúc**:
  - `locales/`: Translation files cho từng ngôn ngữ
  - `index.ts`: i18n configuration và utilities

### 🧪 Testing Structure

#### `tests/` - Test Files

- **unit/**: Unit tests cho components, functions
- **integration/**: Integration tests cho features
- **setup.ts**: Jest configuration và test utilities

### 🚀 DevOps & Configuration

#### `.github/workflows/` - CI/CD

- **ci-cd.yml**: GitHub Actions pipeline cho testing và deployment

#### `env/` - Environment Management

- **.env.development**: Development environment variables
- **.env.production**: Production environment variables

### 📁 Auto-generated Folders

- **.next/**: Next.js build output
- **node_modules/**: NPM dependencies
- **coverage/**: Test coverage reports (khi chạy tests)

## 🎯 Clean Architecture Benefits

1. **Separation of Concerns**: Mỗi layer có trách nhiệm riêng biệt
2. **Testability**: Dễ dàng viết tests cho từng layer
3. **Maintainability**: Code dễ maintain và debug
4. **Scalability**: Dễ dàng thêm features mới
5. **Reusability**: Components và utilities có thể tái sử dụng

## 🔄 Data Flow

```
UI Components → Features → Services → External APIs
     ↓              ↓           ↓
  Presentation → Business → Data Access
```

## 📦 Path Aliases

```typescript
// Configured in tsconfig.json
"@/*": ["./src/*"]
"@/components/*": ["./src/components/*"]
"@/features/*": ["./src/features/*"]
"@/lib/*": ["./src/lib/*"]
"@/hooks/*": ["./src/hooks/*"]
"@/types/*": ["./src/types/*"]
"@/services/*": ["./src/services/*"]
"@/i18n/*": ["./src/i18n/*"]
```

## 🛠️ Development Workflow

1. **Feature Development**: Tạo mới trong `src/features/`
2. **UI Components**: Thêm vào `src/components/ui/`
3. **Business Logic**: Implement trong `services/`
4. **Testing**: Viết tests trong `tests/`
5. **Types**: Định nghĩa trong `src/types/`
6. **Styling**: Sử dụng Tailwind CSS classes

Cấu trúc này đảm bảo project dễ dàng scale, maintain và collaborate trong team lớn.
