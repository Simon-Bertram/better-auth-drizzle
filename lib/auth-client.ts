import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react
import { auth } from "./auth";

export const authClient = createAuthClient({
  //you can pass client configuration here
});

/**
 * Server action for signing in with email and password
 * @param email - User's email address
 * @param password - User's password
 */
export const signIn = async (email: string, password: string) => {
  "use server";

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
  "use server";

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
  "use server";

  try {
    await auth.api.signOut();
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
