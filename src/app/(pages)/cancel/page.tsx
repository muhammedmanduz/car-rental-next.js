import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import close from  "@/app/assets/icons/close.png"

const  Cancel = () => {
  return (
    <div className="bg-white h-screen">
      <div className="h-[50%] bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-10 ">
          <Image src={close} alt="cancel" width={80} height={80} />

          <p className="text-center text-4xl font-semibold">
           Maalesef ödeme başarısız oldu !
          </p>
        </div>
      </div>

      <div className="text-black p-10  mt-10 text-center">
        <p className=" text-lg ">
         Anasayfaya dönüp tekrar deneyebilirsiniz
        </p>
       <br /><br /><br />
        <Link
          href="/"
          className="border shadow py-2 px-5 rounded-lg text-lg hover:shadow-lg"
        >
          Anasayfa
        </Link>
      </div>
    </div>
  )
}

export default Cancel 