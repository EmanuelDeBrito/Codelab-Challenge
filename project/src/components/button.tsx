type Props = {
    label: string,
    dark?: boolean
}

export const Button = ({ label, dark }: Props) => {
    return(
        <div className=
            {`
                flex justify-center items-center w-[250px] h-[40px] text-white text-[16px] rounded-lg cursor-pointer
                ${dark ? 'bg-[#232326]' : 'bg-[#8946FF]'}
                ${dark ? 'border border-gray-500' : ''}
                hover:opacity-90
            `}
        >
            {label}
        </div>
    )    
}