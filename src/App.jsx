import React, { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  Database,
  GraduationCap,
  FileText,
  Library,
  Sparkles,
  FolderOpen,
  Download,
  ArrowRight,
} from "lucide-react";

import { ui, categories } from "./data/content";
import { tools } from "./data/tools";
import { papers } from "./data/papers";
import { societies } from "./data/societies";
import { study } from "./data/study";
import { templates } from "./data/templates";
import { layout } from "./styles/appStyles";

import Sidebar from "./components/Sidebar";
import Tag from "./components/Tag";
import PaperRow from "./components/PaperRow";
import CardLink from "./components/CardLink";
import SectionTable from "./components/SectionTable";

const iconMap = {
  ChatGPT: Sparkles,
  Gemini: Sparkles,
  DeepSeek: Sparkles,
  Kimi: Sparkles,
  "Kimi PPT": Sparkles,
  "Z-Library": Library,
  "中国哲学书电子化计划": BookOpen,
  "한국고전종합DB": BookOpen,
  "中国知网": Database,
  RISS: Database,
  DBpia: Database,
  KISS: Database,
  KCI: FileText,
  "岭南大学图书馆": BookOpen,
};

function getSourceLabel(item) {
  if (item?.source) return item.source;
  if ((item?.link || "").includes("kci.go.kr")) return "KCI";
  if ((item?.link || "").includes("cnki")) return "CNKI";
  return "Archive";
}

