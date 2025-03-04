'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import NewGame from "@/components/newGame";

export default function Home() {

  const newGame = [
    {id : 1 , img : '/images/main/1.png' , title : 'بازی Call Of Duty برای کنسول پلی استیشن ۵' , price : "۲/۳۰۰" , Shopping : '۲۵۷'},
    {id : 2 , img : '/images/main/2.png' , title : 'بازی Diablo 4 برای کنسول پلی استیشن ۵' , price : " ۳/۶۰۰" , Shopping : '567'},
    {id : 3 , img : '/images/main/3.png' , title : 'بازی Fortnite برای کنسول پلی استیشن ۵' , price : "۳/۴۵۰" , Shopping : '282'},
    {id : 4 , img : '/images/main/4.png' , title : 'بازی FIFA 23 برای کنسول پلی استیشن ۵' , price : " ۴/۵۰۰" , Shopping : '120'},
  ]

  return (
    <div className="bg-slate-900 min-h-screen px-20 py-12">
      <Navbar />
      <div>
        <Image src="/images/header-1.png" alt="header-img" className="w-full mt-10" width={800} height={800} />
      </div>
      <div>
        <div className="flex justify-between items-center mt-36 text-white font-bold">
          <h1 className="text-xl">جدید ترین بازی های فروشگاه</h1>
          <select className="bg-[#33353a] w-60 h-12 px-2 rounded-xl outline-0 text-[#808191] text-xs">
            <option value="">پرفروش ترین ها</option>
            <option value="">پر بازدید ترین ها</option>
            <option value="">محبوب‌های کاربران</option>
            <option value="">بازی‌های پیشنهادی</option>
            <option value="">تخفیف‌های ویژه</option>
          </select>
        </div>
        <div className="flex justify-center items-center gap-10 mt-10">
          {
            newGame.map((item)=>
              <NewGame {...item} key={item.id}/>
            )
          }
        </div>
      </div>
    </div>
  );
}
