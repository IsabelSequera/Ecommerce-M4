import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="bg-gray-100 border-b-2 border-gray-200">
          <div className="container mx-auto py-4 px-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
                  <Link href="/cars">
                    <p className="text-gray-800 hover:text-gray-900 font-medium">Cars</p>
                  </Link>
                  <Link href="/dashboard/orders">
                    <p className="text-gray-800 hover:text-gray-900 font-medium">Orders</p>
                  </Link>
              </div>
          </div>
        </div>
        {children}
    </>
  );
}