import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="border-b border-gray-500/30 pb-10">
      <Container>
        <Title title="About jaydev" />
        <div className="relative w-full h-[500px] rounded-xl">
          <Image
            src="https://img.freepik.com/foto-gratis/programador-indio-masculino-que-trabaja-computadora-escritorio-escritorio-blanco-oficina_231208-3636.jpg"
            alt="Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="mt-10 space-y-10">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptate ipsam, impedit eum alias, debitis assumenda quo, quibusdam
            magnam rerum eius asperiores modi quos a. Obcaecati ipsam ex at
            error. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Error, corporis. Nihil perferendis atque expedita delectus
            voluptatum corporis nam assumenda, magni soluta. Eius non eligendi
            perspiciatis ipsam placeat animi officia veritatis sit amet
            consectetur.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            corrupti praesentium dolor autem, iste tempore cumque! Quas
            quibusdam quae harum neque, laudantium magni odio, perspiciatis unde
            omnis in quisquam iure. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae, accusamus dolorem ab rerum repellendus
            laudantium ipsam incidunt maiores, perspiciatis unde omnis in
            quisquam iure. Lorem ipsum dolor sit amet, corporis facere odio
            laborum, debitis soluta. Perspiciatis, architecto? Ex libero quo
            possimus!
          </p>
          <p className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi laborum omnis, obcaecati dolores similique assumenda incidunt sint reprehenderit eveniet ea, fuga modi recusandae voluptatum corporis amet explicabo quo consectetur repellat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptatibus amet, saepe ex necessitatibus voluptas molestiae provident velit excepturi, quis libero tenetur consequatur nisi blanditiis illo quam doloribus odit distinctio.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus inventore laudantium rem incidunt molestiae commodi non, id alias eos, facere quibusdam labore! Accusantium dolore, modi te. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam saepe, quisquam commodi, fugiat culpa obcaecati quibusdam ipsum ducimus explicabo autem dolores molestiae dolorem neque officiis sit. Nulla ducimus.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sit odit ullam ex quasi laboriosam, maxime perferendis sunt adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem porro accusamus dolore assumenda aliquid voluptatem, reprehenderit repudiandae cumque? Excepturi velit quia iure neque asperiores quo sint. 
          </p>
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
