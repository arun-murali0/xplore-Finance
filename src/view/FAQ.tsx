import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/global/container";
import Wrapper from "@/global/container";
import { accordion } from "@/constant";

export default function FAQ() {
  return (
    <Wrapper className="max-w-3xl mx-auto">
      <Container
        delay={0.4}
        className="my-2 flex justify-center items-center py-20"
      >
        <div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-heading text-sm">FAQ</div>
            <div className="my-2 text-3xl">Find the Answers You Need</div>
            <div className="my-3 text-center text-muted-foreground">
              Explore our FAQ to get quick answers and insights that will guide
              you through your trading experience
            </div>
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
        </div>
      </Container>
    </Wrapper>
  );
}
