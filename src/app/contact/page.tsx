"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMsg("");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectDetails: formData.projectDetails,
      time: new Date().toLocaleString(), // optional: adds timestamp
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponseMsg("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            projectDetails: "",
          });
        },
        (error) => {
          console.log(error.text);
          setResponseMsg("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 pt-20">
      {/* Left Side Image */}
      <div className="flex items-center justify-center">
        <Image
          src="/contact.png"
          alt="Contact Illustration"
          className="soft-bounce"
          height={400}
          width={400}
        />
      </div>

      {/* Right Side Form */}
      <div
        style={{ fontFamily: "monospace" }}
        className="flex items-start p-5 gap-4 flex-col justify-center"
      >
        <h1 className="font-semibold text-3xl">Let&#39;s Connect</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-wrap gap-3">
            Hello! My name is
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="outline-none px-2 border-b border-black"
              placeholder="Your Name"
              required
            />
            and I want to discuss a potential project. You can email me at
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="outline-none px-2 border-b border-black"
              placeholder="Your Email"
              required
            />
            or reach out to me on
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="outline-none px-2 border-b border-black"
              placeholder="Your Phone"
            />
            Here are some details about my project:
          </div>

          <div className="w-[80%]">
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              className="w-full border-b border-black outline-none resize-none px-2 py-1"
              placeholder="My project is about..."
              rows={6}
              required
            ></textarea>
          </div>

          <div>
            <Button
              type="submit"
              variant="default"
              style={{ fontFamily: "monospace" }}
              className="bg-[#e62161] hover:text-[#e62161] hover:bg-white py-6 md:text-2xl font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Request"}
            </Button>
          </div>

          {responseMsg && (
            <p
              className={`text-lg font-semibold ${
                responseMsg.includes("successfully") ? "text-green-700" : "text-red-600"
              }`}
            >
              {responseMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
