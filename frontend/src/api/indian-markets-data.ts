// Comprehensive Indian States, Districts, and Markets Data
// Expanded coverage with more districts and markets for all states

export interface Market {
    name: string
    district: string
    state: string
}

export interface District {
    name: string
    state: string
}

export interface State {
    name: string
    code: string
}

// All Indian States
export const INDIAN_STATES: State[] = [
    { name: 'Andhra Pradesh', code: 'AP' },
    { name: 'Assam', code: 'AS' },
    { name: 'Bihar', code: 'BR' },
    { name: 'Chhattisgarh', code: 'CG' },
    { name: 'Goa', code: 'GA' },
    { name: 'Gujarat', code: 'GJ' },
    { name: 'Haryana', code: 'HR' },
    { name: 'Himachal Pradesh', code: 'HP' },
    { name: 'Jharkhand', code: 'JH' },
    { name: 'Karnataka', code: 'KA' },
    { name: 'Kerala', code: 'KL' },
    { name: 'Madhya Pradesh', code: 'MP' },
    { name: 'Maharashtra', code: 'MH' },
    { name: 'Odisha', code: 'OR' },
    { name: 'Punjab', code: 'PB' },
    { name: 'Rajasthan', code: 'RJ' },
    { name: 'Tamil Nadu', code: 'TN' },
    { name: 'Telangana', code: 'TG' },
    { name: 'Uttar Pradesh', code: 'UP' },
    { name: 'Uttarakhand', code: 'UK' },
    { name: 'West Bengal', code: 'WB' },
]

