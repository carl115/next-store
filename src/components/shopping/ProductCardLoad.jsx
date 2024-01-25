export default function ProductCardLoad() {
    return (
        <div className="animate-pulse justify-between mb-6 bg-slate-200 rounded-md p-6 shadow sm:flex sm:justify-start">
            <div className="bg-slate-300 w-full rounded-lg sm:w-40"></div>
            <div className="w-52 ml-4 grid grid-rows-2 gap-2">
                <div className="w-full grid grid-cols-[1fr_80px]">
                    <div className="w-28 h-10 bg-slate-300 rounded-md"></div>
                    <div className="w-full h-10 bg-slate-300 rounded-md"></div>
                </div>
                <span className="bg-slate-300 w-full h-full rounded-md"></span>
            </div>
        </div>
    )
}
