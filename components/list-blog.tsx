import CardBlog from "@/components/ui/card-blog";

const ListBlog = () => {
    return ( <div className="space-y-5">
        <CardBlog
          href="/blog/details"
          image="https://img.freepik.com/vector-gratis/moderno-fondo-tecnologia-azul_1035-9559.jpg"
          title="What's The Difference Between UX And UI"
          category="Design"
          ago="4 min read"
        />
        <CardBlog
          href="/blog/details"
          image="https://img.freepik.com/vector-gratis/fondo-tecnologia-estilo-abstracto_23-2147829908.jpg"
          title="Take It One Step At A Time"
          category="Productivity"
          ago="3 min"
        />
        <CardBlog
          href="/blog/details"
          image="https://img.freepik.com/vector-gratis/concepto-fondo-formas-superpuestas_23-2148669866.jpg"
          title="How Do I Design A Website?"
          category="Design"
          ago="4 min read"
        />
        <CardBlog
          href="/blog/details"
          image="https://img.freepik.com/vector-gratis/fondo-tecnologia-conexion-malla-red-baja-poli_1017-27068.jpg"
          title="3 Simple Steps To Boost Your Productivity."
          category="Productivity"
          ago="4 min"
        />
        <CardBlog
          href="/blog/details"
          image="https://img.freepik.com/foto-gratis/render-3d-diseno-comunicaciones-red-baja-poli_1048-13633.jpg"
          title="5 Digital Product Ideas For Designers"
          category="Making Money"
          ago="4 min"
        />
      </div> );
}
 
export default ListBlog;