"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter, usePathname } from "next/navigation";

import { Loader } from "@/components/dashboard";

const UserOnly = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  if (loading) {
    return <Loader />;
  }
  if (!currentUser) {
    router.push(`/login?next=${pathname}`);
  }
  return children;
};

export default UserOnly;
