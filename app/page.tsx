import { Box, Button } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CustomLink } from "./_components";

export const metadata : Metadata ={
  title:'صفحه اصلی | هزار و یک عطر'
}
export default function Home() {
  return (
    <Box sx={{display:'flex',flexDirection:'col' , justifyContent:'center' , alignItems:'center' , height:'100vh'}}>
      <CustomLink  href="/blogs" >رفتن به صفحه لیست مقالات</CustomLink>
    </Box>
  );
}
