"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
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
import Image from "next/image";
import { signupFormType } from "@/types";
import { signupSchema } from "@/schema";
import axios from "axios"
import { useRouter } from "next/navigation";

const Signup = () => {

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter()

  const onSubmit = async (formData: signupFormType) => {
    console.log(formData, "formData");
    try{
      const response = await axios.post(`/api/sign-up`,formData)
      console.log(response, 'response onSubmit signup');
      if(response.status===200){
        router.push('/signin')
      }
    }catch(error){
      console.log(error, ' error onSubmit signup');
    }
  };

  const renderHeadingInfo = () => (
    <>
      <div className="font-semibold text-3xl mt-[15%] sm:mt-[5%]  text-center">
        Sign up for free 🤗
      </div>
      <div className="mt-2 text-lg text-gray-600 text-center mb-8">
        You will get 2 video and 10 text testimonial credits for FREE!
      </div>
    </>
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

  const renderCredentialsForm = () => (
    <div className="space-y-6 flex flex-col mt-8">
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

      <Button
        className="text-base bg-indigo-700 text-white rounde-none"
        type="submit"
      >
        Signup
      </Button>
    </div>
  );

  const renderSignInPrompt = () => (
    <div className="text-center mt-4">
      {`Already a member ?  `}
      <Link className=" text-blue-600 font-semibold" href="/signin">
        SignIn
      </Link>
    </div>
  );

  return (
    <div className=" px-[10%] min-h-[500px] flex flex-col justify-center items-center gap-5">
      {renderHeadingInfo()}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="shadow-2xl rounded-md border flex flex-col px-8 py-4 sm:w-[450px]"
        >
          {renderGoogleAuthButton()}
          {renderCredentialsForm()}
          {renderSignInPrompt()}
        </form>
      </Form>
    </div>
  );
};

export default Signup;
