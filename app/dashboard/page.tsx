import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
    
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }
  
  return (
    <div className="py-6">
      <h1>Hello from the dashboard page</h1>
    </div>
  )
}
