"use client";

import { motion } from "framer-motion";
import { buildWhatsAppGenericUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={buildWhatsAppGenericUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter AgaDream sur WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow px-4 py-3 sm:bottom-6 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="w-5 h-5 shrink-0" />
      <span className="text-sm font-semibold hidden sm:inline">Nous contacter</span>
    </motion.a>
  );
}
