import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 bg-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center px-6 py-20 text-center bg-gradient-to-b from-pink-100 to-white">
        <img src="/logo.png" alt="Boutique Logo" className="w-24 h-24 mb-4" />
        <h1 className="font-serif text-4xl">Elegant Looks</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-md">
          Discover handcrafted pieces that bring elegance to everyday wear.
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
          Shop the Collection
        </button>
      </header>

      {/* About/Services Section */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="max-w-xl mx-auto mb-8">
          We’re a local boutique focused on sustainable fashion and curated
          designs for confident, conscious women.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {["Clothing", "Accessories", "Custom Styling"].map((service) => (
            <div key={service} className="p-6 border rounded shadow-sm">
              <h3 className="text-lg font-medium mb-2">{service}</h3>
              <p className="text-sm text-gray-600">
                {service === "Clothing" && "Chic, eco-friendly apparel."}
                {service === "Accessories" &&
                  "Complete your look effortlessly."}
                {service === "Custom Styling" &&
                  "One-on-one styling tailored to you."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact Button */}
      <footer className="mt-auto px-6 py-8 bg-pink-100 text-center">
        <p className="mb-4">
          Have questions or want to book a styling session?
        </p>
        <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition">
          Contact Us
        </button>
        <p className="mt-6 text-sm text-gray-500">© 2025 Boutique Co.</p>
      </footer>
    </div>
  );
}
