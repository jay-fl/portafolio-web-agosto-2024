import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";

const BlogDetails = () => {
  return (
    <main className="py-10 border-b border-gray-500/30">
      <Container >
        <Badge label="Design" className="text-primary" />
        <Title
          title="Whats the Difference Between UX and UI"
          className="mt-0 mb-10"
        />
        <article className=" space-y-10">
          <div className="relative w-full h-[500px] rounded-xl">
            <Image
              src="https://img.freepik.com/vector-gratis/fondo-degradado-ui-ux_23-2149052117.jpg"
              alt="Image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            laborum sint perferendis optio repudiandae veritatis reiciendis
            recusandae ad. Assumenda porro earum autem placeat possimus pariatur
            tempore corporis itaque iusto temporibus.
          </p>
          <h3 className="text-white text-2xl">User Experience (UX)</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            laborum sint perferendis optio repudiandae veritatis reiciendis
            recusandae ad. Assumenda porro earum autem placeat possimus pariatur
            tempore corporis itaque iusto temporibus.
          </p>
          <h5 className="text-lg text-white">Key aspects of UX design include:</h5>
            <ul className="text-gray-500 list-decimal space-y-5 ml-4">
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime odit est nihil architecto sit quos quas, ipsa eum temporibus similique ratione. 
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores expedita quod aperiam? Odit similique ea deserunt officiis, doloribus sit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptate ea deleniti sunt porro numquam autem. Reprehenderit cum laudantium, culpa modi beatae autem consequatur ea. 
                </li>
                <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempore dignissimos doloremque consequatur perspiciatis eveniet est, distinctio id asperiores.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime odit est nihil architecto sit quos quas.
                </li>
            </ul>
        </article>
      </Container>
    </main>
  );
};

export default BlogDetails;
