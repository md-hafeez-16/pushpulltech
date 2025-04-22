import Link from "next/link"
import { Github, Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <StaggerContainer>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <StaggerItem>
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    PUSHPULL
                  </span>
                  <span className="font-bold text-xl">TECHNOLOGIES</span>
                </Link>
                <p className="text-sm text-muted-foreground max-w-xs">
                  We help businesses transform digitally through custom software development and cloud integration.
                </p>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Twitter"
                    className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="LinkedIn"
                    className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Facebook"
                    className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="GitHub"
                    className="hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <h3 className="text-sm font-medium mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partners"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Legal
                    </Link>
                  </li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div>
                <h3 className="text-sm font-medium mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services/web-development"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/mobile-development"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cloud-solutions"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/consulting"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                    >
                      IT Consulting
                    </Link>
                  </li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-4">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-56 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <Button
                    variant="default"
                    size="sm"
                    className="relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
                  >
                    <span className="relative z-10">Subscribe</span>
                    <span className="absolute inset-0 bg-blue-700 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                  </Button>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2 group">
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors duration-300" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      info@pushpulltech.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Phone className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors duration-300" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-start gap-2 group">
                    <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors duration-300 mt-0.5" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      123 Tech Avenue, San Francisco, CA 94107
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} PUSHPULL TECHNOLOGIES. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
