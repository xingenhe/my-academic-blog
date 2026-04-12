import React, { useMemo, useState } from "react";
import {
  Search,
  ExternalLink,
  Sparkles,
  Library,
  FileText,
  Languages,
  Bookmark,
  GraduationCap,
  FolderOpen,
  Users,
  Globe,
} from "lucide-react";

const content = {
  zh: {
    siteTitle: "ENHE XING 学术门户",
    siteSub: "AI 工具 · 学术数据库 · KCI 论文索引",
    navTools: "工具导航",
    navPapers: "论文索引",
    navCategories: "分类整理",
    navAbout: "关于本站",
    heroBadge: "个人学术论坛 / 学术资源门户",
    heroTitle1: "中国语言文学研究",
    heroTitle2: "一站式学术入口",
    heroDesc:
      "这个网站结合了个人研究工具页与学术资料索引页：前半部分整合 AI 工具、图书馆和数据库快捷入口，后半部分持续整理中国语言文学、语言学、文字学与文献学相关论文链接，尤其可作为岭南大学中文系 KCI 论文索引页。",
    enterTools: "进入工具导航",
    enterPapers: "查看论文索引",
    toolsTitle: "工具导航",
    toolsDesc:
      "将常用 AI 工具、中国与韩国学术数据库、图书馆及古典文献平台整合到同一页面，方便写论文、找资料、做汇报。",
    aiTools: "AI 工具快捷入口",
    dbTools: "文献数据库与图书馆入口",
    papersTitle: "论文索引",
    papersDesc:
      "按文学、语言学、文字学、文献学分类整理岭南大学中文系相关 KCI 论文，也可持续补充教授与同学的研究成果链接。",
    searchPlaceholder: "搜索论文标题、作者或分类",
    all: "全部",
    literature: "文学",
    linguistics: "语言学",
    paleography: "文字学",
    philology: "文献学",
    titleCol: "论文题目",
    authorCol: "作者",
    categoryCol: "分类",
    yearCol: "年份",
    linkCol: "链接",
    view: "查看",
    aboutTitle: "关于本站",
    aboutDesc:
      "这是一个面向个人研究实践的中文学术资源门户。你可以把它当作自己的研究首页：前半部分是常用工具与数据库导航，后半部分是持续更新的论文与资料索引。后续还可以继续扩展为教授论文、同学论文、课程资料、学术会议与投稿记录等子页面。",
    ext1: "可扩展栏目",
    ext1d: "后续可加入课程资料、会议信息、投稿记录、论文模板下载等栏目。",
    ext2: "中文系成果整理",
    ext2d: "可以单独设立教授论文、同学论文、毕业论文参考等子页。",
    ext3: "双语支持",
    ext3d: "已支持中文 / 韩语界面切换，后续还能扩展英文版。",
    langBtn: "한국어",
  },
  ko: {
    siteTitle: "ENHE XING 학술 포털",
    siteSub: "AI 도구 · 학술 DB · KCI 논문 색인",
    navTools: "도구 바로가기",
    navPapers: "논문 색인",
    navCategories: "분류별 정리",
    navAbout: "사이트 소개",
    heroBadge: "개인 학술 포럼 / 학술 자원 포털",
    heroTitle1: "중국언어문학 연구를 위한",
    heroTitle2: "원스톱 학술 입구",
    heroDesc:
      "이 사이트는 개인 연구용 도구 페이지와 학술 자료 색인 페이지를 결합한 형태입니다. 앞부분에는 AI 도구, 도서관, 데이터베이스 바로가기를 모아두고, 뒷부분에는 중국언어문학, 언어학, 문자학, 문헌학 관련 논문 링크를 지속적으로 정리하여 영남대학교 중국언어문화학과 KCI 논문 색인 페이지로 활용할 수 있습니다.",
    enterTools: "도구 바로가기",
    enterPapers: "논문 색인 보기",
    toolsTitle: "도구 바로가기",
    toolsDesc:
      "자주 쓰는 AI 도구, 한국·중국 학술 데이터베이스, 도서관, 고전문헌 플랫폼을 한 페이지에 모아 논문 작성과 자료 검색을 쉽게 합니다.",
    aiTools: "AI 도구 바로가기",
    dbTools: "학술 DB / 도서관 바로가기",
    papersTitle: "논문 색인",
    papersDesc:
      "문학, 언어학, 문자학, 문헌학 분류에 따라 영남대 중국언어문화학과 관련 KCI 논문을 정리하고, 교수 및 대학원생의 연구 성과 링크를 지속적으로 추가할 수 있습니다.",
    searchPlaceholder: "논문 제목, 저자, 분류 검색",
    all: "전체",
    literature: "문학",
    linguistics: "언어학",
    paleography: "문자학",
    philology: "문헌학",
    titleCol: "논문 제목",
    authorCol: "저자",
    categoryCol: "분류",
    yearCol: "연도",
    linkCol: "링크",
    view: "보기",
    aboutTitle: "사이트 소개",
    aboutDesc:
      "이 사이트는 개인 연구 실천을 위한 중국학 학술 포털입니다. 앞부분에는 자주 쓰는 도구와 데이터베이스를, 뒷부분에는 지속적으로 갱신되는 논문 및 자료 색인을 배치하는 구조입니다. 이후 교수 논문, 대학원생 논문, 수업 자료, 학술대회 정보, 투고 기록 등의 하위 페이지로 확장할 수 있습니다.",
    ext1: "확장 가능 섹션",
    ext1d: "추후 수업자료, 학술대회 정보, 투고 기록, 논문 양식 다운로드 등을 추가할 수 있습니다.",
    ext2: "학과 성과 정리",
    ext2d: "교수 논문, 학생 논문, 졸업논문 참고자료 등의 별도 하위 페이지 구성이 가능합니다.",
    ext3: "이중언어 지원",
    ext3d: "중국어/한국어 전환 기능을 포함했고, 이후 영어 버전도 확장 가능합니다.",
    langBtn: "中文",
  },
};

