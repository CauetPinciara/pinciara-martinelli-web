import { Suspense } from "react";
import ServicesPageContent from "./content";
import Loading from "@/components/loading";

export default function ServicesPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ServicesPageContent />
    </Suspense>
  );
}
