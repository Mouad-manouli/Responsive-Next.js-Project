// components/ConditionalLayout.js
"use client";

import { usePathname } from 'next/navigation';
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith('/auth');

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}