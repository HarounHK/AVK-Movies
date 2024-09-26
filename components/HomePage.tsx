import React from 'react'
import { BackgroundLines } from "../components/ui/background-lines";

export const HomePage = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    <h2 className="hover:text-gray-400 bg-clip-text text-white text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
    {/* <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"> */}
      AVK Movies <br /> Home to Everything Movies.
    </h2>
    <p className="hover:text-gray-400 max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center ">
        Discover your next favorite film, manage your watchlist, 
        and track movies you watched. Easily find detailed movie information and links to IMDb for more insights.
    </p>
  </BackgroundLines>
  )
}
