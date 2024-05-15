import React from "react";
import Skeleton from "react-loading-skeleton";
interface FormSkeletonProps {
  rows?: number;
  cols?: number;
}
export const FormSkeleton = ({ rows, cols }: FormSkeletonProps) => {
  return (
    <tbody className="bg-white">
      {Array(rows)
        .fill(0)
        .map((_, i) => (
          <tr key={i}>
            {Array(cols).fill(0).map((_, i) => (
              <td className="px-3 py-1">
                <Skeleton width={`75%`} height={`1.3rem`}/>
              </td>
            ))}
            <td className="px-6 py-4 flex flex-row gap-x-3">
                <Skeleton width={`4rem`} height={`1.3rem`}/>
                <Skeleton width={`4rem`} height={`1.3rem`}/>
              </td>
          </tr>
        ))}
    </tbody>
  );
};
