export default function Button({ children, ...props }) {
  return (
    <button
      style={{
        background: "#000",
        color: "#fff",
        width: "100%",
        marginTop: "10px"
      }}
      {...props}
    >
      {children}
    </button>
  );
}
