import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Server, Database, Layout } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function WebDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <FadeIn delay={0.1}>
                  <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight lg:text-6xl/tight text-blue-950">
                    Web Application <span className="text-blue-600">Development</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-gray-600 md:text-xl">
                    Custom web applications built with modern technologies to streamline your business operations and
                    enhance user experience.
                  </p>
                </FadeIn>
                <FadeIn direction="up" delay={0.5}>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      size="lg"
                      asChild
                      className="relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
                    >
                      <Link href="/contact">
                        <span className="relative z-10">Start Your Project</span>
                        <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute inset-0 bg-blue-700 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                      </Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Web Development"
                    width={600}
                    height={400}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Service Description Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="relative h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Web Development Process"
                    width={600}
                    height={500}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                    Transforming Ideas into Powerful Web Applications
                  </h2>
                  <p className="text-gray-600">
                    At PUSHPULL TECHNOLOGIES, we specialize in developing custom web applications that solve complex
                    business challenges. Our team of experienced developers, designers, and strategists work together to
                    create solutions that are not only technically robust but also user-friendly and visually appealing.
                  </p>
                  <p className="text-gray-600">
                    Whether you need a customer portal, an e-commerce platform, a content management system, or a custom
                    business application, we have the expertise to deliver a solution that meets your specific
                    requirements.
                  </p>
                  <p className="text-gray-600">
                    We use the latest technologies and frameworks to ensure your web application is fast, secure, and
                    scalable. Our development process is transparent, collaborative, and focused on delivering value at
                    every stage.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Benefits of Custom Web Applications
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Why choose a custom web application over off-the-shelf solutions?
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Benefit 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Tailored to Your Needs</h3>
                      <p className="text-gray-600 flex-1">
                        Custom web applications are designed specifically for your business processes, providing exactly
                        the features you need without unnecessary complexity.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Benefit 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Increased Efficiency</h3>
                      <p className="text-gray-600 flex-1">
                        Streamline your operations with automated workflows and integrated systems, reducing manual
                        tasks and improving productivity.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Benefit 3 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Scalability</h3>
                      <p className="text-gray-600 flex-1">
                        Custom web applications can grow with your business, allowing for easy addition of new features
                        and functionality as your needs evolve.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Benefit 4 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Enhanced Security</h3>
                      <p className="text-gray-600 flex-1">
                        Custom applications can be built with security in mind from the ground up, reducing
                        vulnerabilities and protecting your sensitive data.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Benefit 5 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Better User Experience</h3>
                      <p className="text-gray-600 flex-1">
                        Create intuitive interfaces designed specifically for your users, improving satisfaction and
                        adoption rates.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Benefit 6 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Competitive Advantage</h3>
                      <p className="text-gray-600 flex-1">
                        Gain an edge over competitors with unique features and capabilities that differentiate your
                        business in the market.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Our Development Process
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  A transparent, collaborative approach to building your web application.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Process Step 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <span className="font-bold text-lg">1</span>
                      </div>
                      <h3 className="text-xl font-bold">Discovery & Planning</h3>
                      <p className="text-gray-600 flex-1">
                        We start by understanding your business goals, user needs, and technical requirements to create
                        a comprehensive project plan.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Process Step 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <span className="font-bold text-lg">2</span>
                      </div>
                      <h3 className="text-xl font-bold">Design & Prototyping</h3>
                      <p className="text-gray-600 flex-1">
                        We create wireframes and interactive prototypes to visualize the user interface and experience
                        before development begins.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Process Step 3 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <span className="font-bold text-lg">3</span>
                      </div>
                      <h3 className="text-xl font-bold">Development</h3>
                      <p className="text-gray-600 flex-1">
                        Our experienced developers build your application using modern technologies and best practices,
                        with regular updates and demos.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Process Step 4 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <span className="font-bold text-lg">4</span>
                      </div>
                      <h3 className="text-xl font-bold">Testing & Deployment</h3>
                      <p className="text-gray-600 flex-1">
                        We thoroughly test your application for functionality, performance, and security before
                        deploying it to your chosen environment.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Technologies We Use
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  We leverage modern technologies to build robust, scalable web applications.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-12 md:grid-cols-3">
              {/* Frontend */}
              <FadeIn direction="up" delay={0.1}>
                <div className="flex flex-col gap-4 items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                    <Layout className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>React.js</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Next.js</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Vue.js</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Angular</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Backend */}
              <FadeIn direction="up" delay={0.2}>
                <div className="flex flex-col gap-4 items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                    <Server className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Backend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Express.js</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Python/Django</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Ruby on Rails</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>PHP/Laravel</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Database */}
              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-col gap-4 items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                    <Database className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Database</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>MongoDB</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>PostgreSQL</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>MySQL</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Firebase</span>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Redis</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">Case Studies</h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  See how we've helped businesses transform with custom web applications.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Case Study 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="E-commerce platform"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">E-commerce Platform</h3>
                      <p className="text-gray-600 mb-4">
                        A fully customized e-commerce solution with integrated payment gateways and inventory
                        management.
                      </p>
                      <Link
                        href="/projects/ecommerce-platform"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        View case study
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Case Study 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Customer portal"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">Customer Portal</h3>
                      <p className="text-gray-600 mb-4">
                        A secure customer portal allowing clients to access services, support, and account information.
                      </p>
                      <Link
                        href="/projects/customer-portal"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        View case study
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Case Study 3 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Business management system"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">Business Management System</h3>
                      <p className="text-gray-600 mb-4">
                        An integrated system for managing operations, HR, and financial processes in a growing business.
                      </p>
                      <Link
                        href="/projects/business-management-system"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        View case study
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Ready to Build Your Web Application?
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-600 text-lg">
                  Let's discuss how PUSHPULL TECHNOLOGIES can help you create a custom web application that meets your
                  business needs.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <Button
                  size="lg"
                  asChild
                  className="relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
                >
                  <Link href="/contact">
                    <span className="relative z-10">Contact Us</span>
                    <span className="absolute inset-0 bg-blue-700 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