export default function App() {
  const [lang, setLang] = useState("zh");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ui.zh.all);

  const t = ui?.[lang] || ui.zh;
  const localizedCategories = categories?.[lang] || [];

  const filteredPapers = useMemo(() => {
    const q = query.trim().toLowerCase();

    return [...(papers || [])]
      .filter((item) => {
        const categoryText = item?.category?.[lang] || "";
        const categoryMatch =
          activeCategory === t.all || categoryText === activeCategory;

        const text = [
          item?.title || "",
          item?.author || "",
          item?.source || "",
          categoryText,
          item?.year || "",
        ]
          .join(" ")
          .toLowerCase();

        return categoryMatch && (q === "" || text.includes(q));
      })
      .sort((a, b) => {
        const yearDiff = Number(b?.year || 0) - Number(a?.year || 0);
        if (yearDiff !== 0) return yearDiff;
        return String(a?.title || "").localeCompare(String(b?.title || ""), lang);
      });
  }, [lang, query, activeCategory, t.all]);

  const recentPapers = filteredPapers.slice(0, 6);
  const studyItem = Array.isArray(study) ? study[0] : study;

  const stats = useMemo(() => {
    const total = papers?.length || 0;
    const newestYear = Math.max(...(papers || []).map((p) => Number(p.year || 0)));
    const toolCount = tools?.length || 0;
    return { total, newestYear, toolCount };
  }, []);

  return (
    <div className={layout.page}>
      <div className={layout.shell}>
        <Sidebar
          t={t}
          onLangToggle={() => {
            const next = lang === "zh" ? "ko" : "zh";
            setLang(next);
            setQuery("");
            setActiveCategory(ui?.[next]?.all || ui.zh.all);
          }}
        />

        <main className={layout.main}>
          <section className={layout.heroWrap}>
            <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
              <div>
                <div className={layout.heroBadge}>
                  <Sparkles size={14} />
                  {t.heroBadge}
                </div>

                <h1 className={layout.heroTitle}>
                  {t.heroTitle}
                </h1>

                <p className={layout.heroText}>{t.heroText}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#papers" className={layout.primaryButton}>
                    {t.enterPapers}
                  </a>
                  <a href="#tools" className={layout.secondaryButton}>
                    {t.enterTools}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:grid-cols-1">
                <div className={layout.metricCard}>
                  <div className={layout.metricLabel}>{t.metricPapers}</div>
                  <div className={layout.metricValue}>{stats.total}</div>
                  <div className={layout.metricSub}>{t.metricPapersSub}</div>
                </div>

                <div className={layout.metricCard}>
                  <div className={layout.metricLabel}>{t.metricTools}</div>
                  <div className={layout.metricValue}>{stats.toolCount}</div>
                  <div className={layout.metricSub}>{t.metricToolsSub}</div>
                </div>

                <div className={layout.metricCard}>
                  <div className={layout.metricLabel}>{t.metricUpdated}</div>
                  <div className={layout.metricValue}>{stats.newestYear}</div>
                  <div className={layout.metricSub}>{t.metricUpdatedSub}</div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="papers"
            className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]"
          >
            <aside className="space-y-5">
              <div className={layout.lightCard}>
                <div className={layout.panelTitle}>
                  <FileText size={16} />
                  {t.category}
                </div>

                <div className="mt-4 flex flex-wrap gap-2 xl:flex-col xl:items-stretch">
                  <Tag active={activeCategory === t.all} onClick={() => setActiveCategory(t.all)}>
                    {t.all}
                  </Tag>

                  {localizedCategories.map((item) => (
                    <Tag
                      key={item}
                      active={activeCategory === item}
                      onClick={() => setActiveCategory(item)}
                    >
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>

              <div className={layout.lightCard}>
                <div className={layout.panelTitle}>
                  <Sparkles size={16} />
                  {t.latest}
                </div>

                <div className="mt-4 space-y-3">
                  {recentPapers.map((paper) => (
                    <a
                      key={`${paper?.title}-${paper?.year}`}
                      href={paper?.link || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl border border-slate-200 px-4 py-3 transition hover:bg-slate-50"
                    >
                      <div className="line-clamp-2 text-sm font-medium leading-6 text-slate-900">
                        {paper?.title || "-"}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {paper?.year || "-"} · {getSourceLabel(paper)}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="min-w-0 space-y-5">
              <div className={layout.searchPanel}>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <div className={layout.sectionKicker}>{t.papersKicker}</div>
                    <h2 className={layout.sectionTitle}>{t.papersTitle}</h2>
                    <p className={layout.sectionDesc}>{t.papersDesc}</p>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-3 lg:max-w-2xl lg:flex-row">
                    <div className={layout.searchBox}>
                      <Search size={18} className="shrink-0 text-slate-400" />
                      <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t.search}
                        className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                      />
                    </div>

                    <div className={layout.resultCount}>
                      {filteredPapers.length} {t.records}
                    </div>
                  </div>
                </div>
              </div>

              <SectionTable
                headers={[
                  lang === "zh" ? "题名" : "제목",
                  t.author,
                  t.category,
                  t.year,
                  t.source,
                  "Link",
                ]}
              >
                {filteredPapers.map((paper) => (
                  <PaperRow
                    key={`${paper?.title}-${paper?.author}-${paper?.year}`}
                    paper={{ ...paper, source: getSourceLabel(paper) }}
                    lang={lang}
                    t={t}
                  />
                ))}
              </SectionTable>
            </div>
          </section>

          <section id="tools" className={`${layout.sectionCard} mt-6`}>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <div className={layout.sectionKicker}>{t.toolsKicker}</div>
                <h2 className={layout.sectionTitle}>{t.toolTitle}</h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(tools || []).map((tool) => (
                <CardLink
                  key={tool?.name}
                  name={tool?.name}
                  href={tool?.url || "#"}
                  badge={tool?.tag || ""}
                  icon={iconMap[tool?.name]}
                  description={lang === "zh" ? tool?.descZh : tool?.descKo}
                />
              ))}
            </div>
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-2">
            <section id="study" className={layout.sectionCard}>
              <div className={layout.sectionKicker}>{t.studyKicker}</div>
              <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-900">
                <FolderOpen size={20} />
                {t.studyTitle}
              </div>

              <a
                href={studyItem?.url || "#"}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:bg-white"
              >
                <div className="font-medium text-slate-900">
                  {studyItem?.name?.[lang] || t.studyNote}
                </div>
                {studyItem?.note?.[lang] && (
                  <div className="mt-2 text-sm leading-6 text-slate-500">
                    {studyItem.note[lang]}
                  </div>
                )}
              </a>
            </section>

            <section id="templates" className={layout.sectionCard}>
              <div className={layout.sectionKicker}>{t.templatesKicker}</div>
              <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-900">
                <Download size={20} />
                {t.templateTitle}
              </div>

              <div className="space-y-3">
                {(templates || []).map((item, idx) => (
                  <a
                    key={`${item?.type?.zh || "template"}-${idx}`}
                    href={item?.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:bg-white"
                  >
                    <div className="font-medium text-slate-900">
                      {item?.type?.[lang] || "-"}
                    </div>
                    {item?.note?.[lang] && (
                      <div className="mt-1 text-sm leading-6 text-slate-500">
                        {item.note[lang]}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </section>
          </section>

          <section id="about" className={`${layout.sectionCard} mt-6`}>
            <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
              <div>
                <div className={layout.sectionKicker}>{t.aboutKicker}</div>
                <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-900">
                  <GraduationCap size={20} />
                  {t.aboutTitle}
                </div>
                <p className="text-[15px] leading-8 text-slate-600">
                  {t.aboutText}
                </p>
              </div>

              <div>
                <div className="mb-3 text-sm font-medium text-slate-500">
                  {t.relatedSocieties}
                </div>
                <div className="flex flex-wrap gap-3">
                  {(societies || []).map((item, idx) => (
                    <a
                      key={item?.name || idx}
                      href={item?.url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                    >
                      {item?.name || "-"}
                      <ArrowRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}