import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export const ContactSection = () => {
    const formRef = useRef();
    const [showToast, setShowToast] = useState(false);
    const [toastType, setToastType] = useState('success'); // 'success' or 'error'
    const [toastMessage, setToastMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // EmailJS credentials
        const SERVICE_ID = 'service_3srowgt';
        const TEMPLATE_ID = 'template_s3q4q3y';
        const PUBLIC_KEY = 'MwyfgpEzQvZeYu04G';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                setToastType('success');
                setToastMessage('Message sent successfully! I\'ll get back to you soon.');
                setShowToast(true);
                e.target.reset();
            })
            .catch((error) => {
                setToastType('error');
                setToastMessage('Failed to send message. Please try again or email me directly.');
                setShowToast(true);
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                setIsLoading(false);
                setTimeout(() => setShowToast(false), 5000);
            });
    };

    return (
        <section id="contact" style={{ padding: '6rem 1rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 
                    style={{ 
                        fontSize: '1.875rem', 
                        fontWeight: 'bold', 
                        marginBottom: '1rem', 
                        textAlign: 'center' 
                    }}
                >
                    Get In <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-muted-foreground" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
                </p>

                <div 
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(2, 1fr)', 
                        gap: '3rem',
                        alignItems: 'start'
                    }}
                    className="contact-grid"
                >
                    {/* Left column: Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                            Contact Information
                        </h3>

                        {/* Email */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div 
                                style={{ 
                                    padding: '0.75rem', 
                                    borderRadius: '9999px',
                                    backgroundColor: 'hsl(250 65% 65% / 0.1)'
                                }}
                            >
                                <Mail style={{ width: '1.25rem', height: '1.25rem', color: 'hsl(250 65% 65%)' }} />
                            </div>
                            <div>
                                <div className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Email</div>
                                <a href="mailto:ashalyasenarathna2001@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>ashalyasenarathna2001@gmail.com</a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div 
                                style={{ 
                                    padding: '0.75rem', 
                                    borderRadius: '9999px',
                                    backgroundColor: 'hsl(250 65% 65% / 0.1)'
                                }}
                            >
                                <Phone style={{ width: '1.25rem', height: '1.25rem', color: 'hsl(250 65% 65%)' }} />
                            </div>
                            <div>
                                <div className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Phone</div>
                                <a href="tel:+94760505691" style={{ color: 'inherit', textDecoration: 'none' }}>+94 760 505 691</a>
                            </div>
                        </div>

                        {/* Location */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div 
                                style={{ 
                                    padding: '0.75rem', 
                                    borderRadius: '9999px',
                                    backgroundColor: 'hsl(250 65% 65% / 0.1)'
                                }}
                            >
                                <MapPin style={{ width: '1.25rem', height: '1.25rem', color: 'hsl(250 65% 65%)' }} />
                            </div>
                            <div>
                                <div className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Location</div>
                                <div>Galigamuwa, Kegalle, Sri Lanka</div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div style={{ paddingTop: '1rem' }}>
                            <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Connect With Me</h4>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <a href="https://www.linkedin.com/in/ashalya-senarathna-782992292" target="_blank" rel="noopener noreferrer"
                                   style={{ padding: '0.75rem', borderRadius: '9999px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'inherit', transition: 'all 0.3s' }}
                                   onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(250 65% 65%)'; e.currentTarget.style.borderColor = 'hsl(250 65% 65%)'; e.currentTarget.style.color = 'white'; }}
                                   onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--card))'; e.currentTarget.style.borderColor = 'hsl(var(--border))'; e.currentTarget.style.color = 'inherit'; }}>
                                    <Linkedin style={{ width: '1.25rem', height: '1.25rem' }} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                   style={{ padding: '0.75rem', borderRadius: '9999px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'inherit', transition: 'all 0.3s' }}
                                   onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(250 65% 65%)'; e.currentTarget.style.borderColor = 'hsl(250 65% 65%)'; e.currentTarget.style.color = 'white'; }}
                                   onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--card))'; e.currentTarget.style.borderColor = 'hsl(var(--border))'; e.currentTarget.style.color = 'inherit'; }}>
                                    <Twitter style={{ width: '1.25rem', height: '1.25rem' }} />
                                </a>
                                <a href="https://www.instagram.com/ashalya__senarathna?igsh=cTN3cGhyZDR5dmRx&utm_source=qr" target="_blank" rel="noopener noreferrer"
                                   style={{ padding: '0.75rem', borderRadius: '9999px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'inherit', transition: 'all 0.3s' }}
                                   onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(250 65% 65%)'; e.currentTarget.style.borderColor = 'hsl(250 65% 65%)'; e.currentTarget.style.color = 'white'; }}
                                   onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--card))'; e.currentTarget.style.borderColor = 'hsl(var(--border))'; e.currentTarget.style.color = 'inherit'; }}>
                                    <Instagram style={{ width: '1.25rem', height: '1.25rem' }} />
                                </a>
                                <a href="https://github.com/ashalyaSenarathna" target="_blank" rel="noopener noreferrer"
                                   style={{ padding: '0.75rem', borderRadius: '9999px', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--card))', color: 'inherit', transition: 'all 0.3s' }}
                                   onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'hsl(250 65% 65%)'; e.currentTarget.style.borderColor = 'hsl(250 65% 65%)'; e.currentTarget.style.color = 'white'; }}
                                   onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'hsl(var(--card))'; e.currentTarget.style.borderColor = 'hsl(var(--border))'; e.currentTarget.style.color = 'inherit'; }}>
                                    <Github style={{ width: '1.25rem', height: '1.25rem' }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Message Form Card */}
                    <div 
                        style={{
                            padding: '1.5rem',
                            borderRadius: '0.75rem',
                            border: '1px solid hsl(var(--border))',
                            backgroundColor: 'hsl(var(--card))',
                            backdropFilter: 'blur(8px)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>Send a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div>
                                <label className="text-muted-foreground" style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>Your Name <span style={{ color: 'hsl(0 84% 60%)' }}>*</span></label>
                                <input 
                                    name="name"
                                    required
                                    minLength={2}
                                    maxLength={100}
                                    pattern="[A-Za-z\s]+"
                                    title="Only letters and spaces are allowed"
                                    onInput={(e) => { e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ''); }}
                                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--background))', color: 'inherit', outline: 'none' }}
                                    placeholder="Pedro Machado..."
                                />
                            </div>
                            <div>
                                <label className="text-muted-foreground" style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>Your Email <span style={{ color: 'hsl(0 84% 60%)' }}>*</span></label>
                                <input 
                                    name="email"
                                    type="email"
                                    required
                                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--background))', color: 'inherit', outline: 'none' }}
                                    placeholder="john@gmail.com"
                                />
                            </div>
                            <div>
                                <label className="text-muted-foreground" style={{ fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>Your Message <span style={{ color: 'hsl(0 84% 60%)' }}>*</span></label>
                                <textarea 
                                    name="message"
                                    required
                                    minLength={10}
                                    maxLength={1000}
                                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--background))', color: 'inherit', outline: 'none', height: '80px', resize: 'none' }}
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <button type="submit" disabled={isLoading} className="cosmic-button" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer', color: '#ffffff' }}>
                                {isLoading ? (
                                    <><Loader2 style={{ width: '1rem', height: '1rem', animation: 'spin 1s linear infinite' }} /> Sending...</>
                                ) : (
                                    <>Send Message <Send style={{ width: '1rem', height: '1rem' }} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>

            {/* Toast Notification */}
            {showToast && (
                <div 
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        padding: '1rem 1.5rem',
                        borderRadius: '0.75rem',
                        backgroundColor: toastType === 'success' ? 'hsl(142 76% 36%)' : 'hsl(0 84% 50%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                        animation: 'slideIn 0.3s ease-out',
                        zIndex: 1000
                    }}
                >
                    {toastType === 'success' ? (
                        <CheckCircle style={{ width: '1.25rem', height: '1.25rem' }} />
                    ) : (
                        <AlertCircle style={{ width: '1.25rem', height: '1.25rem' }} />
                    )}
                    <span>{toastMessage}</span>
                </div>
            )}

            <style>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}