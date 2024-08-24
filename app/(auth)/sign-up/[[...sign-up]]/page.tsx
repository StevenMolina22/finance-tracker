import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center mt-20">
      <SignUp />
    </div>
  );
}
