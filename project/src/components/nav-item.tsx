type Props = {
    label: string
}

export const NavItem = ({ label }: Props) => {
    return(
        <li className="text-[16px] text-white font-500 cursor-pointer hover:underline">{label}</li>
    )
}