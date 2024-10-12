"use client";

import { Button } from "@/components/ui/button";
import Wrapper from "@/global/Wrapper";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { userLogin, userLoginSchema } from "@/utils/validation/userLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabaseClient } from "@/utils/supabase/supabaseClient";

interface ILogin {
  email: string;
  password: string;
}

const supabase = supabaseClient;

export default function Login() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(userLogin),
  });

  const onSubmit: SubmitHandler<ILogin> = async (user) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
      });
      if (error) {
        console.log(error);
      }
      console.log("created successfully");
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper className="flex justify-center items-center h-screen max-sm:flex max-sm:items-start max-sm:my-10 max-sm:justify-center max-sm:h-fit ">
        <div className="min-h-fit w-96 p-5 rounded-lg shadow-sm shadow-gray-400 max-sm:min-h-fit">
          <div className="text-center max-sm:text-base">Welcome Back !</div>
          <div className="my-5 max-sm:text-sm">
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
          </div>
          <span className="text-red-400 max-sm:text-xs">
            {errors.email?.message}
          </span>
          <div className="my-4 max-sm:text-sm">
            <label htmlFor="password">Password</label>
            <div className="my-2">
              <input
                placeholder="*****"
                type="password"
                className="w-full p-2 bg-muted rounded-sm"
                {...register("password")}
                onClick={() => trigger("password")}
              />
            </div>
            <span className="text-red-400 max-sm:text-xs">
              {errors.password?.message}
            </span>
          </div>
          <Button className="w-full my-5 mt-5">Login</Button>
          <div className="text-center mb-3 max-sm:text-sm">
            New User ?
            <Link href={"/register"}>
              <span className="text-primary mx-2 mb-2 max-sm:text-sm">
                Sign Up
              </span>
            </Link>
          </div>
          <div className="text-center">-or-</div>
          <Button className="w-full my-3">Continue with google</Button>
        </div>
      </Wrapper>
    </form>
  );
}
