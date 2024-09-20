"use client";
import { useState } from "react";
import { features , listFeatures } from './../../data'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
import { li, p } from "framer-motion/client";

export default function AccordionComponent( {title , content}: any){
    

    return (
        <div>
        
        <Accordion allowToggle>
            {
         features.map((el:string, i :number) =>{
          return ( 
            <AccordionItem paddingTop={12} key={i} borderBottom="0.5px soild" className="border-b w-full md:w-1/3">
                <h2>
                <AccordionButton py={8} fontSize="3xl" fontWeight="600">
                    <Box as='span' flex='1' textAlign='left' px={6}>
                    {el}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
              </h2>
             <AccordionPanel fontSize="lg">
                    {/* {console.log(listFeatures[i])} */}
                    <Accordion allowToggle>
                        {listFeatures[i].length == 1 ? (<ul className="text-md py-2 px-4 w-full">
                                    {
                                        listFeatures[i][0]['item'].map((a:any , jj: number)=>{
                                            return <li key={jj}><a href={listFeatures[i][0]['links'][jj]}>{a}</a></li>
                                        })
                                    }
                                    </ul>):
                        listFeatures[i].map((element : any , key1 : number)=>{
                                return(
                                <AccordionItem paddingTop={12} key={key1} className="bg-gray-200">
                                 <h2>
                                <AccordionButton py={8} fontSize="3xl" fontWeight="600">
                                <Box as='span' flex='1' textAlign='left'px={8}>
                                 {element.name}
                                 {console.log(element.item)}
                                </Box>
                                <AccordionIcon />
                                </AccordionButton>
                                </h2>
                               <AccordionPanel  fontSize="lg">
                                   <ul className="bg-white text-md py-2 px-4 w-full">
                                    {
                                        element['item'].map((arr:any , j: number)=>{
                                            return <li key={j} className="bg-white"><a href={element['links'][key1]}>{arr}</a></li>
                                        })
                                    }
                                    </ul>
                               </AccordionPanel>
                               </AccordionItem >
                            );
                            
                        })
                    }
                    </Accordion>
                
             </AccordionPanel>
            </AccordionItem> 
        )
       })
    }
       </Accordion>
    
    
       </div>
    
    );
}