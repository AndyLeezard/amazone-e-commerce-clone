import React from "react";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Tamil",
  "Hindi",
  "Chinese",
  "Russian",
  "Japanese",
  "Arabic",
];
const currency = ["$ - USD", "₹ - INR", "£ - GBP", "€ - EUR", "¥ - JPY"];
const footerLinks = [
  {
    title: "Get to Know Us",
    list: ["About Àmazone", "Connect with Us", "Amazon Cares", "Gift a Smile"],
  },
  {
    title: "Make Money with Us",
    list: [
      "Sell products on Àmazone",
      "Sell apps on Àmazone",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host an Amazon Hub",
    ],
  },
  {
    title: "Àmazone Payment",
    list: [
      "Àmazone Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Àmazone Currency Converter",
    ],
  },
  {
    title: "Let Us Help You",
    list: [
      "Àmazone and COVID-19",
      "Shipping Rates & Policies",
      "Returns & Replacements",
      "Manage Your Devices",
      "Àmazone Assistant",
    ],
  },
];

function Footer() {
  return (
    <div className="flex flex-col flex-nowrap w-full mt-auto bg-footerbg border-t-2 border-solid border-gray-200 text-center">
        <a href="#top"><div className="flex w-full h-12 bg-footerbutton justify-center place-items-center hover:bg-footerbutton_focus">
          <p className="font-semibold text-white text-sm">Back to top</p>
        </div></a>
      <div className="mx-auto">
          <p class="font-bold text-red-500 mt-4">Disclaimer: <span class="font-semibold text-gray-50">This is not the official Amazon Store.</span></p>
          <p class="font-semibold text-gray-50">It is a redesign, built purely for educational purposes.</p>
          <p class="font-semibold text-gray-50">For more details, please read the <a href="/conditions"><span class="text-purple-400">conditions of use</span></a>.</p>
        <div className="hidden sm:flex p-12 items-start justify-between">
          {footerLinks.map((link) => (
            <div className="mr-12 text-left">
              <h6 class="text-white font-bold mb-3">{link.title}</h6>
              <ul>
                {link.list.map((item) => (
                  <li class="text-gray-200 subpixel-antialiased text-sm my-1 hover:underline"><a href="/under_construction">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div class="flex justify-center mt-4" >
          <a href="#top"><img className="object-contain mx-2" width={150} height={40} src='/logo_side6.svg' alt="logo"/></a>
        </div>
        <p class="font-semibold text-white text-sm my-4">© 2021 | Developed by Andy Lee</p>
      </div>
    </div>
  );
}
export default Footer;

/*
import DropDown from "./DropDown";
<span className="footer__dropDownSpan">
            <DropDown
              className="footer__dropDown footer__langDropDown"
              items={languages}
              defaultItem={languages[0]}
            />
            <DropDown
              className="footer__dropDown footer__currDropDown"
              items={currency}
              defaultItem={currency[0]}
            />
          </span>
 */