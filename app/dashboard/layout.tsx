import AuthProvider from "@/context/AuthProvider";
import UserOnly from "@/routes/UserOnly";

export const metadata = {
  title: "Dashboard | Mahmudul Hasan",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <UserOnly>{children}</UserOnly>
    </AuthProvider>
  );
}