// State-wise Districts and Markets (Expanded)
export const STATE_DISTRICTS_MARKETS: { [state: string]: { [district: string]: string[] } } = {
    'Gujarat': {
        'Ahmedabad': ['Ahmedabad Market Yard', 'Naroda APMC', 'Bavla Mandi', 'Dholka Market', 'Sanand APMC'],
        'Surat': ['Surat Market Yard', 'Kadodara APMC', 'Udhna Market', 'Bardoli APMC', 'Kamrej Market'],
        'Vadodara': ['Vadodara Market Yard', 'Dabhoi APMC', 'Karjan Market', 'Padra APMC', 'Savli Market'],
        'Rajkot': ['Rajkot Market Yard', 'Gondal APMC', 'Jetpur Market', 'Morbi APMC', 'Upleta Market'],
        'Bhavnagar': ['Bhavnagar Market Yard', 'Mahuva APMC', 'Talaja Market', 'Sihor APMC', 'Palitana Market'],
        'Jamnagar': ['Jamnagar Market Yard', 'Dwarka APMC', 'Khambhalia Market', 'Jodiya APMC', 'Lalpur Market'],
        'Junagadh': ['Junagadh Market Yard', 'Veraval APMC', 'Keshod Market', 'Manavadar APMC', 'Visavadar Market'],
        'Gandhinagar': ['Gandhinagar Market Yard', 'Mansa APMC', 'Kalol Market', 'Dehgam APMC'],
        'Anand': ['Anand Market Yard', 'Petlad APMC', 'Borsad Market', 'Khambhat APMC', 'Umreth Market'],
        'Kheda': ['Kheda Market Yard', 'Nadiad APMC', 'Mahudha Market', 'Kapadvanj APMC', 'Kathlal Market'],
        'Mehsana': ['Mehsana Market Yard', 'Visnagar APMC', 'Unjha Market', 'Kadi APMC', 'Vijapur Market'],
        'Patan': ['Patan Market Yard', 'Radhanpur APMC', 'Sidhpur Market', 'Harij APMC'],
        'Banaskantha': ['Palanpur Market Yard', 'Deesa APMC', 'Dhanera Market', 'Danta APMC', 'Tharad Market'],
        'Sabarkantha': ['Himmatnagar Market Yard', 'Idar APMC', 'Prantij Market', 'Talod APMC'],
        'Amreli': ['Amreli Market Yard', 'Dhari APMC', 'Lathi Market', 'Savarkundla APMC', 'Bagasara Market'],
        'Surendranagar': ['Surendranagar Market Yard', 'Wadhwan APMC', 'Dhrangadhra Market', 'Chotila APMC'],
        'Porbandar': ['Porbandar Market Yard', 'Ranavav APMC', 'Kutiyana Market'],
        'Bharuch': ['Bharuch Market Yard', 'Ankleshwar APMC', 'Jambusar Market', 'Amod APMC', 'Valia Market'],
        'Navsari': ['Navsari Market Yard', 'Chikhli APMC', 'Gandevi Market', 'Jalalpore APMC'],
        'Valsad': ['Valsad Market Yard', 'Vapi APMC', 'Pardi Market', 'Umbergaon APMC'],
        'Tapi': ['Vyara Market Yard', 'Songadh APMC', 'Valod Market', 'Nizar APMC'],
        'Narmada': ['Rajpipla Market Yard', 'Dediapada APMC', 'Tilakwada Market'],
        'Dahod': ['Dahod Market Yard', 'Limkheda APMC', 'Devgadh Baria Market', 'Jhalod APMC'],
        'Panchmahal': ['Godhra Market Yard', 'Halol APMC', 'Kalol Market', 'Lunawada APMC', 'Morwa Market'],
        'Mahisagar': ['Lunawada Market Yard', 'Santrampur APMC', 'Kadana Market'],
        'Aravalli': ['Modasa Market Yard', 'Bayad APMC', 'Dhansura Market'],
        'Botad': ['Botad Market Yard', 'Gadhada APMC', 'Barvala Market'],
        'Devbhumi Dwarka': ['Khambhalia Market Yard', 'Kalyanpur APMC', 'Bhanvad Market'],
        'Gir Somnath': ['Veraval Market Yard', 'Una APMC', 'Kodinar Market', 'Talala APMC'],
        'Morbi': ['Morbi Market Yard', 'Wankaner APMC', 'Maliya Market', 'Halvad APMC'],
    },
    'Maharashtra': {
        'Mumbai': ['Vashi APMC', 'Turbhe Market', 'Dadar Market', 'Crawford Market'],
        'Pune': ['Pune Market Yard', 'Hadapsar APMC', 'Market Yard Gultekdi', 'Pimpri Market', 'Chinchwad APMC'],
        'Nagpur': ['Nagpur Market Yard', 'Kalamna Market', 'Hingna APMC', 'Kamptee Market'],
        'Nashik': ['Nashik Market Yard', 'Malegaon APMC', 'Sinnar Market', 'Igatpuri APMC', 'Niphad Market'],
        'Aurangabad': ['Aurangabad Market Yard', 'Paithan APMC', 'Gangapur Market', 'Vaijapur APMC'],
        'Solapur': ['Solapur Market Yard', 'Pandharpur APMC', 'Akkalkot Market', 'Barshi APMC', 'Mohol Market'],
        'Kolhapur': ['Kolhapur Market Yard', 'Ichalkaranji APMC', 'Kagal Market', 'Panhala APMC', 'Shahuwadi Market'],
        'Thane': ['Thane Market Yard', 'Kalyan APMC', 'Bhiwandi Market', 'Ulhasnagar APMC'],
        'Ahmednagar': ['Ahmednagar Market Yard', 'Shrirampur APMC', 'Rahuri Market', 'Sangamner APMC'],
        'Satara': ['Satara Market Yard', 'Karad APMC', 'Wai Market', 'Phaltan APMC'],
        'Sangli': ['Sangli Market Yard', 'Miraj APMC', 'Tasgaon Market', 'Jat APMC'],
        'Jalgaon': ['Jalgaon Market Yard', 'Bhusawal APMC', 'Amalner Market', 'Chopda APMC'],
        'Dhule': ['Dhule Market Yard', 'Shirpur APMC', 'Sakri Market'],
        'Nandurbar': ['Nandurbar Market Yard', 'Shahada APMC', 'Taloda Market'],
        'Amravati': ['Amravati Market Yard', 'Achalpur APMC', 'Chandur Bazar Market'],
        'Akola': ['Akola Market Yard', 'Akot APMC', 'Balapur Market'],
        'Latur': ['Latur Market Yard', 'Ausa APMC', 'Nilanga Market'],
        'Osmanabad': ['Osmanabad Market Yard', 'Tuljapur APMC', 'Bhum Market'],
        'Beed': ['Beed Market Yard', 'Parli APMC', 'Georai Market'],
        'Parbhani': ['Parbhani Market Yard', 'Jintur APMC', 'Gangakhed Market'],
    },
    'Punjab': {
        'Ludhiana': ['Ludhiana Market Yard', 'Khanna APMC', 'Samrala Market', 'Jagraon APMC', 'Raikot Market'],
        'Amritsar': ['Amritsar Market Yard', 'Ajnala APMC', 'Tarn Taran Market', 'Majitha APMC'],
        'Jalandhar': ['Jalandhar Market Yard', 'Phagwara APMC', 'Nakodar Market', 'Shahkot APMC'],
        'Patiala': ['Patiala Market Yard', 'Rajpura APMC', 'Nabha Market', 'Samana APMC'],
        'Bathinda': ['Bathinda Market Yard', 'Mansa APMC', 'Talwandi Sabo Market', 'Rampura APMC'],
        'Mohali': ['Mohali Market Yard', 'Kharar APMC', 'Kurali Market'],
        'Hoshiarpur': ['Hoshiarpur Market Yard', 'Garhshankar APMC', 'Dasuya Market'],
        'Firozpur': ['Firozpur Market Yard', 'Zira APMC', 'Fazilka Market', 'Abohar APMC'],
        'Sangrur': ['Sangrur Market Yard', 'Sunam APMC', 'Malerkotla Market', 'Dhuri APMC'],
        'Kapurthala': ['Kapurthala Market Yard', 'Sultanpur Lodhi APMC', 'Phagwara Market'],
        'Gurdaspur': ['Gurdaspur Market Yard', 'Batala APMC', 'Pathankot Market', 'Dera Baba Nanak APMC'],
        'Moga': ['Moga Market Yard', 'Nihal Singh Wala APMC', 'Baghapurana Market'],
        'Faridkot': ['Faridkot Market Yard', 'Jaitu APMC', 'Kotkapura Market'],
        'Muktsar': ['Muktsar Market Yard', 'Malout APMC', 'Gidderbaha Market'],
    },
    'Haryana': {
        'Faridabad': ['Faridabad Market Yard', 'Ballabgarh APMC', 'Palwal Market', 'Hodal APMC'],
        'Gurgaon': ['Gurgaon Market Yard', 'Sohna APMC', 'Pataudi Market', 'Manesar APMC'],
        'Hisar': ['Hisar Market Yard', 'Hansi APMC', 'Barwala Market', 'Adampur APMC'],
        'Karnal': ['Karnal Market Yard', 'Panipat APMC', 'Kaithal Market', 'Assandh APMC'],
        'Rohtak': ['Rohtak Market Yard', 'Jhajjar APMC', 'Bahadurgarh Market', 'Meham APMC'],
        'Ambala': ['Ambala Market Yard', 'Naraingarh APMC', 'Barara Market'],
        'Sonipat': ['Sonipat Market Yard', 'Gohana APMC', 'Kharkhoda Market'],
        'Sirsa': ['Sirsa Market Yard', 'Dabwali APMC', 'Ellenabad Market'],
        'Bhiwani': ['Bhiwani Market Yard', 'Loharu APMC', 'Tosham Market'],
        'Jind': ['Jind Market Yard', 'Narwana APMC', 'Safidon Market'],
        'Kurukshetra': ['Kurukshetra Market Yard', 'Pehowa APMC', 'Shahabad Market'],
        'Yamunanagar': ['Yamunanagar Market Yard', 'Jagadhri APMC', 'Radaur Market'],
    },
    'Rajasthan': {
        'Jaipur': ['Jaipur Market Yard', 'Sanganer APMC', 'Chomu Market', 'Amber APMC', 'Bassi Market'],
        'Jodhpur': ['Jodhpur Market Yard', 'Phalodi APMC', 'Bilara Market', 'Osian APMC'],
        'Kota': ['Kota Market Yard', 'Bundi APMC', 'Jhalawar Market', 'Baran APMC'],
        'Ajmer': ['Ajmer Market Yard', 'Kishangarh APMC', 'Beawar Market', 'Pushkar APMC'],
        'Udaipur': ['Udaipur Market Yard', 'Mavli APMC', 'Salumbar Market', 'Gogunda APMC'],
        'Bikaner': ['Bikaner Market Yard', 'Nokha APMC', 'Kolayat Market'],
        'Alwar': ['Alwar Market Yard', 'Behror APMC', 'Tijara Market'],
        'Bharatpur': ['Bharatpur Market Yard', 'Deeg APMC', 'Bayana Market'],
        'Sikar': ['Sikar Market Yard', 'Fatehpur APMC', 'Neem Ka Thana Market'],
        'Pali': ['Pali Market Yard', 'Sojat APMC', 'Jaitaran Market'],
    },
    'Karnataka': {
        'Bangalore': ['Bangalore Market Yard', 'Yeshwanthpur APMC', 'KR Market', 'Binny Mill Market'],
        'Mysore': ['Mysore Market Yard', 'Bannur APMC', 'Nanjangud Market', 'HD Kote APMC'],
        'Hubli': ['Hubli Market Yard', 'Dharwad APMC', 'Gadag Market', 'Kundgol APMC'],
        'Mangalore': ['Mangalore Market Yard', 'Bantwal APMC', 'Puttur Market', 'Sullia APMC'],
        'Belgaum': ['Belgaum Market Yard', 'Gokak APMC', 'Bailhongal Market', 'Chikodi APMC'],
        'Gulbarga': ['Gulbarga Market Yard', 'Yadgir APMC', 'Sedam Market', 'Chincholi APMC'],
        'Bellary': ['Bellary Market Yard', 'Hospet APMC', 'Sandur Market'],
        'Shimoga': ['Shimoga Market Yard', 'Bhadravati APMC', 'Sagar Market'],
        'Tumkur': ['Tumkur Market Yard', 'Tiptur APMC', 'Gubbi Market'],
        'Davangere': ['Davangere Market Yard', 'Harihar APMC', 'Channagiri Market'],
    },
    'Tamil Nadu': {
        'Chennai': ['Koyambedu Market', 'Madhavaram Market', 'Thiruvanmiyur APMC', 'Tambaram Market'],
        'Coimbatore': ['Coimbatore Market Yard', 'Pollachi APMC', 'Mettupalayam Market', 'Tirupur APMC'],
        'Madurai': ['Madurai Market Yard', 'Usilampatti APMC', 'Melur Market', 'Vadipatti APMC'],
        'Tiruchirappalli': ['Trichy Market Yard', 'Lalgudi APMC', 'Srirangam Market', 'Musiri APMC'],
        'Salem': ['Salem Market Yard', 'Attur APMC', 'Mettur Market', 'Omalur APMC'],
        'Tirunelveli': ['Tirunelveli Market Yard', 'Tenkasi APMC', 'Ambasamudram Market', 'Sankarankovil APMC'],
        'Erode': ['Erode Market Yard', 'Gobichettipalayam APMC', 'Bhavani Market', 'Perundurai APMC'],
        'Vellore': ['Vellore Market Yard', 'Ambur APMC', 'Vaniyambadi Market'],
        'Thanjavur': ['Thanjavur Market Yard', 'Kumbakonam APMC', 'Pattukkottai Market'],
        'Dindigul': ['Dindigul Market Yard', 'Palani APMC', 'Oddanchatram Market'],
    },
    'Andhra Pradesh': {
        'Visakhapatnam': ['Visakhapatnam Market Yard', 'Anakapalle APMC', 'Narsipatnam Market', 'Yelamanchili APMC'],
        'Vijayawada': ['Vijayawada Market Yard', 'Gudivada APMC', 'Machilipatnam Market', 'Nuzvid APMC'],
        'Guntur': ['Guntur Market Yard', 'Tenali APMC', 'Bapatla Market', 'Sattenapalle APMC'],
        'Nellore': ['Nellore Market Yard', 'Kavali APMC', 'Gudur Market', 'Atmakur APMC'],
        'Kurnool': ['Kurnool Market Yard', 'Adoni APMC', 'Nandyal Market', 'Dhone APMC'],
        'Tirupati': ['Tirupati Market Yard', 'Puttur APMC', 'Srikalahasti Market'],
        'Anantapur': ['Anantapur Market Yard', 'Hindupur APMC', 'Guntakal Market'],
        'Kadapa': ['Kadapa Market Yard', 'Proddatur APMC', 'Jammalamadugu Market'],
    },
    'Telangana': {
        'Hyderabad': ['Gaddiannaram Market', 'Bowenpally APMC', 'Erragadda Market', 'Kukatpally APMC'],
        'Warangal': ['Warangal Market Yard', 'Hanamkonda APMC', 'Jangaon Market', 'Mahabubabad APMC'],
        'Nizamabad': ['Nizamabad Market Yard', 'Bodhan APMC', 'Armoor Market', 'Kamareddy APMC'],
        'Khammam': ['Khammam Market Yard', 'Kothagudem APMC', 'Madhira Market', 'Wyra APMC'],
        'Karimnagar': ['Karimnagar Market Yard', 'Jagitial APMC', 'Peddapalli Market'],
        'Nalgonda': ['Nalgonda Market Yard', 'Miryalaguda APMC', 'Devarakonda Market'],
        'Mahbubnagar': ['Mahbubnagar Market Yard', 'Wanaparthy APMC', 'Gadwal Market'],
        'Medak': ['Medak Market Yard', 'Sangareddy APMC', 'Siddipet Market'],
    },
    'Uttar Pradesh': {
        'Lucknow': ['Lucknow Market Yard', 'Malihabad APMC', 'Mohanlalganj Market', 'Bakshi Ka Talab APMC'],
        'Kanpur': ['Kanpur Market Yard', 'Kalyanpur APMC', 'Unnao Market', 'Akbarpur APMC'],
        'Agra': ['Agra Market Yard', 'Fatehabad APMC', 'Kiraoli Market', 'Etmadpur APMC'],
        'Varanasi': ['Varanasi Market Yard', 'Chandauli APMC', 'Mughal Sarai Market', 'Ghazipur APMC'],
        'Meerut': ['Meerut Market Yard', 'Mawana APMC', 'Sardhana Market', 'Baghpat APMC'],
        'Allahabad': ['Allahabad Market Yard', 'Phulpur APMC', 'Soraon Market', 'Kaushambi APMC'],
        'Bareilly': ['Bareilly Market Yard', 'Aonla APMC', 'Faridpur Market'],
        'Gorakhpur': ['Gorakhpur Market Yard', 'Deoria APMC', 'Kushinagar Market'],
        'Moradabad': ['Moradabad Market Yard', 'Sambhal APMC', 'Chandausi Market'],
        'Aligarh': ['Aligarh Market Yard', 'Khair APMC', 'Atrauli Market'],
    },
    'Madhya Pradesh': {
        'Indore': ['Indore Market Yard', 'Mhow APMC', 'Sanwer Market', 'Depalpur APMC'],
        'Bhopal': ['Bhopal Market Yard', 'Sehore APMC', 'Raisen Market', 'Berasia APMC'],
        'Jabalpur': ['Jabalpur Market Yard', 'Katni APMC', 'Sihora Market', 'Patan APMC'],
        'Gwalior': ['Gwalior Market Yard', 'Morena APMC', 'Bhind Market', 'Dabra APMC'],
        'Ujjain': ['Ujjain Market Yard', 'Nagda APMC', 'Mahidpur Market', 'Tarana APMC'],
        'Ratlam': ['Ratlam Market Yard', 'Jaora APMC', 'Sailana Market'],
        'Dewas': ['Dewas Market Yard', 'Khategaon APMC', 'Bagli Market'],
        'Sagar': ['Sagar Market Yard', 'Rehli APMC', 'Banda Market'],
    },
    'West Bengal': {
        'Kolkata': ['Posta Market', 'Sealdah Market', 'Mechua Market', 'Burrabazar APMC'],
        'Howrah': ['Howrah Market Yard', 'Uluberia APMC', 'Bagnan Market', 'Shyampur APMC'],
        'Siliguri': ['Siliguri Market Yard', 'Jalpaiguri APMC', 'Cooch Behar Market', 'Alipurduar APMC'],
        'Durgapur': ['Durgapur Market Yard', 'Asansol APMC', 'Raniganj Market', 'Burnpur APMC'],
        'Bardhaman': ['Bardhaman Market Yard', 'Katwa APMC', 'Kalna Market'],
        'Malda': ['Malda Market Yard', 'English Bazar APMC', 'Kaliachak Market'],
        'Murshidabad': ['Murshidabad Market Yard', 'Berhampore APMC', 'Jangipur Market'],
    },
    'Bihar': {
        'Patna': ['Patna Market Yard', 'Danapur APMC', 'Fatuha Market', 'Masaurhi APMC'],
        'Gaya': ['Gaya Market Yard', 'Bodh Gaya APMC', 'Tekari Market', 'Sherghati APMC'],
        'Bhagalpur': ['Bhagalpur Market Yard', 'Kahalgaon APMC', 'Naugachhia Market', 'Sultanganj APMC'],
        'Muzaffarpur': ['Muzaffarpur Market Yard', 'Sitamarhi APMC', 'Sheohar Market', 'Motihari APMC'],
        'Darbhanga': ['Darbhanga Market Yard', 'Madhubani APMC', 'Samastipur Market'],
        'Purnia': ['Purnia Market Yard', 'Katihar APMC', 'Araria Market'],
    },
    'Odisha': {
        'Bhubaneswar': ['Bhubaneswar Market Yard', 'Cuttack APMC', 'Khordha Market', 'Puri APMC'],
        'Berhampur': ['Berhampur Market Yard', 'Gopalpur APMC', 'Chhatrapur Market', 'Aska APMC'],
        'Rourkela': ['Rourkela Market Yard', 'Sundargarh APMC', 'Rajgangpur Market', 'Bonai APMC'],
        'Sambalpur': ['Sambalpur Market Yard', 'Bargarh APMC', 'Jharsuguda Market'],
        'Balasore': ['Balasore Market Yard', 'Bhadrak APMC', 'Jaleswar Market'],
    },
    'Kerala': {
        'Thiruvananthapuram': ['Thiruvananthapuram Market', 'Neyyattinkara APMC', 'Attingal Market', 'Varkala APMC'],
        'Kochi': ['Kochi Market Yard', 'Ernakulam APMC', 'Aluva Market', 'Perumbavoor APMC'],
        'Kozhikode': ['Kozhikode Market Yard', 'Vadakara APMC', 'Koyilandy Market', 'Thamarassery APMC'],
        'Thrissur': ['Thrissur Market Yard', 'Chalakudy APMC', 'Irinjalakuda Market', 'Kodungallur APMC'],
        'Kollam': ['Kollam Market Yard', 'Karunagappally APMC', 'Punalur Market'],
        'Palakkad': ['Palakkad Market Yard', 'Ottapalam APMC', 'Chittur Market'],
    },
    'Assam': {
        'Guwahati': ['Guwahati Market Yard', 'Beltola APMC', 'Jalukbari Market', 'Khanapara APMC'],
        'Dibrugarh': ['Dibrugarh Market Yard', 'Tinsukia APMC', 'Margherita Market', 'Digboi APMC'],
        'Silchar': ['Silchar Market Yard', 'Cachar APMC', 'Hailakandi Market', 'Karimganj APMC'],
        'Jorhat': ['Jorhat Market Yard', 'Titabar APMC', 'Mariani Market'],
        'Nagaon': ['Nagaon Market Yard', 'Hojai APMC', 'Morigaon Market'],
    },
    'Chhattisgarh': {
        'Raipur': ['Raipur Market Yard', 'Durg APMC', 'Bhilai Market', 'Rajnandgaon APMC'],
        'Bilaspur': ['Bilaspur Market Yard', 'Korba APMC', 'Champa Market', 'Mungeli APMC'],
        'Jagdalpur': ['Jagdalpur Market Yard', 'Bastar APMC', 'Kondagaon Market'],
    },
    'Jharkhand': {
        'Ranchi': ['Ranchi Market Yard', 'Khunti APMC', 'Bundu Market', 'Kanke APMC'],
        'Jamshedpur': ['Jamshedpur Market Yard', 'Seraikela APMC', 'Chaibasa Market', 'Ghatshila APMC'],
        'Dhanbad': ['Dhanbad Market Yard', 'Jharia APMC', 'Sindri Market', 'Bokaro APMC'],
        'Hazaribagh': ['Hazaribagh Market Yard', 'Ramgarh APMC', 'Chatra Market'],
    },
    'Uttarakhand': {
        'Dehradun': ['Dehradun Market Yard', 'Rishikesh APMC', 'Vikasnagar Market', 'Doiwala APMC'],
        'Haridwar': ['Haridwar Market Yard', 'Roorkee APMC', 'Laksar Market', 'Bhagwanpur APMC'],
        'Haldwani': ['Haldwani Market Yard', 'Nainital APMC', 'Rudrapur Market'],
        'Udham Singh Nagar': ['Rudrapur Market Yard', 'Kashipur APMC', 'Kichha Market'],
    },
    'Himachal Pradesh': {
        'Shimla': ['Shimla Market Yard', 'Solan APMC', 'Theog Market', 'Rampur APMC'],
        'Mandi': ['Mandi Market Yard', 'Kullu APMC', 'Sundernagar Market', 'Jogindernagar APMC'],
        'Kangra': ['Kangra Market Yard', 'Palampur APMC', 'Dharamshala Market'],
        'Hamirpur': ['Hamirpur Market Yard', 'Nadaun APMC', 'Sujanpur Market'],
    },
    'Goa': {
        'Panaji': ['Panaji Market Yard', 'Margao APMC', 'Mapusa Market', 'Ponda APMC'],
    },
}

// Helper Functions
export function getAllStates(): string[] {
    return INDIAN_STATES.map(s => s.name).sort()
}

export function getDistrictsForState(state: string): string[] {
    const districts = STATE_DISTRICTS_MARKETS[state]
    if (!districts) return []
    return Object.keys(districts).sort()
}

export function getMarketsForDistrict(state: string, district: string): string[] {
    const districts = STATE_DISTRICTS_MARKETS[state]
    if (!districts) return []
    const markets = districts[district]
    if (!markets) return []
    return markets.sort()
}

export function getAllMarkets(): Market[] {
    const markets: Market[] = []
    Object.entries(STATE_DISTRICTS_MARKETS).forEach(([state, districts]) => {
        Object.entries(districts).forEach(([district, marketList]) => {
            marketList.forEach(marketName => {
                markets.push({ name: marketName, district, state })
            })
        })
    })
    return markets
}
