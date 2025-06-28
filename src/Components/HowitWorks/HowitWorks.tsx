import { Bai_Jamjuree } from "next/font/google";
import React from "react";
import { FaListAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";

const HowItWorks = () => {
  return (
      <div className="max-w-7xl mx-auto text-center select-none ">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-14 max-w-3xl mx-auto font-medium">
          With <span className="text-green-600 font-semibold">Kirana Jet</span>,
          shopping in Hodal is as simple as sending a message. No apps, no
          queues — just pure convenience delivered to your doorstep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
          {/* Step 1 */}
          <div className="bg-white h-[420px] rounded-2xl shadow-lg hover:shadow-xl p-8 hover:-translate-y-2 transition duration-100">
            <div className="text-5xl mb-2 bg-cover bg-center h-2/3"
            style={{backgroundImage:`url('/images/listHIW.jpg')`}}>📝</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Make Your List
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Write down everything you need — groceries, stationery, or
              cleaning supplies. Even if it’s just one ₹10 item, we’ve got you
              covered.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white h-[420px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-2">
            <div className="text-5xl mb-2 bg-cover bg-center h-2/3"
            style={{backgroundImage : `url('/images/whatsappHIW.jpg')`}}
            ></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Send via WhatsApp
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium mb-3">
              Just send your list to{" "}
              <span className="text-green-600 font-semibold">95885XXXXX</span>{" "}
              on WhatsApp. No app downloads, no logins — fast, direct, and
              user-friendly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white h-[420px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-2">
            <div className="text-5xl bg-center bg-cover h-2/3"
             style={{ backgroundImage: `url('/images/DeliveryHIW.jpg')` }}
            >🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Fast Home Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium mb-3">
              We deliver directly from trusted Hodal stores in just{" "}
              <span className="font-semibold text-green-600">
                20–30 minutes
              </span>
              . Fresh, fast, and hassle-free — every time.
            </p>
          </div>
        </div>
      </div>
    );
};

export default HowItWorks;
