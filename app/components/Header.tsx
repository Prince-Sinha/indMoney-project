import { div } from "framer-motion/client";
import { CloseButton } from '@chakra-ui/react'

export default function Header(){
    return(
        <>
        <div className="header">
            <div>
                <img src="/indmoney.png" alt="" className="w-1/2" />
            </div>
            <div className="">
                <ul className="options">
                    <li className="px-5 py-2 border border-[#39a451] text-[#39a451] rounded-full font-semibold ">Log In</li>
                    <li className="items-center">
                    <img src="/customer-care (1).png" alt="" className="" />
                    </li>
                    <li className="items-center">
                    <img src="/search.png" alt="" className="w-3/4 item-center" />
                    </li>
                    <li className="align-middle items-center">
                    <img src="/close.png" alt="" className="w-3/4 item-center" />
                    </li>
                </ul>
            </div>

        </div>
        <div className="w-full justify-center">
        </div>
      </>
    )
}