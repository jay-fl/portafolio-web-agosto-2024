'use client';

import Button from "@/components/ui/button";
import CardFeaturedWork from "@/components/ui/card-featured-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation";

const FeaturedWorkSection = () => {

    const router = useRouter();

  return (
    <section id="featuredwork" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Featured Work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <CardFeaturedWork
            href="/featured-1"
            image="https://img.freepik.com/psd-gratis/diseno-mock-up-pantalla-telefono-movil_1292-27.jpg"
            category="Blogging"
            title="Mindful Blog Mobile App"
          />
          <CardFeaturedWork
            href="/featured-1"
            image="https://img.freepik.com/foto-gratis/bicicleta-genial-estudio_23-2150884378.jpg"
            category="E-Commerce"
            title="Pedals Website"
          />
          <CardFeaturedWork
            href="/featured-1"
            image="https://img.freepik.com/fotos-premium/horizonte-ciudad_1306249-2574.jpg"
            category="E-Commerce"
            title="Nike Web App"
          />
        </div>
        <Button type="button" label="View All Work" onClick={() => router.push('/work')}/>
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;
