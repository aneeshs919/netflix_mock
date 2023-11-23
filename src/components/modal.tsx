import Image from 'next/image';

type ModalProps = {
    children?: React.ReactNode,
    onClose: () => (void)
}

const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className='fixed left-0 top-0 z-[1055] flex justify-center h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-[#00000099] text-white p-4'>
            <div className='bg-gray-700 max-h-[600px] no-scrollbar overflow-y-auto rounded-md relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[800px] transform-none opacity-100'>
                <div onClick={onClose} className='absolute right-0 top-0 text-2xl p-4 cursor-pointer bg-white z-10'><Image src={'/close.png'} width={20} height={20} alt={'close'} /></div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal