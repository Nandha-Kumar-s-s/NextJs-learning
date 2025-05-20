"use client";
import { usePathname } from "next/navigation"
export default function NotFound(){
    const pathName = usePathname();
    const productID = pathName.split("/")[2];
    const reviewID = pathName.split("/")[4];
    return (
        <>
            <h1>Review of {reviewID} for the product {productID} not found</h1>
        </>
    )
}