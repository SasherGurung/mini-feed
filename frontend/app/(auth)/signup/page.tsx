import { SignupForm } from "@/components/features/Auth/Signup/signup-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-[60%_40%]">
      <div className="hidden lg:flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <div>
          <h1 className="text-[clamp(1.875rem,2vw,1.875rem)] font-medium text-black relative z-40 -translate-y-70 w-lg lg:w-md text-center">
            Join and share everyday moments with your{" "}
            <span className="text-red-700">close ones.</span>
          </h1>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute -rotate-8 -translate-x-40 translate-y-5 ">
            <Image
              src="/images/login1.png"
              alt="login1"
              height={320}
              width={320}
              className="rounded-2xl shadow-xl border border-gray-200 lg:w-60 lg:h-80 lg:object-cover xl:w-90 xl:h-125"
            />
          </div>
          <div className="absolute z-10 ">
            <Image
              src="/images/login2.png"
              alt="login2"
              height={320}
              width={320}
              className="rounded-2xl shadow-xl border border-gray-200 lg:w-60 lg:h-85 lg:object-cover xl:w-90 xl:h-130"
            />
          </div>
          <div className="absolute rotate-10 translate-x-60 lg:translate-x-40 lg:translate-y-7">
            <Image
              src="/images/login3.png"
              alt="login3"
              height={320}
              width={320}
              className="rounded-xl shadow-2xl border border-gray-200 lg:w-60 lg:h-80 lg:object-cover xl:w-90 xl:h-125"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center border-l-2">
        <div className="w-full max-w-lg">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
