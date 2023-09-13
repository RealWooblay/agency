import Navbar from '@/components/Navbar';
import { ContactForm } from '../../form';

export default function contact() {
    return (
        <main className="text-white container mx-auto px-14">
            <Navbar />
            <ContactForm />
        </main>
    )
}