import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 via-background to-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Ready to transform your project management? Schedule a demo or send us a message and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">{COMPANY.address}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
                <div className="grid gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-accent"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Schedule a Demo</h4>
                      <p className="text-sm text-muted-foreground">
                        Book a 30-minute call with our team
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-accent"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Live Chat</h4>
                      <p className="text-sm text-muted-foreground">
                        Chat with us in real-time
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Partner Badge */}
              <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
                <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Official Plane Partner
                </div>
                <p className="text-sm text-muted-foreground">
                  Spain's first certified Plane partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
