"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import { signInSchema } from "@/schema";
import { signIn, useSession } from "next-auth/react";
import { signInFormType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Signup = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { data, status } = useSession();
  console.log(data, status, "hihihi data status");
  const router = useRouter();

  const onSubmit = async (formData: signInFormType) => {
    console.log(formData, " signInform data");
    try {
      const response = await signIn("credentials", {
        redirect: false,
        ...formData,
      });
      console.log(response, "response onSubmit");
      if(response?.status === 200){
        router.push('/dashboard')
      }
    } catch (err) {
      console.log(err, " err onSubmit");
    }
  };

  const renderHeadingTitle = () => (
    <div className="font-semibold text-3xl mt-[15%] sm:mt-[5%] text-center">
      Welcome back 👋
    </div>
  );

  const renderCredentialsForm = () => (
    <>
      <div className="flex items-center gap-4 ">
        <div className="border flex-1"></div>
        <div className="text-gray-500">Or, register with your email</div>
        <div className="border flex-1"></div>
      </div>
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
      <div className="flex flex-col space-y-4">
        <Button
          className="text-base bg-indigo-700 text-white rounde-none"
          type="submit"
        >
          Signin
        </Button>
      </div>
    </>
  );

  const renderSignupPrompt = () => (
    <div className="text-center mt-4">
      {`Already a member ?  `}
      <Link className=" text-blue-600 font-semibold" href="/signup">
        Signup
      </Link>
    </div>
  );

  const renderGoogleAuthButton = () => (
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
  );

  return (
    <div className=" px-[10%] min-h-[500px] flex flex-col justify-center items-center gap-5">
      {renderHeadingTitle()}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="shadow-2xl rounded-md border flex flex-col px-8 py-4 sm:w-[450px]"
        >
          <div className="space-y-6 flex flex-col  mt-8">
            {renderGoogleAuthButton()}
            {renderCredentialsForm()}
          </div>
          {renderSignupPrompt()}
        </form>
      </Form>
    </div>
  );
};

export default Signup;
