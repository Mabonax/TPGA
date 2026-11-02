import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { CreativeBanner, Eyebrow } from '@/components/tpga/shared';
import { studioEmail } from '@/lib/tpga';

export default function Contact({ project = false }: { project?: boolean }) {
    const { url } = usePage();
    const [preparedFor, setPreparedFor] = useState<string | null>(null);
    const initialService = new URL(url, 'https://studio.invalid').searchParams
        .get('service')
        ?.slice(0, 120);
    const context = `${project ? 'project' : 'contact'}:${initialService ?? ''}`;
    const choices = [
        'Branding',
        'Web & digital',
        'Content & media',
        '3D & motion',
        'Strategy',
        'Not sure yet',
    ];
    function prepareEmail(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const field = (name: string, fallback = '') => {
            const value = data.get(name);
            return typeof value === 'string' && value ? value : fallback;
        };
        const selected = data
            .getAll('services')
            .filter((value): value is string => typeof value === 'string');
        const body = [
            `Name: ${field('name')}`,
            `Email: ${field('email')}`,
            `Company: ${field('company', '—')}`,
            `Services: ${selected.join(', ') || initialService || 'To discuss'}`,
            `Budget: ${field('budget', 'To discuss')}`,
            `Timeline: ${field('timeline', 'To discuss')}`,
            '',
            field('message'),
        ].join('\n');
        window.location.href = `mailto:${studioEmail}?subject=${encodeURIComponent(project ? 'New project enquiry' : 'Studio enquiry')}&body=${encodeURIComponent(body)}`;
        setPreparedFor(context);
    }
    return (
        <>
            <Head title={project ? 'Start a Project' : 'Contact the Studio'} />
            <CreativeBanner />
            <section className="contact-stage">
                <div className="contact-intro">
                    <Eyebrow>
                        {project
                            ? 'Your next big idea'
                            : 'Let’s start a conversation'}
                    </Eyebrow>
                    <h1>
                        {project ? (
                            <>
                                Start a<br />
                                <span>Project.</span>
                            </>
                        ) : (
                            <>
                                Let’s create
                                <br />
                                <span>together.</span>
                            </>
                        )}
                    </h1>
                    <p>
                        {project
                            ? 'Big ambition or a first spark — we’re here for it. Tell us what you have in mind and let’s make it happen.'
                            : 'Have a question or an idea in mind? Get in touch with the studio and let’s explore the possibilities.'}
                    </p>
                    <Eyebrow>From idea to conversation</Eyebrow>
                    <ol>
                        <li>
                            <strong>Share your vision</strong>
                            <p>
                                A few details help us understand your goals. No
                                polished brief needed.
                            </p>
                        </li>
                        <li>
                            <strong>Find the right direction</strong>
                            <p>
                                We’ll use your brief to start a conversation
                                about what comes next.
                            </p>
                        </li>
                    </ol>
                    <div className="contact-details">
                        <a href={`mailto:${studioEmail}`}>
                            <Mail />
                            {studioEmail}
                        </a>
                        <a href="tel:+27680712993">
                            <Phone />
                            +27 68 071 2993
                        </a>
                        <p>
                            <MapPin />
                            Pretoria, South Africa
                        </p>
                    </div>
                    <Link
                        href={project ? '/contact' : '/start-a-project'}
                        className="text-arrow"
                    >
                        {project ? 'Visit Contact' : 'Have a project in mind?'}
                        <ArrowRight size={17} />
                    </Link>
                </div>
                <form
                    key={context}
                    className="enquiry-form"
                    onSubmit={prepareEmail}
                    aria-describedby="enquiry-delivery-note"
                >
                    <h2>
                        {project
                            ? 'Tell us a little about your project.'
                            : 'How can we help?'}
                    </h2>
                    <p>
                        Start with what you know. We’ll figure out the rest
                        together.
                    </p>
                    <div className="form-three">
                        <label>
                            Your name <span>*</span>
                            <input
                                name="name"
                                required
                                autoComplete="name"
                                placeholder="Full name"
                                maxLength={100}
                            />
                        </label>
                        <label>
                            Email address <span>*</span>
                            <input
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="you@company.com"
                                maxLength={200}
                            />
                        </label>
                        <label>
                            Company / brand
                            <input
                                name="company"
                                autoComplete="organization"
                                placeholder="Optional"
                                maxLength={150}
                            />
                        </label>
                    </div>
                    {project && (
                        <fieldset>
                            <legend>
                                What can we help with?{' '}
                                <small>Select all that apply.</small>
                            </legend>
                            {initialService && (
                                <p className="service-interest">
                                    Interested in: {initialService}
                                </p>
                            )}
                            <div className="choice-pills">
                                {choices.map((c) => (
                                    <label key={c}>
                                        <input
                                            type="checkbox"
                                            name="services"
                                            value={c}
                                        />
                                        <span>{c}</span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    )}
                    <label>
                        {project ? 'Tell us about your idea' : 'Your message'}{' '}
                        <span>*</span>
                        <textarea
                            required
                            name="message"
                            rows={5}
                            maxLength={4000}
                            placeholder="Tell us about your goals, your audience and what success looks like."
                        />
                    </label>
                    {project && (
                        <div className="form-two">
                            <label>
                                Budget range
                                <select name="budget" defaultValue="">
                                    <option value="">Select a range</option>
                                    <option>Under R5,000</option>
                                    <option>R5,000–R15,000</option>
                                    <option>R15,000–R50,000</option>
                                    <option>R50,000+</option>
                                    <option>Let’s discuss</option>
                                </select>
                            </label>
                            <label>
                                Ideal timeline
                                <select name="timeline" defaultValue="">
                                    <option value="">
                                        When would you like to start?
                                    </option>
                                    <option>As soon as possible</option>
                                    <option>Within a month</option>
                                    <option>In 1–3 months</option>
                                    <option>Just exploring</option>
                                </select>
                            </label>
                        </div>
                    )}
                    <label className="consent-label">
                        <input type="checkbox" required />
                        I’m happy for TonicPunkGraphics to contact me about this
                        enquiry.
                    </label>
                    <div className="enquiry-submit">
                        <p id="enquiry-delivery-note">
                            This opens your email app with a draft. Review and
                            send it there. You can attach your brief to the
                            email.
                        </p>
                        <button type="submit" className="tp-button">
                            Prepare {project ? 'project ' : ''}enquiry{' '}
                            <ArrowRight size={18} />
                        </button>
                    </div>
                    {preparedFor === context && (
                        <p className="email-notice" role="status">
                            Your email draft is ready to open. If your email app
                            didn’t open, email {studioEmail} directly. Your
                            enquiry has not been sent by this website.
                        </p>
                    )}
                </form>
            </section>
            {!project && (
                <section className="location-section">
                    <div>
                        <Eyebrow>Our home base</Eyebrow>
                        <h2>Pretoria, South Africa</h2>
                        <p>
                            At the heart of innovation.
                            <br />
                            Serving clients across Africa and beyond.
                        </p>
                    </div>
                    <MapPin size={100} />
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Pretoria%2C%20South%20Africa"
                        target="_blank"
                        rel="noreferrer"
                        className="tp-button"
                    >
                        Explore Pretoria <ArrowRight size={18} />
                    </a>
                </section>
            )}
        </>
    );
}
