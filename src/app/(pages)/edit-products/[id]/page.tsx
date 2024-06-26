import Edit from "@/components/edit-product";
import { fetchCategory, fetchProduct, fetchSubCategory, fetchTag } from "@/lib/data";

const EditProduct =async ({ params }) => {
    const { id } = params;
    const  productJson  = await fetchProduct(id);
    const data=await fetchCategory()
    const subcategorydata=await fetchSubCategory()
    const tagdata=await fetchTag()
  
    
    if (!productJson) {
        return <div>Loading...</div>; // Add loading state if data is not yet fetched
    }
    return (
        <>
            <Edit data={productJson} id={id} category={data?.category} subcategory={subcategorydata?.subcategory} tag={tagdata?.tag} />
        </>
    );
};

export default EditProduct;
