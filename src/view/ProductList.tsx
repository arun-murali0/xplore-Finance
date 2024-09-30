import dummy from '../../public/dummy.webp';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Cards } from '@/constant';
import Wrapper from '@/global/Wrapper';
import Container from '@/global/container';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function ProductList() {
  return (
    <Wrapper className='m-10'>
      <Link href='/' className='text-primary'>
        Back
      </Link>
      <Container className='flex flex-wrap justify-center items-center gap-3'>
        {Cards.map((card, index) => {
          return (
            <div key={index}>
              <Card className='w-80'>
                <CardHeader>
                  <Image src={dummy} alt='' width={200} height={200} />
                  <CardContent>
                    <CardTitle>{card.cardTitle}</CardTitle>
                    <CardDescription>{card.cardDescription}</CardDescription>
                  </CardContent>
                </CardHeader>
                <CardFooter>
                  <Button>
                    <Link href={"/knowmore"}>Know More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </Container>
    </Wrapper>
  );
}
