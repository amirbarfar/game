import Image from "next/image"

export default function newGame(props: any) {
    return (
        <div className="w-80 h-[450px] text-white font-bold bg-[#242731] rounded-4xl relative">
            <Image className="w-full" src={props.img} alt="main image" width={100} height={100} />
            <h1 className="mt-5 mx-8">{props.title}</h1>
            <p className="text-[#FF754C] mx-8 mt-4">قیمت {props.price} هزار تومان</p>
            <div className="border-[#FF754C] w-full border-4 mt-5 blur-xl"></div>
            <div className="border-[#FF754C] w-full border mt-2"></div>
            <div className="mt-5 flex justify-between items-center mx-2">
                <div className="flex justify-center items-center gap-2 mx-2">
                    <div className="w-2 h-2 rounded-full bg-[#6C5DD3]"></div>
                    <p className="my-5 text-sm">{props.Shopping} نفر خرید کرده اند.</p>
                </div>
                <button className="bg-[#FF754C2B] absolute left-0 bottom-0 text-[#FF754C] w-16 h-16 rounded-tr-xl rounded-br-xl rounded-bl-4xl">خرید</button>
            </div>
        </div>
    )
}
