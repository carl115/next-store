import Image from "next/image"

export default function Header() {
    return (
        <header className="bg-[#ffc700] w-full h-[450px] border-b-4 border-black flex relative">
            <Image
                src='/pexels-andrea-piacquadio-3755706.jpg'
                alt="product1"
                width={400}
                height={400}
                className="w-[350px] h-[350px] rounded-full border border-black absolute left-0 top-0 bottom-0 m-auto"
            />
            <Image
                src='/pexels-adrienne-andersen-2237801.jpg'
                alt="product2"
                width={400}
                height={400}
                style={{
                    objectFit: 'cover',
                    clipPath: 'polygon(0 0, 100% 0, 61% 51%, 100% 100%, 0 100%, 35% 51%)'
                }}
                className="w-[350px] h-[350px] border border-black absolute left-0 top-0 right-0 bottom-0 m-auto"
            />
            <Image
                src='/pexels-taryn-elliott-5405629.jpg'
                alt="product3"
                width={400}
                height={400}
                style={{
                    objectFit: 'cover',
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
                className="w-[350px] h-[350px] border border-black absolute top-0 right-0 bottom-0 m-auto"
            />
            <div className="m-auto border-4 border-black rounded-full absolute right-32 bottom-[-15%] overflow-hidden">
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
