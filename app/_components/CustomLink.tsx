'use client'
import { styled } from "@mui/material/styles";
import Link from "next/link";

export const CustomLink = styled(Link)(({ theme }) => ({
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    textDecoration:'none'
})) as any

