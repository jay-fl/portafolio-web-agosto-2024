"use client";

import ListFeaturedWork from "@/components/list-featured-work";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation";

const FeaturedWorkSection = () => {
  const router = useRouter();

  return (
    <section id="featuredwork" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Featured Work" />
        <ListFeaturedWork />
        <Button
          type="button"
          label="View All Work"
          onClick={() => router.push("/work")}
        />
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;
