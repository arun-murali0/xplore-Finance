import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Container from '@/global/container';
import Wrapper from '@/global/container';
import { accordion } from '@/constant';

export default function FAQ() {
  return (
    <Wrapper className='max-w-3xl'>
      <Container delay={0.4} className='my-2'>
        <Accordion type='single' collapsible>
          {accordion.map((item, index) => {
            return (
              <div key={index}>
                <AccordionItem value={`value-${index}`} className='my-5'>
                  <AccordionTrigger className='text-xl'>
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground text-[18px]'>
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
