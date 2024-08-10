"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import * as z from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useDebounceCallback, useDebounceValue } from "usehooks-ts";
// import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
// import { signUpSchema } from "@/schemas/signUpSchema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Form,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
// import axios, { AxiosError } from "axios";
// import { ApiResponse } from "@/types/ApiResponse";
import Image from "next/image";
// import { signIn } from "next-auth/react";
const Signup = () => {
  //zod implementation
  //   const form = useForm<SignUpFormType>({
  const form = useForm({
    // resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  return (
    <div className=" px-[10%] min-h-[500px] ">
      <div className="font-semibold text-3xl mt-[15%] text-center">
        Sign up for free 🤗
      </div>
      <div className="mt-2 text-lg text-gray-600 text-center mb-8">
        You will get 2 video and 10 text testimonial credits for FREE!
      </div>
      <Form {...form}>
        <form
          //   onSubmit={form.handleSubmit(onSubmit)}
          className="shadow-2xl rounded-md border flex flex-col px-8 py-4 sm:w-[450px]"
        >
          <div className="space-y-6 flex flex-col mt-8">
            <div className="flex flex-col sm:flex-row items-center -mt-4 gap-4 justify-center ">
              <Button
                className="py-3 rounded-none border-slate-600 text-base flex-1 w-full bg-slate-200 text-gray-700"
                type="button"
                //   onClick={() => signIn("google")}
              >
                Signup with Google
                <Image
                  className="ml-4"
                  height={20}
                  width={20}
                  src={"/google.png"}
                  alt="logo"
                />
              </Button>
            </div>
            <div className="flex items-center gap-4 ">
              <div className="border flex-1"></div>
              <div className="text-gray-500">Or, register with your email</div>
              <div className="border flex-1"></div>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Username"
                      onChange={(e) => {
                        // debounced(e.target.value);
                        field.onChange(e.target.value);
                      }}
                    />
                  </FormControl>
                  {/* {isCheckingUsername ? (
                    <div className="flex items-center gap-2">
                      <span>Loading</span>
                      <Loader className="animate-spin" />
                    </div>
                  ) : usernameMessage ? (
                    <>
                      <p
                        className={`${
                          usernameMessage.includes("unique")
                            ? ""
                            : "text-red-500"
                        } `}
                      >
                        {usernameMessage}
                      </p>
                    </>
                  ) : (
                    <></>
                  )} */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link href={"/dashboard"} className="flex flex-col space-y-4">
              <Button
                className="text-base bg-indigo-700 text-white rounde-none"
                type="submit"
                // disabled={isSubmitting || usernameMessage.includes("taken")}
              >
                {/* {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span>Loading</span>
                    <Loader className="animate-spin" />
                  </div>
                ) : (
                  "Signup"
                )} */}
                Signup
              </Button>
            </Link>
          </div>
          <div className="text-center mt-4">
            {`Already a member ?  `}
            <Link className=" text-blue-600 font-semibold" href="/sign-in">
              SignIn
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
