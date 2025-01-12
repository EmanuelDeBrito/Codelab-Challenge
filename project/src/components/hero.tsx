import { Photo } from "./photo"

export const Hero = () => {
    return(
        <section className="flex-1 flex items-center gap-16">
            <div className="flex-1">
                <div className="mb-3 text-[24px] text-[#00FF73]">Comunidade de desenvolvedores</div>
                <div className="mb-6 text-[48px] text-white">Projetos da CodeLab</div>
                <div className="text-[24px] text-white font-400">A CodeLab é uma comunidade para desafios de desenvolvimento frontend, onde os usuários podem treinar os seus conhecimentos em programação.</div>
            </div>
            <Photo
                src="/logo(1).png"
                width={400}
                height={400} 
                alt="Hero"
            />
        </section>
    )
}