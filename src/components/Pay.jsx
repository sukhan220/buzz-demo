// src/components/FooterSection.jsx
import React from "react";
import bk from "../assets/bKash.png";
import nagod from "../assets/nagod.png";
import rocket from "../assets/rocket.png";
import surecash from "../assets/surecash.png";
import usdt from "../assets/usdt.png";
import bitcoin from "../assets/bit.png";
import ok from "../assets/okWallet.png";
import bank from "../assets/bankDep.png";
import upay from "../assets/upay.png";
import twitter from "../assets/twitter.png";
import cursor from "../assets/cursor.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

const PaymentSection = () => {
    return (
        <div className="bg-black text-white py-12">
            <div className="max-w-screen-xl mx-auto">
              
                {/* Payment Methods */}
                <div className="m-8">
                    <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                    <div className="flex flex-wrap space-x-4">
                        <img
                            src={bk}
                            alt="bKash"
                            className="icon"
                        />
                        <img
                            src={nagod}
                            alt="nagod"
                            className="icon"
                        />
                        <img
                            src={rocket}
                            alt="rocket"
                            className="icon"
                        />
                        <img
                            src={bank}
                            alt="Bank Deposit"
                            className="icon"
                        />
                         <img
                            src={upay}
                            alt="Upay"
                            className="icon"
                        />
                        
                        <img
                            src={ok}
                            alt="OK Wallet"
                            className="icon"
                        />
                        <img
                            src={surecash}
                            alt="SureCash"
                            className="icon"
                        />

                        <img
                            src={usdt}
                            alt="USDT"
                            className="icon"
                        />
                        <img
                            src={bitcoin}
                            alt="Bitcoin"
                            className="icon"
                        />
                    </div>
                </div>

                {/* Community Websites */}
                <div className="m-8">
                    <h3 className="text-lg font-semibold mb-4">Community Websites</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook"
                                className="icon"
                            />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={instagram}
                                alt="Instagram"
                                className="icon"
                            />
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={cursor}
                                alt="Pinterest"
                                className="icon"
                            />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={youtube}
                                alt="YouTube"
                                className="icon"
                            />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src={twitter}
                                alt="Twitter"
                                className="icon"
                            />
                        </a>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default PaymentSection;
