import Image from "next/image";
import SingleFeature from "../Features/SingleFeature";
import featuresData from "../Features/featuresData";

const SectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 px-4 sm:px-8 md:px-16 lg:px-28">
      <div className="container">
          <h2 className="mb-16 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          Our Services -
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {featuresData.map((feature, index) => (
              <div key={feature.id} className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center">
                <div className="flex items-center justify-center w-full">
                  <div className="w-full h-auto relative">
                    <Image
                      src={`/images/image${index}.png`}
                      alt="image"
                      width={360}
                      height={360}
                      className="w-full object-cover object-center"
                    />
                  </div>
                </div>
            
                <div className="flex items-center justify-center w-full">
                  <SingleFeature feature={feature} />
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default SectionTwo;