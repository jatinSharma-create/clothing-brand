import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const MOCK_USER_ID = "user_dev_123";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await prismadb.store.findFirst({
    where: {
      userId: MOCK_USER_ID,
    }
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return (
    <>
      {children}
    </>
  );
}
