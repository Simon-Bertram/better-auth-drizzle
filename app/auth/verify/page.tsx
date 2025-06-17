import { verifyMagicLink } from "@/lib/actions/auth";
import { redirect } from "next/navigation";

interface VerifyPageProps {
  searchParams: { token?: string };
}

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
  const { token } = searchParams;

  if (!token) {
    redirect("/auth/signin");
  }

  const result = await verifyMagicLink(token);

  if (result.success) {
    redirect("/dashboard");
  } else {
    redirect(`/auth/signin?error=${encodeURIComponent(result.error)}`);
  }
}
