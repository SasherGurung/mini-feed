import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-6 max-sm:p-10 lg:p-10">
      <FieldGroup>
        <div className="flex flex-col gap-1 text-center items-center">
          <h1 className="text-[clamp(1.2rem,3.5vw,2rem)] font-medium">
            Log into <span className="text-red-700">Mini-</span>Feed
          </h1>
        </div>
        <Field>
          <FieldLabel htmlFor="email" className="max-sm:hidden">
            Email
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password" className="max-sm:hidden">
              Password
            </FieldLabel>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
          />
        </Field>
        <div className="flex flex-col justify-between gap-7 max-sm:gap-6">
          <Field>
            <Button
              className="bg-red-700 cursor-pointer w-full h-10 text-[clamp(0.9rem,3vw,1rem)] hover:bg-red-800 rounded-3xl"
              type="submit"
            >
              Log in
            </Button>
            <Button className="bg-transparent cursor-pointer w-full h-10 text-black text-[clamp(0.9rem,3vw,1rem)] hover:bg-zinc-100 rounded-3xl">
              Forgot Password?
            </Button>
            <Field>
              <FieldSeparator className="text-[clamp(0.8rem,3vw,1rem)]">
                Or continue with
              </FieldSeparator>
            </Field>
          </Field>
          <Field>
            <Button className="bg-zinc-100 cursor-pointer w-full h-10 text-black text-[clamp(0.9rem,3vw,1rem)] hover:bg-zinc-200 rounded-3xl">
              <span>
                <FcGoogle />
              </span>
              Continue with Google
            </Button>
            <Button className="bg-transparent cursor-pointer w-full h-10 text-(--brand-blue) border-(--brand-blue) text-[clamp(0.9rem,3vw,1rem)] hover:bg-zinc-100 rounded-3xl">
              Create new account
            </Button>
          </Field>
        </div>
      </FieldGroup>
    </form>
  );
}
