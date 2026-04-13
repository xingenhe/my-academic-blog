export default function Tag({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-2 text-left text-sm transition ${
        active
          ? "bg-slate-900 text-white"
          : "bg-slate-50 text-slate-700 hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
  );
}