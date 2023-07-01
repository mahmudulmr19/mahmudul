import "./globals.css";

export const metadata = {
  title: "Mahmudul Hasan | Portfolio",
  description:
    "Welcome to Mahmudul Hasan's portfolio website. I am a passionate software developer with experience in creating web applications. Explore my projects and learn more about my skills and expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
