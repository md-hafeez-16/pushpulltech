import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Cloud, Smartphone, ChevronRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { TextReveal } from "@/components/animations/text-reveal"
import { FloatingAnimation } from "@/components/animations/floating-animation"
import { AnimatedBackground } from "@/components/animations/animated-background"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
          <AnimatedBackground />
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <FadeIn delay={0.1}>
                  <Badge className="w-fit text-sm" variant="outline">
                    Custom Software Development
                  </Badge>
                </FadeIn>
                <TextReveal delay={0.2}>
                  <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight lg:text-6xl/tight text-blue-950">
                    Building Digital <span className="text-blue-600">Solutions</span> For Tomorrow
                  </h1>
                </TextReveal>
                <FadeIn delay={0.4}>
                  <p className="text-gray-600 md:text-xl">
                    We transform your ideas into powerful digital products. Web applications, mobile solutions, and
                    cloud infrastructure tailored to your business needs.
                  </p>
                </FadeIn>
                <FadeIn direction="up" delay={0.6}>
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
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="transition-all duration-300 ease-out hover:scale-105"
                    >
                      <Link href="/services">Explore Our Services</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FloatingAnimation amplitude={15} duration={6}>
                <div className="relative h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl rotate-3 opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=500&width=600"
                      alt="Digital transformation illustration"
                      width={600}
                      height={500}
                      className="object-cover rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </FloatingAnimation>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">Our Services</h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  We help businesses transform digitally through custom software development and cloud integration.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-3">
                {/* Web Application Development */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                    <CardContent className="p-6 flex flex-col gap-4 items-start">
                      <div className="rounded-full bg-blue-100 p-3 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                        <Code className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Web Application Development</h3>
                      <p className="text-gray-600">
                        Custom web applications built with modern technologies to streamline your business operations
                        and enhance user experience.
                      </p>
                      <Link
                        href="/services/web-development"
                        className="group flex items-center text-blue-600 font-medium"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Mobile App Development */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                    <CardContent className="p-6 flex flex-col gap-4 items-start">
                      <div className="rounded-full bg-purple-100 p-3 text-purple-600 transition-transform duration-300 group-hover:scale-110">
                        <Smartphone className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Mobile App Development</h3>
                      <p className="text-gray-600">
                        Native and cross-platform mobile applications that deliver exceptional performance and user
                        experience.
                      </p>
                      <Link
                        href="/services/mobile-development"
                        className="group flex items-center text-purple-600 font-medium"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Cloud Solutions */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                    <CardContent className="p-6 flex flex-col gap-4 items-start">
                      <div className="rounded-full bg-orange-100 p-3 text-orange-600 transition-transform duration-300 group-hover:scale-110">
                        <Cloud className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Cloud Solutions</h3>
                      <p className="text-gray-600">
                        Comprehensive cloud strategies and solutions for scalable, secure, and resilient infrastructure.
                      </p>
                      <Link
                        href="/services/cloud-solutions"
                        className="group flex items-center text-orange-600 font-medium"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
          <div className="container px-4 md:px-6 relative">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Featured Projects
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Some of our recent work delivering exceptional digital experiences.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Project 1 */}
                <StaggerItem>
                  <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="E-commerce platform"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-lg">E-commerce Platform</h3>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Web
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">
                        A fully customized e-commerce solution with integrated payment gateways and inventory
                        management.
                      </p>
                      <Link
                        href="/projects/ecommerce-platform"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        View case study
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Project 2 */}
                <StaggerItem>
                  <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Finance mobile app"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-lg">Finance Mobile App</h3>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          Mobile
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">
                        A secure financial application with real-time data synchronization and intuitive interface.
                      </p>
                      <Link
                        href="/projects/finance-app"
                        className="text-purple-600 font-medium hover:underline inline-flex items-center"
                      >
                        View case study
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Project 3 */}
                <StaggerItem>
                  <Card className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Cloud migration"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-lg">Cloud Migration</h3>
                        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                          Cloud
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Seamless migration of legacy systems to cloud infrastructure, improving performance and reducing
                        costs.
                      </p>
                      <Link
                        href="/projects/cloud-migration"
                        className="text-orange-600 font-medium hover:underline inline-flex items-center"
                      >
                        View case study
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="mt-12 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
                >
                  <Link href="/projects">
                    <span className="relative z-10">View all projects</span>
                    <span className="absolute inset-0 bg-blue-50 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  What Our Clients Say
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Hear from businesses we've helped transform digitally.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Testimonial 1 */}
                <StaggerItem>
                  <Card className="border-0 bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0 flex flex-col gap-4">
                      <div className="flex gap-1 text-yellow-400">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                      </div>
                      <p className="text-gray-600 italic">
                        "PUSHPULL TECHNOLOGIES transformed our outdated systems into a streamlined digital solution.
                        Their expertise and dedication to our project exceeded our expectations."
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          JD
                        </div>
                        <div>
                          <h4 className="font-medium">Jane Doe</h4>
                          <p className="text-sm text-gray-500">CEO, Example Corp</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Testimonial 2 */}
                <StaggerItem>
                  <Card className="border-0 bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0 flex flex-col gap-4">
                      <div className="flex gap-1 text-yellow-400">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                      </div>
                      <p className="text-gray-600 italic">
                        "The mobile application developed by the PUSHPULL team has completely changed how we engage with
                        our customers. The attention to detail and user experience is outstanding."
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          JB
                        </div>
                        <div>
                          <h4 className="font-medium">John Brown</h4>
                          <p className="text-sm text-gray-500">Marketing Director, Brand Inc</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Testimonial 3 */}
                <StaggerItem>
                  <Card className="border-0 bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0 flex flex-col gap-4">
                      <div className="flex gap-1 text-yellow-400">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                      </div>
                      <p className="text-gray-600 italic">
                        "Our cloud migration project seemed daunting until we partnered with PUSHPULL. Their expertise
                        made the transition smooth, and we've seen a 40% reduction in operating costs."
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                          SM
                        </div>
                        <div>
                          <h4 className="font-medium">Sarah Miller</h4>
                          <p className="text-sm text-gray-500">CTO, Tech Solutions Ltd</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
          <div className="container px-4 md:px-6 relative">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Our Technology Stack
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  We use cutting-edge technologies to deliver high-performance solutions.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {/* Tech logos would go here */}
                {Array(12)
                  .fill(0)
                  .map((_, i) => (
                    <StaggerItem key={i}>
                      <div className="h-16 w-32 bg-white flex items-center justify-center p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <Image
                          src="/placeholder.svg?height=64&width=128"
                          alt={`Technology ${i + 1}`}
                          width={128}
                          height={64}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </StaggerItem>
                  ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 opacity-50"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950 mb-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Let's discuss how PUSHPULL TECHNOLOGIES can help you achieve your digital transformation goals.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                      <span className="text-gray-600">Custom solutions tailored to your specific needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                      <span className="text-gray-600">Expert team with years of industry experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                      <span className="text-gray-600">Agile development methodology for faster delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                      <span className="text-gray-600">Ongoing support and maintenance services</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                      <ContactForm />
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
