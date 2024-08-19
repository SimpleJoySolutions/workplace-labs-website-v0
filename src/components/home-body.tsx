import Link from 'next/link';
import Image from 'next/image';

export const HomeBody = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Don&apos;t let your business fall behind.
                  </h1>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none py-4">
                    Get started with AI in your workplace.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transforming HR with the Power of AI
                  </p>
                </div>
              </div>
              <Image
                src="/images/bar-graph.png"
                width={550}
                height={550}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Transforming HR with the Power of AI</h2>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 my-10 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Download our Essential AI for HR Checklist
                </Link>
                <h3 className="text-2xl font-bold my-4">Why AI in HR?</h3>
                <p className="text-muted-foreground md:text-xl mb-4">
                  <Link href="https://www.gartner.com/en/human-resources/topics/artificial-intelligence-in-hr" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">81% of HR leaders are already exploring or implementing AI solutions.</Link>
                </p>
                <p className="text-muted-foreground md:text-xl mb-4">
                  But AI is more than just a tool—it's a partner in enhancing productivity, job satisfaction, and overall organizational success.
                </p>
                <p className="text-muted-foreground md:text-xl mb-4">
                  The real challenge isn't just introducing AI; it's about making your employees feel valued, secure, and competent in a world that's rapidly evolving.
                </p>
                <p className="text-muted-foreground md:text-xl mb-8">
                  We specialize in turning AI resistance into AI empowerment, ensuring your team not only adapts but thrives.
                </p>
              </div>
              <Image
                src="/images/lines-w-circles.png"
                width={550}
                height={550}
                alt="AI in HR"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <Image
                src="/images/suprematism-lines.png"
                width={550}
                height={550}
                alt="Our Approach"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first lg:aspect-square"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-muted-foreground md:text-xl mb-4">
                  We blend AI Engineering with Workplace Psychology to help seamlessly integrate AI into your workforce.
                </p>
                <p className="text-muted-foreground md:text-xl mb-4">
                  Adopting AI without buyer's remorse, disenchanted users, and wasted time isn't just about the technology—it's about your people.
                </p>
                <p className="text-muted-foreground md:text-xl mb-4">
                  Our mission is to empower your employees by guiding them through the AI transformation process, ensuring they feel confident and supported every step of the way.
                </p>
                <p className="text-muted-foreground md:text-xl mb-4">
                  We don't believe in a one-size-fits-all solution. Your organization has its unique culture, challenges, and goals. Our approach is tailored to meet those needs, focusing on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground md:text-xl mb-8">
                  <li><strong>Research-Based Content</strong>: Our strategies are grounded in behavioral science and real-world research, not just marketing fluff. We provide HR teams with the tools and knowledge they need to integrate AI effectively and compassionately.</li>
                  <li><strong>Employee Empowerment</strong>: We guide your employees through the AI transition, addressing fears and boosting confidence. We help them see AI as an ally in their work, not a threat.</li>
                  <li><strong>Scalable Solutions</strong>: Our content and tools are designed to scale, providing high-impact, high-margin results that grow with your organization.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Why Workplace Labs?</h2>
            <p className="text-muted-foreground md:text-xl mb-8">
              The difference between simply introducing another tool and making your staff feel empowered by AI is where we excel. We focus on:
            </p>
            <ul className="space-y-2 text-muted-foreground md:text-xl mb-8">
              <li><strong>AI Strategy</strong>: Helping HR teams understand where and how AI can be most effectively integrated into their workflows.</li>
              <li><strong>Content Mastery</strong>: Offering content that teaches practical AI application, fostering greater adoption and smoother transitions.</li>
              <li><strong>Overcoming Resistance</strong>: Navigating the complexities of change management, ensuring your team feels supported rather than overwhelmed.</li>
            </ul>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Discover the Power of AI in HR: Key Use Cases</h2>
            <p className="text-muted-foreground md:text-xl mb-8">
              These are just a few examples of the most impactful ways we've identified to harness AI in HR, based on cutting-edge research and real-world success.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Job Analysis & Task Optimization: Identify where AI can add the most value across your organization.',
                'Enhanced Recruitment Processes: Integrate conversational AI to streamline recruitment, improve candidate experience, and save valuable time.',
                'Interview & Performance Tools: Develop smarter interview guides, scoring rubrics, and performance metrics using AI-driven insights.',
                'Emotional Analysis in Employee Surveys: Incorporate advanced emotional analysis into engagement surveys to get a true sense of employee sentiment.',
                'Upskilling & Reskilling Strategies: Design AI upskilling programs that prepare your workforce for the future.',
                'Workforce Planning & Coordination: Use AI to improve scheduling, forecasting, and in-office coordination.'
              ].map((useCase, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{useCase.split(':')[0]}</h3>
                  <p className="text-muted-foreground">{useCase.split(':')[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">The AI for HR Mastermind</h2>
            <p className="text-xl mb-8">Elevate your HR Strategy with our exclusive Mastermind Class</p>
            <p className="text-muted-foreground md:text-xl mb-8">
              The AI for HR Mastermind class is a unique, immersive experience designed for HR leaders who are ready to lead the AI revolution within their organizations. This isn't just another course—it's a collaborative journey where you'll work directly with industry experts, dive deep into practical applications of AI in HR, and walk away with a clear, actionable AI strategy tailored to your organization's needs.
            </p>
            <div className="space-y-4">
              <p className="font-bold">In this Mastermind, you'll:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground md:text-xl">
                <li><strong>Gain Expert Insights</strong>: Learn from top AI engineers and workplace psychologists about the most effective ways to integrate AI into HR functions.</li>
                <li><strong>Collaborate with Peers</strong>: Share experiences and strategies with other HR leaders facing similar challenges.</li>
                <li><strong>Develop a Custom AI Strategy</strong>: Leave with a roadmap for AI adoption that is directly applicable to your organization's unique environment.</li>
                <li><strong>Overcome Resistance</strong>: Learn how to address and manage the common fears and barriers associated with AI adoption.</li>
              </ul>
              <p className="font-bold mt-8">Who Should Attend?</p>
              <p className="text-muted-foreground md:text-xl">
                This Mastermind is ideal for HR professionals who are serious about leveraging AI to transform their organizations. Whether you're just beginning your AI journey or looking to enhance your existing strategy, this course will provide the tools, knowledge, and support you need to succeed.
              </p>
              <Link
                href="/ai-for-hr-mastermind"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
                prefetch={false}
              >
                Learn More About the AI for HR Mastermind
              </Link>
            </div>
          </div>
        </section> */}

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Stay Ahead of the Curve</h2>
            <p className="text-muted-foreground md:text-xl mb-8">
              Sign up for our newsletter to stay up to date on future courses and the best of AI for HR.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};