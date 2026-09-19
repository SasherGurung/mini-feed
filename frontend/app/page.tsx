import { LoginForm } from "@/components/features/Auth/Login/login-form";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-[40%_60%]">
      <div className="flex flex-1 items-center justify-center border-r-2">
        <div className="w-full max-w-lg">
          <LoginForm />
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <div>
          <h1 className="text-3xl font-medium text-black relative z-40 -translate-y-70 w-lg text-center">
            Share everyday moments with your <span className="text-red-700">close ones.</span>
          </h1>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute -rotate-8 -translate-x-40 translate-y-5">
            <Image
              src="/images/login1.png"
              alt="login1"
              height={320}
              width={320}
              className="rounded-2xl shadow-xl border border-gray-200"
            />
          </div>
          <div className="absolute z-10 ">
            <Image
              src="/images/login2.png"
              alt="login2"
              height={320}
              width={320}
              className="rounded-2xl shadow-xl border border-gray-200"
            />
          </div>
          <div className="absolute rotate-10 translate-x-60">
            <Image
              src="/images/login3.png"
              alt="login3"
              height={320}
              width={320}
              className="rounded-xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
