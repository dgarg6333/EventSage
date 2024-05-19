import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 text-center sm:flex-row">
        <Link href='/' className=" flex flex-row pl-2">
          <Image 
            src="/assets/images/logo.png"
            alt="logo"
            width={50}
            height={16}
          />
          <div className='text-2xl font-semibold pt-3'>EventSage</div>
        </Link>

        <p>2023 EventSage. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer