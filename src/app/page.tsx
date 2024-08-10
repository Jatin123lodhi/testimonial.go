import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col  items-center min-h-screen px-[4%]">
      <div className="font-bold text-4xl text-center mt-[15%]">
        Get testimonials from your customers with ease
      </div>
      <div className="text-center mt-4 text-xl text-gray-600">
        Collecting testimonials is hard, we get it! So we built Testimonial. In
        minutes, you can collect text and video testimonials from your customers
        with no need for a developer or website hosting.
      </div>
      <Link href={'/signup'} className="mt-8">
        <button className="bg-indigo-600 text-base py-3  w-72 rounded text-white">Try FREE now</button>
      </Link>
    </div>
  );
}
