import { ReactNode } from "react";
import {cn} from "@/utils/Tailwind";

const TailwindWrapper = ({className,children,}: {
      className?: string;
      children: ReactNode;
    }) => {
      return (
          <div
              className={cn(
                  "w-full p-4 bg-white border border-gray-200 rounded-xl shadow-md shadow-indigo-800/30 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700/70",
                  className,
              )}
          >
            {children}
          </div>
      );
};

export default TailwindWrapper;
