import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col gap-1 text-center items-center">
          <h1 className="text-2xl font-semibold">
            Login to <span className="text-red-700">Mini-</span>Feed
          </h1>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
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
            <FieldLabel htmlFor="password">Password</FieldLabel>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
          />
        </Field>
        <div className="flex flex-col gap-10">
          <Field>
            <Button
              className="bg-red-700 cursor-pointer w-full h-10 text-base hover:bg-red-800 rounded-3xl"
              type="submit"
            >
              Login in
            </Button>
            <Button
              className="bg-transparent cursor-pointer w-full h-10 text-black text-base hover:bg-zinc-100 rounded-3xl"
              type="submit"
            >
              Forgot Password?
            </Button>
          </Field>
          <Field>
            <Button
              className="bg-zinc-100 cursor-pointer w-full h-10 text-black text-base hover:bg-zinc-200 rounded-3xl"
              type="submit"
            >
              Login with Google
            </Button>
            <Button
              className="bg-transparent cursor-pointer w-full h-10 text-(--brand-blue) border-(--brand-blue) text-base hover:bg-zinc-100 rounded-3xl"
              type="submit"
            >
              Create new account
            </Button>
          </Field>
        </div>
      </FieldGroup>
    </form>
  );
}
