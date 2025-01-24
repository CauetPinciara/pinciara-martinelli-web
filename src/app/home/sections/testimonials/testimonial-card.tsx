import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Testimonial as ITestimonial } from "./types";

type IProps = {
  testimonial: ITestimonial;
};

export default function TestimonialCard({ testimonial }: IProps) {
  return (
    <Card className="w-full max-w-lg relative">
      {/* Purple Wave Decoration */}
      <div className="absolute -left-4 top-0 bottom-0 w-8 bg-salmon-500 rounded-l-full" />

      <CardHeader className="pl-6 flex items-center gap-4">
        {/* Profile Image */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <CardTitle className="text-xl font-semibold">
            {testimonial.name}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {testimonial.company}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="pl-6">
        <Quote className="text-primary h-8 w-8 mb-4 opacity-50" />
        <p className="text-gray-700 leading-relaxed">{testimonial.quote}</p>
      </CardContent>
    </Card>
  );
}
