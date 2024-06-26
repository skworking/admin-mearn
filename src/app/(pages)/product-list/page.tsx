
import Pagination from "@/components/pagination";
import { deleteUser } from "@/lib/action";
import { fetchProducts } from "@/lib/data";
import Link from "next/link";

const PageList = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count,  product } = await fetchProducts(q, page);
    console.log("data", product);

    return (
        <>
            <div>
                <div >
                    {/* <Search placeholder="Search for a user..." /> */}
                    <Link href="/add-products">
                        <button >Add New</button>
                    </Link>
                </div>
                <table >
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>display_name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((user) => (
                            <tr key={user._id}>
                                {/* <td>
                                    <div className={styles.user}>
                                        <Image
                                            src={user.img || "/noavatar.png"}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className={styles.userImage}
                                        />
                                        {user.username}
                                    </div>
                                </td> */}
                                <td>{user.name}</td>
                                <td>{user.display_name}</td>
                                {/* <td>{user.display_name?.toString().slice(4, 16)}</td> */}
                                {/* <td>{user.isAdmin ? "Admin" : "Client"}</td>
                                <td>{user.isActive ? "active" : "passive"}</td> */}
                                <td>
                                    <div /* className={styles.buttons} */>
                                        <Link href={`/edit-products/${user._id}`}>
                                            <button /* className={`${styles.button} ${styles.view}`} */>
                                                View
                                            </button>
                                        </Link>
                                        <form action={deleteUser}>
                                            <input  name="_id" value={(user._id)} />
                                            <button /* className={`${styles.button} ${styles.delete}`} */>
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination count={count} />
            </div>
        </>
    )
}
export default PageList;