import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface CardSkeletonProps {
  cards: number;
}
const CardSkeleton = ({cards}: CardSkeletonProps) => {
  return ( 
    <div className="w-4/5 flex flex-wrap justify-center gap-x-5 gap-y-5">
      {  
       Array(cards).fill(0).map((item,i) =>  <div key={i}
    className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 w-72">
    <h5 className="mb-2 text-xl font-medium leading-tight"><Skeleton/></h5>
    <p className="mb-4 text-base text-sm">
      <Skeleton count={3}/>
    </p>
      <p className="mb-4 text-base text-sm text-slate-400">
          <Skeleton/>
      </p>
      </div>
        ) 
      }
      </div>
  )
}

export default CardSkeleton