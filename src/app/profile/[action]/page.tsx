"use client"
import Post from "@/app/post/components/Post"
import DashPost from "@/components/DashPost"
import { PostDummy } from "@/components/dummies"
import { motion } from "framer-motion"
const Page = ({ params }: { params: any }) => {
    console.log(params)


    return (
        <div className='w-full bg-lightOne dark:bg-darkOne min-h-screen px-4 space-y-8 p-4 capitalize lg:py-10  '>

            <h1 className="text-2xl text-center">Saved {params.action}</h1>



            <div className="w-full md:flex flex-wrap gap-4 grid-cols-3 md:grid-cols-2 justify-center  place-items-start items-center space-y-6 md:space-y-0 mx-auto max-w-[1100px] ">
                {PostDummy.map((post, i) => (
                    <DashPost data={post} key={i} />
                ))}
            </div>

        </div >
    )
}

export default Page