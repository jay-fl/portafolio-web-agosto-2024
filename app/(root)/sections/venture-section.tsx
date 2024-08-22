import ListVentures from "@/components/list-ventures";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const VentureSection = () => {
  return (
    <section id="ventures" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Ventures" />
        <ListVentures />
      </Container>
    </section>
  );
};

export default VentureSection;
