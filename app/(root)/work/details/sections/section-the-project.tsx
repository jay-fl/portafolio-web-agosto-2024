import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";

const SectionTheProject = () => {
  return (
    <section
      id="sectionTheProject"
      className="border-b border-gray-500/30 py-10"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10">
          {/** lg solo si afecta en responsive */}
          <Subtitle subtitle="The Project" className="my-0" />
          <ul className="space-y-8 ">
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium">Challenge</h4>
              <p className="text-sm text-gray-500">
                One of the significant challenges was to strike a balance
                between presenting a vast variety of content and maintaining a
                clean, uncluttered interface. The challenge was to enhance
                content discoverability while ensuring that users were not
                overwhelmed by choices.
              </p>
            </li>
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium">Outcome</h4>
              <p className="text-sm text-gray-500">
                The collaborative efforts and strategic design decisions
                resulted in a successful outcome - average session duration and
                articles read per session saw an impressive increase of 50%
                within the first two months post-launch.
              </p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-96 sm:h-[500px] lg:[700px] rounded-xl mb-10">
          <Image
            src="https://img.freepik.com/foto-gratis/concepto-red-social-estilo-vida-tecnologia-vista-aerea_53876-23191.jpg"
            alt="Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="relative w-full h-96 sm:h-[500px] lg:[700px] rounded-xl">
            <Image
              src="https://img.freepik.com/foto-gratis/cuaderno-gafas-cerca-gadgets-taza_23-2147929562.jpg"
              alt="Image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-96 sm:h-[500px] lg:[700px] rounded-xl">
            <Image
              src="https://img.freepik.com/foto-gratis/persona-que-sostiene-telefono-movil-frente-lugar-trabajo_23-2147890226.jpg"
              alt="Image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionTheProject;
