export default function Input({ label, type = "text", ...props }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label>{label}</label>
      <input
        type={type}
        style={{ width: "100%", marginTop: "5px" }}
        {...props}
      />
    </div>
  );
}
