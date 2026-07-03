// Multilingual translations for Market Yard
// Supports Gujarati, Hindi, English, and more

export interface Language {
    code: string
    name: string
    nativeName: string
}

export const LANGUAGES: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
]

// State name translations
export const stateTranslations: { [key: string]: { [lang: string]: string } } = {
    'Gujarat': { en: 'Gujarat', gu: 'ગુજરાત', hi: 'गुजरात', mr: 'गुजरात', pa: 'ਗੁਜਰਾਤ', ta: 'குஜராத்', te: 'గుజరాత్', kn: 'ಗುಜರಾತ್', bn: 'গুজরাট', or: 'ଗୁଜୁରାଟ' },
    'Maharashtra': { en: 'Maharashtra', gu: 'મહારાષ્ટ્ર', hi: 'महाराष्ट्र', mr: 'महाराष्ट्र', pa: 'ਮਹਾਰਾਸ਼ਟਰ', ta: 'மகாராஷ்டிரா', te: 'మహారాష్ట్ర', kn: 'ಮಹಾರಾಷ್ಟ್ರ', bn: 'মহারাষ্ট্র', or: 'ମହାରାଷ୍ଟ୍ର' },
    'Punjab': { en: 'Punjab', gu: 'પંજાબ', hi: 'पंजाब', mr: 'पंजाब', pa: 'ਪੰਜਾਬ', ta: 'பஞ்சாப்', te: 'పంజాబ్', kn: 'ಪಂಜಾಬ್', bn: 'পাঞ্জাব', or: 'ପଞ୍ଜାବ' },
    'Haryana': { en: 'Haryana', gu: 'હરિયાણા', hi: 'हरियाणा', mr: 'हरियाणा', pa: 'ਹਰਿਆਣਾ', ta: 'ஹரியானா', te: 'హర్యానా', kn: 'ಹರಿಯಾಣ', bn: 'হরিয়ানা', or: 'ହରିୟାଣା' },
    'Rajasthan': { en: 'Rajasthan', gu: 'રાજસ્થાન', hi: 'राजस्थान', mr: 'राजस्थान', pa: 'ਰਾਜਸਥਾਨ', ta: 'ராஜஸ்தான்', te: 'రాజస్థాన్', kn: 'ರಾಜಸ್ಥಾನ', bn: 'রাজস্থান', or: 'ରାଜସ୍ଥାନ' },
    'Karnataka': { en: 'Karnataka', gu: 'કર્ણાટક', hi: 'कर्नाटक', mr: 'कर्नाटक', pa: 'ਕਰਨਾਟਕ', ta: 'கர்நாடகா', te: 'కర్ణాటక', kn: 'ಕರ್ನಾಟಕ', bn: 'কর্ণাটক', or: 'କର୍ଣ୍ଣାଟକ' },
    'Tamil Nadu': { en: 'Tamil Nadu', gu: 'તમિલનાડુ', hi: 'तमिलनाडु', mr: 'तामिळनाडू', pa: 'ਤਾਮਿਲਨਾਡੂ', ta: 'தமிழ்நாடு', te: 'తమిళనాడు', kn: 'ತಮಿಳುನಾಡು', bn: 'তামিলনাড়ু', or: 'ତାମିଲନାଡୁ' },
    'Andhra Pradesh': { en: 'Andhra Pradesh', gu: 'આંધ્ર પ્રદેશ', hi: 'आंध्र प्रदेश', mr: 'आंध्र प्रदेश', pa: 'ਆਂਧਰਾ ਪ੍ਰਦੇਸ਼', ta: 'ஆந்திர பிரதேசம்', te: 'ఆంధ్ర ప్రదేశ్', kn: 'ಆಂಧ್ರ ಪ್ರದೇಶ', bn: 'অন্ধ্র প্রদেশ', or: 'ଆନ୍ଧ୍ରପ୍ରଦେଶ' },
    'Telangana': { en: 'Telangana', gu: 'તેલંગાણા', hi: 'तेलंगाना', mr: 'तेलंगणा', pa: 'ਤੇਲੰਗਾਨਾ', ta: 'தெலுங்கானா', te: 'తెలంగాణ', kn: 'ತೆಲಂಗಾಣ', bn: 'তেলেঙ্গানা', or: 'ତେଲେଙ୍ଗାନା' },
    'West Bengal': { en: 'West Bengal', gu: 'પશ્ચિમ બંગાળ', hi: 'पश्चिम बंगाल', mr: 'पश्चिम बंगाल', pa: 'ਪੱਛਮੀ ਬੰਗਾਲ', ta: 'மேற்கு வங்கம்', te: 'పశ్చిమ బెంగాల్', kn: 'ಪಶ್ಚಿಮ ಬಂಗಾಳ', bn: 'পশ্চিমবঙ্গ', or: 'ପଶ୍ଚିମବଙ୍ଗ' },
    'Bihar': { en: 'Bihar', gu: 'બિહાર', hi: 'बिहार', mr: 'बिहार', pa: 'ਬਿਹਾਰ', ta: 'பீகார்', te: 'బీహార్', kn: 'ಬಿಹಾರ', bn: 'বিহার', or: 'ବିହାର' },
    'Uttar Pradesh': { en: 'Uttar Pradesh', gu: 'ઉત્તર પ્રદેશ', hi: 'उत्तर प्रदेश', mr: 'उत्तर प्रदेश', pa: 'ਉੱਤਰ ਪ੍ਰਦੇਸ਼', ta: 'உத்தரப் பிரதேசம்', te: 'ఉత్తర ప్రదేశ్', kn: 'ಉತ್ತರ ಪ್ರದೇಶ', bn: 'উত্তর প্রদেশ', or: 'ଉତ୍ତର ପ୍ରଦେଶ' },
    'Madhya Pradesh': { en: 'Madhya Pradesh', gu: 'મધ્ય પ્રદેશ', hi: 'मध्य प्रदेश', mr: 'मध्य प्रदेश', pa: 'ਮੱਧ ਪ੍ਰਦੇਸ਼', ta: 'மத்திய பிரதேசம்', te: 'మధ్య ప్రదేశ్', kn: 'ಮಧ್ಯ ಪ್ರದೇಶ', bn: 'মধ্য প্রদেশ', or: 'ମଧ୍ୟ ପ୍ରଦେଶ' },
    'Odisha': { en: 'Odisha', gu: 'ઓડિશા', hi: 'ओडिशा', mr: 'ओडिशा', pa: 'ਓਡੀਸ਼ਾ', ta: 'ஒடிசா', te: 'ఒడిశా', kn: 'ಒಡಿಶಾ', bn: 'ওড়িশা', or: 'ଓଡ଼ିଶା' },
    'Kerala': { en: 'Kerala', gu: 'કેરળ', hi: 'केरल', mr: 'केरळ', pa: 'ਕੇਰਲ', ta: 'கேரளா', te: 'కేరళ', kn: 'ಕೇರಳ', bn: 'কেরালা', or: 'କେରଳ' },
    'Assam': { en: 'Assam', gu: 'આસામ', hi: 'असम', mr: 'आसाम', pa: 'ਅਸਾਮ', ta: 'அஸ்ஸாம்', te: 'అస్సాం', kn: 'ಅಸ್ಸಾಂ', bn: 'আসাম', or: 'ଆସାମ' },
    'Chhattisgarh': { en: 'Chhattisgarh', gu: 'છત્તીસગઢ', hi: 'छत्तीसगढ़', mr: 'छत्तीसगड', pa: 'ਛੱਤੀਸਗੜ੍ਹ', ta: 'சத்தீஸ்கர்', te: 'ఛత్తీస్గఢ్', kn: 'ಛತ್ತೀಸ್‌ಗಢ', bn: 'ছত্তিশগড়', or: 'ଛତିଶଗଡ଼' },
    'Jharkhand': { en: 'Jharkhand', gu: 'ઝારખંડ', hi: 'झारखंड', mr: 'झारखंड', pa: 'ਝਾਰਖੰਡ', ta: 'ஜார்க்கண்ட்', te: 'జార్ఖండ్', kn: 'ಜಾರ್ಖಂಡ್', bn: 'ঝাড়খণ্ড', or: 'ଝାଡ଼ଖଣ୍ଡ' },
    'Uttarakhand': { en: 'Uttarakhand', gu: 'ઉત્તરાખંડ', hi: 'उत्तराखंड', mr: 'उत्तराखंड', pa: 'ਉੱਤਰਾਖੰਡ', ta: 'உத்தரகண்ட்', te: 'ఉత్తరాఖండ్', kn: 'ಉತ್ತರಾಖಂಡ', bn: 'উত্তরাখণ্ড', or: 'ଉତ୍ତରାଖଣ୍ଡ' },
    'Himachal Pradesh': { en: 'Himachal Pradesh', gu: 'હિમાચલ પ્રદેશ', hi: 'हिमाचल प्रदेश', mr: 'हिमाचल प्रदेश', pa: 'ਹਿਮਾਚਲ ਪ੍ਰਦੇਸ਼', ta: 'இமாச்சல பிரதேசம்', te: 'హిమాచల్ ప్రదేశ్', kn: 'ಹಿಮಾಚಲ ಪ್ರದೇಶ', bn: 'হিমাচল প্রদেশ', or: 'ହିମାଚଳ ପ୍ରଦେଶ' },
    'Goa': { en: 'Goa', gu: 'ગોવા', hi: 'गोवा', mr: 'गोवा', pa: 'ਗੋਆ', ta: 'கோவா', te: 'గోవా', kn: 'ಗೋವಾ', bn: 'গোয়া', or: 'ଗୋଆ' },
};
import { allDistrictTranslations } from './district_translations_data'

// District name translations (All India)
export const districtTranslations = allDistrictTranslations

export function translateStateName(stateName: string, lang: string): string {
    return stateTranslations[stateName]?.[lang] || stateName
}

export function translateDistrictName(districtName: string, lang: string): string {
    return districtTranslations[districtName]?.[lang] || districtName
}

// Market Suffix Translations
export const marketSuffixTranslations: { [key: string]: { [lang: string]: string } } = {
    'Market Yard': {
        en: 'Market Yard',
        gu: 'માર્કેટ યાર્ડ',
        hi: 'मार्केट यार्ड',
        mr: 'मार्केट यार्ड',
        pa: 'ਮਾਰਕੀਟ ਯਾਰਡ',
        ta: 'மார்க்கெட் யார்ட்',
        te: 'మార్కెట్ యార్డ్',
        kn: 'ಮಾರುಕಟ್ಟೆ ಯಾರ್ಡ್',
        bn: 'মার্কেট ইয়ার্ড',
        or: 'ମାର୍କେଟ ୟାର୍ଡ'
    },
    'APMC': {
        en: 'APMC',
        gu: 'APMC',
        hi: 'APMC',
        mr: 'APMC',
        pa: 'APMC',
        ta: 'APMC',
        te: 'APMC',
        kn: 'APMC',
        bn: 'APMC',
        or: 'APMC'
    },
    'Market': {
        en: 'Market',
        gu: 'માર્કેટ',
        hi: 'मार्केट',
        mr: 'मार्केट',
        pa: 'ਮਾਰਕੀਟ',
        ta: 'மார்க்கெட்',
        te: 'మార్కెట్',
        kn: 'ಮಾರುಕಟ್ಟೆ',
        bn: 'মার্কেট',
        or: 'ମାର୍କେଟ'
    },
    'Mandi': {
        en: 'Mandi',
        gu: 'મંડી',
        hi: 'मंडी',
        mr: 'मंडी',
        pa: 'ਮੰਡੀ',
        ta: 'மண்டி',
        te: 'మండి',
        kn: 'ಮಂಡಿ',
        bn: 'মান্ডি',
        or: 'ମଣ୍ଡି'
    },

}



import { extraPlaceTranslations } from './place_names_data'

