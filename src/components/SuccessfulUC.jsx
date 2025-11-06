import React, { useState, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';
import '../App.css'
import { Oval } from 'react-loader-spinner'; // Import the TailSpin loader
import { Link } from 'react-router-dom';
import axios from 'axios';
import BGImage1 from "../assets/pubg-images/card-img-bg.191385920e2e85e49db4.png"
import BG_UC_Image1 from "../assets/pubg-images/1599546007887MVeNUtB6.png"
import BG_UC_Image2 from "../assets/pubg-images/1599546030876PIvqwGaa.png"

import UC_Image from "../assets/pubg-images/download-uc-removebg-preview.png"

import BG_UC_Image3 from "../assets/pubg-images/1599546041426W8hmErMS.png"
import BG_UC_Image4 from "../assets/pubg-images/1599546052747L5gSu7VB.png"
import BG_UC_Image5 from "../assets/pubg-images/1599546061912PLgMlY23.png"
import BG_UC_Image6 from "../assets/pubg-images/1599546071746KqkIhrzG.png"

import VisaCard from "../assets/pubg-images/visa-logo-png-transparent-removebg-preview.png"
import VisaGolden from "../assets/pubg-images/golden-visa-logo.png"
import MasterCard from "../assets/pubg-images/Mastercard-Logo.wine.png"
import USA_Logo from '../assets/pubg-images/Flag_of_the_United_States.png'
import UCImage1 from "../assets/pubg-images/uc-small.bc30c95b.png"
import Globe from "../assets/pubg-images/globe-image.png"
import UCImage from "../assets/pubg-images/uc-small.bc30c95b.png"
import TickImage from "../assets/pubg-images/tick-mark-icon.webp"
import PayPak from '../assets/pubg-images/Paypak-logo.png'
import Clock from "../assets/pubg-images/black-clock.png"
import { FaBasketball, FaCartPlus, FaCartShopping, FaCreditCard, FaFile, FaGear } from 'react-icons/fa6';
import { FaSave } from 'react-icons/fa';


const initialPackages = [
  { id: 1, package_name: "60 + 30 UC", playerIdd: 1236249952, card_type: "Master", price_usd: 0.99, uc_amount_pkr: 20, uc_amount: "1000 UC", bonus_uc: 30, total_uc: 60, picURL: UC_Image, duration: "" },
  { id: 2, package_name: "300 + 25 UC", playerIdd: 2136249842, card_type: "Visa", price_usd: 4.99, uc_amount_pkr: 150, uc_amount: "150k UC", bonus_uc: 25, total_uc: 325, picURL: UC_Image, duration: "" },
  { id: 3, package_name: "600 + 60 UC", playerIdd: 3216249732, card_type: "Visa Golden", price_usd: 9.99, uc_amount_pkr: 250, uc_amount: "300k UC", bonus_uc: 60, total_uc: 660, picURL: UC_Image, duration: "" },
  { id: 4, package_name: "1500 + 300 UC", playerIdd: 1326249622, card_type: "Visa Golden", price_usd: 24.99, uc_amount_pkr: 400, uc_amount: "500k UC", bonus_uc: 300, total_uc: 1800, picURL: UC_Image, duration: "" },
  { id: 5, package_name: "3000 + 850 UC", playerIdd: 2316249512, card_type: "Visa", price_usd: 49.99, uc_amount_pkr: 700, uc_amount: "800k UC", bonus_uc: 850, total_uc: 3850, picURL: UC_Image, duration: "" },
  // { id: 6, package_name: "6000 + 2100 UC", playerIdd: 1336249402, card_type: "Master", price_usd: 99.99, uc_amount_pkr: 60000, uc_amount: "800k UC", bonus_uc: 2100, total_uc: 8100, picURL: UC_Image, duration: "" },
  // { id: 7, package_name: "7000 + 2500 UC", playerIdd: 1216249362, card_type: "Visa Golden", price_usd: 130.99, uc_amount_pkr: 100000, uc_amount: "100k", bonus_uc: 2500, total_uc: 9500, picURL: UC_Image, duration: "" },
  // { id: 8, package_name: "8000 + 3100 UC", playerIdd: 2126249272, card_type: "Master", price_usd: 150.99, uc_amount_pkr: 160000, uc_amount: "160k", bonus_uc: 3100, total_uc: 11100, picURL: UC_Image, duration: "" },
  // { id: 9, package_name: "9000 + 3600 UC", playerIdd: 3136249182, card_type: "Visa", price_usd: 175.99, uc_amount_pkr: 200000, uc_amount: "200k", bonus_uc: 3600, total_uc: 12600, picURL: UC_Image, duration: "" },
  // { id: 10, package_name: "10000 + 4200 UC", playerIdd: 3316249092, card_type: "Visa Golden", price_usd: 200.99, uc_amount_pkr: 300000, uc_amount: "300k", bonus_uc: 4200, total_uc: 14200, picURL: UC_Image, duration: "" },
  // { id: 11, package_name: "11000 + 4500 UC", playerIdd: 1136241355, card_type: "Master", price_usd: 220.99, uc_amount_pkr: 400000, uc_amount: "400k", bonus_uc: 4500, total_uc: 15500, picURL: UC_Image, duration: "" },
  // { id: 12, package_name: "12000 + 4800 UC", playerIdd: 2116249142, card_type: "Visa", price_usd: 250.99, uc_amount_pkr: 500000, uc_amount: "500k", bonus_uc: 4800, total_uc: 16800, picURL: UC_Image, duration: "" },
  // { id: 12, package_name: "12000 + 4800 UC", playerIdd: 2116249142, card_type: "Visa", price_usd: 250.99, uc_amount_pkr: 600000, uc_amount: "600k", bonus_uc: 4800, total_uc: 16800, picURL: UC_Image, duration: "" },
  // { id: 12, package_name: "12000 + 4800 UC", playerIdd: 2116249142, card_type: "Visa", price_usd: 250.99, uc_amount_pkr: 700000, uc_amount: "Unlimited", bonus_uc: 4800, total_uc: 16800, picURL: UC_Image, duration: "8" },
  // { id: 12, package_name: "12000 + 4800 UC", playerIdd: 2116249142, card_type: "Visa", price_usd: 250.99, uc_amount_pkr: 800000, uc_amount: "Unlimited", bonus_uc: 4800, total_uc: 16800, picURL: UC_Image, duration: "3" }
];
// const initialPackages = [
//   { id: 1, package_name: "60 + 30 UC", playerIdd: 1236249952, card_type: "Master", price_usd: 0.99, uc_amount: "10k", bonus_uc: 30, total_uc: 60, picURL: BG_UC_Image1, duration: "" },
//   { id: 2, package_name: "300 + 25 UC", playerIdd: 2136249842, card_type: "Visa", price_usd: 4.99, uc_amount: "15k", bonus_uc: 25, total_uc: 325, picURL: BG_UC_Image2, duration: "" },
//   { id: 3, package_name: "600 + 60 UC", playerIdd: 3216249732, card_type: "Visa Golden", price_usd: 9.99, uc_amount: "20k", bonus_uc: 60, total_uc: 660, picURL: BG_UC_Image1, duration: "" },
//   { id: 4, package_name: "1500 + 300 UC", playerIdd: 1326249622, card_type: "Visa Golden", price_usd: 24.99, uc_amount: "30k", bonus_uc: 300, total_uc: 1800, picURL: BG_UC_Image3, duration: "" },
//   { id: 5, package_name: "3000 + 850 UC", playerIdd: 2316249512, card_type: "Visa", price_usd: 49.99, uc_amount: "40k", bonus_uc: 850, total_uc: 3850, picURL: BG_UC_Image4, duration: "" },
//   { id: 6, package_name: "6000 + 2100 UC", playerIdd: 1336249402, card_type: "Master", price_usd: 99.99, uc_amount: "60k", bonus_uc: 2100, total_uc: 8100, picURL: BG_UC_Image5, duration: "" },
//   { id: 7, package_name: "7000 + 2500 UC", playerIdd: 1216249362, card_type: "Visa Golden", price_usd: 130.99, uc_amount: "100k", bonus_uc: 2500, total_uc: 9500, picURL: BG_UC_Image6, duration: "" },
//   { id: 8, package_name: "8000 + 3100 UC", playerIdd: 2126249272, card_type: "Master", price_usd: 150.99, uc_amount: "160k", bonus_uc: 3100, total_uc: 11100, picURL: BG_UC_Image6, duration: "" },
//   { id: 9, package_name: "9000 + 3600 UC", playerIdd: 3136249182, card_type: "Visa", price_usd: 175.99, uc_amount: "200k", bonus_uc: 3600, total_uc: 12600, picURL: BG_UC_Image6, duration: "" },
//   { id: 10, package_name: "10000 + 4200 UC", playerIdd: 3316249092, card_type: "Visa Golden", price_usd: 200.99, uc_amount: "300k", bonus_uc: 4200, total_uc: 14200, picURL: BG_UC_Image6, duration: "" },
//   { id: 11, package_name: "11000 + 4500 UC", playerIdd: 1136241355, card_type: "Master", price_usd: 220.99, uc_amount: "400k", bonus_uc: 4500, total_uc: 15500, picURL: BG_UC_Image6, duration: "" },
//   { id: 12, package_name: "12000 + 4800 UC", playerIdd: 2116249142, card_type: "Visa", price_usd: 250.99, uc_amount: "500k", bonus_uc: 4800, total_uc: 16800, picURL: BG_UC_Image6, duration: "" },
//   { id: 12, package_name: "12000 + 4800 UC", playerIdd: 2116249142, card_type: "Visa", price_usd: 250.99, uc_amount: "30", bonus_uc: 4800, total_uc: 16800, picURL: BG_UC_Image6, duration: "" },
//   { id: 12, package_name: "12000 + 4800 UC", playerIdd: 2116249142, card_type: "Visa", price_usd: 250.99, uc_amount: "Unlimited", bonus_uc: 4800, total_uc: 16800, picURL: BG_UC_Image6, duration: "8"},
//   { id: 12, package_name: "12000 + 4800 UC", playerIdd: 2116249142, card_type: "Visa", price_usd: 250.99, uc_amount: "Unlimited", bonus_uc: 4800, total_uc: 16800, picURL: BG_UC_Image6, duration: "3"}
// ];

const cards = [
  { id: 1, img: VisaCard, name: "Visa", number: "9628", balance: "$90610.21" },
  { id: 2, img: MasterCard, name: "Master", number: "1262", balance: "$28000.89" },
  { id: 3, img: VisaGolden, name: "Golden", number: "0089", balance: "$85000.12" },
  { id: 4, img: USA_Logo, name: "USA", number: "5317", balance: "$725821.21" },
  { id: 5, img: PayPak, name: "Paypak", number: "5317", balance: "$467433.21" }
];


function SuccessfulUC() {
  const [packages, setPackages] = useState(initialPackages);
  const [searchVal, setSearchVal] = useState("")
  const [searchId, setSearchId] = useState('');
  const [filteredPackages, setFilteredPackages] = useState(initialPackages);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);

  // Loadings handling
  const [showLoader, setShowLoader] = useState(true);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [modalContentVisible, setModalContentVisible] = useState(false);

  const [exchangeRate, setExchangeRate] = useState(null);
  const [username, setUsername] = useState(localStorage.getItem('userName') || '')
  const [visibilityDiv, setVisibilityDiv] = useState(false)

  // Cards Update
  const [selectedCard, setSelectedCard] = useState(cards[0]); // Default to first card
  const [isChecked, setIsChecked] = useState(false);
  const [dateTime, setDateTime] = useState("");

  const UserRef = useRef()


  useEffect(() => {
    // Update date and time on selecting a card
    const now = new Date();
    setDateTime(now.toLocaleString());
  }, [selectedCard]);

  useEffect(() => {
    // Fetch the latest PKR to USD rate
    fetch("https://api.exchangerate-api.com/v4/latest/PKR")
      .then((response) => response.json())
      .then((data) => setExchangeRate(data.rates.USD))
      .catch((error) => console.error("Error fetching exchange rate:", error));
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      setShowLoader(true);
      setShowContinueButton(false);
      setModalContentVisible(false);
      const timer = setTimeout(() => {
        setModalContentVisible(true);
        setShowLoader(false);
        setShowContinueButton(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  const handleContinue = () => {
    setShowContinueButton(false);
    setModalContentVisible(true);
    setShowLoader(false);
    setIsLoading(false)
    setPaymentStatus(false)
  };

  useEffect(() => {
    setFilteredPackages(
      packages.filter(pkg => pkg.playerIdd.toString().includes(searchId))
    );
  }, [searchId, packages]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const exchangeRate = await response.data.rates.PKR;
        updatePackagesWithPKR(exchangeRate);

      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);

  const updatePackagesWithPKR = (exchangeRate) => {
    const updatedPackages = packages.map(pkg => {
      const pricePkr = (pkg.price_usd * exchangeRate).toFixed(2);
      return { ...pkg, price_pkr: pricePkr };
    });

    setPackages(updatedPackages);
  };



  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const handleSearchChangeBtn = () => {

    if (searchVal == "" || username == "") {
      alert("Enter Valid the ID 🆔 and Enter Username 👤!")
    } else {
      setSearchId(searchVal);
    }

  }

  const handlePackageClick = (pkg) => {
    if (searchVal == "") {
      alert("Enter Valid the ID!")
    }
    else {
      setSelectedPackage(pkg);
      setIsModalOpen(true);
      setPaymentStatus(false)

    }
  };




  const handlePaymentSubmit = () => {

    setIsLoading(true);
    setPaymentStatus(false)
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus(true)
    }, 5000);
  };

  const handleback = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
    setIsLoading(false);
    setPaymentStatus(false)
    setSearchVal("")

  }

  const closeAll = () => {
    setIsModalOpen(false)
    setPaymentStatus(false)
    setIsLoading(false)
    setSearchVal("")
  }

  const ShowDiv = () => {
    setVisibilityDiv(true)

  }

  const SaveUsername = () => {
    let inpValue = UserRef.current.value
    console.log("inpValue: ", inpValue);
    setUsername(inpValue)
    localStorage.setItem('userName', inpValue)
    alert("Username is saved. 🎉")
    setVisibilityDiv(false)
  }

  return (
    <div className="h-auto bg-[#ffD800] min-h-screen p-2 flex justify-around items-center">

      <div className="h-[auto] w-[1000px] setting-main flex items-center flex-col justify-center mx-auto my-5">
        <div className="h-[auto] w-[1000px] setting-main mx-auto p-4">
          <h1 class="text-xl font-medium mt-2 text-white flex bg-[#141B3D] py-2 px-3 w-[50%]"> <img className='h-[30px] w-[50px]' src={USA_Logo} alt="Image Verify" />  <span className='ml-3'>(USA:5317) Connected: Balance $725821.21</span>
          </h1>
        </div>
        <h1 class="text-3xl font-bold text-center text-black mb-1 text-shadow">Dark Server Carding UC</h1>

        <h1 className="text-2xl font-semibold text-center mb-2 text-black">Midasbuy Connected Successfully</h1>

        <div className='w-full m-auto flex items-center justify-center mb-2 gap-5'>

          <input
            type="text"
            placeholder="Search by ID"
            onChange={handleSearchChange}
            value={searchVal}
            className="w-[50%] bg-white text-gray-800 border-none outline-none border-gray-300 rounded p-2 "
          />
          <button
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
            onClick={handleSearchChangeBtn}
          >
            Search
          </button>
        </div>

        <div className="card-parent h-auto w-[100%] flex items-center flex-wrap justify-start gap-5 mt-5">

          {filteredPackages.map(pkg => (
            <div key={pkg.id} className='card bg-[#FFF700] shadow-lg rounded-lg overflow-hidden w-[23%]'>
              <div className="BGImage h-[150px] bg-cover relative bg-center flex justify-center items-center">
                {/* <img src={BGImage1} alt="BlueImage" /> */}
                <img src={pkg.picURL} alt="UCImage" className='absolute h-full w-full scale-75' />
              </div>
              <div className="card-content ">
                <div className="uc-package w-[90%] flex items-center justify-center py-5">
                  {/* <div className="uc-logo w-16 h-16 flex items-center justify-center rounded-full">
                    <img src={UCImage} alt="Logo" className="w-12 h-12" />
                  </div> */}
                  <div className="uc-package-value text-center flex flex-col items-center justify-center">
                    <h1 className="package-text text-3xl font-bold text-black"> <p className='font-bold'>PUBG UC -</p> <p>{pkg.uc_amount} </p>   </h1>
                    <h1 className='text-2xl font-bold text-black'><p>
                      {/* UC Amount (USD):{" "} */}
                      {/* {exchangeRate
                        ? `$${(pkg.uc_amount_pkr * exchangeRate).toFixed(2)}`
                        : "Loading..."} */}
                        ${pkg.uc_amount_pkr}
                    </p></h1>
                    <button onClick={() => handlePackageClick(pkg)} className="flex items-center my-5 mx-auto gap-2 px-4 py-2 text-white bg-black rounded-lg shadow-md 
                    hover:bg-gray-800 transition duration-200 ease-in-out">
                      <span className="p-2 bg-gray-900 text-white rounded 
                    transition duration-200 ease-in-out">
                        <FaCartPlus />
                      </span>
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={closeAll}
          className="modal flex justify-center items-center shadow-lg"
          overlayClassName="modal-overlay"
        >
          {showLoader ? (
            <div className="loader-container flex items-center flex-col justify-center">
              <Oval
                height={80}
                width={80}
                color="black"
                ariaLabel="loading"
              />
              <h1 className="text-3xl font-bold text-center mt-2 text-balck p-5 text-shadow uppercase">Connecting Main Dark Server</h1>
              <h1 className="text-2xl font-semibold text-center mt-2 text-black p-2 text-shadow">For Carding UC</h1>


            </div>
          ) : (
            showContinueButton ? (
              <div className="loader-container flex items-start flex-col justify-start">
                <h1 className="text-3xl font-bold text-center mt-2 py-5 text-black text-shadow uppercase flex items-center gap-3"><FaCartShopping className='' /> Your Cart </h1>
                <p className='text-xl'>Product: <span className='font-semibold'>PUBG UC - {selectedPackage.uc_amount}</span> </p>
                <p className='text-xl my-3'>Price: ${500.00}</p>
                <button
                  className="continue-button flex items-center gap-3 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300"
                  onClick={handleContinue}
                >
                  <FaCreditCard /> Proceed To Payment
                </button>
              </div>
            ) : (
              modalContentVisible && selectedPackage && (
                <div className="card-model bg-[#FFF700] p-3 w-full">
                  <div className="card-title text-center mb-4">
                    <h1 className="text-3xl font-bold text-black">Carding Cards Payment Method</h1>
                  </div>
                  <div className="card-body grid grid-cols-1 bg-[#FFF700] rounded-lg border-4 border-red-700 p-5 lg:grid-cols-2 gap-6  w-full overflow-y-auto max-h-full">
                    <div className="card-info w-full">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="current-price text-black text-xl font-semibold">Player ID:</h2>
                        <h2 className="price-value text-black">{searchVal} ({username})</h2>
                      </div>
                      <h2 className="text-lg text-black mb-5">Select Carding Payment Channels</h2>

                      {/* Start of Left Side Cards */}
                      {/* start */}
                      {/* <div className="space-y-4">
                        <div className="cards flex items-center justify-between bg-[#ffD800] shadow-lg rounded-md py-2 pe-5 border-2 border-[#FFF700] hover:border-white cursor-pointer">
                          <div className='flex items-center '>

                            <div className="card-image w-16 h-10 mr-4">
                              <img src={VisaCard} alt="visa" className="w-full h-full object-contain" />
                            </div>
                            <div className="card-data">
                              <h2 className="text-black">(Visa:9628) Connected: Balance $90610.21
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div className="cards flex items-center justify-between bg-[#ffD800] shadow-lg rounded-md py-2 pe-5 border-2 border-[#FFF700] hover:border-white cursor-pointer">
                          <div className='flex items-center'>

                            <div className="card-image w-16 h-10 mr-4">
                              <img src={MasterCard} alt="masterCard" className="w-full h-full object-contain rounded-md" />
                            </div>
                            <div className="card-data">
                              <h2 className="text-black">(Master:1262) Connected: Balance  $28000.89</h2>
                            </div>
                          </div>
                        </div>
                        <div className="cards flex items-center justify-between bg-[#ffD800] shadow-lg py-2 rounded-md pe-5 border-2 border-[#FFF700] hover:border-white cursor-pointer">
                          <div className='flex items-center '>
                            <div className="card-image w-16 h-10 mr-4">
                              <img src={VisaGolden} alt="visaGolden" className="w-full h-full object-contain visa-image" />
                            </div>
                            <div className="card-data">
                              <h2 className="text-black">(Golden:0089) Connected: Balance $85000.12</h2>
                            </div>
                          </div>
                        </div>
                        <div className="cards flex items-center justify-between  bg-[#ffD800] shadow-lg py-2 rounded-md pe-5 border-2 border-[#FFF700] hover:border-white cursor-pointer">
                          <div className='flex items-center '>
                            <div className="card-image w-16 h-10 mr-4 pl-2">
                              <img src={USA_Logo} alt="visaGolden" className="w-full h-full object-contain" />
                            </div>
                            <div className="card-data">
                              <h2 className="text-black"> (USA:5317) Connected: Balance $725821.21
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* end */}
                      {/* End of Left Side Cards */}

                      {/* Starting */}
                      <div className="space-y-4 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
                        {cards.map((card) => (
                          <div
                            key={card.id}
                            onClick={() => {
                              setSelectedCard(card);
                              setIsChecked(false);
                            }}
                            className={`cards flex items-center justify-between bg-[#ffD800] shadow-lg rounded-md py-2 pe-5 border-2 
                    ${selectedCard.id === card.id ? "border-white" : "border-[#FFF700]"} cursor-pointer`}
                          >
                            <div className="flex items-center">
                              <div className="card-image w-16 h-16 mr-4 ml-4">
                                <img src={card.img} alt={card.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="card-data">
                                <h2 className="text-black">
                                  ({card.name}:{card.number}) Connected: Balance {card.balance}
                                </h2>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Ending */}

                    </div>

                    {/* Start of Right Side where Card Render */}
                    {/* <div className="payment-submit-part bg-[#ffD800] p-6 rounded-lg shadow-md">
                      <h1 className="text-xl font-semibold text-black mb-4">Purchase Item:</h1>
                      <div className="item-info flex items-center mb-4">
                        <img src={UCImage1} alt="" className="w-16 h-16 mr-4" />
                        <h2 className="uc-amount text-lg text-black">{selectedPackage.uc_amount == "Unlimited" ? selectedPackage.uc_amount + " Timing UC " + `${selectedPackage.duration == "8" ? " For 8:00 hours" : " For 3 days"}` : selectedPackage.uc_amount + " UC"}</h2>

                      </div>
                      <div className="item-info mb-4">
                        <h2 className="price-details text-lg font-semibold text-black mb-2">Price Details:</h2>
                        <div className="prices w-full flex justify-between items-center">
                          <h2 className="current-price text-black">Current Price:</h2>
                          <h2 className="price-value text-black">Card Connected</h2>
                        </div>
                      </div>
                      <h1 className="text-lg font-semibold text-black mb-4">Total: Carding Card Connected</h1>
                      <button className="submit-button w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-300" onClick={handlePaymentSubmit} disabled={isLoading}>
                        UC Send New
                      </button> */}
                    {/* End of Right Side where Card Render */}

                    {/* Starting */}
                    {/* Right Side (Selected Card Details) */}
                    <div className="payment-submit-part bg-[#ffD800] p-6 rounded-lg shadow-md">
                      <h1 className="text-xl font-semibold text-black mb-4 flex gap-3">
                        🏷️ Purchase Item: {selectedPackage.uc_amount} UC
                        <img className='h-9 w-9' src={UCImage} alt="" />
                      </h1>

                      <div className="item-info flex items-center mb-4">
                        <img src={selectedCard.img} alt="" className="w-24 h-16 mr-4" />
                        <h2 className="text-lg text-black">Selected Card: {selectedCard.name}</h2>
                      </div>

                      <div className="item-info mb-4">
                        <h2 className="price-details text-lg font-semibold text-black mb-2">Price Details:</h2>
                        <div className="prices w-full flex justify-between items-center">
                          <h2 className="current-price text-black">Current Price:</h2>
                          <h2 className="price-value text-black">{selectedCard.balance}</h2>
                        </div>
                      </div>

                      <h1 className="text-lg font-semibold text-black mb-4">
                        Total: {selectedCard.name} Card Connected
                      </h1>

                      <p className="text-black mb-2">Date & Time: {dateTime}</p>

                      <div className="flex items-center mb-4">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                          className="h-5 w-5 cursor-pointer mr-2"
                        />
                        <label className="text-black">I confirm this card for payment</label>
                      </div>

                      <button
                        onClick={handlePaymentSubmit}
                        className={`w-full flex justify-center items-center mx-auto my-2 shadow-md gap-2 px-4 py-2 rounded-lg transition duration-300 
                ${isChecked
                            ? "bg-[#FFF700] text-gray-600 cursor-pointer"
                            : "bg-blue-600 text-white hover:bg-blue-700 cursor-not-allowed"
                          }`}
                        disabled={!isChecked}
                      >
                        <FaCreditCard /> Payment with Credit Card
                      </button>
                      {/* Ending */}
                      {
                        <div>
                          {isLoading ? (
                            <div className="box-loader w-full flex justify-center items-center ">
                              <div className="bg-[#ffD800] w-full h-[60vh] rounded-lg p-6 md:w-2/3 lg:w-1/2 xl:w-1/2">
                                <div className="flex flex-col items-center">
                                  <div className="text-center mt-4 rel">
                                    {
                                      paymentStatus ? (
                                        <>
                                          <div className="clock">
                                            <img src={Clock} alt="Clock" className='clock-image' />

                                          </div>
                                          <div className="parent-loader">
                                            <div className="loader1">
                                              <img className='tickImage' src={TickImage} alt="globeImage" />
                                            </div>
                                          </div>
                                          <h2 className="text-2xl font-bold text-black ">{selectedPackage.uc_amount} UC</h2>
                                          <h3 className="text-lg text-black">SENDING SUCCESSFULLY <br /> VIA PUBG ID: {searchVal} </h3>
                                          <Link className='border border-white bg-black inline-block mt-4 px-4 py-2 rounded-lg text-white hover:bg-gray-900 transition duration-300' onClick={handleback} to="/homec">Home</Link>
                                        </>
                                      ) : (
                                        <>
                                          <div className="parent-loader">
                                            <div className="loader">
                                              <img className='globe' src={Globe} alt="globeImage" />
                                              <img className='glob1' src={Globe} alt="globeImage" />
                                            </div>
                                          </div>
                                          <h2 className="text-2xl relative font-bold text-black text-shadow">UC Sending...</h2>
                                          <h3 className="text-xl text-black">Please Wait For Sending UC</h3>
                                        </>
                                      )
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      }
                    </div>
                  </div>
                </div>

              )
            )
          )
          }
        </ReactModal>
      </div >

      {/* Fixed Div Element */}

      <div div className='fixed h-[50px] w-[50px] bottom-16 flex justify-center items-center right-6 bg-[#FFF700] rounded-full shadow-lg' >
        <div onClick={ShowDiv} className="rounded-full p-4 cursor-pointer hover:bg-[#ffff4a] transition-all duration-150">
          <FaGear className='text-2xl' />
        </div>
        <div className={`fixed right-6 p-3 bottom-28 h-64 w-56 bg-[#FFF700] shadow-lg ${visibilityDiv ? 'visible opacity-100' : 'invisible opacity-0'} 
        `}>
          <h1 className='font-bold text-2xl text-shadow'>Toggle Payments</h1>
          <div className='bg-green-500 h-8 w-20 rounded-full mt-3' >
            <div className='bg-white h-8 w-8 rounded-full ml-12'></div>
          </div>
          <div className='mt-5'>
            <h2 className='font-bold text-2xl text-shadow'> Enter Username </h2>
            <input ref={UserRef} type="text" placeholder='Enter Username' className='w-[100%] py-2 ps-2 focus:outline-none border-none rounded-md mt-2' />
          </div>
          <button onClick={SaveUsername} className="flex items-center mx-auto my-5 gap-2 px-4 py-2 text-white bg-black rounded-lg shadow-md 
                    hover:bg-gray-800 transition duration-200 ease-in-out">
            <span className="p-2 bg-gray-900 text-white rounded 
                    transition duration-200 ease-in-out">
              <FaSave />
            </span>
            Save Username
          </button>
        </div>
      </div >

    </div >
  );
}

export default SuccessfulUC;
