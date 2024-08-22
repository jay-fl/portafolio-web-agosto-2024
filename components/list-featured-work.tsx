import CardFeaturedWork from "@/components/ui/card-featured-work";

const ListFeaturedWork = () => {
    return (  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        <CardFeaturedWork
          href="/work/details"
          image="https://img.freepik.com/psd-gratis/diseno-mock-up-pantalla-telefono-movil_1292-27.jpg"
          category="Blogging"
          title="Mindful Blog Mobile App"
        />
        <CardFeaturedWork
          href="/work/details"
          image="https://img.freepik.com/foto-gratis/bicicleta-genial-estudio_23-2150884378.jpg"
          category="E-Commerce"
          title="Pedals Website"
        />
        <CardFeaturedWork
          href="/work/details"
          image="https://img.freepik.com/fotos-premium/horizonte-ciudad_1306249-2574.jpg"
          category="E-Commerce"
          title="Nike Web App"
        />
      </div> );
}
 
export default ListFeaturedWork;