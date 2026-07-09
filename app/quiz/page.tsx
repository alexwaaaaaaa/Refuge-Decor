"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/ui/MagneticButton";

const questions = [
  {
    id: 1,
    question: "What's your ideal weekend getaway?",
    options: [
      { text: "Cozy cabin in the mountains", style: "Ranch" },
      { text: "Modern downtown loft", style: "Modern" },
      { text: "Historic bed and breakfast", style: "Traditional" },
      { text: "Minimalist retreat", style: "Minimalist" },
    ],
  },
  {
    id: 2,
    question: "Which color palette speaks to you?",
    options: [
      { text: "Warm earth tones and neutrals", style: "Ranch" },
      { text: "Bold, dramatic colors", style: "Modern" },
      { text: "Rich, classic hues", style: "Traditional" },
      { text: "Clean whites and soft grays", style: "Minimalist" },
    ],
  },
  {
    id: 3,
    question: "What's your favorite furniture style?",
    options: [
      { text: "Rustic wood and leather", style: "Ranch" },
      { text: "Sleek lines and metal", style: "Modern" },
      { text: "Antique and ornate", style: "Traditional" },
      { text: "Simple and functional", style: "Minimalist" },
    ],
  },
  {
    id: 4,
    question: "How do you feel about patterns?",
    options: [
      { text: "Natural textures and subtle patterns", style: "Ranch" },
      { text: "Geometric and bold", style: "Modern" },
      { text: "Floral and classic", style: "Traditional" },
      { text: "Minimal or none", style: "Minimalist" },
    ],
  },
  {
    id: 5,
    question: "What's your ideal living room vibe?",
    options: [
      { text: "Warm, inviting, and lived-in", style: "Ranch" },
      { text: "Sophisticated and gallery-like", style: "Modern" },
      { text: "Elegant and timeless", style: "Traditional" },
      { text: "Calm, serene, and uncluttered", style: "Minimalist" },
    ],
  },
];

const styleDescriptions = {
  Ranch: {
    title: "West Texas Ranch",
    description: "You appreciate warmth, natural materials, and authentic textures. Your style embraces the rugged beauty of West Texas with limestone, white oak, and leather creating spaces that feel both sophisticated and welcoming.",
    colors: ["#8B7355", "#D4A574", "#F5E6D3", "#2C2416"],
  },
  Modern: {
    title: "Contemporary Modern",
    description: "You love clean lines, bold statements, and innovative design. Your style embraces the new while respecting the landscape, with sleek materials and dramatic contrasts creating spaces that feel current and confident.",
    colors: ["#1A1A1A", "#4A4A4A", "#E8E8E8", "#FFFFFF"],
  },
  Traditional: {
    title: "Classic Traditional",
    description: "You value history, craftsmanship, and timeless elegance. Your style honors classic design principles while incorporating West Texas elements, creating spaces that feel established, refined, and deeply personal.",
    colors: ["#5C4033", "#8B7355", "#D4C4A8", "#F5F0E6"],
  },
  Minimalist: {
    title: "Quiet Minimalist",
    description: "You believe in the power of restraint and intentionality. Your style embraces negative space, subtle textures, and thoughtful curation, creating spaces that feel calm, considered, and profoundly peaceful.",
    colors: ["#F5F5F5", "#E8E8E8", "#D0D0D0", "#2C2C2C"],
  },
};

export default function StyleQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleAnswer = (style: string) => {
    const newAnswers = [...answers, style];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const counts = finalAnswers.reduce((acc, style) => {
      acc[style] = (acc[style] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const result = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    setResult(result);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult("");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="relative min-h-screen bg-[#F7F3EC] text-[#201D18]">
      <Navbar />
      <main className="container-custom py-24">
        <div className="max-w-3xl mx-auto">
          {!showResult ? (
            <>
              <div className="mb-12">
                <span className="eyebrow block mb-4">STYLE QUIZ</span>
                <h1 className="font-serif text-5xl md:text-6xl mb-4">Discover Your Style</h1>
                <p className="text-muted-text text-lg">
                  Answer 5 questions to discover your interior design personality.
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
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
              </div>

              {/* Question */}
              <div className="bg-[#EFE7D8] rounded-2xl p-8 md:p-12 border border-[#D8CBB8]/25">
                <h2 className="font-serif text-2xl md:text-3xl mb-8">
                  {questions[currentQuestion].question}
                </h2>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <MagneticButton
                      key={index}
                      onClick={() => handleAnswer(option.style)}
                      className="w-full text-left px-6 py-4 rounded-xl bg-[#F7F3EC] hover:bg-[#D8CBB8]/30 border border-[#D8CBB8]/25 transition-all duration-300"
                    >
                      {option.text}
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-12">
                <span className="eyebrow block mb-4">YOUR STYLE</span>
                <h1 className="font-serif text-5xl md:text-6xl mb-4">
                  {styleDescriptions[result as keyof typeof styleDescriptions]?.title || result}
                </h1>
              </div>

              <div className="bg-[#EFE7D8] rounded-2xl p-8 md:p-12 border border-[#D8CBB8]/25 mb-8">
                <p className="font-sans font-light text-lg leading-relaxed mb-8">
                  {styleDescriptions[result as keyof typeof styleDescriptions]?.description}
                </p>

                {/* Color Palette */}
                <div>
                  <h3 className="font-serif text-xl mb-4">Your Color Palette</h3>
                  <div className="flex gap-4">
                    {styleDescriptions[result as keyof typeof styleDescriptions]?.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-16 h-16 rounded-full border-2 border-[#D8CBB8]/25"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <MagneticButton
                  onClick={resetQuiz}
                  className="px-8 py-4 rounded-full border border-[#D8CBB8] text-[#201D18] hover:bg-[#EFE7D8]/30 transition-colors"
                >
                  Retake Quiz
                </MagneticButton>
                <MagneticButton
                  onClick={() => window.location.href = '/consultation'}
                  className="px-8 py-4 rounded-full bg-[#201D18] text-[#F7F3EC] hover:bg-[#6B6F4C] transition-colors"
                >
                  Book Consultation
                </MagneticButton>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
