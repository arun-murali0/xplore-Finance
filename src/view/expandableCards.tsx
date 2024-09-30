import Wrapper from '@/global/Wrapper';
import Link from 'next/link';
export default function expandableCards() {
  return (
    <Wrapper>
      <Link href={'/products'} className='text-primary'>Back</Link>
      Card details ,video,comments
    </Wrapper>
  );
}
