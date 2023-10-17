import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import GuestLayout from "@/components/common/guest-layout/GuestLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QSD",
  description: "Quick Stuff Delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GuestLayout>{children}</GuestLayout>
      </body>
    </html>
  );
}