const aiTools = [
  { name: "ChatGPT", url: "https://chatgpt.com", tag: "AI" },
  { name: "Gemini", url: "https://gemini.google.com", tag: "AI" },
  { name: "DeepSeek", url: "https://www.deepseek.com", tag: "AI" },
  { name: "Kimi", url: "https://kimi.moonshot.cn", tag: "AI" },
  { name: "Kimi PPT", url: "https://kimi.moonshot.cn", tag: "AI" },
];

const resourceTools = [
  { name: "한국고전종합DB", url: "https://db.itkc.or.kr/", tag: "KR" },
  { name: "KISS", url: "https://kiss.kstudy.com/", tag: "KR" },
  { name: "DBpia", url: "https://www.dbpia.co.kr/", tag: "KR" },
  { name: "RISS", url: "https://www.riss.kr/", tag: "KR" },
  { name: "Naver Academic", url: "https://academic.naver.com/", tag: "KR" },
  { name: "KCI", url: "https://www.kci.go.kr/", tag: "KR" },
  { name: "中国国家图书馆", url: "https://www.nlc.cn/web/index.shtml", tag: "CN" },
  { name: "中国哲学书电子化计划", url: "https://ctext.org/zh", tag: "CN" },
  { name: "国家哲学社会科学文献中心", url: "https://www.ncpssd.cn/index", tag: "CN" },
  { name: "岭南大学图书馆", url: "https://libs.yu.ac.kr/", tag: "KR" },
  { name: "中国知网", url: "https://www.cnki.net/", tag: "CN" },
  { name: "维普网", url: "https://www.cqvip.com/", tag: "CN" },
  { name: "Z-Library", url: "https://z-library.sk/", tag: "Global" },
];

