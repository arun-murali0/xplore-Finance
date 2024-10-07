import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/global/container";
import Wrapper from "@/global/container";
import { accordion } from "@/constant";
import SectionBadge from "@/components/ui/section-badge";

export default function FAQ() {
  return (
    <Wrapper className="max-w-3xl">
      <div className="hidden md:block absolute top-0  -left-full w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
      <Container delay={0.4} className="my-2">
        <div className="flex justify-center items-center">
          <SectionBadge title="FAQ" />
        </div>
        <Accordion type="single" collapsible>
          {accordion.map((item, index) => {
            return (
              <div key={index}>
                <AccordionItem value={`value-${index}`} className="my-5">
                  <AccordionTrigger className="text-xl">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[18px]">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
      </Container>
    </Wrapper>
  );
}
