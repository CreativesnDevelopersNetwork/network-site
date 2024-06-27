import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const SectionThree = () => {

  return (
    <section className="w-full justify-center text-center py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="w-full flex flex-col items-center gap-8 justify-center border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div>
                <SectionTitle
                    title="Our Team"
                    paragraph="Meet the people who make our team great. Our experience and diverse talent ensure we deliver great products for everyone"
                    mb="44px"
                />
            </div>
              

            <div className="w-full flex flex-row flex-wrap gap-16">
                <div className="w-[30%] h-[350px] flex flex-col gap-4">
                    <div className="relative aspect-[97/60] w-full h-[80%] sm:aspect-[97/44]">
                        <Image
                            src="/images/about/clement.png"
                            alt="image"
                            fill
                            className="object-fill object-center"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-xl">Clement Tano</div>
                        <div className="text-gray-500 ">Mobile App/ Backend Developer</div>
                    </div>
                </div>
                <div className="w-[30%] h-[350px] flex flex-col gap-4">
                    <div className="relative aspect-[97/60] w-full h-[80%] sm:aspect-[97/44]">
                        <Image
                            src="/images/about/peni.png"
                            alt="image"
                            fill
                            className="object-fill object-center"
                        />
                    </div>
                    <div>
                        
                        <div className="font-bold text-xl">Peni Hortor</div>
                        <div className="text-gray-500 ">Team Lead/Project manager</div>
                    </div>
                </div>
                <div className="w-[30%] h-[350px] flex flex-col gap-4">
                    <div className="relative aspect-[97/60] w-full h-[80%] sm:aspect-[97/44]">
                        <Image
                            src="/images/about/webster.png"
                            alt="image"
                            fill
                            className="object-fill object-center"
                        />
                    </div>
                    <div>
                        
                        <div className="font-bold text-xl">Webster Elumelu</div>
                        <div className="text-gray-500 ">(Frontend Developer)</div>
                    </div>
                </div>
                <div className="w-[30%] h-[350px] flex flex-col gap-4">
                    <div className="relative aspect-[97/60] w-full h-[80%] sm:aspect-[97/44]">
                        <Image
                            src="/images/about/hardi.png"
                            alt="image"
                            fill
                            className="object-fill object-center"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-xl">Mohammed Hardi</div>
                        <div className="text-gray-500 "> Machine Learning Engineer</div>
                    </div>
                </div>



                <div className="w-[30%] h-[350px] flex flex-col gap-4">
                    <div className="relative aspect-[97/60] w-full h-[80%] sm:aspect-[97/44]">
                        <Image
                            src="/images/about/uiux.png"
                            alt="image"
                            fill
                            className="object-fill object-center"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-xl">Onyemowo Jacinta Onu</div>
                        <div className="text-gray-500 ">UI/UX designer</div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;