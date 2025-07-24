"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutUsTeaser = () => {
  return (
    <section className="py-24 bg-pearl-white">
      <div className="max-w-content mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-desert-gold relative z-10">
              <div className="absolute top-6 left-4 px-4 py-2 bg-desert-gold text-pearl-white font-playfair italic rounded shadow-md z-20">
                Est. 2010
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-rich-navy/5 rounded-xl -z-10"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/founder-portrait.png"
                  alt="Founder of Dubai Signature Estates"
                  className="object-cover"
                  fill
                  priority
                  onError={() => {
                    console.log("Error loading founder portrait");
                  }}
                />
              </div>
            </div>

          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-desert-gold font-inter text-lg">About Us</p>

            <h2 className="font-playfair text-4xl text-rich-navy">
              Curating Dubai&apos;s Finest
              <br />
              Addresses Since 2010
            </h2>

            <div className="h-1 w-20 bg-desert-gold"></div>

            <p className="font-inter text-lg text-rich-navy/80 leading-relaxed">
              Dubai Signature Estates was founded with a singular vision: to
              offer an unparalleled real estate experience to those who demand
              nothing but excellence. For over a decade, we have been the
              trusted advisors to Dubai&apos;s elite property investors and
              discerning international clients.
            </p>

            <p className="font-inter text-lg text-rich-navy/80 leading-relaxed">
              Our expertise lies not just in transactions, but in understanding
              the lifestyle aspirations of our clients and matching them with
              properties that reflect their unique identity and status.
            </p>

            <div className="pt-4">
              <div className="flex items-center space-x-6">
                <div>
                  <div className="relative h-16 w-32 flex items-center">
                    <Image
                      src="/images/founder-signature.png"
                      alt="Founder's Signature"
                      width={128}
                      height={64}
                      style={{ objectFit: 'contain', objectPosition: 'left' }}
                      onError={() => {
                        console.log("Error loading founder signature");
                      }}
                    />
                  </div>
                  <p className="font-inter text-deep-teal mt-2">
                    Ahmed Al Mansoori, Founder
                  </p>
                </div>

                <Link href="/about" className="button-primary">
                  Our Story
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeaser;
