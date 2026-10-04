import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import GlitchText from "./GlitchText";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaExclamationTriangle,
  FaRegEnvelopeOpen,
} from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | 'missing_keys'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const contactEmail = "reddisekharmarugani@gmail.com";
  const whatsappNumber = import.meta.env.VITE_APP_WHATSAPP_NUMBER || "919346414887";

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus("missing_keys");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Marugani Reddi Sekhar",
          from_email: form.email,
          reply_to: form.email,
          to_email: contactEmail,
          subject: form.subject || "Portfolio Contact Inquiry",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setSubmitStatus("success");
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setSubmitStatus(null), 7000);
        },
        (error) => {
          setLoading(false);
          setSubmitStatus("error");
          console.error("EmailJS sending error:", error);
        }
      );
  };

  const handleSendWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const cleanNum = whatsappNumber.replace(/[^0-9]/g, "");
    const formattedText = `*New Contact Message from Portfolio*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject || 'General Inquiry'}\n\n*Message:*\n${form.message}`;
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, "_blank");
  };

  const handleDirectWhatsAppChat = () => {
    const cleanNum = whatsappNumber.replace(/[^0-9]/g, "");
    const defaultMsg = encodeURIComponent("Hi Marugani Reddi Sekhar, I saw your portfolio and would like to connect!");
    window.open(`https://wa.me/${cleanNum}?text=${defaultMsg}`, "_blank");
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(form.subject || `Portfolio Inquiry from ${form.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2000);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] glass-panel p-8 rounded-2xl relative"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>
          <GlitchText>Contact.</GlitchText>
        </h3>

        {/* Quick Contact Chips */}
        <div className="mt-4 flex flex-wrap gap-3 items-center">
          <button
            type="button"
            onClick={handleDirectWhatsAppChat}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/30 transition-all cursor-pointer"
          >
            <FaWhatsapp className="text-base" /> Chat on WhatsApp
          </button>

          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/20 border border-[#00d9ff]/50 text-[#00d9ff] text-sm font-medium hover:bg-[#00d9ff]/30 transition-all"
          >
            <FaEnvelope className="text-base" /> {contactEmail}
          </a>

          <button
            type="button"
            onClick={() => copyToClipboard(contactEmail, "email")}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-all text-xs flex items-center gap-1"
            title="Copy Email Address"
          >
            {copiedEmail ? <FaCheck className="text-green-400" /> : <FaCopy />}
            <span className="text-xs">{copiedEmail ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-green-500/20 border border-green-500/80 rounded-xl"
          >
            <p className="text-green-400 font-medium flex items-center gap-2">
              <FaCheck /> Thank you! Your message has been sent successfully. I will get back to you shortly.
            </p>
          </motion.div>
        )}

        {submitStatus === "missing_keys" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-amber-500/20 border border-amber-500/80 rounded-xl flex flex-col gap-3"
          >
            <p className="text-amber-300 font-medium flex items-center gap-2">
              <FaExclamationTriangle /> EmailJS API keys are not configured yet on this host.
            </p>
            <p className="text-white/80 text-sm">
              You can instantly send your message via WhatsApp or your default Email client:
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="px-4 py-2 rounded-lg bg-[#25D366] text-black font-bold text-xs flex items-center gap-2 hover:brightness-110 transition-all"
              >
                <FaWhatsapp className="text-base" /> Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={handleMailtoFallback}
                className="px-4 py-2 rounded-lg bg-[#00d9ff] text-black font-bold text-xs flex items-center gap-2 hover:brightness-110 transition-all"
              >
                <FaRegEnvelopeOpen className="text-base" /> Open Mail Client
              </button>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-500/20 border border-red-500/80 rounded-xl flex flex-col gap-3"
          >
            <p className="text-red-400 font-medium flex items-center gap-2">
              <FaExclamationTriangle /> Couldn&apos;t deliver message via Email server right now.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="px-4 py-2 rounded-lg bg-[#25D366] text-black font-bold text-xs flex items-center gap-2 hover:brightness-110 transition-all"
              >
                <FaWhatsapp className="text-base" /> Try WhatsApp
              </button>
              <button
                type="button"
                onClick={handleMailtoFallback}
                className="px-4 py-2 rounded-lg bg-[#00d9ff] text-black font-bold text-xs flex items-center gap-2 hover:brightness-110 transition-all"
              >
                <FaRegEnvelopeOpen className="text-base" /> Send via Email App
              </button>
            </div>
          </motion.div>
        )}

        <form ref={formRef} onSubmit={handleSubmitEmail} className="mt-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Your Name *</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={`input-glow bg-tertiary py-3.5 px-5 placeholder:text-white/35 text-white rounded-xl outline-none border border-white/10 font-medium transition-all ${errors.name ? "border-red-500 border-2" : ""
                  }`}
              />
              {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name}</span>}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2 text-sm">Your Email *</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className={`input-glow bg-tertiary py-3.5 px-5 placeholder:text-white/35 text-white rounded-xl outline-none border border-white/10 font-medium transition-all ${errors.email ? "border-red-500 border-2" : ""
                  }`}
              />
              {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email}</span>}
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm">Subject (Optional)</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="e.g. Project Opportunity / Collaboration"
              className="input-glow bg-tertiary py-3.5 px-5 placeholder:text-white/35 text-white rounded-xl outline-none border border-white/10 font-medium transition-all"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 text-sm">Your Message *</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`input-glow bg-tertiary py-3.5 px-5 placeholder:text-white/35 text-white rounded-xl outline-none border border-white/10 font-medium transition-all resize-none ${errors.message ? "border-red-500 border-2" : ""
                }`}
            />
            {errors.message && <span className="text-red-400 text-xs mt-1">{errors.message}</span>}
          </label>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`btn-shine bg-gradient-to-r from-[#00d9ff] to-[#39ff14] py-3 px-7 rounded-full outline-none text-black font-bold shadow-md flex items-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition-transform"
                }`}
            >
              <FaPaperPlane /> {loading ? "Sending Email..." : "Send Email"}
            </button>

            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white py-3 px-7 rounded-full font-bold shadow-md flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
            >
              <FaWhatsapp className="text-lg" /> Send via WhatsApp
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

