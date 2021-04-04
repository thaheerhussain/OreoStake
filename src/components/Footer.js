import React from "react";

export default () => {
  return (
    <div className="py-8 footer-bg">
      <footer className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div>
            <a
              href="https://whitex.tech/partner/oreo"
              className="logo flex flex-row items-center"
            >
              <img
                src="/images/full-logo-footer.png"
                width="220"
                className="cursor-pointer"
                alt="Oreo"
              />
            </a>
            <div className="uppercase text-white text-md mb-3 mt-4 text-left">
              Follow Us
            </div>
            <div className="flex flex-row items-center ">
              <a
                href="https://instagram.com/lead_wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-instagram.svg" alt="" width="20" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="#" alt="" width="20" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-twitter.svg" alt="" width="20" />
              </a>
              <a
                href="https://www.reddit.com/r/LeadWallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-reddit.svg" alt="" width="20" />
              </a>
              <a
                href="https://github.com/leadwallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-github.svg" alt="" width="20" />
              </a>
              <a
                href="https://medium.com/@LeadWallet"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-medium.svg" alt="" width="20" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-telegram.svg" alt="" width="20" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <img src="/images/sm-discord.svg" alt="" width="20" />
              </a>
            </div>
          </div>
          {/* <div className="text-white leading-7 text-xs cursor-pointer">
            <div className="font-Montserrat-ExtraBold uppercase"></div>
            <div>Business Console</div>
            <div></div>
            <div>Crypto Wallets</div>
            <div>Oreo Pride</div>
          </div> */}
          <div className="text-white leading-7 text-xs cursor-pointer flex flex-col">
            <a
              href="#"
              className="font-Montserrat-ExtraBold uppercase"
            >
              
            </a>
            {/* <div></div> */}
            <a href="#"></a>
            <a href="#"></a>
            {/* <div>Ecosystem</div> */}
            <a href="#"></a>
          </div>
          {/* <div className="text-white leading-7 text-xs cursor-pointer">
            <div className="font-Montserrat-ExtraBold uppercase">Solutions</div>
            <div>Grow Your Business with our Monetization</div>
            <div>Technology</div>
            <div>The PSP Solution</div>
            <div>Use Your Cryptocurrency</div>
          </div> */}
          <div className="text-white leading-7 text-xs cursor-pointer flex flex-col">
            <div className="font-Montserrat-ExtraBold uppercase">
              Documentation
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              
            </a>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 text-white">
        <div fluid>
          &copy; {new Date().getFullYear()} : <a href="#">  </a>
        </div>
      </div>
      </footer>
    </div>
  );
};
