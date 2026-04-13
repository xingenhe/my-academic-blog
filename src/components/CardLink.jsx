import { ExternalLink } from "lucide-react";

export default function CardLink({
  name,
  href,
  badge,
  icon: Icon,
  description,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {badge}
        </span>

        {Icon ? (
          <Icon size={18} className="text-slate-500 transition group-hover:text-slate-700" />
        ) : (
          <ExternalLink size={18} className="text-slate-500 transition group-hover:text-slate-700" />
        )}
      </div>

      <div className="text-[15px] font-semibold leading-6 text-slate-900">
        {name}
      </div>

      {description && (
        <div className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </div>
      )}
    </a>
  );
}