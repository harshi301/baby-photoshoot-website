export default function Testimonials() {
  return (
    <section className="py-20 bg-lavender-light">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-charcoal font-bold mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-charcoal mb-4">
              "The photoshoot was amazing! We love the pictures and the whole
              experience was wonderful."
            </p>
            <h4 className="text-charcoal font-semibold">- Parent 1</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-charcoal mb-4">
              "Thank you for capturing such beautiful moments of our baby. We
              will cherish these forever."
            </p>
            <h4 className="text-charcoal font-semibold">- Parent 2</h4>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-charcoal mb-4">
              "Absolutely stunning photos! The team was professional and made us
              feel comfortable."
            </p>
            <h4 className="text-charcoal font-semibold">- Parent 3</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
