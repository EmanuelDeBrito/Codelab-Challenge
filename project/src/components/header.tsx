import { Button } from "./button"
import { NavItem } from "./nav-item"

export const Header = () => {
    return(
        <header className="flex items-center h-[90px] bg-[#1C1C1F] border-b-4 border-b-[#34343A]">
            <div className="flex-1 flex justify-between items-center max-w-5xl mx-auto">
                <div className="text-[30px] text-white font-bold">
                    CodeLab<span className="text-[#8946FF]">.</span>
                </div>

                <nav className="flex items-center">
                    <ul className="flex items-center gap-12">
                        <NavItem label="Página inicial" />
                        <NavItem label="Sobre" />
                        <Button label="Entrar na comunidade"/>
                    </ul>
                </nav>
            </div>
        </header>
    )
}