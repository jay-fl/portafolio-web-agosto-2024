import CardVentures from "@/components/ui/card-ventures";
import { cn } from "@/libs/utils";

interface ListVenturesProps {
    className?: string;
}

const ListVentures = ({className}: ListVenturesProps) => {
    return ( <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10', className)}>
        <CardVentures
          href="https://saint-tech.lv/?lang=en"
          image="https://img.freepik.com/vector-gratis/plantilla-logotipo-laptop-plana_23-2149014685.jpg"
          title="Framer Templates"
          description="Creating Framer templates for designers, agencies, and content creators."
        />
        <CardVentures
          href="https://datalatienda.com"
          image="https://img.freepik.com/vector-gratis/plantilla-logotipo-datos-dibujados-mano_23-2149199406.jpg"
          title="Curated To Create"
          description="A directory of hand-picked tools for the creator economy."
        />
        <CardVentures
          href="https://thecloud.group"
          image="https://img.freepik.com/vector-gratis/plantilla-logotipo-laptop-plana_23-2149020405.jpg"
          title="Minimal Visual"
          description="An Etsy store curated from my own photography."
        />
      </div> );
}
 
export default ListVentures;