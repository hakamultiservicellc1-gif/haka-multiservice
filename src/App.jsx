""" + """import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Truck, Clock, ShieldCheck, Package, DollarSign, Instagram, Facebook, Send, MessageCircle, ArrowRight, CheckCircle2, Star, Globe, Sun, Moon, PlayCircle, CalendarClock, Search, PhoneCall, Image as ImageIcon, Megaphone } from "lucide-react";

/**
 * HAKA Multiservice LLC – Landing PRO (con integraciones listas)
 * - Formularios conectables a Google Sheets o email (fallback automático)
 * - Tracking demo con timeline
 * - Píxeles de Meta y TikTok opcionales
 */

const LOGO_URL = "logo.png"; // ⚠️ coloca tu logo en /public/logo.png
const WHATS_LINK = "https://wa.me/19546760185";
const PHONE_DISPLAY = "+1 (954) 676-0185";

// === CONFIGURACIÓN RÁPIDA ===
// Si quieres que los formularios guarden en Google Sheets, pega aquí tu URL de Apps Script (modo web)
const CONFIG = {
  SHEET_URL: "", // ej: https://script.google.com/macros/s/AKfyc.../exec  (si está vacío, se usa email + WhatsApp)
  EMAIL_TO: "hakamultiservicellc1@gmail.com",
  META_PIXEL_ID: "",   // ej: 123456789012345
  TIKTOK_PIXEL_ID: "", // ej: C1ABCDE1234567890
};

// === Config en tiempo de ejecución (sin recompilar) ===
let RUNTIME_CONFIG = { ...CONFIG };
function getConfig(){
  try{
    const stored = JSON.parse(localStorage.getItem('haka_cfg')||'{}');
    return { ...RUNTIME_CONFIG, ...stored, ...(window.__HAKA_CONFIG||{}) };
  }catch{
    return { ...RUNTIME_CONFIG, ...(window.__HAKA_CONFIG||{}) };
  }
}
function setRuntimeConfig(newCfg){
  RUNTIME_CONFIG = { ...getConfig(), ...newCfg };
  localStorage.setItem('haka_cfg', JSON.stringify(RUNTIME_CONFIG));
  alert('✅ Configuración guardada. Recargando...');
  window.location.reload();
}

export default function HakaMultiservicePro() {
  const [dark, setDark] = React.useState(false);
  const [lang, setLang] = React.useState("es");
  React.useEffect(()=>{
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  },[dark]);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <MetaPixel id={getConfig().META_PIXEL_ID} />
      <TikTokPixel id={getConfig().TIKTOK_PIXEL_ID} />
      <TopBar t={t} />
      <Navbar t={t} dark={dark} setDark={setDark} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Badges t={t} />
      <KPIs t={t} />
      <Services t={t} />
      <Pricing t={t} />
      <Differentials t={t} />
      <Tracking t={t} />
      <Promos t={t} />
      <Gallery t={t} />
      <Testimonials t={t} />
      <FAQ t={t} />
      <Newsletter t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <WhatsAppFAB t={t} />
      <CallNowFAB />
      <SchemaOrg />
      <SetupPanel />
    </div>
  );
}

