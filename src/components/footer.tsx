import Image from "next/image"
const Footer = () => {
  return (
    <div className="max-w-max_container bg-[#111111] m-auto flex justify-center py-4">
      <Image src={"/logo.webp"} width={"100"} height={"20"} alt="play" />
    </div>
  )
}

export default Footer
