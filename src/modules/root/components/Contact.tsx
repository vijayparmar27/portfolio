import React from "react";

import { Linkedin, Instagram } from "lucide-react";
// import { Input } from "@/components/ui/Input";
// import { Textarea } from "@/components/ui/Textarea";

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(`-=--- formData : `, formData);
  // };
  return (
    <div className="text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Contact With Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="flex justify-center">
            <div className="max-w-[35rem] space-y-6 bg-white p-8 rounded-lg shadow-smooth shadow-smooth-hover ">
              <div>
                <h2 className="text-3xl font-bold">Vijay Parmar</h2>
                <p className="text-gray-600 mt-1">NodeJS Developer</p>
              </div>

              <p className="text-gray-700">
                I am available for freelance work. Connect with me via and call
                in to my account.
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
                    href="https://www.linkedin.com/in/vijay-parmar-00467b2b8/"
                    className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    target="_blank"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/_vijay__parmar_/"
                    className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    target="_blank"
                  >
                    <Instagram className="w-5 h-5 text-red-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <form
            className="space-y-4 bg-white p-8 rounded-lg shadow-smooth shadow-smooth-hover"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="YOUR NAME"
                  className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="PHONE NUMBER"
                  className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="EMAIL"
                className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500"
              />
            </div>

            <div>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="SUBJECT"
                className="bg-gray-100 border-gray-300 focus:border-blue-500 text-gray-800 placeholder-gray-500"
              />
            </div>

            <div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
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
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
