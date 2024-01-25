import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-[#ffc700] w-full h-[450px] border-b-4 border-black flex relative">
            <div className="w-full overflow-hidden relative">
                <div className="flex items-center gap-20 absolute left-[-240px] top-0 bottom-0">
                    <Image
                        src='/image-to-header-1.png'
                        alt="image 1"
                        width={400}
                        height={400}
                        className="w-[400px] h-[400px]"
                    />
                    <Image
                        src='/image-to-header-2.png'
                        alt="image 2"
                        width={400}
                        height={400}
                        className="w-[400px] h-[400px]"
                    />
                    <Image
                        src='/image-to-header-3.png'
                        alt="image 3"
                        width={400}
                        height={400}
                        className="w-[400px] h-[400px]"
                    />
                    <Image
                        src='/image-to-header-4.png'
                        alt="image 4"
                        width={400}
                        height={400}
                        className="w-[400px] h-[400px]"
                    />
                </div>
            </div>
            <div className="m-auto border-4 border-black rounded-full absolute right-8 lg:right-32 bottom-[-15%] overflow-hidden">
                <Image
                    src='/donated.jpg'
                    alt="product4"
                    width={400}
                    height={400}
                    className="w-[120px] h-[120px]"
                    style={{ transform: 'scale(1.1)' }}
                />
            </div>
        </header>
    )
}
