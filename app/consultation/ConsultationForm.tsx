"use client";

import React, { useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const projectTypes = [
    "Interior Design",
    "Home Staging",
    "Renovation Consultation",
    "Material Selection",
    "Full Service Design",
  ];

  const budgets = [
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  const timelines = [
    "Immediate (within 1 month)",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "Planning phase only",
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  const progress = (step / 4) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-12">
        <span className="eyebrow block mb-4">BOOK CONSULTATION</span>
        <h1 className="font-serif text-5xl md:text-6xl mb-4">Schedule Your Consultation</h1>
        <p className="text-muted-text text-lg">
          Let&apos;s discuss your project and how we can bring your vision to life.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-12">
        <div className="h-1 bg-[#D8CBB8] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#6B6F4C] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-[#78716C]">
          <span>Step {step} of 4</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Contact Information */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        )}

        {/* Step 2: Project Details */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-sm font-medium mb-2">Project Type *</label>
              <select
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors"
              >
                <option value="">Select project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range *</label>
              <select
                required
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors"
              >
                <option value="">Select budget range</option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Timeline *</label>
              <select
                required
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors"
              >
                <option value="">Select timeline</option>
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Scheduling */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date *</label>
              <input
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Time *</label>
              <select
                required
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors"
              >
                <option value="">Select time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Additional Details</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-[#EFE7D8] border border-[#D8CBB8] rounded-lg focus:outline-none focus:border-[#6B6F4C] transition-colors resize-none"
                placeholder="Tell us about your project, goals, or any specific requirements..."
              />
            </div>
          </div>
        )}

        {/* Step 4: Review */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#EFE7D8] rounded-lg p-6 border border-[#D8CBB8]/25">
              <h3 className="font-serif text-xl mb-4">Review Your Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-[#78716C]">Name:</span>
                  <span className="ml-2 font-medium">{formData.name}</span>
                </div>
                <div>
                  <span className="text-[#78716C]">Email:</span>
                  <span className="ml-2 font-medium">{formData.email}</span>
                </div>
                <div>
                  <span className="text-[#78716C]">Phone:</span>
                  <span className="ml-2 font-medium">{formData.phone || "Not provided"}</span>
                </div>
                <div>
                  <span className="text-[#78716C]">Project Type:</span>
                  <span className="ml-2 font-medium">{formData.projectType}</span>
                </div>
                <div>
                  <span className="text-[#78716C]">Budget:</span>
                  <span className="ml-2 font-medium">{formData.budget}</span>
                </div>
                <div>
                  <span className="text-[#78716C]">Timeline:</span>
                  <span className="ml-2 font-medium">{formData.timeline}</span>
                </div>
                <div>
                  <span className="text-[#78716C]">Preferred Date:</span>
                  <span className="ml-2 font-medium">{formData.preferredDate}</span>
                </div>
                <div>
                  <span className="text-[#78716C]">Preferred Time:</span>
                  <span className="ml-2 font-medium">{formData.preferredTime}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <MagneticButton
              type="button"
              onClick={handleBack}
              className="px-8 py-4 rounded-full border border-[#D8CBB8] text-[#201D18] hover:bg-[#EFE7D8]/30 transition-colors"
            >
              Back
            </MagneticButton>
          )}
          {step < 4 ? (
            <MagneticButton
              type="button"
              onClick={handleNext}
              className="ml-auto px-8 py-4 rounded-full bg-[#201D18] text-[#F7F3EC] hover:bg-[#6B6F4C] transition-colors"
            >
              Next
            </MagneticButton>
          ) : (
            <MagneticButton
              type="submit"
              className="ml-auto px-8 py-4 rounded-full bg-[#201D18] text-[#F7F3EC] hover:bg-[#6B6F4C] transition-colors"
            >
              Submit Request
            </MagneticButton>
          )}
        </div>
      </form>
    </div>
  );
}
