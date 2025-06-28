// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      // Navbar
      "KiranaJet": "KiranaJet",
      "How It Works": "How It Works",
      "Features": "Features",
      "Reviews": "Reviews",
      "Light Mode": "Light Mode",
      "Dark Mode": "Dark Mode",

      // Hero Section
      "main_tagline_part1": "राशन का सामान खत्म हो गया?",
      "main_tagline_part2": "Groceries Delivered in 20 Minutes!",
      "sub_tagline": "🚀 FREE Delivery | No Minimum Order Criteria | WhatsApp Ordering",
      "location_tagline": "Hodal, ab ghar baithe paayein apna saara rashan!",
      "Order Now on WhatsApp": "Order Now on WhatsApp",
      "whatsapp_instruction": "बस अपना सामान WhatsApp करें!",

      // How It Works
      "How It Works Title": "How It Works",
      "How It Works Subtitle": "Tired of long queues and heavy bags? KiranaJet makes grocery shopping easy. No app needed, just WhatsApp!",
      "Make Your List Title": "Make Your List",
      "Make Your List Desc": "Write down all the groceries you need, big or small. Even a ₹10 item, we deliver!",
      "WhatsApp Us Title": "WhatsApp Us",
      "WhatsApp Us Desc": "Send your list to 9588508988. Our friendly team is ready to assist you!",
      "Get Delivery Title": "Get Delivery",
      "Get Delivery Desc": "Fresh, quality sealed products delivered to your doorstep in just 20 minutes!",

      // Features
      "Why Choose KiranaJet Title": "Why Choose KiranaJet?",
      "Why Choose KiranaJet Subtitle": "Experience convenience and reliability like never before. Here's why Hodal trusts us:",
      "Local Stores, Trusted Quality Title": "Local Stores, Trusted Quality",
      "Local Stores, Trusted Quality Desc": "We source from your favorite shops, ensuring local produce and trusted quality every time.",
      "Super Fast Delivery Title": "Super Fast Delivery",
      "Super Fast Delivery Desc": "No long waits! Get your essentials delivered to your door in a flash – typically within 20 minutes.",
      "No Hidden Charges Title": "No Hidden Charges",
      "No Hidden Charges Desc": "Enjoy Free Delivery with No Minimum Order! What you see is what you pay.",
      "Easy WhatsApp Ordering Title": "Easy WhatsApp Ordering",
      "Easy WhatsApp Ordering Desc": "Forget complex apps. Simply send your list on WhatsApp, and we'll handle the rest!",
      "Wide Product Range Title": "Wide Product Range",
      "Wide Product Range Desc": "From daily essentials to special items, we've got your kitchen and home needs covered.",
      "Quality Assurance Title": "Quality Assurance",
      "Quality Assurance Desc": "We hand-pick and deliver only fresh, authentic, and sealed products directly from stores.",
      "Friendly & Quick Support Title": "Friendly & Quick Support",
      "Friendly & Quick Support Desc": "Got a query or a special request? Our team is always ready to assist you promptly via WhatsApp.",
      "Local Hodal Service Title": "Local Hodal Service",
      "Local Hodal Service Desc": "Proudly serving the Hodal community, understanding your unique needs.",

      // Testimonials
      "What Our Customers Say Title": "What Our Customers Say",
      "What Our Customers Say Subtitle": "Hear it from our happy customers in Hodal!",
      "Testimonial 1 Text": "Ordered just a packet of biscuits, and they delivered in 15 mins! Unbelievable service!",
      "Testimonial 1 Author": "Rahul, Hodal",
      "Testimonial 2 Text": "No need to carry heavy bags anymore. KiranaJet is a lifesaver!",
      "Testimonial 2 Author": "Priya, Hodal",
      "Testimonial 3 Text": "The convenience of WhatsApp ordering is a game-changer. My go-to for urgent needs!",
      "Testimonial 3 Author": "Amit, Hodal",

      // CTA Section
      "Limited Time Offer!": "Limited Time Offer!",
      "Free Chocolate Offer": "🎉 First 50 Orders Get a Free Chocolate! 🍫",
      "cta_subtext": "Don't wait, make grocery shopping easy.",
      "Hurry! Order Now": "Hurry! Order Now",

      // Footer
      "Currently serving": "Currently serving",
      "More locations coming soon!": "More locations coming soon!",
      "KiranaJet Slogan": "KiranaJet – When Your Local Store Comes to You! 🏡🛒",
      "All rights reserved": "All rights reserved",
    }
  },

  hi: {
    translation: {
      // Navbar
      "KiranaJet": "किरानाजेट",
      "How It Works": "यह कैसे काम करता है",
      "Features": "विशेषताएं",
      "Reviews": "समीक्षाएं",
      "Light Mode": "लाइट मोड",
      "Dark Mode": "डार्क मोड",

      // Hero Section

      "main_tagline_part1": "खरीदारी को फिर से परिभाषित करें किराना जेट के साथ आनंद",
      "main_tagline_part2": "ग्रोसरी 20 मिनट में डिलीवर करें!",
      "sub_tagline": "🚀 मुफ़्त डिलीवरी | कोई न्यूनतम ऑर्डर नहीं | व्हाट्सएप ऑर्डरिंग",
      "location_tagline": "होडल, अब घर बैठे पाएं अपना सारा राशन!",
      "Order Now on WhatsApp": "व्हाट्सएप पर अभी ऑर्डर करें",
      "whatsapp_instruction": "बस अपना सामान व्हाट्सएप करें!",

      // How It Works
      "How It Works Title": "यह कैसे काम करता है",
      "How It Works Subtitle": "लंबी कतारों और भारी बैग से थक गए हैं? किरानाजेट ग्रोसरी शॉपिंग को आसान बनाता है। किसी ऐप की जरूरत नहीं, बस व्हाट्सएप!",
      "Make Your List Title": "अपनी सूची बनाएं",
      "Make Your List Desc": "आपको जितनी भी ग्रोसरी चाहिए, चाहे छोटी हो या बड़ी, लिख लें। ₹10 की चीज़ भी, हम डिलीवर करते हैं!",
      "WhatsApp Us Title": "हमें व्हाट्सएप करें",
      "WhatsApp Us Desc": "अपनी सूची 9588508988 पर भेजें। हमारी टीम आपकी सहायता के लिए तैयार है!",
      "Get Delivery Title": "डिलीवरी पाएं",
      "Get Delivery Desc": "ताजा, गुणवत्तापूर्ण सील किए गए उत्पाद केवल 20 मिनट में आपके दरवाजे पर डिलीवर किए जाते हैं!",

      // Features
      "Why Choose KiranaJet Title": "किरानाजेट क्यों चुनें?",
      "Why Choose KiranaJet Subtitle": "सुविधा और विश्वसनीयता का अनुभव करें जैसा पहले कभी नहीं हुआ। यही कारण है कि होडल हम पर भरोसा करता है:",
      "Local Stores, Trusted Quality Title": "स्थानीय स्टोर, विश्वसनीय गुणवत्ता",
      "Local Stores, Trusted Quality Desc": "हम आपकी पसंदीदा दुकानों से स्रोत करते हैं, हर बार स्थानीय उत्पाद और विश्वसनीय गुणवत्ता सुनिश्चित करते हैं।",
      "Super Fast Delivery Title": "सुपर फास्ट डिलीवरी",
      "Super Fast Delivery Desc": "कोई लंबा इंतजार नहीं! अपनी जरूरत की चीजें तुरंत अपने दरवाजे पर पाएं - आमतौर पर 20 मिनट के भीतर।",
      "No Hidden Charges Title": "कोई छिपा हुआ शुल्क नहीं",
      "No Hidden Charges Desc": "कोई न्यूनतम ऑर्डर नहीं के साथ मुफ्त डिलीवरी का आनंद लें! जो आप देखते हैं वही आप भुगतान करते हैं।",
      "Easy WhatsApp Ordering Title": "आसान व्हाट्सएप ऑर्डरिंग",
      "Easy WhatsApp Ordering Desc": "जटिल ऐप्स भूल जाएं। बस अपनी सूची व्हाट्सएप पर भेजें, और हम बाकी सब संभाल लेंगे!",
      "Wide Product Range Title": "उत्पादों की विस्तृत श्रृंखला",
      "Wide Product Range Desc": "दैनिक आवश्यक वस्तुओं से लेकर विशेष वस्तुओं तक, हमने आपकी रसोई और घर की जरूरतों को कवर किया है।",
      "Quality Assurance Title": "गुणवत्ता आश्वासन",
      "Quality Assurance Desc": "हम सीधे दुकानों से केवल ताजा, प्रामाणिक और सील किए गए उत्पादों का चयन और वितरण करते हैं।",
      "Friendly & Quick Support Title": "मैत्रीपूर्ण और त्वरित सहायता",
      "Friendly & Quick Support Desc": "कोई प्रश्न या विशेष अनुरोध है? हमारी टीम व्हाट्सएप के माध्यम से तुरंत आपकी सहायता के लिए हमेशा तैयार रहती है।",
      "Local Hodal Service Title": "स्थानीय होडल सेवा",
      "Local Hodal Service Desc": "होडल समुदाय की गर्व से सेवा कर रहे हैं, आपकी अनूठी जरूरतों को समझते हुए।",

      // Testimonials
      "What Our Customers Say Title": "हमारे ग्राहक क्या कहते हैं",
      "What Our Customers Say Subtitle": "होडल में हमारे खुश ग्राहकों से सुनें!",
      "Testimonial 1 Text": "सिर्फ एक बिस्कुट का पैकेट ऑर्डर किया, और उन्होंने 15 मिनट में डिलीवर कर दिया! अविश्वसनीय सेवा!",
      "Testimonial 1 Author": "राहुल, होडल",
      "Testimonial 2 Text": "अब भारी बैग ले जाने की जरूरत नहीं। किरानाजेट एक जीवन रक्षक है!",
      "Testimonial 2 Author": "प्रिया, होडल",
      "Testimonial 3 Text": "व्हाट्सएप ऑर्डरिंग की सुविधा एक गेम-चेंजर है। मेरी तत्काल जरूरतों के लिए मेरी पहली पसंद!",
      "Testimonial 3 Author": "अमित, होडल",



      // Footer
      "Currently serving": "वर्तमान में सेवा दे रहा है",
      "More locations coming soon!": "और स्थान जल्द ही आ रहे हैं!",
      "KiranaJet Slogan": "किरानाजेट – जब आपकी स्थानीय दुकान आपके पास आती है! 🏡🛒",
      "All rights reserved": "सभी अधिकार सुरक्षित",
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // fallback language if translation not found
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;