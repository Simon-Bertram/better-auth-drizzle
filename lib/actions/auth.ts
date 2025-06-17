import { auth } from "../auth";
import { headers } from "next/headers";

/**
 * Server action for signing in with email and password
 * @param email - User's email address
 * @param password - User's password
 */
export const signIn = async (email: string, password: string) => {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred during sign in",
    };
  }
};

/**
 * Server action for signing up with email and password
 * @param email - User's email address
 * @param password - User's password
 * @param name - User's full name
 */
export const signUp = async (email: string, password: string, name: string) => {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred during sign up",
    };
  }
};

/**
 * Server action for signing out
 */
export const signOut = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred during sign out",
    };
  }
};

/**
 * Server action for Magic link sign in
 * @param email - User's email address
 * @param callbackURL - URL to redirect to after successful sign in
 */
export const signInWithMagicLink = async (
  email: string,
  callbackURL?: string
) => {
  try {
    const response = await auth.api.signIn.magicLink({
      body: {
        email,
        callbackURL,
      },
    });

    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred during magic link sign in",
    };
  }
};

/**
 * Server action for verifying magic link
 * @param token - Magic link token from URL
 */
export const verifyMagicLink = async (token: string) => {
  try {
    const response = await auth.api.magicLink.verify({
      query: {
        token,
      },
    });

    return { success: true, data: response };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred during magic link verification",
    };
  }
};
