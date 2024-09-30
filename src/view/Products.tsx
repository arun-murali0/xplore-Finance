import Container from '@/global/container';
import Wrapper from '@/global/Wrapper';
import SectionBadge from '@/components/ui/section-badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
  const handleProducts = () => {
    alert('hello');
  };

  return (
    <Wrapper className='my-5'>
      <Container delay={0.3}>
        <div className='flex justify-center items-center'>
          <SectionBadge title='Products' />
        </div>
        <section>
          <div>
            <Button>
              <Link href={'/products'}>Products</Link>
            </Button>
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}
