import { Building2, Shield, Users2 } from "lucide-react";

export const metadata = {
  title: "About Us | TrustTrades",
  description: "Learn about our mission to connect homeowners with trusted tradespeople in their local area.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="hero-gradient py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About TrustTrades
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Connecting homeowners with trusted tradespeople since 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At TrustTrades, we're committed to transforming how homeowners find and connect with qualified tradespeople. Our platform makes it easy to find trusted professionals while helping skilled trades grow their businesses.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe in creating lasting connections between homeowners and tradespeople, built on trust, quality workmanship, and excellent service.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                {
                  icon: Shield,
                  title: "Verified Professionals",
                  description: "Every tradesperson undergoes thorough verification",
                },
                {
                  icon: Users2,
                  title: "Community Driven",
                  description: "Powered by real reviews from local homeowners",
                },
                {
                  icon: Building2,
                  title: "Local Focus",
                  description: "Supporting trades and homeowners in your area",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg border bg-card"
                >
                  <feature.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a homeowner looking for quality work or a tradesperson ready to grow your business, TrustTrades is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/claim-business" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                List Your Business
              </a>
              <a href="/search" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Find Tradespeople
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}