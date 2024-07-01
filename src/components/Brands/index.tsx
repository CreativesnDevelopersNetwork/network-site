import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28">
      <div className="container">
        <h2 className="mb-2 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          Our Latest Works
        </h2>
        <div className="text-xl mb-6">
        Over the years, we have consulted on product
        </div>
        
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {brandsData.map((brand, index) => (
                <SingleBrand key={brand.id} brand={brand} index={index}/>
              ))}
            </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand, index }: { brand: Brand , index: number}) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4  px-3 py-[15px] items-end">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-64 object-cover opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={""} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
      <div className="w-full">
       {index+1}.{brand.name}
      </div>
    </div>
  );
};