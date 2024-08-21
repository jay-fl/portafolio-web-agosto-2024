'use client';
import Button from "@/components/ui/button";
import CardBlog from "@/components/ui/card-blog";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation";

const BlogSection = () => {

    const router = useRouter();

  return (
    <section id="blog" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Blog" />
        <div className="space-y-5">
          <CardBlog
            href="/blog/blog-1"
            image="https://img.freepik.com/vector-gratis/moderno-fondo-tecnologia-azul_1035-9559.jpg"
            title="What's The Difference Between UX And UI"
            category="Design"
            ago="4 min read"
          />
          <CardBlog
            href="/blog/blog-2"
            image="https://img.freepik.com/vector-gratis/fondo-tecnologia-estilo-abstracto_23-2147829908.jpg"
            title="Take It One Step At A Time"
            category="Productivity"
            ago="3 min"
          />
          <CardBlog
            href="/blog/blog-3"
            image="https://img.freepik.com/vector-gratis/concepto-fondo-formas-superpuestas_23-2148669866.jpg"
            title="How Do I Design A Website?"
            category="Design"
            ago="4 min read"
          />
          <CardBlog
            href="/blog/blog-4"
            image="https://img.freepik.com/vector-gratis/fondo-tecnologia-conexion-malla-red-baja-poli_1017-27068.jpg"
            title="3 Simple Steps To Boost Your Productivity."
            category="Productivity"
            ago="4 min"
          />
          <CardBlog
            href="/blog/blog-5"
            image="https://img.freepik.com/foto-gratis/render-3d-diseno-comunicaciones-red-baja-poli_1048-13633.jpg"
            title="5 Digital Product Ideas For Designers"
            category="Making Money"
            ago="4 min"
          />
        </div>
        <Button type="button" label="View All Post" onClick={() => router.push('/blog')}/>
      </Container>
    </section>
  );
};

export default BlogSection;
