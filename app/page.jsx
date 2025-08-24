import Image from "next/image";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
export default function Home() {
  return (
    
    <div className="px-6 md:px-16 lg:px-32">
      <HeaderSlider />
      <HomeProducts/>
    </div>
  );
}
