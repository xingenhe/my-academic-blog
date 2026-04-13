import {
  FileText,
  Sparkles,
  FolderOpen,
  Download,
  GraduationCap,
  Languages,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { key: "papers", icon: FileText },
  { key: "tools", icon: Sparkles },
  { key: "study", icon: FolderOpen },
  { key: "templates", icon: Download },
  { key: "about", icon: GraduationCap },
];

export default function Sidebar({ t, onLangToggle }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 border-r border-slate-200 bg-[#f7f7f5] xl:block">
      <div className="flex h-full flex-col px-6 py-7">
        <div className="mb-8">
          <div className="text-[24px] font-semibold tracking-tight text-slate-900">
            {t.siteTitle}
          </div>
          <div className="mt-2 text-sm leading-6 text-slate-500">
            {t.siteSub}
          </div>
        </div>

        <nav className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-white"
              >
                <Icon size={18} className="text-slate-500" />
                <span className="text-sm font-medium">{t[item.key]}</span>
                <ChevronRight size={16} className="ml-auto text-slate-400" />
              </a>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl border border-slate-200 bg-white p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.12em] text-slate-400">
            Language
          </div>
          <button
            onClick={onLangToggle}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            <Languages size={16} />
            {t.languageBtn}
          </button>
        </div>
      </div>
    </aside>
  );
}