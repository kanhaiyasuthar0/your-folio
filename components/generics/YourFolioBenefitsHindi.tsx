import React from "react";

const YourFolioBenefitsHindi = () => {
  return (
    <div className="bg-white text-gray-600">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          अपनी पेशेवर उपस्थिति को YourFolio के साथ ऊंचाईयों तक ले जाएँ
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500 text-center">
          जानिए क्यों हर किसी को व्यक्तिगत वेबसाइट की आवश्यकता है और YourFolio
          क्यों है आपके लिए सबसे अच्छा विकल्प।
        </p>

        <div className="mt-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl leading-9 font-bold text-gray-900">
              क्यों हर किसी को चाहिए व्यक्तिगत वेबसाइट
            </h3>
            <p className="mt-1 text-lg leading-6 text-gray-500">
              अपनी पेशेवर पहचान की पूरी क्षमता को अनलॉक करें।
            </p>
          </div>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "वैश्विक पहुँच",
              "पेशेवर विश्वसनीयता",
              "प्रभावी संचार",
              "SEO लाभ",
              "सहज मार्केटिंग",
              "अपना काम प्रदर्शित करें",
              "सीधा लीड जनरेशन",
            ].map((benefit, index) => (
              <li key={index} className="mt-3 flex items-center">
                <span className="h-6 w-6 rounded-full flex items-center justify-center bg-blue-500 text-white mr-4">
                  {index + 1}
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl leading-9 font-bold text-gray-900">
              YourFolio क्यों चुनें?
            </h3>
            <p className="mt-1 text-lg leading-6 text-gray-500">
              अपने ऑनलाइन ब्रांड को बनाने का समग्र समाधान।
            </p>
          </div>
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "सस्ती पहुँच",
              "समुदाय से जुड़ाव",
              "सरलीकृत पोर्टफोलियो प्रबंधन",
              "क्लाउड स्टोरेज समाधान",
              "आपकी उंगलियों पर अनुकूलन",
              "एसईओ-ऑप्टिमाइज्ड",
              "व्यापक सुरक्षा और आसान प्रमाणीकरण",
              "निरंतर सहायता",
              "नवीन AI सुविधाएँ",
              "एकीकृत व्यापार उपकरण",
              "प्रतिक्रियाशील डिजाइन",
              "ओपन ग्राफ़ के साथ सुधारित साझाकरण",
              "सीधा लीड जनरेशन",
              "सीधी पहुँच दर्शन",
              "आधुनिक QR कोड शेयरिंग",
              "निरंतर नवाचार",
            ].map((feature, index) => (
              <li key={index} className="mt-3 flex items-center">
                <span className="h-6 w-6 rounded-full flex items-center justify-center bg-green-500 text-white mr-4">
                  {index + 1}
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default YourFolioBenefitsHindi;
