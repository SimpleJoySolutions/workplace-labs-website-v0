import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
                About Us
              </h1>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                We are passionate about empowering HR professionals with cutting-edge AI solutions to transform workplaces.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <FounderProfile
                name="Jane Doe"
                role="Co-Founder & CEO"
                bio="Jane has over 15 years of experience in HR technology and is dedicated to bridging the gap between AI and human-centric HR practices."
                imageSrc="/images/woman-looking.png"
              />
              <FounderProfile
                name="Jonathan Flower"
                role="Co-Founder & CTO"
                bio="Jonathan is an AI Engineer and Software Architect with a background in scalable enterprise solutions for clients such as BeaconMadeas and The Salvation Army.
                Founder of Simple Joy Solutions, Jonathan crafted a code blockchain solutions such as ArtForge and Mincraft.  Over the last year he has invested 
                heavily into learning artificial intelligence.  Jonathan completed an MIT Sloan course on AI: Implications for Business Strategy.  Jonathan has built a 
                number of AI agents leveraging knowledge graphs, mixture of experts, and LangChain."
                imageSrc="/images/jonathan-square.webp"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-8 bg-muted">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="text-sm text-muted-foreground">
              <p>
                <strong>Note:</strong> The majority of the images on this site were generated using Juggernaut XL with a Suprematism style, 
                run locally on an M1 MacBook Pro.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface FounderProfileProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const FounderProfile: React.FC<FounderProfileProps> = ({ name, role, bio, imageSrc }) => (
  <div className="flex flex-col items-center text-center">
    <Image
      src={imageSrc}
      alt={name}
      width={200}
      height={200}
      className="rounded-full mb-4"
    />
    <h2 className="text-2xl font-bold mb-2">{name}</h2>
    <h3 className="text-xl text-muted-foreground mb-4">{role}</h3>
    <p className="text-muted-foreground">{bio}</p>
  </div>
);
