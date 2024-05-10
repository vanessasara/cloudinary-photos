import Link from "next/link";
export default function Footer() {

    return (
        <footer className="bg-transparent flex h-16 items-center px-4 container mx-auto">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 hover:underline">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">

                    </div>
                   
                </div>
                <hr
                    className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div
                    className="sm:flex sm:items-center sm:justify-between">
                    <span
                        className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">CodeWithSara™</a>. All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>
    );
}
