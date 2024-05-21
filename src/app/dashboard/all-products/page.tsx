import Container from "@/components/container/Container";
import Image from "next/image";

const AllProducts = async () => {
  const res = await fetch(
    "https://assignment-8-server-im7o0htlt-shoriful-islams-projects.vercel.app/api/v1/products",
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return (
    <Container>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Product Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item: any, index: number) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={item.image}
                          width={50}
                          height={50}
                          alt="product image"
                          className="rounded border"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AllProducts;