const paperData = [
  {
    title: "试析张爱玲自传体小说三部曲 ≪雷峰塔≫≪易经≫及≪小团圆≫",
    author: "박운석",
    category: { zh: "文学", ko: "문학" },
    year: "2012",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001693227",
  },
  {
    title: "空间视域下的两宋都城话本比较研究",
    author: "汪建成 · 박명진",
    category: { zh: "文学", ko: "문학" },
    year: "2025",
    link: "https://www.kci.go.kr/kciportal/po/search/poArtiSearList.kci?sereId=000312",
  },
  {
    title: "国际中文教育专业大学生诚信文化教育现状调查研究",
    author: "孙琪 · 박명진",
    category: { zh: "文学", ko: "문학" },
    year: "2025",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003278175",
  },
  {
    title: "《說文解字》刀部刑罰相關漢字考察",
    author: "왕위한 · 이춘영",
    category: { zh: "文字学", ko: "문자학" },
    year: "2021",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002706630",
  },
  {
    title: "动词重叠在汉语教材中的编排探究 —以≪汉语教程≫为例—",
    author: "胡苹 · 이춘영",
    category: { zh: "语言学", ko: "언어학" },
    year: "2025",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003278150",
  },
  {
    title: "双重否定构式“也不是不X”的反预期机制分析",
    author: "邱双 · 유수경",
    category: { zh: "语言学", ko: "언어학" },
    year: "2025",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003278173",
  },
  {
    title: "XAI 기반의 중국어 문두 다중논항 어순 해석 모델 연구",
    author: "박정구 · 유수경 외",
    category: { zh: "语言学", ko: "언어학" },
    year: "2024",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003076811",
  },
  {
    title: "현대중국어 양태와 사역의 비대칭성 연구 ― 표지이론 기반 분석과 인지언어학적 해석 ―",
    author: "서지은",
    category: { zh: "语言学", ko: "언어학" },
    year: "2025",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003239043",
  },
  {
    title: "日帝强占期 中國語 敎材에 나타나는 介詞 硏究",
    author: "최환 · 신미섭",
    category: { zh: "文献学", ko: "문헌학" },
    year: "2012",
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001693216",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f6f8",
    color: "#1f2937",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "Noto Sans KR", Arial, sans-serif',
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #e5e7eb",
  },
  headerInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "14px",
  },
  navLink: {
    color: "#4b5563",
    textDecoration: "none",
  },
  langBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid #d1d5db",
    background: "#fff",
    borderRadius: "999px",
    padding: "10px 16px",
    cursor: "pointer",
    fontSize: "14px",
  },
  hero: {
    padding: "56px 0 28px",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "28px",
    alignItems: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid #e5e7eb",
    borderRadius: "999px",
    padding: "8px 14px",
    background: "#fff",
    color: "#4b5563",
    fontSize: "14px",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "48px",
    lineHeight: 1.15,
    margin: "0 0 18px",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  heroDesc: {
    fontSize: "17px",
    lineHeight: 1.9,
    color: "#4b5563",
    maxWidth: "760px",
    marginBottom: "22px",
  },
  btnRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    display: "inline-block",
    background: "#111827",
    color: "#fff",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "14px",
    fontSize: "14px",
  },
  btnSecondary: {
    display: "inline-block",
    background: "#fff",
    color: "#374151",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "14px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  statCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "22px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
  },
  section: {
    marginTop: "42px",
  },
  sectionHeader: {
    marginBottom: "18px",
  },
  sectionTitleBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid #e5e7eb",
    borderRadius: "999px",
    padding: "7px 12px",
    background: "#fff",
    color: "#4b5563",
    fontSize: "14px",
    marginBottom: "12px",
  },
  sectionDesc: {
    color: "#4b5563",
    lineHeight: 1.9,
    maxWidth: "840px",
  },
  subTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "20px",
    fontWeight: 600,
    margin: "22px 0 14px",
  },
  cardGrid5: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
  },
  cardGrid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },
  linkCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "18px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
    textDecoration: "none",
    color: "#111827",
    display: "block",
  },
  tag: {
    display: "inline-block",
    background: "#f3f4f6",
    color: "#4b5563",
    borderRadius: "999px",
    padding: "4px 10px",
    fontSize: "12px",
    marginBottom: "12px",
  },
  paperWrap: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "24px",
    padding: "20px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
  },
  filterBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "18px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#fff",
    border: "1px solid #d1d5db",
    borderRadius: "14px",
    padding: "10px 12px",
    minWidth: "320px",
    flex: "1 1 320px",
    maxWidth: "420px",
  },
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "14px",
    background: "transparent",
  },
  chipRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  chip: {
    border: "1px solid #d1d5db",
    background: "#fff",
    color: "#374151",
    borderRadius: "999px",
    padding: "9px 14px",
    cursor: "pointer",
    fontSize: "14px",
  },
  chipActive: {
    border: "1px solid #111827",
    background: "#111827",
    color: "#fff",
    borderRadius: "999px",
    padding: "9px 14px",
    cursor: "pointer",
    fontSize: "14px",
  },
  tableWrap: {
    overflowX: "auto",
    border: "1px solid #e5e7eb",
    borderRadius: "18px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "900px",
  },
  th: {
    background: "#f3f4f6",
    color: "#4b5563",
    fontSize: "14px",
    textAlign: "left",
    padding: "14px",
    borderBottom: "1px solid #e5e7eb",
  },
  td: {
    padding: "16px 14px",
    borderBottom: "1px solid #e5e7eb",
    verticalAlign: "top",
    fontSize: "14px",
    lineHeight: 1.8,
  },
  miniTag: {
    display: "inline-block",
    background: "#f3f4f6",
    color: "#374151",
    borderRadius: "999px",
    padding: "4px 10px",
    fontSize: "12px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginTop: "22px",
  },
  infoCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "22px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
  },
  about: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "28px",
    padding: "28px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
    margin: "28px 0 50px",
  },
};

