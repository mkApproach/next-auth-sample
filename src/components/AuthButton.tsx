import { signIn, signOut } from "next-auth/react";

//import { Button } from "@/components/ui/button";

interface AuthButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: "default" | "outline";
}

const AuthButton = ({ onClick, children }: AuthButtonProps) => {
  return (
    <button onClick={onClick} className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
      {children}
    </button>
  );
};

export const LogInButton = () => {
  return (
    <AuthButton onClick={() => signIn()} variant={"default"}>
      Log In
    </AuthButton>
  );
};

export const LogOutButton = () => {
  return (
    <AuthButton onClick={() => signOut()} variant={"outline"}>
      Log Out
    </AuthButton>
  );
};