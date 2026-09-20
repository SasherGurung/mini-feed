import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

export function SignupForm() {
  return (
    <form className="flex flex-col gap-6 max-sm:p-10 lg:p-10">
      <FieldGroup>
        <div className="flex flex-col  text-center items-center">
          <h1 className="text-[clamp(1.2rem,3.5vw,2rem)] font-medium">
            Signup into <span className="text-red-700">Mini-</span>Feed
          </h1>
        </div>
        <Field>
          <FieldLabel htmlFor="username" className="max-sm:text-xs">Username</FieldLabel>
          <Input
            id="username"
            placeholder="Enter your full name"
            required
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email" className="max-sm:text-xs">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone-number" className="max-sm:text-xs">Phone number (Optional)</FieldLabel>
          <Input
            id="phone-number"
            placeholder="Enter your phone number"
            required
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password" className="max-sm:text-xs">Password</FieldLabel>
          </div>
          <Input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="confirm-password" className="max-sm:text-xs">Confirm Password</FieldLabel>
          </div>
          <Input
            id="confirm-password"
            type="password"
            required
            placeholder="Confirm your password"
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
          />
        </Field>
        <div className="flex flex-col justify-between gap-7">
          <Field>
            <Button
              className="bg-red-700 cursor-pointer w-full h-10 text-[clamp(0.9rem,3vw,1rem)] hover:bg-red-800 rounded-3xl"
              type="submit"
            >
              Sign up
            </Button>
            <Button className="bg-transparent cursor-pointer w-full h-10 text-black text-[clamp(0.9rem,3vw,1rem)] hover:bg-zinc-100 rounded-3xl">
              I already have an account
            </Button>
          </Field>
          <Field>
            <FieldSeparator className="text-[clamp(0.8rem,3vw,1rem)]">Or continue with</FieldSeparator>
          </Field>
          <Field>
            <Button
              className="bg-zinc-100 cursor-pointer w-full h-10 text-black text-[clamp(0.9rem,3vw,1rem)] hover:bg-zinc-200 rounded-3xl"
            >
              <span>
                <FcGoogle />
              </span>
              Continue with Google
            </Button>
          </Field>
        </div>
      </FieldGroup>
    </form>
  );
}
