import { Button } from "../ui/button";

interface IProps {
  text?: string;
}
export default function ContactButton({ text }: IProps) {
  return (
    <a
      href="https://wa.me/5527997613207?text=Oi%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20Pinciara%20Martinelli!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size="lg" className="bg-salmon-500 font-bold mr-4">
        {text ?? "Fale com um Especialista"}
      </Button>
    </a>
  );
}
