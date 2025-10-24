"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Car, Shield, CheckCircle, Wrench, DollarSign, Headphones, Star, CreditCard, Sparkles, Crown, MessageSquare, HelpCircle, BookOpen, Phone } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="AutoDrive"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Find Your Perfect Drive"
          description="Discover premium vehicles with comprehensive warranties and exceptional service. From luxury sedans to reliable SUVs, we have the perfect car for every journey."
          tag="Premium Dealer"
          tagIcon={Car}
          buttons={[
            { text: "View Inventory", href: "products" },
            { text: "Schedule Visit", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/darjeeling-1761332498932-65e814d6.jpg"
          imageAlt="Modern luxury car in showroom"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose AutoDrive"
          description="With over 20 years of experience in automotive sales and service, we provide exceptional value and customer satisfaction."
          tag="Our Promise"
          tagIcon={Shield}
          buttons={[
            { text: "Learn More", href: "testimonials" }
          ]}
          bulletPoints={[
            {
              title: "Quality Guarantee",
              description: "Every vehicle undergoes comprehensive inspection and comes with extended warranty coverage",
              icon: CheckCircle
            },
            {
              title: "Expert Service",
              description: "Our certified technicians provide ongoing maintenance and support for your vehicle",
              icon: Wrench
            },
            {
              title: "Competitive Pricing",
              description: "Fair market pricing with flexible financing options to fit your budget",
              icon: DollarSign
            },
            {
              title: "Customer Support",
              description: "24/7 customer service and roadside assistance for complete peace of mind",
              icon: Headphones
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7568433/pexels-photo-7568433.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional automotive service garage"
          imagePosition="left"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Inventory"
          description="Browse our selection of premium vehicles, all inspected and ready for delivery"
          tag="Available Now"
          tagIcon={Star}
          buttons={[
            { text: "View All Cars", href: "https://example.com/inventory" }
          ]}
          products={[
            {
              id: "1",
              name: "2023 BMW 330i Sedan",
              price: "$42,500",
              imageSrc: "https://images.pexels.com/photos/9846107/pexels-photo-9846107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "2023 BMW 330i Sedan",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "2022 Audi Q7 Premium",
              price: "$58,900",
              imageSrc: "https://images.pexels.com/photos/20249734/pexels-photo-20249734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "2022 Audi Q7 Premium SUV",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "2023 Porsche 911 Carrera",
              price: "$125,000",
              imageSrc: "https://images.pexels.com/photos/17623967/pexels-photo-17623967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "2023 Porsche 911 Carrera",
              initialQuantity: 1
            },
            {
              id: "4",
              name: "2024 Tesla Model S",
              price: "$89,500",
              imageSrc: "https://images.pexels.com/photos/5158167/pexels-photo-5158167.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "2024 Tesla Model S Electric",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Financing Options"
          description="Flexible financing solutions to get you behind the wheel of your dream car"
          tag="Financing"
          tagIcon={CreditCard}
          plans={[
            {
              id: "standard",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "3.9% APR",
              subtitle: "Standard financing for qualified buyers",
              buttons: [
                { text: "Apply Now", href: "contact" },
                { text: "Learn More", href: "#financing" }
              ],
              features: [
                "Competitive interest rates",
                "Flexible payment terms",
                "Quick approval process",
                "No prepayment penalties"
              ]
            },
            {
              id: "premium",
              badge: "Best Value",
              badgeIcon: Crown,
              price: "2.4% APR",
              subtitle: "Premium financing with exclusive benefits",
              buttons: [
                { text: "Get Approved", href: "contact" },
                { text: "Contact Advisor", href: "#advisor" }
              ],
              features: [
                "Lowest available rates",
                "Extended warranty included",
                "Priority service scheduling",
                "Loyalty program benefits"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real experiences from satisfied AutoDrive customers"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              handle: "@mchen_auto",
              testimonial: "Outstanding service from start to finish. The team helped me find the perfect SUV for my family and the financing process was seamless.",
              imageSrc: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "2",
              name: "Sarah Rodriguez",
              handle: "@sarah_drives",
              testimonial: "Best car buying experience I've ever had. Transparent pricing, honest advice, and exceptional customer service. Highly recommend AutoDrive!",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Rodriguez"
            },
            {
              id: "3",
              name: "David Kim",
              handle: "@david_cars",
              testimonial: "The quality of their vehicles is exceptional. Two years later and my car still runs like new. Their service department is top-notch too.",
              imageSrc: "https://images.pexels.com/photos/6333673/pexels-photo-6333673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            },
            {
              id: "4",
              name: "Emily Johnson",
              handle: "@emily_auto",
              testimonial: "Professional, knowledgeable staff who really care about finding the right car for you. The warranty and service packages give great peace of mind.",
              imageSrc: "https://images.pexels.com/photos/7144186/pexels-photo-7144186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Johnson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our vehicles, financing, and services"
          tag="Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What warranty coverage do you offer?",
              content: "All our vehicles come with comprehensive warranty coverage. New cars include manufacturer warranty, while pre-owned vehicles receive our extended warranty covering major components for up to 3 years or 36,000 miles."
            },
            {
              id: "2",
              title: "Do you offer financing options?",
              content: "Yes, we work with multiple financial institutions to offer competitive financing rates. We can often provide same-day approval and have options for all credit levels, including first-time buyers."
            },
            {
              id: "3",
              title: "Can I trade in my current vehicle?",
              content: "Absolutely! We accept trade-ins and offer fair market value assessments. Our team will evaluate your vehicle and provide a competitive trade-in offer that can be applied toward your new purchase."
            },
            {
              id: "4",
              title: "Do you provide vehicle history reports?",
              content: "Yes, every pre-owned vehicle comes with a comprehensive vehicle history report. We also conduct our own multi-point inspection to ensure quality and safety standards are met."
            },
            {
              id: "5",
              title: "What services do you offer after purchase?",
              content: "We provide full-service maintenance, genuine parts, warranty repairs, and 24/7 roadside assistance. Our certified technicians are trained to work on all makes and models we sell."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardTwo
          title="Automotive Insights"
          description="Stay informed with the latest automotive news, tips, and industry trends"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              tags: ["Maintenance", "Tips"],
              title: "Essential Car Maintenance Tips for Winter",
              excerpt: "Keep your vehicle running smoothly through the cold season with these expert maintenance recommendations and safety tips.",
              imageSrc: "https://images.pexels.com/photos/4488639/pexels-photo-4488639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Car maintenance tools and equipment",
              authorName: "Robert Wilson",
              date: "15 Jan 2024"
            },
            {
              id: "2",
              tags: ["Electric", "Technology"],
              title: "The Future of Electric Vehicles",
              excerpt: "Explore the latest developments in electric vehicle technology and what it means for car buyers in 2024 and beyond.",
              imageSrc: "https://images.pexels.com/photos/2480315/pexels-photo-2480315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Electric car charging station",
              authorName: "Lisa Chen",
              date: "10 Jan 2024"
            },
            {
              id: "3",
              tags: ["Buying Guide", "Tips"],
              title: "First-Time Car Buyer's Complete Guide",
              excerpt: "Everything you need to know about buying your first car, from budgeting to financing options and what to look for.",
              imageSrc: "https://images.pexels.com/photos/6817005/pexels-photo-6817005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern car dealership interior",
              authorName: "James Martinez",
              date: "5 Jan 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Find Your Perfect Car?"
          description="Contact us today to schedule a test drive or learn more about our financing options. Our team is here to help you every step of the way."
          tagIcon={Phone}
          inputPlaceholder="Your email address"
          buttonText="Contact Us"
          termsText="By submitting, you agree to receive communications about our vehicles and services. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/20051474/pexels-photo-20051474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern car showroom interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Inventory",
              items: [
                { label: "New Cars", href: "inventory" },
                { label: "Pre-Owned", href: "used-cars" },
                { label: "Luxury Vehicles", href: "luxury" },
                { label: "Electric Cars", href: "electric" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Financing", href: "financing" },
                { label: "Service Center", href: "service" },
                { label: "Parts Department", href: "parts" },
                { label: "Trade-In", href: "trade-in" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Contact", href: "contact" },
                { label: "Reviews", href: "reviews" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Warranty", href: "warranty" },
                { label: "Roadside Assistance", href: "roadside" },
                { label: "Service Appointments", href: "appointments" }
              ]
            }
          ]}
          copyrightText="© 2024 AutoDrive | Premium Car Dealership"
        />
      </div>
    </ThemeProvider>
  );
}