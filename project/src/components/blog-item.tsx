import { Button } from "./button"
import { Photo } from "./photo"

type Props = {
    image: string,
    title: string
}

export const BlogItem = ({ image, title }: Props) => {
    return(
        <div className="w-full h-[420px] bg-[#1C1C1F] border border-[#34343A] rounded-lg overflow-hidden">
            <div className="flex justify-center items-center h-[245px] bg-[#8946FF]">
                <Photo 
                    src={image}
                    width={150}
                    height={150}
                    alt="Blog Image"                
                />
            </div>
            <div className="flex flex-col gap-8 h-full p-8">
                <div className="text-[32px] text-white">{title}</div>

                <div className="flex items-center gap-8">
                    <Button 
                        label="Detalhes"
                        dark                    
                    />
                    <Button 
                        label="Acessar"                    
                    />
                </div>  
            </div>
        </div>
    )
}