import React from "react"
import Image from "next/image"
import { SearchForm } from "../gallery/search-form"
import cloudinary from 'cloudinary'


export type SearchResult = {
    public_id: string;
    tags: string[];
};

export default async function HomePage({
    searchParams: { search },
}: {
    searchParams: {
        search: string;
    };
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };

    return (

        <div className="relative">

            <Image
                src="/new2.jpg"
                width="2600"
                height="2500"
                alt="an image"
                className="w-full h-auto "
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-lg ">
                <h1 className="text-8xl col-span-12 sm:col-span-1 ">
                    Welcome.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisi</p>
                <div className="grid grid-cols-1 sm:grid-cols-12 col-span-12 sm:col-span-7">
                    <div className="col-span-12 sm:col-span-1"></div> 
                    <div className="col-span-12 sm:col-span-11 flex flex-col justify-center text-center sm:text-left">
                        <SearchForm initialSearch={search} />
                    </div>
                </div>
            </div>



        </div>
    )
}