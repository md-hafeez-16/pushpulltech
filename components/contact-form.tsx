"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1000)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.3 } },
    blur: { scale: 1, transition: { duration: 0.3 } },
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <Input
                    placeholder="john.doe@example.com"
                    {...field}
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company (Optional)</FormLabel>
              <FormControl>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <Input
                    placeholder="Your company"
                    {...field}
                    className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                  />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-[120px] transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                    {...field}
                  />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105"
          disabled={isSubmitting}
        >
          <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
          <span className="absolute inset-0 bg-blue-700 w-0 group-hover:w-full transition-all duration-300 ease-out" />
        </Button>

        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm"
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
      </form>
    </Form>
  )
}