export const placeNameTranslations: { [key: string]: { [lang: string]: string } } = {
    ...extraPlaceTranslations,

    'Abohar': { en: 'Abohar', gu: 'અબોહર', hi: 'अबोहर', mr: 'अबोहर', pa: 'ਅਬੋਹਰ', ta: 'அபோஹர்', te: 'అబోహర్', kn: 'ಅಬೋಹರ್', bn: 'আবোহর', or: 'ଅବୋହର' },
    'Achalpur': { en: 'Achalpur', gu: 'અચાલપુર', hi: 'अचलपुर', mr: 'अचलपूर', pa: 'ਅਚਲਪੁਰ', ta: 'அச்சல்பூர்', te: 'అచల్పూర్', kn: 'ಅಚಲ್ಪುರ', bn: 'আচলপুর', or: 'ଅଚଳପୁର' },
    'Adampur': { en: 'Adampur', gu: 'આદમપુર', hi: 'आदमपुर', mr: 'आदमपूर', pa: 'ਆਦਮਪੁਰ', ta: 'ஆதம்பூர்', te: 'ఆదంపూర్', kn: 'ಆದಂಪುರ', bn: 'আদমপুর', or: 'ଆଦମପୁର' },
    'Adoni': { en: 'Adoni', gu: 'અદોની', hi: 'अदोनी', mr: 'अदोणी', pa: 'ਅਦੋਨੀ', ta: 'அதோனி', te: 'అదోని', kn: 'ಅದೋನಿ', bn: 'আদোনি', or: 'ଅଡୋନି' },
    'Agra': { en: 'Agra', gu: 'આગ્રા', hi: 'आगरा', mr: 'आग्रा', pa: 'ਆਗਰਾ', ta: 'ஆக்ரா', te: 'ఆగ్రా', kn: 'ಆಗ್ರಾ', bn: 'আগ্রা', or: 'ଆଗ୍ରା' },
    'Ahmedabad': { en: 'Ahmedabad', gu: 'અમદાવાદ', hi: 'अहमदाबाद', mr: 'अहमदाबाद', pa: 'ਅਹਿਮਦਾਬਾਦ', ta: 'அகமதாபாத்', te: 'అహ్మదాబాద్', kn: 'ಅಹಮದಾಬಾದ್', bn: 'আহমেদাবাদ', or: 'ଆହମଦାବାଦ' },
    'Ahmednagar': { en: 'Ahmednagar', gu: 'અહમદનગર', hi: 'अहमदनगर', mr: 'अहमदनगर', pa: 'ਅਹਿਮਦਨਗਰ', ta: 'அகமத்நகர்', te: 'అహ్మద్నగర్', kn: 'ಅಹಮದನಗರ', bn: 'আহমেদনগর', or: 'ଆହମଦନଗର' },
    'Ajmer': { en: 'Ajmer', gu: 'અજમેર', hi: 'अजमेर', mr: 'अजमेर', pa: 'ਅਜਮੇਰ', ta: 'அஜ்மேர்', te: 'అజ్మేర్', kn: 'ಅಜ್ಮೇರ್', bn: 'আজমের', or: 'ଅଜମେର' },
    'Ajnala': { en: 'Ajnala', gu: 'અજનલાં', hi: 'અજનલાં', mr: 'अज्नाळा', pa: 'ਅਜਨਾਲਾ', ta: 'அஜ்னாலா', te: 'అజ్నాలా', kn: 'ಅಜ್ನಾಲಾ', bn: 'আজনালা', or: 'ଅଜନାଲା' },
    'Akola': { en: 'Akola', gu: 'અકોલા', hi: 'अकोला', mr: 'अकोला', pa: 'ਅਕੋਲਾ', ta: 'அகோலா', te: 'అకోలా', kn: 'ಅಕೋಲಾ', bn: 'আকোলা', or: 'ଅକୋଲା' },
    'Akot': { en: 'Akot', gu: 'આકોટ', hi: 'आकोट', mr: 'आकोट', pa: 'ਆਕੋਟ', ta: 'ஆகோட்', te: 'అకోట్', kn: 'ಆಕೋಟ್', bn: 'আকোট', or: 'ଆକୋଟ' },
    'Aligarh': { en: 'Aligarh', gu: 'અલીગઢ', hi: 'अलीगढ़', mr: 'अलीगढ', pa: 'ਅਲੀਗੜ੍ਹ', ta: 'அலிகர்', te: 'అలీగఢ్', kn: 'ಅಲೀಗಢ', bn: 'আলীগড়', or: 'ଅଲୀଗଡ଼' },
    'Alipurduar': { en: 'Alipurduar', gu: 'અલીપુરદ્વાર', hi: 'अलीपुरद्वार', mr: 'अलीपूरद्वार', pa: 'ਅਲੀਪੁਰਦੁਆਰ', ta: 'அலிபுர்துவார்', te: 'అలీపుర్ద్వార్', kn: 'ಅಲೀಪುರದ್ವಾರ್', bn: 'আলিপুরদুয়ার', or: 'ଅଲୀପୁରଦ୍ୱାର' },
    'Allahabad': { en: 'Allahabad', gu: 'અલ્હાબાદ', hi: 'इलाहाबाद', mr: 'इलाहाबाद', pa: 'ਅਲਾਹਾਬਾਦ', ta: 'இலாகாபாத்', te: 'ఇలాహాబాద్', kn: 'ಇಲಾಹಾಬಾದ್', bn: 'এলাহাবাদ', or: 'ଇଲାହାବାଦ' },
    'Aluva': { en: 'Aluva', gu: 'અલુવા', hi: 'अलुवा', mr: 'अलुवा', pa: 'ਅਲੂਵਾ', ta: 'அலுவா', te: 'అలువా', kn: 'ಅಲುವಾ', bn: 'আলুয়া', or: 'ଅଲୁଭା' },
    'Alwar': { en: 'Alwar', gu: 'અલવર', hi: 'अलवर', mr: 'अलवर', pa: 'ਅਲਵਰ', ta: 'அல்வார்', te: 'అల్వార్', kn: 'ಅಲ್ವಾರ್', bn: 'অলবর', or: 'ଅଲୱାର' },
    'Amravati': { en: 'Amravati', gu: 'અમરાવતી', hi: 'अमरावती', mr: 'अमरावती', pa: 'ਅਮਰਾਵਤੀ', ta: 'அமராவதி', te: 'అమరావతి', kn: 'ಅಮರಾವತಿ', bn: 'অমরাবতী', or: 'ଅମରାବତୀ' },
    'Amreli': { en: 'Amreli', gu: 'અમરેલી', hi: 'अमरेली', mr: 'अमरेली', pa: 'ਅਮਰੇਲੀ', ta: 'அம்ரேலி', te: 'అమ్రేలి', kn: 'ಅಮ್ರೇಲಿ', bn: 'অমরেলি', or: 'ଅମ୍ରେଲୀ' },
    'Amritsar': { en: 'Amritsar', gu: 'અમૃતસર', hi: 'अमृतसर', mr: 'अमृतसर', pa: 'ਅੰਮ੍ਰਿਤਸਰ', ta: 'அமிர்தசர்', te: 'అమృత్సర్', kn: 'ಅಮೃತಸರ್', bn: 'অমৃতসর', or: 'ଅମୃତସର' },
    'Anand': { en: 'Anand', gu: 'આનંદ', hi: 'आनंद', mr: 'आनंद', pa: 'ਆਨੰਦ', ta: 'ஆனந்த்', te: 'ఆనంద్', kn: 'ಆನಂದ', bn: 'আনন্দ', or: 'ଆନନ୍ଦ' },
    'Anantapur': { en: 'Anantapur', gu: 'અનંતપુર', hi: 'अनंतपुर', mr: 'अनंतपूर', pa: 'ਅਨੰਤਪੁਰ', ta: 'அனந்தபூர்', te: 'అనంతపూర్', kn: 'ಅನಂತಪುರ', bn: 'অনন্তপুর', or: 'ଅନନ୍ତପୁର' },
    'Ankleshwar': { en: 'Ankleshwar', gu: 'અંકલેશ્વર', hi: 'अंकलेश्वर', mr: 'अंकलेश्वर', pa: 'ਅੰਕਲੇਸ਼ਵਰ', ta: 'அங்க்லேஷ்வர்', te: 'అంక్లేశ్వర్', kn: 'ಅಂಕಲೇಶ್ವರ', bn: 'অঙ্কলেশ্বর', or: 'ଅଙ୍କଲେଶ୍ୱର' },
    'Araria': { en: 'Araria', gu: 'અરરિયા', hi: 'अररिया', mr: 'अररिया', pa: 'ਅਰਰੀਆ', ta: 'அரரியா', te: 'అరారియా', kn: 'ಅರಾರಿಯಾ', bn: 'আরারিয়া', or: 'ଅରରିଆ' },
    'Asansol': { en: 'Asansol', gu: 'આસનસોલ', hi: 'आसनसोल', mr: 'आसनसोल', pa: 'ਆਸਨਸੋਲ', ta: 'ஆசன்சோல்', te: 'ఆసన్సోల్', kn: 'ಆಸನ್ಸೋಲ್', bn: 'আসানসোল', or: 'ଆସନସୋଲ' },
    'Aurangabad': { en: 'Aurangabad', gu: 'ઔરંગાબાદ', hi: 'औरंगाबाद', mr: 'औरंगाबाद', pa: 'ਔਰੰਗਾਬਾਦ', ta: 'அவுரங்காபாத்', te: 'ఔరంగాబాద్', kn: 'ಔರಂಗಾಬಾದ್', bn: 'ঔরঙ্গাবাদ', or: 'ଔରଙ୍ଗାବାଦ' },
    'Bangalore': { en: 'Bangalore', gu: 'બેંગલોર', hi: 'बेंगलुरु', mr: 'बेंगळूरू', pa: 'ਬੈਂਗਲੁਰੂ', ta: 'பெங்களூரு', te: 'బెంగళూరు', kn: 'ಬೆಂಗಳೂರು', bn: 'বেঙ্গালুরু', or: 'ବେଙ୍ଗାଲୁରୁ' },
    'Bardoli': { en: 'Bardoli', gu: 'બારડોલી', hi: 'बारडोली', mr: 'बारडोली', pa: 'ਬਾਰਡੋਲੀ', ta: 'பார்டோலி', te: 'బార్డోలి', kn: 'ಬಾರ್ಡೋಲಿ', bn: 'বারডোলি', or: 'ବାରଡୋଲି' },
    'Bareilly': { en: 'Bareilly', gu: 'બરેલી', hi: 'बरेली', mr: 'बरेली', pa: 'ਬਰੇਲੀ', ta: 'பரேலி', te: 'బరేలీ', kn: 'ಬರೇಲಿ', bn: 'বেরেলি', or: 'ବରେଲି' },
    'Baroda': { en: 'Vadodara', gu: 'વડોદરા', hi: 'वडोदरा', mr: 'वडोदरा', pa: 'ਵਡੋਦਰਾ', ta: 'வடோதுரா', te: 'వడోదర', kn: 'ವಡೋದರಾ', bn: 'বরোদা', or: 'ବଡୋଦରା' },
    'Bharuch': { en: 'Bharuch', gu: 'ભરુચ', hi: 'भरुच', mr: 'भरुच', pa: 'ਭਰੂਚ', ta: 'பரூச்', te: 'భరూచ్', kn: 'ಭರುಚ್', bn: 'ভরুচ', or: 'ଭରୁଚ' },
    'Bhavnagar': { en: 'Bhavnagar', gu: 'ભાવનગર', hi: 'भावनगर', mr: 'भावनगर', pa: 'ਭਾਵਨਗਰ', ta: 'பாவ்நகர்', te: 'భావ్నగర్', kn: 'ಭಾವನಗರ', bn: 'ভাবনগর', or: 'ଭାବନଗର' },
    'Bhopal': { en: 'Bhopal', gu: 'ભોપાલ', hi: 'भोपाल', mr: 'भोपाल', pa: 'ਭੋਪਾਲ', ta: 'போபால்', te: 'భోపాల్', kn: 'ಭೋಪಾಲ್', bn: 'ভোপাল', or: 'ଭୋପାଲ' },
    'Bhubaneswar': { en: 'Bhubaneswar', gu: 'ભુવનેશ્વર', hi: 'भुवनेश्वर', mr: 'भुवनेश्वर', pa: 'ਭੁਵਨੇਸ਼ਵਰ', ta: 'புவனேஸ்வர்', te: 'భువనేశ్వర్', kn: 'ಭುವನೇಶ್ವರ', bn: 'ভুবনেশ্বর', or: 'ଭୁବନେଶ୍ୱର' },
    'Cuttack': { en: 'Cuttack', gu: 'કટક', hi: 'कटक', mr: 'कटक', pa: 'ਕਟਕ', ta: 'கட்டக்', te: 'కటక్', kn: 'ಕಟಕ್', bn: 'কটক', or: 'କଟକ' },
    'Dabhoi': { en: 'Dabhoi', gu: 'ડભોઈ', hi: 'डभोई', mr: 'डभोई', pa: 'ਡਭੋਈ', ta: 'தபோய்', te: 'డభోయ్', kn: 'ಡಭೋಯ್', bn: 'ডভোই', or: 'ଡଭୋଇ' },
    'Dadar': { en: 'Dadar', gu: 'દાદર', hi: 'दादर', mr: 'दादर', pa: 'ਦਾਦਰ', ta: 'தாதர்', te: 'దాదర్', kn: 'ದಾದರ್', bn: 'দাদর', or: 'ଦାଦର' },
    'Dahod': { en: 'Dahod', gu: 'દાહોદ', hi: 'दाहोद', mr: 'दाहोद', pa: 'ਦਾਹੋਦ', ta: 'தாஹோத்', te: 'దాహోద్', kn: 'ದಾಹೋದ', bn: 'দাহোদ', or: 'ଦାହୋଦ' },
    'Daman': { en: 'Daman', gu: 'દમણ', hi: 'दमन', mr: 'दमन', pa: 'ਦਮਣ', ta: 'தமன்', te: 'దమన్', kn: 'ದಮನ್', bn: 'দমন', or: 'ଦମନ' },
    'Danapur': { en: 'Danapur', gu: 'દાનાપુર', hi: 'दानापुर', mr: 'दानापूर', pa: 'ਦਾਨਾਪੁਰ', ta: 'தனாபூர்', te: 'దానాపూర్', kn: 'ದಾನಾಪುರ', bn: 'দানাপুর', or: 'ଦାନାପୁର' },
    'Darbhanga': { en: 'Darbhanga', gu: 'દરભંગા', hi: 'दरभंगा', mr: 'दरभंगा', pa: 'ਦਰਭੰਗਾ', ta: 'தர்பங்கா', te: 'దర్భంగా', kn: 'ದರ್ಭಂಗಾ', bn: 'দরভাঙ্গা', or: 'ଦରଭଙ୍ଗା' },
    'Davangere': { en: 'Davangere', gu: 'દાવણગેરે', hi: 'दावणगेरे', mr: 'दावणगेरे', pa: 'ਦਾਵਣਗੇਰੇ', ta: 'தவணகேரே', te: 'దావణగేరె', kn: 'ದಾವಣಗೆರೆ', bn: 'দাবনগেরে', or: 'ଦାବଣଗେରେ' },
    'Deesa': { en: 'Deesa', gu: 'ડીસા', hi: 'डीसा', mr: 'डीसा', pa: 'ਡੀਸਾ', ta: 'தீசா', te: 'డీసా', kn: 'ಡೀಸಾ', bn: 'দীসা', or: 'ଡିସା' },
    'Dehradun': { en: 'Dehradun', gu: 'દેહરાદૂન', hi: 'देहरादून', mr: 'देहरादून', pa: 'ਦੇਹਰਾਦੂਨ', ta: 'தேஹராதூன்', te: 'దేహ్రాదూన్', kn: 'ದೇಹರಾದೂನ್', bn: 'দেহরাদুন', or: 'ଦେହରାଦୂନ' },
    'Dehgam': { en: 'Dehgam', gu: 'દહેગામ', hi: 'देहगाम', mr: 'देहगाम', pa: 'ਦੇਹਗਾਮ', ta: 'தேஹ்காம்', te: 'దేహ్గామ్', kn: 'ದೇಹಗಾಮ್', bn: 'দেহগাম', or: 'ଦେହଗାମ' },
    'Delhi': { en: 'Delhi', gu: 'દિલ્હી', hi: 'दिल्ली', mr: 'दिल्ली', pa: 'ਦਿੱਲੀ', ta: 'டெல்லி', te: 'ఢిల్లీ', kn: 'ದೆಹಲಿ', bn: 'দিল্লি', or: 'ଦିଲ୍ଲୀ' },
    'Dewas': { en: 'Dewas', gu: 'દેવાસ', hi: 'देवास', mr: 'देवास', pa: 'ਦੇਵਾਸ', ta: 'தேவாஸ்', te: 'దేవాస్', kn: 'ದೇವಾಸ್', bn: 'দেবাস', or: 'ଦେୱାସ' },
    'Dhanbad': { en: 'Dhanbad', gu: 'ધનબાદ', hi: 'धनबाद', mr: 'धनबाद', pa: 'ਧਨਬਾਦ', ta: 'தனபாத்', te: 'ధన్బాద్', kn: 'ಧನಬಾದ್', bn: 'ধানবাদ', or: 'ଧନବାଦ' },
    'Dholka': { en: 'Dholka', gu: 'ધોળકા', hi: 'ढोलका', mr: 'ढोलका', pa: 'ਢੋਲਕਾ', ta: 'தோல்கா', te: 'ధోల్కా', kn: 'ಧೋಲ್ಕಾ', bn: 'ঢোলকা', or: 'ଧୋଲକା' },
    'Dhule': { en: 'Dhule', gu: 'ધુલે', hi: 'धुळे', mr: 'धुळे', pa: 'ਧੁਲੇ', ta: 'துலே', te: 'ధులే', kn: 'ಧುಲೆ', bn: 'ধুলে', or: 'ଧୁଲେ' },
    'Dibrugarh': { en: 'Dibrugarh', gu: 'દિબ્રુગઢ', hi: 'डिब्रूगढ़', mr: 'डिब्रुगढ', pa: 'ਡਿਬਰੂਗੜ੍ਹ', ta: 'டிப்ருகர்', te: 'డిబ్రుగఢ్', kn: 'ಡಿಬ್ರುಗಢ', bn: 'ডিব্ৰুগড়', or: 'ଦିବ୍ରୁଗଡ଼' },
    'Dindigul': { en: 'Dindigul', gu: 'દિન્ડિગુલ', hi: 'डिंडीगुल', mr: 'डिंडीगुल', pa: 'ਡਿੰਡੀਗੁਲ', ta: 'திண்டுக்கல்', te: 'దిండిగుల్', kn: 'ದಿಂಡಿಗುಲ್', bn: 'ডিন্ডিগুল', or: 'ଡିଣ୍ଡିଗୁଲ' },
    'Durg': { en: 'Durg', gu: 'દુર્ગ', hi: 'दुर्ग', mr: 'दुर्ग', pa: 'ਦੁਰਗ', ta: 'துர்க்', te: 'దుర్గ్', kn: 'ದುರ್ಗ್', bn: 'দুর্গ', or: 'ଦୁର୍ଗ' },
    'Durgapur': { en: 'Durgapur', gu: 'દુર્ગાપુર', hi: 'दुर्गापुर', mr: 'दुर्गापूर', pa: 'ਦੁਰਗਾਪੁਰ', ta: 'துர்காபூர்', te: 'దుర్గాపూర్', kn: 'ದುರ್ಗಾಪುರ', bn: 'দুর্গাপুর', or: 'ଦୁର୍ଗାପୁର' },
    'Dwarka': { en: 'Dwarka', gu: 'દ્વારકા', hi: 'द्वारका', mr: 'द्वारका', pa: 'ਦੁਆਰਕਾ', ta: 'துவாரகா', te: 'ద్వారకా', kn: 'ದ್ವಾರಕಾ', bn: 'দ্বারকা', or: 'ଦ୍ୱାରକା' },
    'Erode': { en: 'Erode', gu: 'ઇરોડ', hi: 'इरोड', mr: 'इरोड', pa: 'ਇਰੋਡ', ta: 'ஈரோடு', te: 'ఇరోడ్', kn: 'ಇರೋಡ್', bn: 'ইরোড', or: 'ଇରୋଡ' },
    'Ernakulam': { en: 'Ernakulam', gu: 'એર્નાકુલમ', hi: 'एर्नाकुलम', mr: 'एर्नाकुलम', pa: 'ਐਰਨਾਕੁਲਮ', ta: 'எர்ணாகுளம்', te: 'ఎర్నాకുളം', kn: 'ಎರ್ನಾಕುಲಂ', bn: 'এর্নাকুলম', or: 'ଏର୍ଣ୍ଣାକୁଲମ' },
    'Etawah': { en: 'Etawah', gu: 'ઇટાવા', hi: 'इटावा', mr: 'इटावा', pa: 'ਇਟਾਵਾ', ta: 'இடாவா', te: 'ఇటావా', kn: 'ಇಟಾವಾ', bn: 'ইটাওয়া', or: 'ଇଟାୱା' },
    'Faridabad': { en: 'Faridabad', gu: 'ફરીદાબાદ', hi: 'फरीदाबाद', mr: 'फरीदाबाद', pa: 'ਫਰੀਦਾਬਾਦ', ta: 'ஃபரீதாபாத்', te: 'ఫరీదాబాద్', kn: 'ಫರಿದಾಬಾದ್', bn: 'ফরিদাবাদ', or: 'ଫରିଦାବାଦ' },
    'Fatehabad': { en: 'Fatehabad', gu: 'ફતેહાબાદ', hi: 'फतेहाबाद', mr: 'फतेहाबाद', pa: 'ਫਤੇਹਾਬਾਦ', ta: 'ஃபதேஹாபாத்', te: 'ఫతేహాబాద్', kn: 'ಫತೇಹಾಬಾದ್', bn: 'ফতেহাবাদ', or: 'ଫତେହାବାଦ' },
    'Firozpur': { en: 'Firozpur', gu: 'ફિરોઝપુર', hi: 'फिरोजपुर', mr: 'फिरोजपूर', pa: 'ਫਿਰੋਜ਼ਪੁਰ', ta: 'ஃபிரோஸ்பூர்', te: 'ఫిరోజ్పూర్', kn: 'ಫಿರೋಜಪುರ', bn: 'ফিরোজপুর', or: 'ଫିରୋଜପୁର' },
    'Gadag': { en: 'Gadag', gu: 'ગડગ', hi: 'ગડગ', mr: 'गडग', pa: 'ਗਡਗ', ta: 'கடக்', te: 'గడగ్', kn: 'ಗಡಗ್', bn: 'গডগ', or: 'ଗଡଗ' },
    'Gandhinagar': { en: 'Gandhinagar', gu: 'ગાંધીનગર', hi: 'गांधीनगर', mr: 'गांधीनगर', pa: 'ਗਾਂਧੀਨਗਰ', ta: 'காந்திநகர்', te: 'గాంధీనగర్', kn: 'ಗಾಂಧೀನಗರ', bn: 'গান্ধীনগর', or: 'ଗାନ୍ଧୀନଗର' },
    'Gaya': { en: 'Gaya', gu: 'ગયા', hi: 'गया', mr: 'गया', pa: 'ਗਿਆ', ta: 'கயா', te: 'గయా', kn: 'ಗಯಾ', bn: 'গয়া', or: 'ଗୟା' },
    'Ghaziabad': { en: 'Ghaziabad', gu: 'ગાજિયાબાદ', hi: 'गाजियाबाद', mr: 'गाजियाबाद', pa: 'ਗਾਜ਼ੀਆਬਾਦ', ta: 'காஜியாபாத்', te: 'గాజియాబాద్', kn: 'ಗಾಜಿಯಾಬಾದ್', bn: 'গাজিয়াবাদ', or: 'ଗାଜିଆବାଦ' },
    'Giridih': { en: 'Giridih', gu: 'ગિરિડીહ', hi: 'गिरिडीह', mr: 'गिरिडीह', pa: 'ਗਿਰਿਡੀਹ', ta: 'கிரிடீஹ்', te: 'గిరిడీహ్', kn: 'ಗಿರಿಡೀಹ್', bn: 'গিরিডীহ', or: 'ଗିରିଡିହ' },
    'Godhra': { en: 'Godhra', gu: 'ગોધરા', hi: 'गोधरा', mr: 'गोधरा', pa: 'ਗੋਧਰਾ', ta: 'கோத்ரா', te: 'గోధ్రా', kn: 'ಗೋಧ್ರಾ', bn: 'গোধরা', or: 'ଗୋଧରା' },
    'Gondal': { en: 'Gondal', gu: 'ગોંડલ', hi: 'गोंडल', mr: 'गोंडल', pa: 'ਗੋਂਡਲ', ta: 'கோண்டல்', te: 'గోండల్', kn: 'ಗೊಂಡಲ್', bn: 'গোঁডল', or: 'ଗୋଣ୍ଡଲ' },
    'Gorakhpur': { en: 'Gorakhpur', gu: 'ગોરખપુર', hi: 'गोरखपुर', mr: 'गोरखपूर', pa: 'ਗੋਰਖਪੁਰ', ta: 'கோரக்பூர்', te: 'గోరఖ్పూర్', kn: 'ಗೋರಖಪುರ', bn: 'গোরখপুর', or: 'ଗୋରଖପୁର' },
    'Gulbarga': { en: 'Gulbarga', gu: 'ગુલબર્ગા', hi: 'गुलबर्गा', mr: 'गुलबर्गा', pa: 'ਗੁਲਬਰਗਾ', ta: 'குல்பர்கா', te: 'గుల్బర్గా', kn: 'ಗುಲ್ಬರ್ಗಾ', bn: 'গুলবর্গা', or: 'ଗୁଲବର୍ଗା' },
    'Guntur': { en: 'Guntur', gu: 'ગુંટુર', hi: 'गुंटूर', mr: 'गुंटूर', pa: 'ਗੁੰਟੂਰ', ta: 'குண்டூர்', te: 'గుంటూరు', kn: 'ಗುಂಟೂರು', bn: 'গুন্টুর', or: 'ଗୁଣ୍ଟୁର' },
    'Haldwani': { en: 'Haldwani', gu: 'હલ્દ્વાની', hi: 'हल्द्वानी', mr: 'हल्द्वानी', pa: 'ਹਲਦਵਾਨੀ', ta: 'ஹல்த்வானி', te: 'హల్ద్వానీ', kn: 'ಹಲ್ದ್ವಾನಿ', bn: 'হলদ্বানি', or: 'ହଲ୍ଦ୍ୱାନୀ' },
    'Halol': { en: 'Halol', gu: 'હાલોલ', hi: 'हालोल', mr: 'हालोल', pa: 'ਹਾਲੋਲ', ta: 'ஹாலோல்', te: 'హాలోల్', kn: 'ಹಾಲೋಲ್', bn: 'হালোল', or: 'ହାଲୋଲ' },
    'Hamirpur': { en: 'Hamirpur', gu: 'હમીરપુર', hi: 'हमीरपुर', mr: 'हमीरपूर', pa: 'ਹਮੀਰਪੁਰ', ta: 'ஹமீர்பூர்', te: 'హమీర్పూర్', kn: 'ಹಮೀರ್ಪುರ', bn: 'হামিরপুর', or: 'ହମୀରପୁର' },
    'Hanamkonda': { en: 'Hanamkonda', gu: 'હનમકોંડા', hi: 'हनमकोंडा', mr: 'हनमकोंडा', pa: 'ਹਨਮਕੋਂਡਾ', ta: 'ஹனம்கொண்டா', te: 'హనుమకొండ', kn: 'ಹನಮಕೊಂಡ', bn: 'হনমকোন্ডা', or: 'ହନମକୋଣ୍ଡା' },
    'Haridwar': { en: 'Haridwar', gu: 'હરિદ્વાર', hi: 'हरिद्वार', mr: 'हरिद्वार', pa: 'ਹਰਿਦੁਆਰ', ta: 'ஹரித்வார்', te: 'హరిద్వార్', kn: 'ಹರಿದ್ವಾರ', bn: 'হরিদ্বার', or: 'ହରିଦ୍ୱାର' },
    'Himmatnagar': { en: 'Himmatnagar', gu: 'હિંમતનગર', hi: 'हिम्मतनगर', mr: 'हिम्मतनगर', pa: 'ਹਿੰਮਤਨਗਰ', ta: 'ஹிம்மத்நகர்', te: 'హిమ్మత్నగర్', kn: 'ಹಿಮ್ಮತನಗರ', bn: 'হিম্মতনগর', or: 'ହିମ୍ମତନଗର' },
    'Hisar': { en: 'Hisar', gu: 'હિસાર', hi: 'हिसार', mr: 'हिसार', pa: 'ਹਿਸਾਰ', ta: 'ஹிசார்', te: 'హిసార్', kn: 'ಹಿಸಾರ್', bn: 'হিসার', or: 'ହିସାର' },
    'Hoshiarpur': { en: 'Hoshiarpur', gu: 'હોશિયારપુર', hi: 'होशियारपुर', mr: 'होशियारपूर', pa: 'ਹੋਸ਼ਿਆਰਪੁਰ', ta: 'ஹோஷியார்பூர்', te: 'హోషియార్పూర్', kn: 'ಹೋಷಿಯಾರಪುರ', bn: 'হোশিয়ারপুর', or: 'ହୋଶିଆରପୁର' },
    'Hospet': { en: 'Hospet', gu: 'હોપેટ', hi: 'होस्पेट', mr: 'होस्पेट', pa: 'ਹੋਸਪੇਟ', ta: 'ஹோஸ்பேட்', te: 'హోస్పేట్', kn: 'ಹೊಸಪೇಟೆ', bn: 'হসপেট', or: 'ହୋସପେଟ' },
    'Howrah': { en: 'Howrah', gu: 'હાવડા', hi: 'हावड़ा', mr: 'हावडा', pa: 'ਹਾਵੜਾ', ta: 'ஹவுரா', te: 'హౌరా', kn: 'ಹೌರಾ', bn: 'হাওড়া', or: 'ହାଓଡ଼ା' },
    'Hubli': { en: 'Hubli', gu: 'હુબળી', hi: 'हुबळी', mr: 'हुबळी', pa: 'ਹੁਬਲੀ', ta: 'ஹூப்ளி', te: 'హుబ్లీ', kn: 'ಹುಬ್ಬಳ್ಳಿ', bn: 'হুবলি', or: 'ହୁବଲି' },
    'Hyderabad': { en: 'Hyderabad', gu: 'હૈદરાબાદ', hi: 'हैराबाद', mr: 'हैदराबाद', pa: 'ਹੈਦਰਾਬਾਦ', ta: 'ஹைதராபாத்', te: 'హైదరాబాద్', kn: 'ಹೈದರಾಬಾದ್', bn: 'হায়দরাবাদ', or: 'ହାଇଦରାବାଦ' },
    'Ichalkaranji': { en: 'Ichalkaranji', gu: 'ઇચલકરંજિ', hi: 'इचलकरंजी', mr: 'इचलकरंजी', pa: 'ਇਚਲਕਰੰਜੀ', ta: 'இச்சல்கரஞ்சி', te: 'ఇచలకరంజీ', kn: 'ಇಚಲಕರಂಜಿ', bn: 'ইচলকরঞ্জি', or: 'ଇଚଲକରଞ୍ଜି' },
    'Idar': { en: 'Idar', gu: 'ઇડર', hi: 'इडर', mr: 'इडर', pa: 'ਇਡਰ', ta: 'இடர்', te: 'ఇడర్', kn: 'ಇಡರ್', bn: 'ইডর', or: 'ଇଡର' },
    'Indore': { en: 'Indore', gu: 'ઇંદોર', hi: 'इंदौर', mr: 'इंदौर', pa: 'ਇੰਦੌਰ', ta: 'இந்தோர்', te: 'ఇండోర్', kn: 'ಇಂದೋರ್', bn: 'ইন্দোর', or: 'ଇନ୍ଦୋର' },
    'Jabalpur': { en: 'Jabalpur', gu: 'જબલપુર', hi: 'जबलपुर', mr: 'जबलपूर', pa: 'ਜਬਲਪੁਰ', ta: 'ஜபல்பூர்', te: 'జబల్పూర్', kn: 'ಜಬಲ್ಪುರ', bn: 'জবলপুর', or: 'ଜବଲପୁର' },
    'Jaipur': { en: 'Jaipur', gu: 'જયપુર', hi: 'जयपुर', mr: 'जयपूर', pa: 'ਜੈਪੁਰ', ta: 'ஜெய்ப்பூர்', te: 'జైపూర్', kn: 'ಜೈಪುರ', bn: 'জয়পুর', or: 'ଜୟପୁର' },
    'Jalandhar': { en: 'Jalandhar', gu: 'જલંધર', hi: 'जालंधर', mr: 'जालंधर', pa: 'ਜਲੰਧਰ', ta: 'ஜலந்தர்', te: 'జలంధర్', kn: 'ಜಲಂಧರ', bn: 'জলন্ধর', or: 'ଜଲନ୍ଧର' },
    'Jalgaon': { en: 'Jalgaon', gu: 'જલગાંવ', hi: 'जळगांव', mr: 'जळगाव', pa: 'ਜਲਗਾਓਂ', ta: 'ஜல்கான்', te: 'జల్గావ్', kn: 'ಜಳಗಾಂವ', bn: 'জলগাঁও', or: 'ଜଳଗାଁ' },
    'Jamnagar': { en: 'Jamnagar', gu: 'જામનગર', hi: 'जामनगर', mr: 'जामनगर', pa: 'ਜਾਮਨਗਰ', ta: 'ஜாம்நகர்', te: 'జామ్నగర్', kn: 'ಜಾಮನಗರ', bn: 'জামনগর', or: 'ଜାମନଗର' },
    'Jamshedpur': { en: 'Jamshedpur', gu: 'જમશેદપુર', hi: 'जमशेदपुर', mr: 'जमशेदपूर', pa: 'ਜਮਸ਼ੇਦਪੁਰ', ta: 'ஜம்ஷேத்பூர்', te: 'జంషెద్పూర్', kn: 'ಜಮ್ಷೇದ್ಪುರ', bn: 'জামশেদপুর', or: 'ଜମ୍ଶେଦପୁର' },
    'Jhansi': { en: 'Jhansi', gu: 'ઝાંસી', hi: 'झांसी', mr: 'झांसी', pa: 'ਝਾਂਸੀ', ta: 'ஜான்சி', te: 'ఝాన్సీ', kn: 'ಝಾನ್ಸಿ', bn: 'ঝাঁসি', or: 'ଝାଂସି' },
    'Jodhpur': { en: 'Jodhpur', gu: 'જોધપુર', hi: 'जोधपुर', mr: 'जोधपूर', pa: 'ਜੋਧਪੁਰ', ta: 'ஜோத்பூர்', te: 'జోధ్పూర్', kn: 'ಜೋಧಪುರ', bn: 'যোধপুর', or: 'ଯୋଧପୁର' },
    'Junagadh': { en: 'Junagadh', gu: 'જુનાગઢ', hi: 'जूनागढ़', mr: 'जूनागढ', pa: 'ਜੂਨਾਗੜ੍ਹ', ta: 'ஜூனாகட்', te: 'జూనాగఢ్', kn: 'ಜೂನಾಗಢ', bn: 'জুনাগড়', or: 'ଜୁନାଗଡ଼' },
    'Kalol': { en: 'Kalol', gu: 'કાલોલ', hi: 'कालोल', mr: 'कालोल', pa: 'ਕਾਲੋਲ', ta: 'காலோல்', te: 'కాలోల్', kn: 'ಕಾಲೋಲ್', bn: 'কালোল', or: 'କାଲୋଲ' },
    'Kalyan': { en: 'Kalyan', gu: 'કલ્યાણ', hi: 'कल्याण', mr: 'कल्याण', pa: 'ਕਲਿਆਣ', ta: 'கல்யாண்', te: 'కళ్యాణ్', kn: 'ಕಲ್ಯಾಣ', bn: 'কল্যাণ', or: 'କଲ୍ୟାଣ' },
    'Kanpur': { en: 'Kanpur', gu: 'કાનપુર', hi: 'कानपुर', mr: 'कानपूर', pa: 'ਕਾਨਪੁਰ', ta: 'கான்பூர்', te: 'కాన్పూర్', kn: 'ಕಾನ್ಪುರ', bn: 'কানপুর', or: 'କାନପୁର' },
    'Karnal': { en: 'Karnal', gu: 'કર્નાલ', hi: 'करनाल', mr: 'करनाल', pa: 'ਕਰਨਾਲ', ta: 'கர்நால்', te: 'కర్నాల్', kn: 'ಕರ್ಣಾಲ್', bn: 'করনাল', or: 'କର୍ନାଲ' },
    'Kolhapur': { en: 'Kolhapur', gu: 'કોલ્હાપુર', hi: 'कोल्हापुर', mr: 'कोल्हापूर', pa: 'ਕੋਲ੍ਹਾਪੁਰ', ta: 'கோலாப்பூர்', te: 'కొల్హాపూర్', kn: 'ಕೊಲ್ಹಾಪುರ', bn: 'কোলহাপুর', or: 'କୋଲ୍ହାପୁର' },
    'Kolkata': { en: 'Kolkata', gu: 'કોલકાતા', hi: 'कोलकाता', mr: 'कोलकाता', pa: 'ਕੋਲਕਾਤਾ', ta: 'கொல்கத்தா', te: 'కోల్కతా', kn: 'ಕೊಲ್ಕತ್ತಾ', bn: 'কলকাতা', or: 'କୋଲକାତା' },
    'Kota': { en: 'Kota', gu: 'કોટા', hi: 'कोटा', mr: 'कोटा', pa: 'ਕੋਟਾ', ta: 'கோட்டா', te: 'కోటా', kn: 'ಕೋಟಾ', bn: 'কোটা', or: 'କୋଟା' },
    'Kottayam': { en: 'Kottayam', gu: 'કોટ્ટાયમ', hi: 'കോട്ടയം', mr: 'കോട്ടയം', pa: 'ਕੋਟਟਯਮ', ta: 'കോട്ടയം', te: 'కొట్టాయం', kn: 'ಕೊಟ್ಟಾಯಂ', bn: 'কোট্টায়ম', or: 'କୋଟ୍ଟାୟମ' },
    'Kurnool': { en: 'Kurnool', gu: 'કર્નૂલ', hi: 'कर्नूल', mr: 'कर्नूल', pa: 'ਕਰਨੂਲ', ta: 'கర్నூல்', te: 'కర్నూల్', kn: 'ಕರ್ಣೂಲ್', bn: 'কর্নুল', or: 'କର୍ଣ୍ଣୂଲ' },
    'Latur': { en: 'Latur', gu: 'લાતૂર', hi: 'लातूर', mr: 'लातूर', pa: 'ਲਾਤੂਰ', ta: 'லாத்தூர்', te: 'లాతూర్', kn: 'ಲಾತೂರು', bn: 'লাতুর', or: 'ଲାତୁର' },
    'Lucknow': { en: 'Lucknow', gu: 'લખનઉ', hi: 'लखनऊ', mr: 'लखनौ', pa: 'ਲਖਨਊ', ta: 'லக்னோ', te: 'లక్నో', kn: 'ಲಕ್ನೋ', bn: 'লখনউ', or: 'ଲକ୍ନଉ' },
    'Ludhiana': { en: 'Ludhiana', gu: 'લુધિયાણા', hi: 'लुधियाना', mr: 'लुधियाना', pa: 'ਲੁਧਿਆਣਾ', ta: 'லுதியானா', te: 'లుధియానా', kn: 'ಲುಧಿಯಾನಾ', bn: 'লুধিয়ানা', or: 'ଲୁଧିଆନା' },
    'Madurai': { en: 'Madurai', gu: 'મદુરાઈ', hi: 'मदुरै', mr: 'मदुरै', pa: 'ਮਦੁਰੈ', ta: 'மதுரை', te: 'మదురై', kn: 'ಮದುರೈ', bn: 'মাদুরাই', or: 'ମଦୁରାଇ' },
    'Mahesana': { en: 'Mahesana', gu: 'મહેસાણા', hi: 'मेहसाणा', mr: 'मेहसाणा', pa: 'ਮਹੇਸਾਣਾ', ta: 'மேஹசாணா', te: 'మెహసానా', kn: 'ಮೆಹಸಾಣಾ', bn: 'মেহসানা', or: 'ମେହସାଣା' },
    'Malegaon': { en: 'Malegaon', gu: 'માલેગાંવ', hi: 'मालेगांव', mr: 'मालेगाव', pa: 'ਮਾਲੇਗাঁਓ', ta: 'மாலேகான்', te: 'మాలేగావ్', kn: 'ಮಾಲೆಗಾಂವ', bn: 'মালেগাঁও', or: 'ମାଲେଗାଁ' },
    'Mangaluru': { en: 'Mangaluru', gu: 'મંગલુરુ', hi: 'मंगलूरु', mr: 'मंगलूरु', pa: 'ਮੰਗਲੂਰੁ', ta: 'மங்களூரு', te: 'మంగళూరు', kn: 'ಮಂಗಳೂರು', bn: 'মাঙ্গালুরু', or: 'ମଙ୍ଗାଲୁରୁ' },
    'Mathura': { en: 'Mathura', gu: 'મથુરા', hi: 'मथुरा', mr: 'मथुरा', pa: 'ਮਥੁਰਾ', ta: 'மதுரா', te: 'మథురా', kn: 'ಮಥುರಾ', bn: 'মথুরা', or: 'ମଥୁରା' },
    'Meerut': { en: 'Meerut', gu: 'મેરઠ', hi: 'मेरठ', mr: 'मेरठ', pa: 'ਮੇਰਠ', ta: 'மீரட்', te: 'మీరట్', kn: 'ಮೀರಟ್', bn: 'মীরাট', or: 'ମେରଠ' },
    'Mehsana': { en: 'Mehsana', gu: 'મહેસાણા', hi: 'मेहसाणा', mr: 'मेहसाणा', pa: 'ਮਹੇਸਾਣਾ', ta: 'மேஹசாணா', te: 'మెహసానా', kn: 'ಮೆಹಸಾಣಾ', bn: 'মেহসানা', or: 'ମେହସାଣା' },
    'Mirzapur': { en: 'Mirzapur', gu: 'મિર્ઝાપુર', hi: 'मिर्ज़ापुर', mr: 'मिर्झापुर', pa: 'ਮਿਰਜ਼ਾਪੁਰ', ta: 'மிர்சாபூர்', te: 'మిర్జాపూర్', kn: 'ಮಿರ್ಜಾಪುರ', bn: 'মির্জাপুর', or: 'ମିର୍ଜାପୁର' },
    'Morbi': { en: 'Morbi', gu: 'મોરબી', hi: 'मोरबी', mr: 'मोरबी', pa: 'ਮੋਰਬੀ', ta: 'மோர்பி', te: 'మోర్బీ', kn: 'ಮೋರ್ಬಿ', bn: 'মোরবি', or: 'ମୋର୍ବି' },
    'Morena': { en: 'Morena', gu: 'મોરેના', hi: 'મોરેना', mr: 'मोरेना', pa: 'ਮੋਰੇਨਾ', ta: 'மோரேனா', te: 'మోరేనా', kn: 'ಮೋರೆನಾ', bn: 'মোরেনা', or: 'ମୋରେନା' },
    'Mumbai': { en: 'Mumbai', gu: 'મુંબઈ', hi: 'मुंबई', mr: 'मुंबई', pa: 'ਮੁੰਬਈ', ta: 'மும்பை', te: 'ముంబై', kn: 'ಮುಂಬೈ', bn: 'মুম্বাই', or: 'ମୁମ୍ବାଇ' },
    'Muzaffarnagar': { en: 'Muzaffarnagar', gu: 'મુઝફ્ફરનગર', hi: 'मुज़फ्फरनगर', mr: 'मुज़फ्फरनगर', pa: 'ਮੁਜ਼ਫ਼ਫ਼ਰਨਗਰ', ta: 'முசஃபர்நகர்', te: 'ముజఫ్ఫర్నగర్', kn: 'ಮುಜಫ್ಫರ್ನಗರ', bn: 'মুজফ্ফরনগর', or: 'ମୁଜଫ୍ଫରନଗର' },
    'Muzaffarpur': { en: 'Muzaffarpur', gu: 'મુઝફ્ફરપુર', hi: 'मुज़फ्फरपुर', mr: 'मुज़फ्फरपूर', pa: 'ਮੁਜ਼ਫ਼ਫ਼ਰਪੁਰ', ta: 'முசஃபர்பூர்', te: 'ముజఫ్ఫర్పూర్', kn: 'ಮುಜಫ್ಫರ್ಪುರ', bn: 'মুজফ্ফরপুর', or: 'ମୁଜଫ୍ଫରପୁର' },
    'Mysuru': { en: 'Mysuru', gu: 'મૈસુરુ', hi: 'मैसूरु', mr: 'मैसूरु', pa: 'ਮੈਸੂਰੁ', ta: 'மைசூரு', te: 'మైసూరు', kn: 'ಮೈಸೂರು', bn: 'মাইসুরু', or: 'ମୈସୁରୁ' },
    'Nagpur': { en: 'Nagpur', gu: 'નાગપુર', hi: 'नागपुर', mr: 'नागपूर', pa: 'ਨਾਗਪੁਰ', ta: 'நாக்பூர்', te: 'నాగ్పూర్', kn: 'ನಾಗಪುರ', bn: 'নাগপুর', or: 'ନାଗପୁର' },
    'Nanded': { en: 'Nanded', gu: 'નાંદેડ', hi: 'नांदेड', mr: 'नांदेड', pa: 'ਨਾਂਦੇਡ', ta: 'நான்டெட்', te: 'నాందేడ్', kn: 'ನಾಂದೇಡ್', bn: 'নান্দেড', or: 'ନାନ୍ଦେଡ' },
    'Nashik': { en: 'Nashik', gu: 'નાશિક', hi: 'नाशिक', mr: 'नाशिक', pa: 'ਨਾਸਿਕ', ta: 'நாசிக்', te: 'నాసిక్', kn: 'ನಾಸಿಕ್', bn: 'নাসিক', or: 'ନାଶିକ' },
    'Navsari': { en: 'Navsari', gu: 'નવસારી', hi: 'નવસારી', mr: 'नवसारी', pa: 'ਨਵਸਾਰੀ', ta: 'நவசாரி', te: 'నవసారి', kn: 'ನವಸಾರಿ', bn: 'নবসারি', or: 'ନବସାରି' },
    'Nellore': { en: 'Nellore', gu: 'નેલ્લોર', hi: 'നെല്ലൂർ', mr: 'നെല്ലൂർ', pa: 'ਨੇਲਲੋਰ', ta: 'நெல்லூர்', te: 'నెల్లూరు', kn: 'ನೆಲ್ಲೂರು', bn: 'নেল্লোর', or: 'ନେଲ୍ଲୋର' },
    'Noida': { en: 'Noida', gu: 'નોઇડા', hi: 'नोएडा', mr: 'नोएडा', pa: 'ਨੋਇਡਾ', ta: 'நோய்டா', te: 'నోయిడా', kn: 'ನೋಯ್ಡಾ', bn: 'নয়ডা', or: 'ନୋଏଡା' },
    'Ongole': { en: 'Ongole', gu: 'ઓંગોલે', hi: 'ओंगोल', mr: 'ओंगोल', pa: 'ਓਂਗੋਲ', ta: 'ஒங்கோல்', te: 'ఒంగోలు', kn: 'ಒಂಗೋಲೆ', bn: 'ওঙ্গোল', or: 'ଓଙ୍ଗୋଲ' },
    'Panaji': { en: 'Panaji', gu: 'પણજી', hi: 'पणजी', mr: 'पणजी', pa: 'ਪਣਜੀ', ta: 'பனாஜி', te: 'పనాజీ', kn: 'ಪಣಜಿ', bn: 'পানাজি', or: 'ପଣଜୀ' },
    'Patan': { en: 'Patan', gu: 'પાટણ', hi: 'पाटन', mr: 'पाटण', pa: 'ਪਾਟਣ', ta: 'பாடன்', te: 'పటాన్', kn: 'ಪಾಟಣ', bn: 'পাটন', or: 'ପାଟଣ' },
    'Patiala': { en: 'Patiala', gu: 'પટિયાલા', hi: 'पटियाला', mr: 'पटियाला', pa: 'ਪਟਿਆਲਾ', ta: 'பட்டியாலா', te: 'పటియాలా', kn: 'ಪಟಿಯಾಲಾ', bn: 'পাটিয়ালা', or: 'ପଟିଆଲା' },
    'Patna': { en: 'Patna', gu: 'પટના', hi: 'पटना', mr: 'पटना', pa: 'ਪਟਨਾ', ta: 'பட்டனா', te: 'పాట్నా', kn: 'ಪಟ್ನಾ', bn: 'পাটনা', or: 'ପଟନା' },
    'Porbandar': { en: 'Porbandar', gu: 'પોરબંદર', hi: 'पोरबंदर', mr: 'पोरबंदर', pa: 'ਪੋਰਬੰਦਰ', ta: 'போர்பந்தர்', te: 'పోర్బందర్', kn: 'ಪೋರಬಂದರ್', bn: 'পোরবন্দর', or: 'ପୋରବନ୍ଦର' },
    'Prayagraj': { en: 'Prayagraj', gu: 'પ્રયાગરાજ', hi: 'प्रयागराज', mr: 'प्रयागराज', pa: 'ਪ੍ਰਯਾਗਰਾਜ', ta: 'பிரயாக்ராஜ்', te: 'ప్రయాగరాజ్', kn: 'ಪ್ರಯಾಗರಾಜ', bn: 'প্রয়াগরাজ', or: 'ପ୍ରୟାଗରାଜ' },
    'Pune': { en: 'Pune', gu: 'પુણે', hi: 'पुणे', mr: 'पुणे', pa: 'ਪੁਨੇ', ta: 'பூனே', te: 'పుణే', kn: 'ಪುಣೆ', bn: 'পুনে', or: 'ପୁଣେ' },
    'Raipur': { en: 'Raipur', gu: 'રાયપુર', hi: 'रायपुर', mr: 'रायपूर', pa: 'ਰਾਇਪੁਰ', ta: 'ராய்ப்பூர்', te: 'రాయ్పూర్', kn: 'ರಾಯಪುರ', bn: 'রায়পুর', or: 'ରାୟପୁର' },
    'Rajahmundry': { en: 'Rajahmundry', gu: 'રાજમંડ્રી', hi: 'राजमुन्द्री', mr: 'राजमुंद्री', pa: 'ਰਾਜਮੁੰਦਰੀ', ta: 'ராஜமுந்திரி', te: 'రాజమండ్రి', kn: 'ರಾಜಮಂಡ್ರಿ', bn: 'রাজমুন্দ্রি', or: 'ରାଜମୁନ୍ଦ୍ରୀ' },
    'Rajkot': { en: 'Rajkot', gu: 'રાજકોટ', hi: 'राजकोट', mr: 'राजकोट', pa: 'ਰਾਜਕੋਟ', ta: 'ராஜ்கோட்', te: 'రాజ్కోట్', kn: 'ರಾಜಕೋಟ್', bn: 'রাজকোট', or: 'ରାଜକୋଟ' },
    'Ranchi': { en: 'Ranchi', gu: 'રાંચી', hi: 'रांची', mr: 'रांची', pa: 'ਰਾਂਚੀ', ta: 'ராஞ்சி', te: 'రాంచీ', kn: 'ರಾಂಚಿ', bn: 'রাঁচি', or: 'ରାଞ୍ଚି' },
    'Ratlam': { en: 'Ratlam', gu: 'રતલામ', hi: 'रतलाम', mr: 'रतलाम', pa: 'ਰਤਲਾਮ', ta: 'ரத்லாம்', te: 'రత్లాం', kn: 'ರತ್ಲಾಂ', bn: 'রতলাম', or: 'ରତଲାମ' },
    'Rewa': { en: 'Rewa', gu: 'રેવા', hi: 'रीवा', mr: 'रीवा', pa: 'ਰੀਵਾ', ta: 'ரீவா', te: 'రీవా', kn: 'ರೀವಾ', bn: 'রীওয়া', or: 'ରୀୱା' },
    'Rohtak': { en: 'Rohtak', gu: 'રોહતક', hi: 'रोहतक', mr: 'रोहतक', pa: 'ਰੋਹਤਕ', ta: 'ரோஹ்தக்', te: 'రోహ్తక్', kn: 'ರೋಹ್ತಕ್', bn: 'রোহতক', or: 'ରୋହତକ' },
    'Roorkee': { en: 'Roorkee', gu: 'રૂડકી', hi: 'रुड़की', mr: 'रुड़की', pa: 'ਰੁੜਕੀ', ta: 'ரூட்கி', te: 'రూడ్కీ', kn: 'ರೂಡ್ಕಿ', bn: 'রুড়কি', or: 'ରୁଡ଼କୀ' },
    'Saharanpur': { en: 'Saharanpur', gu: 'સહારનપુર', hi: 'सहारनपुर', mr: 'सहारनपूर', pa: 'ਸਹਾਰਨਪੁਰ', ta: 'சஹாரன்பூர்', te: 'సహారన్పూర్', kn: 'ಸಹಾರನಪುರ', bn: 'সহারনপুর', or: 'ସହାରନପୁର' },
    'Salem': { en: 'Salem', gu: 'સેલમ', hi: 'सेलम', mr: 'सालेम', pa: 'ਸੇਲਮ', ta: 'சேலம்', te: 'సేలం', kn: 'ಸೇಲಂ', bn: 'সেলম', or: 'ସେଲମ' },
    'Sambalpur': { en: 'Sambalpur', gu: 'સંબલપુર', hi: 'संबलपुर', mr: 'संबलपूर', pa: 'ਸੰਬਲਪੁਰ', ta: 'சம்பல்பூர்', te: 'సంబల్పూర్', kn: 'ಸಂಬಲ್ಪುರ', bn: 'সম্বলপুর', or: 'ସମ୍ବଲପୁର' },
    'Sangli': { en: 'Sangli', gu: 'સાંગલી', hi: 'सांगली', mr: 'सांगली', pa: 'ਸਾਂਗਲੀ', ta: 'சங்கலி', te: 'సాంగ్లీ', kn: 'ಸಾಂಗ್ಲಿ', bn: 'সাংলি', or: 'ସାଙ୍ଗଲି' },
    'Satara': { en: 'Satara', gu: 'સાતારા', hi: 'सातारा', mr: 'सातारा', pa: 'ਸਾਤਾਰਾ', ta: 'சாத்தாரா', te: 'సాతారా', kn: 'ಸಾತಾರಾ', bn: 'সাতারা', or: 'ସାତାରା' },
    'Satna': { en: 'Satna', gu: 'સત્ના', hi: 'सतना', mr: 'सतना', pa: 'ਸਤਨਾ', ta: 'சட்னா', te: 'సత్నా', kn: 'ಸತ್ನಾ', bn: 'সতনা', or: 'ସତନା' },
    'Secunderabad': { en: 'Secunderabad', gu: 'સિકંદરાબાદ', hi: 'सिकंदराबाद', mr: 'सिकंदराबाद', pa: 'ਸਿਕੰਦਰਾਬਾਦ', ta: 'சிகந்தராபாத்', te: 'సికింద్రాబాద్', kn: 'ಸಿಕಂದರಾಬಾದ್', bn: 'সেকেন্দরাবাদ', or: 'ସିକନ୍ଦରାବାଦ' },
    'Shahjahanpur': { en: 'Shahjahanpur', gu: 'શાહજહાંપુર', hi: 'शाहजहांपुर', mr: 'शाहजहांपूर', pa: 'ਸ਼ਾਹਜਹਾਂਪੁਰ', ta: 'ஷாஜஹான்பூர்', te: 'షాజహాన్పూర్', kn: 'ಶಾಹಜಹಾಂಪುರ', bn: 'শাহজাহানপুর', or: 'ଶାହଜହାନପୁର' },
    'Shimla': { en: 'Shimla', gu: 'શિમલા', hi: 'शिमला', mr: 'शिमला', pa: 'ਸ਼ਿਮਲਾ', ta: 'ஷிம்லா', te: 'షిమ్లా', kn: 'ಶಿಮ್ಲಾ', bn: 'শিমলা', or: 'ଶିମ୍ଲା' },
    'Shivamogga': { en: 'Shivamogga', gu: 'શિવમોગ્ગા', hi: 'शिवमोग्गा', mr: 'शिवमोग्गा', pa: 'ਸ਼ਿਵਮੋਗਗਾ', ta: 'சிவமோகா', te: 'శివమొగ్గ', kn: 'ಶಿವಮೊಗ್ಗ', bn: 'শিবমোগ্গা', or: 'ଶିବମୋଗ୍ଗା' },
    'Sikar': { en: 'Sikar', gu: 'સીકર', hi: 'सीकर', mr: 'सीकर', pa: 'ਸੀਕਰ', ta: 'சீகர்', te: 'సీకర్', kn: 'ಸೀಕರ್', bn: 'সিকার', or: 'ସୀକର' },
    'Siliguri': { en: 'Siliguri', gu: 'સિલિગુરી', hi: 'सिलीगुड़ी', mr: 'सिलीगुडी', pa: 'ਸਿਲਿਗੁੜੀ', ta: 'சிலிகுரி', te: 'సిలిగురి', kn: 'ಸಿಲಿಗುರಿ', bn: 'শিলিগুড়ি', or: 'ସିଲିଗୁଡ଼ି' },
    'Solapur': { en: 'Solapur', gu: 'સોલાપુર', hi: 'सोलापुर', mr: 'सोलापूर', pa: 'ਸੋਲਾਪੁਰ', ta: 'சோலாப்பூர்', te: 'సోలాపూర్', kn: 'ಸೋಲಾಪುರ', bn: 'সোলাপুর', or: 'ସୋଲାପୁର' },
    'Sonipat': { en: 'Sonipat', gu: 'સોનીપત', hi: 'सोनीपत', mr: 'सोनीपत', pa: 'ਸੋਨੀਪਤ', ta: 'சோனிபட்', te: 'సోనిపట్', kn: 'ಸೋನಿಪಟ್', bn: 'সোনিপত', or: 'ସୋନୀପତ' },
    'Srinagar': { en: 'Srinagar', gu: 'શ્રીનગર', hi: 'श्रीनगर', mr: 'श्रीनगर', pa: 'ਸ਼੍ਰੀਨਗਰ', ta: 'ஸ்ரீநகர்', te: 'శ్రీనగర్', kn: 'ಶ್ರೀನಗರ', bn: 'শ্রীনগর', or: 'ଶ୍ରୀନଗର' },
    'Surat': { en: 'Surat', gu: 'સુરત', hi: 'सूरत', mr: 'सूरत', pa: 'ਸੂਰਤ', ta: 'சூரத்', te: 'సూరత్', kn: 'ಸೂರತ್', bn: 'সুরত', or: 'ସୁରତ' },
    'Thane': { en: 'Thane', gu: 'થાણે', hi: 'ठाणे', mr: 'ठाणे', pa: 'ਥਾਣੇ', ta: 'தானே', te: 'థానే', kn: 'ಥಾಣೆ', bn: 'থানে', or: 'ଥାଣେ' },
    'Thanjavur': { en: 'Thanjavur', gu: 'તંજાવુર', hi: 'तंजावूर', mr: 'तंजावूर', pa: 'ਤੰਜਾਵੂਰ', ta: 'தஞ்சாவூர்', te: 'తంజావూరు', kn: 'ತಂಜಾವೂರು', bn: 'তাঞ্জাভুর', or: 'ତଞ୍ଜାଭୁର' },
    'Thrissur': { en: 'Thrissur', gu: 'થ્રિસ્સુર', hi: 'തൃശ്ശൂർ', mr: 'തൃശ്ശൂർ', pa: 'ਥ੍ਰਿਸ਼ੂਰ', ta: 'திருச்சூர்', te: 'త్రిస్సూర్', kn: 'ತ್ರಿಶೂರ್', bn: 'থ্রিসুর', or: 'ଥ୍ରିସୁର' },
    'Tiruchirappalli': { en: 'Tiruchirappalli', gu: 'તિરુચિરાપલ્લી', hi: 'तिरुचिरापल्ली', mr: 'तिरुचिरापल्ली', pa: 'ਤਿਰੁਚਿਰਾਪੱਲੀ', ta: 'திருச்சிராப்பள்ளி', te: 'తిరుచిరాపల్లి', kn: 'ತಿರುಚಿರಾಪಳ್ಳಿ', bn: 'তিরুচিরাপল্লী', or: 'ତିରୁଚିରାପଲ୍ଲି' },
    'Tirunelveli': { en: 'Tirunelveli', gu: 'તિરુનેલવેલી', hi: 'तिरुनेलवेली', mr: 'तिरुनेलवेली', pa: 'ਤਿਰੁਨੇਲਵੇਲੀ', ta: 'திருநெல்வேலி', te: 'తిరునెల్వేలి', kn: 'ತಿರುನೆಲ್ವೇಲಿ', bn: 'তিরুনেলভেলি', or: 'ତିରୁନେଲ୍ଭେଳି' },
    'Tirupati': { en: 'Tirupati', gu: 'તિરુપતિ', hi: 'तिरुपति', mr: 'तिरुपती', pa: 'ਤਿਰੁਪਤੀ', ta: 'திருப்பதி', te: 'తిరుపతి', kn: 'ತಿರುಪತಿ', bn: 'তিরুপতি', or: 'ତିରୁପତି' },
    'Tiruppur': { en: 'Tiruppur', gu: 'તિરુપ્પુર', hi: 'तिरुप्पुर', mr: 'तिरुप्पुर', pa: 'ਤਿਰੁੱਪੁਰ', ta: 'திருப்பூர்', te: 'తిరుప్పూర్', kn: 'ತಿರುಪ್ಪೂರು', bn: 'তিরুপ্পুর', or: 'ତିରୁପ୍ପୁର' },
    'Udaipur': { en: 'Udaipur', gu: 'ઉદયપુર', hi: 'उदयपुर', mr: 'उदयपूर', pa: 'ਉਦੈਪੁਰ', ta: 'உதய்ப்பூர்', te: 'ఉదయ్పూర్', kn: 'ಉದಯಪುರ', bn: 'উদয়পুর', or: 'ଉଦୟପୁର' },
    'Ujjain': { en: 'Ujjain', gu: 'ઉજ્જૈન', hi: 'उज्जैन', mr: 'उज्जैन', pa: 'ਉੱਜੈਨ', ta: 'உஜ்ஜைன்', te: 'ఉజ్జయిన్', kn: 'ಉಜ್ಜೈನ್', bn: 'উজ্জয়ন', or: 'ଉଜ୍ଜୟନ' },
    'Vadodara': { en: 'Vadodara', gu: 'વડોદરા', hi: 'वडोदरा', mr: 'वडोदरा', pa: 'ਵਡੋਦਰਾ', ta: 'வடோதரா', te: 'వడోదర', kn: 'ವಡೋದರ', bn: 'বরোদা', or: 'ଭଡୋଦରା' },
    'Vapi': { en: 'Vapi', gu: 'વાપી', hi: 'वापी', mr: 'वापी', pa: 'ਵਾਪੀ', ta: 'வாபி', te: 'వాపీ', kn: 'ವಾಪಿ', bn: 'ভাপি', or: 'ଭାପି' },
    'Varanasi': { en: 'Varanasi', gu: 'વારાણસી', hi: 'वाराणसी', mr: 'वाराणसी', pa: 'ਵਾਰਾਣਸੀ', ta: 'வாராணசி', te: 'వారాణసి', kn: 'ವಾರಾಣಸಿ', bn: 'বারাণসী', or: 'ବାରାଣସୀ' },
    'Vellore': { en: 'Vellore', gu: 'વેલ્લોર', hi: 'वेल्लूर', mr: 'वेल्लोर', pa: 'ਵੇਲਲੋਰ', ta: 'வேலூர்', te: 'వెల్లూరు', kn: 'ವೆಲ್ಲೂರು', bn: 'ভেল্লোর', or: 'ଭେଲ୍ଲୋର' },
    'Vijayawada': { en: 'Vijayawada', gu: 'વિજયવાડા', hi: 'विजयवाड़ा', mr: 'विजयवाडा', pa: 'ਵਿਜਯਵਾਡਾ', ta: 'விஜயவாடா', te: 'విజయవాడ', kn: 'ವಿಜಯವಾಡಾ', bn: 'বিজয়ওয়াড়া', or: 'ଵିଜୟୱାଡା' },
    'Visakhapatnam': { en: 'Visakhapatnam', gu: 'વિશાખાપટ્ટણમ', hi: 'विशाखापट्टणम', mr: 'विशाखापट्टणम', pa: 'ਵਿਸ਼ਾਖਾਪਟਨਮ', ta: 'விசாகபட்டினம்', te: 'విశాఖపట్నం', kn: 'ವಿಶಾಖಪಟ್ಟಣಂ', bn: 'বিশাখাপত্তনম', or: 'ବିଶାଖପଟ୍ଟଣମ' },
    'Warangal': { en: 'Warangal', gu: 'વારંગલ', hi: 'वारंगल', mr: 'वारंगल', pa: 'ਵਾਰੰਗਲ', ta: 'வாரங்கல்', te: 'వరంగల్', kn: 'ವರಂಗಲ್', bn: 'ওয়ারঙ্গল', or: 'ଓାରଙ୍ଗଲ' },
    'Yamunanagar': { en: 'Yamunanagar', gu: 'યમુનાનગર', hi: 'यमुनानगर', mr: 'यमुनानगर', pa: 'ਯਮੁਨਾਨਗਰ', ta: 'யமுனாநகர்', te: 'యమునానగర్', kn: 'ಯಮುನಾ ನಗರ', bn: 'যমুনানগর', or: 'ଯମୁନାନଗର' },
    'Zira': { en: 'Zira', gu: 'ઝીરા', hi: 'ज़ीरा', mr: 'झीरा', pa: 'ਜ਼ੀਰਾ', ta: 'ஜீரா', te: 'జీరా', kn: 'ಜೀರಾ', bn: 'জিরা', or: 'ଜୀରା' },
    'Bagasara': { en: 'Bagasara', gu: 'બગસરા', hi: 'बगसरा', mr: 'बगसरा', pa: 'ਬਗਸਰਾ', ta: 'பகசரா', te: 'బగసరా', kn: 'ಬಗಸರಾ', bn: 'বগসরা', or: 'ବଗସରା' },
    'Dhari': { en: 'Dhari', gu: 'ધારી', hi: 'धारी', mr: 'धारी', pa: 'ਧਾਰੀ', ta: 'தாரி', te: 'ధారి', kn: 'ಧಾರಿ', bn: 'ধারি', or: 'ଧାରୀ' },
    'Lathi': { en: 'Lathi', gu: 'લાઠી', hi: 'लाठी', mr: 'लाठी', pa: 'ਲਾਠੀ', ta: 'லாத்தி', te: 'లాఠీ', kn: 'ಲಾಠಿ', bn: 'লাঠি', or: 'ଲାଠୀ' },
    'Savarkundla': { en: 'Savarkundla', gu: 'સાવરકુંડલા', hi: 'सावरकुंडला', mr: 'सावरकुंडला', pa: 'ਸਾਵਰਕੁੰਡਲਾ', ta: 'சாவர்குண்ட்லா', te: 'సావర్కుండ్ల', kn: 'ಸಾವರಕುಂಡ್ಲಾ', bn: 'সাভারকুন্ডলা', or: 'ସାଭରକୁଣ୍ଡଲା' },
    'Babra': { en: 'Babra', gu: 'બાબરા', hi: 'बाबरा', mr: 'बाबरा', pa: 'ਬਾਬਰਾ', ta: 'பாப்ரா', te: 'బబ్రా', kn: 'ಬಬ್ರಾ', bn: 'বাবরা', or: 'ବାବରା' },
    'Rajula': { en: 'Rajula', gu: 'રાજુલા', hi: 'राजुला', mr: 'राजुला', pa: 'ਰਾਜੁਲਾ', ta: 'ராஜுலா', te: 'రాజుల', kn: 'ರಾಜುಲಾ', bn: 'রাজুলা', or: 'ରାଜୁଲା' },
    'Jafarabad': { en: 'Jafarabad', gu: 'જાફરાબાદ', hi: 'जाफराबाद', mr: 'जाफराबाद', pa: 'ਜਾਫਰਾਬਾਦ', ta: 'ஜாபராபாத்', te: 'జాఫరాబాద్', kn: 'ಜಾಫರಾಬಾದ್', bn: 'জাফরাবাদ', or: 'ଜାଫରାବାଦ' },
}

