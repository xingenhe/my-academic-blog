import { ExternalLink } from "lucide-react";

export default function PaperRow({ paper, lang, t }) {
  return (
    <tr className="border-b border-slate-100 transition hover:bg-slate-50/70">
      <td className="px-4 py-4 align-top">
        <a
          href={paper.link}
          target="_blank"
          rel="noreferrer"
          className="text-[15px] font-medium leading-7 text-slate-900 hover:underline"
        >
          {paper.title}
        </a>
      </td>

      <td className="px-4 py-4 align-top text-sm leading-7 text-slate-500">
        {paper.author}
      </td>

      <td className="px-4 py-4 align-top">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
          {paper.category?.[lang] || "-"}
        </span>
      </td>

      <td className="px-4 py-4 align-top text-sm text-slate-500">
        {paper.year || "-"}
      </td>

      <td className="px-4 py-4 align-top text-sm text-slate-500">
        {paper.source || "-"}
      </td>

      <td className="px-4 py-4 align-top">
        <a
          href={paper.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline"
        >
          {t.open}
          <ExternalLink size={14} />
        </a>
      </td>
    </tr>
  );
}