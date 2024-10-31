export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us, including when you create an account, claim a business listing, or contact us for support.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users and services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
        <p className="mb-4">
          We do not share your personal information with third parties except as described in this privacy policy or with your consent.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
        </p>
      </div>
    </div>
  );
}