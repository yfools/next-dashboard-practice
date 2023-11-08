import "@/app/ui/global.css";
import { inter } from "@/static/font/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} subpixel-antialiased`}>{children}</body>
    </html>
  );
}
