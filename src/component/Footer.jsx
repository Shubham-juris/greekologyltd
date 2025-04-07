import React from "react";
const Footer = () => {
  return (
    <>
      {/* Footer Contact Section */}
      <section className="bg-white py-16 px-4 md:px-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Questions or Comments?
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          We know that our clients have unique needs. Send us a message, and we
          will get back to you soon.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12">
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-medium text-blue-900 mb-2 md:text-left">
              Greekology
            </h3>
            <p className="text-gray-700">
              5211 50 ST. Drayton Valley, Alberta, T7A 1C9 Canada
            </p>
            <p className="text-blue-700 font-medium mt-2">+1780-234-4167</p>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-blue-900 mb-2">Hours</h3>
            <ul className="text-gray-700">
              <li>
                Mon <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                <strong>Tue</strong>{" "}
                <span className="ml-2 font-bold">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                Wed <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                Thu <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                Fri <span className="ml-2">09:00 a.m. – 05:00 p.m.</span>
              </li>
              <li>
                Sat <span className="ml-2 text-gray-500">Closed</span>
              </li>
              <li>
                Sun <span className="ml-2 text-gray-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