// Optimization: Sort keys once to avoid re-sorting on every render
const SORTED_PLACE_NAMES = Object.keys(placeNameTranslations).sort((a, b) => b.length - a.length)
const SORTED_DISTRICTS = Object.keys(districtTranslations).sort((a, b) => b.length - a.length)

export function translateMarketName(marketName: string, lang: string): string {
    if (lang === 'en') return marketName

    let translatedName = marketName
    let placeFound = false

    // 1. Check Place Names (Specific Markets)
    for (const place of SORTED_PLACE_NAMES) {
        if (marketName.startsWith(place)) {
            const translatedPlace = placeNameTranslations[place]?.[lang] || place
            translatedName = translatedName.replace(place, translatedPlace)
            placeFound = true
            break
        }
    }

    // 2. If not found in places, check Districts (Legacy/General)
    if (!placeFound) {
        for (const district of SORTED_DISTRICTS) {
            if (marketName.startsWith(district)) {
                const translatedDistrict = translateDistrictName(district, lang)
                // Replace only the occurrence at the start
                translatedName = translatedName.replace(district, translatedDistrict)
                break // Stop after first match to avoid double replacement issues
            }
        }
    }

    // 3. Translate Suffixes
    for (const [suffix, translations] of Object.entries(marketSuffixTranslations)) {
        if (translatedName.endsWith(suffix) || marketName.endsWith(suffix)) { // Check both to be safe, though usually suffix is at end
            // Note: checking marketName.endsWith(suffix) is safer if translatedName changed something else but suffix is English
            // But we want to replace the suffix in `translatedName`.

            // Simple replace if it ends with it
            if (translatedName.endsWith(suffix)) {
                const translatedSuffix = translations[lang] || suffix
                translatedName = translatedName.replace(new RegExp(`${suffix}$`), translatedSuffix)
            } else if (marketName.endsWith(suffix)) {
                // Case where place name translation might have messed up suffix match (unlikely if suffix is space separated)
                // But let's stick to replacing in translatedName
                const translatedSuffix = translations[lang] || suffix
                // If the *original* had the suffix, we try to append/replace in the translated string. 
                // Actually, if we translated the place, the suffix is likely still there in English.
                // So the first check `translatedName.endsWith(suffix)` is usually sufficient.
                // However, let's keep the regex logic simple.
                const translatedSuffix2 = translations[lang] || suffix
                translatedName = translatedName.replace(new RegExp(`${suffix}$`), translatedSuffix2)
            }
            break
        }
    }

    return translatedName
}

