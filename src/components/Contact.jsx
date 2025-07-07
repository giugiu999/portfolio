import { Mail, Linkedin, Github, Send, User, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/index";
import { useState } from "react";

export const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "wangyiru9159@gmail.com",
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=wangyiru9159@gmail.com",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            title: "LinkedIn",
            value: "Rosy Wang",
            link: "https://www.linkedin.com/in/rosy-wang-38166a29b/",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            icon: <Github className="w-6 h-6" />,
            title: "GitHub",
            value: "giugiu999",
            link: "https://github.com/giugiu999",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form submission logic
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        alert(t.messageSentSuccess);
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.contactTitle} <span className="text-purple-500">{t.contactSubtitle}</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        {t.contactDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Information */}
                    <div className="bg-background/50 p-8 rounded-xl border border-border shadow-lg flex flex-col">
                        <h3 className="text-2xl font-bold mb-6">
                            <span className="text-white">Contact</span> <span className="text-purple-500">Information</span>
                        </h3>
                        <div className="space-y-6 flex-grow">
                            {contactInfo.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center p-4 rounded-xl border ${contact.borderColor} ${contact.bgColor} hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-purple-500/20 hover:border-purple-500/40`}
                                >
                                    <div className={`p-3 rounded-full ${contact.bgColor} ${contact.color} group-hover:scale-110 transition-transform duration-300 mr-4 group-hover:bg-purple-500/30`}>
                                        {contact.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">{contact.title}</h4>
                                        <p className="text-foreground/70">{contact.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Send Message Form */}
                    <div className="bg-background/50 p-8 rounded-xl border border-border shadow-lg flex flex-col">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6" />
                            <span className="text-white">Send</span> <span className="text-purple-500">Message</span>
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                            <div className="flex-grow space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                                        {t.yourName}
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background/80 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                            placeholder={t.enterYourName}
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                                        {t.yourEmail}
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background/80 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                            placeholder={t.enterYourEmail}
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="flex-grow">
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                                        {t.yourMessage}
                                    </label>
                                    <div className="relative h-full">
                                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background/80 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none h-full min-h-[120px]"
                                            placeholder={t.enterYourMessage}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mt-auto"
                            >
                                <Send className="w-5 h-5" />
                                {t.sendMessageButton}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}; 