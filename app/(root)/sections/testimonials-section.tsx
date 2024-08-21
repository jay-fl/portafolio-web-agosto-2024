import CardTestimonial from "@/components/ui/card-testimonial";
import Container from "@/components/ui/container";
import Title from '@/components/ui/title';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="border-b border-gray-500/30 py-10">
      <Container >
        <Title title="Testimonials"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <CardTestimonial message="Jackson possesses an exceptional talent for translating complex
        ideas into stunning and user-centric designs. He consistenly goes above
        and beyond to understand the core essence of a product and its intended
        audience, resulting in designs that are not only visually appealing but
        also highly functional." image="https://img.freepik.com/foto-gratis/hombre-barbudo-pelirrojo-vestido-traje-anteojos-fumando-pipa-tradicional-sobre-fondo-gris-oscuro_613910-15858.jpg" name="John Smith" position="ceo at mindful"/>
            <CardTestimonial message="I can't recommend Jackson enough. He brought a fres perspective to our project and consistenly delivered designs that were not only visually appealing but also aligned an invaluable asset to any design endeavor." image="https://img.freepik.com/foto-gratis/retrato-moda-joven-modelo-trabajando-cafe-terraza-dia-soleado_231208-4292.jpg" name="Stacy Sampson" position="lead engineer at luxe architects"/>
            <CardTestimonial message="Jackson effortlessly translated our concepts into visually stunning designs that not only captured our brand essence but also resonate with our target audence. His attention to detail and innovative thinking truly set him apart." image="https://img.freepik.com/fotos-premium/retrato-chica-atractiva-alegre-habil-direccion_1009902-118130.jpg" name="Angelina Corales" position="head of design at pedals"/>
            <CardTestimonial message="Jackson is a design wizard! He took our vague ideas and transformed them into sleek, intuitive designs that exceeded our wxpectations. His ability to balance creativety with practicality resulted in a product that's both aesthetically pleasing and user-friendly." image="https://img.freepik.com/foto-gratis/vista-frontal-sonriente-hombre-trabajo_23-2150152279.jpg" name="Jackie Johnson" position="staff product designer at nike"/>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;


        