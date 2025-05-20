
import { notFound } from "next/navigation";
export default async function ProductReview({params}: {
    params: Promise<{productID: string, reviewID: string}>
}){
    const { productID, reviewID } = await params;
    if( parseInt(reviewID) > 1000 ) return notFound();

    return(
        <h1>Review of {reviewID} for the product {productID}</h1>
    )
}