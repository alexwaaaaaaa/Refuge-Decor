import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "prairie-ranch-kitchen",
    title: "Prairie Ranch Kitchen",
    category: "Interiors",
    image: "/images/portfolio_kitchen.png",
    description: "Limestone walls, custom white oak cabinetry, and soapstone surfaces styled to celebrate local Texas textures.",
    location: "Marfa, Texas",
    type: "Residential",
    size: "2,400 sq ft",
    year: "2023",
  },
  {
    slug: "brazos-river-bath",
    title: "Brazos River Bath",
    category: "Staging",
    image: "/images/portfolio_bathroom.png",
    description: "Luxury master bath staging featuring natural stone tile walls and a white oak floating vanity.",
    location: "Alpine, Texas",
    type: "Staging",
    size: "180 sq ft",
    year: "2023",
  },
];

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Refuge Decor`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <main className="container-custom py-24">
        <div className="mb-8">
          <span className="eyebrow block mb-4">{project.category}</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">{project.title}</h1>
          <p className="text-muted-text text-lg max-w-3xl">{project.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-sm">
          <div>
            <span className="block text-muted-text mb-1">Location</span>
            <span className="font-medium">{project.location}</span>
          </div>
          <div>
            <span className="block text-muted-text mb-1">Type</span>
            <span className="font-medium">{project.type}</span>
          </div>
          <div>
            <span className="block text-muted-text mb-1">Size</span>
            <span className="font-medium">{project.size}</span>
          </div>
          <div>
            <span className="block text-muted-text mb-1">Year</span>
            <span className="font-medium">{project.year}</span>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-12 bg-[#EFE7D8]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-3xl mb-4">Project Details</h2>
          <p className="text-muted-text">
            This project showcases our commitment to West Texas ranch aesthetic while incorporating modern comfort and functionality.
            Every material was selected to honor the local landscape and architectural traditions.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
