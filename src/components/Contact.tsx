import {useState} from "react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Mail, MapPin, Send, Github, Linkedin, ExternalLink} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import {BREVO_API_KEY} from "@/config.ts";

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "dhruvgupta130@gmail.com",
        href: "mailto:dhruvgupta130@gmail.com",
        color: "primary",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Jhansi, Uttar Pradesh, India",
        href: "#",
        color: "primary",
    },
];

const socialLinks = [
    {
        icon: Github,
        name: "GitHub",
        url: "https://github.com/DhruvGupta130",
        color: "primary",
    },
    {
        icon: Linkedin,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruvgupta130/",
        color: "accent",
    },
    {
        icon: ExternalLink,
        name: "Portfolio",
        url: "https://dhruv-gupta-portfolio.netlify.app/",
        color: "primary",
    },
];

export const Contact = () => {
    const {toast} = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setErrors((prev) => ({...prev, [e.target.name]: ""}));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        const emailData = {
            sender: {name: formData.name, email: formData.email},
            to: [{email: "dhruvgupta130@gmail.com", name: "Dhruv Gupta"}],
            subject: formData.subject,
            htmlContent: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
          <h2 style="margin-bottom: 0;">📩 New Contact Message</h2>
          <hr style="margin: 10px 0;" />
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <hr style="margin: 20px 0;" />
          <p style="white-space: pre-line;">${formData.message}</p>
        </div>
      `,
        };

        try {
            const response = await fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": BREVO_API_KEY,
                    Accept: "application/json",
                },
                body: JSON.stringify(emailData),
            });

            if (response.ok) {
                toast({
                    title: "✅ Message sent!",
                    description: "Thank you for reaching out. I'll get back to you soon.",
                });
                setFormData({name: "", email: "", subject: "", message: ""});
            } else {
                toast({
                    title: "⚠️ Error",
                    description: "Something went wrong. Please try again later.",
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                title: "⚠️ Network Error",
                description: "Unable to send message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative bg-gray-950 text-gray-100 overflow-hidden">
            {/* Background Decorative Elements */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
                        <span className="text-premium">Let's Build</span>{" "}
                        <span className="gradient-text">Something Great</span>
                    </h2>
                    <p className="text-xl text-subtle max-w-2xl mx-auto font-medium">
                        Open for high-impact backend roles, architectural collaborations,
                        and challenging distributed systems problems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Contact Form */}
                    <div
                        className="lg:col-span-7 hover-premium rounded-[32px] p-[1px] bg-gradient-to-br from-gray-800 to-transparent">
                        <Card
                            className="glass-premium p-8 md:p-10 border-none rounded-[31px] bg-gray-900/40 backdrop-blur-2xl">
                            <h3 className="text-3xl font-black text-premium mb-8 tracking-tight">Initiate
                                Transmission</h3>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name"
                                               className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-1">
                                            Full Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Dhruv Gupta"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="h-14 bg-gray-950/50 border-gray-800 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all duration-300 text-lg"
                                        />
                                        {errors.name &&
                                            <p className="text-red-400 text-xs font-bold mt-1 uppercase tracking-wider">{errors.name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email"
                                               className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-1">
                                            Email Address
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="dhruv@backend.engineer"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="h-14 bg-gray-950/50 border-gray-800 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all duration-300 text-lg"
                                        />
                                        {errors.email &&
                                            <p className="text-red-400 text-xs font-bold mt-1 uppercase tracking-wider">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject"
                                           className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-1">
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        placeholder="Engineering Collaboration / SDE-1 Role"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="h-14 bg-gray-950/50 border-gray-800 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all duration-300 text-lg"
                                    />
                                    {errors.subject &&
                                        <p className="text-red-400 text-xs font-bold mt-1 uppercase tracking-wider">{errors.subject}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message"
                                           className="text-sm font-bold uppercase tracking-widest text-gray-500 ml-1">
                                        Message Body
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Describe the technical challenge or opportunity..."
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-gray-950/50 border-gray-800 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all duration-300 resize-none text-lg p-5"
                                    />
                                    {errors.message &&
                                        <p className="text-red-400 text-xs font-bold mt-1 uppercase tracking-wider">{errors.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 rounded-2xl bg-primary text-gray-950 text-base font-black uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] group"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-950"/>
                                            Processing...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            <span>Dispatch Message</span>
                                            <Send
                                                className="h-5 w-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500"/>
                                        </div>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Contact Info & Social */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-black text-premium tracking-tight mb-8">Direct Access</h3>
                            <div className="grid gap-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index}
                                         className="hover-premium rounded-[24px] p-[1px] bg-gradient-to-br from-gray-800 to-transparent">
                                        <Card
                                            className="glass-premium p-6 border-none rounded-[23px] bg-gray-900/40 backdrop-blur-xl group cursor-pointer transition-all duration-500">
                                            <a href={info.href} className="flex items-center gap-6">
                                                <div
                                                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-500">
                                                    <info.icon
                                                        className="h-6 w-6 text-primary group-hover:text-gray-950 transition-colors"/>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{info.title}</p>
                                                    <p className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors tracking-tight">{info.value}</p>
                                                </div>
                                            </a>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-premium tracking-tight mb-8">Nodes & Networks</h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-primary/50 hover:bg-gray-900/80 transition-all duration-500 group shadow-lg"
                                    >
                                        <social.icon
                                            className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"/>
                                        <span
                                            className="font-bold text-gray-300 group-hover:text-white">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};