import { CROP_ICONS } from './crop-icon'

// Fallback or additional emojis can be kept here if needed, but we are moving to CROP_ICONS
export const CROP_EMOJIS: { [key: string]: string } = CROP_ICONS

export function getCropEmoji(cropName: string): string {
    return CROP_ICONS[cropName] || '🌱'
}

// Helper function to convert price from per quintal to per 20kg
export function convertQuintalTo20kg(pricePerQuintal: number): number {
    // 1 Quintal = 100 kg
    // Price per 20 kg = (Price per Quintal) / 5
    return Math.round(pricePerQuintal / 5)
}

// Crop name translations (proper meaningful words, not transliterations)
export const cropTranslations: { [key: string]: { [lang: string]: string } } = {
    // PART 1 – Spices & Condiments
    'Ajwan': { en: 'Ajwan', gu: 'અજવાઇન', hi: 'अजवाइन', mr: 'ओवा', pa: 'ਅਜਵਾਇਨ', ta: 'ஓமம்', te: 'వాము', kn: 'ಓಮ', bn: 'যোয়ান', or: 'ଓମ' },
    'Asalia': { en: 'Asalia', gu: 'અસાલિયા', hi: 'असालिया', mr: 'असालिया', pa: 'ਅਸਾਲੀਆ', ta: 'அசாலியா', te: 'అసాలియా', kn: 'ಅಸಾಲಿಯಾ', bn: 'আসালিয়া', or: 'ଅସାଲିଆ' },
    'Asgand': { en: 'Asgand', gu: 'અશ્વગંધા', hi: 'अश्वगंधा', mr: 'अश्वगंधा', pa: 'ਅਸ਼ਵਗੰਧਾ', ta: 'அஸ்வகந்தா', te: 'అశ్వగంధ', kn: 'ಅಶ್ವಗಂಧ', bn: 'অশ্বগন্ধা', or: 'ଅଶ୍ୱଗନ୍ଧା' },
    'basil': { en: 'basil', gu: 'તુલસી', hi: 'तुलसी', mr: 'तुळस', pa: 'ਤੁਲਸੀ', ta: 'துளசி', te: 'తులసి', kn: 'ತುಳಸಿ', bn: 'তুলসী', or: 'ତୁଳସୀ' },
    'Black pepper': { en: 'Black pepper', gu: 'કાળી મરી', hi: 'काली मिर्च', mr: 'काळी मिरी', pa: 'ਕਾਲੀ ਮਿਰਚ', ta: 'மிளகு', te: 'మిరియాలు', kn: 'ಮೆಣಸು', bn: 'গোলমরিচ', or: 'ଗୋଲମରିଚ' },
    'Chili Red': { en: 'Chili Red', gu: 'સૂકા લાલ મરચાં', hi: 'सूखी लाल मिर्च', mr: 'सुक्या लाल मिरच्या', pa: 'ਸੁੱਕੀ ਲਾਲ ਮਿਰਚ', ta: 'உலர்ந்த சிவப்பு மிளகாய்', te: 'ఎండు ఎర్ర మిర్చి', kn: 'ಒಣ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ', bn: 'শুকনো লাল লঙ্কা', or: 'ଶୁଖିଲା ଲଙ୍କା' },
    'Dry Chillies': { en: 'Dry Chillies', gu: 'સૂકા મરચાં', hi: 'सूखी मिर्च', mr: 'सुक्या मिरच्या', pa: 'ਸੁੱਕੀ ਮਿਰਚ', ta: 'உலர்ந்த மிளகாய்', te: 'ఎండు మిర్చి', kn: 'ಒಣ ಮೆಣಸಿನಕಾಯಿ', bn: 'শুকনো লঙ্কা', or: 'ଶୁଖିଲା ଲଙ୍କା' },
    'Cummin Seed(Jeera)': { en: 'Cummin Seed(Jeera)', gu: 'જીરું', hi: 'जीरा', mr: 'जिरे', pa: 'ਜੀਰਾ', ta: 'சீரகம்', te: 'జీలకర్ర', kn: 'ಜೀರಿಗೆ', bn: 'জিরা', or: 'ଜିରା' },
    'Corriander seed': { en: 'Corriander seed', gu: 'ધાણા', hi: 'धनिया', mr: 'धणे', pa: 'ਧਨੀਆ', ta: 'கொத்தமல்லி விதை', te: 'ధనియాలు', kn: 'ಕೊತ್ತಂಬರಿ ಬೀಜ', bn: 'ধনে', or: 'ଧନିଆ' },
    'Methi Seeds': { en: 'Methi Seeds', gu: 'મેથી', hi: 'मेथी', mr: 'मेथी', pa: 'ਮੇਥੀ', ta: 'வெந்தயம்', te: 'మెంతులు', kn: 'ಮೆಂತೆ', bn: 'মেথি', or: 'ମେଥି' },
    'Mustard': { en: 'Mustard', gu: 'રાઈ', hi: 'सरसों', mr: 'मोहरी', pa: 'ਸਰੋਂ', ta: 'கடுகு', te: 'ఆవాలు', kn: 'ಸಾಸಿವೆ', bn: 'সরিষা', or: 'ସୋରିଷ' },
    'nigella': { en: 'nigella', gu: 'કલૌંજી', hi: 'कलौंजी', mr: 'काळे जिरे', pa: 'ਕਲੌਂਜੀ', ta: 'கருஞ்சீரகம்', te: 'నల్ల జీలకర్ర', kn: 'ಕರಿಜೀರಿಗೆ', bn: 'কালোজিরা', or: 'କଳାଜିରା' },
    'poppy seeds': { en: 'poppy seeds', gu: 'ખસખસ', hi: 'खसखस', mr: 'खसखस', pa: 'ਖਸਖਸ', ta: 'கசகசா', te: 'గసగసాలు', kn: 'ಗಸಗಸೆ', bn: 'পোস্তদানা', or: 'ଖସଖସ' },
    'Soanf': { en: 'Soanf', gu: 'વરીયાળી', hi: 'सौंफ', mr: 'बडीशेप', pa: 'ਸੌਂਫ', ta: 'சோம்பு', te: 'సోంపు', kn: 'ಸೋಂಪು', bn: 'মৌরি', or: 'ସୋମ୍ଫ' },
    'Turmeric': { en: 'Turmeric', gu: 'હળદર', hi: 'हल्दी', mr: 'हळद', pa: 'ਹਲਦੀ', ta: 'மஞ்சள்', te: 'పసుపు', kn: 'ಅರಿಶಿನ', bn: 'হলুদ', or: 'ହଳଦୀ' },
    'Turmeric(raw)': { en: 'Turmeric(raw)', gu: 'કાચી હળદર', hi: 'कच्ची हल्दी', mr: 'कच्ची हळद', pa: 'ਕੱਚੀ ਹਲਦੀ', ta: 'கச்சா மஞ்சள்', te: 'పచ్చి పసుపు', kn: 'ಕಚ್ಚಾ ಅರಿಶಿನ', bn: 'কাঁচা হলুদ', or: 'କଞ୍ଚା ହଳଦୀ' },
    'Garlic': { en: 'Garlic', gu: 'લસણ', hi: 'लहसुन', mr: 'लसूण', pa: 'लਸਣ', ta: 'பூண்டு', te: 'వెల్లుల్లి', kn: 'ಬೆಳ್ಳುಳ್ಳಿ', bn: 'রসুন', or: 'ରସୁଣ' },
    'Ginger(Dry)': { en: 'Ginger(Dry)', gu: 'સૂંઠ', hi: 'सोंठ', mr: 'सुंठ', pa: 'ਸੁੰਠ', ta: 'சுக்கு', te: 'ఎండు అల్లం', kn: 'ಒಣ ಶುಂಠಿ', bn: 'শুকনো আদা', or: 'ଶୁଖିଲା ଅଦା' },
    'Ginger(Green)': { en: 'Ginger(Green)', gu: 'આદુ', hi: 'अदरक', mr: 'आलं', pa: 'ਅਦਰਕ', ta: 'இஞ்சி', te: 'అల్లం', kn: 'ಶುಂಠಿ', bn: 'আদা', or: 'ଅଦା' },
    'Isabgul(Psyllium)': { en: 'Isabgul(Psyllium)', gu: 'ઇસબગુલ', hi: 'इसबगोल', mr: 'इसबगोल', pa: 'ਇਸਬਗੋਲ', ta: 'இசப்கோல்', te: 'ఇసబ్గోల్', kn: 'ಇಸಬ್ಗೋಲ್', bn: 'ইসবগুল', or: 'ଇସବଗୋଲ' },

    // PART 2 – Pulses & Grains
    'Alasande Gram': { en: 'Alasande Gram', gu: 'અળસંદે દાળ', hi: 'अलसंदे दाल', mr: 'अलसांदे डाळ', pa: 'ਅਲਸਾਂਦੇ ਦਾਲ', ta: 'அலசந்தை பருப்பு', te: 'అలసందె పప్పు', kn: 'ಅಲಸಂದೆ ಬೇಳೆ', bn: 'আলসান্দে ডাল', or: 'ଅଲସାନ୍ଦେ ଡାଲ' },
    'Arhar Dal(Tur Dal)': { en: 'Arhar Dal(Tur Dal)', gu: 'તુવેર દાળ', hi: 'अरहर दाल', mr: 'तूर डाळ', pa: 'ਅਰਹਰ ਦਾਲ', ta: 'துவரம் பருப்பு', te: 'కందిపప్పు', kn: 'ತೊಗರಿ ಬೇಳೆ', bn: 'আরহার ডাল', or: 'ଅରହର ଡାଲ' },
    'Arhar(Tur/Red Gram)(Whole)': { en: 'Arhar(Tur/Red Gram)(Whole)', gu: 'તુવેર', hi: 'अरहर', mr: 'तूर', pa: 'ਅਰਹਰ', ta: 'துவரை', te: 'కంది', kn: 'ತೊಗರಿ', bn: 'আরহার', or: 'ଅରହର' },
    'Bajra(Pearl Millet/Cumbu)': { en: 'Bajra(Pearl Millet/Cumbu)', gu: 'બાજરી', hi: 'बाजरा', mr: 'बाजरी', pa: 'ਬਾਜਰਾ', ta: 'கம்பு', te: 'సజ్జలు', kn: 'ಸಜ್ಜೆ', bn: 'বাজরা', or: 'ବାଜରା' },
    'Barley(Jau)': { en: 'Barley(Jau)', gu: 'જવ', hi: 'जौ', mr: 'जव', pa: 'ਜੌ', ta: 'பார்லி', te: 'యవలు', kn: 'ಜೋಳ', bn: 'যব', or: 'ଯବ' },
    'Bengal Gram Dal(Chana Dal)': { en: 'Bengal Gram Dal(Chana Dal)', gu: 'ચણા દાળ', hi: 'चना दाल', mr: 'चणा डाळ', pa: 'ਚਨਾ ਦਾਲ', ta: 'கடலை பருப்பு', te: 'శెనగ పప్పు', kn: 'ಕಡಲೆ ಬೇಳೆ', bn: 'ছোলা ডাল', or: 'ଚଣା ଡାଲ' },
    'Bengal Gram(Gram)(Whole)': { en: 'Bengal Gram(Gram)(Whole)', gu: 'ચણા', hi: 'चना', mr: 'चणा', pa: 'ਚਨਾ', ta: 'கொண்டைக்கடலை', te: 'శెనగలు', kn: 'ಕಡಲೆ', bn: 'ছোলা', or: 'ଚଣା' },
    'Black Gram Dal(Urd Dal)': { en: 'Black Gram Dal(Urd Dal)', gu: 'અડદ દાળ', hi: 'उड़द दाल', mr: 'उडीद डाळ', pa: 'ਉੜਦ ਦਾਲ', ta: 'உளுந்து பருப்பு', te: 'మినప్పప్పు', kn: 'ಉದ್ದಿನ ಬೇಳೆ', bn: 'উড়দ ডাল', or: 'ଉରଦ ଡାଲ' },
    'Black Gram(Urd Beans)(Whole)': { en: 'Black Gram(Urd Beans)(Whole)', gu: 'અડદ', hi: 'उड़द', mr: 'उडीद', pa: 'ਉੜਦ', ta: 'உளுந்து', te: 'మినుములు', kn: 'ಉದ್ದಿನಕಾಳು', bn: 'উড়দ', or: 'ଉରଦ' },
    'Field Pea': { en: 'Field Pea', gu: 'વટાણા', hi: 'मटर', mr: 'वाटाणा', pa: 'ਮਟਰ', ta: 'பட்டாணி', te: 'బటాని', kn: 'ಬಟಾಣಿ', bn: 'মটর', or: 'ମଟର' },
    'Gram Raw(Chholia)': { en: 'Gram Raw(Chholia)', gu: 'લીલા ચણા', hi: 'हरा चना', mr: 'हिरवे चणे', pa: 'ਹਰਾ ਚਨਾ', ta: 'பச்சை கடலை', te: 'పచ్చి శెనగ', kn: 'ಹಸಿರು ಕಡಲೆ', bn: 'কাঁচা ছোলা', or: 'କାଞ୍ଚା ଚଣା' },
    'Green Gram Dal(Moong Dal)': { en: 'Green Gram Dal(Moong Dal)', gu: 'મગ દાળ', hi: 'मूंग दाल', mr: 'मूग डाळ', pa: 'ਮੂੰਗ ਦਾਲ', ta: 'பாசிப்பருப்பு', te: 'పెసరపప్పు', kn: 'ಹಸಿರು ಬೇಳೆ', bn: 'মুগ ডাল', or: 'ମୁଗ ଡାଲ' },
    'Green Gram(Moong)(Whole)': { en: 'Green Gram(Moong)(Whole)', gu: 'મગ', hi: 'मूंग', mr: 'मूग', pa: 'ਮੂੰਗ', ta: 'பாசிப்பயறு', te: 'పెసలు', kn: 'ಹಸಿರು ಕಾಳು', bn: 'মুগ', or: 'ମୁଗ' },
    'Jowar(Sorghum)': { en: 'Jowar(Sorghum)', gu: 'જુવાર', hi: 'ज्वार', mr: 'ज्वारी', pa: 'ਜਵਾਰ', ta: 'சோளம்', te: 'జొన్నలు', kn: 'ಜೋಳ', bn: 'জোয়ার', or: 'ଜୋଆର' },
    'Kabuli Chana(Chickpeas-White)': { en: 'Kabuli Chana(Chickpeas-White)', gu: 'કાબુલી ચણા', hi: 'काबुली चना', mr: 'काबुली चणे', pa: 'ਕਾਬੁਲੀ ਚਨਾ', ta: 'கபுலி கடலை', te: 'కాబూలీ శెనగ', kn: 'ಕಾಬೂಲಿ ಕಡಲೆ', bn: 'কাবুলি ছোলা', or: 'କାବୁଲି ଚଣା' },
    'Kulthi(Horse Gram)': { en: 'Kulthi(Horse Gram)', gu: 'કુલથી', hi: 'कुल्थी', mr: 'कुळीथ', pa: 'ਕੁਲਥੀ', ta: 'கொள்ளு', te: 'ఉలవలు', kn: 'ಹುರುಳಿ', bn: 'কুলথ', or: 'କୁଳଥ' },
    'Kutki': { en: 'Kutki', gu: 'કુટકી', hi: 'कुटकी', mr: 'कुटकी', pa: 'ਕੁਟਕੀ', ta: 'சாமை', te: 'సామలు', kn: 'ಸಾಮೆ', bn: 'কুটকি', or: 'କୁଟକି' },
    'Lentil(Masur)(Whole)': { en: 'Lentil(Masur)(Whole)', gu: 'મસૂર', hi: 'मसूर', mr: 'मसूर', pa: 'ਮਸੂਰ', ta: 'மசூர்', te: 'మసూర్లు', kn: 'ಮಸೂರ', bn: 'মসুর', or: 'ମସୁର' },
    'Maize': { en: 'Maize', gu: 'મકાઈ', hi: 'मक्का', mr: 'मका', pa: 'ਮੱਕੀ', ta: 'மக்காச்சோளம்', te: 'మొక్కజొన్న', kn: 'ಜೋಳ', bn: 'ভুট্টা', or: 'ମକା' },
    'Paddy(Basmati)': { en: 'Paddy(Basmati)', gu: 'બાસમતી ધાન', hi: 'बासमती धान', mr: 'बासमती धान', pa: 'ਬਾਸਮਤੀ ਧਾਨ', ta: 'பாஸ்மதி நெல்', te: 'బాస్మతి వరి', kn: 'ಬಾಸ್ಮತಿ ಭತ್ತ', bn: 'বাসমতী ধান', or: 'ବାସମତୀ ଧାନ' },
    'Paddy(Common)': { en: 'Paddy(Common)', gu: 'ધાન', hi: 'धान', mr: 'भात', pa: 'ਧਾਨ', ta: 'நெல்', te: 'వరి', kn: 'ಭತ್ತ', bn: 'ধান', or: 'ଧାନ' },
    'Ragi(Finger Millet)': { en: 'Ragi(Finger Millet)', gu: 'રાગી', hi: 'रागी', mr: 'नाचणी', pa: 'ਰਾਗੀ', ta: 'கேழ்வரகு', te: 'రాగులు', kn: 'ರಾಗಿ', bn: 'রাগি', or: 'ରାଗି' },
    'Rajgir': { en: 'Rajgir', gu: 'રાજગીર', hi: 'राजगीर', mr: 'राजगिरा', pa: 'ਰਾਜਗੀਰਾ', ta: 'அமராந்து', te: 'రాజగిరి', kn: 'ರಾಜಗಿರಿ', bn: 'রাজগিরা', or: 'ରାଜଗିର' },
    'Red Gram': { en: 'Red Gram', gu: 'તુવેર', hi: 'अरहर', mr: 'तूर', pa: 'ਅਰਹਰ', ta: 'துவரை', te: 'కంది', kn: 'ತೊಗರಿ', bn: 'আরহার', or: 'ଅରହର' },
    'Rice': { en: 'Rice', gu: 'ચોખા', hi: 'चावल', mr: 'तांदूळ', pa: 'ਚੌਲ', ta: 'அரிசி', te: 'బియ్యం', kn: 'ಅಕ್ಕಿ', bn: 'চাল', or: 'ଚାଉଳ' },
    'Soyabean': { en: 'Soyabean', gu: 'સોયાબીન', hi: 'सोयाबीन', mr: 'सोयाबीन', pa: 'ਸੋਇਆਬੀਨ', ta: 'சோயாபீன்', te: 'సోయాబీన్', kn: 'ಸೊಯಾಬೀನ್', bn: 'সয়াবিন', or: 'ସୋୟାବିନ' },
    'Wheat': { en: 'Wheat', gu: 'ઘઉં', hi: 'गेहूं', mr: 'गहू', pa: 'ਕਣਕ', ta: 'கோதுமை', te: 'గోధుమ', kn: 'ಗೋಧಿ', bn: 'গম', or: 'ଗହମ' },

    // PART 3 – Vegetables
    'Amaranthus': { en: 'Amaranthus', gu: 'ચોળાઈ', hi: 'चौलाई', mr: 'तांदुळजा', pa: 'ਚੌਲਾਈ', ta: 'சிறுகீரை', te: 'తోటకూర', kn: 'ದಂಟಿನ ಸೊಪ್ಪು', bn: 'নটে শাক', or: 'ଲାଲ ଶାଗ' },
    'Amranthas Red': { en: 'Amranthas Red', gu: 'લાલ ચોળાઈ', hi: 'लाल चौलाई', mr: 'लाल तांदुळजा', pa: 'ਲਾਲ ਚੌਲਾਈ', ta: 'செங்கீரை', te: 'ఎర్ర తోటకూర', kn: 'ಕೆಂಪು ದಂಟಿನ ಸೊಪ್ಪು', bn: 'লাল নটে শাক', or: 'ଲାଲ ଶାଗ' },
    'Ashgourd': { en: 'Ashgourd', gu: 'કોળું', hi: 'पेठा', mr: 'कोहळा', pa: 'ਪੇਠਾ', ta: 'பூசணிக்காய்', te: 'బూడిద గుమ్మడికాయ', kn: 'ಬೂದು ಕುಂಬಳಕಾಯಿ', bn: 'চালকুমড়া', or: 'କୁମ୍ହଡା' },
    'Banana - Green': { en: 'Banana - Green', gu: 'કાચું કેળું', hi: 'कच्चा केला', mr: 'कच्ची केळी', pa: 'ਕੱਚਾ ਕੇਲਾ', ta: 'வாழைக்காய்', te: 'పచ్చి అరటి', kn: 'ಹಸಿ ಬಾಳೆಹಣ್ಣು', bn: 'কাঁচা কলা', or: 'କଞ୍ଚା କଦଳୀ' },
    'Beans': { en: 'Beans', gu: 'બીન્સ', hi: 'सेम', mr: 'घेवडा', pa: 'ਬੀਨਸ', ta: 'பீன்ஸ்', te: 'బీన్స్', kn: 'ಬೀನ್ಸ್', bn: 'বিনস', or: 'ବିନ୍ସ' },
    'Beetroot': { en: 'Beetroot', gu: 'બીટ', hi: 'चुकंदर', mr: 'बीट', pa: 'ਚੁੱਕੰਦਰ', ta: 'பீட்ரூட்', te: 'బీట్రూట్', kn: 'ಬೀಟ್ರೂಟ್', bn: 'বিট', or: 'ବିଟ' },
    'Bhindi(Ladies Finger)': { en: 'Bhindi(Ladies Finger)', gu: 'ભીંડા', hi: 'भिंडी', mr: 'भेंडी', pa: 'ਭਿੰਡੀ', ta: 'வெண்டைக்காய்', te: 'బెండకాయ', kn: 'ಬೆಂಡೆಕಾಯಿ', bn: 'ঢেঁড়স', or: 'ଭିଣ୍ଡି' },
    'Bitter gourd': { en: 'Bitter gourd', gu: 'કારેલા', hi: 'करेला', mr: 'कारले', pa: 'ਕਰੇਲਾ', ta: 'பாகற்காய்', te: 'కాకరకాయ', kn: 'ಹಾಗಲಕಾಯಿ', bn: 'করলা', or: 'କଲରା' },
    'Bottle gourd': { en: 'Bottle gourd', gu: 'દુધી', hi: 'लौकी', mr: 'दुधी भोपळा', pa: 'ਲੌਕੀ', ta: 'சுரைக்காய்', te: 'సొరకాయ', kn: 'ಸೊರೆಕಾಯಿ', bn: 'লাউ', or: 'ଲାଉ' },
    'Brinjal': { en: 'Brinjal', gu: 'રીંગણ', hi: 'बैंगन', mr: 'वांगी', pa: 'ਬੈਂਗਣ', ta: 'கத்திரிக்காய்', te: 'వంకాయ', kn: 'ಬದನೆಕಾಯಿ', bn: 'বেগুন', or: 'ବେଗୁନ' },
    'Bunch Beans': { en: 'Bunch Beans', gu: 'ચપ્પરદ અવરે', hi: 'ચवली', mr: 'चवळी', pa: 'ਚਵਲੀ', ta: 'அவரைக்காய்', te: 'చిక్కుడుకాయ', kn: 'ಅವರೆಕಾಯಿ', bn: 'বরবটি', or: 'ବରବଟି' },
    'Cabbage': { en: 'Cabbage', gu: 'કોબી', hi: 'पत्ता गोभी', mr: 'कोबी', pa: 'ਬੰਦ ਗੋਭੀ', ta: 'முட்டைக்கோஸ்', te: 'క్యాబేజీ', kn: 'ಎಲೆಕೋಸು', bn: 'বাঁধাকপি', or: 'ବନ୍ଧାକୋବି' },
    'Capsicum': { en: 'Capsicum', gu: 'શિમલા મરચાં', hi: 'शिमला मिर्च', mr: 'ढोबळी मिरची', pa: 'ਸ਼ਿਮਲਾ ਮਿਰਚ', ta: 'குடைமிளகாய்', te: 'బెంగుళూరు మిర్చి', kn: 'ದೋಡ ಮೆಣಸಿನಕಾಯಿ', bn: 'ক্যাপসিকাম', or: 'ସିମଲା ମରିଚ' },
    'Carrot': { en: 'Carrot', gu: 'ગાજર', hi: 'गाजर', mr: 'गाजर', pa: 'ਗਾਜਰ', ta: 'காரட்', te: 'క్యారెట్', kn: 'ಕ್ಯಾರೆಟ್', bn: 'গাজর', or: 'ଗାଜର' },
    'Cauliflower': { en: 'Cauliflower', gu: 'ફૂલકોબી', hi: 'फूल गोभी', mr: 'फुलकोबी', pa: 'ਫੁੱਲ ਗੋਭੀ', ta: 'பூக்கோசு', te: 'కాలీఫ్లవర్', kn: 'ಹೂಕೋಸು', bn: 'ফুলকপি', or: 'ଫୁଲକୋବି' },
    'Chow Chow': { en: 'Chow Chow', gu: 'ચૌચૌ', hi: 'चायोटे', mr: 'चौ चौ', pa: 'ਚੌ ਚੌ', ta: 'சவுசவ்', te: 'చౌ చౌ', kn: 'ಚೌ ಚೌ', bn: 'চৌচৌ', or: 'ଚାଉଚାଉ' },
    'Cluster beans': { en: 'Cluster beans', gu: 'ગવાર', hi: 'ग्वार', mr: 'गवार', pa: 'ਗੁਆਰ', ta: 'கொத்தவரங்காய்', te: 'గోకర కాయ', kn: 'ಗೋರಿಕಾಯಿ', bn: 'গুঁয়ার', or: 'ଗୁଆର' },
    'Colacasia': { en: 'Colacasia', gu: 'અરબી', hi: 'अरबी', mr: 'अळू', pa: 'ਅਰਵੀ', ta: 'சேப்பங்கிழங்கு', te: 'చామగడ్డ', kn: 'ಕೆಸುವಿನಗಡ್ಡೆ', bn: 'কচু', or: 'କଚୁ' },
    'Coriander(Leaves)': { en: 'Coriander(Leaves)', gu: 'કોથમીર', hi: 'हरा धनिया', mr: 'कोथिंबीर', pa: 'ਹਰਾ ਧਨੀਆ', ta: 'கொத்தமல்லி', te: 'కొత్తిమీర', kn: 'ಕೊತ್ತಂಬರಿ', bn: 'ধনেপাতা', or: 'ଧନିଆ ପତ୍ର' },
    'Cucumber(Kheera)': { en: 'Cucumber(Kheera)', gu: 'કાકડી', hi: 'खीरा', mr: 'काकडी', pa: 'ਖੀਰਾ', ta: 'வெள்ளரிக்காய்', te: 'దోసకాయ', kn: 'ಸೌತೆಕಾಯಿ', bn: 'শসা', or: 'କାକୁଡି' },
    'Drumstick': { en: 'Drumstick', gu: 'સરગવો', hi: 'सहजन', mr: 'शेवगा', pa: 'ਸਹਜਨ', ta: 'முருங்கைக்காய்', te: 'మునగకాయ', kn: 'ನುಗ್ಗೆಕಾಯಿ', bn: 'সজনে', or: 'ସଜନା' },
    'Elephant Yam(Suran)/Amorphophallus': { en: 'Elephant Yam(Suran)', gu: 'સુરણ', hi: 'सूरन', mr: 'सुरण', pa: 'ਸੁਰਨ', ta: 'சேனைக்கிழங்கு', te: 'సురన్', kn: 'ಸುರಣ', bn: 'সুরণ', or: 'ସୁରଣ' },
    'Green Chilli': { en: 'Green Chilli', gu: 'લીલા મરચાં', hi: 'हरी मिर्च', mr: 'हिरवी मिरची', pa: 'ਹਰੀ ਮਿਰਚ', ta: 'பச்சை மிளகாய்', te: 'పచ్చి మిర్చి', kn: 'ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ', bn: 'কাঁচা লঙ্কা', or: 'କାଞ୍ଚା ଲଙ୍କା' },
    'Knool Khol': { en: 'Knool Khol', gu: 'નવલકોળ', hi: 'गांठ गोभी', mr: 'गाठ कोबी', pa: 'ਗਾਂਠ ਗੋਭੀ', ta: 'நூல்கோல்', te: 'నోల్ కోల్', kn: 'ನೂಲ್ಕೋಲ್', bn: 'ওলকপি', or: 'ଓଲକୋପି' },
    'Little gourd(Kundru)': { en: 'Little gourd(Kundru)', gu: 'કુંદરૂ', hi: 'कुंदरू', mr: 'टिंडोरा', pa: 'ਕੁੰਦ੍ਰੂ', ta: 'கோவைக்காய்', te: 'దొండకాయ', kn: 'ತೊಂಡೆಕಾಯಿ', bn: 'কুন্দরী', or: 'କୁନ୍ଦୁରି' },
    'Onion': { en: 'Onion', gu: 'ડુંગળી', hi: 'प्याज', mr: 'कांदा', pa: 'ਪਿਆਜ਼', ta: 'வெங்காயம்', te: 'ఉల్లిపాయ', kn: 'ಈರುಳ್ಳಿ', bn: 'পেঁয়াজ', or: 'ପିଆଜ' },
    'Onion Green': { en: 'Onion Green', gu: 'લીલી ડુંગળી', hi: 'हरा प्याज', mr: 'पात कांदा', pa: 'ਹਰਾ ਪਿਆਜ਼', ta: 'பச்சை வெங்காயம்', te: 'పచ్చి ఉల్లి', kn: 'ಹಸಿರು ಈರುಳ್ಳಿ', bn: 'পেঁয়াজ পাতা', or: 'ହରା ପିଆଜ' },
    'Potato': { en: 'Potato', gu: 'બટાકા', hi: 'आलू', mr: 'बटाटा', pa: 'ਆਲੂ', ta: 'உருளைக்கிழங்கு', te: 'ఆలుగడ్డ', kn: 'ಆಲೂಗಡ್ಡೆ', bn: 'আলু', or: 'ଆଳୁ' },
    'Pumpkin': { en: 'Pumpkin', gu: 'કોળું', hi: 'कद्दू', mr: 'भोपळा', pa: 'ਕੱਦੂ', ta: 'பூசணிக்காய்', te: 'గుమ్మడికాయ', kn: 'ಕುಂಬಳಕಾಯಿ', bn: 'কুমড়া', or: 'କୁମ୍ହଡା' },
    'Ridgeguard(Tori)': { en: 'Ridgeguard(Tori)', gu: 'તુરીયા', hi: 'तुरई', mr: 'दुधी दोडका', pa: 'ਤੁਰਈ', ta: 'பீர்க்கங்காய்', te: 'బీరకాయ', kn: 'ಹೀರೆಕಾಯಿ', bn: 'ঝিঙে', or: 'ଝିଙ୍ଗା' },
    'Snakeguard': { en: 'Snakeguard', gu: 'પડવળ', hi: 'चिचिंडा', mr: 'पडवळ', pa: 'ਚਚਿੰਡਾ', ta: 'புடலங்காய்', te: 'పొట్లకాయ', kn: 'ಪಡವಳಕಾಯಿ', bn: 'চিচিঙ্গা', or: 'ପୋଟଳ' },
    'Spinach': { en: 'Spinach', gu: 'પાલક', hi: 'पालक', mr: 'पालक', pa: 'ਪਾਲਕ', ta: 'பசலைக்கீரை', te: 'పాలకూర', kn: 'ಪಾಲಕ್', bn: 'পালং শাক', or: 'ପାଳଙ୍ଗ' },
    'Sponge gourd': { en: 'Sponge gourd', gu: 'ગલકા', hi: 'गिलकी', mr: 'गिलका', pa: 'ਗਿਲਕੀ', ta: 'நெஞ்சு பீர்க்கங்காய்', te: 'నెంచు బీరకాయ', kn: 'ನೆಂಚಿನಕಾಯಿ', bn: 'ধুন্দুল', or: 'ଗିଲ୍କି' },
    'Sweet Potato': { en: 'Sweet Potato', gu: 'રતાળું', hi: 'शकरकंद', mr: 'रताळे', pa: 'ਸ਼ਕਰਕੰਦੀ', ta: 'சர்க்கரைவள்ளி', te: 'చిలకడదుంప', kn: 'ಸಿಹಿ ಗೆಣಸು', bn: 'মিষ্টি আলু', or: 'ମିଠା ଆଳୁ' },
    'Tomato': { en: 'Tomato', gu: 'ટમેટા', hi: 'टमाटर', mr: 'टोमॅटो', pa: 'ਟਮਾਟਰ', ta: 'தக்காளி', te: 'టమాటా', kn: 'ಟೊಮೇಟೋ', bn: 'টমেটো', or: 'ଟମାଟୋ' },
    'Tinda': { en: 'Tinda', gu: 'ટીંડા', hi: 'टिंडा', mr: 'टिंडा', pa: 'ਟਿੰਡਾ', ta: 'டிண்டா', te: 'టిండా', kn: 'ಟಿಂಡಾ', bn: 'টিন্ডা', or: 'ଟିଣ୍ଡା' },

    // PART 4 – Fruits
    'Amla(Nelli Kai)': { en: 'Amla(Nelli Kai)', gu: 'આંબળા', hi: 'आँवला', mr: 'आवळा', pa: 'ਆਂਵਲਾ', ta: 'நெல்லிக்காய்', te: 'ఉసిరికాయ', kn: 'ನೆಲ್ಲಿಕಾಯಿ', bn: 'আমলকি', or: 'ଆମଳା' },
    'Apple': { en: 'Apple', gu: 'સફરજન', hi: 'सेब', mr: 'सफरचंद', pa: 'ਸੇਬ', ta: 'ஆப்பிள்', te: 'ఆపిల్', kn: 'ಆಪಲ್', bn: 'আপেল', or: 'ସେବ' },
    'Banana': { en: 'Banana', gu: 'કેળું', hi: 'केला', mr: 'केळी', pa: 'ਕੇਲਾ', ta: 'வாழைப்பழம்', te: 'అరటి పండు', kn: 'ಬಾಳೆಹಣ್ಣು', bn: 'কলা', or: 'କଦଳୀ' },
    'Ber(Zizyphus/Borehannu)': { en: 'Ber(Zizyphus/Borehannu)', gu: 'બોર', hi: 'बेर', mr: 'बोर', pa: 'ਬੇਰ', ta: 'இலந்தைப்பழம்', te: 'రేగు పండు', kn: 'ಬೋರೆಹಣ್ಣು', bn: 'কুল', or: 'ବର' },
    'Chikoos(Sapota)': { en: 'Chikoos(Sapota)', gu: 'ચીકુ', hi: 'चीकू', mr: 'चिकू', pa: 'ਚੀਕੂ', ta: 'சப்போட்டா', te: 'సపోటా', kn: 'ಸಪೋಟಾ', bn: 'চিকু', or: 'ଚିକୁ' },
    'Custard Apple(Sharifa)': { en: 'Custard Apple(Sharifa)', gu: 'સીતાફળ', hi: 'सीताफल', mr: 'सीताफळ', pa: 'ਸੀਤਾਫਲ', ta: 'சீதாப்பழம்', te: 'సీతాఫలం', kn: 'ಸೀತಾಫಲ', bn: 'শরিফা', or: 'ସୀତାଫଳ' },
    'Fig(Anjura/Anjeer)': { en: 'Fig(Anjura/Anjeer)', gu: 'અંજીર', hi: 'अंजीर', mr: 'अंजीर', pa: 'ਅੰਜੀਰ', ta: 'அத்திப்பழம்', te: 'అత్తి పండు', kn: 'ಅಂಜೂರ', bn: 'ডুমুর', or: 'ଡୁମୁର' },
    'Grapes': { en: 'Grapes', gu: 'દ્રાક્ષ', hi: 'अंगूर', mr: 'द्राक्षे', pa: 'ਅੰਗੂਰ', ta: 'திராட்சை', te: 'ద్రాక్ష', kn: 'ದ್ರಾಕ್ಷಿ', bn: 'আঙুর', or: 'ଅଙ୍ଗୁର' },
    'Guava': { en: 'Guava', gu: 'જામફળ', hi: 'अमरूद', mr: 'पेरू', pa: 'ਅਮਰੂਦ', ta: 'கொய்யாப்பழம்', te: 'జామ పండు', kn: 'ಪೇರಲೆ', bn: 'পেয়ারা', or: 'ପେରା' },
    'Jack Fruit': { en: 'Jack Fruit', gu: 'ફણસ', hi: 'कटहल', mr: 'फणस', pa: 'ਕਠਲ', ta: 'பலாப்பழம்', te: 'పనస పండు', kn: 'ಹಲಸು', bn: 'কাঁঠাল', or: 'ପଣସ' },
    'Karbuja(Musk Melon)': { en: 'Karbuja(Musk Melon)', gu: 'ખરબૂજા', hi: 'खरबूजा', mr: 'खरबूज', pa: 'ਖਰਬੂਜਾ', ta: 'கிர்ணி', te: 'ఖర్బూజ', kn: 'ಕರ್ಬೂಜ', bn: 'খরমুজ', or: 'ଖରବୁଜ' },
    'Kinnow': { en: 'Kinnow', gu: 'કિન્નો', hi: 'किन्नू', mr: 'किन्नू', pa: 'ਕਿੰਨੂ', ta: 'கின்னோ', te: 'కిన్నో', kn: 'ಕಿನ್ನೋ', bn: 'কিন্নু', or: 'କିନ୍ନୁ' },
    'Lemon': { en: 'Lemon', gu: 'લીંબુ', hi: 'नींबू', mr: 'लिंबू', pa: 'ਨਿੰਬੂ', ta: 'எலுமிச்சை', te: 'నిమ్మకాయ', kn: 'ನಿಂಬೆಹಣ್ಣು', bn: 'লেবু', or: 'ଲେମ୍ବୁ' },
    'Lime': { en: 'Lime', gu: 'કાગળી લીંબુ', hi: 'कागजी नींबू', mr: 'कागदी लिंबू', pa: 'ਕਾਗਜ਼ੀ ਨਿੰਬੂ', ta: 'எலுமிச்சை', te: 'కాగిత నిమ్మకాయ', kn: 'ಕಾಗದಿ ನಿಂಬೆ', bn: 'কাগজি লেবু', or: 'କାଗଜି ଲେମ୍ବୁ' },
    'Mango': { en: 'Mango', gu: 'કેરી', hi: 'आम', mr: 'आंबा', pa: 'ਅੰਬ', ta: 'மாம்பழம்', te: 'మామిడి', kn: 'ಮಾವು', bn: 'আম', or: 'ଆମ୍ବ' },
    'Mango(Raw-Ripe)': { en: 'Mango(Raw-Ripe)', gu: 'કાચી/પાકેલી કેરી', hi: 'कच्चा/पका आम', mr: 'कच्चा/पिकलेला आंबा', pa: 'ਕੱਚਾ/ਪੱਕਾ ਅੰਬ', ta: 'காய்/பழம் மாம்பழம்', te: 'పచ్చి/పండిన మామిడి', kn: 'ಕಚ್ಚಾ/ಹಣ್ಣಾದ ಮಾವು', bn: 'কাঁচা/পাকা আম', or: 'କଞ୍ଚା/ପକା ଆମ୍ବ' },
    'Mousambi(Sweet Lime)': { en: 'Mousambi(Sweet Lime)', gu: 'મોસંબી', hi: 'मौसंबी', mr: 'मोसंबी', pa: 'ਮੌਸੰਬੀ', ta: 'சாத்துக்குடி', te: 'మోసంబి', kn: 'ಮೊಸಂಬಿ', bn: 'মৌসুমি', or: 'ମୋସମ୍ବି' },
    'Orange': { en: 'Orange', gu: 'સંત્રું', hi: 'संतरा', mr: 'संत्रा', pa: 'ਸੰਤਰਾ', ta: 'ஆரஞ்சு', te: 'నారింజ', kn: 'ಕಿತ್ತಳೆ', bn: 'কমলা', or: 'କମଳା' },
    'Papaya': { en: 'Papaya', gu: 'પપૈયું', hi: 'पपीता', mr: 'पपई', pa: 'ਪਪੀਤਾ', ta: 'பப்பாளி', te: 'బొప్పాయి', kn: 'ಪಪ್ಪಾಯಿ', bn: 'পেঁপে', or: 'ଅମୃତଭଣ୍ଡା' },
    'Papaya(Raw)': { en: 'Papaya(Raw)', gu: 'કાચું પપૈયું', hi: 'कच्चा पपीता', mr: 'कच्ची पपई', pa: 'ਕੱਚਾ ਪਪੀਤਾ', ta: 'பச்சை பப்பாளி', te: 'పచ్చి బొప్పాయి', kn: 'ಹಸಿ ಪಪ್ಪಾಯಿ', bn: 'কাঁচা পেঁপে', or: 'କଞ୍ଚା ପପିତା' },
    'Pear(Marasebu)': { en: 'Pear(Marasebu)', gu: 'નાશપાતી', hi: 'नाशपाती', mr: 'नाशपाती', pa: 'ਨਾਸ਼ਪਾਤੀ', ta: 'பேரிக்காய்', te: 'పియర్', kn: 'ಪಿಯರ್', bn: 'নাশপাতি', or: 'ନାସପାତି' },
    'Pineapple': { en: 'Pineapple', gu: 'અનાનસ', hi: 'अनानास', mr: 'अननस', pa: 'ਅਨਾਨਾਸ', ta: 'அன்னாசி', te: 'అనాస', kn: 'ಅನಾನಸ್', bn: 'আনারস', or: 'ସପୁରୀ' },
    'Pomegranate': { en: 'Pomegranate', gu: 'દાડમ', hi: 'अनार', mr: 'डाळिंब', pa: 'ਅਨਾਰ', ta: 'மாதுளை', te: 'దానిమ్మ', kn: 'ದಾಳಿಂಬೆ', bn: 'ডালিম', or: 'ଡାଲିମ୍ବ' },
    'Water Melon': { en: 'Water Melon', gu: 'તરબૂચ', hi: 'तरबूज', mr: 'टरबूज', pa: 'ਤਰਬੂਜ', ta: 'தர்பூசணி', te: 'పుచ్చకాయ', kn: 'ಕಲ್ಲಂಗಡಿ', bn: 'তরমুজ', or: 'ତରଭୁଜ' },

    // PART 5 – Oilseeds & Commercial Crops
    'Castor Seed': { en: 'Castor Seed', gu: 'એરંડા', hi: 'अरंडी', mr: 'एरंडी', pa: 'ਅਰੰਡੀ', ta: 'ஆமணக்கு', te: 'ఆముదం', kn: 'ಆಮುದ', bn: 'রেড়ি', or: 'ଏରଣ୍ଡ' },
    'Coconut': { en: 'Coconut', gu: 'નાળિયેર', hi: 'नारियल', mr: 'नारळ', pa: 'ਨਾਰੀਅਲ', ta: 'தேங்காய்', te: 'కొబ్బరి', kn: 'ತೆಂಗಿನಕಾಯಿ', bn: 'নারকেল', or: 'ନଡିଆ' },
    'Coconut Oil': { en: 'Coconut Oil', gu: 'નાળિયેર તેલ', hi: 'नारियल तेल', mr: 'नारळ तेल', pa: 'ਨਾਰੀਅਲ ਤੇਲ', ta: 'தேங்காய் எண்ணெய்', te: 'కొబ్బరి నూనె', kn: 'ತೆಂಗಿನ ಎಣ್ಣೆ', bn: 'নারকেল তেল', or: 'ନଡିଆ ତେଲ' },
    'Coconut Seed': { en: 'Coconut Seed', gu: 'નાળિયેર બી', hi: 'नारियल बीज', mr: 'नारळ बी', pa: 'ਨਾਰੀਅਲ બીજ', ta: 'தேங்காய் விதை', te: 'కొబ్బరి విత్తనం', kn: 'ತೆಂಗಿನ ಬೀಜ', bn: 'নারকেল বীজ', or: 'ନଡିଆ ବିହନ' },
    'Copra': { en: 'Copra', gu: 'સુકું નાળિયેર', hi: 'सुक्खा नारियल', mr: 'सुकं नारळ', pa: 'ਸੁੱਕਾ ਨਾਰੀਅਲ', ta: 'உலர்ந்த தேங்காய்', te: 'ఎండు కొబ్బరి', kn: 'ಒಣ ತೆಂಗಿನಕಾಯಿ', bn: 'শুকনো নারকেল', or: 'ଶୁଖିଲା ନଡିଆ' },
    'Cotton': { en: 'Cotton', gu: 'કપાસ', hi: 'कपास', mr: 'कापूस', pa: 'ਕਪਾਹ', ta: 'பருத்தி', te: 'పత్తి', kn: 'ಹತ್ತಿ', bn: 'তুলা', or: 'କପା' },
    'Ground Nut Seed': { en: 'Ground Nut Seed', gu: 'મગફળી બી', hi: 'मूंगफली बीज', mr: 'भुईमूग बी', pa: 'ਮੂੰਗਫਲੀ ਬੀਜ', ta: 'நிலக்கடலை விதை', te: 'వేరుసెనగ విత్తనం', kn: 'ಕಡಲೆಕಾಯಿ ಬೀಜ', bn: 'চিনাবাদাম বীজ', or: 'ବାଦାମ ବିହନ' },
    'Groundnut': { en: 'Groundnut', gu: 'મગફળી', hi: 'मूंगफली', mr: 'भुईमूग', pa: 'ਮੂੰਗਫਲੀ', ta: 'நிலக்கடலை', te: 'వేరుసెనగ', kn: 'ಕಡಲೆಕಾಯಿ', bn: 'চিনাবাদাম', or: 'ବାଦାମ' },
    'Groundnut(Split)': { en: 'Groundnut(Split)', gu: 'ફૂટેલી મગફળી', hi: 'फूटी मूंगफली', mr: 'फुटाणे', pa: 'ਫੁੱਟੀ ਮੂੰਗਫਲੀ', ta: 'உடைந்த நிலக்கடலை', te: 'పగిలిన వేరుసెనగ', kn: 'ಒಡೆದ ಕಡಲೆಕಾಯಿ', bn: 'ভাঙা চিনাবাদাম', or: 'ଫାଟା ବାଦାମ' },
    'Indian Colza(Sarson)': { en: 'Indian Colza(Sarson)', gu: 'સરસો', hi: 'सरसों', mr: 'मोहरी', pa: 'ਸਰੋਂ', ta: 'கடுகு', te: 'ఆవాలు', kn: 'ಸಾಸಿವೆ', bn: 'সরিষা', or: 'ସୋରିଷ' },
    'Jaggery': { en: 'Jaggery', gu: 'ગોળ', hi: 'गुड़', mr: 'गूळ', pa: 'ਗੁੜ', ta: 'வெல்லம்', te: 'బెల్లం', kn: 'ಬೆಲ್ಲ', bn: 'গুড়', or: 'ଗୁଡ଼' },
    'Jute': { en: 'Jute', gu: 'જૂટ', hi: 'जूट', mr: 'ताग', pa: 'ਜੂਟ', ta: 'சணல்', te: 'జూట్', kn: 'ಜ್ಯೂಟ್', bn: 'পাট', or: 'ପାଟ' },
    'Linseed': { en: 'Linseed', gu: 'અળસી', hi: 'अलसी', mr: 'जवस', pa: 'ਅਲਸੀ', ta: 'ஆளி', te: 'అవిసె', kn: 'ಅಗಸೆ', bn: 'তিসি', or: 'ତିସି' },
    'Mahua': { en: 'Mahua', gu: 'મહુડો', hi: 'महुआ', mr: 'मोहवा', pa: 'ਮਹੂਆ', ta: 'இலுப்பை', te: 'మధూక', kn: 'ಇಳಿಪ್ಪೆ', bn: 'মহুয়া', or: 'ମହୁଆ' },

    'Mustard Oil': { en: 'Mustard Oil', gu: 'રાઈ તેલ', hi: 'सरसों तेल', mr: 'मोहरी तेल', pa: 'ਸਰੋਂ ਦਾ ਤੇਲ', ta: 'கடுகு எண்ணெய்', te: 'ఆవాల నూనె', kn: 'ಸಾಸಿವೆ ಎಣ್ಣೆ', bn: 'সরিষার তেল', or: 'ସୋରିଷ ତେଲ' },
    'Rubber': { en: 'Rubber', gu: 'રબર', hi: 'रबर', mr: 'रबर', pa: 'ਰਬੜ', ta: 'ரப்பர்', te: 'రబ్బరు', kn: 'ರಬ್ಬರ್', bn: 'রাবার', or: 'ରବର' },
    'Safflower': { en: 'Safflower', gu: 'કરડી', hi: 'कुसुम', mr: 'करडई', pa: 'ਕਰਦੀ', ta: 'குங்குமப்பூ', te: 'కుసుమ', kn: 'ಕುಸುಬೆ', bn: 'কুসুম', or: 'କୁସୁମ' },
    'Sesamum(Sesame,Gingelly,Til)': { en: 'Sesamum(Sesame,Gingelly,Til)', gu: 'તલ', hi: 'तिल', mr: 'तीळ', pa: 'ਤਿਲ', ta: 'எள்', te: 'నువ్వులు', kn: 'ಎಳ್ಳು', bn: 'তিল', or: 'ତିଳ' },

    'Sugarcane': { en: 'Sugarcane', gu: 'ઊંસ', hi: 'गन्ना', mr: 'ऊस', pa: 'ਗੰਨਾ', ta: 'கரும்பு', te: 'చెరకు', kn: 'ಕಬ್ಬು', bn: 'আখ', or: 'ଆଖୁ' },
    'Sunflower': { en: 'Sunflower', gu: 'સૂર્યમુખી', hi: 'सूरजमुखी', mr: 'सूर्यफूल', pa: 'ਸੂਰਜਮੁਖੀ', ta: 'சூரியகாந்தி', te: 'సూర్యకాంతి', kn: 'ಸೂರ್ಯಕಾಂತಿ', bn: 'সূর্যমুখী', or: 'ସୂର୍ଯ୍ୟମୁଖୀ' },
    'Tobacco': { en: 'Tobacco', gu: 'તમાકુ', hi: 'तंबाकू', mr: 'तंबाखू', pa: 'ਤੰਬਾਕੂ', ta: 'புகையிலை', te: 'పొగాకు', kn: 'ತಂಬಾಕು', bn: 'তামাক', or: 'ତମାକୁ' },

    // PART 6 – Flowers, Fodder, Misc
    'Bajra(Fodder)': { en: 'Bajra(Fodder)', gu: 'બાજરી ચારો', hi: 'बाजरा चारा', mr: 'बाजरी चारा', pa: 'ਬਾਜਰਾ ਚਾਰਾ', ta: 'கம்பு தீவனம்', te: 'సజ్జ గడ్డి', kn: 'ಸಜ್ಜೆ ಮೇವು', bn: 'বাজরা খড়', or: 'ବାଜରା ଚାର' },
    'Berseem': { en: 'Berseem', gu: 'બરસીમ', hi: 'बरसीम', mr: 'बरसीम', pa: 'ਬਰਸੀਮ', ta: 'பெர்சீம்', te: 'బర్సీమ్', kn: 'ಬರ್ಸೀಮ್', bn: 'বারসিম', or: 'ବରସିମ' },
    'Dry Grass': { en: 'Dry Grass', gu: 'સુકું ઘાસ', hi: 'सूखी घास', mr: 'सुकं गवत', pa: 'ਸੁੱਕੀ ਘਾਹ', ta: 'உலர் புல்', te: 'ఎండు గడ్డి', kn: 'ಒಣ ಹುಲ್ಲು', bn: 'শুকনো ঘাস', or: 'ଶୁଖିଲା ଘାସ' },
    'Green Grass': { en: 'Green Grass', gu: 'લીલું ઘાસ', hi: 'हरी घास', mr: 'हिरवं गवत', pa: 'ਹਰੀ ਘਾਹ', ta: 'பசுந்தீவனம்', te: 'పచ్చ గడ్డి', kn: 'ಹಸಿರು ಹುಲ್ಲು', bn: 'সবুজ ঘাস', or: 'ସବୁଜ ଘାସ' },
    'Lucerne': { en: 'Lucerne', gu: 'લ્યુસર્ન', hi: 'लूसर्न', mr: 'लुसर्न', pa: 'ਲੂਸਰਨ', ta: 'லூசர்ன்', te: 'లూసర్న్', kn: 'ಲೂಸೆರ್ನ್', bn: 'লুসার্ন', or: 'ଲୁସର୍ନ' },
    'Maize(Fodder)': { en: 'Maize(Fodder)', gu: 'મકાઈ ચારો', hi: 'मक्का चारा', mr: 'मका चारा', pa: 'ਮੱਕੀ ਚਾਰਾ', ta: 'மக்காச்சோளம் தீவனம்', te: 'మొక్కజొన్న గడ్డి', kn: 'ಮೆಕ್ಕೆಜೋಳ ಮೇವು', bn: 'ভুট্টা খড়', or: 'ମକା ଚାର' },
    'Napier Grass': { en: 'Napier Grass', gu: 'નેપિયર ઘાસ', hi: 'नेपियर घास', mr: 'नेपियर गवत', pa: 'ਨੇਪਿਅਰ ਘਾਹ', ta: 'நேப்பியர் புல்', te: 'నేపియర్ గడ్డి', kn: 'ನೆಪಿಯರ್ ಹುಲ್ಲು', bn: 'নেপিয়ার ঘাস', or: 'ନେପିଅର ଘାସ' },
    'Paddy(Fodder)': { en: 'Paddy(Fodder)', gu: 'ધાન ચારો', hi: 'धान चारा', mr: 'भात चारा', pa: 'ਧਾਨ ਚਾਰਾ', ta: 'நெல் தீவனம்', te: 'వరి గడ్డి', kn: 'ಭತ್ತ ಮೇವು', bn: 'ধান খড়', or: 'ଧାନ ଚାର' },
    'Rose': { en: 'Rose', gu: 'ગુલાબ', hi: 'गुलाब', mr: 'गुलाब', pa: 'ਗੁਲਾਬ', ta: 'ரோஜா', te: 'గులాబీ', kn: 'ಗುಲಾಬಿ', bn: 'গোলাপ', or: 'ଗୋଲାପ' },
    'Marigold': { en: 'Marigold', gu: 'ગાંડા', hi: 'गेंदा', mr: 'झेंडू', pa: 'ਗੇਂਦਾ', ta: 'சாமந்தி', te: 'బంతి', kn: 'ಚೆಂಡು ಹೂ', bn: 'গাঁদা', or: 'ଗେଣ୍ଡା' },
    'Jasmine': { en: 'Jasmine', gu: 'મોગરો', hi: 'चमेली', mr: 'मोगरा', pa: 'ਚਮੇਲੀ', ta: 'மல்லிகை', te: 'మల్లె', kn: 'ಮಲ್ಲಿಗೆ', bn: 'জুঁই', or: 'ମଲ୍ଲି' },
    'Lotus': { en: 'Lotus', gu: 'કમળ', hi: 'कमल', mr: 'कमळ', pa: 'ਕਮਲ', ta: 'தாமரை', te: 'తామర', kn: 'ಕಮಲ', bn: 'পদ্ম', or: 'ପଦ୍ମ' },
    'Tuberose': { en: 'Tuberose', gu: 'રજનીગંધા', hi: 'रजनीगंधा', mr: 'निशिगंध', pa: 'ਰਜਨੀਗੰਧਾ', ta: 'ரஜினிகந்தா', te: 'రజనిగంధ', kn: 'ರಜನೀಗಂಧ', bn: 'রজনীগন্ধা', or: 'ରଜନୀଗନ୍ଧ' },
    'Cowpea(Fodder)': { en: 'Cowpea(Fodder)', gu: 'ચોળી ચારો', hi: 'लोबिया चारा', mr: 'चवळी चारा', pa: 'ਲੋਬੀਆ ਚਾਰਾ', ta: 'தட்டைப்பயறு தீவனம்', te: 'అలసంద గడ్డి', kn: 'ಅಲಸಂದೆ ಮೇವು', bn: 'বরবটি খড়', or: 'ଚଉଳି ଚାର' },
    'Wheat(Fodder)': { en: 'Wheat(Fodder)', gu: 'ઘઉં ચારો', hi: 'गेहूं चारा', mr: 'गहू चारा', pa: 'ਕਣਕ ਚਾਰਾ', ta: 'கோதுமை தீவனம்', te: 'గోధుమ గడ్డి', kn: 'ಗೋಧಿ ಮೇವು', bn: 'গম খড়', or: 'ଗହମ ଚାର' },

}

