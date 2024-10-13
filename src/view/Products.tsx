import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";
import ProductCard from "@/components/ui/productCard";
import { CardDetails } from "@/constant";

export default function Products() {
  return (
    <Wrapper className="max-w-full mx-auto">
      <Container className="py-20 max-sm:py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-sm text-primary my-2">our Products</div>
          <div className="text-3xl my-1 max-sm:text-xl">
            Discover Our Programs
          </div>
          <div className="text-muted-foreground text-center my-2 max-sm:text-sm max-sm:text-start">
            Unlock your trading potential with our specialized programs. Each
            product delivers essential strategies and insights to guide you on
            your financial journey.
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 flex-wrap mt-3">
          {CardDetails.map((card, index) => (
            <div key={index}>
              <ProductCard
                title={card.cardTitle}
                author={card.cardAuthor}
                content={card.learn}
              />
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
}