function TopBar({t}){
  return (
    <div className="bg-neutral-900 text-neutral-100 text-sm dark:bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> {PHONE_DISPLAY}</span>
          <span className="hidden md:inline-flex items-center gap-2"><Mail className="h-4 w-4"/> {getConfig().EMAIL_TO}</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contacto" className="underline underline-offset-4">{t.contactUs}</a>
          <a href={WHATS_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4"/> WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

function Navbar({t, dark, setDark, lang, setLang}){
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b dark:bg-neutral-950/70 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="HAKA Multiservice Logo" className="h-10 w-auto object-contain"/>
          <div>
            <p className="text-lg font-semibold tracking-tight">HAKA Multiservice LLC</p>
            <p className="text-xs text-neutral-500 -mt-0.5 dark:text-neutral-400">Envíos a toda Cuba</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servicios" className="hover:text-blue-700 dark:hover:text-blue-400">{t.services}</a>
          <a href="#tarifas" className="hover:text-blue-700 dark:hover:text-blue-400">{t.pricing}</a>
          <a href="#proceso" className="hover:text-blue-700 dark:hover:text-blue-400">{t.howItWorks}</a>
          <a href="#tracking" className="hover:text-blue-700 dark:hover:text-blue-400">{t.tracking}</a>
          <a href="#faq" className="hover:text-blue-700 dark:hover:text-blue-400">FAQ</a>
          <a href="#contacto" className="px-3 py-1.5 rounded-xl bg-blue-800 text-white hover:bg-blue-900 shadow dark:bg-blue-700 dark:hover:bg-blue-600">{t.quote}</a>
          <div className="flex items-center gap-2">
            <button aria-label={t.toggleDark} onClick={()=>setDark(v=>!v)} className="rounded-lg p-2 ring-1 ring-neutral-200 hover:bg-neutral-100 dark:ring-neutral-800 dark:hover:bg-neutral-900">
              {dark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
            </button>
            <button aria-label="language" onClick={()=>setLang(lang==="es"?"en":"es")} className="rounded-lg p-2 ring-1 ring-neutral-200 hover:bg-neutral-100 dark:ring-neutral-800 dark:hover:bg-neutral-900"><Globe className="h-4 w-4"/></button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero({t}){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-blue-950 to-neutral-900 dark:from-black dark:via-neutral-950 dark:to-black"/>
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/10 blur-3xl"/>
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {t.heroTitle}
              <span className="block text-yellow-400">{t.heroSub}</span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-xl">{t.heroDesc}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-yellow-400 text-neutral-900 font-semibold shadow hover:shadow-md">
                {t.quote} <ArrowRight className="h-5 w-5"/>
              </a>
              <a href="#tarifas" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15">
                {t.viewRates}
              </a>
              <a href="#video" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15">
                <PlayCircle className="h-5 w-5"/>{t.watchVideo}
              </a>
            </div>
            <p className="mt-3 text-xs text-neutral-400">{t.heroNote}</p>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}}>
            <LeadForm t={t} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LeadForm({t}){
  const [form, setForm] = React.useState({name:"", phone:"", origin:"", dest:"", weight:"", dims:"", type:""});
  const onChange = e=> setForm({...form, [e.target.name]: e.target.value});

  async function onSubmit(e){
    e.preventDefault();
    const payload = { 
      form: "Lead", 
      ...form, 
      phone: form.phone || "",
      createdAt: new Date().toISOString() 
    };
    await handleSubmit(payload, t);
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl grid gap-4 dark:bg-neutral-900 dark:border dark:border-neutral-800">
      <div className="flex items-center gap-3">
        <Truck className="h-6 w-6 text-blue-800 dark:text-blue-400"/>
        <p className="font-semibold">{t.quickQuote}</p>
      </div>
      <form className="grid gap-3" onSubmit={onSubmit}>
        <div className="grid md:grid-cols-2 gap-3">
          <input name="name" value={form.name} onChange={onChange} className="w-full border rounded-xl px-3 py-2 dark:bg-neutral-950 dark:border-neutral-800" placeholder={t.name} required/>
          <input name="phone" value={form.phone} onChange={onChange} className="w-full border rounded-xl px-3 py-2 dark:bg-neutral-950 dark:border-neutral-800" placeholder={t.phone} required/>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <input name="origin" value={form.origin} onChange={onChange} className="w-full border rounded-xl px-3 py-2 dark:bg-neutral-950 dark:border-neutral-800" placeholder={t.origin}/>
          <input name="dest" value={form.dest} onChange={onChange} className="w-full border rounded-xl px-3 py-2 dark:bg-neutral-950 dark:border-neutral-800" placeholder={t.destination}/>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <input name="weight" value={form.weight} onChange={onChange} className="w-full border rounded-xl px-3 py-2 dark:bg-neutral-950 dark:border-neutral-800" placeholder={t.weight}/>
          <input name="dims" value={form.dims} onChange={onChange} className="w-full border rounded-xl px-3 py-2 dark:bg-neutral-950 dark:border-neutral-800" placeholder={t.dimensions}/>
          <select name="type" value={form.type} onChange={onChange} className="w-full border rounded-xl px-3 py-2 dark:bg-neutral-950 dark:border-neutral-800">
            <option value="">{t.type}</option>
            <option>{t.pp}</option>
            <option>{t.air}</option>
            <option>{t.sea}</option>
          </select>
        </div>
        <button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-800 text-white hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-600">
          {t.sendReq} <Send className="h-4 w-4"/>
        </button>
      </form>
    </div>
  );
}
