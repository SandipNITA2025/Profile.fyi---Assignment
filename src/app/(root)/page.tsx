import Card from "@/components/card";
import data from "@/constants/data";
import { Product } from "@/types";

const Home = () => {
  const products = data;

  return (
    <main className="w-full flex flex-col items-center mb-10">
      <div className="md:w-[1100px] w-[95%] py-4">
        <p className="text-base font-medium">
          Products found: {products.length}
        </p>
      </div>
      <div className="md:w-[1100px] w-[95%] grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3 overflow-hidden pb-14 md:p-2">
        {products.map((item: Product) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
