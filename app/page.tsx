import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'صفحه اصلی | هزار و یک عطر'
}

export default function Home() {
  return (
    redirect('/blogs')
  );
}
