"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Wrapper from "@/global/Wrapper";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegister } from "@/utils/validation/register";
import { supabaseClient } from "@/utils/supabase/supabaseClient";

interface IRegister {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const supabase = supabaseClient;

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<IRegister>({ resolver: zodResolver(userRegister) });

  const onSubmit: SubmitHandler<IRegister> = async (user, event) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
      });
      if (error) {
        console.log(error);
      }
      console.log("created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper className="flex justify-center items-center h-screen">
        <div className="min-h-fit w-96 p-5 rounded-lg shadow-sm shadow-gray-400">
          <div className="text-center">Logo - Sign up</div>
          <div className="my-5">
            <label htmlFor="email">Email</label>
            <div className="mt-2">
              <input
                className="w-full p-2 rounded-sm outline-slate-900 bg-muted"
                placeholder="example@gmail.com"
                type="email"
                {...register("email")}
                onClick={() => trigger("email")}
              />
            </div>
            <span className="text-red-400">{errors.email?.message}</span>
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <div className="my-2">
              <input
                placeholder="*******"
                type="password"
                className="w-full p-2 bg-muted rounded-sm outline-primary-foreground"
                {...register("password")}
                onClick={() => trigger("password")}
              />
            </div>
            <span className="text-red-400">{errors.password?.message}</span>
          </div>
          <div className="my-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="my-2">
              <input
                placeholder="*******"
                type="password"
                className="w-full p-2 bg-muted rounded-sm outline-primary-foreground"
                {...register("confirmPassword")}
                onClick={() => trigger("confirmPassword")}
              />
            </div>
            <span className="text-red-400">
              {errors.confirmPassword?.message}
            </span>
          </div>

          <Button className="w-full my-5 mt-5" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </Button>

          <div className="text-center text-primary hover:text-blue-600 my-3">
            <Link href="/">Back to Home Page</Link>
          </div>
        </div>
      </Wrapper>
    </form>
  );
}
