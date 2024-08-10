import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req): Promise<any> {
        await dbConnect();
        try {
          console.log(credentials.identifier,  ' ------cread ident')
          const user = await UserModel.findOne({
            $or: [
              { email: credentials?.identifier }, // will check later if we remove any type from credentials can we access credentials.email and credentails.password
              { username: credentials?.identifier },
            ],
          });
          if (!user) {
            throw new Error("No user found with this email");
          }

        //   if (!user.isVerified) {
        //     throw new Error("Please verify your account before login");
        //   }

          const isPasswordCorrect = await bcrypt.compare(
            credentials?.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect password");
          }
        } catch (err: any) {
          throw new Error(err);
        }
        return null;
      },
    }),
   
  ],

  callbacks: {
    
    async signIn({ user, account, profile}){
      await dbConnect();
       
      const email = user.email
      // TODO: will handle profile.login  typescript issue
      const userFound = await UserModel.findOne({email})
      if(!userFound){
        // console.log('new user')
        // save it to database 
        const password = Math.floor(10000+ Math.random()*9000).toString()
        const expiryDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 1);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
          username : user.name,
          email,
          password: hashedPassword,
          verifyCode:"not required",
          verifyCodeExpiry: expiryDate,
          isVerified: true,
          isAcceptingMessage: true,
          messages: [],
        });
        await newUser.save();
      }else{
        // already saved in database
        // console.log('already saved to database just login')
      }
      return true
    },
    async jwt({ token, user }) {
         
      return token;
    },
  
    async session({ session,token }) {
         
      return session;
    },
  },

  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
 
