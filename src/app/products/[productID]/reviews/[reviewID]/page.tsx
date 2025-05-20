export default async function ProductReview({params}: {
    params: Promise<{productID: string, reviewID: string}>
}){
    const { productID, reviewID } = await params;
    return(
        <h1>Review of {reviewID} for the product {productID}</h1>
    )
}