import { LoginForm } from "@/components/features/Auth/Login/login-form";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-[40%_60%]">
      <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <LoginForm />
          </div>
        </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
