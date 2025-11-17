"use client";
export default function Input({ label, value, onChange, placeholder, type="text" }) {
  return (
    <div style={{ marginBottom:12 }}>
      {label && <label>{label}</label>}
      <input className="input" type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}