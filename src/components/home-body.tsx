'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const HomeBody = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Don&apos;t let your business fall behind.
                  </h1>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none py-4">
                    Get started with AI in your workplace.
                  </h1>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl py-8">Transforming HR with the Power of AI</h2>
                <Link
                  href="/ai-for-hr-checklist"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 my-10 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Download our Essential AI for HR Checklist
                </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/images/bar-graph.png"
                  width={550}
                  height={550}
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Why AI in HR?</h2>
                <p className="text-muted-foreground md:text-xl mb-4">
                  HR is one of AI's best early adopters — <Link href="https://www.gartner.com/en/human-resources/topics/artificial-intelligence-in-hr" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">81% of HR leaders say they're already exploring or using AI</Link>. But the flood of vendors and quickly changing information lead to AI rollouts that eventually cause buyer's remorse, disenchanted end users, and wasted time for your team. Here's what savvy HR leaders already know: AI isn't just about technology—it's about people.
                </p>
                <p className="text-muted-foreground md:text-xl mb-4">
                  The key to successful AI adoption lies in recognizing the human factors at play and addressing the needs, concerns, and aspirations of your workforce.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Image
                  src="/images/lines-w-circles.png"
                  width={550}
                  height={550}
                  alt="AI in HR"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/images/suprematism-lines.png"
                  width={550}
                  height={550}
                  alt="Our Approach"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first lg:aspect-square"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-muted-foreground md:text-xl mb-4">
                  Our mission is to provide a different path toward successful AI adoption where your team and employees are empowered and supported. <strong>We blend practical AI Engineering know-how with Workplace Psychology insights to accelerate AI adoption in your workforce.</strong>
                </p>
                <p className="text-muted-foreground md:text-xl mb-4">
                  Specifically, we focus on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground md:text-xl mb-8">
                  <li><strong>Research-Based Frameworks</strong>: We created an HR-centered framework for AI adoption that is grounded in behavioral science and real-world research. This framework simplifies how to balance your organization's AI readiness, culture, and task-tech fit to create an effective and compassionate AI strategy.</li>
                  <li><strong>Psychological, Social, and Emotional Resistance to Tech</strong>: We help HR leaders and their teams identify practical AI use cases and develop functional prototypes. Our approach is unique in that we use hands-on demonstrations to address fears and boost confidence, overcoming mental, social, and emotional friction points. When handled correctly, teams see AI as an ally in their work.</li>
                  <li><strong>Scalable Solutions</strong>: We've designed our consulting guidance, tools, and frameworks to help you scale. We don't leave you with access to new tools or systems without a plan for how they will provide high-impact, high-margin results that grow with your organization.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8"
            >
              Why Workplace Labs?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground md:text-xl mb-8"
            >
              We not only help you identify high-value use cases for your team and business, our team has spent over two decades (combined) advising HR leaders and creating bespoke software solutions.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-muted-foreground md:text-xl mb-8"
            >
              Unlike other AI consultancies that take a technology-only approach to process and workflow transformation, we understand the challenges to successful AI adoption from an HR perspective (and have hands-on experience solving them).
            </motion.p>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
            >
              Discover the Power of AI in HR: Key Use Cases
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground md:text-xl mb-8"
            >
              These are just a few examples of the HR problems we have solved and how we can integrate AI:
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Identifying Skills & Optimizing Tasks: We use job and task analysis to understand critical skills and identify where AI can add the most value to performing tasks across your organization.',
                'Enhancing Recruitment Processes: We specialize in talent acquisition best practices and can help Integrate conversational AI to streamline recruitment and improve candidate experience— saving recruiters\' and hiring managers\' time.',
                'Designing Assessments and Surveys: We are trained in advanced research methods and psychometrics and are equipped to automate high-volume survey programs to gather attitudinal and behavioral data at scale.',
                'Developing Interview & Performance Tools: We create smarter interview guides, scoring rubrics, and performance metrics and use AI skills and agents to help automate and streamline the process for your team.',
                'Creating an Upskilling & Reskilling Strategy: We have conducted several studies on the changing skill requirements due to AI adoption and integration. We can assist with designing AI upskilling programs that prepare your workforce for the future.',
                'Coordinating and Implementing Workforce Planning: We help you understand and measure the impacts of AI adoption on your workforce and use AI to improve scheduling, forecasting, and in-office coordination.'
              ].map((useCase, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 4) }}
                  className="bg-card p-6 rounded-lg shadow-sm border-2"
                >
                  <h3 className="text-xl font-semibold mb-2">{useCase.split(':')[0]}</h3>
                  <p className="text-muted-foreground">{useCase.split(':')[1]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
            >
              Stay Ahead of the Curve
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground md:text-xl mb-8"
            >
              Sign up for our newsletter to stay up to date on future courses and the best of AI for HR.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="https://newsletter.workplacelabs.io/p/4d84de5c-5ab7-453e-84c3-6c30c1f1bc2b"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Subscribe to Newsletter
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};