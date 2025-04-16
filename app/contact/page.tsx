import { ContactForm } from '@/components/ContactForm';
import { Toaster } from 'sonner';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">お問い合わせ</h1>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
      <Toaster position="top-center" />
    </div>
  );
} 