export function translateCropName(cropName: string, lang: string): string {
    const translation = cropTranslations[cropName]?.[lang]
    if (translation && lang !== 'en' && translation !== cropName) {
        return `${translation} (${cropName})`
    }
    return translation || cropName
}

// UI Translations
export const translations: { [key: string]: { [lang: string]: string } } = {
    welcomeTitle: {
        en: 'Welcome to AgriForge Market Yard',
        gu: 'એગ્રીફોર્જ માર્કેટ યાર્ડમાં આપનું સ્વાગત છે',
        hi: 'एग्रीफोर्ज मार्केट यार्ड में आपका स्वागत है',
        mr: 'एग्रीफोर्ज बाजार यार्ड मध्ये आपले स्वागत आहे',
        pa: 'ਐਗਰੀਫੋਰਜ ਮਾਰਕੀਟ ਯਾਰਡ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ',
        ta: 'அக்ரிஃபோர்ஜ் சந்தை முற்றத்திற்கு வரவேற்கிறோம்',
        te: 'అగ్రిఫోర్జ్ మార్కెట్ యార్డ్‌కు స్వాగతం',
        kn: 'ಅಗ್ರಿಫೋರ್ಜ್ ಮಾರುಕಟ್ಟೆ ಅಂಗಳಕ್ಕೆ ಸ್ವಾಗತ',
        bn: 'এগ্রিফোর্জ মার্কেট ইয়ার্ডে স্বাগতম',
    },
    welcomeDesc: {
        en: 'Get real-time prices for your crops. Select your location above to see accurate market rates from your local APMC.',
        gu: 'તમારા પાક માટે વાસ્તવિક સમયના ભાવ મેળવો. તમારા સ્થાનિક APMC થી સચોટ બજાર દરો જોવા માટે ઉપર તમારું સ્થાન પસંદ કરો.',
        hi: 'अपनी फसलों के लिए वास्तविक समय के मूल्य प्राप्त करें। अपने स्थानीय APMC से सटीक बाजार दरें देखने के लिए ऊपर अपना स्थान चुनें।',
        mr: 'आपल्या पिकांसाठी रिअल-टाइम भाव मिळवा. आपल्या स्थानिक APMC कडून अचूक बाजार दर पाहण्यासाठी वर आपले स्थान निवडा.',
        pa: 'ਆਪਣੀਆਂ ਫਸਲਾਂ ਲਈ ਅਸਲ ਸਮੇਂ ਦੀਆਂ ਕੀਮਤਾਂ ਪ੍ਰਾਪਤ ਕਰੋ. ਆਪਣੇ ਸਥਾਨਕ APMC ਤੋਂ ਸਹੀ ਮਾਰਕੀਟ ਦਰਾਂ ਦੇਖਣ ਲਈ ਉੱਪਰ ਆਪਣਾ ਸਥਾਨ ਚੁਣੋ.',
        ta: 'உங்கள் பயிர்களுக்கான நிகழ்நேர விலைகளைப் பெறுங்கள். உங்கள் உள்ளூர் APMC இலிருந்து துல்லியமான சந்தை விகிதங்களைக் காண மேலே உள்ள உங்கள் இருப்பிடத்தைத் தேர்ந்தெடுக்கவும்.',
        te: 'మీ పంటలకు నిజ సమయంలో ధరలను పొందండి. మీ స్థానిక APMC నుండి ఖచ్చితమైన మార్కెట్ రేట్లను చూడటానికి పైన మీ స్థానాన్ని ఎంచుకోండి.',
        kn: 'ನಿಮ್ಮ ಬೆಳೆಗಳಿಗೆ ನೈಜ ಸಮಯದ ಬೆಲೆಗಳನ್ನು ಪಡೆಯಿರಿ. ನಿಮ್ಮ ಸ್ಥಳೀಯ APMC ಯಿಂದ ನಿಖರವಾದ ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ನೋಡಲು ಮೇಲೆ ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
        bn: 'আপনার ফসলের জন্য রিয়েল-টাইম মূল্য পান। আপনার স্থানীয় APMC থেকে সঠিক বাজার মূল্য দেখতে উপরে আপনার অবস্থান নির্বাচন করুন।',
    },
    liveData: {
        en: 'Live Market Data Available',
        gu: 'જીવંત બજાર માહિતી ઉપલબ્ધ',
        hi: 'लाइव बाजार डेटा उपलब्ध',
        mr: 'थेट बाजार डेटा उपलब्ध',
        pa: 'ਲਾਈਵ ਮਾਰਕੀਟ ਡੇਟਾ ਉਪਲਬਧ',
        ta: 'நேரடி சந்தை தரவு கிடைக்கிறது',
        te: 'లైవ్ మార్కెట్ డేటా అందుబాటులో ఉంది',
        kn: 'ಲೈವ್ ಮಾರುಕಟ್ಟೆ ಡೇಟಾ ಲಭ್ಯವಿದೆ',
        bn: 'লাইভ মার্কেট ডেটা উপলব্ধ',
    },
    selectAnotherCrop: {
        en: 'Select another crop',
        gu: 'બીજો પાક પસંદ કરો',
        hi: 'दूसरी फसल चुनें',
        mr: 'दुसरे पीक निवडा',
        pa: 'ਇੱਕ ਹੋਰ ਫਸਲ ਚੁਣੋ',
        ta: 'மற்றொரு பயிரைத் தேர்ந்தெடுக்கவும்',
        te: 'మరొక పంటను ఎంచుకోండి',
        kn: 'ಮತ್ತೊಂದು ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        bn: 'অন্য ফসল নির্বাচন করুন',
        or: 'ଅନ୍ୟ ଫସଲ ଚୟନ କରନ୍ତୁ', // Added Odia
    },
    today: {
        en: "Today's",
        gu: 'આજની',
        hi: 'आज की',
        mr: 'आजची',
        pa: 'ਅੱਜ ਦੀ',
        ta: 'இன்றைய',
        te: 'నేటి',
        kn: 'ಇಂದಿನ',
        bn: 'আজকের',
        or: 'ଆଜିର',
    },
    noDataAvailable: {
        en: 'Data not available from government source',
        gu: 'સરકારી સ્ત્રોતમાંથી માહિતી ઉપલબ્ધ નથી',
        hi: 'सरकारी स्रोत से डेटा उपलब्ध नहीं है',
        mr: 'सरकारी स्रोताकडून डेटा उपलब्ध नाही',
        pa: 'ਸਰਕਾਰੀ ਸਰੋਤ ਤੋਂ ਡਾਟਾ ਉਪਲਬਧ ਨਹੀਂ ਹੈ',
        ta: 'அரசு மூலங்களிலிருந்து தரவு கிடைக்கவில்லை',
        te: 'ప్రభుత్వ మూలం నుండి డేటా అందుబాటులో లేదు',
        kn: 'ಸರ್ಕಾರಿ ಮೂಲದಿಂದ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ',
        bn: 'সরকারি উৎস থেকে তথ্য পাওয়া যাচ্ছে না',
        or: 'ସରକାରୀ ଉତ୍ସରୁ ତଥ୍ୟ ଉପଲବ୍ଧ ନାହିଁ',
    },
    topMarketPrices: {
        en: 'Top Market Prices',
        gu: 'મુખ્ય બજાર ભાવ',
        hi: 'प्रमुख बाजार भाव',
        mr: 'मुख्य बाजार भाव',
        pa: 'ਪ੍ਰਮੁੱਖ ਮਾਰਕੀਟ ਕੀਮਤਾਂ',
        ta: 'சிறந்த சந்தை விலைகள்',
        te: 'ముఖ్యమైన మార్కెట్ ధరలు',
        kn: 'ಪ್ರಮುಖ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
        bn: 'শীর্ষ বাজার দর',
        or: 'ମୁଖ୍ୟ ବଜାର ଦର',
    },
    step1Title: {
        en: 'Select Location',
        gu: 'સ્થાન પસંદ કરો',
        hi: 'स्थान चुनें',
        mr: 'स्थान निवडा',
        pa: 'ਸਥਾਨ ਚੁਣੋ',
        ta: 'இடத்தைத் தேர்வுசெய்க',
        te: 'ప్రాంతాన్ని ఎంచుకోండి',
        kn: 'ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        bn: 'অবস্থান নির্বাচন করুন',
    },
    step1Desc: {
        en: 'Choose your State & District',
        gu: 'તમારું રાજ્ય અને જિલ્લો પસંદ કરો',
        hi: 'अपना राज्य और जिला चुनें',
        mr: 'आपले राज्य आणि जिल्हा निवडा',
        pa: 'ਆਪਣਾ ਰਾਜ ਅਤੇ ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',
        ta: 'உங்கள் மாநிலம் மற்றும் மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
        te: 'మీ రాష్ట్రం మరియు జిల్లాను ఎంచుకోండి',
        kn: 'ನಿಮ್ಮ ರಾಜ್ಯ ಮತ್ತು ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        bn: 'আপনার রাজ্য এবং জেলা নির্বাচন করুন',
    },
    step2Title: {
        en: 'Select Market',
        gu: 'માર્કેટ પસંદ કરો',
        hi: 'मंडी चुनें',
        mr: 'बाजार निवडा',
        pa: 'ਮੰਡੀ ਚੁਣੋ',
        ta: 'சந்தையைத் தேர்ந்தெடுக்கவும்',
        te: 'మార్కెట్‌ను ఎంచుకోండి',
        kn: 'ಮಾರುಕಟ್ಟೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        bn: 'বাজার নির্বাচন করুন',
    },
    step2Desc: {
        en: 'Find your local APMC',
        gu: 'તમારી સ્થાનિક APMC શોધો',
        hi: 'अपनी स्थानीय मंडी खोजें',
        mr: 'आपली स्थानिक APMC शोधा',
        pa: 'ਆਪਣੀ ਸਥਾਨਕ ਮੰਡੀ ਲੱਭੋ',
        ta: 'உங்கள் உள்ளூர் APMC ஐக் கண்டறியவும்',
        te: 'మీ స్థానిక మార్కెట్‌ను కనుగొనండి',
        kn: 'ನಿಮ್ಮ ಸ್ಥಳೀಯ APMC ಅನ್ನು ಹುಡುಕಿ',
        bn: 'আপনার স্থানীয় মান্ডি খুঁজুন',
    },
    step3Title: {
        en: 'View Prices',
        gu: 'ભાવ જુઓ',
        hi: 'भाव देखें',
        mr: 'भाव पहा',
        pa: 'ਭਾਅ ਦੇਖੋ',
        ta: 'விலைகளைப் பாருங்கள்',
        te: 'ధరలను చూడండి',
        kn: 'ಬೆಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
        bn: 'দাম দেখুন',
    },
    step3Desc: {
        en: 'Get real-time commodity rates',
        gu: 'વાસ્તવિક સમયના કોમોડિટી દરો મેળવો',
        hi: 'वास्तविक समय कमोडिटी रेट प्राप्त करें',
        mr: 'वास्तविक वेळेचे कमोडिटी दर मिळवा',
        pa: 'ਅਸਲ ਸਮੇਂ ਦੇ ਵਸਤੂ ਰੇਟ ਪ੍ਰਾਪਤ ਕਰੋ',
        ta: 'நிகழ்நேர பொருட்கள் விகிதங்களைப் பெறுங்கள்',
        te: 'నిజ సమయ సరుకుల ధరలను పొందండి',
        kn: 'ನೈಜ-ಸಮಯದ ಸರಕು ದರಗಳನ್ನು ಪಡೆಯಿರಿ',
        bn: 'রিয়েল-টাইম পণ্য হার পান',
    },
    pageTitle: {
        en: 'Market Yard Price Finder',
        gu: 'માર્કેટ યાર્ડ ભાવ શોધક',
        hi: 'मंडी मूल्य खोजक',
        mr: 'बाजार यार्ड किंमत शोधक',
        pa: 'ਮੰਡੀ ਕੀਮਤ ਖੋਜੀ',
        ta: 'சந்தை விலை கண்டுபிடிப்பாளர்',
        te: 'మార్కెట్ ధర కనుగొనేవారు',
        kn: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಶೋಧಕ',
        bn: 'বাজার মূল্য অনুসন্ধানকারী',
    },
    pageSubtitle: {
        en: 'Find Real-Time Agricultural Commodity Prices',
        gu: 'વાસ્તવિક સમયના કૃષિ ઉત્પાદનોના ભાવ શોધો',
        hi: 'वास्तविक समय कृषि उत्पाद मूल्य खोजें',
        mr: 'वास्तविक वेळ शेती उत्पाद किंमती शोधा',
        pa: 'ਅਸਲ ਸਮੇਂ ਦੀਆਂ ਖੇਤੀ ਉਤਪਾਦ ਕੀਮਤਾਂ ਲੱਭੋ',
        ta: 'நிகழ்நேர விவசாய பொருட்கள் விலைகளைக் கண்டறியவும்',
        te: 'నిజ సమయ వ్యవసాయ ఉత్పత్తుల ధరలను కనుగొనండి',
        kn: 'ನೈಜ-ಸಮಯದ ಕೃಷಿ ಸರಕುಗಳ ಬೆಲೆಗಳನ್ನು ಹುಡುಕಿ',
        bn: 'রিয়েল-টাইম কৃষি পণ্য মূল্য খুঁজুন',
    },
    selectLanguage: {
        en: 'Select Language',
        gu: 'ભાષા પસંદ કરો',
        hi: 'भाषा चुनें',
        mr: 'भाषा निवडा',
        pa: 'ਭਾਸ਼ਾ ਚੁਣੋ',
        ta: 'மொழியைத் தேர்ந்தெடுக்கவும்',
        te: 'భాషను ఎంచుకోండి',
        kn: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        bn: 'ভাষা নির্বাচন করুন',
    },
    selectState: {
        en: 'Select State',
        gu: 'રાજ્ય પસંદ કરો',
        hi: 'राज्य चुनें',
        mr: 'राज्य निवडा',
        pa: 'ਰਾਜ ਚੁਣੋ',
        ta: 'மாநிலத்தைத் தேர்ந்தெடுக்கவும்',
        te: 'రాష్ట్రాన్ని ఎంచుకోండి',
        kn: 'ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        bn: 'রাজ্য নির্বাচন করুন',
    },
    selectDistrict: {
        en: 'Select District',
        gu: 'જિલ્લો પસંદ કરો',
        hi: 'जिला चुनें',
        mr: 'जिल्हा निवडा',
        pa: 'ਜ਼ਿਲ੍ਹਾ ਚੁਣੋ',
        ta: 'மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
        te: 'జిల్లాను ఎంచుకోండి',
        kn: 'ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        bn: 'জেলা নির্বাচন করুন',
    },
    selectMarket: {
        en: 'Select Market Yard',
        gu: 'માર્કેટ યાર્ડ પસંદ કરો',
        hi: 'मंडी चुनें',
        mr: 'बाजार यार्ड निवडा',
        pa: 'ਮੰਡੀ ਚੁਣੋ',
        ta: 'சந்தையைத் தேர்ந்தெடுக்கவும்',
        te: 'మార్కెట్ యార్డ్ ఎంచుకోండి',
        kn: 'ಮಾರುಕಟ್ಟೆ ಯಾರ್ಡ್ ಆಯ್ಕೆಮಾಡಿ',
        bn: 'বাজার ইয়ার্ড নির্বাচন করুন',
    },
    selectCrop: {
        en: 'Select Crop',
        gu: 'પાક પસંદ કરો',
        hi: 'फसल चुनें',
        mr: 'पीक निवडा',
        pa: 'ਫਸਲ ਚੁਣੋ',
        ta: 'பயிரைத் தேர்ந்தெடுக்கவும்',
        te: 'పంటను ఎంచుకోండి',
        kn: 'ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ',
        bn: 'ফসল নির্বাচন করুন',
        or: 'ଫସଲ ଚୟନ କରନ୍ତୁ',
    },
    searchPlaceholder: {
        en: 'Search...',
        gu: 'શોધો...',
        hi: 'खोजें...',
        mr: 'शोधा...',
        pa: 'ਖੋਜੋ...',
        ta: 'தேடு...',
        te: 'వెతకండి...',
        kn: 'ಹುಡುಕಿ...',
        bn: 'অনুসন্ধান...',
    },
    loading: {
        en: 'Loading...',
        gu: 'લોડ કરી રહ્યું છે...',
        hi: 'लोड हो रहा है...',
        mr: 'लोड होत आहे...',
        pa: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
        ta: 'ஏற்றுகிறது...',
        te: 'లోడ్ అవుతోంది...',
        kn: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
        bn: 'লোড হচ্ছে...',
    },
    priceResults: {
        en: 'Price Information',
        gu: 'ભાવ માહિતી',
        hi: 'मूल्य जानकारी',
        mr: 'किंमत माहिती',
        pa: 'ਕੀਮਤ ਜਾਣਕਾਰੀ',
        ta: 'விலை தகவல்',
        te: 'ధర సమాచారం',
        kn: 'ಬೆಲೆ ಮಾಹಿತಿ',
        bn: 'মূল্য তথ্য',
    },
    minimumPrice: {
        en: 'Minimum Price',
        gu: 'લઘુત્તમ ભાવ',
        hi: 'न्यूनतम मूल्य',
        mr: 'किमान किंमत',
        pa: 'ਘੱਟੋ-ਘੱਟ ਕੀਮਤ',
        ta: 'குறைந்தபட்ச விலை',
        te: 'కనిష్ట ధర',
        kn: 'ಕನಿಷ್ಠ ಬೆಲೆ',
        bn: 'সর্বনিম্ন মূল্য',
    },
    maximumPrice: {
        en: 'Maximum Price',
        gu: 'મહત્તમ ભાવ',
        hi: 'अधिकतम मूल्य',
        mr: 'कमाल किंमत',
        pa: 'ਵੱਧ ਤੋਂ ਵੱਧ ਕੀਮਤ',
        ta: 'அதிகபட்ச விலை',
        te: 'గరిష్ట ధర',
        kn: 'ಗರಿಷ್ಠ ಬೆಲೆ',
        bn: 'সর্বোচ্চ মূল্য',
    },
    averagePrice: {
        en: 'Modal Price',
        gu: 'સરેરાશ ભાવ',
        hi: 'औसत मूल्य',
        mr: 'सरासरी किंमत',
        pa: 'ਔਸਤ ਕੀਮਤ',
        ta: 'சராசரி விலை',
        te: 'సగటు ధర',
        kn: 'ಸರಾಸರಿ ಬೆಲೆ',
        bn: 'গড় মূল্য',
    },
    per20kg: {
        en: 'per 20 kg',
        gu: 'પ્રતિ 20 કિલો',
        hi: 'प्रति 20 किलो',
        mr: 'प्रति 20 किलो',
        pa: 'ਪ੍ਰਤੀ 20 ਕਿਲੋ',
        ta: '20 கிலோவுக்கு',
        te: '20 కిలోలకు',
        kn: '20 ಕೆಜಿಗೆ',
        bn: 'প্রতি 20 কেজি',
    },
    priceDate: {
        en: 'Price Date',
        gu: 'ભાવ તારીખ',
        hi: 'मूल्य तिथि',
        mr: 'किंमत तारीख',
        pa: 'ਕੀਮਤ ਤਾਰੀਖ',
        ta: 'விலை தேதி',
        te: 'ధర తేదీ',
        kn: 'ಬೆಲೆ ದಿನಾಂಕ',
        bn: 'মূল্য তারিখ',
    },
    variety: {
        en: 'Variety',
        gu: 'પ્રકાર',
        hi: 'किस्म',
        mr: 'प्रकार',
        pa: 'ਕਿਸਮ',
        ta: 'வகை',
        te: 'రకం',
        kn: 'ವಿಧ',
        bn: 'জাত',
    },
    noPriceAvailable: {
        en: 'Price data not available for this selection',
        gu: 'આ પસંદગી માટે ભાવ ડેટા ઉપલબ્ધ નથી',
        hi: 'इस चयन के लिए मूल्य डेटा उपलब्ध नहीं है',
        mr: 'या निवडीसाठी किंमत डेटा उपलब्ध नाही',
        pa: 'ਇਸ ਚੋਣ ਲਈ ਕੀਮਤ ਡੇਟਾ ਉਪਲਬਧ ਨਹੀਂ ਹੈ',
        ta: 'இந்த தேர்வுக்கு விலை தரவு கிடைக்கவில்லை',
        te: 'ఈ ఎంపిక కోసం ధర డేటా అందుబాటులో లేదు',
        kn: 'ಈ ಆಯ್ಕೆಗಾಗಿ ಬೆಲೆ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ',
        bn: 'এই নির্বাচনের জন্য মূল্য ডেটা উপলব্ধ নেই',
    },
    nearbyMarkets: {
        en: 'Nearby Market Prices',
        gu: 'નજીકના બજારના ભાવ',
        hi: 'निकटवर्ती बाजार मूल्य',
        mr: 'जवळच्या बाजारातील किंमती',
        pa: 'ਨੇੜਲੇ ਬਾਜ਼ਾਰ ਕੀਮਤਾਂ',
        ta: 'அருகிலுள்ள சந்தை விலைகள்',
        te: 'సమీప మార్కెట్ ధరలు',
        kn: 'ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
        bn: 'কাছাকাছি বাজার মূল্য',
    },
    tryAgain: {
        en: 'Try Another Search',
        gu: 'બીજી શોધ કરો',
        hi: 'फिर से खोजें',
        mr: 'पुन्हा शोधा',
        pa: 'ਦੁਬਾਰਾ ਖੋਜੋ',
        ta: 'மீண்டும் தேடவும்',
        te: 'మళ్లీ శోధించండి',
        kn: 'ಮತ್ತೆ ಹುಡುಕಿ',
        bn: 'আবার অনুসন্ধান করুন',
    },
    step: {
        en: 'Step',
        gu: 'પગલું',
        hi: 'चरण',
        mr: 'पायरी',
        pa: 'ਕਦਮ',
        ta: 'படி',
        te: 'దశ',
        kn: 'ಹಂತ',
        bn: 'ধাপ',
    },
    of: {
        en: 'of',
        gu: 'માંથી',
        hi: 'में से',
        mr: 'पैकी',
        pa: 'ਵਿੱਚੋਂ',
        ta: 'இல்',
        te: 'లో',
        kn: 'ರಲ್ಲಿ',
        bn: 'এর',
    },
    dataSource: {
        en: 'Data source: Government of India Open Data Portal (data.gov.in)',
        gu: 'ડેટા સ્રોત: ભારત સરકારનું ઓપન ડેટા પોર્ટલ (data.gov.in)',
        hi: 'डेटा स्रोत: भारत सरकार का ओपन डेटा पोर्टल (data.gov.in)',
        mr: 'डेटा स्रोत: भारत सरकारचे ओपन डेटा पोर्टल (data.gov.in)',
        pa: 'ਡੇਟਾ ਸਰੋਤ: ਭਾਰਤ ਸਰਕਾਰ ਦਾ ਓਪਨ ਡੇਟਾ ਪੋਰਟਲ (data.gov.in)',
        ta: 'தரவு மூலம்: இந்திய அரசின் திறந்த தரவு போர்ட்டல் (data.gov.in)',
        te: 'డేటా మూలం: భారత ప్రభుత్వ ఓపెన్ డేటా పోర్టల్ (data.gov.in)',
        kn: 'ಡೇಟಾ ಮೂಲ: ಭಾರತ ಸರ್ಕಾರದ ಓಪನ್ ಡೇಟಾ ಪೋರ್ಟಲ್ (data.gov.in)',
        bn: 'ডেটা উৎস: ভারত সরকারের ওপেন ডেটা পোর্টাল (data.gov.in)',
    },
    back: {
        en: 'Back',
        gu: 'પાછળ',
        hi: 'वापस',
        mr: 'मागे',
        pa: 'ਵਾਪਸ',
        ta: 'பின்',
        te: 'వెనుకకు',
        kn: 'ಹಿಂದೆ',
        bn: 'পিছনে',
    },
    source: {
        en: 'Source',
        gu: 'સ્રોત',
        hi: 'स्रोत',
        mr: 'स्रोत',
        pa: 'ਸਰੋਤ',
        ta: 'மூலம்',
        te: 'మూలం',
        kn: 'ಮೂಲ',
        bn: 'উৎস',
    },
    quintal: {
        en: 'Quintal',
        gu: 'ક્વિન્ટલ',
        hi: 'क्विंटल',
        mr: 'क्विंटल',
        pa: 'ਕਵਿੰਟਲ',
        ta: 'குவிண்டால்',
        te: 'క్వింటాల్',
        kn: 'ಕ್ವಿಂಟಾಲ್',
        bn: 'কুইন্টাল',
    },
}

export function t(key: string, lang: string = 'en'): string {
    return translations[key]?.[lang] || translations[key]?.['en'] || key
}
