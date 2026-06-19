const WHATSAPP_NUMBER = "212600000000"; // À remplacer par le vrai numéro

export function buildWhatsAppUrl(apartmentTitle: string, pricePerNight: number): string {
  const message = `Bonjour AgaDream ! 👋\n\nJe suis intéressé(e) par l'appartement :\n*${apartmentTitle}*\n\nPrix affiché : ${pricePerNight.toLocaleString("fr-FR")} MAD / nuit\n\nPouvez-vous me confirmer la disponibilité et les modalités de réservation ?\n\nMerci !`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppGenericUrl(): string {
  const message = "Bonjour AgaDream ! 👋\n\nJe souhaite avoir plus d'informations sur vos appartements à Agadir.\n\nMerci !";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
