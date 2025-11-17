"use client";
export default function Button({ children, onClick, variant="primary", style }) {
  const cls = variant === "primary" ? "btn btn-primary" : "btn";
  return (
    <button onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}