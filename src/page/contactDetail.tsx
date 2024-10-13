import { Button } from "@/components/ui/button";
import Container from "@/global/container";
import Wrapper from "@/global/Wrapper";

export default function contactDetail() {
  return (
    <Wrapper className="max-w-5xl">
      <Container className="mt-16 flex justify-between gap-6 items-center max-sm:flex max-sm:flex-col max-sm:px-2">
        <section className="flex flex-col">
          <div className="text-primary mb-3">Contact us</div>
          <div className="text-4xl font-bold mb-3 max-sm:text-2l">
            Contact Information and Support
          </div>
          <div className="text-muted-foreground text-md max-sm:text-sm">
            {`Have questions or feedback? We're here to help! Reach out to us via
            email or fill out the form below, and we'll get back to you shortly.`}
          </div>
        </section>

        <section className="max-sm:px-1">
          <form className="min-h-fit w-96 p-5 rounded-lg shadow-sm shadow-gray-400 max-sm:max-w-xs">
            <div className="text-center">Logo</div>

            <div className="my-4 max-sm:my-2 max-sm:text-xs">
              <label htmlFor="Name">
                Name<span className="text-red-600 ms-[2px]">*</span>
              </label>
              <div className="my-2">
                <input
                  type="text"
                  className="w-full p-2 bg-muted rounded-sm max-sm:p-1"
                />
              </div>
            </div>
            <div className="my-4 max-sm:text-xs">
              <label htmlFor="email">
                Email<span className="text-red-600 ms-[2px]">*</span>
              </label>
              <div className="my-2">
                <input
                  type="email"
                  className="w-full p-2 bg-muted rounded-sm max-sm:p-1"
                />
              </div>
            </div>
            <div className="my-4 max-sm:text-xs">
              <label htmlFor="subject">
                subject<span className="text-red-600 ms-[2px]">*</span>
              </label>
              <div className="my-2">
                <input
                  type="text"
                  className="w-full p-2 bg-muted rounded-sm max-sm:p-1"
                />
              </div>
            </div>
            <div className="my-4 max-sm:text-xs">
              <label htmlFor="message">
                Write message<span className="text-red-600 ms-[2px]">*</span>
              </label>
              <div className="my-2">
                <textarea className="w-full p-2 bg-muted rounded-sm " />
              </div>
            </div>
            <Button className="w-full bg-primary my-3 max-sm:mt-2">Send</Button>
          </form>
        </section>
      </Container>
    </Wrapper>
  );
}
