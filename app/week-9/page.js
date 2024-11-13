"use client"; // Mark this component as a client component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import { useUserAuth } from "../week-9/_utils/auth-context";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/week-9'); // Redirect to the landing page if not logged in
    }
  }, [user, router]);

  if (!user) {
    return null; // Do not render the shopping list page if not logged in
  }

  return (
    <main>
      <h1>Shopping List</h1>
      {/* Render the shopping list here */}
    </main>
  );
}