import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Send me a message using the form below
        </p>
        
        <ContactForm />
      </div>
    </main>
  );
}
