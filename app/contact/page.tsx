import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function ContactPage() {
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
                    Get in <span className="text-blue-600">Touch</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-gray-600 md:text-xl">
                    Have a project in mind? Let's discuss how we can help bring your ideas to life.
                  </p>
                </FadeIn>
                <FadeIn direction="up" delay={0.5}>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      asChild
                      className="relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
                    >
                      <a href="#contact-form">
                        <span className="relative z-10">Send us a message</span>
                        <MessageSquare className="ml-2 h-4 w-4 relative z-10" />
                        <span className="absolute inset-0 bg-blue-700 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <a href="tel:+12345678900">
                        <Phone className="mr-2 h-4 w-4" />
                        Call us now
                      </a>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Contact Us"
                    width={600}
                    height={400}
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Email */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                        <Mail className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold">Email Us</h3>
                      <p className="text-gray-600">
                        Send us an email and we'll get back to you within 24 hours.
                      </p>
                      <a href="mailto:info@pushpulltech.com" className="text-blue-600 font-medium hover:underline">
                        info@pushpulltech.com
                      </a>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Phone */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                        <Phone className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold">Call Us</h3>
                      <p className="text-gray-600">
                        Speak directly with our team for immediate assistance.
                      </p>
                      <a href="tel:+12345678900" className="text-blue-600 font-medium hover:underline">
                        +1 (234) 567-8900
                      </a>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* Visit */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                        <MapPin className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold">Visit Us</h3>
                      <p className="text-gray-600">
                        Schedule a visit to our office for an in-person meeting.
                      </p>
                      <p className="text-blue-600 font-medium">
                        123 Tech Plaza, Suite 500<br />
                        San Francisco, CA 94105
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <FadeIn direction="left">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-gray-700">
                        Service interested in
                      </label>
                      <Select>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-development">Mobile Development</SelectItem>
                          <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-32 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
                    >
                      <span className="relative z-10">Send Message</span>
                      <Send className="ml-2 h-4 w-4 relative z-10" />
                      <span className="absolute inset-0 bg-blue-700 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
                    </Button>
                  </form>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="relative h-full min-h-[500px] hidden md:block">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Contact"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Our Offices
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Visit us at one of our locations around the world.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* San Francisco Office */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="San Francisco Office"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">San Francisco</h3>
                      <p className="text-gray-600 mb-4">
                        123 Tech Plaza, Suite 500<br />
                        San Francisco, CA 94105
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>+1 (234) 567-8900</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=123+Tech+Plaza,San+Francisco,CA+94105"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        View on map
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* New York Office */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="New York Office"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">New York</h3>
                      <p className="text-gray-600 mb-4">
                        456 Digital Avenue, 12th Floor<br />
                        New York, NY 10001
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>+1 (345) 678-9012</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=456+Digital+Avenue,New+York,NY+10001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        View on map
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                </StaggerItem>

                {/* London Office */}
                <StaggerItem>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="relative h-56">
                      <Image
                        src="/placeholder.svg?height=224&width=400"
                        alt="London Office"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2">London</h3>
                      <p className="text-gray-600 mb-4">
                        789 Innovation Street<br />
                        London, EC2A 4NE, UK
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>+44 20 1234 5678</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=789+Innovation+Street,London,EC2A+4NE,UK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center"
                      >
                        View on map
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
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
                  Get answers to commonly asked questions about working with us.
                </p>
              </div>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <StaggerContainer>
                <StaggerItem>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">How quickly can you start on my project?</h3>
                    <p className="text-gray-600">
                      Once we've had our initial consultation and finalized the project scope, we can typically begin work within 1-2 weeks. For urgent projects, we may be able to accommodate a faster start date depending on our current workload.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">What information do you need to provide a quote?</h3>
                    <p className="text-gray-600">
                      To provide an accurate quote, we need to understand your project requirements, timeline, and specific features. The more details you can provide, the more precise our estimate will be. We're happy to sign an NDA before discussing sensitive project details.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Do you work with clients internationally?</h3>
                    <p className="text-gray-600">
                      Yes, we work with clients globally. Our team is experienced in remote collaboration and we use various tools to ensure smooth communication regardless of time zone differences. We can schedule meetings at times that are convenient for you.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">What is your payment structure?</h3>
                    <p className="text-gray-600">
                      We typically work with a 50% upfront payment to initiate the project, followed by milestone payments as we reach key deliverables. For larger projects, we can create a custom payment schedule that works for both parties. We accept various payment methods including bank transfers and major credit cards.
                    </p>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Can I make changes to the project once it's started?</h3>
                    <p className="text-gray-600">
                      Yes, we understand that requirements can evolve during the development process. We have a structured change request process to handle modifications. Minor changes can often be accommodated within the existing scope, while larger changes may require adjustments to the timeline and budget.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 relative">
          <div className="container px-4 md:px-6">
            <FadeIn>
              <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-950">
                  Find Us
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">
                  Locate our headquarters and global offices.
                </p>
              </div>
            </FadeIn>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=1200&text=Interactive+Map"
                alt="Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  View Interactive Map
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn direction="left">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                    Ready to Start Your Next Project?
                  </h2>
                  <p className="text-blue-200 text-lg">
                    Contact us today to discuss how we can bring your ideas to life with our innovative digital solutions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div className="flex flex-col gap-4 sm:flex-row items-center md:justify-end">
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
                  >
                    <a href="#contact-form">
                      Send a Message
                      <MessageSquare className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white text-white hover:bg-blue-900 w-full sm:w-auto"
                  >
                    <a href="tel:+12345678900">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
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