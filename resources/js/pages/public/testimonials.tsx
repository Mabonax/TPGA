import { Head } from '@inertiajs/react';
import { ClientLogos, CustomerVoices } from '@/components/tpga/shared';

export default function Testimonials() {
    return (
        <>
            <Head title="Customer Voices" />
            <h1 className="sr-only">Customer Voices</h1>
            <CustomerVoices />
            <ClientLogos />
        </>
    );
}
