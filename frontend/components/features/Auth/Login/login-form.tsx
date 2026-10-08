"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/queries/user.queries";
import { useAuthStore } from "@/lib/stores/Auth/authUser.stores";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const loginMutation = auth.useLogin();
  const router = useRouter();
  const { setAuth } = useAuthStore();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user = await loginMutation.mutateAsync(formData);
      setAuth(user);
      toast.success("Login Successfully");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please try again later")
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 max-sm:p-10 lg:p-10"
    >
      <FieldGroup>
        <div className="flex flex-col gap-1 text-center items-center">
          <h1 className="text-[clamp(1.2rem,3.5vw,2rem)] font-medium">
            Log into <span className="text-red-700">Mini-</span>Feed
          </h1>
        </div>
        <Field>
          <FieldLabel htmlFor="username" className="max-sm:hidden">
            UserName
          </FieldLabel>
          <Input
            id="username"
            type="text"
            placeholder="John smith..."
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
            value={formData.username}
            onChange={handleChange}
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
            className="h-10 border-gray-300 focus-visible:border-2 focus-visible:border-red-700"
            value={formData.password}
            onChange={handleChange}
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