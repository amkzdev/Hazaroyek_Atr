import { Typography } from "@mui/material";
import { Metadata } from "next";
import { CenteredPage, CustomLink } from "./_components";

export const metadata: Metadata = {
  title: 'صفحه اصلی | هزار و یک عطر'
}

export default function Home() {
  return (
    <CenteredPage sx={{ gap: 2 }}>
      <Typography>به فروشگاه اینترنتی هزار و یک عطر خوش آمدید.</Typography>
      <CustomLink href="/blogs" >رفتن به صفحه لیست مقالات</CustomLink>
    </CenteredPage>
  );
}
