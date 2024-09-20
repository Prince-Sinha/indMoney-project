import Footer from "./Footer"
import Accordion from "./Accordion";
export default function SideBar() {
  return (
    <div>
      <div className="w-full h-full p-[10px] flex flex-col">
        <div className=" mb-5 self-center md:self-start">
          <button className="py-3 px-8 rounded-full text-white bg-[#33a34d] justify-center">Open Demat Account</button>
        </div>

        <div className="mb-5">
          <Accordion />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}