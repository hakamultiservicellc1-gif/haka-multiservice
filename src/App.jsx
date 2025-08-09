import React from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Truck, DollarSign, Send, MessageCircle, PhoneCall,
  Instagram, Facebook, PlayCircle
} from "lucide-react";

/** ====== Datos de contacto (edítalos si cambian) ====== */
const BUSINESS = "HAKA Multiservice LLC";
const EMAIL = "hakamultiservicellc1@gmail.com";
const PHONE_E164 = "+19546760185";
const PHONE_DISPLAY = "+1 (954) 676-0185";
const ADDRESS = "10990 NW 138th Street, Hialeah Gardens, FL 33018";
const WHATS = `https://wa.me/${PHONE_E164.replace("+","")}`;
const TIKTOK = "https://www.tiktok.com/@hakamultiservice?_t=ZP-8yk5kMPa3gs&_r=1";
const IG = "https://www.instagram.com/haka_multiservice_llc?igsh=MTB4aDdoZnR5bzdiMQ%3D%3D&utm_source=qr";
const FB = "https://www.facebook.com/share/17AynECQ4f/?mibextid=wwXIfr";

const styles = {
  wrap: { fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", color:"#0a0a0a", lineHeight:1.45 },
  container:{ maxWidth:980, margin:"0 auto", padding:"0 16px" },
  btn:{ padding:"12px 18px", borderRadius:12, border:"1px solid #1f2937", background:"#111827", color:"#fff", cursor:"pointer" },
  btnGhost:{ padding:"12px 18px", borderRadius:12, border:"1px solid #d1d5db", background:"#fff", color:"#111827", cursor:"pointer" },
  card:{ border:"1px solid #e5e7eb", borderRadius:16, padding:20, background:"#fff" },
  grid3:{ display:"grid", gap:16, gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))" },
  input:{ width:"100%", padding:"10px 12px", borderRadius:10, border:"1px solid #d1d5db" },
  label:{ fontSize:13, color:"#6b7280", marginBottom:6, display:"block" },
  footer:{ background:"#0b0b0b", color:"#cbd5e1", padding:"36px 0", marginTop:40 }
};

