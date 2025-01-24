import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="border-t">
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-slate-300 mb-8">
              Nossa equipe experiente está aqui para oferecer os melhores
              serviços financeiros para o seu negócio
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>(27) 99999-9999</span>
              </div>
              <div className="flex items-center justify-center gap-3 md:col-span-2">
                <Mail className="w-5 h-5" />
                <span>contato@pinciaramartinelli.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Vitória, ES</span>
              </div>
            </div>

            <Button size="lg" className="bg-salmon-500 font-bold mr-4">
              Fale com um Especialista
            </Button>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 text-center text-slate-600 py-4">
        <p>
          &copy; {new Date().getFullYear()} Pinciara Martinelli. Todos direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
