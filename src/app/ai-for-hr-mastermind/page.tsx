/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/0WdrGkHX670
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Archivo } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export default function HomeBody() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">AI Mastermind</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Curriculum
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
 
                  <h4 className="text-5xl font-bold py-6">The Essential AI for HR Mastermind: From Concept to Action Plan in 4 Weeks</h4>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl py-4">
                  Our invite-only, 4-week mastermind training program and community helps HR and People leaders demystify Gen AI, spot use cases aligned with business goals, and turn their teams into the go-to company experts on AI.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Join the Mastermind
                    </Link>
                  </div>
                </div>
              </div>
              <img
                src="/images/man-working.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Benefits</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  In this 4-week mastermind, you&#39;ll learn how to:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Focus on Strategic Work</h3>
                      <p className="text-muted-foreground">
                        Automate repetitive HR tasks and free up your team to focus on high-impact strategic
                        initiatives.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Identify Valuable Use Cases</h3>
                      <p className="text-muted-foreground">
                        Discover how AI can streamline your HR processes, from talent acquisition to employee
                        engagement.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Upskill Your Team</h3>
                      <p className="text-muted-foreground">
                        Learn in-demand AI skills and empower your HR team to become leaders in the field.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/images/whiteboarding.png"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Most AI transformations...</h2>
                <ul className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left">
                  <li>
                    <h3 className="text-xl font-bold">Come with employees saying, "I am afraid for my job."</h3>
                    <p>(We help you address the cultural element of a successful AI adoption.)</p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">Have buyer&apos;s remorse after wasting a ton of time and money.</h3>
                    <p>
                      (We help you identify use cases that generate business results and have a high chance of success.)
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold">Come with questions about bias, accuracy, and legality.</h3>
                    <p>
                      (We help you develop a safe proof-of-concept you can show to stakeholders to get their buy-in.)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Become your company&apos;s go-to leader on AI
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Inside the AI in HR Mastermind, you’ll get resources curated for HR leaders, interactive and hands-on group training sessions, reusable templates and frameworks, and networking opportunities with like-minded HR and People leaders from some of the best companies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  4-Week AI for HR Mastermind Program
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                  Unlock the power of AI in HR through our comprehensive 4-week program
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-16 h-16 mb-6"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                <h3 className="text-2xl font-bold mb-3">Week 1: AI Readiness</h3>
                <h4 className="text-xl mb-3">The 6 driving forces behind successful (and unsuccessful) AI use cases</h4>
                <p className="text-muted-foreground text-lg">
                  Assess your organization&apos;s AI readiness and identify focus areas for long-term success.
                </p>
              </div>
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-16 h-16 mb-6"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                <h3 className="text-2xl font-bold mb-3">Week 2: Select Use Case</h3>
                <h4 className="text-xl mb-3">5 tips for choosing an AI use case that offers real results</h4>
                <p className="text-muted-foreground text-lg">
                  Navigate common concerns and ensure your initiatives deliver measurable business outcomes.
                </p>
              </div>
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-16 h-16 mb-6"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
                <h3 className="text-2xl font-bold mb-3">Week 3: Prototype</h3>
                <h4 className="text-xl mb-3">3 steps to building a proof-of-concept</h4>
                <p className="text-muted-foreground text-lg">
                  Learn to quickly build prototypes that demonstrate the value of your AI initiatives.
                </p>
              </div>
              <div className="border-2 border-muted rounded-lg p-8 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-16 h-16 mb-6"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
                <h3 className="text-2xl font-bold mb-3">Week 4: Scale</h3>
                <h4 className="text-xl mb-3">How to scale your proof-of-concept</h4>
                <p className="text-muted-foreground text-lg">
                  Create a comprehensive action plan to scale your AI initiatives and deliver sustainable value.
                </p>
              </div>
            </div>
          </div>
        </section>
       
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Who should join the AI for HR mastermind?
                </h2>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold">Leaders who want to start or streamline their AI journey</h3>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Are you looking for ways to get started with AI? Or maybe you’re experimenting with AI tools and need better ways to test your progress and get buy-in? If you’re starting or upskilling in AI, this mastermind group is for you.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Leaders who want to network with other early adopters</h3>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Want to learn from what others are doing? Are you looking for benchmarks and feedback on what you’ve tried so far? You’ll have an opportunity to network and trade notes with other amazing HR leaders who are passionate about AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
              <p className="max-w-[900px] text-xl md:text-2xl">
                To cut through the noise and teach AI skills that help HR leaders create more engaged, equitable, and evidence-based workplaces.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Apply to Join the Essential AI for HR Mastermind
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  If you&#39;re ready to become an AI-empowered HR leader and the go-to company expert, we would love to
                  have you.
                </p>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Click the link below to fill out an application—we want to make sure the program would be a good fit
                  for you and share news as it happens!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 AI Mastermind. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