export default function App(){
  return (
    <div style={styles.wrap}>
      {/* TOP BAR */}
      <div style={{background:"#111827", color:"#fff"}}>
        <div style={{...styles.container, display:"flex", justifyContent:"space-between", padding:"8px 16px", fontSize:14}}>
          <span style={{display:"inline-flex", alignItems:"center", gap:8}}><Phone size={16}/>{PHONE_DISPLAY}</span>
          <span style={{display:"inline-flex", alignItems:"center", gap:8}}><Mail size={16}/>{EMAIL}</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{background:"linear-gradient(135deg,#0f172a,#111827)", color:"#fff", padding:"56px 0 32px"}}>
        <div style={styles.container}>
          <div style={{display:"grid", gap:24, gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", alignItems:"center"}}>
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>
              <h1 style={{fontSize:36, margin:0, fontWeight:800}}>
                {BUSINESS}
              </h1>
              <p style={{margin:"10px 0 0", color:"#cbd5e1", fontSize:18}}>
                Envíos a toda Cuba · Puerta a Puerta · Aéreo prioritario · Marítimo económico
              </p>
              <div style={{display:"flex", gap:12, flexWrap:"wrap", marginTop:16}}>
                <a href="#contacto" style={styles.btn}>Cotizar ahora</a>
                <a href="#tarifas" style={styles.btnGhost}>Ver tarifas</a>
                <a href={WHATS} target="_blank" rel="noreferrer" style={styles.btnGhost}>
                  <span style={{display:"inline-flex", gap:8, alignItems:"center"}}><MessageCircle size={18}/>WhatsApp</span>
                </a>
              </div>
              <p style={{marginTop:8, fontSize:12, color:"#9ca3af"}}>*Tiempos estimados según destino y tipo de servicio.</p>
            </motion.div>

            <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}}>
              <LeadForm/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{background:"#fff", padding:"28px 0"}}>
        <div style={styles.container}>
          <div style={styles.grid3}>
            <div style={styles.card}><h4 style={{margin:"0 0 6px"}}><Truck size={18}/> Entrega rápida</h4><p style={{margin:0, color:"#6b7280"}}>24–48h según destino.</p></div>
            <div style={styles.card}><h4 style={{margin:"0 0 6px"}}><DollarSign size={18}/> Tarifas claras</h4><p style={{margin:0, color:"#6b7280"}}>Cobramos por libra y te asesoramos.</p></div>
            <div style={styles.card}><h4 style={{margin:"0 0 6px"}}><MapPin size={18}/> Tracking</h4><p style={{margin:0, color:"#6b7280"}}>Seguimiento y confirmación de entrega.</p></div>
          </div>
        </div>
      </section>

      {/* TARIFAS SIMPLES */}
      <section id="tarifas" style={{background:"#f8fafc", padding:"36px 0"}}>
        <div style={styles.container}>
          <h2 style={{margin:"0 0 8px"}}>Tarifas simples</h2>
          <p style={{margin:"0 0 16px", color:"#6b7280"}}>Puerta a Puerta desde <b>$1.99/lb</b>. Aéreo prioritario desde <b>$2.99/lb</b>. Consulta por cargas voluminosas.</p>
          <div style={styles.grid3}>
            <div style={styles.card}><h4>Puerta a Puerta</h4><ul><li>Retiro en Florida</li><li>Entrega en Cuba</li><li>Atención al cliente</li></ul></div>
            <div style={styles.card}><h4>Aéreo prioritario</h4><ul><li>Salida frecuente</li><li>Despacho acelerado</li><li>Seguimiento</li></ul></div>
            <div style={styles.card}><h4>Marítimo económico</h4><ul><li>La mejor tarifa por volumen</li><li>Consolidación</li><li>Asesoría</li></ul></div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{background:"#fff", padding:"36px 0"}}>
        <div style={{...styles.container, display:"grid", gap:20, gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"}}>
          <div>
            <h2 style={{marginTop:0}}>Contáctanos</h2>
            <p style={{color:"#6b7280"}}>Cuéntanos qué deseas enviar y te respondemos de inmediato.</p>
            <ContactForm/>
            <div style={{marginTop:14, color:"#374151", fontSize:14, display:"grid", gap:8}}>
              <div style={{display:"flex", alignItems:"center", gap:8}}><MapPin size={16}/> {ADDRESS}</div>
              <div style={{display:"flex", alignItems:"center", gap:8}}><Phone size={16}/> {PHONE_DISPLAY}</div>
              <div style={{display:"flex", alignItems:"center", gap:8}}><Mail size={16}/> {EMAIL}</div>
              <div style={{display:"flex", gap:14, marginTop:6}}>
                <a href={TIKTOK} target="_blank" rel="noreferrer" style={{display:"inline-flex", alignItems:"center", gap:6}}><PlayCircle size={16}/> TikTok</a>
                <a href={IG} target="_blank" rel="noreferrer" style={{display:"inline-flex", alignItems:"center", gap:6}}><Instagram size={16}/> Instagram</a>
                <a href={FB} target="_blank" rel="noreferrer" style={{display:"inline-flex", alignItems:"center", gap:6}}><Facebook size={16}/> Facebook</a>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={{marginTop:0}}>Calculadora rápida</h3>
            <Calculator/>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={{margin:0}}>{BUSINESS} · {PHONE_DISPLAY} · {EMAIL}</p>
          <p style={{margin:"6px 0 0", fontSize:12, color:"#94a3b8"}}>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Componentes ---------- */

function LeadForm(){
  const [f, setF] = React.useState({ nombre:"", telefono:"", origen:"", destino:"", peso:"" });
  const on = e => setF({ ...f, [e.target.name]: e.target.value });

  function submit(e){
    e.preventDefault();
    const payload = `Solicitud de cotización:
Nombre: ${f.nombre}
Teléfono: ${f.telefono}
Origen: ${f.origen}
Destino: ${f.destino}
Peso: ${f.peso}`;
    const mail = `mailto:${EMAIL}?subject=${encodeURIComponent("Cotización HAKA")}&body=${encodeURIComponent(payload)}`;
    window.location.href = mail;
    window.open(`${WHATS}?text=${encodeURIComponent(payload)}`, "_blank");
  }

  return (
    <form onSubmit={submit} style={{...styles.card, background:"#fff"}}>
      <h3 style={{marginTop:0, display:"flex", alignItems:"center", gap:8}}><Send size={18}/> Cotizador rápido</h3>
      <div style={{display:"grid", gap:12}}>
        <label><span style={styles.label}>Nombre</span><input style={styles.input} name="nombre" value={f.nombre} onChange={on} required/></label>
        <label><span style={styles.label}>Teléfono</span><input style={styles.input} name="telefono" value={f.telefono} onChange={on} required/></label>
        <label><span style={styles.label}>Origen</span><input style={styles.input} name="origen" value={f.origen} onChange={on}/></label>
        <label><span style={styles.label}>Destino en Cuba</span><input style={styles.input} name="destino" value={f.destino} onChange={on}/></label>
        <label><span style={styles.label}>Peso (lb)</span><input style={styles.input} name="peso" value={f.peso} onChange={on}/></label>
        <button type="submit" style={styles.btn}>Enviar</button>
      </div>
    </form>
  );
}

function ContactForm(){
  const [m, setM] = React.useState({ nombre:"", email:"", telefono:"", mensaje:"" });
  const on = e => setM({ ...m, [e.target.name]: e.target.value });
  function submit(e){
    e.preventDefault();
    const body = `Contacto web:
Nombre: ${m.nombre}
Email: ${m.email}
Teléfono: ${m.telefono}
Mensaje: ${m.mensaje}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Contacto web HAKA")}&body=${encodeURIComponent(body)}`;
    window.open(`${WHATS}?text=${encodeURIComponent(body)}`, "_blank");
  }
  return (
    <form onSubmit={submit} style={{display:"grid", gap:12}}>
      <label><span style={styles.label}>Nombre completo</span><input style={styles.input} name="nombre" value={m.nombre} onChange={on} required/></label>
      <label><span style={styles.label}>Email</span><input style={styles.input} type="email" name="email" value={m.email} onChange={on}/></label>
      <label><span style={styles.label}>Teléfono</span><input style={styles.input} name="telefono" value={m.telefono} onChange={on}/></label>
      <label><span style={styles.label}>Mensaje</span><textarea style={{...styles.input, minHeight:100}} name="mensaje" value={m.mensaje} onChange={on}/></label>
      <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
        <button type="submit" style={styles.btn}><Send size={16}/> Enviar</button>
        <a href={`tel:${PHONE_E164}`} style={{...styles.btnGhost, display:"inline-flex", alignItems:"center", gap:8}}><PhoneCall size={16}/> Llamar</a>
        <a href={WHATS} target="_blank" rel="noreferrer" style={{...styles.btnGhost, display:"inline-flex", alignItems:"center", gap:8}}><MessageCircle size={16}/> WhatsApp</a>
      </div>
    </form>
  );
}

function Calculator(){
  const [lb, setLb] = React.useState(20);
  const [rate, setRate] = React.useState(1.99);
  const [fee, setFee] = React.useState(0.3); // 30%
  const subtotal = lb * rate;
  const feeVal = subtotal * fee;
  const total = subtotal + feeVal;

  const inputMini = { ...styles.input, padding:"8px 10px" };

  return (
    <div style={{display:"grid", gap:10}}>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10}}>
        <label><span style={styles.label}>Libras</span><input style={inputMini} type="number" value={lb} onChange={e=>setLb(Number(e.target.value||0))}/></label>
        <label><span style={styles.label}>$/lb</span><input style={inputMini} type="number" step="0.01" value={rate} onChange={e=>setRate(Number(e.target.value||0))}/></label>
        <label><span style={styles.label}>% gestión</span><input style={inputMini} type="number" step="1" value={fee*100} onChange={e=>setFee(Number(e.target.value||0)/100)}/></label>
      </div>
      <div style={{...styles.card, display:"grid", gap:6}}>
        <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`}/>
        <Row label="Gestión" value={`$${feeVal.toFixed(2)}`}/>
        <Row label="Total estimado" value={`$${total.toFixed(2)}`} bold/>
      </div>
    </div>
  );
}

function Row({label, value, bold}){
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <span style={{fontWeight:bold?700:500}}>{label}</span>
      <span style={{fontWeight:bold?700:500}}>{value}</span>
    </div>
  );
}
