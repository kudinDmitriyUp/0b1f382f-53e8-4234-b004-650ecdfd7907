"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Rocket, Linkedin, Twitter, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSizeExtraLargeSpacing"
      background="none"
      cardStyle="shadow-colored"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Joule"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006339028-nl5yaubd.jpg"
          logoAlt="Joule Ventures"
          button={{
            text: "Get Started",
            href: "contact"
          }}
          className="bg-background border-b border-accent"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="High-conviction investors delivering top asset class returns"
          description="First-check partners for Israeli founders commercializing enterprise-grade solutions in U.S. markets. The right kind of risk."
          tag="Venture Capital"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006339844-4tteynmf.jpg"
          imageAlt="Startup ecosystem and innovation"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            {
              text: "Explore Portfolio",
              href: "#portfolio"
            },
            {
              text: "Contact Us",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="strategy" data-section="strategy">
        <SplitAboutCards
          title="Our Strategy"
          description="We are day-one partners for Israeli entrepreneurs solving for an array of problems in the enterprise world. Our focus on forming the right relationships and delivering tangible value cuts a clear path to accelerated U.S. commercialization for founders."
          tag="Why Joule"
          features={[
            {
              id: "partner-approach",
              title: "Partner Only, Always",
              description: "We don't waste time with hierarchy. Direct access to operators, capital, and networks from day one.",
              label: "Day-One Partnership"
            },
            {
              id: "us-commercialization",
              title: "U.S. Commercialization",
              description: "Specialized expertise in taking Israeli deep-tech and enterprise solutions to American markets with proven go-to-market strategies.",
              label: "Market Acceleration"
            }
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "#about"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="focus-areas" data-section="focus-areas">
        <FeatureCardTwelve
          title="Investment Focus"
          description="We invest in Israeli founders building the future of enterprise technology"
          tag="Our Focus"
          features={[
            {
              id: "enterprise-software",
              label: "Enterprise",
              title: "Building scalable enterprise-grade software solutions",
              items: [
                "B2B SaaS platforms",
                "Infrastructure and tools",
                "Cloud-native solutions",
                "AI and machine learning"
              ],
              buttons: [
                {
                  text: "View Investments",
                  href: "#portfolio"
                }
              ]
            },
            {
              id: "deep-tech",
              label: "Deep Tech",
              title: "Commercializing deep technical innovation",
              items: [
                "Security and privacy",
                "Data engineering",
                "Cybersecurity platforms",
                "Enterprise infrastructure"
              ],
              buttons: [
                {
                  text: "View Investments",
                  href: "#portfolio"
                }
              ]
            }
          ]}
          animationType="opacity"
          variant="border"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Experienced investors and operators who have scaled companies from Israel to the U.S. market"
          tag="Leadership"
          members={[
            {
              id: "1",
              name: "David Cohen",
              role: "Managing Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006342237-sfjuuwc2.jpg",
              imageAlt: "David Cohen, Managing Partner"
            },
            {
              id: "2",
              name: "Sarah Levi",
              role: "Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006343238-pac1vbzz.jpg",
              imageAlt: "Sarah Levi, Partner"
            },
            {
              id: "3",
              name: "Avi Steinberg",
              role: "Operating Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006343925-i4w85wj4.jpg",
              imageAlt: "Avi Steinberg, Operating Partner"
            },
            {
              id: "4",
              name: "Rachel Goldman",
              role: "Investment Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006344826-wus7k2fh.jpg",
              imageAlt: "Rachel Goldman, Investment Manager"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Our Portfolio Companies Say"
          description="Founders and entrepreneurs who have partnered with Joule"
          tag="Success Stories"
          testimonials={[
            {
              id: "1",
              nameTitle: "Moshe Dayan, CEO of SecureData",
              quote: "Joule understood our market instantly. They opened doors in Silicon Valley that would have taken us years to unlock ourselves. Day one felt like we had built-in advisors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006345442-gkejucin.jpg",
              imageAlt: "Moshe Dayan"
            },
            {
              id: "2",
              nameTitle: "Noa Bergman, Co-founder of CloudTech",
              quote: "The network access alone was worth the partnership. But beyond that, they genuinely cared about our success and provided strategic guidance through critical pivots.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006346260-o7cwp4mm.jpg",
              imageAlt: "Noa Bergman"
            },
            {
              id: "3",
              nameTitle: "Yoav Levin, Founder of DataVault",
              quote: "We were a technical team with a great product but no go-to-market experience. Joule's operators became an extension of our leadership and accelerated our path to market expansion.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006347096-6oyi1gzg.jpg",
              imageAlt: "Yoav Levin"
            },
            {
              id: "4",
              nameTitle: "Hana Rosenthal, CEO of EnterpriseAI",
              quote: "The most valuable part of working with Joule is their genuine commitment to partnership. They don't just invest capital, they invest their expertise and reputation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006348175-dget34yz.jpg",
              imageAlt: "Hana Rosenthal"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about investing with Joule"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What stage do you typically invest in?",
              content: "We focus on Israeli founders at pre-seed to Series A stage who are ready to commercialize in the U.S. market. We look for strong technical teams with enterprise-grade solutions."
            },
            {
              id: "2",
              title: "What is your typical check size?",
              content: "Our check sizes range from $250K to $2M depending on the round and company stage. We often lead or co-lead rounds and can support follow-on investments for portfolio companies."
            },
            {
              id: "3",
              title: "Do you only invest in Israeli companies?",
              content: "We specialize in Israeli founders and teams, but we're open to international teams with strong connections to the Israeli tech ecosystem and those commercializing Israeli innovation."
            },
            {
              id: "4",
              title: "How hands-on are you with portfolio companies?",
              content: "Very hands-on. We provide strategic guidance, introductions to customers and partners, recruitment support, and operational advice. Our operating partners actively work with your team."
            },
            {
              id: "5",
              title: "What is your return target?",
              content: "We focus on delivering top asset class returns. Our thesis is centered on high-conviction bets in enterprise technology where Israeli innovation has a clear advantage."
            },
            {
              id: "6",
              title: "How can we apply to Joule?",
              content: "Reach out to us directly with your pitch deck and a brief overview. We prefer warm introductions but welcome direct applications. We respond to all submissions within two weeks."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Build the Future?"
          ctaDescription="Let's explore how Joule can accelerate your U.S. market entry and drive exponential growth."
          ctaButton={{
            text: "Schedule a Call",
            href: "mailto:hello@joulevc.com"
          }}
          ctaIcon={Rocket}
          faqs={[
            {
              id: "1",
              title: "What's the best way to reach you?",
              content: "Email us at hello@joulevc.com with your pitch deck and a brief description. You can also apply through our website or request an introduction from a portfolio company."
            },
            {
              id: "2",
              title: "How quickly do you make investment decisions?",
              content: "We move fast. Initial meetings typically lead to a decision within 2-4 weeks. Due diligence is streamlined, and we can move to term sheet quickly for the right opportunities."
            },
            {
              id: "3",
              title: "Do you provide other support beyond capital?",
              content: "Absolutely. We provide go-to-market strategy, customer introductions, hiring support, and strategic guidance. Our network spans the U.S. enterprise ecosystem."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Joule"
          logoWidth={120}
          logoHeight={40}
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "#strategy"
                },
                {
                  label: "Team",
                  href: "#team"
                },
                {
                  label: "News",
                  href: "#"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Portfolio",
                  href: "#portfolio"
                },
                {
                  label: "Blog",
                  href: "#"
                },
                {
                  label: "Events",
                  href: "#"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Apply",
                  href: "#contact"
                },
                {
                  label: "Contact",
                  href: "#contact"
                },
                {
                  label: "Partners",
                  href: "#"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Mail,
              href: "mailto:hello@joulevc.com",
              ariaLabel: "Email"
            }
          ]}
          copyrightText="© Joule Ventures, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}