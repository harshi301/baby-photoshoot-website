export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-charcoal font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-lavender-light rounded-lg shadow-md">
            <h3 className="text-2xl text-charcoal font-semibold mb-4">
              Newborn Sessions
            </h3>
            <p className="text-charcoal">
              Capture the first moments of your newborn's life with our
              specialized sessions.
            </p>
          </div>
          <div className="p-6 bg-lavender-light rounded-lg shadow-md">
            <h3 className="text-2xl text-charcoal font-semibold mb-4">
              Milestone Sessions
            </h3>
            <p className="text-charcoal">
              Document your baby's milestones with beautifully crafted
              photoshoots.
            </p>
          </div>
          <div className="p-6 bg-lavender-light rounded-lg shadow-md">
            <h3 className="text-2xl text-charcoal font-semibold mb-4">
              Family Sessions
            </h3>
            <p className="text-charcoal">
              Create lasting memories with family sessions that capture the love
              and joy of your family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
