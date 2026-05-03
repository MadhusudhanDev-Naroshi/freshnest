"use client";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "+919876543210";
const MSG = encodeURIComponent("Hello PADVEN Farms! I'd like to place an order. 🌾");

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat with PADVEN Farms on WhatsApp"
    >
      <MessageCircle size={28} color="white" fill="white" />
    </a>
  );
}
