"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  propertyType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  propertyType?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    propertyType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.propertyType) {
      tempErrors.propertyType = "Property type is required";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const propertyOptions = [
    { value: "", label: "Select Service Needed" },
    { value: "Real Estate Staging", label: "Real Estate Staging" },
    { value: "Interior Decorating", label: "Interior Decorating" },
    { value: "Virtual 3D Design", label: "Virtual 3D Design" },
    { value: "Consultation Only", label: "Consultation & Inquiry" },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#201D18] text-[#F7F3EC] overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            <span className="eyebrow block mb-4">
              GET IN TOUCH
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#F7F3EC] font-normal mb-8">
              Book a Consultation
            </h2>
            <p className="font-sans font-light text-[#D8CBB8]/70 text-base mb-12">
              Ready to elevate your listing or transform your home? Share your details below, and we will get back to you to plan your project.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                  noValidate
                >
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-[#D8CBB8]/30 focus:border-[#F7F3EC] py-3 text-[#F7F3EC] placeholder-[#D8CBB8]/40 focus:outline-none transition-colors duration-300 text-sm font-sans"
                    />
                    {errors.name && (
                      <p className="text-[#8C5A3C] text-xs mt-2 font-sans font-semibold">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-[#D8CBB8]/30 focus:border-[#F7F3EC] py-3 text-[#F7F3EC] placeholder-[#D8CBB8]/40 focus:outline-none transition-colors duration-300 text-sm font-sans"
                    />
                    {errors.email && (
                      <p className="text-[#8C5A3C] text-xs mt-2 font-sans font-semibold">{errors.email}</p>
                    )}
                  </div>

                  {/* Property Type Dropdown */}
                  <div className="relative font-sans">
                    <select
                      name="propertyType"
                      id="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#D8CBB8]/30 focus:border-[#F7F3EC] py-3 text-[#F7F3EC] focus:outline-none transition-colors duration-300 text-sm appearance-none cursor-pointer"
                    >
                      {propertyOptions.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className="bg-[#201D18] text-[#F7F3EC]"
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.propertyType && (
                      <p className="text-[#8C5A3C] text-xs mt-2 font-sans font-semibold">{errors.propertyType}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your space"
                      className="w-full bg-transparent border-b border-[#D8CBB8]/30 focus:border-[#F7F3EC] py-3 text-[#F7F3EC] placeholder-[#D8CBB8]/40 focus:outline-none transition-colors duration-300 text-sm resize-none font-sans"
                    />
                    {errors.message && (
                      <p className="text-[#8C5A3C] text-xs mt-2 font-sans font-semibold">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="font-sans font-semibold text-xs uppercase tracking-wider bg-[#F7F3EC] text-[#201D18] hover:bg-[#6B6F4C] hover:text-[#F7F3EC] px-10 py-4.5 rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md inline-block"
                    style={{ minWidth: 200, minHeight: 44 }}
                  >
                    Submit Request
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F7F3EC]/5 border border-[#D8CBB8]/20 rounded-3xl p-8 text-center flex flex-col items-center justify-center py-16"
                >
                  <CheckCircle size={48} className="text-[#6B6F4C] mb-4 stroke-[1.5]" />
                  <h3 className="font-serif text-2xl text-[#F7F3EC] font-normal mb-3">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="font-sans font-light text-[#D8CBB8]/80 text-sm leading-relaxed max-w-md">
                    We have received your inquiry regarding <strong>{formData.propertyType}</strong>. Our studio will reach out to you within 24 hours to schedule your consultation.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", propertyType: "", message: "" });
                    }}
                    className="mt-8 font-sans font-semibold text-xs uppercase tracking-wider border border-[#D8CBB8]/30 text-[#F7F3EC] hover:bg-[#F7F3EC] hover:text-[#201D18] px-6 py-2.5 rounded-full transition-all duration-300"
                    style={{ minHeight: 44 }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-left flex flex-col justify-between"
          >
            <div>
              <span className="eyebrow block mb-4">
                INFO & LOCATION
              </span>
              <h3 className="font-serif text-2xl text-[#F7F3EC] font-normal mb-8">
                Refuge Studio
              </h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full border border-[#D8CBB8]/20 text-[#6B6F4C]">
                    <Mail size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#D8CBB8]">
                      Email
                    </h4>
                    <a
                      href="mailto:hello@refugedecor.com"
                      className="font-sans font-light text-[#F7F3EC] hover:text-[#6B6F4C] transition-colors text-sm mt-1 block"
                      style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
                    >
                      hello@refugedecor.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full border border-[#D8CBB8]/20 text-[#6B6F4C]">
                    <Phone size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#D8CBB8]">
                      Phone
                    </h4>
                    <a
                      href="tel:+14325550190"
                      className="font-sans font-light text-[#F7F3EC] hover:text-[#6B6F4C] transition-colors text-sm mt-1 block"
                      style={{ minHeight: 44, display: 'flex', alignItems: 'center' }}
                    >
                      (432) 555-0190
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-full border border-[#D8CBB8]/20 text-[#6B6F4C]">
                    <MapPin size={18} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#D8CBB8]">
                      Service Area
                    </h4>
                    <p className="font-sans font-light text-[#F7F3EC] text-sm mt-1 leading-relaxed">
                      Marfa, Alpine, Fort Davis & the West Texas Hill Country
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Link */}
            <div className="border-t border-[#D8CBB8]/20 pt-8 mt-12 lg:mt-0">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#D8CBB8] mb-4">
                Follow Our Work
              </h4>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 font-sans font-semibold text-xs uppercase tracking-wider text-[#F7F3EC] hover:text-[#6B6F4C] transition-colors group"
                style={{ minHeight: 44 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>@refugedecordesigns</span>
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
