import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Tag, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function ProjectsPage() {
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
                    Our <span className="text-blue-600">Projects</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-gray-600 md:text-xl">
                    Explore our portfolio of successful projects that showcase our expertise in delivering innovative digital solutions.
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
                    alt="Our Projects"
                    width={600}
                    height={400}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Our Work Categories
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  We specialize in a variety of digital solutions tailored to meet your business needs.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Category 1 */}
                <StaggerItem>
                  <Link href="/web-development">
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
                              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Web Development</h3>
                        <p className="text-gray-600 flex-1">
                          Custom web applications built with modern technologies to streamline your business operations.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>

                {/* Category 2 */}
                <StaggerItem>
                  <Link href="/mobile-development">
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
                              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Mobile Development</h3>
                        <p className="text-gray-600 flex-1">
                          Native and cross-platform mobile applications that provide seamless user experiences.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>

                {/* Category 3 */}
                <StaggerItem>
                  <Link href="/ui-ux-design">
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
                              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">UI/UX Design</h3>
                        <p className="text-gray-600 flex-1">
                          Intuitive and engaging user interfaces designed to enhance user experience and satisfaction.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>

                {/* Category 4 */}
                <StaggerItem>
                  <Link href="/digital-marketing">
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
                              d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Digital Marketing</h3>
                        <p className="text-gray-600 flex-1">
                          Strategic digital marketing solutions to boost your online presence and drive growth.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Featured Projects
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Explore some of our most impactful and innovative projects.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Project 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="E-commerce platform"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Web Development
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Tag className="w-3 h-3 mr-1" />
                          E-commerce
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">FreshMart Online Store</h3>
                      <p className="text-gray-600 mb-4">
                        A fully customized e-commerce solution with integrated payment gateways and inventory
                        management for a grocery chain.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>3 months</span>
                        </div>
                        <Link
                          href="/projects/freshmart-store"
                          className="text-blue-600 font-medium hover:underline inline-flex items-center"
                        >
                          View details
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Project 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="Health app"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Mobile App
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Healthcare
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">MediTrack Health App</h3>
                      <p className="text-gray-600 mb-4">
                        A mobile application for patients to track medications, appointments, and health metrics with doctor connectivity.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>4 months</span>
                        </div>
                        <Link
                          href="/projects/meditrack-app"
                          className="text-blue-600 font-medium hover:underline inline-flex items-center"
                        >
                          View details
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Project 3 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="Property management system"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Web Development
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Real Estate
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">PropertyPro Management System</h3>
                      <p className="text-gray-600 mb-4">
                        A comprehensive property management system for real estate companies to manage properties, tenants, and maintenance.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>6 months</span>
                        </div>
                        <Link
                          href="/projects/propertypro-system"
                          className="text-blue-600 font-medium hover:underline inline-flex items-center"
                        >
                          View details
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Project 4 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="Learning management system"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Web Development
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Education
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">EduLearn LMS Platform</h3>
                      <p className="text-gray-600 mb-4">
                        A learning management system for educational institutions with course creation, student management, and analytics.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>5 months</span>
                        </div>
                        <Link
                          href="/projects/edulearn-lms"
                          className="text-blue-600 font-medium hover:underline inline-flex items-center"
                        >
                          View details
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Project 5 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="Fleet management system"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Web Development
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Logistics
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">FleetMaster Management System</h3>
                      <p className="text-gray-600 mb-4">
                        A GPS-enabled fleet management solution for logistics companies with real-time tracking and maintenance scheduling.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>7 months</span>
                        </div>
                        <Link
                          href="/projects/fleetmaster-system"
                          className="text-blue-600 font-medium hover:underline inline-flex items-center"
                        >
                          View details
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Project 6 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="Restaurant ordering system"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Mobile App
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Tag className="w-3 h-3 mr-1" />
                          Food & Beverage
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-2">DineEasy Ordering App</h3>
                      <p className="text-gray-600 mb-4">
                        A mobile ordering system for restaurants with table QR codes, digital menus, and kitchen integration.
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>3 months</span>
                        </div>
                        <Link
                          href="/projects/dineeasy-app"
                          className="text-blue-600 font-medium hover:underline inline-flex items-center"
                        >
                          View details
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Client Testimonials
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Here's what our clients have to say about working with PUSHPULL TECHNOLOGIES.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Testimonial 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Sarah Johnson</h4>
                          <p className="text-sm text-gray-500">CEO, FreshMart</p>
                        </div>
                      </div>
                      <p className="italic text-gray-600">
                        "PUSHPULL TECHNOLOGIES transformed our business with their e-commerce platform. They understood our needs perfectly and delivered a solution that has increased our online sales by 45% in just three months."
                      </p>
                      <div className="flex text-yellow-400 mt-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Testimonial 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Dr. Michael Chen</h4>
                          <p className="text-sm text-gray-500">Director, MediTrack Health</p>
                        </div>
                      </div>
                      <p className="italic text-gray-600">
                        "The MediTrack app development was flawless from start to finish. The team at PUSHPULL was attentive to our unique requirements in the healthcare sector and delivered a secure, user-friendly application that our patients love."
                      </p>
                      <div className="flex text-yellow-400 mt-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Testimonial 3 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                          <Image
                            src="/placeholder.svg?height=48&width=48"
                            alt="Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">Alex Rodriguez</h4>
                          <p className="text-sm text-gray-500">CTO, PropertyPro</p>
                        </div>
                      </div>
                      <p className="italic text-gray-600">
                        "Working with PUSHPULL on our management system was a game-changer. Their team's technical expertise and project management skills ensured we got exactly what we needed, on time and within budget."
                      </p>
                      <div className="flex text-yellow-400 mt-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>

            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Link href="/testimonials">
                  View All Testimonials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <FadeIn direction="left">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                    Ready to Transform Your Ideas Into Reality?
                  </h2>
                  <p className="text-blue-200 text-lg">
                    Let's discuss how we can help you achieve your business goals with our custom digital solutions.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      asChild
                      className="bg-white text-blue-600 hover:bg-blue-50"
                    >
                      <Link href="/contact">
                        Get in Touch
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-white text-white hover:bg-blue-900"
                    >
                      <Link href="/services">
                        Explore Services
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Digital Transformation"
                    width={500}
                    height={300}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Project Process Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Our Project Process
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  We follow a structured approach to ensure successful project delivery.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {/* Step 1 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <span className="text-2xl font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-bold">Discovery</h3>
                      <p className="text-gray-600">
                        We understand your business needs, target audience, and project requirements through in-depth consultation.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Step 2 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                        <span className="text-2xl font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold">Planning</h3>
                      <p className="text-gray-600">
                        We create a detailed project roadmap, wireframes, and technical specifications to guide the development process.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Step 3 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                        <span className="text-2xl font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold">Development</h3>
                      <p className="text-gray-600">
                        Our expert team builds your solution using industry best practices and cutting-edge technologies.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Step 4 */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-2">
                        <span className="text-2xl font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold">Delivery & Support</h3>
                      <p className="text-gray-600">
                        We launch your project and provide ongoing maintenance and support to ensure continued success.
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Find answers to common questions about our projects and process.
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <StaggerContainer>
                <StaggerItem>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">How long does a typical project take to complete?</h3>
                    <p className="text-gray-600">
                      Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take 3-6 months. During our initial consultation, we'll provide a detailed timeline for your specific project.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Do you provide ongoing support after project completion?</h3>
                    <p className="text-gray-600">
                      Yes, we offer various maintenance and support packages to ensure your digital solution continues to function optimally. Our support includes bug fixes, security updates, and minor feature enhancements.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">How do you handle project changes and revisions?</h3>
                    <p className="text-gray-600">
                      We understand that requirements can evolve during a project. We have a structured change request process to accommodate modifications while managing scope and timelines effectively. All changes are documented and approved before implementation.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">What technologies do you specialize in?</h3>
                    <p className="text-gray-600">
                      We specialize in modern web and mobile technologies including React, Next.js, Node.js, React Native, Flutter, and various backend frameworks. We select the most appropriate technology stack based on your specific project requirements.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div>
                    <h3 className="text-xl font-bold mb-2">How do you ensure project quality and security?</h3>
                    <p className="text-gray-600">
                      Quality assurance and security are built into our development process. We perform thorough testing at each stage, including unit testing, integration testing, and security audits. We follow industry best practices for secure coding and data protection.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}