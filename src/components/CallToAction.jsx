import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="contact-loopfilm"
      className="relative py-20 overflow-hidden bg-gray-900 sm:py-28"
    >
      <div className="absolute -translate-y-1/2 top-1/2 left-20 sm:left-1/2 sm:-translate-x-1/2"></div>
      <Container className="relative">
        <div className="max-w-md mx-auto sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl"></h2>
          <p className="mt-4 text-lg text-gray-300"></p>
        </div>
      </Container>
    </section>
  )
}