function CardLink({ item }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" style={styles.linkCard}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={styles.tag}>{item.tag}</span>
        <ExternalLink size={16} color="#6b7280" />
      </div>
      <div style={{ fontSize: "16px", fontWeight: 600, marginTop: "4px" }}>{item.name}</div>
    </a>
  );
}

export default function App() {
  const [lang, setLang] = useState("zh");
  const [query, setQuery] = useState("");
  const t = content[lang];
  const [category, setCategory] = useState(t.all);

  const categoryOptions = [t.all, t.literature, t.linguistics, t.paleography, t.philology];

  const filteredPapers = useMemo(() => {
    return paperData.filter((paper) => {
      const paperCategory = paper.category[lang];
      const categoryMatch = category === t.all || paperCategory === category;
      const q = query.trim().toLowerCase();
      const queryMatch =
        q.length === 0 ||
        paper.title.toLowerCase().includes(q) ||
        paper.author.toLowerCase().includes(q) ||
        paperCategory.toLowerCase().includes(q);
      return categoryMatch && queryMatch;
    });
  }, [lang, category, query, t.all]);

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <div style={{ fontSize: "20px", fontWeight: 700 }}>{t.siteTitle}</div>
            <div style={{ fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>{t.siteSub}</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <nav style={styles.nav}>
              <a href="#tools" style={styles.navLink}>{t.navTools}</a>
              <a href="#papers" style={styles.navLink}>{t.navPapers}</a>
              <a href="#categories" style={styles.navLink}>{t.navCategories}</a>
              <a href="#about" style={styles.navLink}>{t.navAbout}</a>
            </nav>

            <button
              style={styles.langBtn}
              onClick={() => {
                const next = lang === "zh" ? "ko" : "zh";
                setLang(next);
                setQuery("");
                setCategory(content[next].all);
              }}
            >
              <Languages size={16} />
              {t.langBtn}
            </button>
          </div>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.badge}>
                <Sparkles size={16} />
                {t.heroBadge}
              </div>

              <h1 style={styles.heroTitle}>
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
              </h1>

              <p style={styles.heroDesc}>{t.heroDesc}</p>

              <div style={styles.btnRow}>
                <a href="#tools" style={styles.btnPrimary}>{t.enterTools}</a>
                <a href="#papers" style={styles.btnSecondary}>{t.enterPapers}</a>
              </div>
            </div>

            <div style={styles.statGrid}>
              {[
                { label: "AI", value: "5+", icon: Sparkles },
                { label: "DB", value: "13+", icon: Library },
                { label: "KCI", value: "9", icon: FileText },
                { label: "CN/KR", value: "2 Lang", icon: Languages },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={styles.statCard}>
                    <Icon size={20} color="#374151" />
                    <div style={{ fontSize: "30px", fontWeight: 700, marginTop: "12px" }}>{item.value}</div>
                    <div style={{ color: "#6b7280", marginTop: "4px", fontSize: "14px" }}>{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <main style={styles.container}>
        <section id="tools" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleBadge}>
              <Bookmark size={16} />
              {t.toolsTitle}
            </div>
            <div style={styles.sectionDesc}>{t.toolsDesc}</div>
          </div>

          <div style={styles.subTitle}>
            <Sparkles size={20} />
            {t.aiTools}
          </div>
          <div style={styles.cardGrid5}>
            {aiTools.map((item) => <CardLink key={item.name} item={item} />)}
          </div>

          <div style={styles.subTitle}>
            <Library size={20} />
            {t.dbTools}
          </div>
          <div style={styles.cardGrid4}>
            {resourceTools.map((item) => <CardLink key={item.name} item={item} />)}
          </div>
        </section>

        <section id="papers" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleBadge}>
              <FileText size={16} />
              {t.papersTitle}
            </div>
            <div style={styles.sectionDesc}>{t.papersDesc}</div>
          </div>

          <div style={styles.paperWrap}>
            <div style={styles.filterBar}>
              <div style={styles.searchBox}>
                <Search size={16} color="#6b7280" />
                <input
                  style={styles.input}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                />
              </div>

              <div id="categories" style={styles.chipRow}>
                {categoryOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    style={category === item ? styles.chipActive : styles.chip}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>{t.titleCol}</th>
                    <th style={styles.th}>{t.authorCol}</th>
                    <th style={styles.th}>{t.categoryCol}</th>
                    <th style={styles.th}>{t.yearCol}</th>
                    <th style={styles.th}>{t.linkCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPapers.map((paper, idx) => (
                    <tr key={idx}>
                      <td style={styles.td}>{paper.title}</td>
                      <td style={styles.td}>{paper.author}</td>
                      <td style={styles.td}>
                        <span style={styles.miniTag}>{paper.category[lang]}</span>
                      </td>
                      <td style={styles.td}>{paper.year}</td>
                      <td style={styles.td}>
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#111827", textDecoration: "underline" }}
                        >
                          {t.view}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <FolderOpen size={20} color="#374151" />
            <h3 style={{ fontSize: "20px", margin: "14px 0 10px" }}>{t.ext1}</h3>
            <p style={{ color: "#4b5563", lineHeight: 1.9 }}>{t.ext1d}</p>
          </div>

          <div style={styles.infoCard}>
            <Users size={20} color="#374151" />
            <h3 style={{ fontSize: "20px", margin: "14px 0 10px" }}>{t.ext2}</h3>
            <p style={{ color: "#4b5563", lineHeight: 1.9 }}>{t.ext2d}</p>
          </div>

          <div style={styles.infoCard}>
            <Globe size={20} color="#374151" />
            <h3 style={{ fontSize: "20px", margin: "14px 0 10px" }}>{t.ext3}</h3>
            <p style={{ color: "#4b5563", lineHeight: 1.9 }}>{t.ext3d}</p>
          </div>
        </section>

        <section id="about" style={styles.about}>
          <div style={styles.sectionTitleBadge}>
            <GraduationCap size={16} />
            {t.aboutTitle}
          </div>
          <p style={{ color: "#4b5563", lineHeight: 2, marginTop: "10px" }}>{t.aboutDesc}</p>
        </section>
      </main>
    </div>
  );
}