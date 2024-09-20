import { div } from "framer-motion/client";
import { CloseButton } from '@chakra-ui/react'

export default function Header(){
    return(
        <>
        <div className="header">
            <div>
                <img src="/indmoney.png" alt="" className="w-1/3" />
            </div>
            <div className="">
                <ul className="options">
                    <li className="pl-4 pr-4 pt-1 pb-1 border border-[#39a451] rounded-full text-[#39a451] text-md">Log&nbsp;In</li>
                    <li className="self-center">
                    <img src="/customer-care (1).png" alt="" className="" />
                    </li>
                    <li className="self-center">
                    <img src="/search.png" alt="" className="w-3/4 item-center" />
                    </li>
                    <li className="align-middle items-center self-center">
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