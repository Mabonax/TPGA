import OptimizedImage from '@/components/tpga/optimized-image';
import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import Seo from '@/components/tpga/seo';

export default function AuthLayout({
    title = '',
    description = '',
    children,
}: {
    title?: string;
    description?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="tp-auth">
            <Seo />
            <Link href="/" className="auth-home">
                <ArrowLeft size={16} /> Back to the studio
            </Link>
            <OptimizedImage
                className="auth-emblem"
                name={'emblem.png'}
                alt=""
                aria-hidden="true"
            />
            <main className="auth-content">
                <Link href="/" className="auth-logo">
                    <OptimizedImage
                        name={'logo.png'}
                        loading="eager"
                        sizes="180px"
                        alt="TonicPunkGraphics"
                    />
                </Link>
                <h1>{title}</h1>
                <p className="auth-description">{description}</p>
                {children}
            </main>
            <p className="auth-footer">
                Design. Innovation. Culture. Technology.
            </p>
        </div>
    );
}
