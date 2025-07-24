import { redirect } from 'next/navigation';

/**
 * The root page of the application.
 * Its sole purpose is to redirect users to the login screen,
 * which is the starting point of our defined user flow.
 */
export default function RootPage() {
  redirect('/login');

  // Note: The redirect function throws an error to stop rendering,
  // so nothing below this line will be executed.
  // Returning null is a good practice for components that don't render UI.
  return null;
}