const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-200 flex flex-col items-center py-12 px-4"
    >
      <div className="max-w-4xl w-full bg-gray-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-500 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We’d love to hear from you! Reach out to us using the contact details
          below.
        </p>
        <div className="space-y-6">
          <div className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Company Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-600">
                  Company Name
                </h3>
                <p className="text-gray-500">SkyReserve</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-600">Email</h3>
                <p className="text-gray-500">yoshithakaveesh83@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-600">Address</h3>
                <p className="text-gray-500">
                  No:35, Suncity, Haliwala, Galle, SriLanka
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-600">
                  Phone Number
                </h3>
                <p className="text-gray-500">+94 76 856 6498</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
