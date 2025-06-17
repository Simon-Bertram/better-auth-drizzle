import "@testing-library/jest-dom";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  usePathname() {
    return "";
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock next/headers
jest.mock("next/headers", () => ({
  headers() {
    return new Headers();
  },
  cookies() {
    return new Map();
  },
}));

// Mock better-auth
jest.mock("better-auth", () => ({
  betterAuth: jest.fn(() => ({
    api: {
      signIn: {
        magicLink: jest.fn(),
      },
      magicLink: {
        verify: jest.fn(),
      },
      signInEmail: jest.fn(),
      signUpEmail: jest.fn(),
      signOut: jest.fn(),
    },
  })),
}));
