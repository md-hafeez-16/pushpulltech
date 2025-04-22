import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function AboutPage() {
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
                    About <span className="text-blue-600">PUSHPULL</span> TECHNOLOGIES
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-gray-600 md:text-xl">
                    We're a team of passionate developers, designers, and strategists dedicated to transforming
                    businesses through innovative digital solutions.
                  </p>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Team collaboration"
                    width={600}
                    height={400}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div className="relative h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Company history"
                    width={600}
                    height={500}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">Our Story</h2>
                  <p className="text-gray-600">
                    Founded in 2015, PUSHPULL TECHNOLOGIES began with a simple mission: to help businesses leverage
                    technology to achieve their goals. What started as a small team of three developers has grown into a
                    full-service digital solutions provider with offices in multiple locations.
                  </p>
                  <p className="text-gray-600">
                    Over the years, we've worked with startups, mid-sized businesses, and enterprise clients across
                    various industries, delivering custom software solutions that drive growth and efficiency.
                  </p>
                  <p className="text-gray-600">
                    Our approach combines technical expertise with a deep understanding of business needs, allowing us
                    to create solutions that not only solve immediate challenges but also support long-term objectives.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">Our Values</h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  These core principles guide everything we do at PUSHPULL TECHNOLOGIES.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Value 1 */}
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
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Excellence</h3>
                      <p className="text-gray-600 flex-1">
                        We strive for excellence in everything we do, from code quality to client communication.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Value 2 */}
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
                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Collaboration</h3>
                      <p className="text-gray-600 flex-1">
                        We believe in the power of teamwork, both within our company and with our clients.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Value 3 */}
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
                            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Innovation</h3>
                      <p className="text-gray-600 flex-1">
                        We embrace new technologies and approaches to deliver cutting-edge solutions.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Value 4 */}
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
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Integrity</h3>
                      <p className="text-gray-600 flex-1">
                        We operate with honesty, transparency, and ethical standards in all our interactions.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">Meet Our Team</h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  The talented individuals behind PUSHPULL TECHNOLOGIES.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Team Member 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                      <Image
                        src="/placeholder.svg?height=320&width=400"
                        alt="Team member"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl">John Smith</h3>
                      <p className="text-blue-600 mb-3">CEO & Founder</p>
                      <p className="text-gray-600 mb-4">
                        With over 15 years of experience in software development and business leadership, John leads our
                        strategic vision.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Team Member 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                      <Image
                        src="/placeholder.svg?height=320&width=400"
                        alt="Team member"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl">Sarah Johnson</h3>
                      <p className="text-purple-600 mb-3">CTO</p>
                      <p className="text-gray-600 mb-4">
                        Sarah oversees our technical strategy and ensures we stay at the forefront of technology trends
                        and best practices.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Team Member 3 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-80">
                      <Image
                        src="/placeholder.svg?height=320&width=400"
                        alt="Team member"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl">Michael Chen</h3>
                      <p className="text-orange-600 mb-3">Lead Developer</p>
                      <p className="text-gray-600 mb-4">
                        Michael leads our development team, bringing extensive experience in web and mobile application
                        development.
                      </p>
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
                  <Link href="/careers">
                    <span className="relative z-10">Join Our Team</span>
                    <span className="absolute inset-0 bg-blue-50 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">Our Locations</h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  We have offices in multiple locations to better serve our global clients.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Location 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="San Francisco office"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">San Francisco</h3>
                      <div className="flex items-start gap-2 text-gray-600 mb-4">
                        <MapPin className="h-5 w-5 mt-0.5 text-blue-600" />
                        <span>123 Tech Avenue, San Francisco, CA 94107</span>
                      </div>
                      <p className="text-gray-600">Our headquarters and main development center.</p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Location 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="New York office"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">New York</h3>
                      <div className="flex items-start gap-2 text-gray-600 mb-4">
                        <MapPin className="h-5 w-5 mt-0.5 text-purple-600" />
                        <span>456 Innovation Street, New York, NY 10001</span>
                      </div>
                      <p className="text-gray-600">
                        Our East Coast office focusing on client relations and business development.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Location 3 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="London office"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">London</h3>
                      <div className="flex items-start gap-2 text-gray-600 mb-4">
                        <MapPin className="h-5 w-5 mt-0.5 text-orange-600" />
                        <span>789 Digital Lane, London, UK EC2A 4NE</span>
                      </div>
                      <p className="text-gray-600">Our European hub serving clients across the region.</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">Our Partners</h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  We collaborate with industry leaders to deliver comprehensive solutions.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {/* Partner logos would go here */}
                {Array(12)
                  .fill(0)
                  .map((_, i) => (
                    <StaggerItem key={i}>
                      <div className="h-20 w-40 bg-white flex items-center justify-center p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                        <Image
                          src="/placeholder.svg?height=80&width=160"
                          alt={`Partner ${i + 1}`}
                          width={160}
                          height={80}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </StaggerItem>
                  ))}
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
                  Ready to Work With Us?
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-600 text-lg">
                  Let's discuss how PUSHPULL TECHNOLOGIES can help you achieve your digital transformation goals.
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
