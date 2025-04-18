import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { auth } from "./firebaseConfig"; // Assurez-vous que l'authentification est correctement importée

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Récupérer l'utilisateur Firebase actuel
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!stripe || !elements) return;
  
    if (!user) {
      setMessage("❌ Vous devez être connecté pour effectuer un paiement !");
      setLoading(false);
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    try {
      // Créer le moyen de paiement
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
  
      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }
  
      // Envoyer la requête au backend
      const res = await fetch("https://backend-feedback-8sen.onrender.com/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.uid, paymentMethodId: paymentMethod.id }),
      });
      const data = await res.json();
  
      if (data.error) {
        setMessage(`❌ ${data.error}`);
      } else if (data.success) {
        setMessage("✅ Paiement réussi !");
        // Vous pouvez aussi rediriger vers une page de confirmation, par exemple :
        // history.push("/payment-success");
      }
    } catch (err) {
      setMessage("❌ Une erreur est survenue lors de la connexion au serveur.");
    }
  
    setLoading(false);
  };
  
  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Paiement sécurisé</h2>
      <p>Veuillez entrer vos informations de carte de crédit ci-dessous :</p>
      <div className="form-group">
        <CardElement className="stripe-card-element" />
      </div>
      <button type="submit" className="submit-button" disabled={!stripe || loading}>
        {loading ? "Paiement en cours..." : "Payer 19.99€"}
      </button>
      {message && <p className={`status-message ${message.startsWith("✅") ? "success" : "error"}`}>{message}</p>}
    </form>
  );
};

export default CheckoutForm;


