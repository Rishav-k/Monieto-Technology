// var listedCompany = [];
// function search(source, name) {
//     var results ;
//     var size =  name.length;
//     source.filter(function(event){
//        if(event.companyName.toLowerCase().slice(0,size) == name.toLowerCase()){
//           console.log(event);
//        };
//     });
//     return results;
// }

var dayReturn = [];

listedCompany = [
    {
     "symbol": "RELIANCE",
     "companyName": "Reliance Industries Limited"
    },
    {
     "symbol": "TCS",
     "companyName": "Tata Consultancy Services Limited"
    },
    {
     "symbol": "HDFCBANK",
     "companyName": "HDFC Bank Limited"
    },
    {
     "symbol": "INFY",
     "companyName": "Infosys Limited"
    },
    {
     "symbol": "ICICIBANK",
     "companyName": "ICICI Bank Limited"
    },
    {
     "symbol": "HINDUNILVR",
     "companyName": "Hindustan Unilever Limited"
    },
    {
     "symbol": "SBIN",
     "companyName": "State Bank of India"
    },
    {
     "symbol": "HDFC",
     "companyName": "Housing Development Finance Corporation Limited"
    },
    {
     "symbol": "BHARTIARTL",
     "companyName": "Bharti Airtel Limited"
    },
    {
     "symbol": "ADANIENT",
     "companyName": "Adani Enterprises Limited"
    },
    {
     "symbol": "LICI",
     "companyName": "Life Insurance Corporation Of India"
    },
    {
     "symbol": "ITC",
     "companyName": "ITC Limited"
    },
    {
     "symbol": "ATGL",
     "companyName": "Adani Total Gas Limited"
    },
    {
     "symbol": "BAJFINANCE",
     "companyName": "Bajaj Finance Limited"
    },
    {
     "symbol": "KOTAKBANK",
     "companyName": "Kotak Mahindra Bank Limited"
    },
    {
     "symbol": "ADANIGREEN",
     "companyName": "Adani Green Energy Limited"
    },
    {
     "symbol": "ASIANPAINT",
     "companyName": "Asian Paints Limited"
    },
    {
     "symbol": "LT",
     "companyName": "Larsen &amp; Toubro Limited"
    },
    {
     "symbol": "ADANITRANS",
     "companyName": "Adani Transmission Limited"
    },
    {
     "symbol": "AXISBANK",
     "companyName": "Axis Bank Limited"
    },
    {
     "symbol": "HCLTECH",
     "companyName": "HCL Technologies Limited"
    },
    {
     "symbol": "DMART",
     "companyName": "Avenue Supermarts Limited"
    },
    {
     "symbol": "MARUTI",
     "companyName": "Maruti Suzuki India Limited"
    },
    {
     "symbol": "BAJAJFINSV",
     "companyName": "Bajaj Finserv Limited"
    },
    {
     "symbol": "SUNPHARMA",
     "companyName": "Sun Pharmaceutical Industries Limited"
    },
    {
     "symbol": "TITAN",
     "companyName": "Titan Company Limited"
    },
    {
     "symbol": "WIPRO",
     "companyName": "Wipro Limited"
    },
    {
     "symbol": "ULTRACEMCO",
     "companyName": "UltraTech Cement Limited"
    },
    {
     "symbol": "JSWSTEEL",
     "companyName": "JSW Steel Limited"
    },
    {
     "symbol": "ONGC",
     "companyName": "Oil &amp; Natural Gas Corporation Limited"
    },
    {
     "symbol": "ADANIPORTS",
     "companyName": "Adani Ports and Special Economic Zone Limited"
    },
    {
     "symbol": "NTPC",
     "companyName": "NTPC Limited"
    },
    {
     "symbol": "M&amp;M",
     "companyName": "Mahindra &amp; Mahindra Limited"
    },
    {
     "symbol": "POWERGRID",
     "companyName": "Power Grid Corporation of India Limited"
    },
    {
     "symbol": "COALINDIA",
     "companyName": "Coal India Limited"
    },
    {
     "symbol": "TATASTEEL",
     "companyName": "Tata Steel Limited"
    },
    {
     "symbol": "HINDZINC",
     "companyName": "Hindustan Zinc Limited"
    },
    {
     "symbol": "PIDILITIND",
     "companyName": "Pidilite Industries Limited"
    },
    {
     "symbol": "LTIM",
     "companyName": "LTIMindtree Limited"
    },
    {
     "symbol": "TATAMOTORS",
     "companyName": "Tata Motors Limited"
    },
    {
     "symbol": "SBILIFE",
     "companyName": "SBI Life Insurance Company Limited"
    },
    {
     "symbol": "HDFCLIFE",
     "companyName": "HDFC Life Insurance Company Limited"
    },
    {
     "symbol": "ADANIPOWER",
     "companyName": "Adani Power Limited"
    },
    {
     "symbol": "VEDL",
     "companyName": "Vedanta Limited"
    },
    {
     "symbol": "GRASIM",
     "companyName": "Grasim Industries Limited"
    },
    {
     "symbol": "IOC",
     "companyName": "Indian Oil Corporation Limited"
    },
    {
     "symbol": "HINDALCO",
     "companyName": "Hindalco Industries Limited"
    },
    {
     "symbol": "AMBUJACEM",
     "companyName": "Ambuja Cements Limited"
    },
    {
     "symbol": "BRITANNIA",
     "companyName": "Britannia Industries Limited"
    },
    {
     "symbol": "BAJAJ-AUTO",
     "companyName": "Bajaj Auto Limited"
    },
    {
     "symbol": "SIEMENS",
     "companyName": "Siemens Limited"
    },
    {
     "symbol": "DABUR",
     "companyName": "Dabur India Limited"
    },
    {
     "symbol": "TECHM",
     "companyName": "Tech Mahindra Limited"
    },
    {
     "symbol": "BANKBARODA",
     "companyName": "Bank of Baroda"
    },
    {
     "symbol": "INDUSINDBK",
     "companyName": "IndusInd Bank Limited"
    },
    {
     "symbol": "DLF",
     "companyName": "DLF Limited"
    },
    {
     "symbol": "DIVISLAB",
     "companyName": "Divi's Laboratories Limited"
    },
    {
     "symbol": "GODREJCP",
     "companyName": "Godrej Consumer Products Limited"
    },
    {
     "symbol": "EICHERMOT",
     "companyName": "Eicher Motors Limited"
    },
    {
     "symbol": "CIPLA",
     "companyName": "Cipla Limited"
    },
    {
     "symbol": "VBL",
     "companyName": "Varun Beverages Limited"
    },
    {
     "symbol": "HAL",
     "companyName": "Hindustan Aeronautics Limited"
    },
    {
     "symbol": "SHREECEM",
     "companyName": "SHREE CEMENT LIMITED"
    },
    {
     "symbol": "AWL",
     "companyName": "Adani Wilmar Limited"
    },
    {
     "symbol": "INDIGO",
     "companyName": "InterGlobe Aviation Limited"
    },
    {
     "symbol": "SBICARD",
     "companyName": "SBI Cards and Payment Services Limited"
    },
    {
     "symbol": "BEL",
     "companyName": "Bharat Electronics Limited"
    },
    {
     "symbol": "BPCL",
     "companyName": "Bharat Petroleum Corporation Limited"
    },
    {
     "symbol": "TATACONSUM",
     "companyName": "TATA CONSUMER PRODUCTS LIMITED"
    },
    {
     "symbol": "DRREDDY",
     "companyName": "Dr. Reddy's Laboratories Limited"
    },
    {
     "symbol": "HAVELLS",
     "companyName": "Havells India Limited"
    },
    {
     "symbol": "SRF",
     "companyName": "SRF Limited"
    },
    {
     "symbol": "TATAPOWER",
     "companyName": "Tata Power Company Limited"
    },
    {
     "symbol": "MARICO",
     "companyName": "Marico Limited"
    },
    {
     "symbol": "ICICIPRULI",
     "companyName": "ICICI Prudential Life Insurance Company Limited"
    },
    {
     "symbol": "APOLLOHOSP",
     "companyName": "Apollo Hospitals Enterprise Limited"
    },
    {
     "symbol": "BAJAJHLDNG",
     "companyName": "Bajaj Holdings &amp; Investment Limited"
    },
    {
     "symbol": "MCDOWELL-N",
     "companyName": "United Spirits Limited"
    },
    {
     "symbol": "GAIL",
     "companyName": "GAIL (India) Limited"
    },
    {
     "symbol": "PNB",
     "companyName": "Punjab National Bank"
    },
    {
     "symbol": "ICICIGI",
     "companyName": "ICICI Lombard General Insurance Company Limited"
    },
    {
     "symbol": "IOB",
     "companyName": "Indian Overseas Bank"
    },
    {
     "symbol": "CANBK",
     "companyName": "Canara Bank"
    },
    {
     "symbol": "CHOLAFIN",
     "companyName": "Cholamandalam Investment and Finance Company Limited"
    },
    {
     "symbol": "YESBANK",
     "companyName": "Yes Bank Limited"
    },
    {
     "symbol": "JINDALSTEL",
     "companyName": "Jindal Steel &amp; Power Limited"
    },
    {
     "symbol": "IDBI",
     "companyName": "IDBI Bank Limited"
    },
    {
     "symbol": "ABB",
     "companyName": "ABB India Limited"
    },
    {
     "symbol": "BERGEPAINT",
     "companyName": "Berger Paints (I) Limited"
    },
    {
     "symbol": "UNIONBANK",
     "companyName": "Union Bank of India"
    },
    {
     "symbol": "HEROMOTOCO",
     "companyName": "Hero MotoCorp Limited"
    },
    {
     "symbol": "UPL",
     "companyName": "UPL Limited"
    },
    {
     "symbol": "TIINDIA",
     "companyName": "Tube Investments of India Limited"
    },
    {
     "symbol": "LODHA",
     "companyName": "Macrotech Developers Limited"
    },
    {
     "symbol": "TORNTPHARM",
     "companyName": "Torrent Pharmaceuticals Limited"
    },
    {
     "symbol": "PIIND",
     "companyName": "PI Industries Limited"
    },
    {
     "symbol": "TVSMOTOR",
     "companyName": "TVS Motor Company Limited"
    },
    {
     "symbol": "INDUSTOWER",
     "companyName": "Indus Towers Limited"
    },
    {
     "symbol": "IRCTC",
     "companyName": "Indian Railway Catering And Tourism Corporation Limited"
    },
    {
     "symbol": "BOSCHLTD",
     "companyName": "Bosch Limited"
    },
    {
     "symbol": "NAUKRI",
     "companyName": "Info Edge (India) Limited"
    },
    {
     "symbol": "ZOMATO",
     "companyName": "Zomato Limited"
    },
    {
     "symbol": "MOTHERSON",
     "companyName": "Samvardhana Motherson International Limited"
    },
    {
     "symbol": "TRENT",
     "companyName": "Trent Limited"
    },
    {
     "symbol": "PAGEIND",
     "companyName": "Page Industries Limited"
    },
    {
     "symbol": "JSWENERGY",
     "companyName": "JSW Energy Limited"
    },
    {
     "symbol": "PGHH",
     "companyName": "Procter &amp; Gamble Hygiene and Health Care Limited"
    },
    {
     "symbol": "HDFCAMC",
     "companyName": "HDFC Asset Management Company Limited"
    },
    {
     "symbol": "ACC",
     "companyName": "ACC Limited"
    },
    {
     "symbol": "INDHOTEL",
     "companyName": "The Indian Hotels Company Limited"
    },
    {
     "symbol": "CONCOR",
     "companyName": "Container Corporation of India Limited"
    },
    {
     "symbol": "UBL",
     "companyName": "United Breweries Limited"
    },
    {
     "symbol": "NYKAA",
     "companyName": "FSN E-Commerce Ventures Limited"
    },
    {
     "symbol": "AUBANK",
     "companyName": "AU Small Finance Bank Limited"
    },
    {
     "symbol": "PATANJALI",
     "companyName": "Patanjali Foods Limited"
    },
    {
     "symbol": "SCHAEFFLER",
     "companyName": "Schaeffler India Limited"
    },
    {
     "symbol": "MUTHOOTFIN",
     "companyName": "Muthoot Finance Limited"
    },
    {
     "symbol": "MAXHEALTH",
     "companyName": "Max Healthcare Institute Limited"
    },
    {
     "symbol": "IRFC",
     "companyName": "Indian Railway Finance Corporation Limited"
    },
    {
     "symbol": "ZYDUSLIFE",
     "companyName": "Zydus Lifesciences Limited"
    },
    {
     "symbol": "ASHOKLEY",
     "companyName": "Ashok Leyland Limited"
    },
    {
     "symbol": "COLPAL",
     "companyName": "Colgate Palmolive (India) Limited"
    },
    {
     "symbol": "CGPOWER",
     "companyName": "CG Power and Industrial Solutions Limited"
    },
    {
     "symbol": "BALKRISIND",
     "companyName": "Balkrishna Industries Limited"
    },
    {
     "symbol": "BHARATFORG",
     "companyName": "Bharat Forge Limited"
    },
    {
     "symbol": "NHPC",
     "companyName": "NHPC Limited"
    },
    {
     "symbol": "SOLARINDS",
     "companyName": "Solar Industries India Limited"
    },
    {
     "symbol": "ASTRAL",
     "companyName": "Astral Limited"
    },
    {
     "symbol": "TATAELXSI",
     "companyName": "Tata Elxsi Limited"
    },
    {
     "symbol": "LTTS",
     "companyName": "L&amp;T Technology Services Limited"
    },
    {
     "symbol": "POLYCAB",
     "companyName": "Polycab India Limited"
    },
    {
     "symbol": "CUMMINSIND",
     "companyName": "Cummins India Limited"
    },
    {
     "symbol": "BANDHANBNK",
     "companyName": "Bandhan Bank Limited"
    },
    {
     "symbol": "UCOBANK",
     "companyName": "UCO Bank"
    },
    {
     "symbol": "MRF",
     "companyName": "MRF Limited"
    },
    {
     "symbol": "PFC",
     "companyName": "Power Finance Corporation Limited"
    },
    {
     "symbol": "SHRIRAMFIN",
     "companyName": "Shriram Finance Limited"
    },
    {
     "symbol": "MPHASIS",
     "companyName": "MphasiS Limited"
    },
    {
     "symbol": "HONAUT",
     "companyName": "Honeywell Automation India Limited"
    },
    {
     "symbol": "IDFCFIRSTB",
     "companyName": "IDFC First Bank Limited"
    },
    {
     "symbol": "TATACOMM",
     "companyName": "Tata Communications Limited"
    },
    {
     "symbol": "ABCAPITAL",
     "companyName": "Aditya Birla Capital Limited"
    },
    {
     "symbol": "BANKINDIA",
     "companyName": "Bank of India"
    },
    {
     "symbol": "NMDC",
     "companyName": "NMDC Limited"
    },
    {
     "symbol": "ALKEM",
     "companyName": "Alkem Laboratories Limited"
    },
    {
     "symbol": "INDIANB",
     "companyName": "Indian Bank"
    },
    {
     "symbol": "DALBHARAT",
     "companyName": "Dalmia Bharat Limited"
    },
    {
     "symbol": "PAYTM",
     "companyName": "One 97 Communications Limited"
    },
    {
     "symbol": "FLUOROCHEM",
     "companyName": "Gujarat Fluorochemicals Limited"
    },
    {
     "symbol": "SAIL",
     "companyName": "Steel Authority of India Limited"
    },
    {
     "symbol": "GODREJPROP",
     "companyName": "Godrej Properties Limited"
    },
    {
     "symbol": "JUBLFOOD",
     "companyName": "Jubilant Foodworks Limited"
    },
    {
     "symbol": "GUJGASLTD",
     "companyName": "Gujarat Gas Limited"
    },
    {
     "symbol": "LUPIN",
     "companyName": "Lupin Limited"
    },
    {
     "symbol": "HINDPETRO",
     "companyName": "Hindustan Petroleum Corporation Limited"
    },
    {
     "symbol": "STARHEALTH",
     "companyName": "Star Health and Allied Insurance Company Limited"
    },
    {
     "symbol": "MANYAVAR",
     "companyName": "Vedant Fashions Limited"
    },
    {
     "symbol": "PETRONET",
     "companyName": "Petronet LNG Limited"
    },
    {
     "symbol": "OBEROIRLTY",
     "companyName": "Oberoi Realty Limited"
    },
    {
     "symbol": "BIOCON",
     "companyName": "Biocon Limited"
    },
    {
     "symbol": "GICRE",
     "companyName": "General Insurance Corporation of India"
    },
    {
     "symbol": "SUPREMEIND",
     "companyName": "Supreme Industries Limited"
    },
    {
     "symbol": "RECLTD",
     "companyName": "REC Limited"
    },
    {
     "symbol": "APLAPOLLO",
     "companyName": "APL Apollo Tubes Limited"
    },
    {
     "symbol": "UNOMINDA",
     "companyName": "UNO Minda Limited"
    },
    {
     "symbol": "PERSISTENT",
     "companyName": "Persistent Systems Limited"
    },
    {
     "symbol": "FEDERALBNK",
     "companyName": "The Federal Bank  Limited"
    },
    {
     "symbol": "LINDEINDIA",
     "companyName": "Linde India Limited"
    },
    {
     "symbol": "M&amp;MFIN",
     "companyName": "Mahindra &amp; Mahindra Financial Services Limited"
    },
    {
     "symbol": "IGL",
     "companyName": "Indraprastha Gas Limited"
    },
    {
     "symbol": "ESCORTS",
     "companyName": "Escorts Kubota Limited"
    },
    {
     "symbol": "CENTRALBK",
     "companyName": "Central Bank of India"
    },
    {
     "symbol": "BHEL",
     "companyName": "Bharat Heavy Electricals Limited"
    },
    {
     "symbol": "ABFRL",
     "companyName": "Aditya Birla Fashion and Retail Limited"
    },
    {
     "symbol": "DEEPAKNTR",
     "companyName": "Deepak Nitrite Limited"
    },
    {
     "symbol": "VOLTAS",
     "companyName": "Voltas Limited"
    },
    {
     "symbol": "OFSS",
     "companyName": "Oracle Financial Services Software Limited"
    },
    {
     "symbol": "COROMANDEL",
     "companyName": "Coromandel International Limited"
    },
    {
     "symbol": "GLAND",
     "companyName": "Gland Pharma Limited"
    },
    {
     "symbol": "MSUMI",
     "companyName": "Motherson Sumi Wiring India Limited"
    },
    {
     "symbol": "AUROPHARMA",
     "companyName": "Aurobindo Pharma Limited"
    },
    {
     "symbol": "SUNDARMFIN",
     "companyName": "Sundaram Finance Limited"
    },
    {
     "symbol": "PHOENIXLTD",
     "companyName": "The Phoenix Mills Limited"
    },
    {
     "symbol": "IDEA",
     "companyName": "Vodafone Idea Limited"
    },
    {
     "symbol": "3MINDIA",
     "companyName": "3M India Limited"
    },
    {
     "symbol": "SONACOMS",
     "companyName": "Sona BLW Precision Forgings Limited"
    },
    {
     "symbol": "ATUL",
     "companyName": "Atul Limited"
    },
    {
     "symbol": "SUMICHEM",
     "companyName": "Sumitomo Chemical India Limited"
    },
    {
     "symbol": "AIAENG",
     "companyName": "AIA Engineering Limited"
    },
    {
     "symbol": "FACT",
     "companyName": "Fertilizers and Chemicals Travancore Limited"
    },
    {
     "symbol": "DELHIVERY",
     "companyName": "Delhivery Limited"
    },
    {
     "symbol": "METROBRAND",
     "companyName": "Metro Brands Limited"
    },
    {
     "symbol": "GMRINFRA",
     "companyName": "GMR Airports Infrastructure Limited"
    },
    {
     "symbol": "TATACHEM",
     "companyName": "Tata Chemicals Limited"
    },
    {
     "symbol": "COFORGE",
     "companyName": "Coforge Limited"
    },
    {
     "symbol": "KANSAINER",
     "companyName": "Kansai Nerolac Paints Limited"
    },
    {
     "symbol": "TORNTPOWER",
     "companyName": "Torrent Power Limited"
    },
    {
     "symbol": "POONAWALLA",
     "companyName": "Poonawalla Fincorp Limited"
    },
    {
     "symbol": "SYNGENE",
     "companyName": "Syngene International Limited"
    },
    {
     "symbol": "THERMAX",
     "companyName": "Thermax Limited"
    },
    {
     "symbol": "MFSL",
     "companyName": "Max Financial Services Limited"
    },
    {
     "symbol": "TIMKEN",
     "companyName": "Timken India Limited"
    },
    {
     "symbol": "DIXON",
     "companyName": "Dixon Technologies (India) Limited"
    },
    {
     "symbol": "ZEEL",
     "companyName": "Zee Entertainment Enterprises Limited"
    },
    {
     "symbol": "PSB",
     "companyName": "Punjab &amp; Sind Bank"
    },
    {
     "symbol": "LICHSGFIN",
     "companyName": "LIC Housing Finance Limited"
    },
    {
     "symbol": "RELAXO",
     "companyName": "Relaxo Footwears Limited"
    },
    {
     "symbol": "OIL",
     "companyName": "Oil India Limited"
    },
    {
     "symbol": "JKCEMENT",
     "companyName": "JK Cement Limited"
    },
    {
     "symbol": "CRISIL",
     "companyName": "CRISIL Limited"
    },
    {
     "symbol": "GLAXO",
     "companyName": "GlaxoSmithKline Pharmaceuticals Limited"
    },
    {
     "symbol": "SKFINDIA",
     "companyName": "SKF India Limited"
    },
    {
     "symbol": "AARTIIND",
     "companyName": "Aarti Industries Limited"
    },
    {
     "symbol": "DEVYANI",
     "companyName": "Devyani International Limited"
    },
    {
     "symbol": "L&amp;TFH",
     "companyName": "L&amp;T Finance Holdings Limited"
    },
    {
     "symbol": "RAJESHEXPO",
     "companyName": "Rajesh Exports Limited"
    },
    {
     "symbol": "FORTIS",
     "companyName": "Fortis Healthcare Limited"
    },
    {
     "symbol": "CROMPTON",
     "companyName": "Crompton Greaves Consumer Electricals Limited"
    },
    {
     "symbol": "IPCALAB",
     "companyName": "IPCA Laboratories Limited"
    },
    {
     "symbol": "BATAINDIA",
     "companyName": "Bata India Limited"
    },
    {
     "symbol": "NIACL",
     "companyName": "The New India Assurance Company Limited"
    },
    {
     "symbol": "APOLLOTYRE",
     "companyName": "Apollo Tyres Limited"
    },
    {
     "symbol": "MAHABANK",
     "companyName": "Bank of Maharashtra"
    },
    {
     "symbol": "VINATIORGA",
     "companyName": "Vinati Organics Limited"
    },
    {
     "symbol": "SUNDRMFAST",
     "companyName": "Sundram Fasteners Limited"
    },
    {
     "symbol": "PFIZER",
     "companyName": "Pfizer Limited"
    },
    {
     "symbol": "HATSUN",
     "companyName": "Hatsun Agro Product Limited"
    },
    {
     "symbol": "POLICYBZR",
     "companyName": "PB Fintech Limited"
    },
    {
     "symbol": "LAURUSLABS",
     "companyName": "Laurus Labs Limited"
    },
    {
     "symbol": "NAVINFLUOR",
     "companyName": "Navin Fluorine International Limited"
    },
    {
     "symbol": "PEL",
     "companyName": "Piramal Enterprises Limited"
    },
    {
     "symbol": "GRINDWELL",
     "companyName": "Grindwell Norton Limited"
    },
    {
     "symbol": "ENDURANCE",
     "companyName": "Endurance Technologies Limited"
    },
    {
     "symbol": "KPITTECH",
     "companyName": "KPIT Technologies Limited"
    },
    {
     "symbol": "SUNTV",
     "companyName": "Sun TV Network Limited"
    },
    {
     "symbol": "WHIRLPOOL",
     "companyName": "Whirlpool of India Limited"
    },
    {
     "symbol": "LALPATHLAB",
     "companyName": "Dr. Lal Path Labs Ltd."
    },
    {
     "symbol": "EMAMILTD",
     "companyName": "Emami Limited"
    },
    {
     "symbol": "PRESTIGE",
     "companyName": "Prestige Estates Projects Limited"
    },
    {
     "symbol": "KAJARIACER",
     "companyName": "Kajaria Ceramics Limited"
    },
    {
     "symbol": "BLUEDART",
     "companyName": "Blue Dart Express Limited"
    },
    {
     "symbol": "IIFL",
     "companyName": "IIFL Finance Limited"
    },
    {
     "symbol": "TTML",
     "companyName": "Tata Teleservices (Maharashtra) Limited"
    },
    {
     "symbol": "FIVESTAR",
     "companyName": "Five-Star Business Finance Limited"
    },
    {
     "symbol": "KPRMILL",
     "companyName": "K.P.R. Mill Limited"
    },
    {
     "symbol": "FINEORG",
     "companyName": "Fine Organic Industries Limited"
    },
    {
     "symbol": "IRB",
     "companyName": "IRB Infrastructure Developers Limited"
    },
    {
     "symbol": "TRIDENT",
     "companyName": "Trident Limited"
    },
    {
     "symbol": "BDL",
     "companyName": "Bharat Dynamics Limited"
    },
    {
     "symbol": "ZFCVINDIA",
     "companyName": "ZF Commercial Vehicle Control Systems India Limited"
    },
    {
     "symbol": "CARBORUNIV",
     "companyName": "Carborundum Universal Limited"
    },
    {
     "symbol": "RAMCOCEM",
     "companyName": "The Ramco Cements Limited"
    },
    {
     "symbol": "GILLETTE",
     "companyName": "Gillette India Limited"
    },
    {
     "symbol": "ISEC",
     "companyName": "ICICI Securities Limited"
    },
    {
     "symbol": "MAZDOCK",
     "companyName": "Mazagon Dock Shipbuilders Limited"
    },
    {
     "symbol": "CLEAN",
     "companyName": "Clean Science and Technology Limited"
    },
    {
     "symbol": "IIFLWAM",
     "companyName": "Iifl Wealth Management Limited"
    },
    {
     "symbol": "NH",
     "companyName": "Narayana Hrudayalaya Ltd."
    },
    {
     "symbol": "AJANTPHARM",
     "companyName": "Ajanta Pharma Limited"
    },
    {
     "symbol": "NAM-INDIA",
     "companyName": "Nippon Life India Asset Management Limited"
    },
    {
     "symbol": "EXIDEIND",
     "companyName": "Exide Industries Limited"
    },
    {
     "symbol": "APTUS",
     "companyName": "Aptus Value Housing Finance India Limited"
    },
    {
     "symbol": "JBCHEPHARM",
     "companyName": "JB Chemicals &amp; Pharmaceuticals Limited"
    },
    {
     "symbol": "GSPL",
     "companyName": "Gujarat State Petronet Limited"
    },
    {
     "symbol": "NATIONALUM",
     "companyName": "National Aluminium Company Limited"
    },
    {
     "symbol": "AAVAS",
     "companyName": "Aavas Financiers Limited"
    },
    {
     "symbol": "GODREJIND",
     "companyName": "Godrej Industries Limited"
    },
    {
     "symbol": "AFFLE",
     "companyName": "Affle (India) Limited"
    },
    {
     "symbol": "CREDITACC",
     "companyName": "CREDITACCESS GRAMEEN LIMITED"
    },
    {
     "symbol": "RVNL",
     "companyName": "Rail Vikas Nigam Limited"
    },
    {
     "symbol": "POWERINDIA",
     "companyName": "Hitachi Energy India Limited"
    },
    {
     "symbol": "REDINGTON",
     "companyName": "Redington Limited"
    },
    {
     "symbol": "DCMSHRIRAM",
     "companyName": "DCM Shriram Limited"
    },
    {
     "symbol": "BAJAJELEC",
     "companyName": "Bajaj Electricals Limited"
    },
    {
     "symbol": "KIOCL",
     "companyName": "KIOCL Limited"
    },
    {
     "symbol": "RATNAMANI",
     "companyName": "Ratnamani Metals &amp; Tubes Limited"
    },
    {
     "symbol": "PPLPHARMA",
     "companyName": "Piramal Pharma Limited"
    },
    {
     "symbol": "ALKYLAMINE",
     "companyName": "Alkyl Amines Chemicals Limited"
    },
    {
     "symbol": "RADICO",
     "companyName": "Radico Khaitan Limited"
    },
    {
     "symbol": "RHIM",
     "companyName": "RHI MAGNESITA INDIA LIMITED"
    },
    {
     "symbol": "SANOFI",
     "companyName": "Sanofi India Limited"
    },
    {
     "symbol": "SJVN",
     "companyName": "SJVN Limited"
    },
    {
     "symbol": "CUB",
     "companyName": "City Union Bank Limited"
    },
    {
     "symbol": "ELGIEQUIP",
     "companyName": "Elgi Equipments Limited"
    },
    {
     "symbol": "INDIAMART",
     "companyName": "Indiamart Intermesh Limited"
    },
    {
     "symbol": "CGCL",
     "companyName": "Capri Global Capital Limited"
    },
    {
     "symbol": "KEI",
     "companyName": "KEI Industries Limited"
    },
    {
     "symbol": "ABSLAMC",
     "companyName": "Aditya Birla Sun Life AMC Limited"
    },
    {
     "symbol": "MAHINDCIE",
     "companyName": "Mahindra CIE Automotive Limited"
    },
    {
     "symbol": "NUVOCO",
     "companyName": "Nuvoco Vistas Corporation Limited"
    },
    {
     "symbol": "KALYANKJIL",
     "companyName": "Kalyan Jewellers India Limited"
    },
    {
     "symbol": "IDFC",
     "companyName": "IDFC Limited"
    },
    {
     "symbol": "LAXMIMACH",
     "companyName": "Lakshmi Machine Works Limited"
    },
    {
     "symbol": "HAPPSTMNDS",
     "companyName": "Happiest Minds Technologies Limited"
    },
    {
     "symbol": "CHAMBLFERT",
     "companyName": "Chambal Fertilizers &amp; Chemicals Limited"
    },
    {
     "symbol": "ASAHIINDIA",
     "companyName": "Asahi India Glass Limited"
    },
    {
     "symbol": "KEC",
     "companyName": "KEC International Limited"
    },
    {
     "symbol": "SFL",
     "companyName": "Sheela Foam Limited"
    },
    {
     "symbol": "SUVENPHAR",
     "companyName": "Suven Pharmaceuticals Limited"
    },
    {
     "symbol": "CAMPUS",
     "companyName": "Campus Activewear Limited"
    },
    {
     "symbol": "IEX",
     "companyName": "Indian Energy Exchange Limited"
    },
    {
     "symbol": "MEDANTA",
     "companyName": "Global Health Limited"
    },
    {
     "symbol": "JSL",
     "companyName": "Jindal Stainless Limited"
    },
    {
     "symbol": "KIMS",
     "companyName": "Krishna Institute of Medical Sciences Limited"
    },
    {
     "symbol": "RENUKA",
     "companyName": "Shree Renuka Sugars Limited"
    },
    {
     "symbol": "BASF",
     "companyName": "BASF India Limited"
    },
    {
     "symbol": "AEGISCHEM",
     "companyName": "Aegis Logistics Limited"
    },
    {
     "symbol": "CASTROLIND",
     "companyName": "Castrol India Limited"
    },
    {
     "symbol": "GLENMARK",
     "companyName": "Glenmark Pharmaceuticals Limited"
    },
    {
     "symbol": "NLCINDIA",
     "companyName": "NLC India Limited"
    },
    {
     "symbol": "CDSL",
     "companyName": "Central Depository Services (India) Limited"
    },
    {
     "symbol": "FINPIPE",
     "companyName": "Finolex Industries Limited"
    },
    {
     "symbol": "BLUESTARCO",
     "companyName": "Blue Star Limited"
    },
    {
     "symbol": "ASTERDM",
     "companyName": "Aster DM Healthcare Limited"
    },
    {
     "symbol": "CENTURYPLY",
     "companyName": "Century Plyboards (India) Limited"
    },
    {
     "symbol": "VGUARD",
     "companyName": "V-Guard Industries Limited"
    },
    {
     "symbol": "APLLTD",
     "companyName": "Alembic Pharmaceuticals Limited"
    },
    {
     "symbol": "TTKPRESTIG",
     "companyName": "TTK Prestige Limited"
    },
    {
     "symbol": "EIHOTEL",
     "companyName": "EIH Limited"
    },
    {
     "symbol": "GRINFRA",
     "companyName": "G R Infraprojects Limited"
    },
    {
     "symbol": "ANGELONE",
     "companyName": "Angel One Limited"
    },
    {
     "symbol": "UTIAMC",
     "companyName": "UTI Asset Management Company Limited"
    },
    {
     "symbol": "CAMS",
     "companyName": "Computer Age Management Services Limited"
    },
    {
     "symbol": "BIKAJI",
     "companyName": "Bikaji Foods International Limited"
    },
    {
     "symbol": "RBLBANK",
     "companyName": "RBL Bank Limited"
    },
    {
     "symbol": "BRIGADE",
     "companyName": "Brigade Enterprises Limited"
    },
    {
     "symbol": "TATAINVEST",
     "companyName": "Tata Investment Corporation Limited"
    },
    {
     "symbol": "SUZLON",
     "companyName": "Suzlon Energy Limited"
    },
    {
     "symbol": "HINDCOPPER",
     "companyName": "Hindustan Copper Limited"
    },
    {
     "symbol": "PVR",
     "companyName": "PVR Limited"
    },
    {
     "symbol": "AETHER",
     "companyName": "Aether Industries Limited"
    },
    {
     "symbol": "HUDCO",
     "companyName": "Housing &amp; Urban Development Corporation Limited"
    },
    {
     "symbol": "JSLHISAR",
     "companyName": "Jindal Stainless (Hisar) Limited"
    },
    {
     "symbol": "CHOLAHLDNG",
     "companyName": "Cholamandalam Financial Holdings Limited"
    },
    {
     "symbol": "GODFRYPHLP",
     "companyName": "Godfrey Phillips India Limited"
    },
    {
     "symbol": "NATCOPHARM",
     "companyName": "Natco Pharma Limited"
    },
    {
     "symbol": "HFCL",
     "companyName": "HFCL Limited"
    },
    {
     "symbol": "MOTILALOFS",
     "companyName": "Motilal Oswal Financial Services Limited"
    },
    {
     "symbol": "CESC",
     "companyName": "CESC Limited"
    },
    {
     "symbol": "SUNCLAYLTD",
     "companyName": "Sundaram Clayton Limited"
    },
    {
     "symbol": "AKZOINDIA",
     "companyName": "Akzo Nobel India Limited"
    },
    {
     "symbol": "EIDPARRY",
     "companyName": "EID Parry India Limited"
    },
    {
     "symbol": "ALLCARGO",
     "companyName": "Allcargo Logistics Limited"
    },
    {
     "symbol": "ITI",
     "companyName": "ITI Limited"
    },
    {
     "symbol": "MRPL",
     "companyName": "Mangalore Refinery and Petrochemicals Limited"
    },
    {
     "symbol": "MANAPPURAM",
     "companyName": "Manappuram Finance Limited"
    },
    {
     "symbol": "RAYMOND",
     "companyName": "Raymond Limited"
    },
    {
     "symbol": "AMARAJABAT",
     "companyName": "Amara Raja Batteries Limited"
    },
    {
     "symbol": "TANLA",
     "companyName": "Tanla Platforms Limited"
    },
    {
     "symbol": "JKLAKSHMI",
     "companyName": "JK Lakshmi Cement Limited"
    },
    {
     "symbol": "ZYDUSWELL",
     "companyName": "Zydus Wellness Limited"
    },
    {
     "symbol": "GESHIP",
     "companyName": "The Great Eastern Shipping Company Limited"
    },
    {
     "symbol": "VTL",
     "companyName": "Vardhman Textiles Limited"
    },
    {
     "symbol": "VIPIND",
     "companyName": "VIP Industries Limited"
    },
    {
     "symbol": "KRBL",
     "companyName": "KRBL Limited"
    },
    {
     "symbol": "EASEMYTRIP",
     "companyName": "Easy Trip Planners Limited"
    },
    {
     "symbol": "KARURVYSYA",
     "companyName": "Karur Vysya Bank Limited"
    },
    {
     "symbol": "DEEPAKFERT",
     "companyName": "Deepak Fertilizers and Petrochemicals Corporation Limited"
    },
    {
     "symbol": "GODREJAGRO",
     "companyName": "Godrej Agrovet Limited"
    },
    {
     "symbol": "PNBHOUSING",
     "companyName": "PNB Housing Finance Limited"
    },
    {
     "symbol": "CYIENT",
     "companyName": "Cyient Limited"
    },
    {
     "symbol": "TEJASNET",
     "companyName": "Tejas Networks Limited"
    },
    {
     "symbol": "ERIS",
     "companyName": "Eris Lifesciences Limited"
    },
    {
     "symbol": "BALAMINES",
     "companyName": "Balaji Amines Limited"
    },
    {
     "symbol": "GALAXYSURF",
     "companyName": "Galaxy Surfactants Limited"
    },
    {
     "symbol": "GNFC",
     "companyName": "Gujarat Narmada Valley Fertilizers and Chemicals Limited"
    },
    {
     "symbol": "POLYMED",
     "companyName": "Poly Medicure Limited"
    },
    {
     "symbol": "JINDWORLD",
     "companyName": "Jindal Worldwide Limited"
    },
    {
     "symbol": "SAPPHIRE",
     "companyName": "Sapphire Foods India Limited"
    },
    {
     "symbol": "JUBLINGREA",
     "companyName": "Jubilant Ingrevia Limited"
    },
    {
     "symbol": "TRITURBINE",
     "companyName": "Triveni Turbine Limited"
    },
    {
     "symbol": "FINCABLES",
     "companyName": "Finolex Cables Limited"
    },
    {
     "symbol": "KALPATPOWR",
     "companyName": "Kalpataru Power Transmission Limited"
    },
    {
     "symbol": "MGL",
     "companyName": "Mahanagar Gas Limited"
    },
    {
     "symbol": "ASTRAZEN",
     "companyName": "AstraZeneca Pharma India Limited"
    },
    {
     "symbol": "BSOFT",
     "companyName": "BIRLASOFT LIMITED"
    },
    {
     "symbol": "RITES",
     "companyName": "RITES Limited"
    },
    {
     "symbol": "BALRAMCHIN",
     "companyName": "Balrampur Chini Mills Limited"
    },
    {
     "symbol": "SWANENERGY",
     "companyName": "Swan Energy Limited"
    },
    {
     "symbol": "CENTURYTEX",
     "companyName": "Century Textiles &amp; Industries Limited"
    },
    {
     "symbol": "SHYAMMETL",
     "companyName": "Shyam Metalics and Energy Limited"
    },
    {
     "symbol": "SONATSOFTW",
     "companyName": "Sonata Software Limited"
    },
    {
     "symbol": "LXCHEM",
     "companyName": "Laxmi Organic Industries Limited"
    },
    {
     "symbol": "SHOPERSTOP",
     "companyName": "Shoppers Stop Limited"
    },
    {
     "symbol": "ALOKINDS",
     "companyName": "Alok Industries Limited"
    },
    {
     "symbol": "GRANULES",
     "companyName": "Granules India Limited"
    },
    {
     "symbol": "WELSPUNIND",
     "companyName": "Welspun India Limited"
    },
    {
     "symbol": "TMB",
     "companyName": "Tamilnad Mercantile Bank Limited"
    },
    {
     "symbol": "ROUTE",
     "companyName": "ROUTE MOBILE LIMITED"
    },
    {
     "symbol": "BIRLACORPN",
     "companyName": "Birla Corporation Limited"
    },
    {
     "symbol": "LATENTVIEW",
     "companyName": "Latent View Analytics Limited"
    },
    {
     "symbol": "JYOTHYLAB",
     "companyName": "Jyothy Labs Limited"
    },
    {
     "symbol": "RAINBOW",
     "companyName": "Rainbow Childrens Medicare Limited"
    },
    {
     "symbol": "SPLPETRO",
     "companyName": "Supreme Petrochem Limited"
    },
    {
     "symbol": "SAREGAMA",
     "companyName": "Saregama India Limited"
    },
    {
     "symbol": "RCF",
     "companyName": "Rashtriya Chemicals and Fertilizers Limited"
    },
    {
     "symbol": "PNCINFRA",
     "companyName": "PNC Infratech Limited"
    },
    {
     "symbol": "BSE",
     "companyName": "BSE Limited"
    },
    {
     "symbol": "CRAFTSMAN",
     "companyName": "Craftsman Automation Limited"
    },
    {
     "symbol": "MEDPLUS",
     "companyName": "Medplus Health Services Limited"
    },
    {
     "symbol": "EQUITASBNK",
     "companyName": "Equitas Small Finance Bank Limited"
    },
    {
     "symbol": "IBULHSGFIN",
     "companyName": "Indiabulls Housing Finance Limited"
    },
    {
     "symbol": "GRAPHITE",
     "companyName": "Graphite India Limited"
    },
    {
     "symbol": "ANURAS",
     "companyName": "Anupam Rasayan India Limited"
    },
    {
     "symbol": "CHEMPLASTS",
     "companyName": "Chemplast Sanmar Limited"
    },
    {
     "symbol": "KNRCON",
     "companyName": "KNR Constructions Limited"
    },
    {
     "symbol": "FSL",
     "companyName": "Firstsource Solutions Limited"
    },
    {
     "symbol": "CHALET",
     "companyName": "Chalet Hotels Limited"
    },
    {
     "symbol": "CANFINHOME",
     "companyName": "Can Fin Homes Limited"
    },
    {
     "symbol": "GMMPFAUDLR",
     "companyName": "GMM Pfaudler Limited"
    },
    {
     "symbol": "CCL",
     "companyName": "CCL Products (India) Limited"
    },
    {
     "symbol": "COCHINSHIP",
     "companyName": "Cochin Shipyard Limited"
    },
    {
     "symbol": "STLTECH",
     "companyName": "Sterlite Technologies Limited"
    },
    {
     "symbol": "NBCC",
     "companyName": "NBCC (India) Limited"
    },
    {
     "symbol": "HGS",
     "companyName": "Hinduja Global Solutions Limited"
    },
    {
     "symbol": "JKPAPER",
     "companyName": "JK Paper Limited"
    },
    {
     "symbol": "NETWORK18",
     "companyName": "Network18 Media &amp; Investments Limited"
    },
    {
     "symbol": "TCIEXP",
     "companyName": "TCI Express Limited"
    },
    {
     "symbol": "APARINDS",
     "companyName": "Apar Industries Limited"
    },
    {
     "symbol": "JMFINANCIL",
     "companyName": "JM Financial Limited"
    },
    {
     "symbol": "TRIVENI",
     "companyName": "Triveni Engineering &amp; Industries Limited"
    },
    {
     "symbol": "METROPOLIS",
     "companyName": "Metropolis Healthcare Limited"
    },
    {
     "symbol": "BLS",
     "companyName": "BLS International Services Limited"
    },
    {
     "symbol": "LEMONTREE",
     "companyName": "Lemon Tree Hotels Limited"
    },
    {
     "symbol": "CERA",
     "companyName": "Cera Sanitaryware Limited"
    },
    {
     "symbol": "INDIACEM",
     "companyName": "The India Cements Limited"
    },
    {
     "symbol": "KSB",
     "companyName": "Ksb Limited"
    },
    {
     "symbol": "CEATLTD",
     "companyName": "CEAT Limited"
    },
    {
     "symbol": "BORORENEW",
     "companyName": "BOROSIL RENEWABLES LIMITED"
    },
    {
     "symbol": "PRINCEPIPE",
     "companyName": "Prince Pipes And Fittings Limited"
    },
    {
     "symbol": "PGHL",
     "companyName": "Procter &amp; Gamble Health Limited"
    },
    {
     "symbol": "PRAJIND",
     "companyName": "Praj Industries Limited"
    },
    {
     "symbol": "ECLERX",
     "companyName": "eClerx Services Limited"
    },
    {
     "symbol": "ACI",
     "companyName": "Archean Chemical Industries Limited"
    },
    {
     "symbol": "GOCOLORS",
     "companyName": "Go Fashion (India) Limited"
    },
    {
     "symbol": "HOMEFIRST",
     "companyName": "Home First Finance Company India Limited"
    },
    {
     "symbol": "GARFIBRES",
     "companyName": "Garware Technical Fibres Limited"
    },
    {
     "symbol": "ESABINDIA",
     "companyName": "Esab India Limited"
    },
    {
     "symbol": "AMBER",
     "companyName": "Amber Enterprises India Limited"
    },
    {
     "symbol": "TV18BRDCST",
     "companyName": "TV18 Broadcast Limited"
    },
    {
     "symbol": "SCI",
     "companyName": "Shipping Corporation Of India Limited"
    },
    {
     "symbol": "SYMPHONY",
     "companyName": "Symphony Limited"
    },
    {
     "symbol": "BBTC",
     "companyName": "Bombay Burmah Trading Corporation Limited"
    },
    {
     "symbol": "WELCORP",
     "companyName": "Welspun Corp Limited"
    },
    {
     "symbol": "INDIGOPNTS",
     "companyName": "Indigo Paints Limited"
    },
    {
     "symbol": "BEML",
     "companyName": "BEML Limited"
    },
    {
     "symbol": "INOXLEISUR",
     "companyName": "INOX Leisure Limited"
    },
    {
     "symbol": "QUESS",
     "companyName": "Quess Corp Limited"
    },
    {
     "symbol": "JBMA",
     "companyName": "JBM Auto Limited"
    },
    {
     "symbol": "INGERRAND",
     "companyName": "Ingersoll Rand (India) Limited"
    },
    {
     "symbol": "INTELLECT",
     "companyName": "Intellect Design Arena Limited"
    },
    {
     "symbol": "EDELWEISS",
     "companyName": "Edelweiss Financial Services Limited"
    },
    {
     "symbol": "JUBLPHARMA",
     "companyName": "Jubilant Pharmova Limited"
    },
    {
     "symbol": "BCG",
     "companyName": "Brightcom Group Limited"
    },
    {
     "symbol": "GAEL",
     "companyName": "Gujarat Ambuja Exports Limited"
    },
    {
     "symbol": "RTNINDIA",
     "companyName": "RattanIndia Enterprises Limited"
    },
    {
     "symbol": "KFINTECH",
     "companyName": "Kfin Technologies Limited"
    },
    {
     "symbol": "SPARC",
     "companyName": "Sun Pharma Advanced Research Company Limited"
    },
    {
     "symbol": "RAIN",
     "companyName": "Rain Industries Limited"
    },
    {
     "symbol": "SIS",
     "companyName": "SIS LIMITED"
    },
    {
     "symbol": "DELTACORP",
     "companyName": "Delta Corp Limited"
    },
    {
     "symbol": "DATAPATTNS",
     "companyName": "Data Patterns (India) Limited"
    },
    {
     "symbol": "MMTC",
     "companyName": "MMTC Limited"
    },
    {
     "symbol": "UJJIVANSFB",
     "companyName": "Ujjivan Small Finance Bank Limited"
    },
    {
     "symbol": "GUJALKALI",
     "companyName": "Gujarat Alkalies and Chemicals Limited"
    },
    {
     "symbol": "RUSTOMJEE",
     "companyName": "Keystone Realtors Limited"
    },
    {
     "symbol": "MAHLIFE",
     "companyName": "Mahindra Lifespace Developers Limited"
    },
    {
     "symbol": "VMART",
     "companyName": "V-Mart Retail Limited"
    },
    {
     "symbol": "IRCON",
     "companyName": "Ircon International Limited"
    },
    {
     "symbol": "RELIGARE",
     "companyName": "Religare Enterprises Limited"
    },
    {
     "symbol": "ORIENTELEC",
     "companyName": "Orient Electric Limited"
    },
    {
     "symbol": "MAPMYINDIA",
     "companyName": "C.E. Info Systems Limited"
    },
    {
     "symbol": "GSFC",
     "companyName": "Gujarat State Fertilizers &amp; Chemicals Limited"
    },
    {
     "symbol": "GRSE",
     "companyName": "Garden Reach Shipbuilders &amp; Engineers Limited"
    },
    {
     "symbol": "RBA",
     "companyName": "Restaurant Brands Asia Limited"
    },
    {
     "symbol": "SOBHA",
     "companyName": "Sobha Limited"
    },
    {
     "symbol": "J&amp;KBANK",
     "companyName": "The Jammu &amp; Kashmir Bank Limited"
    },
    {
     "symbol": "EPL",
     "companyName": "EPL Limited"
    },
    {
     "symbol": "MHRIL",
     "companyName": "Mahindra Holidays &amp; Resorts India Limited"
    },
    {
     "symbol": "CAPLIPOINT",
     "companyName": "Caplin Point Laboratories Limited"
    },
    {
     "symbol": "NCC",
     "companyName": "NCC Limited"
    },
    {
     "symbol": "MAHSCOOTER",
     "companyName": "Maharashtra Scooters Limited"
    },
    {
     "symbol": "GPIL",
     "companyName": "Godawari Power And Ispat limited"
    },
    {
     "symbol": "PRSMJOHNSN",
     "companyName": "Prism Johnson Limited"
    },
    {
     "symbol": "AVANTIFEED",
     "companyName": "Avanti Feeds Limited"
    },
    {
     "symbol": "USHAMART",
     "companyName": "Usha Martin Limited"
    },
    {
     "symbol": "MFL",
     "companyName": "Meghmani Finechem Limited"
    },
    {
     "symbol": "JPPOWER",
     "companyName": "Jaiprakash Power Ventures Limited"
    },
    {
     "symbol": "GLS",
     "companyName": "Glenmark Life Sciences Limited"
    },
    {
     "symbol": "MASTEK",
     "companyName": "Mastek Limited"
    },
    {
     "symbol": "VAIBHAVGBL",
     "companyName": "Vaibhav Global Limited"
    },
    {
     "symbol": "VSTIND",
     "companyName": "VST Industries Limited"
    },
    {
     "symbol": "SWSOLAR",
     "companyName": "Sterling and Wilson Renewable Energy Limited"
    },
    {
     "symbol": "JUSTDIAL",
     "companyName": "Just Dial Limited"
    },
    {
     "symbol": "HIKAL",
     "companyName": "Hikal Limited"
    },
    {
     "symbol": "POLYPLEX",
     "companyName": "Polyplex Corporation Limited"
    },
    {
     "symbol": "MTARTECH",
     "companyName": "Mtar Technologies Limited"
    },
    {
     "symbol": "SYRMA",
     "companyName": "Syrma SGS Technology Limited"
    },
    {
     "symbol": "LUXIND",
     "companyName": "Lux Industries Limited"
    },
    {
     "symbol": "ROLEXRINGS",
     "companyName": "Rolex Rings Limited"
    },
    {
     "symbol": "PCBL",
     "companyName": "PCBL LIMITED"
    },
    {
     "symbol": "MINDACORP",
     "companyName": "Minda Corporation Limited"
    },
    {
     "symbol": "RPOWER",
     "companyName": "Reliance Power Limited"
    },
    {
     "symbol": "GHCL",
     "companyName": "GHCL Limited"
    },
    {
     "symbol": "GPPL",
     "companyName": "Gujarat Pipavav Port Limited"
    },
    {
     "symbol": "JSWHL",
     "companyName": "JSW Holdings Limited"
    },
    {
     "symbol": "SUNTECK",
     "companyName": "Sunteck Realty Limited"
    },
    {
     "symbol": "ZENSARTECH",
     "companyName": "Zensar Technologies Limited"
    },
    {
     "symbol": "CMSINFO",
     "companyName": "CMS Info Systems Limited"
    },
    {
     "symbol": "TCI",
     "companyName": "Transport Corporation of India Limited"
    },
    {
     "symbol": "PARADEEP",
     "companyName": "Paradeep Phosphates Limited"
    },
    {
     "symbol": "VRLLOG",
     "companyName": "VRL Logistics Limited"
    },
    {
     "symbol": "TATVA",
     "companyName": "Tatva Chintan Pharma Chem Limited"
    },
    {
     "symbol": "KTKBANK",
     "companyName": "The Karnataka Bank Limited"
    },
    {
     "symbol": "RALLIS",
     "companyName": "Rallis India Limited"
    },
    {
     "symbol": "KIRLOSENG",
     "companyName": "Kirloskar Oil Engines Limited"
    },
    {
     "symbol": "GMDCLTD",
     "companyName": "Gujarat Mineral Development Corporation Limited"
    },
    {
     "symbol": "SHARDACROP",
     "companyName": "Sharda Cropchem Limited"
    },
    {
     "symbol": "STARCEMENT",
     "companyName": "Star Cement Limited"
    },
    {
     "symbol": "ARVINDFASN",
     "companyName": "Arvind Fashions Limited"
    },
    {
     "symbol": "SUPRAJIT",
     "companyName": "Suprajit Engineering Limited"
    },
    {
     "symbol": "PDSL",
     "companyName": "PDS Limited"
    },
    {
     "symbol": "VARROC",
     "companyName": "Varroc Engineering Limited"
    },
    {
     "symbol": "JKTYRE",
     "companyName": "JK Tyre &amp; Industries Limited"
    },
    {
     "symbol": "RAJRATAN",
     "companyName": "Rajratan Global Wire Limited"
    },
    {
     "symbol": "FDC",
     "companyName": "FDC Limited"
    },
    {
     "symbol": "PRIVISCL",
     "companyName": "Privi Speciality Chemicals Limited"
    },
    {
     "symbol": "VIJAYA",
     "companyName": "Vijaya Diagnostic Centre Limited"
    },
    {
     "symbol": "INFIBEAM",
     "companyName": "Infibeam Avenues Limited"
    },
    {
     "symbol": "ENGINERSIN",
     "companyName": "Engineers India Limited"
    },
    {
     "symbol": "MASFIN",
     "companyName": "MAS Financial Services Limited"
    },
    {
     "symbol": "ICRA",
     "companyName": "ICRA Limited"
    },
    {
     "symbol": "IBREALEST",
     "companyName": "Indiabulls Real Estate Limited"
    },
    {
     "symbol": "KAYNES",
     "companyName": "Kaynes Technology India Limited"
    },
    {
     "symbol": "MAHSEAMLES",
     "companyName": "Maharashtra Seamless Limited"
    },
    {
     "symbol": "TEAMLEASE",
     "companyName": "Teamlease Services Limited"
    },
    {
     "symbol": "NESCO",
     "companyName": "Nesco Limited"
    },
    {
     "symbol": "EQUITAS",
     "companyName": "Equitas Holdings Limited"
    },
    {
     "symbol": "AARTIDRUGS",
     "companyName": "Aarti Drugs Limited"
    },
    {
     "symbol": "HEIDELBERG",
     "companyName": "HeidelbergCement India Limited"
    },
    {
     "symbol": "LAOPALA",
     "companyName": "La Opala RG Limited"
    },
    {
     "symbol": "HSCL",
     "companyName": "Himadri Speciality Chemical Limited"
    },
    {
     "symbol": "RKFORGE",
     "companyName": "Ramkrishna Forgings Limited"
    },
    {
     "symbol": "NIITLTD",
     "companyName": "NIIT Limited"
    },
    {
     "symbol": "JAMNAAUTO",
     "companyName": "Jamna Auto Industries Limited"
    },
    {
     "symbol": "SPANDANA",
     "companyName": "Spandana Sphoorty Financial Limited"
    },
    {
     "symbol": "BOROLTD",
     "companyName": "Borosil Limited"
    },
    {
     "symbol": "GREENPANEL",
     "companyName": "Greenpanel Industries Limited"
    },
    {
     "symbol": "BHARATRAS",
     "companyName": "Bharat Rasayan Limited"
    },
    {
     "symbol": "CSBBANK",
     "companyName": "CSB Bank Limited"
    },
    {
     "symbol": "PRUDENT",
     "companyName": "Prudent Corporate Advisory Services Limited"
    },
    {
     "symbol": "GREENLAM",
     "companyName": "Greenlam Industries Limited"
    },
    {
     "symbol": "ELECON",
     "companyName": "Elecon Engineering Company Limited"
    },
    {
     "symbol": "RAILTEL",
     "companyName": "Railtel Corporation Of India Limited"
    },
    {
     "symbol": "MIDHANI",
     "companyName": "Mishra Dhatu Nigam Limited"
    },
    {
     "symbol": "TATACOFFEE",
     "companyName": "Tata Coffee Limited"
    },
    {
     "symbol": "OLECTRA",
     "companyName": "Olectra Greentech Limited"
    },
    {
     "symbol": "UFLEX",
     "companyName": "UFLEX Limited"
    },
    {
     "symbol": "IONEXCHANG",
     "companyName": "ION Exchange (India) Limited"
    },
    {
     "symbol": "HGINFRA",
     "companyName": "H.G. Infra Engineering Limited"
    },
    {
     "symbol": "ROSSARI",
     "companyName": "Rossari Biotech Limited"
    },
    {
     "symbol": "HCG",
     "companyName": "Healthcare Global Enterprises Limited"
    },
    {
     "symbol": "SHAREINDIA",
     "companyName": "Share India Securities Limited"
    },
    {
     "symbol": "SAFARI",
     "companyName": "Safari Industries (India) Limited"
    },
    {
     "symbol": "HEG",
     "companyName": "HEG Limited"
    },
    {
     "symbol": "SCHNEIDER",
     "companyName": "Schneider Electric Infrastructure Limited"
    },
    {
     "symbol": "DCBBANK",
     "companyName": "DCB Bank Limited"
    },
    {
     "symbol": "SANSERA",
     "companyName": "Sansera Engineering Limited"
    },
    {
     "symbol": "SOUTHBANK",
     "companyName": "The South Indian Bank Limited"
    },
    {
     "symbol": "NOCIL",
     "companyName": "NOCIL Limited"
    },
    {
     "symbol": "PCJEWELLER",
     "companyName": "PC Jeweller Limited"
    },
    {
     "symbol": "TEGA",
     "companyName": "Tega Industries Limited"
    },
    {
     "symbol": "NAZARA",
     "companyName": "Nazara Technologies Limited"
    },
    {
     "symbol": "NFL",
     "companyName": "National Fertilizers Limited"
    },
    {
     "symbol": "BARBEQUE",
     "companyName": "Barbeque Nation Hospitality Limited"
    },
    {
     "symbol": "INDOCO",
     "companyName": "Indoco Remedies Limited"
    },
    {
     "symbol": "DAAWAT",
     "companyName": "LT Foods Limited"
    },
    {
     "symbol": "TARSONS",
     "companyName": "Tarsons Products Limited"
    },
    {
     "symbol": "JTEKTINDIA",
     "companyName": "Jtekt India Limited"
    },
    {
     "symbol": "SARDAEN",
     "companyName": "Sarda Energy &amp; Minerals Limited"
    },
    {
     "symbol": "FUSION",
     "companyName": "Fusion Micro Finance Limited"
    },
    {
     "symbol": "IFBIND",
     "companyName": "IFB Industries Limited"
    },
    {
     "symbol": "ANANTRAJ",
     "companyName": "Anant Raj Limited"
    },
    {
     "symbol": "RELINFRA",
     "companyName": "Reliance Infrastructure Limited"
    },
    {
     "symbol": "ACE",
     "companyName": "Action Construction Equipment Limited"
    },
    {
     "symbol": "MAHLOG",
     "companyName": "Mahindra Logistics Limited"
    },
    {
     "symbol": "TECHNOE",
     "companyName": "Techno Electric &amp; Engineering Company Limited"
    },
    {
     "symbol": "NAVA",
     "companyName": "NAVA LIMITED"
    },
    {
     "symbol": "JWL",
     "companyName": "Jupiter Wagons Limited"
    },
    {
     "symbol": "ISGEC",
     "companyName": "Isgec Heavy Engineering Limited"
    },
    {
     "symbol": "AMIORG",
     "companyName": "Ami Organics Limited"
    },
    {
     "symbol": "TINPLATE",
     "companyName": "The Tinplate Company of India Limited"
    },
    {
     "symbol": "BANARISUG",
     "companyName": "Bannari Amman Sugars Limited"
    },
    {
     "symbol": "JINDALPOLY",
     "companyName": "Jindal Poly Films Limited"
    },
    {
     "symbol": "HARSHA",
     "companyName": "Harsha Engineers International Limited"
    },
    {
     "symbol": "PAISALO",
     "companyName": "Paisalo Digital Limited"
    },
    {
     "symbol": "WSTCSTPAPR",
     "companyName": "West Coast Paper Mills Limited"
    },
    {
     "symbol": "ASTEC",
     "companyName": "Astec LifeSciences Limited"
    },
    {
     "symbol": "DISHTV",
     "companyName": "Dish TV India Limited"
    },
    {
     "symbol": "GATEWAY",
     "companyName": "Gateway Distriparks Limited"
    },
    {
     "symbol": "UJJIVAN",
     "companyName": "Ujjivan Financial Services Limited"
    },
    {
     "symbol": "THOMASCOOK",
     "companyName": "Thomas Cook  (India)  Limited"
    },
    {
     "symbol": "DHANUKA",
     "companyName": "Dhanuka Agritech Limited"
    },
    {
     "symbol": "EMIL",
     "companyName": "Electronics Mart India Limited"
    },
    {
     "symbol": "JINDALSAW",
     "companyName": "Jindal Saw Limited"
    },
    {
     "symbol": "MOIL",
     "companyName": "MOIL Limited"
    },
    {
     "symbol": "THYROCARE",
     "companyName": "Thyrocare Technologies Limited"
    },
    {
     "symbol": "VESUVIUS",
     "companyName": "Vesuvius India Limited"
    },
    {
     "symbol": "GREAVESCOT",
     "companyName": "Greaves Cotton Limited"
    },
    {
     "symbol": "TCNSBRANDS",
     "companyName": "TCNS Clothing Co. Limited"
    },
    {
     "symbol": "WOCKPHARMA",
     "companyName": "Wockhardt Limited"
    },
    {
     "symbol": "HINDWAREAP",
     "companyName": "Hindware Home Innovation Limited"
    },
    {
     "symbol": "DBREALTY",
     "companyName": "D B Realty Limited"
    },
    {
     "symbol": "AHLUCONT",
     "companyName": "Ahluwalia Contracts (India) Limited"
    },
    {
     "symbol": "DBL",
     "companyName": "Dilip Buildcon Limited"
    },
    {
     "symbol": "KKCL",
     "companyName": "Kewal Kiran Clothing Limited"
    },
    {
     "symbol": "STAR",
     "companyName": "Strides Pharma Science Limited"
    },
    {
     "symbol": "ADVENZYMES",
     "companyName": "Advanced Enzyme Technologies Limited"
    },
    {
     "symbol": "RESPONIND",
     "companyName": "Responsive Industries Limited"
    },
    {
     "symbol": "MOLDTKPAC",
     "companyName": "Mold-Tek Packaging Limited"
    },
    {
     "symbol": "NEOGEN",
     "companyName": "Neogen Chemicals Limited"
    },
    {
     "symbol": "GRAVITA",
     "companyName": "Gravita India Limited"
    },
    {
     "symbol": "RATEGAIN",
     "companyName": "Rategain Travel Technologies Limited"
    },
    {
     "symbol": "DALMIASUG",
     "companyName": "Dalmia Bharat Sugar and Industries Limited"
    },
    {
     "symbol": "CHENNPETRO",
     "companyName": "Chennai Petroleum Corporation Limited"
    },
    {
     "symbol": "HEMIPROP",
     "companyName": "Hemisphere Properties India Limited"
    },
    {
     "symbol": "HATHWAY",
     "companyName": "Hathway Cable &amp; Datacom Limited"
    },
    {
     "symbol": "TATASTLLP",
     "companyName": "Tata Steel Long Products Limited"
    },
    {
     "symbol": "SAGCEM",
     "companyName": "Sagar Cements Limited"
    },
    {
     "symbol": "ITDC",
     "companyName": "India Tourism Development Corporation Limited"
    },
    {
     "symbol": "HCC",
     "companyName": "Hindustan Construction Company Limited"
    },
    {
     "symbol": "IFCI",
     "companyName": "IFCI Limited"
    },
    {
     "symbol": "KSCL",
     "companyName": "Kaveri Seed Company Limited"
    },
    {
     "symbol": "INOXWIND",
     "companyName": "Inox Wind Limited"
    },
    {
     "symbol": "DODLA",
     "companyName": "Dodla Dairy Limited"
    },
    {
     "symbol": "RSYSTEMS",
     "companyName": "R Systems International Limited"
    },
    {
     "symbol": "JCHAC",
     "companyName": "Johnson Controls - Hitachi Air Conditioning India Limited"
    },
    {
     "symbol": "AUTOAXLES",
     "companyName": "Automotive Axles Limited"
    },
    {
     "symbol": "MIRZAINT",
     "companyName": "Mirza International Limited"
    },
    {
     "symbol": "GET&amp;D",
     "companyName": "GE T&amp;D India Limited"
    },
    {
     "symbol": "POWERMECH",
     "companyName": "Power Mech Projects Limited"
    },
    {
     "symbol": "MAITHANALL",
     "companyName": "Maithan Alloys Limited"
    },
    {
     "symbol": "VAKRANGEE",
     "companyName": "Vakrangee Limited"
    },
    {
     "symbol": "HBLPOWER",
     "companyName": "HBL Power Systems Limited"
    },
    {
     "symbol": "ANANDRATHI",
     "companyName": "Anand Rathi Wealth Limited"
    },
    {
     "symbol": "GANESHHOUC",
     "companyName": "Ganesh Housing Corporation Limited"
    },
    {
     "symbol": "IPL",
     "companyName": "India Pesticides Limited"
    },
    {
     "symbol": "NAVNETEDUL",
     "companyName": "Navneet Education Limited"
    },
    {
     "symbol": "MOL",
     "companyName": "Meghmani Organics Limited"
    },
    {
     "symbol": "NILKAMAL",
     "companyName": "Nilkamal Limited"
    },
    {
     "symbol": "VOLTAMP",
     "companyName": "Voltamp Transformers Limited"
    },
    {
     "symbol": "BUTTERFLY",
     "companyName": "Butterfly Gandhimathi Appliances Limited"
    },
    {
     "symbol": "FCL",
     "companyName": "Fineotex Chemical Limited"
    },
    {
     "symbol": "SULA",
     "companyName": "Sula Vineyards Limited"
    },
    {
     "symbol": "MANINFRA",
     "companyName": "Man Infraconstruction Limited"
    },
    {
     "symbol": "SUDARSCHEM",
     "companyName": "Sudarshan Chemical Industries Limited"
    },
    {
     "symbol": "TASTYBITE",
     "companyName": "Tasty Bite Eatables Limited"
    },
    {
     "symbol": "VENKEYS",
     "companyName": "Venky's (India) Limited"
    },
    {
     "symbol": "TWL",
     "companyName": "Titagarh Wagons Limited"
    },
    {
     "symbol": "GABRIEL",
     "companyName": "Gabriel India Limited"
    },
    {
     "symbol": "JAICORPLTD",
     "companyName": "Jai Corp Limited"
    },
    {
     "symbol": "SURYAROSNI",
     "companyName": "Surya Roshni Limited"
    },
    {
     "symbol": "ICIL",
     "companyName": "Indo Count Industries Limited"
    },
    {
     "symbol": "SHANTIGEAR",
     "companyName": "Shanthi Gears Limited"
    },
    {
     "symbol": "OPTIEMUS",
     "companyName": "Optiemus Infracom Limited"
    },
    {
     "symbol": "EVEREADY",
     "companyName": "Eveready Industries India Limited"
    },
    {
     "symbol": "UNIPARTS",
     "companyName": "Uniparts India Limited"
    },
    {
     "symbol": "GRMOVER",
     "companyName": "GRM Overseas Limited"
    },
    {
     "symbol": "KIRLOSBROS",
     "companyName": "Kirloskar Brothers Limited"
    },
    {
     "symbol": "SHRIPISTON",
     "companyName": "Shriram Pistons &amp; Rings Limited"
    },
    {
     "symbol": "TATAMETALI",
     "companyName": "Tata Metaliks Limited"
    },
    {
     "symbol": "PSPPROJECT",
     "companyName": "PSP Projects Limited"
    },
    {
     "symbol": "ORIENTCEM",
     "companyName": "Orient Cement Limited"
    },
    {
     "symbol": "NEWGEN",
     "companyName": "Newgen Software Technologies Limited"
    },
    {
     "symbol": "ASHOKA",
     "companyName": "Ashoka Buildcon Limited"
    },
    {
     "symbol": "CAMLINFINE",
     "companyName": "Camlin Fine Sciences Limited"
    },
    {
     "symbol": "DHANI",
     "companyName": "Dhani Services Limited"
    },
    {
     "symbol": "WELENT",
     "companyName": "Welspun Enterprises Limited"
    },
    {
     "symbol": "SSWL",
     "companyName": "Steel Strips Wheels Limited"
    },
    {
     "symbol": "CHOICEIN",
     "companyName": "Choice International Limited"
    },
    {
     "symbol": "ASTRAMICRO",
     "companyName": "Astra Microwave Products Limited"
    },
    {
     "symbol": "EMUDHRA",
     "companyName": "eMudhra Limited"
    },
    {
     "symbol": "BECTORFOOD",
     "companyName": "Mrs. Bectors Food Specialities Limited"
    },
    {
     "symbol": "SIYSIL",
     "companyName": "Siyaram Silk Mills Limited"
    },
    {
     "symbol": "JPASSOCIAT",
     "companyName": "Jaiprakash Associates Limited"
    },
    {
     "symbol": "BAJAJCON",
     "companyName": "Bajaj Consumer Care Limited"
    },
    {
     "symbol": "KIRIINDUS",
     "companyName": "Kiri Industries Limited"
    },
    {
     "symbol": "JAYNECOIND",
     "companyName": "Jayaswal Neco Industries Limited"
    },
    {
     "symbol": "GLOBUSSPR",
     "companyName": "Globus Spirits Limited"
    },
    {
     "symbol": "APCOTEXIND",
     "companyName": "Apcotex Industries Limited"
    },
    {
     "symbol": "SHILPAMED",
     "companyName": "Shilpa Medicare Limited"
    },
    {
     "symbol": "PGEL",
     "companyName": "PG Electroplast Limited"
    },
    {
     "symbol": "PTC",
     "companyName": "PTC India Limited"
    },
    {
     "symbol": "MBAPL",
     "companyName": "Madhya Bharat Agro Products Limited"
    },
    {
     "symbol": "DOLLAR",
     "companyName": "Dollar Industries Limited"
    },
    {
     "symbol": "BSHSL",
     "companyName": "Bombay Super Hybrid Seeds Limited"
    },
    {
     "symbol": "ETHOSLTD",
     "companyName": "Ethos Limited"
    },
    {
     "symbol": "INDIAGLYCO",
     "companyName": "India Glycols Limited"
    },
    {
     "symbol": "TVSSRICHAK",
     "companyName": "TVS Srichakra Limited"
    },
    {
     "symbol": "MARKSANS",
     "companyName": "Marksans Pharma Limited"
    },
    {
     "symbol": "PARAS",
     "companyName": "Paras Defence and Space Technologies Limited"
    },
    {
     "symbol": "SBCL",
     "companyName": "Shivalik Bimetal Controls Limited"
    },
    {
     "symbol": "ARVIND",
     "companyName": "Arvind Limited"
    },
    {
     "symbol": "PRICOLLTD",
     "companyName": "Pricol Limited"
    },
    {
     "symbol": "DFMFOODS",
     "companyName": "DFM Foods Limited"
    },
    {
     "symbol": "JMCPROJECT",
     "companyName": "JMC Projects (India)  Limited"
    },
    {
     "symbol": "TIPSINDLTD",
     "companyName": "TIPS Industries Limited"
    },
    {
     "symbol": "ELECTCAST",
     "companyName": "Electrosteel Castings Limited"
    },
    {
     "symbol": "FIEMIND",
     "companyName": "Fiem Industries Limited"
    },
    {
     "symbol": "HONDAPOWER",
     "companyName": "Honda India Power Products Limited"
    },
    {
     "symbol": "SEAMECLTD",
     "companyName": "Seamec Limited"
    },
    {
     "symbol": "BBOX",
     "companyName": "Black Box Limited"
    },
    {
     "symbol": "RUPA",
     "companyName": "Rupa &amp; Company Limited"
    },
    {
     "symbol": "NDTV",
     "companyName": "New Delhi Television Limited"
    },
    {
     "symbol": "UNICHEMLAB",
     "companyName": "Unichem Laboratories Limited"
    },
    {
     "symbol": "TIIL",
     "companyName": "Technocraft Industries (India) Limited"
    },
    {
     "symbol": "PFOCUS",
     "companyName": "Prime Focus Limited"
    },
    {
     "symbol": "CONFIPET",
     "companyName": "Confidence Petroleum India Limited"
    },
    {
     "symbol": "GOKEX",
     "companyName": "Gokaldas Exports Limited"
    },
    {
     "symbol": "INSECTICID",
     "companyName": "Insecticides (India) Limited"
    },
    {
     "symbol": "MAXVIL",
     "companyName": "Max Ventures and Industries Limited"
    },
    {
     "symbol": "BAJAJHIND",
     "companyName": "Bajaj Hindusthan Sugar Limited"
    },
    {
     "symbol": "GUFICBIO",
     "companyName": "Gufic Biosciences Limited"
    },
    {
     "symbol": "SHARDAMOTR",
     "companyName": "Sharda Motor Industries Limited"
    },
    {
     "symbol": "CARTRADE",
     "companyName": "Cartrade Tech Limited"
    },
    {
     "symbol": "IOLCP",
     "companyName": "IOL Chemicals and Pharmaceuticals Limited"
    },
    {
     "symbol": "DBCORP",
     "companyName": "D.B.Corp Limited"
    },
    {
     "symbol": "SEQUENT",
     "companyName": "Sequent Scientific Limited"
    },
    {
     "symbol": "PURVA",
     "companyName": "Puravankara Limited"
    },
    {
     "symbol": "GENUSPOWER",
     "companyName": "Genus Power Infrastructures Limited"
    },
    {
     "symbol": "DCXINDIA",
     "companyName": "DCX Systems Limited"
    },
    {
     "symbol": "ACCELYA",
     "companyName": "Accelya Solutions India Limited"
    },
    {
     "symbol": "LGBBROSLTD",
     "companyName": "LG Balakrishnan &amp; Bros Limited"
    },
    {
     "symbol": "NEULANDLAB",
     "companyName": "Neuland Laboratories Limited"
    },
    {
     "symbol": "BALMLAWRIE",
     "companyName": "Balmer Lawrie &amp; Company Limited"
    },
    {
     "symbol": "DIAMONDYD",
     "companyName": "Prataap Snacks Limited"
    },
    {
     "symbol": "RTNPOWER",
     "companyName": "RattanIndia Power Limited"
    },
    {
     "symbol": "PILANIINVS",
     "companyName": "Pilani Investment and Industries Corporation Limited"
    },
    {
     "symbol": "KOLTEPATIL",
     "companyName": "Kolte - Patil Developers Limited"
    },
    {
     "symbol": "AGI",
     "companyName": "AGI Greenpac Limited"
    },
    {
     "symbol": "FINOPB",
     "companyName": "Fino Payments Bank Limited"
    },
    {
     "symbol": "PANAMAPET",
     "companyName": "Panama Petrochem Limited"
    },
    {
     "symbol": "SUNDARMHLD",
     "companyName": "Sundaram Finance Holdings Limited"
    },
    {
     "symbol": "COSMOFIRST",
     "companyName": "COSMO FIRST LIMITED"
    },
    {
     "symbol": "SOTL",
     "companyName": "Savita Oil Technologies Limited"
    },
    {
     "symbol": "AMRUTANJAN",
     "companyName": "Amrutanjan Health Care Limited"
    },
    {
     "symbol": "GULFOILLUB",
     "companyName": "Gulf Oil Lubricants India Limited"
    },
    {
     "symbol": "NACLIND",
     "companyName": "NACL Industries Limited"
    },
    {
     "symbol": "TIRUMALCHM",
     "companyName": "Thirumalai Chemicals Limited"
    },
    {
     "symbol": "MSTCLTD",
     "companyName": "Mstc Limited"
    },
    {
     "symbol": "JKIL",
     "companyName": "J.Kumar Infraprojects Limited"
    },
    {
     "symbol": "ITDCEM",
     "companyName": "ITD Cementation India Limited"
    },
    {
     "symbol": "ATFL",
     "companyName": "Agro Tech Foods Limited"
    },
    {
     "symbol": "FILATEX",
     "companyName": "Filatex India Limited"
    },
    {
     "symbol": "WABAG",
     "companyName": "VA Tech Wabag Limited"
    },
    {
     "symbol": "APOLLOPIPE",
     "companyName": "Apollo Pipes Limited"
    },
    {
     "symbol": "TIMETECHNO",
     "companyName": "Time Technoplast Limited"
    },
    {
     "symbol": "JISLJALEQS",
     "companyName": "Jain Irrigation Systems Limited"
    },
    {
     "symbol": "SUNFLAG",
     "companyName": "Sunflag Iron And Steel Company Limited"
    },
    {
     "symbol": "GANECOS",
     "companyName": "Ganesha Ecosphere Limited"
    },
    {
     "symbol": "SOMANYCERA",
     "companyName": "Somany Ceramics Limited"
    },
    {
     "symbol": "HERANBA",
     "companyName": "Heranba Industries Limited"
    },
    {
     "symbol": "MMFL",
     "companyName": "MM Forgings Limited"
    },
    {
     "symbol": "DWARKESH",
     "companyName": "Dwarikesh Sugar Industries Limited"
    },
    {
     "symbol": "RAMKY",
     "companyName": "Ramky Infrastructure Limited"
    },
    {
     "symbol": "MUKANDLTD",
     "companyName": "Mukand Limited"
    },
    {
     "symbol": "SHK",
     "companyName": "S H Kelkar and Company Limited"
    },
    {
     "symbol": "HIL",
     "companyName": "HIL Limited"
    },
    {
     "symbol": "IIFLSEC",
     "companyName": "IIFL Securities Limited"
    },
    {
     "symbol": "SUBROS",
     "companyName": "Subros Limited"
    },
    {
     "symbol": "RILINFRA",
     "companyName": "Rachana Infrastructure Limited"
    },
    {
     "symbol": "CANTABIL",
     "companyName": "Cantabil Retail India Limited"
    },
    {
     "symbol": "MOREPENLAB",
     "companyName": "Morepen Laboratories Limited"
    },
    {
     "symbol": "WONDERLA",
     "companyName": "Wonderla Holidays Limited"
    },
    {
     "symbol": "INDOSTAR",
     "companyName": "IndoStar Capital Finance Limited"
    },
    {
     "symbol": "JAGRAN",
     "companyName": "Jagran Prakashan Limited"
    },
    {
     "symbol": "STYLAMIND",
     "companyName": "Stylam Industries Limited"
    },
    {
     "symbol": "SUBEXLTD",
     "companyName": "Subex Limited"
    },
    {
     "symbol": "DREAMFOLKS",
     "companyName": "Dreamfolks Services Limited"
    },
    {
     "symbol": "VSTTILLERS",
     "companyName": "V.S.T Tillers Tractors Limited"
    },
    {
     "symbol": "VINDHYATEL",
     "companyName": "Vindhya Telelinks Limited"
    },
    {
     "symbol": "SUPRIYA",
     "companyName": "Supriya Lifescience Limited"
    },
    {
     "symbol": "KIRLOSIND",
     "companyName": "Kirloskar Industries Limited"
    },
    {
     "symbol": "VADILALIND",
     "companyName": "Vadilal Industries Limited"
    },
    {
     "symbol": "TI",
     "companyName": "Tilaknagar Industries Limited"
    },
    {
     "symbol": "SWARAJENG",
     "companyName": "Swaraj Engines Limited"
    },
    {
     "symbol": "GATI",
     "companyName": "GATI Limited"
    },
    {
     "symbol": "KESORAMIND",
     "companyName": "Kesoram Industries Limited"
    },
    {
     "symbol": "TDPOWERSYS",
     "companyName": "TD Power Systems Limited"
    },
    {
     "symbol": "SIRCA",
     "companyName": "Sirca Paints India Limited"
    },
    {
     "symbol": "LANDMARK",
     "companyName": "Landmark Cars Limited"
    },
    {
     "symbol": "ALEMBICLTD",
     "companyName": "Alembic Limited"
    },
    {
     "symbol": "TEXRAIL",
     "companyName": "Texmaco Rail &amp; Engineering Limited"
    },
    {
     "symbol": "HINDOILEXP",
     "companyName": "Hindustan Oil Exploration Company Limited"
    },
    {
     "symbol": "GOCLCORP",
     "companyName": "GOCL Corporation Limited"
    },
    {
     "symbol": "MAYURUNIQ",
     "companyName": "Mayur Uniquoters Ltd"
    },
    {
     "symbol": "ANDHRSUGAR",
     "companyName": "The Andhra Sugars Limited"
    },
    {
     "symbol": "VIDHIING",
     "companyName": "Vidhi Specialty Food Ingredients Limited"
    },
    {
     "symbol": "CARERATING",
     "companyName": "CARE Ratings Limited"
    },
    {
     "symbol": "VISHNU",
     "companyName": "Vishnu Chemicals Limited"
    },
    {
     "symbol": "GOKULAGRO",
     "companyName": "Gokul Agro Resources Limited"
    },
    {
     "symbol": "BEPL",
     "companyName": "Bhansali Engineering Polymers Limited"
    },
    {
     "symbol": "SPIC",
     "companyName": "Southern Petrochemicals Industries Corporation  Limited"
    },
    {
     "symbol": "GREENPLY",
     "companyName": "Greenply Industries Limited"
    },
    {
     "symbol": "SESHAPAPER",
     "companyName": "Seshasayee Paper and Boards Limited"
    },
    {
     "symbol": "SANGHIIND",
     "companyName": "Sanghi Industries Limited"
    },
    {
     "symbol": "FMGOETZE",
     "companyName": "Federal-Mogul Goetze (India) Limited."
    },
    {
     "symbol": "ORISSAMINE",
     "companyName": "The Orissa Minerals Development Company Limited"
    },
    {
     "symbol": "TIDEWATER",
     "companyName": "Tide Water Oil Company (India) Limited"
    },
    {
     "symbol": "FAIRCHEMOR",
     "companyName": "Fairchem Organics Limited"
    },
    {
     "symbol": "ADFFOODS",
     "companyName": "ADF Foods Limited"
    },
    {
     "symbol": "GENESYS",
     "companyName": "Genesys International Corporation Limited"
    },
    {
     "symbol": "ANDHRAPAP",
     "companyName": "ANDHRA PAPER LIMITED"
    },
    {
     "symbol": "STOVEKRAFT",
     "companyName": "Stove Kraft Limited"
    },
    {
     "symbol": "HERITGFOOD",
     "companyName": "Heritage Foods Limited"
    },
    {
     "symbol": "DEN",
     "companyName": "Den Networks Limited"
    },
    {
     "symbol": "DHAMPURSUG",
     "companyName": "Dhampur Sugar Mills Limited"
    },
    {
     "symbol": "MTNL",
     "companyName": "Mahanagar Telephone Nigam Limited"
    },
    {
     "symbol": "BOMDYEING",
     "companyName": "Bombay Dyeing &amp; Mfg Company Limited"
    },
    {
     "symbol": "DATAMATICS",
     "companyName": "Datamatics Global Services Limited"
    },
    {
     "symbol": "LUMAXTECH",
     "companyName": "Lumax Auto Technologies Limited"
    },
    {
     "symbol": "SALASAR",
     "companyName": "Salasar Techno Engineering Limited"
    },
    {
     "symbol": "SHALBY",
     "companyName": "Shalby Limited"
    },
    {
     "symbol": "AVTNPL",
     "companyName": "AVT Natural Products Limited"
    },
    {
     "symbol": "NELCO",
     "companyName": "NELCO Limited"
    },
    {
     "symbol": "TNPL",
     "companyName": "Tamil Nadu Newsprint &amp; Papers Limited"
    },
    {
     "symbol": "HMT",
     "companyName": "HMT Limited"
    },
    {
     "symbol": "VALIANTORG",
     "companyName": "Valiant Organics Limited"
    },
    {
     "symbol": "ISMTLTD",
     "companyName": "ISMT Limited"
    },
    {
     "symbol": "LSIL",
     "companyName": "Lloyds Steels Industries Limited"
    },
    {
     "symbol": "IGPL",
     "companyName": "IG Petrochemicals Limited"
    },
    {
     "symbol": "LUMAXIND",
     "companyName": "Lumax Industries Limited"
    },
    {
     "symbol": "KPIGREEN",
     "companyName": "KPI Green Energy Limited"
    },
    {
     "symbol": "KSL",
     "companyName": "Kalyani Steels Limited"
    },
    {
     "symbol": "GTPL",
     "companyName": "GTPL Hathway Limited"
    },
    {
     "symbol": "KINGFA",
     "companyName": "Kingfa Science &amp; Technology (India) Limited"
    },
    {
     "symbol": "KABRAEXTRU",
     "companyName": "Kabra Extrusion Technik Limited"
    },
    {
     "symbol": "INDORAMA",
     "companyName": "Indo Rama Synthetics (India) Limited"
    },
    {
     "symbol": "SOLARA",
     "companyName": "Solara Active Pharma Sciences Limited"
    },
    {
     "symbol": "DYNAMATECH",
     "companyName": "Dynamatic Technologies Limited"
    },
    {
     "symbol": "JSWISPL",
     "companyName": "JSW Ispat Special Products Limited"
    },
    {
     "symbol": "SPCENET",
     "companyName": "Spacenet Enterprises India Limited"
    },
    {
     "symbol": "SHANKARA",
     "companyName": "Shankara Building Products Limited"
    },
    {
     "symbol": "GRWRHITECH",
     "companyName": "Garware Hi-Tech Films Limited"
    },
    {
     "symbol": "IMAGICAA",
     "companyName": "Imagicaaworld Entertainment Limited"
    },
    {
     "symbol": "HESTERBIO",
     "companyName": "Hester Biosciences Limited"
    },
    {
     "symbol": "GTLINFRA",
     "companyName": "GTL Infrastructure Limited"
    },
    {
     "symbol": "VERANDA",
     "companyName": "Veranda Learning Solutions Limited"
    },
    {
     "symbol": "DCW",
     "companyName": "DCW Limited"
    },
    {
     "symbol": "HUHTAMAKI",
     "companyName": "Huhtamaki India Limited"
    },
    {
     "symbol": "THANGAMAYL",
     "companyName": "Thangamayil Jewellery Limited"
    },
    {
     "symbol": "SJS",
     "companyName": "S.J.S. Enterprises Limited"
    },
    {
     "symbol": "GALLANTT",
     "companyName": "Gallantt Ispat Limited"
    },
    {
     "symbol": "SUVEN",
     "companyName": "Suven Life Sciences Limited"
    },
    {
     "symbol": "DCAL",
     "companyName": "Dishman Carbogen Amcis Limited"
    },
    {
     "symbol": "ORCHPHARMA",
     "companyName": "Orchid Pharma Limited"
    },
    {
     "symbol": "WENDT",
     "companyName": "Wendt (India) Limited"
    },
    {
     "symbol": "NRBBEARING",
     "companyName": "NRB Bearing Limited"
    },
    {
     "symbol": "GOLDIAM",
     "companyName": "Goldiam International Limited"
    },
    {
     "symbol": "KCP",
     "companyName": "KCP Limited"
    },
    {
     "symbol": "ZENTEC",
     "companyName": "Zen Technologies Limited"
    },
    {
     "symbol": "ARVSMART",
     "companyName": "Arvind SmartSpaces Limited"
    },
    {
     "symbol": "TVTODAY",
     "companyName": "TV Today Network Limited"
    },
    {
     "symbol": "BFUTILITIE",
     "companyName": "BF Utilities Limited"
    },
    {
     "symbol": "SHAILY",
     "companyName": "Shaily Engineering Plastics Limited"
    },
    {
     "symbol": "VENUSPIPES",
     "companyName": "Venus Pipes &amp; Tubes Limited"
    },
    {
     "symbol": "KRSNAA",
     "companyName": "Krsnaa Diagnostics Limited"
    },
    {
     "symbol": "GNA",
     "companyName": "GNA Axles Limited"
    },
    {
     "symbol": "REPCOHOME",
     "companyName": "Repco Home Finance Limited"
    },
    {
     "symbol": "CIGNITITEC",
     "companyName": "Cigniti Technologies Limited"
    },
    {
     "symbol": "EXCELINDUS",
     "companyName": "Excel Industries Limited"
    },
    {
     "symbol": "MONTECARLO",
     "companyName": "Monte Carlo Fashions Limited"
    },
    {
     "symbol": "BANCOINDIA",
     "companyName": "Banco Products (I) Limited"
    },
    {
     "symbol": "ALICON",
     "companyName": "Alicon Castalloy Limited"
    },
    {
     "symbol": "RIIL",
     "companyName": "Reliance Industrial Infrastructure Limited"
    },
    {
     "symbol": "IMFA",
     "companyName": "Indian Metals &amp; Ferro Alloys Limited"
    },
    {
     "symbol": "TTKHLTCARE",
     "companyName": "TTK Healthcare Limited"
    },
    {
     "symbol": "MPSLTD",
     "companyName": "MPS Limited"
    },
    {
     "symbol": "OAL",
     "companyName": "Oriental Aromatics Limited"
    },
    {
     "symbol": "SANGHVIMOV",
     "companyName": "Sanghvi Movers Limited"
    },
    {
     "symbol": "MANALIPETC",
     "companyName": "Manali Petrochemicals Limited"
    },
    {
     "symbol": "RPGLIFE",
     "companyName": "RPG Life Sciences Limited"
    },
    {
     "symbol": "ASHIANA",
     "companyName": "Ashiana Housing Limited"
    },
    {
     "symbol": "INOXGREEN",
     "companyName": "Inox Green Energy Services Limited"
    },
    {
     "symbol": "RAMASTEEL",
     "companyName": "Rama Steel Tubes Limited"
    },
    {
     "symbol": "GMRP&amp;UI",
     "companyName": "GMR Power and Urban Infra Limited"
    },
    {
     "symbol": "TCPLPACK",
     "companyName": "TCPL Packaging Limited"
    },
    {
     "symbol": "RAMCOIND",
     "companyName": "Ramco Industries Limited"
    },
    {
     "symbol": "PUNJABCHEM",
     "companyName": "Punjab Chemicals &amp; Crop Protection Limited"
    },
    {
     "symbol": "WHEELS",
     "companyName": "Wheels India Limited"
    },
    {
     "symbol": "BBL",
     "companyName": "Bharat Bijlee Limited"
    },
    {
     "symbol": "SEPC",
     "companyName": "SEPC Limited"
    },
    {
     "symbol": "INEOSSTYRO",
     "companyName": "INEOS Styrolution India Limited"
    },
    {
     "symbol": "SASKEN",
     "companyName": "Sasken Technologies Limited"
    },
    {
     "symbol": "APTECHT",
     "companyName": "Aptech Limited"
    },
    {
     "symbol": "SANDHAR",
     "companyName": "Sandhar Technologies Limited"
    },
    {
     "symbol": "BHAGCHEM",
     "companyName": "Bhagiradha Chemicals &amp; Industries Limited"
    },
    {
     "symbol": "OMAXE",
     "companyName": "Omaxe Limited"
    },
    {
     "symbol": "DBOL",
     "companyName": "Dhampur Bio Organics Limited"
    },
    {
     "symbol": "KDDL",
     "companyName": "KDDL Limited"
    },
    {
     "symbol": "RPSGVENT",
     "companyName": "RPSG VENTURES LIMITED"
    },
    {
     "symbol": "SATIA",
     "companyName": "Satia Industries Limited"
    },
    {
     "symbol": "GULPOLY",
     "companyName": "Gulshan Polyols Limited"
    },
    {
     "symbol": "ORIENTHOT",
     "companyName": "Oriental Hotels Limited"
    },
    {
     "symbol": "MATRIMONY",
     "companyName": "Matrimony.Com Limited"
    },
    {
     "symbol": "SKIPPER",
     "companyName": "Skipper Limited"
    },
    {
     "symbol": "SAKSOFT",
     "companyName": "Saksoft Limited"
    },
    {
     "symbol": "SURYODAY",
     "companyName": "Suryoday Small Finance Bank Limited"
    },
    {
     "symbol": "TAJGVK",
     "companyName": "Taj GVK Hotels &amp; Resorts Limited"
    },
    {
     "symbol": "RANEHOLDIN",
     "companyName": "Rane Holdings Limited"
    },
    {
     "symbol": "EIHAHOTELS",
     "companyName": "EIH Associated Hotels Limited"
    },
    {
     "symbol": "KITEX",
     "companyName": "Kitex Garments Limited"
    },
    {
     "symbol": "INFOBEAN",
     "companyName": "InfoBeans Technologies Limited"
    },
    {
     "symbol": "DPSCLTD",
     "companyName": "DPSC Limited"
    },
    {
     "symbol": "KUANTUM",
     "companyName": "Kuantum Papers Limited"
    },
    {
     "symbol": "KRISHANA",
     "companyName": "Krishana Phoschem Limited"
    },
    {
     "symbol": "SHRIRAMPPS",
     "companyName": "Shriram Properties Limited"
    },
    {
     "symbol": "IGARASHI",
     "companyName": "Igarashi Motors India Limited"
    },
    {
     "symbol": "CARYSIL",
     "companyName": "CARYSIL LIMITED"
    },
    {
     "symbol": "MADRASFERT",
     "companyName": "Madras Fertilizers Limited"
    },
    {
     "symbol": "PRECWIRE",
     "companyName": "Precision Wires India Limited"
    },
    {
     "symbol": "GIPCL",
     "companyName": "Gujarat Industries Power Company Limited"
    },
    {
     "symbol": "THEMISMED",
     "companyName": "Themis Medicare Limited"
    },
    {
     "symbol": "TARC",
     "companyName": "TARC Limited"
    },
    {
     "symbol": "VSSL",
     "companyName": "Vardhman Special Steels Limited"
    },
    {
     "symbol": "SATIN",
     "companyName": "Satin Creditcare Network Limited"
    },
    {
     "symbol": "FOSECOIND",
     "companyName": "Foseco India Limited"
    },
    {
     "symbol": "EVERESTIND",
     "companyName": "Everest Industries Limited"
    },
    {
     "symbol": "EXPLEOSOL",
     "companyName": "Expleo Solutions Limited"
    },
    {
     "symbol": "BAJAJHCARE",
     "companyName": "Bajaj Healthcare Limited"
    },
    {
     "symbol": "ARMANFIN",
     "companyName": "Arman Financial Services Limited"
    },
    {
     "symbol": "MANORAMA",
     "companyName": "Manorama Industries Limited"
    },
    {
     "symbol": "STEELXIND",
     "companyName": "STEEL EXCHANGE INDIA LIMITED"
    },
    {
     "symbol": "THEJO",
     "companyName": "Thejo Engineering Limited"
    },
    {
     "symbol": "PARAGMILK",
     "companyName": "Parag Milk Foods Limited"
    },
    {
     "symbol": "XPROINDIA",
     "companyName": "Xpro India Limited"
    },
    {
     "symbol": "POKARNA",
     "companyName": "Pokarna Limited"
    },
    {
     "symbol": "PIXTRANS",
     "companyName": "Pix Transmissions Limited"
    },
    {
     "symbol": "ROSSELLIND",
     "companyName": "Rossell India Limited"
    },
    {
     "symbol": "NSIL",
     "companyName": "Nalwa Sons Investments Limited"
    },
    {
     "symbol": "UGARSUGAR",
     "companyName": "The Ugar Sugar Works Limited"
    },
    {
     "symbol": "ADORWELD",
     "companyName": "Ador Welding Limited"
    },
    {
     "symbol": "PNBGILTS",
     "companyName": "PNB Gilts Limited"
    },
    {
     "symbol": "GICHSGFIN",
     "companyName": "GIC Housing Finance Limited"
    },
    {
     "symbol": "GMBREW",
     "companyName": "GM Breweries Limited"
    },
    {
     "symbol": "NITINSPIN",
     "companyName": "Nitin Spinners Limited"
    },
    {
     "symbol": "AXISCADES",
     "companyName": "AXISCADES Technologies Limited"
    },
    {
     "symbol": "EKC",
     "companyName": "Everest Kanto Cylinder Limited"
    },
    {
     "symbol": "GEOJITFSL",
     "companyName": "Geojit Financial Services Limited"
    },
    {
     "symbol": "ELIN",
     "companyName": "Elin Electronics Limited"
    },
    {
     "symbol": "RICOAUTO",
     "companyName": "Rico Auto Industries Limited"
    },
    {
     "symbol": "SHIVALIK",
     "companyName": "Shivalik Rasayan Limited"
    },
    {
     "symbol": "BFINVEST",
     "companyName": "BF Investment Limited"
    },
    {
     "symbol": "AJMERA",
     "companyName": "Ajmera Realty &amp; Infra India Limited"
    },
    {
     "symbol": "UTTAMSUGAR",
     "companyName": "Uttam Sugar Mills Limited"
    },
    {
     "symbol": "AVADHSUGAR",
     "companyName": "Avadh Sugar &amp; Energy Limited"
    },
    {
     "symbol": "SANGAMIND",
     "companyName": "Sangam (India) Limited"
    },
    {
     "symbol": "CHEMCON",
     "companyName": "Chemcon Speciality Chemicals Limited"
    },
    {
     "symbol": "ESTER",
     "companyName": "Ester Industries Limited"
    },
    {
     "symbol": "DREDGECORP",
     "companyName": "Dredging Corporation of India Limited"
    },
    {
     "symbol": "SPECIALITY",
     "companyName": "Speciality Restaurants Limited"
    },
    {
     "symbol": "MONARCH",
     "companyName": "Monarch Networth Capital Limited"
    },
    {
     "symbol": "UGROCAP",
     "companyName": "Ugro Capital Limited"
    },
    {
     "symbol": "MARATHON",
     "companyName": "Marathon Nextgen Realty Limited"
    },
    {
     "symbol": "CENTRUM",
     "companyName": "Centrum Capital Limited"
    },
    {
     "symbol": "MEDICAMEQ",
     "companyName": "Medicamen Biotech Limited"
    },
    {
     "symbol": "IWEL",
     "companyName": "Inox Wind Energy Limited"
    },
    {
     "symbol": "MANGCHEFER",
     "companyName": "Mangalore Chemicals &amp; Fertilizers Limited"
    },
    {
     "symbol": "CAPACITE",
     "companyName": "Capacit'e Infraprojects Limited"
    },
    {
     "symbol": "PITTIENG",
     "companyName": "Pitti Engineering Limited"
    },
    {
     "symbol": "SHREDIGCEM",
     "companyName": "Shree Digvijay Cement Co.Ltd"
    },
    {
     "symbol": "PFS",
     "companyName": "PTC India Financial Services Limited"
    },
    {
     "symbol": "NUCLEUS",
     "companyName": "Nucleus Software Exports Limited"
    },
    {
     "symbol": "BIGBLOC",
     "companyName": "Bigbloc Construction Limited"
    },
    {
     "symbol": "ARTEMISMED",
     "companyName": "Artemis Medicare Services Limited"
    },
    {
     "symbol": "SUTLEJTEX",
     "companyName": "Sutlej Textiles and Industries Limited"
    },
    {
     "symbol": "NAHARSPING",
     "companyName": "Nahar Spinning Mills Limited"
    },
    {
     "symbol": "COFFEEDAY",
     "companyName": "Coffee Day Enterprises Limited"
    },
    {
     "symbol": "HITECH",
     "companyName": "Hi-Tech Pipes Limited"
    },
    {
     "symbol": "GOODLUCK",
     "companyName": "Goodluck India Limited"
    },
    {
     "symbol": "CLOUD",
     "companyName": "Varanium Cloud Limited"
    },
    {
     "symbol": "JASH",
     "companyName": "Jash Engineering Limited"
    },
    {
     "symbol": "BODALCHEM",
     "companyName": "Bodal Chemicals Limited"
    },
    {
     "symbol": "SMLISUZU",
     "companyName": "SML Isuzu Limited"
    },
    {
     "symbol": "AXITA",
     "companyName": "Axita Cotton Limited"
    },
    {
     "symbol": "PRAKASH",
     "companyName": "Prakash Industries Limited"
    },
    {
     "symbol": "PATELENG",
     "companyName": "Patel Engineering Limited"
    },
    {
     "symbol": "JAGSNPHARM",
     "companyName": "Jagsonpal Pharmaceuticals Limited"
    },
    {
     "symbol": "STERTOOLS",
     "companyName": "Sterling Tools Limited"
    },
    {
     "symbol": "VIMTALABS",
     "companyName": "Vimta Labs Limited"
    },
    {
     "symbol": "KAMDHENU",
     "companyName": "Kamdhenu Limited"
    },
    {
     "symbol": "ONMOBILE",
     "companyName": "OnMobile Global Limited"
    },
    {
     "symbol": "AHL",
     "companyName": "Abans Holdings Limited"
    },
    {
     "symbol": "UNIVCABLES",
     "companyName": "Universal Cables Limited"
    },
    {
     "symbol": "NAVKARCORP",
     "companyName": "Navkar Corporation Limited"
    },
    {
     "symbol": "NGLFINE",
     "companyName": "NGL Fine-Chem Limited"
    },
    {
     "symbol": "SHALPAINTS",
     "companyName": "Shalimar Paints Limited"
    },
    {
     "symbol": "IFGLEXPOR",
     "companyName": "IFGL Refractories Limited"
    },
    {
     "symbol": "5PAISA",
     "companyName": "5Paisa Capital Limited"
    },
    {
     "symbol": "PRECAM",
     "companyName": "Precision Camshafts Limited"
    },
    {
     "symbol": "SPORTKING",
     "companyName": "Sportking India Limited"
    },
    {
     "symbol": "GEPIL",
     "companyName": "GE Power India Limited"
    },
    {
     "symbol": "MKPL",
     "companyName": "M K Proteins Limited"
    },
    {
     "symbol": "SANDESH",
     "companyName": "The Sandesh Limited"
    },
    {
     "symbol": "VHL",
     "companyName": "Vardhman Holdings Limited"
    },
    {
     "symbol": "ZEEMEDIA",
     "companyName": "Zee Media Corporation Limited"
    },
    {
     "symbol": "QUICKHEAL",
     "companyName": "Quick Heal Technologies Limited"
    },
    {
     "symbol": "RGL",
     "companyName": "Renaissance Global Limited"
    },
    {
     "symbol": "CENTUM",
     "companyName": "Centum Electronics Limited"
    },
    {
     "symbol": "STEELCAS",
     "companyName": "Steelcast Limited"
    },
    {
     "symbol": "ARIHANTSUP",
     "companyName": "Arihant Superstructures Limited"
    },
    {
     "symbol": "UNIENTER",
     "companyName": "Uniphos Enterprises Limited"
    },
    {
     "symbol": "HARIOMPIPE",
     "companyName": "Hariom Pipe Industries Limited"
    },
    {
     "symbol": "CENTENKA",
     "companyName": "Century Enka Limited"
    },
    {
     "symbol": "VINYLINDIA",
     "companyName": "Vinyl Chemicals (India) Limited"
    },
    {
     "symbol": "IMPAL",
     "companyName": "India Motor Parts and Accessories Limited"
    },
    {
     "symbol": "INDNIPPON",
     "companyName": "India Nippon Electricals Limited"
    },
    {
     "symbol": "DEEPINDS",
     "companyName": "Deep Industries Limited"
    },
    {
     "symbol": "AGARIND",
     "companyName": "Agarwal Industrial Corporation Limited"
    },
    {
     "symbol": "GANESHBE",
     "companyName": "Ganesh Benzoplast Limited"
    },
    {
     "symbol": "SASTASUNDR",
     "companyName": "Sastasundar Ventures Limited"
    },
    {
     "symbol": "LIKHITHA",
     "companyName": "Likhitha Infrastructure Limited"
    },
    {
     "symbol": "PGIL",
     "companyName": "Pearl Global Industries Limited"
    },
    {
     "symbol": "RUSHIL",
     "companyName": "Rushil Decor Limited"
    },
    {
     "symbol": "SRHHYPOLTD",
     "companyName": "Sree Rayalaseema Hi-Strength Hypo Limited"
    },
    {
     "symbol": "HEXATRADEX",
     "companyName": "Hexa Tradex Limited"
    },
    {
     "symbol": "ORIENTPPR",
     "companyName": "Orient Paper &amp; Industries Limited"
    },
    {
     "symbol": "ASHAPURMIN",
     "companyName": "Ashapura Minechem Limited"
    },
    {
     "symbol": "PANACEABIO",
     "companyName": "Panacea Biotec Limited"
    },
    {
     "symbol": "RSWM",
     "companyName": "RSWM Limited"
    },
    {
     "symbol": "AWHCL",
     "companyName": "Antony Waste Handling Cell Limited"
    },
    {
     "symbol": "RADIOCITY",
     "companyName": "Music Broadcast Limited"
    },
    {
     "symbol": "NELCAST",
     "companyName": "Nelcast Limited"
    },
    {
     "symbol": "EMAMIPAP",
     "companyName": "Emami Paper Mills Limited"
    },
    {
     "symbol": "AMBIKCO",
     "companyName": "Ambika Cotton Mills Limited"
    },
    {
     "symbol": "ANUP",
     "companyName": "The Anup Engineering Limited"
    },
    {
     "symbol": "KOKUYOCMLN",
     "companyName": "Kokuyo Camlin Limited"
    },
    {
     "symbol": "JINDRILL",
     "companyName": "Jindal Drilling And Industries Limited"
    },
    {
     "symbol": "SDBL",
     "companyName": "Som Distilleries &amp; Breweries Limited"
    },
    {
     "symbol": "SPAL",
     "companyName": "S. P. Apparels Limited"
    },
    {
     "symbol": "CLNINDIA",
     "companyName": "Clariant Chemicals (India) Limited"
    },
    {
     "symbol": "DVL",
     "companyName": "Dhunseri Ventures Limited"
    },
    {
     "symbol": "SIGACHI",
     "companyName": "Sigachi Industries Limited"
    },
    {
     "symbol": "SYNCOMF",
     "companyName": "Syncom Formulations (India) Limited"
    },
    {
     "symbol": "KICL",
     "companyName": "Kalyani Investment Company Limited"
    },
    {
     "symbol": "MANGLMCEM",
     "companyName": "Mangalam Cement Limited"
    },
    {
     "symbol": "TNPETRO",
     "companyName": "Tamilnadu PetroProducts Limited"
    },
    {
     "symbol": "JYOTISTRUC",
     "companyName": "Jyoti Structures Limited"
    },
    {
     "symbol": "HIMATSEIDE",
     "companyName": "Himatsingka Seide Limited"
    },
    {
     "symbol": "GREENPOWER",
     "companyName": "Orient Green Power Company Limited"
    },
    {
     "symbol": "JETAIRWAYS",
     "companyName": "Jet Airways (India) Limited"
    },
    {
     "symbol": "SMCGLOBAL",
     "companyName": "SMC Global Securities Limited"
    },
    {
     "symbol": "TRACXN",
     "companyName": "Tracxn Technologies Limited"
    },
    {
     "symbol": "NCLIND",
     "companyName": "NCL Industries Limited"
    },
    {
     "symbol": "JAIBALAJI",
     "companyName": "Jai Balaji Industries Limited"
    },
    {
     "symbol": "APCL",
     "companyName": "Anjani Portland Cement Limited"
    },
    {
     "symbol": "DLINKINDIA",
     "companyName": "D-Link (India) Limited"
    },
    {
     "symbol": "AURIONPRO",
     "companyName": "Aurionpro Solutions Limited"
    },
    {
     "symbol": "RAMCOSYS",
     "companyName": "Ramco Systems Limited"
    },
    {
     "symbol": "HLVLTD",
     "companyName": "HLV LIMITED"
    },
    {
     "symbol": "ALLSEC",
     "companyName": "Allsec Technologies Limited"
    },
    {
     "symbol": "OCCL",
     "companyName": "Oriental Carbon &amp; Chemicals Limited"
    },
    {
     "symbol": "AGSTRA",
     "companyName": "AGS Transact Technologies Limited"
    },
    {
     "symbol": "63MOONS",
     "companyName": "63 moons technologies limited"
    },
    {
     "symbol": "ASALCBR",
     "companyName": "Associated Alcohols &amp; Breweries Ltd."
    },
    {
     "symbol": "BCLIND",
     "companyName": "Bcl Industries Limited"
    },
    {
     "symbol": "APEX",
     "companyName": "Apex Frozen Foods Limited"
    },
    {
     "symbol": "ORIENTBELL",
     "companyName": "Orient Bell Limited"
    },
    {
     "symbol": "TEXINFRA",
     "companyName": "Texmaco Infrastructure &amp; Holdings Limited"
    },
    {
     "symbol": "ZOTA",
     "companyName": "Zota Health Care LImited"
    },
    {
     "symbol": "PENIND",
     "companyName": "Pennar Industries Limited"
    },
    {
     "symbol": "SATINDLTD",
     "companyName": "Sat Industries Limited"
    },
    {
     "symbol": "INDRAMEDCO",
     "companyName": "Indraprastha Medical Corporation Limited"
    },
    {
     "symbol": "KHAICHEM",
     "companyName": "Khaitan Chemicals &amp; Fertilizers Limited"
    },
    {
     "symbol": "BLISSGVS",
     "companyName": "Bliss GVS Pharma Limited"
    },
    {
     "symbol": "INDIANHUME",
     "companyName": "Indian Hume Pipe Company Limited"
    },
    {
     "symbol": "SHAKTIPUMP",
     "companyName": "Shakti Pumps (India) Limited"
    },
    {
     "symbol": "XCHANGING",
     "companyName": "Xchanging Solutions Limited"
    },
    {
     "symbol": "VISAKAIND",
     "companyName": "Visaka Industries Limited"
    },
    {
     "symbol": "TFCILTD",
     "companyName": "Tourism Finance Corporation of India Limited"
    },
    {
     "symbol": "TRIL",
     "companyName": "Transformers And Rectifiers (India) Limited"
    },
    {
     "symbol": "RAMRAT",
     "companyName": "Ram Ratna Wires Limited"
    },
    {
     "symbol": "ENIL",
     "companyName": "Entertainment Network (India) Limited"
    },
    {
     "symbol": "VASCONEQ",
     "companyName": "Vascon Engineers Limited"
    },
    {
     "symbol": "BLKASHYAP",
     "companyName": "B. L. Kashyap and Sons Limited"
    },
    {
     "symbol": "ROTO",
     "companyName": "Roto Pumps Limited"
    },
    {
     "symbol": "KOPRAN",
     "companyName": "Kopran Limited"
    },
    {
     "symbol": "GFLLIMITED",
     "companyName": "GFL Limited"
    },
    {
     "symbol": "RAJMET",
     "companyName": "Rajnandini Metal Limited"
    },
    {
     "symbol": "ROHLTD",
     "companyName": "Royal Orchid Hotels Limited"
    },
    {
     "symbol": "LINCOLN",
     "companyName": "Lincoln Pharmaceuticals Limited"
    },
    {
     "symbol": "BHAGERIA",
     "companyName": "Bhageria Industries Limited"
    },
    {
     "symbol": "CREATIVE",
     "companyName": "Creative Newtech Limited"
    },
    {
     "symbol": "JAYBARMARU",
     "companyName": "Jay Bharat Maruti Limited"
    },
    {
     "symbol": "TALBROAUTO",
     "companyName": "Talbros Automotive Components Limited"
    },
    {
     "symbol": "SMSPHARMA",
     "companyName": "SMS Pharmaceuticals Limited"
    },
    {
     "symbol": "CHEVIOT",
     "companyName": "Cheviot Company Limited"
    },
    {
     "symbol": "KANORICHEM",
     "companyName": "Kanoria Chemicals &amp; Industries Limited"
    },
    {
     "symbol": "DECCANCE",
     "companyName": "Deccan Cements Limited"
    },
    {
     "symbol": "FAZE3Q",
     "companyName": "Faze Three Limited"
    },
    {
     "symbol": "ZUARI",
     "companyName": "Zuari Agro Chemicals Limited"
    },
    {
     "symbol": "3IINFOLTD",
     "companyName": "3i Infotech Limited"
    },
    {
     "symbol": "HPAL",
     "companyName": "HP Adhesives Limited"
    },
    {
     "symbol": "BETA",
     "companyName": "Beta Drugs Limited"
    },
    {
     "symbol": "BINDALAGRO",
     "companyName": "Oswal Chemicals &amp; Fertilizers Limited"
    },
    {
     "symbol": "SUMMITSEC",
     "companyName": "Summit Securities Limited"
    },
    {
     "symbol": "HERCULES",
     "companyName": "Hercules Hoists Limited"
    },
    {
     "symbol": "CLSEL",
     "companyName": "Chaman Lal Setia Exports Limited"
    },
    {
     "symbol": "PARACABLES",
     "companyName": "Paramount Communications Limited"
    },
    {
     "symbol": "DMCC",
     "companyName": "DMCC SPECIALITY CHEMICALS LIMITED"
    },
    {
     "symbol": "ONWARDTEC",
     "companyName": "Onward Technologies Limited"
    },
    {
     "symbol": "DHARMAJ",
     "companyName": "Dharmaj Crop Guard Limited"
    },
    {
     "symbol": "BHARATWIRE",
     "companyName": "Bharat Wire Ropes Limited"
    },
    {
     "symbol": "ARIHANTCAP",
     "companyName": "Arihant Capital Markets Limited"
    },
    {
     "symbol": "RML",
     "companyName": "Rane (Madras) Limited"
    },
    {
     "symbol": "SCPL",
     "companyName": "Sheetal Cool Products Limited"
    },
    {
     "symbol": "RUBYMILLS",
     "companyName": "The Ruby Mills Limited"
    },
    {
     "symbol": "GANDHITUBE",
     "companyName": "Gandhi Special Tubes Limited"
    },
    {
     "symbol": "CONTROLPR",
     "companyName": "Control Print Limited"
    },
    {
     "symbol": "NRL",
     "companyName": "Nupur Recyclers Limited"
    },
    {
     "symbol": "SUKHJITS",
     "companyName": "Sukhjit Starch &amp; Chemicals Limited"
    },
    {
     "symbol": "SHREYAS",
     "companyName": "Shreyas Shipping &amp; Logistics Limited"
    },
    {
     "symbol": "NAHARPOLY",
     "companyName": "Nahar Poly Films Limited"
    },
    {
     "symbol": "ASIANTILES",
     "companyName": "Asian Granito India Limited"
    },
    {
     "symbol": "HPL",
     "companyName": "HPL Electric &amp; Power Limited"
    },
    {
     "symbol": "DPABHUSHAN",
     "companyName": "D. P. Abhushan Limited"
    },
    {
     "symbol": "VIKASLIFE",
     "companyName": "Vikas Lifecare Limited"
    },
    {
     "symbol": "INDOAMIN",
     "companyName": "Indo Amines Limited"
    },
    {
     "symbol": "DCMSRIND",
     "companyName": "DCM Shriram Industries Limited"
    },
    {
     "symbol": "SNOWMAN",
     "companyName": "Snowman Logistics Limited"
    },
    {
     "symbol": "YUKEN",
     "companyName": "Yuken India Limited"
    },
    {
     "symbol": "DIGISPICE",
     "companyName": "DiGiSPICE Technologies Limited"
    },
    {
     "symbol": "ATULAUTO",
     "companyName": "Atul Auto Limited"
    },
    {
     "symbol": "REFEX",
     "companyName": "Refex Industries Limited"
    },
    {
     "symbol": "LINC",
     "companyName": "Linc Limited"
    },
    {
     "symbol": "SCHAND",
     "companyName": "S Chand And Company Limited"
    },
    {
     "symbol": "BALAXI",
     "companyName": "BALAXI PHARMACEUTICALS LIMITED"
    },
    {
     "symbol": "APOLLO",
     "companyName": "Apollo Micro Systems Limited"
    },
    {
     "symbol": "JUBLINDS",
     "companyName": "Jubilant Industries Limited"
    },
    {
     "symbol": "FOODSIN",
     "companyName": "Foods &amp; Inns Limited"
    },
    {
     "symbol": "SHREEPUSHK",
     "companyName": "Shree Pushkar Chemicals &amp; Fertilisers Limited"
    },
    {
     "symbol": "SPENCERS",
     "companyName": "Spencer's Retail Limited"
    },
    {
     "symbol": "ASAL",
     "companyName": "Automotive Stampings and Assemblies Limited"
    },
    {
     "symbol": "ELDEHSG",
     "companyName": "Eldeco Housing And Industries Limited"
    },
    {
     "symbol": "KELLTONTEC",
     "companyName": "Kellton Tech Solutions Limited"
    },
    {
     "symbol": "RBL",
     "companyName": "Rane Brake Lining Limited"
    },
    {
     "symbol": "CREST",
     "companyName": "Crest Ventures Limited"
    },
    {
     "symbol": "DPWIRES",
     "companyName": "D P Wires Limited"
    },
    {
     "symbol": "UNIVPHOTO",
     "companyName": "Universus Photo Imagings Limited"
    },
    {
     "symbol": "JAYAGROGN",
     "companyName": "Jayant Agro Organics Limited"
    },
    {
     "symbol": "NECLIFE",
     "companyName": "Nectar Lifesciences Limited"
    },
    {
     "symbol": "WINDLAS",
     "companyName": "Windlas Biotech Limited"
    },
    {
     "symbol": "HCL-INSYS",
     "companyName": "HCL Infosystems Limited"
    },
    {
     "symbol": "STCINDIA",
     "companyName": "The State Trading Corporation of India Limited"
    },
    {
     "symbol": "MENONBE",
     "companyName": "Menon Bearings Limited"
    },
    {
     "symbol": "OSWALAGRO",
     "companyName": "Oswal Agro Mills Limited"
    },
    {
     "symbol": "MEDICO",
     "companyName": "Medico Remedies Limited"
    },
    {
     "symbol": "TVSELECT",
     "companyName": "TVS Electronics Limited"
    },
    {
     "symbol": "NAHARCAP",
     "companyName": "Nahar Capital and Financial Services Limited"
    },
    {
     "symbol": "UNIDT",
     "companyName": "United Drilling Tools Limited"
    },
    {
     "symbol": "VLSFINANCE",
     "companyName": "VLS Finance Limited"
    },
    {
     "symbol": "EXXARO",
     "companyName": "Exxaro Tiles Limited"
    },
    {
     "symbol": "HARDWYN",
     "companyName": "Hardwyn India Limited"
    },
    {
     "symbol": "TBZ",
     "companyName": "Tribhovandas Bhimji Zaveri Limited"
    },
    {
     "symbol": "URJA",
     "companyName": "Urja Global Limited"
    },
    {
     "symbol": "HTMEDIA",
     "companyName": "HT Media Limited"
    },
    {
     "symbol": "SWELECTES",
     "companyName": "Swelect Energy Systems Limited"
    },
    {
     "symbol": "IFBAGRO",
     "companyName": "IFB Agro Industries Limited"
    },
    {
     "symbol": "KSOLVES",
     "companyName": "Ksolves India Limited"
    },
    {
     "symbol": "DHANBANK",
     "companyName": "Dhanlaxmi Bank Limited"
    },
    {
     "symbol": "NRAIL",
     "companyName": "N R Agarwal Industries Limited"
    },
    {
     "symbol": "ADSL",
     "companyName": "Allied Digital Services Limited"
    },
    {
     "symbol": "NURECA",
     "companyName": "Nureca Limited"
    },
    {
     "symbol": "CSLFINANCE",
     "companyName": "CSL Finance Limited"
    },
    {
     "symbol": "RAMAPHO",
     "companyName": "Rama Phosphates Limited"
    },
    {
     "symbol": "HITECHGEAR",
     "companyName": "The Hi-Tech Gears Limited"
    },
    {
     "symbol": "REPRO",
     "companyName": "Repro India Limited"
    },
    {
     "symbol": "SREEL",
     "companyName": "Sreeleathers Limited"
    },
    {
     "symbol": "MANAKSIA",
     "companyName": "Manaksia Limited"
    },
    {
     "symbol": "BBTCL",
     "companyName": "B&amp;B Triplewall Containers Limited"
    },
    {
     "symbol": "MUNJALAU",
     "companyName": "Munjal Auto Industries Limited"
    },
    {
     "symbol": "AARTISURF",
     "companyName": "Aarti Surfactants Limited"
    },
    {
     "symbol": "GOACARBON",
     "companyName": "Goa Carbon Limited"
    },
    {
     "symbol": "GENUSPAPER",
     "companyName": "Genus Paper &amp; Boards Limited"
    },
    {
     "symbol": "PROZONINTU",
     "companyName": "Prozone Intu Properties Limited"
    },
    {
     "symbol": "INNOVANA",
     "companyName": "Innovana Thinklabs Limited"
    },
    {
     "symbol": "KRISHIVAL",
     "companyName": "Empyrean Cashews Limited"
    },
    {
     "symbol": "ZIMLAB",
     "companyName": "Zim Laboratories Limited"
    },
    {
     "symbol": "GVKPIL",
     "companyName": "GVK Power &amp; Infrastructure Limited"
    },
    {
     "symbol": "JPOLYINVST",
     "companyName": "Jindal Poly Investment and Finance Company Limited"
    },
    {
     "symbol": "UNITECH",
     "companyName": "Unitech Limited"
    },
    {
     "symbol": "FCSSOFT",
     "companyName": "FCS Software Solutions Limited"
    },
    {
     "symbol": "SHYAMCENT",
     "companyName": "Shyam Century Ferrous Limited"
    },
    {
     "symbol": "EQUIPPP",
     "companyName": "Equippp Social Impact Technologies Limited"
    },
    {
     "symbol": "MANINDS",
     "companyName": "Man Industries (India) Limited"
    },
    {
     "symbol": "PLASTIBLEN",
     "companyName": "Plastiblends India Limited"
    },
    {
     "symbol": "LIBERTSHOE",
     "companyName": "Liberty Shoes Limited"
    },
    {
     "symbol": "CONSOFINVT",
     "companyName": "Consolidated Finvest &amp; Holdings Limited"
    },
    {
     "symbol": "MAGADSUGAR",
     "companyName": "Magadh Sugar &amp; Energy Limited"
    },
    {
     "symbol": "SHEMAROO",
     "companyName": "Shemaroo Entertainment Limited"
    },
    {
     "symbol": "BALAJITELE",
     "companyName": "Balaji Telefilms Limited"
    },
    {
     "symbol": "PDMJEPAPER",
     "companyName": "Pudumjee Paper Products Limited"
    },
    {
     "symbol": "THEINVEST",
     "companyName": "The Investment Trust Of India Limited"
    },
    {
     "symbol": "PREMEXPLN",
     "companyName": "Premier Explosives Limited"
    },
    {
     "symbol": "DONEAR",
     "companyName": "Donear Industries Limited"
    },
    {
     "symbol": "HINDCOMPOS",
     "companyName": "Hindustan Composites Limited"
    },
    {
     "symbol": "DSSL",
     "companyName": "Dynacons Systems &amp; Solutions Limited"
    },
    {
     "symbol": "MAXIND",
     "companyName": "Max India Limited"
    },
    {
     "symbol": "GSS",
     "companyName": "GSS Infotech Limited"
    },
    {
     "symbol": "MUTHOOTCAP",
     "companyName": "Muthoot Capital Services Limited"
    },
    {
     "symbol": "VARDHACRLC",
     "companyName": "Vardhman Acrylics Limited"
    },
    {
     "symbol": "ZUARIIND",
     "companyName": "ZUARI INDUSTRIES LIMITED"
    },
    {
     "symbol": "NAHARINDUS",
     "companyName": "Nahar Industrial Enterprises Limited"
    },
    {
     "symbol": "MANORG",
     "companyName": "Mangalam Organics Limited"
    },
    {
     "symbol": "MIRCELECTR",
     "companyName": "MIRC Electronics Limited"
    },
    {
     "symbol": "SILVERTUC",
     "companyName": "Silver Touch Technologies Limited"
    },
    {
     "symbol": "INDOBORAX",
     "companyName": "Indo Borax &amp; Chemicals Limited"
    },
    {
     "symbol": "ORBTEXP",
     "companyName": "Orbit Exports Limited"
    },
    {
     "symbol": "DELPHIFX",
     "companyName": "DELPHI WORLD MONEY LIMITED"
    },
    {
     "symbol": "KOTHARIPRO",
     "companyName": "Kothari Products Limited"
    },
    {
     "symbol": "MALLCOM",
     "companyName": "Mallcom (India) Limited"
    },
    {
     "symbol": "KECL",
     "companyName": "Kirloskar Electric Company Limited"
    },
    {
     "symbol": "KHADIM",
     "companyName": "Khadim India Limited"
    },
    {
     "symbol": "PTL",
     "companyName": "PTL Enterprises Limited"
    },
    {
     "symbol": "DEEPENR",
     "companyName": "DEEP ENERGY RESOURCES LIMITED"
    },
    {
     "symbol": "GLOBAL",
     "companyName": "Global Education Limited"
    },
    {
     "symbol": "NXTDIGITAL",
     "companyName": "NXTDIGITAL LIMITED"
    },
    {
     "symbol": "BGRENERGY",
     "companyName": "BGR Energy Systems Limited"
    },
    {
     "symbol": "KRITI",
     "companyName": "Kriti Industries (India) Limited"
    },
    {
     "symbol": "KAYA",
     "companyName": "Kaya Limited"
    },
    {
     "symbol": "PONNIERODE",
     "companyName": "Ponni Sugars (Erode) Limited"
    },
    {
     "symbol": "ORICONENT",
     "companyName": "Oricon Enterprises Limited"
    },
    {
     "symbol": "SAKAR",
     "companyName": "Sakar Healthcare Limited"
    },
    {
     "symbol": "DYCL",
     "companyName": "Dynamic Cables Limited"
    },
    {
     "symbol": "PARSVNATH",
     "companyName": "Parsvnath Developers Limited"
    },
    {
     "symbol": "IRISDOREME",
     "companyName": "Iris Clothings Limited"
    },
    {
     "symbol": "BIRLACABLE",
     "companyName": "Birla Cable Limited"
    },
    {
     "symbol": "INDSWFTLAB",
     "companyName": "Ind-Swift Laboratories Limited"
    },
    {
     "symbol": "RANASUG",
     "companyName": "Rana Sugars Limited"
    },
    {
     "symbol": "SECL",
     "companyName": "Salasar Exteriors and Contour Limited"
    },
    {
     "symbol": "MGEL",
     "companyName": "Mangalam Global Enterprise Limited"
    },
    {
     "symbol": "DHUNINV",
     "companyName": "Dhunseri Investments Limited"
    },
    {
     "symbol": "HMVL",
     "companyName": "Hindustan Media Ventures Limited"
    },
    {
     "symbol": "WEALTH",
     "companyName": "Wealth First Portfolio Managers Limited"
    },
    {
     "symbol": "BANSWRAS",
     "companyName": "Banswara Syntex Limited"
    },
    {
     "symbol": "KOTHARIPET",
     "companyName": "Kothari Petrochemicals Limited"
    },
    {
     "symbol": "MUNJALSHOW",
     "companyName": "Munjal Showa Limited"
    },
    {
     "symbol": "VIPCLOTHNG",
     "companyName": "VIP Clothing Limited"
    },
    {
     "symbol": "SAKUMA",
     "companyName": "Sakuma Exports Limited"
    },
    {
     "symbol": "CLEDUCATE",
     "companyName": "CL Educate Limited"
    },
    {
     "symbol": "MOLDTECH",
     "companyName": "Mold-Tek Technologies Limited"
    },
    {
     "symbol": "CHEMFAB",
     "companyName": "Chemfab Alkalis Limited"
    },
    {
     "symbol": "ICEMAKE",
     "companyName": "Ice Make Refrigeration Limited"
    },
    {
     "symbol": "NBIFIN",
     "companyName": "N. B. I. Industrial Finance Company Limited"
    },
    {
     "symbol": "MARINE",
     "companyName": "Marine Electricals (India) Limited"
    },
    {
     "symbol": "EIFFL",
     "companyName": "Euro India Fresh Foods Limited"
    },
    {
     "symbol": "RITCO",
     "companyName": "Ritco Logistics Limited"
    },
    {
     "symbol": "SALZERELEC",
     "companyName": "Salzer Electronics Limited"
    },
    {
     "symbol": "OMINFRAL",
     "companyName": "OM INFRA LIMITED"
    },
    {
     "symbol": "PPL",
     "companyName": "Prakash Pipes Limited"
    },
    {
     "symbol": "MAWANASUG",
     "companyName": "Mawana Sugars Limited"
    },
    {
     "symbol": "GOKUL",
     "companyName": "Gokul Refoils and Solvent Limited"
    },
    {
     "symbol": "HITECHCORP",
     "companyName": "Hitech Corporation Limited"
    },
    {
     "symbol": "KERNEX",
     "companyName": "Kernex Microsystems (India) Limited"
    },
    {
     "symbol": "AYMSYNTEX",
     "companyName": "AYM Syntex Limited"
    },
    {
     "symbol": "4THDIM",
     "companyName": "Fourth Dimension Solutions Limited"
    },
    {
     "symbol": "ADVANIHOTR",
     "companyName": "Advani Hotels &amp; Resorts (India) Limited"
    },
    {
     "symbol": "MSPL",
     "companyName": "MSP Steel &amp; Power Limited"
    },
    {
     "symbol": "FROG",
     "companyName": "Frog Cellsat Limited"
    },
    {
     "symbol": "CYBERTECH",
     "companyName": "Cybertech Systems And Software Limited"
    },
    {
     "symbol": "RUCHIRA",
     "companyName": "Ruchira Papers Limited"
    },
    {
     "symbol": "INTLCONV",
     "companyName": "International Conveyors Limited"
    },
    {
     "symbol": "KOTARISUG",
     "companyName": "Kothari Sugars And Chemicals Limited"
    },
    {
     "symbol": "LYKALABS",
     "companyName": "Lyka Labs Limited"
    },
    {
     "symbol": "NDL",
     "companyName": "Nandan Denim Limited"
    },
    {
     "symbol": "SKP",
     "companyName": "SKP Bearing Industries Limited"
    },
    {
     "symbol": "KCPSUGIND",
     "companyName": "KCP Sugar and Industries Corporation Limited"
    },
    {
     "symbol": "HIRECT",
     "companyName": "Hind Rectifiers Limited"
    },
    {
     "symbol": "SILINV",
     "companyName": "SIL Investments Limited"
    },
    {
     "symbol": "SARLAPOLY",
     "companyName": "Sarla Performance Fibers Limited"
    },
    {
     "symbol": "SELAN",
     "companyName": "Selan Exploration Technology Limited"
    },
    {
     "symbol": "CUPID",
     "companyName": "Cupid Limited"
    },
    {
     "symbol": "PENINLAND",
     "companyName": "Peninsula Land Limited"
    },
    {
     "symbol": "COOLCAPS",
     "companyName": "Cool Caps Industries Limited"
    },
    {
     "symbol": "SVPGLOB",
     "companyName": "SVP GLOBAL TEXTILES LIMITED"
    },
    {
     "symbol": "OSWALSEEDS",
     "companyName": "ShreeOswal Seeds And Chemicals Limited"
    },
    {
     "symbol": "KNAGRI",
     "companyName": "KN Agri Resources Limited"
    },
    {
     "symbol": "HINDMOTORS",
     "companyName": "Hindustan Motors Limited"
    },
    {
     "symbol": "DYNPRO",
     "companyName": "Dynemic Products Limited"
    },
    {
     "symbol": "LOYALTEX",
     "companyName": "Loyal Textile Mills Limited"
    },
    {
     "symbol": "RADHIKAJWE",
     "companyName": "Radhika Jeweltech Limited"
    },
    {
     "symbol": "JINDALPHOT",
     "companyName": "Jindal Photo Limited"
    },
    {
     "symbol": "AURUM",
     "companyName": "Aurum PropTech Limited"
    },
    {
     "symbol": "V2RETAIL",
     "companyName": "V2 Retail Limited"
    },
    {
     "symbol": "DICIND",
     "companyName": "DIC India Limited"
    },
    {
     "symbol": "UFO",
     "companyName": "UFO Moviez India Limited"
    },
    {
     "symbol": "SHIVAMAUTO",
     "companyName": "Shivam Autotech Limited"
    },
    {
     "symbol": "MINDTECK",
     "companyName": "Mindteck (India) Limited"
    },
    {
     "symbol": "NDRAUTO",
     "companyName": "Ndr Auto Components Limited"
    },
    {
     "symbol": "TAKE",
     "companyName": "Take Solutions Limited"
    },
    {
     "symbol": "SKMEGGPROD",
     "companyName": "SKM Egg Products Export (India) Limited"
    },
    {
     "symbol": "VISHWARAJ",
     "companyName": "Vishwaraj Sugar Industries Limited"
    },
    {
     "symbol": "FOCE",
     "companyName": "Foce India Limited"
    },
    {
     "symbol": "WEBELSOLAR",
     "companyName": "Websol Energy System Limited"
    },
    {
     "symbol": "DENORA",
     "companyName": "De Nora India Limited"
    },
    {
     "symbol": "ORIENTABRA",
     "companyName": "Orient Abrasives Limited"
    },
    {
     "symbol": "HUBTOWN",
     "companyName": "Hubtown Limited"
    },
    {
     "symbol": "CINELINE",
     "companyName": "Cineline India Limited"
    },
    {
     "symbol": "PPAP",
     "companyName": "PPAP Automotive Limited"
    },
    {
     "symbol": "SERVOTECH",
     "companyName": "Servotech Power Systems Limited"
    },
    {
     "symbol": "MACPOWER",
     "companyName": "Macpower CNC Machines Limited"
    },
    {
     "symbol": "BIRLAMONEY",
     "companyName": "Aditya Birla Money Limited"
    },
    {
     "symbol": "BASML",
     "companyName": "Bannari Amman Spinning Mills Limited"
    },
    {
     "symbol": "REVATHI",
     "companyName": "Revathi Equipment Limited"
    },
    {
     "symbol": "GSCLCEMENT",
     "companyName": "Gujarat Sidhee Cement Limited"
    },
    {
     "symbol": "INDOTHAI",
     "companyName": "Indo Thai Securities Limited"
    },
    {
     "symbol": "DUCON",
     "companyName": "Ducon Infratechnologies Limited"
    },
    {
     "symbol": "SOUTHWEST",
     "companyName": "South West Pinnacle Exploration Limited"
    },
    {
     "symbol": "BRNL",
     "companyName": "Bharat Road Network Limited"
    },
    {
     "symbol": "DUGLOBAL",
     "companyName": "DUDIGITAL GLOBAL LIMITED"
    },
    {
     "symbol": "SIMPLEXINF",
     "companyName": "Simplex Infrastructures Limited"
    },
    {
     "symbol": "GKWLIMITED",
     "companyName": "GKW Limited"
    },
    {
     "symbol": "FOCUS",
     "companyName": "Focus Lighting and Fixtures Limited"
    },
    {
     "symbol": "WEL",
     "companyName": "Wonder Fibromats Limited"
    },
    {
     "symbol": "ASHIMASYN",
     "companyName": "Ashima Limited"
    },
    {
     "symbol": "VIKASECO",
     "companyName": "Vikas EcoTech Limited"
    },
    {
     "symbol": "CHEMBOND",
     "companyName": "Chembond Chemicals Ltd"
    },
    {
     "symbol": "APOLSINHOT",
     "companyName": "Apollo Sindoori Hotels Limited"
    },
    {
     "symbol": "JSLL",
     "companyName": "Jeena Sikho Lifecare Limited"
    },
    {
     "symbol": "SBC",
     "companyName": "SBC Exports Limited"
    },
    {
     "symbol": "ALBERTDAVD",
     "companyName": "Albert David Limited"
    },
    {
     "symbol": "20MICRONS",
     "companyName": "20 Microns Limited"
    },
    {
     "symbol": "KOTYARK",
     "companyName": "Kotyark Industries Limited"
    },
    {
     "symbol": "MMP",
     "companyName": "MMP Industries Limited"
    },
    {
     "symbol": "QMSMEDI",
     "companyName": "QMS Medical Allied Services Limited"
    },
    {
     "symbol": "PRIMESECU",
     "companyName": "Prime Securities Limited"
    },
    {
     "symbol": "MEP",
     "companyName": "MEP Infrastructure Developers Limited"
    },
    {
     "symbol": "EMKAYTOOLS",
     "companyName": "Emkay Taps and Cutting Tools Limited"
    },
    {
     "symbol": "GPTINFRA",
     "companyName": "GPT Infraprojects Limited"
    },
    {
     "symbol": "ESSENTIA",
     "companyName": "Integra Essentia Limited"
    },
    {
     "symbol": "GEECEE",
     "companyName": "GeeCee Ventures Limited"
    },
    {
     "symbol": "SAKHTISUG",
     "companyName": "Sakthi Sugars Limited"
    },
    {
     "symbol": "WALCHANNAG",
     "companyName": "Walchandnagar Industries Limited"
    },
    {
     "symbol": "BPL",
     "companyName": "BPL Limited"
    },
    {
     "symbol": "MCLEODRUSS",
     "companyName": "Mcleod Russel India Limited"
    },
    {
     "symbol": "ASAHISONG",
     "companyName": "Asahi Songwon Colors Limited"
    },
    {
     "symbol": "BCONCEPTS",
     "companyName": "Brand Concepts Limited"
    },
    {
     "symbol": "JITFINFRA",
     "companyName": "JITF Infralogistics Limited"
    },
    {
     "symbol": "NATHBIOGEN",
     "companyName": "Nath Bio-Genes (India) Limited"
    },
    {
     "symbol": "VITAL",
     "companyName": "Vital Chemtech Limited"
    },
    {
     "symbol": "AUTOIND",
     "companyName": "Autoline Industries Limited"
    },
    {
     "symbol": "IEL",
     "companyName": "Indiabulls Enterprises Limited"
    },
    {
     "symbol": "DCMNVL",
     "companyName": "DCM Nouvelle Limited"
    },
    {
     "symbol": "EMAMIREAL",
     "companyName": "Emami Realty Limited"
    },
    {
     "symbol": "PASUPTAC",
     "companyName": "Pasupati Acrylon Limited"
    },
    {
     "symbol": "NIPPOBATRY",
     "companyName": "Indo-National Limited"
    },
    {
     "symbol": "FCONSUMER",
     "companyName": "Future Consumer Limited"
    },
    {
     "symbol": "ONEPOINT",
     "companyName": "One Point One Solutions Limited"
    },
    {
     "symbol": "STEL",
     "companyName": "Stel Holdings Limited"
    },
    {
     "symbol": "MAHEPC",
     "companyName": "Mahindra EPC Irrigation Limited"
    },
    {
     "symbol": "STARPAPER",
     "companyName": "Star Paper Mills Limited"
    },
    {
     "symbol": "WINDMACHIN",
     "companyName": "Windsor Machines Limited"
    },
    {
     "symbol": "TRIGYN",
     "companyName": "Trigyn Technologies Limited"
    },
    {
     "symbol": "KMSUGAR",
     "companyName": "K.M.Sugar Mills Limited"
    },
    {
     "symbol": "DANGEE",
     "companyName": "Dangee Dums Limited"
    },
    {
     "symbol": "VERTOZ",
     "companyName": "Vertoz Advertising Limited"
    },
    {
     "symbol": "RAJTV",
     "companyName": "Raj Television Network Limited"
    },
    {
     "symbol": "PODDARMENT",
     "companyName": "Poddar Pigments Limited"
    },
    {
     "symbol": "LGBFORGE",
     "companyName": "LGB Forge Limited"
    },
    {
     "symbol": "DEVIT",
     "companyName": "Dev Information Technology Limited"
    },
    {
     "symbol": "ABAN",
     "companyName": "Aban Offshore Limited"
    },
    {
     "symbol": "INDTERRAIN",
     "companyName": "Indian Terrain Fashions Limited"
    },
    {
     "symbol": "EUROBOND",
     "companyName": "Euro Panel Products Limited"
    },
    {
     "symbol": "GINNIFILA",
     "companyName": "Ginni Filaments Limited"
    },
    {
     "symbol": "MHLXMIRU",
     "companyName": "Mahalaxmi Rubtech Limited"
    },
    {
     "symbol": "UCALFUEL",
     "companyName": "Ucal Fuel Systems Limited"
    },
    {
     "symbol": "EROSMEDIA",
     "companyName": "Eros International Media Limited"
    },
    {
     "symbol": "OSIAHYPER",
     "companyName": "Osia Hyper Retail Limited"
    },
    {
     "symbol": "SINTERCOM",
     "companyName": "Sintercom India Limited"
    },
    {
     "symbol": "ASIANENE",
     "companyName": "Asian Energy Services Limited"
    },
    {
     "symbol": "E2E",
     "companyName": "E2E Networks Limited"
    },
    {
     "symbol": "COASTCORP",
     "companyName": "Coastal Corporation Limited"
    },
    {
     "symbol": "BMETRICS",
     "companyName": "Bombay Metrics Supply Chain Limited"
    },
    {
     "symbol": "GRPLTD",
     "companyName": "GRP Limited"
    },
    {
     "symbol": "GOYALALUM",
     "companyName": "Goyal Aluminiums Limited"
    },
    {
     "symbol": "MAZDA",
     "companyName": "Mazda Limited"
    },
    {
     "symbol": "JAYSREETEA",
     "companyName": "Jayshree Tea &amp; Industries Limited"
    },
    {
     "symbol": "ARROWGREEN",
     "companyName": "Arrow Greentech Limited"
    },
    {
     "symbol": "SADBHAV",
     "companyName": "Sadbhav Engineering Limited"
    },
    {
     "symbol": "BROOKS",
     "companyName": "Brooks Laboratories Limited"
    },
    {
     "symbol": "PAVNAIND",
     "companyName": "Pavna Industries Limited"
    },
    {
     "symbol": "ARIES",
     "companyName": "Aries Agro Limited"
    },
    {
     "symbol": "NILAINFRA",
     "companyName": "Nila Infrastructures Limited"
    },
    {
     "symbol": "SOLEX",
     "companyName": "Solex Energy Limited"
    },
    {
     "symbol": "SHIVAUM",
     "companyName": "Shiv Aum Steels Limited"
    },
    {
     "symbol": "MWL",
     "companyName": "Mangalam Worldwide Limited"
    },
    {
     "symbol": "MARALOVER",
     "companyName": "Maral Overseas Limited"
    },
    {
     "symbol": "AARVI",
     "companyName": "Aarvi Encon Limited"
    },
    {
     "symbol": "AHLEAST",
     "companyName": "Asian Hotels (East) Limited"
    },
    {
     "symbol": "TOTAL",
     "companyName": "Total Transport Systems Limited"
    },
    {
     "symbol": "ACCURACY",
     "companyName": "Accuracy Shipping Limited"
    },
    {
     "symbol": "USASEEDS",
     "companyName": "Upsurge Seeds Of Agriculture Limited"
    },
    {
     "symbol": "HARRMALAYA",
     "companyName": "Harrisons  Malayalam Limited"
    },
    {
     "symbol": "BIL",
     "companyName": "Bhartiya International Limited"
    },
    {
     "symbol": "PVP",
     "companyName": "PVP Ventures Limited"
    },
    {
     "symbol": "CAREERP",
     "companyName": "Career Point Limited"
    },
    {
     "symbol": "TPLPLASTEH",
     "companyName": "TPL Plastech Limited"
    },
    {
     "symbol": "SEJALLTD",
     "companyName": "Sejal Glass Limited"
    },
    {
     "symbol": "KRITINUT",
     "companyName": "Kriti Nutrients Limited"
    },
    {
     "symbol": "ZODIACLOTH",
     "companyName": "Zodiac Clothing Company Limited"
    },
    {
     "symbol": "PIONDIST",
     "companyName": "Pioneer Distilleries Limited"
    },
    {
     "symbol": "DTIL",
     "companyName": "Dhunseri Tea &amp; Industries Limited"
    },
    {
     "symbol": "KILITCH",
     "companyName": "Kilitch Drugs (India) Limited"
    },
    {
     "symbol": "VENUSREM",
     "companyName": "Venus Remedies Limited"
    },
    {
     "symbol": "KORE",
     "companyName": "Jay Jalaram Technologies Limited"
    },
    {
     "symbol": "MEGASOFT",
     "companyName": "Megasoft Limited"
    },
    {
     "symbol": "UNITEDPOLY",
     "companyName": "United Polyfab Gujarat Limited"
    },
    {
     "symbol": "REPL",
     "companyName": "Rudrabhishek Enterprises Limited"
    },
    {
     "symbol": "BAFNAPH",
     "companyName": "Bafna Pharmaceuticals Limited"
    },
    {
     "symbol": "SWASTIK",
     "companyName": "Swastik Pipe Limited"
    },
    {
     "symbol": "INSPIRISYS",
     "companyName": "Inspirisys Solutions Limited"
    },
    {
     "symbol": "KREBSBIO",
     "companyName": "Krebs Biochemicals and Industries Limited"
    },
    {
     "symbol": "PHANTOMFX",
     "companyName": "Phantom Digital Effects Limited"
    },
    {
     "symbol": "GUJAPOLLO",
     "companyName": "Gujarat Apollo Industries Limited"
    },
    {
     "symbol": "KAMATHOTEL",
     "companyName": "Kamat Hotels (I) Limited"
    },
    {
     "symbol": "ANNAPURNA",
     "companyName": "Annapurna Swadisht Limited"
    },
    {
     "symbol": "MURUDCERA",
     "companyName": "Murudeshwar Ceramics Limited"
    },
    {
     "symbol": "ALLETEC",
     "companyName": "All E Technologies Limited"
    },
    {
     "symbol": "IVC",
     "companyName": "IL&amp;FS Investment Managers Limited"
    },
    {
     "symbol": "SINTEX",
     "companyName": "Sintex Industries Limited"
    },
    {
     "symbol": "ZEELEARN",
     "companyName": "Zee Learn Limited"
    },
    {
     "symbol": "HDIL",
     "companyName": "Housing Development and Infrastructure Limited"
    },
    {
     "symbol": "MEGASTAR",
     "companyName": "Megastar Foods Limited"
    },
    {
     "symbol": "PRECOT",
     "companyName": "Precot Limited"
    },
    {
     "symbol": "EIMCOELECO",
     "companyName": "Eimco Elecon (India) Limited"
    },
    {
     "symbol": "RAMANEWS",
     "companyName": "Shree Rama Newsprint Limited"
    },
    {
     "symbol": "MAANALU",
     "companyName": "Maan Aluminium Limited"
    },
    {
     "symbol": "MANAKSTEEL",
     "companyName": "Manaksia Steels Limited"
    },
    {
     "symbol": "GIRRESORTS",
     "companyName": "GIR Natureview Resorts Limited"
    },
    {
     "symbol": "SIL",
     "companyName": "Standard Industries Limited"
    },
    {
     "symbol": "SUPERHOUSE",
     "companyName": "Superhouse Limited"
    },
    {
     "symbol": "INVENTURE",
     "companyName": "Inventure Growth &amp; Securities Limited"
    },
    {
     "symbol": "TIRUPATIFL",
     "companyName": "Tirupati Forge Limited"
    },
    {
     "symbol": "GULFPETRO",
     "companyName": "GP Petroleums Limited"
    },
    {
     "symbol": "MBLINFRA",
     "companyName": "MBL Infrastructure Limited"
    },
    {
     "symbol": "SPLIL",
     "companyName": "SPL Industries Limited"
    },
    {
     "symbol": "PRAXIS",
     "companyName": "Praxis Home Retail Limited"
    },
    {
     "symbol": "MANGALAM",
     "companyName": "Mangalam Drugs And Organics Limited"
    },
    {
     "symbol": "SUULD",
     "companyName": "Suumaya Industries Limited"
    },
    {
     "symbol": "SHREYANIND",
     "companyName": "Shreyans Industries Limited"
    },
    {
     "symbol": "MODISONLTD",
     "companyName": "MODISON LIMITED"
    },
    {
     "symbol": "SARVESHWAR",
     "companyName": "Sarveshwar Foods Limited"
    },
    {
     "symbol": "SADBHIN",
     "companyName": "Sadbhav Infrastructure Project Limited"
    },
    {
     "symbol": "AKSHARCHEM",
     "companyName": "AksharChem India Limited"
    },
    {
     "symbol": "ARSHIYA",
     "companyName": "Arshiya Limited"
    },
    {
     "symbol": "BOHRAIND",
     "companyName": "Bohra Industries Limited"
    },
    {
     "symbol": "SIGMA",
     "companyName": "Sigma Solve Limited"
    },
    {
     "symbol": "VETO",
     "companyName": "Veto Switchgears And Cables Limited"
    },
    {
     "symbol": "AIRAN",
     "companyName": "Airan Limited"
    },
    {
     "symbol": "VISESHINFO",
     "companyName": "Visesh Infotecnics Limited"
    },
    {
     "symbol": "PALREDTEC",
     "companyName": "Palred Technologies Limited"
    },
    {
     "symbol": "VIPULLTD",
     "companyName": "Vipul Limited"
    },
    {
     "symbol": "SECURKLOUD",
     "companyName": "SECUREKLOUD TECHNOLOGIES LIMITED"
    },
    {
     "symbol": "KOHINOOR",
     "companyName": "Kohinoor Foods Limited"
    },
    {
     "symbol": "PREMIERPOL",
     "companyName": "Premier Polyfilm Limited"
    },
    {
     "symbol": "ESSARSHPNG",
     "companyName": "Essar Shipping Limited"
    },
    {
     "symbol": "MAHESHWARI",
     "companyName": "Maheshwari Logistics Limited"
    },
    {
     "symbol": "TIL",
     "companyName": "TIL Limited"
    },
    {
     "symbol": "BSL",
     "companyName": "BSL Limited"
    },
    {
     "symbol": "KANPRPLA",
     "companyName": "Kanpur Plastipack Limited"
    },
    {
     "symbol": "TIPSFILMS",
     "companyName": "Tips Films Limited"
    },
    {
     "symbol": "JAINAM",
     "companyName": "Jainam Ferro Alloys (I) Limited"
    },
    {
     "symbol": "ISFT",
     "companyName": "Intrasoft Technologies Limited"
    },
    {
     "symbol": "RAJSREESUG",
     "companyName": "Rajshree Sugars &amp; Chemicals Limited"
    },
    {
     "symbol": "RPPL",
     "companyName": "Rajshree Polypack Limited"
    },
    {
     "symbol": "FLFL",
     "companyName": "Future Lifestyle Fashions Limited"
    },
    {
     "symbol": "LOVABLE",
     "companyName": "Lovable Lingerie Limited"
    },
    {
     "symbol": "NITCO",
     "companyName": "Nitco Limited"
    },
    {
     "symbol": "BHARATGEAR",
     "companyName": "Bharat Gears Limited"
    },
    {
     "symbol": "PILITA",
     "companyName": "PIL ITALICA LIFESTYLE LIMITED"
    },
    {
     "symbol": "BEDMUTHA",
     "companyName": "Bedmutha Industries Limited"
    },
    {
     "symbol": "EMKAY",
     "companyName": "Emkay Global Financial Services Limited"
    },
    {
     "symbol": "RNAVAL",
     "companyName": "Reliance Naval and Engineering Limited"
    },
    {
     "symbol": "INDOTECH",
     "companyName": "Indo Tech Transformers Limited"
    },
    {
     "symbol": "RUCHINFRA",
     "companyName": "Ruchi Infrastructure Limited"
    },
    {
     "symbol": "XELPMOC",
     "companyName": "Xelpmoc Design And Tech Limited"
    },
    {
     "symbol": "SGIL",
     "companyName": "Synergy Green Industries Limited"
    },
    {
     "symbol": "MADHAVBAUG",
     "companyName": "Vaidya Sane Ayurved Laboratories Limited"
    },
    {
     "symbol": "SMSLIFE",
     "companyName": "SMS Lifesciences India Limited"
    },
    {
     "symbol": "TRF",
     "companyName": "TRF Limited"
    },
    {
     "symbol": "LOKESHMACH",
     "companyName": "Lokesh Machines Limited"
    },
    {
     "symbol": "SMLT",
     "companyName": "Sarthak Metals Limited"
    },
    {
     "symbol": "IL&amp;FSENGG",
     "companyName": "IL&amp;FS Engineering and Construction Company Limited"
    },
    {
     "symbol": "PAR",
     "companyName": "Par Drugs And Chemicals Limited"
    },
    {
     "symbol": "IITL",
     "companyName": "Industrial Investment Trust Limited"
    },
    {
     "symbol": "MAHAPEXLTD",
     "companyName": "Maha Rashtra Apex Corporation Limited"
    },
    {
     "symbol": "TTL",
     "companyName": "T T Limited"
    },
    {
     "symbol": "ALMONDZ",
     "companyName": "Almondz Global Securities Limited"
    },
    {
     "symbol": "ASPINWALL",
     "companyName": "Aspinwall and Company Limited"
    },
    {
     "symbol": "ELGIRUBCO",
     "companyName": "Elgi Rubber Company Limited"
    },
    {
     "symbol": "PRITI",
     "companyName": "Priti International Limited"
    },
    {
     "symbol": "MODIRUBBER",
     "companyName": "Modi Rubber Limited"
    },
    {
     "symbol": "KRISHNADEF",
     "companyName": "Krishna Defence and Allied Industries Limited"
    },
    {
     "symbol": "VISASTEEL",
     "companyName": "Visa Steel Limited"
    },
    {
     "symbol": "PASHUPATI",
     "companyName": "Pashupati Cotspin Limited"
    },
    {
     "symbol": "A2ZINFRA",
     "companyName": "A2Z Infra Engineering Limited"
    },
    {
     "symbol": "SPTL",
     "companyName": "Sintex Plastics Technology Limited"
    },
    {
     "symbol": "WORTH",
     "companyName": "Worth Peripherals Limited"
    },
    {
     "symbol": "AARON",
     "companyName": "Aaron Industries Limited"
    },
    {
     "symbol": "COMPINFO",
     "companyName": "Compuage Infocom Limited"
    },
    {
     "symbol": "TIRUPATI",
     "companyName": "Shree Tirupati Balajee FIBC Limited"
    },
    {
     "symbol": "SIKKO",
     "companyName": "Sikko Industries Limited"
    },
    {
     "symbol": "EMMBI",
     "companyName": "Emmbi Industries Limited"
    },
    {
     "symbol": "ANMOL",
     "companyName": "Anmol India Limited"
    },
    {
     "symbol": "JOCIL",
     "companyName": "Jocil Limited"
    },
    {
     "symbol": "BYKE",
     "companyName": "The Byke Hospitality Ltd"
    },
    {
     "symbol": "ALPHAGEO",
     "companyName": "Alphageo (India) Limited"
    },
    {
     "symbol": "KBCGLOBAL",
     "companyName": "KBC Global Limited"
    },
    {
     "symbol": "ZODIAC",
     "companyName": "Zodiac Energy Limited"
    },
    {
     "symbol": "CEREBRAINT",
     "companyName": "Cerebra Integrated Technologies Limited"
    },
    {
     "symbol": "TEXMOPIPES",
     "companyName": "Texmo Pipes and Products Limited"
    },
    {
     "symbol": "GOLDSTAR",
     "companyName": "Goldstar Power Limited"
    },
    {
     "symbol": "RHFL",
     "companyName": "Reliance Home Finance Limited"
    },
    {
     "symbol": "ARTNIRMAN",
     "companyName": "Art Nirman Limited"
    },
    {
     "symbol": "DJML",
     "companyName": "DJ Mediaprint &amp; Logistics Limited"
    },
    {
     "symbol": "GOLDTECH",
     "companyName": "Goldstone Technologies Limited"
    },
    {
     "symbol": "GAYAPROJ",
     "companyName": "Gayatri Projects Limited"
    },
    {
     "symbol": "GILLANDERS",
     "companyName": "Gillanders Arbuthnot &amp; Company Limited"
    },
    {
     "symbol": "OBCL",
     "companyName": "Orissa Bengal Carrier Limited"
    },
    {
     "symbol": "BEWLTD",
     "companyName": "BEW Engineering Limited"
    },
    {
     "symbol": "WEIZMANIND",
     "companyName": "Weizmann Limited"
    },
    {
     "symbol": "AKSHOPTFBR",
     "companyName": "Aksh Optifibre Limited"
    },
    {
     "symbol": "UMAEXPORTS",
     "companyName": "Uma Exports Limited"
    },
    {
     "symbol": "WANBURY",
     "companyName": "Wanbury Limited"
    },
    {
     "symbol": "YAARI",
     "companyName": "Yaari Digital Integrated Services Limited"
    },
    {
     "symbol": "COMPUSOFT",
     "companyName": "Compucom Software Limited"
    },
    {
     "symbol": "ASCOM",
     "companyName": "Ascom Leasing &amp; Investments Limited"
    },
    {
     "symbol": "LOTUSEYE",
     "companyName": "Lotus Eye Hospital and Institute Limited"
    },
    {
     "symbol": "KAKATCEM",
     "companyName": "Kakatiya Cement Sugar &amp; Industries Limited"
    },
    {
     "symbol": "SHIVATEX",
     "companyName": "Shiva Texyarn Limited"
    },
    {
     "symbol": "ASIANHOTNR",
     "companyName": "Asian Hotels (North) Limited"
    },
    {
     "symbol": "JMA",
     "companyName": "Jullundur Motor Agency (Delhi) Limited"
    },
    {
     "symbol": "RANEENGINE",
     "companyName": "Rane Engine Valve Limited"
    },
    {
     "symbol": "DCI",
     "companyName": "Dc Infotech And Communication Limited"
    },
    {
     "symbol": "SETCO",
     "companyName": "Setco Automotive Limited"
    },
    {
     "symbol": "INTENTECH",
     "companyName": "Intense Technologies Limited"
    },
    {
     "symbol": "RVHL",
     "companyName": "Ravinder Heights Limited"
    },
    {
     "symbol": "3RDROCK",
     "companyName": "3rd Rock Multimedia Limited"
    },
    {
     "symbol": "ALANKIT",
     "companyName": "Alankit Limited"
    },
    {
     "symbol": "ASTRON",
     "companyName": "Astron Paper &amp; Board Mill Limited"
    },
    {
     "symbol": "DCM",
     "companyName": "DCM  Limited"
    },
    {
     "symbol": "INDOWIND",
     "companyName": "Indowind Energy Limited"
    },
    {
     "symbol": "AKSHAR",
     "companyName": "Akshar Spintex Limited"
    },
    {
     "symbol": "URAVI",
     "companyName": "Uravi T and Wedge Lamps Limited"
    },
    {
     "symbol": "RPPINFRA",
     "companyName": "R.P.P. Infra Projects Limited"
    },
    {
     "symbol": "SURANAT&amp;P",
     "companyName": "Surana Telecom and Power Limited"
    },
    {
     "symbol": "BALLARPUR",
     "companyName": "Ballarpur Industries Limited"
    },
    {
     "symbol": "SITINET",
     "companyName": "Siti Networks Limited"
    },
    {
     "symbol": "IRIS",
     "companyName": "Iris Business Services Limited"
    },
    {
     "symbol": "SVLL",
     "companyName": "Shree Vasu Logistics Limited"
    },
    {
     "symbol": "AVROIND",
     "companyName": "AVRO INDIA LIMITED"
    },
    {
     "symbol": "SOFTTECH",
     "companyName": "Softtech Engineers Limited"
    },
    {
     "symbol": "VAISHALI",
     "companyName": "Vaishali Pharma Limited"
    },
    {
     "symbol": "BTML",
     "companyName": "Bodhi Tree Multimedia Limited"
    },
    {
     "symbol": "TEMBO",
     "companyName": "Tembo Global Industries Limited"
    },
    {
     "symbol": "NOIDATOLL",
     "companyName": "Noida Toll Bridge Company Limited"
    },
    {
     "symbol": "JHS",
     "companyName": "JHS Svendgaard Laboratories Limited"
    },
    {
     "symbol": "ARCHIDPLY",
     "companyName": "Archidply Industries Limited"
    },
    {
     "symbol": "KSHITIJPOL",
     "companyName": "Kshitij Polyline Limited"
    },
    {
     "symbol": "INDBANK",
     "companyName": "Indbank Merchant Banking Services Limited"
    },
    {
     "symbol": "BHAGYANGR",
     "companyName": "Bhagyanagar India Limited"
    },
    {
     "symbol": "BALPHARMA",
     "companyName": "Bal Pharma Limited"
    },
    {
     "symbol": "ARVEE",
     "companyName": "Arvee Laboratories (India) Limited"
    },
    {
     "symbol": "VINNY",
     "companyName": "Vinny Overseas Limited"
    },
    {
     "symbol": "NPST",
     "companyName": "Network People Services Technologies Limited"
    },
    {
     "symbol": "PRITIKAUTO",
     "companyName": "Pritika Auto Industries Limited"
    },
    {
     "symbol": "RELCHEMQ",
     "companyName": "Reliance Chemotex Industries Limited"
    },
    {
     "symbol": "PROPEQUITY",
     "companyName": "P. E. Analytics Limited"
    },
    {
     "symbol": "STARTECK",
     "companyName": "Starteck Finance Limited"
    },
    {
     "symbol": "SALONA",
     "companyName": "Salona Cotspin Limited"
    },
    {
     "symbol": "MANAKALUCO",
     "companyName": "Manaksia Aluminium Company Limited"
    },
    {
     "symbol": "PALASHSECU",
     "companyName": "Palash Securities Limited"
    },
    {
     "symbol": "AVG",
     "companyName": "AVG Logistics Limited"
    },
    {
     "symbol": "UNITEDTEA",
     "companyName": "The United Nilgiri Tea Estates Company Limited"
    },
    {
     "symbol": "SMARTLINK",
     "companyName": "Smartlink Holdings Limited"
    },
    {
     "symbol": "LEMERITE",
     "companyName": "Le Merite Exports Limited"
    },
    {
     "symbol": "LEXUS",
     "companyName": "Lexus Granito (India) Limited"
    },
    {
     "symbol": "NILASPACES",
     "companyName": "Nila Spaces Limited"
    },
    {
     "symbol": "SHIGAN",
     "companyName": "Shigan Quantum Technologies Limited"
    },
    {
     "symbol": "REMSONSIND",
     "companyName": "Remsons Industries Limited"
    },
    {
     "symbol": "PODDARHOUS",
     "companyName": "Poddar Housing and Development Limited"
    },
    {
     "symbol": "GENCON",
     "companyName": "Generic Engineering Construction and Projects Limited"
    },
    {
     "symbol": "NDGL",
     "companyName": "Naga Dhunseri Group Limited"
    },
    {
     "symbol": "LASA",
     "companyName": "Lasa Supergenerics Limited"
    },
    {
     "symbol": "NIRAJ",
     "companyName": "Niraj Cement Structurals Limited"
    },
    {
     "symbol": "INDIANCARD",
     "companyName": "Indian Card Clothing Company Limited"
    },
    {
     "symbol": "UMANGDAIRY",
     "companyName": "Umang Dairies Limited"
    },
    {
     "symbol": "CORALFINAC",
     "companyName": "Coral India Finance &amp; Housing Limited"
    },
    {
     "symbol": "IL&amp;FSTRANS",
     "companyName": "IL&amp;FS Transportation Networks Limited"
    },
    {
     "symbol": "SRPL",
     "companyName": "Shree Ram Proteins Limited"
    },
    {
     "symbol": "PANSARI",
     "companyName": "Pansari Developers Limited"
    },
    {
     "symbol": "HILTON",
     "companyName": "Hilton Metal Forging Limited"
    },
    {
     "symbol": "AHLADA",
     "companyName": "Ahlada Engineers Limited"
    },
    {
     "symbol": "ALPA",
     "companyName": "Alpa Laboratories Limited"
    },
    {
     "symbol": "ALKALI",
     "companyName": "Alkali Metals Limited"
    },
    {
     "symbol": "SUNDARAM",
     "companyName": "Sundaram Multi Pap Limited"
    },
    {
     "symbol": "CAPTRUST",
     "companyName": "Capital Trust Limited"
    },
    {
     "symbol": "PARIN",
     "companyName": "Parin Furniture Limited"
    },
    {
     "symbol": "IVP",
     "companyName": "IVP Limited"
    },
    {
     "symbol": "BAHETI",
     "companyName": "Baheti Recycling Industries Limited"
    },
    {
     "symbol": "SUNDRMBRAK",
     "companyName": "Sundaram Brake Linings Limited"
    },
    {
     "symbol": "SALSTEEL",
     "companyName": "S.A.L. Steel Limited"
    },
    {
     "symbol": "SHAHALLOYS",
     "companyName": "Shah Alloys Limited"
    },
    {
     "symbol": "AJRINFRA",
     "companyName": "AJR INFRA AND TOLLING LIMITED"
    },
    {
     "symbol": "BLBLIMITED",
     "companyName": "BLB Limited"
    },
    {
     "symbol": "SPECTRUM",
     "companyName": "Spectrum Electrical Industries Limited"
    },
    {
     "symbol": "GTL",
     "companyName": "GTL Limited"
    },
    {
     "symbol": "NECCLTD",
     "companyName": "North Eastern Carrying Corporation Limited"
    },
    {
     "symbol": "GANGESSECU",
     "companyName": "Ganges Securities Limited"
    },
    {
     "symbol": "AIROLAM",
     "companyName": "Airo Lam limited"
    },
    {
     "symbol": "ATLANTA",
     "companyName": "Atlanta  Limited"
    },
    {
     "symbol": "CCHHL",
     "companyName": "Country Club Hospitality &amp; Holidays Limited"
    },
    {
     "symbol": "SPMLINFRA",
     "companyName": "SPML Infra Limited"
    },
    {
     "symbol": "NGIL",
     "companyName": "Nakoda Group of Industries Limited"
    },
    {
     "symbol": "SECURCRED",
     "companyName": "SecUR Credentials Limited"
    },
    {
     "symbol": "KAPSTON",
     "companyName": "Kapston Services Limited"
    },
    {
     "symbol": "MUKTAARTS",
     "companyName": "Mukta Arts Limited"
    },
    {
     "symbol": "AKG",
     "companyName": "Akg Exim Limited"
    },
    {
     "symbol": "GOLDENTOBC",
     "companyName": "Golden Tobacco Limited"
    },
    {
     "symbol": "OMAXAUTO",
     "companyName": "Omax Autos Limited"
    },
    {
     "symbol": "MANAKCOAT",
     "companyName": "Manaksia Coated Metals &amp; Industries Limited"
    },
    {
     "symbol": "DAMODARIND",
     "companyName": "Damodar Industries Limited"
    },
    {
     "symbol": "MAHASTEEL",
     "companyName": "Mahamaya Steel Industries Limited"
    },
    {
     "symbol": "MRO-TEK",
     "companyName": "MRO-TEK Realty Limited"
    },
    {
     "symbol": "GAL",
     "companyName": "Gyscoal Alloys Limited"
    },
    {
     "symbol": "SIMBHALS",
     "companyName": "Simbhaoli Sugars Limited"
    },
    {
     "symbol": "AMDIND",
     "companyName": "AMD Industries Limited"
    },
    {
     "symbol": "VMARCIND",
     "companyName": "V Marc India Limited"
    },
    {
     "symbol": "FSC",
     "companyName": "Future Supply Chain Solutions Limited"
    },
    {
     "symbol": "PIONEEREMB",
     "companyName": "Pioneer Embroideries Limited"
    },
    {
     "symbol": "CTE",
     "companyName": "Cambridge Technology Enterprises Limited"
    },
    {
     "symbol": "LPDC",
     "companyName": "Landmark Property Development Company Limited"
    },
    {
     "symbol": "SURYALAXMI",
     "companyName": "Suryalakshmi Cotton Mills Limited"
    },
    {
     "symbol": "KRITIKA",
     "companyName": "Kritika Wires Limited"
    },
    {
     "symbol": "AMJLAND",
     "companyName": "Amj Land Holdings Limited"
    },
    {
     "symbol": "SIGIND",
     "companyName": "Signet Industries Limited"
    },
    {
     "symbol": "DRSDILIP",
     "companyName": "DRS Dilip Roadlines Limited"
    },
    {
     "symbol": "SURANASOL",
     "companyName": "Surana Solar Limited"
    },
    {
     "symbol": "ATALREAL",
     "companyName": "Atal Realtech Limited"
    },
    {
     "symbol": "LAGNAM",
     "companyName": "Lagnam Spintex Limited"
    },
    {
     "symbol": "LAMBODHARA",
     "companyName": "Lambodhara Textiles Limited"
    },
    {
     "symbol": "TARMAT",
     "companyName": "Tarmat Limited"
    },
    {
     "symbol": "PRAENG",
     "companyName": "Prajay Engineers Syndicate Limited"
    },
    {
     "symbol": "MOTOGENFIN",
     "companyName": "The Motor &amp; General Finance Limited"
    },
    {
     "symbol": "UNIVASTU",
     "companyName": "Univastu India Limited"
    },
    {
     "symbol": "JAIPURKURT",
     "companyName": "Nandani Creation Limited"
    },
    {
     "symbol": "FIBERWEB",
     "companyName": "Fiberweb (India) Limited"
    },
    {
     "symbol": "SUVIDHAA",
     "companyName": "Suvidhaa Infoserve Limited"
    },
    {
     "symbol": "ANIKINDS",
     "companyName": "Anik Industries Limited"
    },
    {
     "symbol": "RKEC",
     "companyName": "RKEC Projects Limited"
    },
    {
     "symbol": "TAINWALCHM",
     "companyName": "Tainwala Chemical and Plastic (I) Limited"
    },
    {
     "symbol": "DIL",
     "companyName": "Debock Industries Limited"
    },
    {
     "symbol": "INCREDIBLE",
     "companyName": "INCREDIBLE INDUSTRIES LIMITED"
    },
    {
     "symbol": "PARTYCRUS",
     "companyName": "Party Cruisers Limited"
    },
    {
     "symbol": "TOUCHWOOD",
     "companyName": "Touchwood Entertainment Limited"
    },
    {
     "symbol": "WELINV",
     "companyName": "Welspun Investments and Commercials Limited"
    },
    {
     "symbol": "GROBTEA",
     "companyName": "The Grob Tea Company Limited"
    },
    {
     "symbol": "AUSOMENT",
     "companyName": "Ausom Enterprise Limited"
    },
    {
     "symbol": "BAGFILMS",
     "companyName": "B.A.G Films and Media Limited"
    },
    {
     "symbol": "SONAMCLOCK",
     "companyName": "Sonam Clock Limited"
    },
    {
     "symbol": "HPIL",
     "companyName": "Hindprakash Industries Limited"
    },
    {
     "symbol": "IZMO",
     "companyName": "IZMO Limited"
    },
    {
     "symbol": "PRESSMN",
     "companyName": "Pressman Advertising Limited"
    },
    {
     "symbol": "AAREYDRUGS",
     "companyName": "Aarey Drugs &amp; Pharmaceuticals Limited"
    },
    {
     "symbol": "SHRENIK",
     "companyName": "Shrenik Limited"
    },
    {
     "symbol": "TOKYOPLAST",
     "companyName": "Tokyo Plast International Limited"
    },
    {
     "symbol": "LLOYDS",
     "companyName": "Lloyds Luxuries Limited"
    },
    {
     "symbol": "SUMIT",
     "companyName": "Sumit Woods Limited"
    },
    {
     "symbol": "STEELCITY",
     "companyName": "Steel City Securities Limited"
    },
    {
     "symbol": "DGCONTENT",
     "companyName": "Digicontent Limited"
    },
    {
     "symbol": "CELEBRITY",
     "companyName": "Celebrity Fashions Limited"
    },
    {
     "symbol": "BEARDSELL",
     "companyName": "Beardsell Limited"
    },
    {
     "symbol": "HINDCON",
     "companyName": "Hindcon Chemicals Limited"
    },
    {
     "symbol": "KANANIIND",
     "companyName": "Kanani Industries Limited"
    },
    {
     "symbol": "ENERGYDEV",
     "companyName": "Energy Development Company Limited"
    },
    {
     "symbol": "PROLIFE",
     "companyName": "Prolife Industries Limited"
    },
    {
     "symbol": "VIVIMEDLAB",
     "companyName": "Vivimed Labs Limited"
    },
    {
     "symbol": "FIDEL",
     "companyName": "Fidel Softech Limited"
    },
    {
     "symbol": "AGROPHOS",
     "companyName": "Agro Phos India Limited"
    },
    {
     "symbol": "KALYANIFRG",
     "companyName": "Kalyani Forge Limited"
    },
    {
     "symbol": "ROML",
     "companyName": "Raj Oil Mills Limited"
    },
    {
     "symbol": "BIOFILCHEM",
     "companyName": "Biofil Chemicals &amp; Pharmaceuticals Limited"
    },
    {
     "symbol": "ELECTHERM",
     "companyName": "Electrotherm (India) Limited"
    },
    {
     "symbol": "AURDIS",
     "companyName": "Aurangabad Distillery Limited"
    },
    {
     "symbol": "PATINTLOG",
     "companyName": "Patel Integrated Logistics Limited"
    },
    {
     "symbol": "PRAKASHSTL",
     "companyName": "Prakash Steelage Limited"
    },
    {
     "symbol": "GICL",
     "companyName": "Globe International Carriers Limited"
    },
    {
     "symbol": "DOLLEX",
     "companyName": "Dollex Agrotech Limited"
    },
    {
     "symbol": "BHANDARI",
     "companyName": "Bhandari Hosiery Exports Limited"
    },
    {
     "symbol": "ARCHIES",
     "companyName": "Archies Limited"
    },
    {
     "symbol": "TARACHAND",
     "companyName": "Tara Chand InfraLogistic Solutions Limited"
    },
    {
     "symbol": "MITCON",
     "companyName": "MITCON Consultancy &amp; Engineering Services Limited"
    },
    {
     "symbol": "DBSTOCKBRO",
     "companyName": "DB (International) Stock Brokers Limited"
    },
    {
     "symbol": "MCL",
     "companyName": "Madhav Copper Limited"
    },
    {
     "symbol": "SHIVAMILLS",
     "companyName": "Shiva Mills Limited"
    },
    {
     "symbol": "MORARJEE",
     "companyName": "Morarjee Textiles Limited"
    },
    {
     "symbol": "DHRUV",
     "companyName": "Dhruv Consultancy Services Limited"
    },
    {
     "symbol": "ANKITMETAL",
     "companyName": "Ankit Metal &amp; Power Limited"
    },
    {
     "symbol": "CORDSCABLE",
     "companyName": "Cords Cable Industries Limited"
    },
    {
     "symbol": "MHHL",
     "companyName": "Mohini Health &amp; Hygiene Limited"
    },
    {
     "symbol": "TREJHARA",
     "companyName": "TREJHARA SOLUTIONS LIMITED"
    },
    {
     "symbol": "BANKA",
     "companyName": "Banka BioLoo Limited"
    },
    {
     "symbol": "OILCOUNTUB",
     "companyName": "Oil Country Tubular Limited"
    },
    {
     "symbol": "DELTAMAGNT",
     "companyName": "Delta Manufacturing Limited"
    },
    {
     "symbol": "ARIHANTACA",
     "companyName": "Arihant Academy Limited"
    },
    {
     "symbol": "GSTL",
     "companyName": "Globesecure Technologies Limited"
    },
    {
     "symbol": "CENTEXT",
     "companyName": "Century Extrusions Limited"
    },
    {
     "symbol": "WIPL",
     "companyName": "The Western India Plywoods Limited"
    },
    {
     "symbol": "SHREERAMA",
     "companyName": "Shree Rama Multi-Tech Limited"
    },
    {
     "symbol": "FLEXITUFF",
     "companyName": "Flexituff Ventures International Limited"
    },
    {
     "symbol": "GEEKAYWIRE",
     "companyName": "Geekay Wires Limited"
    },
    {
     "symbol": "NITIRAJ",
     "companyName": "Nitiraj Engineers Limited"
    },
    {
     "symbol": "PKTEA",
     "companyName": "The Peria Karamalai Tea &amp; Produce Company Limited"
    },
    {
     "symbol": "EXCEL",
     "companyName": "Excel Realty N Infra Limited"
    },
    {
     "symbol": "AAATECH",
     "companyName": "AAA Technologies Limited"
    },
    {
     "symbol": "ZENITHSTL",
     "companyName": "Zenith Steel Pipes &amp; Industries Limited"
    },
    {
     "symbol": "TREEHOUSE",
     "companyName": "Tree House Education &amp; Accessories Limited"
    },
    {
     "symbol": "KEYFINSERV",
     "companyName": "Keynote Financial Services Limited"
    },
    {
     "symbol": "SAMBHAAV",
     "companyName": "Sambhaav Media Limited"
    },
    {
     "symbol": "GLOBALVECT",
     "companyName": "Global Vectra Helicorp Limited"
    },
    {
     "symbol": "FEL",
     "companyName": "Future Enterprises Limited"
    },
    {
     "symbol": "GIRIRAJ",
     "companyName": "Giriraj Civil Developers Limited"
    },
    {
     "symbol": "AROGRANITE",
     "companyName": "Aro Granite Industries Limited"
    },
    {
     "symbol": "LATTEYS",
     "companyName": "Latteys Industries Limited"
    },
    {
     "symbol": "JBFIND",
     "companyName": "JBF Industries Limited"
    },
    {
     "symbol": "MAGNUM",
     "companyName": "Magnum Ventures Limited"
    },
    {
     "symbol": "AVSL",
     "companyName": "AVSL Industries Limited"
    },
    {
     "symbol": "PANACHE",
     "companyName": "Panache Digilife Limited"
    },
    {
     "symbol": "HISARMETAL",
     "companyName": "Hisar Metal Industries Limited"
    },
    {
     "symbol": "PIGL",
     "companyName": "Power &amp; Instrumentation (Gujarat) Limited"
    },
    {
     "symbol": "AAKASH",
     "companyName": "Aakash Exploration Services Limited"
    },
    {
     "symbol": "PRECISION",
     "companyName": "Precision Metaliks Limited"
    },
    {
     "symbol": "SEPOWER",
     "companyName": "S.E. Power Limited"
    },
    {
     "symbol": "UMA",
     "companyName": "Uma Converter Limited"
    },
    {
     "symbol": "CMRSL",
     "companyName": "Cyber Media Research &amp; Services Limited"
    },
    {
     "symbol": "GLOBE",
     "companyName": "Globe Textiles (India) Limited"
    },
    {
     "symbol": "INDSWFTLTD",
     "companyName": "Ind-Swift Limited"
    },
    {
     "symbol": "CINEVISTA",
     "companyName": "Cinevista Limited"
    },
    {
     "symbol": "ORIENTLTD",
     "companyName": "Orient Press Limited"
    },
    {
     "symbol": "REGENCERAM",
     "companyName": "Regency Ceramics Limited"
    },
    {
     "symbol": "NIDAN",
     "companyName": "Nidan Laboratories and Healthcare Limited"
    },
    {
     "symbol": "ROLTA",
     "companyName": "Rolta India Limited"
    },
    {
     "symbol": "MALUPAPER",
     "companyName": "Malu Paper Mills Limited"
    },
    {
     "symbol": "SHRADHA",
     "companyName": "Shradha Infraprojects Limited"
    },
    {
     "symbol": "MAHICKRA",
     "companyName": "Mahickra Chemicals Limited"
    },
    {
     "symbol": "MDL",
     "companyName": "Marvel Decor Limited"
    },
    {
     "symbol": "AGRITECH",
     "companyName": "Agri-Tech (India) Limited"
    },
    {
     "symbol": "RSSOFTWARE",
     "companyName": "R. S. Software (India) Limited"
    },
    {
     "symbol": "MOKSH",
     "companyName": "Moksh Ornaments Limited"
    },
    {
     "symbol": "MBECL",
     "companyName": "Mcnally Bharat Engineering Company Limited"
    },
    {
     "symbol": "BANG",
     "companyName": "Bang Overseas Limited"
    },
    {
     "symbol": "PENTAGOLD",
     "companyName": "Penta Gold Limited"
    },
    {
     "symbol": "AJOONI",
     "companyName": "Ajooni Biotech Limited"
    },
    {
     "symbol": "HYBRIDFIN",
     "companyName": "Hybrid Financial Services Limited"
    },
    {
     "symbol": "IPSL",
     "companyName": "Integrated Personnel Services Limited"
    },
    {
     "symbol": "HOVS",
     "companyName": "HOV Services Limited"
    },
    {
     "symbol": "ABMINTLLTD",
     "companyName": "ABM International Limited"
    },
    {
     "symbol": "HECPROJECT",
     "companyName": "HEC Infra Projects Limited"
    },
    {
     "symbol": "VINEETLAB",
     "companyName": "Vineet Laboratories Limited"
    },
    {
     "symbol": "BDR",
     "companyName": "BDR Buildcon Limited"
    },
    {
     "symbol": "PNC",
     "companyName": "Pritish Nandy Communications Limited"
    },
    {
     "symbol": "UJAAS",
     "companyName": "Ujaas Energy Limited"
    },
    {
     "symbol": "ARHAM",
     "companyName": "Arham Technologies Limited"
    },
    {
     "symbol": "SUPREMEINF",
     "companyName": "Supreme Infrastructure India Limited"
    },
    {
     "symbol": "TERASOFT",
     "companyName": "Tera Software Limited"
    },
    {
     "symbol": "PULZ",
     "companyName": "Pulz Electronics Limited"
    },
    {
     "symbol": "CUBEXTUB",
     "companyName": "Cubex Tubings Limited"
    },
    {
     "symbol": "VASWANI",
     "companyName": "Vaswani Industries Limited"
    },
    {
     "symbol": "AARVEEDEN",
     "companyName": "Aarvee Denims &amp; Exports Limited"
    },
    {
     "symbol": "ACEINTEG",
     "companyName": "Ace Integrated Solutions Limited"
    },
    {
     "symbol": "BVCL",
     "companyName": "Barak Valley Cements Limited"
    },
    {
     "symbol": "RELIABLE",
     "companyName": "Reliable Data Services Limited"
    },
    {
     "symbol": "VIVIANA",
     "companyName": "Viviana Power Tech Limited"
    },
    {
     "symbol": "KKVAPOW",
     "companyName": "KKV Agro Powers Limited"
    },
    {
     "symbol": "MTEDUCARE",
     "companyName": "MT Educare Limited"
    },
    {
     "symbol": "BANARBEADS",
     "companyName": "Banaras Beads Limited"
    },
    {
     "symbol": "SUMEETINDS",
     "companyName": "Sumeet Industries Limited"
    },
    {
     "symbol": "NIBL",
     "companyName": "NRB Industrial Bearings Limited"
    },
    {
     "symbol": "SIDDHIKA",
     "companyName": "Siddhika Coatings Limited"
    },
    {
     "symbol": "AKASH",
     "companyName": "Akash Infra-Projects Limited"
    },
    {
     "symbol": "SANWARIA",
     "companyName": "Sanwaria Consumer Limited"
    },
    {
     "symbol": "LGHL",
     "companyName": "Laxmi Goldorna House Limited"
    },
    {
     "symbol": "KHANDSE",
     "companyName": "Khandwala Securities Limited"
    },
    {
     "symbol": "ABCOTS",
     "companyName": "A B Cotspin India Limited"
    },
    {
     "symbol": "GANGAFORGE",
     "companyName": "Ganga Forging Limited"
    },
    {
     "symbol": "WEWIN",
     "companyName": "WE WIN LIMITED"
    },
    {
     "symbol": "SUPERSPIN",
     "companyName": "Super Spinning Mills Limited"
    },
    {
     "symbol": "SOMICONVEY",
     "companyName": "Somi Conveyor Beltings Limited"
    },
    {
     "symbol": "NAGREEKEXP",
     "companyName": "Nagreeka Exports Limited"
    },
    {
     "symbol": "TIMESCAN",
     "companyName": "Timescan Logistics (India) Limited"
    },
    {
     "symbol": "MANUGRAPH",
     "companyName": "Manugraph India Limited"
    },
    {
     "symbol": "AISL",
     "companyName": "ANI Integrated Services Limited"
    },
    {
     "symbol": "LIBAS",
     "companyName": "Libas Consumer Products Limited"
    },
    {
     "symbol": "SGL",
     "companyName": "STL Global Limited"
    },
    {
     "symbol": "TIMESGTY",
     "companyName": "Times Guaranty Limited"
    },
    {
     "symbol": "SAGARDEEP",
     "companyName": "Sagardeep Alloys Limited"
    },
    {
     "symbol": "JETFREIGHT",
     "companyName": "Jet Freight Logistics Limited"
    },
    {
     "symbol": "KHFM",
     "companyName": "Khfm Hospitality And Facility Management Services Limited"
    },
    {
     "symbol": "AMBANIORG",
     "companyName": "Ambani Organics Limited"
    },
    {
     "symbol": "BURNPUR",
     "companyName": "Burnpur Cement Limited"
    },
    {
     "symbol": "VSCL",
     "companyName": "Vadivarhe Speciality Chemicals Limited"
    },
    {
     "symbol": "GODHA",
     "companyName": "Godha Cabcon &amp; Insulation Limited"
    },
    {
     "symbol": "MRO",
     "companyName": "M.R. Organisation Limited"
    },
    {
     "symbol": "NEXTMEDIA",
     "companyName": "Next Mediaworks Limited"
    },
    {
     "symbol": "ARSSINFRA",
     "companyName": "ARSS Infrastructure Projects Limited"
    },
    {
     "symbol": "DKEGL",
     "companyName": "D.K. Enterprises Global Limited"
    },
    {
     "symbol": "PRITIKA",
     "companyName": "Pritika Engineering Components Limited"
    },
    {
     "symbol": "ADROITINFO",
     "companyName": "Adroit Infotech Limited"
    },
    {
     "symbol": "UCL",
     "companyName": "Ushanti Colour Chem Limited"
    },
    {
     "symbol": "PARASPETRO",
     "companyName": "Paras Petrofils Limited"
    },
    {
     "symbol": "AGNI",
     "companyName": "Agni Green Power Limited"
    },
    {
     "symbol": "ZENITHEXPO",
     "companyName": "Zenith Exports Limited"
    },
    {
     "symbol": "VARDMNPOLY",
     "companyName": "Vardhman Polytex Limited"
    },
    {
     "symbol": "BALKRISHNA",
     "companyName": "Balkrishna Paper Mills Limited"
    },
    {
     "symbol": "MADHUCON",
     "companyName": "Madhucon Projects Limited"
    },
    {
     "symbol": "RKDL",
     "companyName": "Ravi Kumar Distilleries Limited"
    },
    {
     "symbol": "AMBICAAGAR",
     "companyName": "Ambica Agarbathies &amp; Aroma industries Limited"
    },
    {
     "symbol": "SONAHISONA",
     "companyName": "Sona Hi Sona Jewellers (Gujarat) Limited"
    },
    {
     "symbol": "DNAMEDIA",
     "companyName": "Diligent Media Corporation Limited"
    },
    {
     "symbol": "MEGAFLEX",
     "companyName": "Mega Flex Plastics Limited"
    },
    {
     "symbol": "PEARLPOLY",
     "companyName": "Pearl Polymers Limited"
    },
    {
     "symbol": "MADHAV",
     "companyName": "Madhav Marbles and Granites Limited"
    },
    {
     "symbol": "SWARAJ",
     "companyName": "Swaraj Suiting Limited"
    },
    {
     "symbol": "GOENKA",
     "companyName": "Goenka Diamond and Jewels Limited"
    },
    {
     "symbol": "ICDSLTD",
     "companyName": "ICDS Limited"
    },
    {
     "symbol": "LAXMICOT",
     "companyName": "Laxmi Cotspin Limited"
    },
    {
     "symbol": "SANGINITA",
     "companyName": "Sanginita Chemicals Limited"
    },
    {
     "symbol": "DHARSUGAR",
     "companyName": "Dharani Sugars &amp; Chemicals Limited"
    },
    {
     "symbol": "MARSHALL",
     "companyName": "Marshall Machines Limited"
    },
    {
     "symbol": "SHAIVAL",
     "companyName": "Shaival Reality Limited"
    },
    {
     "symbol": "HBSL",
     "companyName": "HB Stockholdings Limited"
    },
    {
     "symbol": "TGBHOTELS",
     "companyName": "TGB Banquets And Hotels Limited"
    },
    {
     "symbol": "JETKNIT",
     "companyName": "Jet Knitwears Limited"
    },
    {
     "symbol": "COUNCODOS",
     "companyName": "Country Condo's Limited"
    },
    {
     "symbol": "SHUBHLAXMI",
     "companyName": "Shubhlaxmi Jewel Art Limited"
    },
    {
     "symbol": "JFLLIFE",
     "companyName": "Jfl Life Sciences Limited"
    },
    {
     "symbol": "FELIX",
     "companyName": "Felix Industries Limited"
    },
    {
     "symbol": "HEADSUP",
     "companyName": "Heads UP Ventures Limited"
    },
    {
     "symbol": "CROWN",
     "companyName": "Crown Lifters Limited"
    },
    {
     "symbol": "MINDPOOL",
     "companyName": "Mindpool Technologies Limited"
    },
    {
     "symbol": "ADL",
     "companyName": "Archidply Decor Limited"
    },
    {
     "symbol": "MILTON",
     "companyName": "Milton Industries Limited"
    },
    {
     "symbol": "VIVIDHA",
     "companyName": "Visagar Polytex Limited"
    },
    {
     "symbol": "KRIDHANINF",
     "companyName": "Kridhan Infra Limited"
    },
    {
     "symbol": "ROLLT",
     "companyName": "Rollatainers Limited"
    },
    {
     "symbol": "MERCATOR",
     "companyName": "Mercator Limited"
    },
    {
     "symbol": "KEEPLEARN",
     "companyName": "DSJ Keep Learning Limited"
    },
    {
     "symbol": "HAVISHA",
     "companyName": "Sri Havisha Hospitality and Infrastructure Limited"
    },
    {
     "symbol": "OMKARCHEM",
     "companyName": "Omkar Speciality Chemicals Limited"
    },
    {
     "symbol": "LFIC",
     "companyName": "Lakshmi Finance &amp; Industrial Corporation Limited"
    },
    {
     "symbol": "UWCSL",
     "companyName": "Ultra Wiring Connectivity System Limited"
    },
    {
     "symbol": "NARMADA",
     "companyName": "Narmada Agrobase Limited"
    },
    {
     "symbol": "AMEYA",
     "companyName": "Ameya Precision Engineers Limited"
    },
    {
     "symbol": "RITEZONE",
     "companyName": "Rite Zone Chemcon India Limited"
    },
    {
     "symbol": "LCCINFOTEC",
     "companyName": "LCC Infotech Limited"
    },
    {
     "symbol": "CALSOFT",
     "companyName": "California Software Company Limited"
    },
    {
     "symbol": "SUPREMEENG",
     "companyName": "Supreme Engineering Limited"
    },
    {
     "symbol": "KARMAENG",
     "companyName": "Karma Energy Limited"
    },
    {
     "symbol": "SILLYMONKS",
     "companyName": "Silly Monks Entertainment Limited"
    },
    {
     "symbol": "FMNL",
     "companyName": "Future Market Networks Limited"
    },
    {
     "symbol": "SONUINFRA",
     "companyName": "Sonu Infratech Limited"
    },
    {
     "symbol": "EASTSILK",
     "companyName": "Eastern Silk Industries Limited"
    },
    {
     "symbol": "SOMATEX",
     "companyName": "Soma Textiles &amp; Industries Limited"
    },
    {
     "symbol": "3PLAND",
     "companyName": "3P Land Holdings Limited"
    },
    {
     "symbol": "QUADPRO",
     "companyName": "Quadpro Ites Limited"
    },
    {
     "symbol": "REXPIPES",
     "companyName": "Rex Pipes And Cables Industries Limited"
    },
    {
     "symbol": "CYBERMEDIA",
     "companyName": "Cyber Media (India) Limited"
    },
    {
     "symbol": "CADSYS",
     "companyName": "Cadsys (India) Limited"
    },
    {
     "symbol": "VCL",
     "companyName": "Vaxtex Cotfab Limited"
    },
    {
     "symbol": "EDUCOMP",
     "companyName": "Educomp Solutions Limited"
    },
    {
     "symbol": "MOXSH",
     "companyName": "Moxsh Overseas Educon Limited"
    },
    {
     "symbol": "WALPAR",
     "companyName": "Walpar Nutritions Limited"
    },
    {
     "symbol": "OMFURN",
     "companyName": "Omfurn India Limited"
    },
    {
     "symbol": "SUBCAPCITY",
     "companyName": "International Constructions Limited"
    },
    {
     "symbol": "CMICABLES",
     "companyName": "CMI Limited"
    },
    {
     "symbol": "SILGO",
     "companyName": "Silgo Retail Limited"
    },
    {
     "symbol": "INFOMEDIA",
     "companyName": "Infomedia Press Limited"
    },
    {
     "symbol": "VIJIFIN",
     "companyName": "Viji Finance Limited"
    },
    {
     "symbol": "WILLAMAGOR",
     "companyName": "Williamson Magor &amp; Company Limited"
    },
    {
     "symbol": "THOMASCOTT",
     "companyName": "Thomas Scott (India) Limited"
    },
    {
     "symbol": "JAKHARIA",
     "companyName": "JAKHARIA FABRIC LIMITED"
    },
    {
     "symbol": "VIVO",
     "companyName": "Vivo Collaboration Solutions Limited"
    },
    {
     "symbol": "ASLIND",
     "companyName": "ASL Industries Limited"
    },
    {
     "symbol": "MPTODAY",
     "companyName": "Madhya Pradesh Today Media Limited"
    },
    {
     "symbol": "DYNAMIC",
     "companyName": "Dynamic Services &amp; Security Limited"
    },
    {
     "symbol": "ORIENTALTL",
     "companyName": "Oriental Trimex Limited"
    },
    {
     "symbol": "NKIND",
     "companyName": "NK Industries Limited"
    },
    {
     "symbol": "TFL",
     "companyName": "Transwarranty Finance Limited"
    },
    {
     "symbol": "RICHA",
     "companyName": "Richa Info Systems Limited"
    },
    {
     "symbol": "NAGREEKCAP",
     "companyName": "Nagreeka Capital &amp; Infrastructure Limited"
    },
    {
     "symbol": "AMJUMBO",
     "companyName": "A and M Jumbo Bags Limited"
    },
    {
     "symbol": "21STCENMGM",
     "companyName": "21st Century Management Services Limited"
    },
    {
     "symbol": "SHANTI",
     "companyName": "Shanti Overseas (India) Limited"
    },
    {
     "symbol": "MASKINVEST",
     "companyName": "Mask Investments Limited"
    },
    {
     "symbol": "MOHITIND",
     "companyName": "Mohit Industries Limited"
    },
    {
     "symbol": "KHAITANLTD",
     "companyName": "Khaitan (India) Limited"
    },
    {
     "symbol": "SABAR",
     "companyName": "Sabar Flex India Limited"
    },
    {
     "symbol": "UNIINFO",
     "companyName": "Uniinfo Telecom Services Limited"
    },
    {
     "symbol": "MAKS",
     "companyName": "Maks Energy Solutions India Limited"
    },
    {
     "symbol": "TAPIFRUIT",
     "companyName": "Tapi Fruit Processing Limited"
    },
    {
     "symbol": "TANTIACONS",
     "companyName": "Tantia Constructions Limited"
    },
    {
     "symbol": "GAYAHWS",
     "companyName": "Gayatri Highways Limited"
    },
    {
     "symbol": "SETUINFRA",
     "companyName": "Setubandhan Infrastructure Limited"
    },
    {
     "symbol": "VEEKAYEM",
     "companyName": "Veekayem Fashion and Apparels Limited"
    },
    {
     "symbol": "ISHAN",
     "companyName": "Ishan International Limited"
    },
    {
     "symbol": "TIJARIA",
     "companyName": "Tijaria Polypipes Limited"
    },
    {
     "symbol": "ORTINLAB",
     "companyName": "Ortin Laboratories Limited"
    },
    {
     "symbol": "GUJRAFFIA",
     "companyName": "Gujarat Raffia Industries Limited"
    },
    {
     "symbol": "ONELIFECAP",
     "companyName": "Onelife Capital Advisors Limited"
    },
    {
     "symbol": "KAUSHALYA",
     "companyName": "Kaushalya Infrastructure Development Corporation Limited"
    },
    {
     "symbol": "VERA",
     "companyName": "Vera Synthetic Limited"
    },
    {
     "symbol": "METALFORGE",
     "companyName": "Metalyst Forgings Limited"
    },
    {
     "symbol": "SURANI",
     "companyName": "Surani Steel Tubes Limited"
    },
    {
     "symbol": "LYPSAGEMS",
     "companyName": "Lypsa Gems &amp; Jewellery Limited"
    },
    {
     "symbol": "MITTAL",
     "companyName": "Mittal Life Style Limited"
    },
    {
     "symbol": "TNTELE",
     "companyName": "Tamilnadu Telecommunication Limited"
    },
    {
     "symbol": "AMIABLE",
     "companyName": "Amiable Logistics (India) Limited"
    },
    {
     "symbol": "ABINFRA",
     "companyName": "A B Infrabuild Limited"
    },
    {
     "symbol": "SMVD",
     "companyName": "SMVD Poly Pack Limited"
    },
    {
     "symbol": "CONTI",
     "companyName": "Continental Seeds and Chemicals Limited"
    },
    {
     "symbol": "NATNLSTEEL",
     "companyName": "National Steel And Agro Industries Limited"
    },
    {
     "symbol": "TECHIN",
     "companyName": "Techindia Nirman Limited"
    },
    {
     "symbol": "RMCL",
     "companyName": "Radha Madhav Corporation Limited"
    },
    {
     "symbol": "SPRL",
     "companyName": "Sp Refractories Limited"
    },
    {
     "symbol": "JALAN",
     "companyName": "Jalan Transolutions (India) Limited"
    },
    {
     "symbol": "DESTINY",
     "companyName": "Destiny Logistics &amp; Infra Limited"
    },
    {
     "symbol": "S&amp;SPOWER",
     "companyName": "S&amp;S Power Switchgears Limited"
    },
    {
     "symbol": "KAVVERITEL",
     "companyName": "Kavveri Telecom Products Limited"
    },
    {
     "symbol": "KANDARP",
     "companyName": "Kandarp Digi Smart BPO Limited"
    },
    {
     "symbol": "PERFECT",
     "companyName": "Perfect Infraengineers Limited"
    },
    {
     "symbol": "ARENTERP",
     "companyName": "Rajdarshan Industries Limited"
    },
    {
     "symbol": "UMESLTD",
     "companyName": "Usha Martin Education &amp; Solutions Limited"
    },
    {
     "symbol": "ANTGRAPHIC",
     "companyName": "Antarctica Limited"
    },
    {
     "symbol": "KALYANI",
     "companyName": "Kalyani Commercials Limited"
    },
    {
     "symbol": "SSINFRA",
     "companyName": "S.S. Infrastructure Development Consultants Limited"
    },
    {
     "symbol": "SHYAMTEL",
     "companyName": "Shyam Telecom Limited"
    },
    {
     "symbol": "CMMIPL",
     "companyName": "CMM Infraprojects Limited"
    },
    {
     "symbol": "ACCORD",
     "companyName": "Accord Synergy Limited"
    },
    {
     "symbol": "TVVISION",
     "companyName": "TV Vision Limited"
    },
    {
     "symbol": "RMDRIP",
     "companyName": "R M Drip and Sprinklers Systems Limited"
    },
    {
     "symbol": "BRIGHT",
     "companyName": "Bright Solar Limited"
    },
    {
     "symbol": "DCMFINSERV",
     "companyName": "DCM Financial Services Limited"
    },
    {
     "symbol": "PREMIER",
     "companyName": "Premier Limited"
    },
    {
     "symbol": "EUROTEXIND",
     "companyName": "Eurotex Industries and Exports Limited"
    },
    {
     "symbol": "RADAAN",
     "companyName": "Radaan Mediaworks India Limited"
    },
    {
     "symbol": "KCK",
     "companyName": "Kck Industries Limited"
    },
    {
     "symbol": "NORBTEAEXP",
     "companyName": "Norben Tea &amp; Exports Limited"
    },
    {
     "symbol": "SATHAISPAT",
     "companyName": "Sathavahana Ispat Limited"
    },
    {
     "symbol": "AILIMITED",
     "companyName": "Abhishek Integrations Limited"
    },
    {
     "symbol": "CREATIVEYE",
     "companyName": "Creative Eye Limited"
    },
    {
     "symbol": "TARAPUR",
     "companyName": "Tarapur Transformers Limited"
    },
    {
     "symbol": "ALPSINDUS",
     "companyName": "Alps Industries Limited"
    },
    {
     "symbol": "ABNINT",
     "companyName": "A B N Intercorp Limited"
    },
    {
     "symbol": "GLFL",
     "companyName": "Gujarat Lease Financing Limited"
    },
    {
     "symbol": "VASA",
     "companyName": "Vasa Retail and Overseas Ltd"
    },
    {
     "symbol": "BKMINDST",
     "companyName": "Bkm Industries Limited"
    },
    {
     "symbol": "AHIMSA",
     "companyName": "Ahimsa Industries Limited"
    },
    {
     "symbol": "GRETEX",
     "companyName": "Gretex Industries Limited"
    },
    {
     "symbol": "SRIRAM",
     "companyName": "Shri Ram Switchgears Limited"
    },
    {
     "symbol": "TRANSWIND",
     "companyName": "Transwind Infrastructures Limited"
    },
    {
     "symbol": "NIRAJISPAT",
     "companyName": "Niraj Ispat Industries Limited"
    },
    {
     "symbol": "SKSTEXTILE",
     "companyName": "SKS Textiles Limited"
    },
    {
     "symbol": "LAKPRE",
     "companyName": "Lakshmi Precision Screws Limited"
    },
    {
     "symbol": "SABEVENTS",
     "companyName": "Sab Events &amp; Governance Now Media Limited"
    },
    {
     "symbol": "INDLMETER",
     "companyName": "IMP Powers Limited"
    },
    {
     "symbol": "DRL",
     "companyName": "Dhanuka Realty Limited"
    },
    {
     "symbol": "MANAV",
     "companyName": "Manav Infra Projects Limited"
    },
    {
     "symbol": "BHALCHANDR",
     "companyName": "Bhalchandram Clothing Limited"
    },
    {
     "symbol": "INNOVATIVE",
     "companyName": "Innovative Tyres and Tubes Limited"
    },
    {
     "symbol": "MELSTAR",
     "companyName": "Melstar Information Technologies Limited"
    },
    {
     "symbol": "ABHISHEK",
     "companyName": "Abhishek Corporation Limited"
    },
    {
     "symbol": "AHLWEST",
     "companyName": "Asian Hotels (West) Limited"
    },
    {
     "symbol": "AIFL",
     "companyName": "Ashapura Intimates Fashion Limited"
    },
    {
     "symbol": "ALCHEM",
     "companyName": "Alchemist Limited"
    },
    {
     "symbol": "ANDHRACEMT",
     "companyName": "Andhra Cements Limited"
    },
    {
     "symbol": "ANSALAPI",
     "companyName": "Ansal Properties &amp; Infrastructure Limited"
    },
    {
     "symbol": "ARCOTECH",
     "companyName": "Arcotech Limited"
    },
    {
     "symbol": "ARTEDZ",
     "companyName": "Artedz Fabs Limited"
    },
    {
     "symbol": "ASIL",
     "companyName": "Amit Spinning Industries Limited"
    },
    {
     "symbol": "ATCOM",
     "companyName": "Atcom Technologies Limited"
    },
    {
     "symbol": "ATLASCYCLE",
     "companyName": "Atlas Cycles (Haryana) Limited"
    },
    {
     "symbol": "ATNINTER",
     "companyName": "ATN International Limited"
    },
    {
     "symbol": "AUTOLITIND",
     "companyName": "Autolite (India) Limited"
    },
    {
     "symbol": "AUTORIDFIN",
     "companyName": "Autoriders Finance Limited"
    },
    {
     "symbol": "BANSAL",
     "companyName": "Bansal Multiflex Limited"
    },
    {
     "symbol": "BARTRONICS",
     "companyName": "Bartronics India Limited"
    },
    {
     "symbol": "BGLOBAL",
     "companyName": "Bharatiya Global Infomedia Limited"
    },
    {
     "symbol": "BHARATIDIL",
     "companyName": "Bharati Defence and Infrastructure Limited"
    },
    {
     "symbol": "BILENERGY",
     "companyName": "Bil Energy Systems Limited"
    },
    {
     "symbol": "BINANIIND",
     "companyName": "Binani Industries Limited"
    },
    {
     "symbol": "BIRLATYRE",
     "companyName": "Birla Tyres Limited"
    },
    {
     "symbol": "BLUEBLENDS",
     "companyName": "Blue Blends (I) Limited"
    },
    {
     "symbol": "BLUECHIP",
     "companyName": "Blue Chip India Limited"
    },
    {
     "symbol": "BLUECOAST",
     "companyName": "Blue Coast Hotels Limited"
    },
    {
     "symbol": "BRFL",
     "companyName": "Bombay Rayon Fashions Limited"
    },
    {
     "symbol": "CANDC",
     "companyName": "C &amp; C Constructions Limited"
    },
    {
     "symbol": "CCCL",
     "companyName": "Consolidated Construction Consortium Limited"
    },
    {
     "symbol": "CELESTIAL",
     "companyName": "Celestial Biolabs Limited"
    },
    {
     "symbol": "CKFSL",
     "companyName": "Cox &amp; Kings Financial Service Limited"
    },
    {
     "symbol": "CKPLEISURE",
     "companyName": "CKP Leisure Limited"
    },
    {
     "symbol": "COX&amp;KINGS",
     "companyName": "Cox &amp; Kings Limited"
    },
    {
     "symbol": "DIAPOWER",
     "companyName": "Diamond Power Infra Ltd"
    },
    {
     "symbol": "DIGJAMLMTD",
     "companyName": "Digjam Limited"
    },
    {
     "symbol": "DOLPHINOFF",
     "companyName": "Dolphin Offshore Enterprises (India) Limited"
    },
    {
     "symbol": "DQE",
     "companyName": "DQ Entertainment (International) Limited"
    },
    {
     "symbol": "DRCSYSTEMS",
     "companyName": "DRC Systems India Limited"
    },
    {
     "symbol": "DSKULKARNI",
     "companyName": "DS Kulkarni Developers Limited"
    },
    {
     "symbol": "EASTSUGIND",
     "companyName": "Eastern Sug &amp; Inds Limited"
    },
    {
     "symbol": "EASUNREYRL",
     "companyName": "Easun Reyrolle Limited"
    },
    {
     "symbol": "EMCO",
     "companyName": "Emco Limited"
    },
    {
     "symbol": "EON",
     "companyName": "Eon Electric Limited"
    },
    {
     "symbol": "EUROCERA",
     "companyName": "Euro Ceramics Limited"
    },
    {
     "symbol": "EUROMULTI",
     "companyName": "Euro Multivision Limited"
    },
    {
     "symbol": "FEDDERELEC",
     "companyName": "Fedders Electric and Engineering Limited"
    },
    {
     "symbol": "FIVECORE",
     "companyName": "Five Core Electronics Limited"
    },
    {
     "symbol": "FRETAIL",
     "companyName": "Future Retail Limited"
    },
    {
     "symbol": "GAMMONIND",
     "companyName": "Gammon India Limited"
    },
    {
     "symbol": "GANGOTRI",
     "companyName": "Gangotri Textiles Limited"
    },
    {
     "symbol": "GBGLOBAL",
     "companyName": "GB Global Limited"
    },
    {
     "symbol": "GFSTEELS",
     "companyName": "Grand Foundry Limited"
    },
    {
     "symbol": "GISOLUTION",
     "companyName": "GI Engineering Solutions Limited"
    },
    {
     "symbol": "GITANJALI",
     "companyName": "Gitanjali Gems Limited"
    },
    {
     "symbol": "HINDNATGLS",
     "companyName": "Hindusthan National Glass &amp; Industries Limited"
    },
    {
     "symbol": "ICSA",
     "companyName": "ICSA (India) Limited"
    },
    {
     "symbol": "IMPEXFERRO",
     "companyName": "Impex Ferro Tech Limited"
    },
    {
     "symbol": "INDOSOLAR",
     "companyName": "Indosolar Limited"
    },
    {
     "symbol": "IVRCLINFRA",
     "companyName": "IVRCL Limited"
    },
    {
     "symbol": "JAINSTUDIO",
     "companyName": "Jain Studios Limited"
    },
    {
     "symbol": "JIKIND",
     "companyName": "JIK Industries Limited"
    },
    {
     "symbol": "JINDCOT",
     "companyName": "Jindal Cotex Limited"
    },
    {
     "symbol": "JMTAUTOLTD",
     "companyName": "JMT Auto Limited"
    },
    {
     "symbol": "JPINFRATEC",
     "companyName": "Jaypee Infratech Limited"
    },
    {
     "symbol": "KEERTI",
     "companyName": "Keerti Knowledge and Skills Limited"
    },
    {
     "symbol": "KGL",
     "companyName": "Karuturi Global Limited"
    },
    {
     "symbol": "KSERASERA",
     "companyName": "KSS Limited"
    },
    {
     "symbol": "KSK",
     "companyName": "KSK Energy Ventures Limited"
    },
    {
     "symbol": "LAKSHMIEFL",
     "companyName": "Lakshmi Energy and Foods Limited"
    },
    {
     "symbol": "LEEL",
     "companyName": "LEEL Electricals Limited"
    },
    {
     "symbol": "MANPASAND",
     "companyName": "Manpasand Beverages Limited"
    },
    {
     "symbol": "MCDHOLDING",
     "companyName": "McDowell Holdings Limited"
    },
    {
     "symbol": "METKORE",
     "companyName": "Metkore Alloys &amp; Industries Limited"
    },
    {
     "symbol": "MICEL",
     "companyName": "MIC Electronics Limited"
    },
    {
     "symbol": "MODTHREAD",
     "companyName": "Modern Thread Limited"
    },
    {
     "symbol": "MOHOTAIND",
     "companyName": "Mohota Industries Limited"
    },
    {
     "symbol": "MVL",
     "companyName": "MVL Limited"
    },
    {
     "symbol": "NAGAFERT",
     "companyName": "Nagarjuna Fertilizers and Chemicals Limited"
    },
    {
     "symbol": "NAKODA",
     "companyName": "Nakoda Limited"
    },
    {
     "symbol": "NITINFIRE",
     "companyName": "Nitin Fire Protection Industries Limited"
    },
    {
     "symbol": "NTL",
     "companyName": "Neueon Towers Limited"
    },
    {
     "symbol": "NUTEK",
     "companyName": "Nu Tek India Limited"
    },
    {
     "symbol": "OISL",
     "companyName": "OCL Iron and Steel Limited"
    },
    {
     "symbol": "OPAL",
     "companyName": "Opal Luxury Time Products Limited"
    },
    {
     "symbol": "OPTOCIRCUI",
     "companyName": "Opto Circuits (India) Limited"
    },
    {
     "symbol": "ORTEL",
     "companyName": "Ortel Communications Limited"
    },
    {
     "symbol": "PDPL",
     "companyName": "Parenteral Drugs (India) Limited"
    },
    {
     "symbol": "PINCON",
     "companyName": "Pincon Spirit Limited"
    },
    {
     "symbol": "POWERFUL",
     "companyName": "Powerful Technologies Limited"
    },
    {
     "symbol": "PRATIBHA",
     "companyName": "Pratibha Industries Limited"
    },
    {
     "symbol": "PRUDMOULI",
     "companyName": "Prudential Sugar Corporation Limited"
    },
    {
     "symbol": "PSL",
     "companyName": "PSL Limited"
    },
    {
     "symbol": "PUNJLLOYD",
     "companyName": "Punj Lloyd Limited"
    },
    {
     "symbol": "QUINTEGRA",
     "companyName": "Quintegra Solutions Limited"
    },
    {
     "symbol": "RAINBOWPAP",
     "companyName": "Rainbow Papers Limited"
    },
    {
     "symbol": "RAJRILTD",
     "companyName": "Raj Rayon Industries Limited"
    },
    {
     "symbol": "RAJVIR",
     "companyName": "Rajvir Industries Limited"
    },
    {
     "symbol": "RCOM",
     "companyName": "Reliance Communications Limited"
    },
    {
     "symbol": "RELCAPITAL",
     "companyName": "Reliance Capital Limited"
    },
    {
     "symbol": "RMMIL",
     "companyName": "Resurgere Mines &amp; Minerals Limited"
    },
    {
     "symbol": "RUSHABEAR",
     "companyName": "Rushabh Precision Bearings Limited"
    },
    {
     "symbol": "SABTN",
     "companyName": "Sri Adhikari Brothers Television Network Limited"
    },
    {
     "symbol": "SANCO",
     "companyName": "Sanco Industries Limited"
    },
    {
     "symbol": "SBIHOMEFIN",
     "companyName": "SBI Home Finance Limited"
    },
    {
     "symbol": "SELMC",
     "companyName": "SEL Manufacturing Company Limited"
    },
    {
     "symbol": "SEYAIND",
     "companyName": "Seya Industries Limited"
    },
    {
     "symbol": "SHARONBIO",
     "companyName": "Sharon Bio-Medicine Limited"
    },
    {
     "symbol": "SHIRPUR-G",
     "companyName": "Shirpur Gold Refinery Limited"
    },
    {
     "symbol": "SICAL",
     "companyName": "Sical Logistics Limited"
    },
    {
     "symbol": "SIIL",
     "companyName": "Supreme (India) Impex Limited"
    },
    {
     "symbol": "SKIL",
     "companyName": "SKIL Infrastructure Limited"
    },
    {
     "symbol": "SONISOYA",
     "companyName": "Soni Soya Products Limited"
    },
    {
     "symbol": "SPENTEX",
     "companyName": "Spentex Industries Limited"
    },
    {
     "symbol": "SPYL",
     "companyName": "Shekhawati Poly-Yarn Limited"
    },
    {
     "symbol": "SREINFRA",
     "companyName": "SREI Infrastructure Finance Limited"
    },
    {
     "symbol": "STAMPEDE",
     "companyName": "Stampede Capital Limited"
    },
    {
     "symbol": "STERLINBIO",
     "companyName": "Sterling Biotech Limited"
    },
    {
     "symbol": "TALWALKARS",
     "companyName": "Talwalkars Better Value Fitness Limited"
    },
    {
     "symbol": "TALWGYM",
     "companyName": "Talwalkars Healthclubs Limited"
    },
    {
     "symbol": "TCIFINANCE",
     "companyName": "TCI Finance Limited"
    },
    {
     "symbol": "TECHNOFAB",
     "companyName": "Technofab Engineering Limited"
    },
    {
     "symbol": "TECILCHEM",
     "companyName": "TECIL Chemicals and Hydro Power Limited"
    },
    {
     "symbol": "THIRUSUGAR",
     "companyName": "Thiru Arooran Sugars Limited"
    },
    {
     "symbol": "TULSI",
     "companyName": "Tulsi Extrusions Limited"
    },
    {
     "symbol": "UNIPLY",
     "companyName": "Uniply Industries Limited"
    },
    {
     "symbol": "UNITY",
     "companyName": "Unity Infraprojects Limited"
    },
    {
     "symbol": "UNIVAFOODS",
     "companyName": "Univa Foods Limited"
    },
    {
     "symbol": "VALECHAENG",
     "companyName": "Valecha Engineering Limited"
    },
    {
     "symbol": "VALUEIND",
     "companyName": "Value Industries Limited"
    },
    {
     "symbol": "VICEROY",
     "companyName": "Viceroy Hotels Limited"
    },
    {
     "symbol": "VIDEOIND",
     "companyName": "Videocon Industries Limited"
    },
    {
     "symbol": "VISUINTL",
     "companyName": "Visu International Limited"
    },
    {
     "symbol": "WINSOME",
     "companyName": "Winsome Yarns Limited"
    },
    {
     "symbol": "WSI",
     "companyName": "W S Industries (I) Limited"
    },
    {
     "symbol": "ZICOM",
     "companyName": "Zicom Electronic Security Systems Limited"
    }
   ]
   // console.log(listedCompany.length);
   // search(listedCompany , "reliance");
   module.exports = {listedCompany ,dayReturn};