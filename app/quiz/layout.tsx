import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Quiz | Refuge Decor",
  description: "Discover your interior design personality with our interactive style quiz.",
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
