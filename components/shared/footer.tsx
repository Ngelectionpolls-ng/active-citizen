import { bottomLinks, footerLinks, socialLinks } from "@/utils/constants";
import { Icons } from "./icons";

const Footer = () => {

  return (
    <footer className="bg-[#154029B2] text-white py-10">
      <div className="section-container">
        {/* Top Section */}
        <div className="flex justify-center  relative items-center   py-6">
          <h2 className="text-xl  font-bold bg-[#154029B2] z-50 text-white">
            Active <span className="text-white">Citizens</span>{" "}
            <span className="text-">Movement™</span>
          </h2>
          <div className="w-full absolute z-10  bg-white h-[2px]">

          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
<div className="py-4 flex sm:flex-row flex-col space-y-3 justify-between ">
    <div className="w-fit rounded-full">
        <Icons.logo className="size-12 " />
    </div>
<div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="bg-white w-fit h-fit text-black p-2 rounded-full">
                <social.icon size={10} />
              </a>
            ))}
          </div>
</div>
        {/* Bottom Section */}
        <div className="border-t border-white pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-bold">ARM © 2025 - All rights reserved</p>

          <ul className="flex space-x-4 text-sm mt-4 md:mt-0">
            {bottomLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
