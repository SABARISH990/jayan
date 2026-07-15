import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { CAKES_DATA } from "../data";

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    flavour: "",
    theme: "",
    weight:"",
    customMessage: "",
    deliveryDate: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const waMessage = `🎂 *NEW CAKE ORDER*

👤 Name: ${formData.name}
📱 Mobile: ${formData.phone}

🍰 Cake Flavour: ${formData.flavour}
🎨 Design / Theme: ${formData.theme}
💌 Cake Message: ${formData.customMessage || "None"}

📅 Delivery Date: ${formData.deliveryDate}

📍 Delivery Address:
${formData.address}

Thank you! 😊`;

    const phone = "9087877818"; // Replace with your WhatsApp number
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(waMessage)}`,
      "_blank"
    );
  };

  return (
    <div className="custom-order-page">
      <section className="section">
        <div className="order-container">

          <h2 className="order-header-title">  Custom Cake Order</h2>

          <form className="order-form" onSubmit={handleSubmit}>

            <h3 className="details-section-title">Customer Details</h3>

            <div className="form-grid">

              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
  <label>Cake Flavour *</label>
  <select
    name="flavour"
    className="form-control"
    value={formData.flavour}
    onChange={handleChange}
    required
  >
    <option value="">Select Cake Flavour</option>

    {[
      ...new Set(
        CAKES_DATA.flatMap((cake) => cake.flavours || [])
      ),
    ].map((flavour) => (
      <option key={flavour} value={flavour}>
        {flavour}
      </option>
    ))}
  </select>
</div>
<div className="form-group">
  <label>Cake Weight *</label>

  <select
    name="weight"
    className="form-control"
    value={formData.weight}
    onChange={handleChange}
    required
  >
    <option value="0.5 Kg">0.5 Kg (4-6 Persons)</option>
    <option value="1 Kg">1 Kg (8-10 Persons)</option>
    <option value="1.5 Kg">1.5 Kg (12-15 Persons)</option>
    <option value="2 Kg">2 Kg (18-20 Persons)</option>
    <option value="2.5 Kg">2.5 Kg</option>
    <option value="3 Kg">3 Kg</option>
    <option value="4 Kg">4 Kg</option>
    <option value="5 Kg">5 Kg</option>
    <option value="Custom">Custom Weight</option>
  </select>
</div>

              <div className="form-group">
                <label>Design / Theme *</label>
                <input
                  type="text"
                  name="theme"
                  className="form-control"
                  placeholder="Birthday, Wedding..."
                  value={formData.theme}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group form-group-full">
                <label>Message on Cake</label>
                <input
                  type="text"
                  name="customMessage"
                  className="form-control"
                  placeholder="Happy Birthday!"
                  value={formData.customMessage}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Delivery Date *</label>
                <input
                  type="date"
                  name="deliveryDate"
                  className="form-control"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group form-group-full">
                <label>Delivery Address *</label>
                <textarea
                  name="address"
                  className="form-control form-control-textarea"
                  placeholder="Enter delivery address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <button type="submit" className="btn-submit">
              <MessageCircle size={20} />
              Order via WhatsApp
            </button>

          </form>

        </div>
      </section>
    </div>
  );
}