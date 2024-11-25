import React from "react";

import { Facebook, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Contact With Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <h2 className="text-3xl font-bold">Vijay Parmar</h2>
              <p className="text-gray-600 mt-1">NodeJS Developer</p>
            </div>

            <p className="text-gray-700">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>

            <div className="space-y-1">
              <p className="text-gray-700">
                Phone:{" "}
                <span className="text-gray-900 font-medium">
                  +91 8140311309
                </span>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <span className="text-gray-900 font-medium">
                  vijayparmar0027@gmail.com
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-4">
                FIND WITH ME
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form className="space-y-4 bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="YOUR NAME"
                  className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500"
                />
              </div>
              <div>
                <Input
                  placeholder="PHONE NUMBER"
                  className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <Input
                placeholder="EMAIL"
                className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500"
              />
            </div>

            <div>
              <Input
                placeholder="SUBJECT"
                className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500"
              />
            </div>

            <div>
              <Textarea
                placeholder="YOUR MESSAGE"
                rows={6}
                className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              SEND MESSAGE
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
