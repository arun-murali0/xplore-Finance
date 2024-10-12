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
    <Wrapper className="max-w-3xl mx-auto max-sm:px-5">
      <Container
        delay={0.4}
        className="my-2 flex justify-center items-center py-20 max-sm:py-10"
      >
        <div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-primary text-sm">FAQ</div>
            <div className="my-2 text-2xl">Find the Answers You Need</div>
            <div className="my-3 text-center text-muted-foreground max-sm:text-sm max-sm:my-1">
              Explore our FAQ to get quick answers and insights that will guide
              you through your trading experience
            </div>
          </div>
          <Accordion type="single" collapsible>
            {accordion.map((item, index) => {
              return (
                <div key={index}>
                  <AccordionItem value={`value-${index}`} className="my-5">
                    <AccordionTrigger className="text-xl max-sm:text-sm">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-[18px] max-sm:text-sm">
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
