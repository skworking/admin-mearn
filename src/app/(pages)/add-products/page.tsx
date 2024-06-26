import { fetchCategory, fetchSubCategory, fetchTag } from "@/lib/data";
import Addproducts from "@/components/add-products"

const Page = async () => {
  const data = await fetchCategory()
  const subcategorydata = await fetchSubCategory()
  const tagdata = await fetchTag()

  return (
    <>
      <Addproducts category={data?.category} subcategory={subcategorydata?.subcategory} tag={tagdata?.tag} />

    </>
  )
}
export default Page;