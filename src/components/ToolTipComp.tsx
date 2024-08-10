import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
interface ToolTipProps{
    children: React.ReactNode,
    content: string
}
const ToolTipComp = (props:ToolTipProps) => {
    const {children,content} = props
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
            {children}
        </TooltipTrigger>
        <TooltipContent className='bg-black text-white p-2 px-4 ml-4'>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ToolTipComp