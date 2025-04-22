import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function ServicesPage() {
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
                    Our <span className="text-blue-600">Services</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-gray-600 md:text-xl">
                    PUSHPULL TECHNOLOGIES offers a comprehensive range of digital solutions to help your business thrive in the digital age.
                  </p>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Our Services"
                    width={600}
                    height={400}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  What We Offer
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Discover our range of services designed to meet your business needs.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Web Development Service Card */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Web Development"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">Web Application Development</h3>
                      <p className="text-gray-600 mb-4">
                        Custom web applications built with modern technologies to streamline your business operations and enhance user experience.
                      </p>
                      <Link
                        href="/services/web-development"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Mobile Development Service Card */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Mobile Development"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">Mobile App Development</h3>
                      <p className="text-gray-600 mb-4">
                        Native and cross-platform mobile applications designed for seamless user experiences on iOS and Android devices.
                      </p>
                      <Link
                        href="/services/mobile-development"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* UI/UX Design Service Card */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="UI/UX Design"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">UI/UX Design</h3>
                      <p className="text-gray-600 mb-4">
                        User-centered design solutions that create intuitive, engaging interfaces for digital products.
                      </p>
                      <Link
                        href="/services/ui-ux-design"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Cloud Services Card */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Cloud Services"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">Cloud Services</h3>
                      <p className="text-gray-600 mb-4">
                        Cloud infrastructure solutions for scalable, reliable, and secure hosting of your digital assets.
                      </p>
                      <Link
                        href="/services/cloud-services"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Digital Marketing Card */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Digital Marketing"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">Digital Marketing</h3>
                      <p className="text-gray-600 mb-4">
                        Comprehensive digital marketing strategies to increase your online presence and drive growth.
                      </p>
                      <Link
                        href="/services/digital-marketing"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* IT Consulting Card */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="IT Consulting"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">IT Consulting</h3>
                      <p className="text-gray-600 mb-4">
                        Strategic technology consulting to help you make informed decisions for your business.
                      </p>
                      <Link
                        href="/services/it-consulting"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <FadeIn direction="left">
                <div className="relative h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Why Choose Us"
                    width={600}
                    height={500}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                    Why Choose PUSHPULL TECHNOLOGIES?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Expert Team</h3>
                        <p className="text-gray-600">
                          Our team consists of experienced professionals with diverse skills and expertise in various technologies.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Tailored Solutions</h3>
                        <p className="text-gray-600">
                          We create custom solutions specifically designed for your business needs and goals.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Transparent Process</h3>
                        <p className="text-gray-600">
                          We maintain clear communication and transparency throughout the entire project lifecycle.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Ongoing Support</h3>
                        <p className="text-gray-600">
                          We provide continuous support and maintenance services to ensure your solutions remain effective.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Ready to Transform Your Business?
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-600 text-lg">
                  Contact us today to discuss how our services can help you achieve your business goals.
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