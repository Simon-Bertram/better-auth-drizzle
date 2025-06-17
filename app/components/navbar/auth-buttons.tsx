"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function AuthButtons() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        className="text-white hover:bg-white/20"
        onClick={() => router.push("/auth/login")}
      >
        Log in
      </Button>
      <Button
        className="bg-white text-blue-600 hover:bg-white/90"
        onClick={() => router.push("/auth/signup")}
      >
        Sign up
      </Button>
    </div>
  );
}
