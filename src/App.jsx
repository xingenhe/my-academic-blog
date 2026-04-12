import React, { useEffect, useMemo, useState } from "react";
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
  Download,
  Building2,
} from "lucide-react";

const content = {
  zh: {
    siteTitle: "ENHE XING 学术门户",
    siteSub: "AI 工具 · 学术数据库 · KCI 论文索引",
    navTools: "工具导航",
    navPapers: "论文索引",
    navSocieties: "学会推荐",
    navTemplates: "模板下载",
    navAbout: "关于本站",
    heroBadge: "个人学术论坛 / 学术资源门户",
    heroTitle1: "中国语言文学研究",
    heroTitle2: "一站式学术入口",
    heroDesc:
      "这个网站结合了个人研究工具页与学术资料索引页：前半部分整合 AI 工具、图书馆和数据库快捷入口，后半部分持续整理中国语言文学、语言学、文字学与文献学相关论文链接，尤其可作为岭南大学中文系 KCI 论文索引页。",
    enterTools: "进入工具导航",
    enterPapers: "查看论文索引",
    toolsTitle: "工具导航",
    toolsDesc: "将常用 AI 工具、中国与韩国学术数据库、图书馆及古典文献平台整合到同一页面，方便写论文、找资料、做汇报。",
    aiTools: "AI 工具快捷入口",
    dbTools: "文献数据库与图书馆入口",
    papersTitle: "论文索引",
    papersDesc:
      "论文按年份倒序排列，首页每页显示 8 篇，可翻页查看更多，也可直接通过搜索框检索标题、作者和分类。标签系统升级为文学、语言学、文字学、文献学、NLP / AI语言学、文化콘텐츠。",
    searchPlaceholder: "搜索论文标题、作者或分类",
    all: "全部",
    literature: "文学",
    linguistics: "语言学",
    paleography: "文字学",
    philology: "文献学",
    nlp: "NLP / AI语言学",
    contentTag: "文化콘텐츠",
    titleCol: "论文题目",
    authorCol: "作者",
    categoryCol: "分类",
    yearCol: "年份",
    linkCol: "链接",
    view: "查看",
    prev: "上一页",
    next: "下一页",
    societiesTitle: "期刊推荐 / 学会介绍",
    societiesDesc: "这里收录与你的研究方向关系密切的学会与期刊入口，可直接跳转查看投稿、审稿与学会信息。",
    templatesTitle: "论文模板下载",
    templatesDesc:
      "硕士论文、博士论文与期刊投稿要求建议集中放在这里管理。硕博模板可后续替换为你自己上传的文件；期刊论文模板与投稿规定则建议直接链接到各学会官网。",
    typeCol: "类型",
    noteCol: "说明",
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
    navSocieties: "학회 추천",
    navTemplates: "논문 템플릿",
    navAbout: "사이트 소개",
    heroBadge: "개인 학술 포럼 / 학술 자원 포털",
    heroTitle1: "중국언어문학 연구를 위한",
    heroTitle2: "원스톱 학술 입구",
    heroDesc:
      "이 사이트는 개인 연구용 도구 페이지와 학술 자료 색인 페이지를 결합한 형태입니다. 앞부분에는 AI 도구, 도서관, 데이터베이스 바로가기를 모아두고, 뒷부분에는 중국언어문학, 언어학, 문자학, 문헌학 관련 논문 링크를 지속적으로 정리하여 영남대학교 중국언어문화학과 KCI 논문 색인 페이지로 활용할 수 있습니다.",
    enterTools: "도구 바로가기",
    enterPapers: "논문 색인 보기",
    toolsTitle: "도구 바로가기",
    toolsDesc: "자주 쓰는 AI 도구, 한국·중국 학술 데이터베이스, 도서관, 고전문헌 플랫폼을 한 페이지에 모아 논문 작성과 자료 검색을 쉽게 합니다.",
    aiTools: "AI 도구 바로가기",
    dbTools: "학술 DB / 도서관 바로가기",
    papersTitle: "논문 색인",
    papersDesc:
      "논문은 연도 내림차순으로 정렬되며, 페이지당 8편씩 표시됩니다. 제목, 저자, 분류로 바로 검색할 수 있습니다.",
    searchPlaceholder: "논문 제목, 저자, 분류 검색",
    all: "전체",
    literature: "문학",
    linguistics: "언어학",
    paleography: "문자학",
    philology: "문헌학",
    nlp: "NLP / AI언어학",
    contentTag: "문화콘텐츠",
    titleCol: "논문 제목",
    authorCol: "저자",
    categoryCol: "분류",
    yearCol: "연도",
    linkCol: "링크",
    view: "보기",
    prev: "이전",
    next: "다음",
    societiesTitle: "학회 추천 / 학회 소개",
    societiesDesc: "연구 방향과 가까운 학회와 학술지의 홈페이지 및 투고 시스템을 모아둔 영역입니다.",
    templatesTitle: "논문 템플릿",
    templatesDesc:
      "석사논문, 박사논문, 학술지 투고 규정을 한 곳에서 관리하기 위한 구역입니다. 석·박사 템플릿은 나중에 직접 업로드한 파일로 교체하고, 학술지 양식과 투고 규정은 각 학회 홈페이지로 연결하는 방식을 권장합니다.",
    typeCol: "유형",
    noteCol: "설명",
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
  {
    name: "ChatGPT",
    url: "https://chatgpt.com",
    tag: "AI",
    descZh: "对话式写作辅助、摘要整理、翻译润色。",
    descKo: "대화형 글쓰기 보조, 초록 정리, 번역 및 윤문.",
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com",
    tag: "AI",
    descZh: "适合网页检索、多模态阅读与资料整合。",
    descKo: "웹 검색, 멀티모달 읽기, 자료 통합에 적합.",
  },
  {
    name: "DeepSeek",
    url: "https://www.deepseek.com",
    tag: "AI",
    descZh: "适合中文分析、写作辅助与代码处理。",
    descKo: "중국어 분석, 글쓰기 보조, 코드 처리에 유용.",
  },
  {
    name: "Kimi",
    url: "https://kimi.moonshot.cn",
    tag: "AI",
    descZh: "长文本总结、论文内容归纳与问答。",
    descKo: "장문 요약, 논문 내용 정리 및 질의응답.",
  },
  {
    name: "Kimi PPT",
    url: "https://kimi.moonshot.cn",
    tag: "AI",
    descZh: "适合快速生成 발표/PPT 大纲。",
    descKo: "발표 자료와 PPT 개요를 빠르게 만들 때 사용.",
  },
];

const resourceTools = [
  {
    name: "한국고전종합DB",
    url: "https://db.itkc.or.kr/",
    tag: "KR",
    descZh: "韩国古典文献原文、译注与检索平台。",
    descKo: "한국 고전문헌 원문, 번역, 주석 검색 플랫폼.",
  },
  {
    name: "KISS",
    url: "https://kiss.kstudy.com/",
    tag: "KR",
    descZh: "韩国学术期刊全文数据库。",
    descKo: "한국 학술지 원문 데이터베이스.",
  },
  {
    name: "DBpia",
    url: "https://www.dbpia.co.kr/",
    tag: "KR",
    descZh: "韩国论文、学会刊物与引用常用平台。",
    descKo: "한국 논문, 학회지, 인용 검색에 자주 쓰는 플랫폼.",
  },
  {
    name: "RISS",
    url: "https://www.riss.kr/",
    tag: "KR",
    descZh: "韩国学位论文、馆藏与联合检索入口。",
    descKo: "학위논문, 소장자료, 통합검색 입구.",
  },
  {
    name: "Naver Academic",
    url: "https://academic.naver.com/",
    tag: "KR",
    descZh: "适合做韩语论文与作者的快速初筛。",
    descKo: "한국어 논문과 저자 검색의 빠른 1차 탐색용.",
  },
  {
    name: "KCI",
    url: "https://www.kci.go.kr/",
    tag: "KR",
    descZh: "韩国核心论文检索、引文与作者信息平台。",
    descKo: "한국 핵심 논문 검색, 인용, 저자 정보 플랫폼.",
  },
  {
    name: "中国国家图书馆",
    url: "https://www.nlc.cn/web/index.shtml",
    tag: "CN",
    descZh: "中国国家级馆藏、古籍与数字资源入口。",
    descKo: "중국 국가급 소장자료와 고적, 디지털 자원 입구.",
  },
  {
    name: "中国哲学书电子化计划",
    url: "https://ctext.org/zh",
    tag: "CN",
    descZh: "中国古典文本检索、比对与引用常用站。",
    descKo: "중국 고전 텍스트 검색, 대조, 인용에 유용.",
  },
  {
    name: "国家哲学社会科学文献中心",
    url: "https://www.ncpssd.cn/index",
    tag: "CN",
    descZh: "哲学社会科学期刊、论文与学术资源平台。",
    descKo: "철학사회과학 논문, 학술지, 자료 플랫폼.",
  },
  {
    name: "岭南大学图书馆",
    url: "https://libs.yu.ac.kr/",
    tag: "KR",
    descZh: "校内数据库、馆藏与原文获取入口。",
    descKo: "교내 DB, 소장자료, 원문 확보 입구.",
  },
  {
    name: "中国知网",
    url: "https://www.cnki.net/",
    tag: "CN",
    descZh: "中国论文、学位论文与期刊检索核心平台。",
    descKo: "중국 논문, 학위논문, 학술지 검색 핵심 플랫폼.",
  },
  {
    name: "维普网",
    url: "https://www.cqvip.com/",
    tag: "CN",
    descZh: "中国期刊与参考文献检索平台。",
    descKo: "중국 학술지 및 참고문헌 검색 플랫폼.",
  },
  {
    name: "Z-Library",
    url: "https://z-library.sk/",
    tag: "Global",
    descZh: "电子书检索与阅读站。",
    descKo: "전자책 검색 및 열람 사이트.",
  },
];

const paperData = [
  {
    title: "<黑神话：悟空> 中灵吉菩萨角色的构建与文化符号解析",
    author: "邢恩赫 · 韩宇翔",
    category: { zh: "文化콘텐츠", ko: "문화콘텐츠" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003216785",
  },
  {
    title: "空间视域下的两宋都城话本比较研究",
    author: "汪建成 · 박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/mobile/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003290810",
  },
  {
    title: "国际中文教育专业大学生诚信文化教育现状调查研究",
    author: "孙琪 · 박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003278175",
  },
  {
    title: "动词重叠在汉语教材中的编排探究 —以≪汉语教程≫为例—",
    author: "胡苹 · 이춘영",
    category: { zh: "语言学", ko: "언어학" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003278150",
  },
  {
    title: "双重否定构式“也不是不X”的反预期机制分析",
    author: "邱双 · 유수경",
    category: { zh: "语言学", ko: "언어학" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003278173",
  },
  {
    title: "구어 코퍼스에 기반한 현대중국어 '的话' 구문의 다기능성 분석",
    author: "유수경",
    category: { zh: "NLP / AI语言学", ko: "NLP / AI언어학" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/mobile/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003179047",
  },
  {
    title: "중국어 화제구조 습득에 관한 실험통사론적 연구",
    author: "유수경",
    category: { zh: "NLP / AI语言学", ko: "NLP / AI언어학" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/mobile/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003218492",
  },
  {
    title: "현대중국어 양태와 사역의 비대칭성 연구 ― 표지이론 기반 분석과 인지언어학적 해석 ―",
    author: "서지은",
    category: { zh: "语言学", ko: "언어학" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003239043",
  },
  {
    title: "现代汉语矛盾结构的多模态认知机制及其文化理据",
    author: "周晓晗 · 이춘영",
    category: { zh: "语言学", ko: "언어학" },
    year: 2025,
    link: "https://www.kci.go.kr/kciportal/mobile/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003296904",
  },
  {
    title: "문두 다중논항 구문의 수용성 제고에 관한 정보구조적 고찰",
    author: "박정구 · 강병규 · 박민준 · 유수경",
    category: { zh: "NLP / AI语言学", ko: "NLP / AI언어학" },
    year: 2024,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003133630",
  },
  {
    title: "XAI 기반의 중국어 문두 다중논항 어순 해석 모델 연구",
    author: "박정구 · 유수경 외",
    category: { zh: "NLP / AI语言学", ko: "NLP / AI언어학" },
    year: 2024,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003076811",
  },
  {
    title: "신경망 언어 모델 구축을 통한 중국어 문두 다중논항 어순 수용성 예측 연구",
    author: "박정구 · 유수경 · 박민준 · 강병규",
    category: { zh: "NLP / AI语言学", ko: "NLP / AI언어학" },
    year: 2024,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003053750",
  },
  {
    title: "中韩民间“龙女报恩故事”的讲故事模式与文化意蕴",
    author: "刘兴娜 · 박명진",
    category: { zh: "文化콘텐츠", ko: "문화콘텐츠" },
    year: 2024,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003156763",
  },
  {
    title: "『說文解字翼徵』引詛楚文字形探析及釋字註評",
    author: "이춘영",
    category: { zh: "文字学", ko: "문자학" },
    year: 2024,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003167892",
  },
  {
    title: "论空间权力视角下≪金瓶梅词话≫与 ≪谢氏南征记≫的伦理意识",
    author: "程琪 · 朴明真",
    category: { zh: "文学", ko: "문학" },
    year: 2023,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002916142",
  },
  {
    title: "流媒體平台上以『西遊記』爲原型的IP產出與市場反應 - 以动漫『西行纪』为中心",
    author: "HAN YUXIANG · 박명진",
    category: { zh: "文化콘텐츠", ko: "문화콘텐츠" },
    year: 2022,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002886913",
  },
  {
    title: "《說文解字》刀部刑罰相關漢字考察",
    author: "왕위한 · 이춘영",
    category: { zh: "文字学", ko: "문자학" },
    year: 2021,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002706630",
  },
  {
    title: "공안협의소설과 문화콘텐츠— 포청천 캐릭터 콘텐츠 기획을 위한 프로젝트 기반 수업모델을 중심으로",
    author: "박명진",
    category: { zh: "文化콘텐츠", ko: "문화콘텐츠" },
    year: 2021,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002750407",
  },
  {
    title: "中国古代大同社会思想及其在小说中的体现",
    author: "HAN YUXIANG",
    category: { zh: "文学", ko: "문학" },
    year: 2020,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002652581",
  },
  {
    title: "『수호전』 양산박의 생성과 소멸의 공간적 의미 - 헤테로토피아(Heterotopia)적 특성을 중심으로",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2020,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002677909",
  },
  {
    title: "『鏡花緣』의 유토피아와 혁신사상",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2018,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002432725",
  },
  {
    title: "中･韩･日≪三国演义≫文化产品初探",
    author: "HAN YUXIANG",
    category: { zh: "文化콘텐츠", ko: "문화콘텐츠" },
    year: 2018,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002377567",
  },
  {
    title: "『聶隱娘』·『俠女』의 원천소스 발굴과 스토리텔링을 통한 문화콘텐츠화",
    author: "박명진",
    category: { zh: "文化콘텐츠", ko: "문화콘텐츠" },
    year: 2016,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002186358",
  },
  {
    title: "『海公大紅袍全傳』의 題材類型: 人物傳記와 政治小說의 결합",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2015,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002097415",
  },
  {
    title: "≪淸風閘≫에 나타난 ‘世情’ 文化",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2014,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002020814",
  },
  {
    title: "≪淸風閘≫의 ‘公案―世情’ 題材類型 분석",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2014,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002012297",
  },
  {
    title: "≪五鼠鬧東京≫의 소설유형 분석 － 包公文學 속 神魔小說",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2013,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001955744",
  },
  {
    title: "≪龍圖耳錄≫의 제재유형 분석",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2013,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001797784",
  },
  {
    title: "≪龍圖耳錄≫의 소설화 과정과 창작 특징",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2012,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001733375",
  },
  {
    title: "日帝强占期 中國語 敎材에 나타나는 介詞 硏究",
    author: "최환 · 신미섭",
    category: { zh: "文献学", ko: "문헌학" },
    year: 2012,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001693216",
  },
  {
    title: "试析张爱玲自传体小说三部曲 ≪雷峰塔≫≪易经≫及≪小团圆≫",
    author: "박운석",
    category: { zh: "文学", ko: "문학" },
    year: 2012,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001693227",
  },
  {
    title: "≪杜騙新書≫의 제재 유형과 저널리즘적 글쓰기",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2011,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001620565",
  },
  {
    title: "《夷堅志》 公案小說의 몇 가지 유형",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2010,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001485479",
  },
  {
    title: "중국 法醫學書 ≪洗寃集錄≫과 公案小說의 창작",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2009,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001406161",
  },
  {
    title: "《諸司公案》의《疑獄集》ㆍ《折獄龜鑑》受容樣相",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2008,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001306384",
  },
  {
    title: "明代 公案小說과 朝鮮時代 訟事小說에 나타난 法文化",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2007,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001059294",
  },
  {
    title: "《聊齋志異》公案小說",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2006,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001017647",
  },
  {
    title: "我的古典小说研究",
    author: "周先慎",
    category: { zh: "文学", ko: "문학" },
    year: 2008,
    link: "https://ccj.pku.edu.cn/article/info?aid=271011984",
  },
  {
    title: "《聊斋志异》：继承与总结",
    author: "周先慎",
    category: { zh: "文学", ko: "문학" },
    year: 1995,
    link: "https://www.icourse163.org/course/ZZTI-1001794013",
  },
  {
    title: "明代 白話 短篇 公案小說의 창작과 간행",
    author: "박명진",
    category: { zh: "文学", ko: "문학" },
    year: 2006,
    link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART000966020",
  },
];

const societies = [
  {
    name: "영남중국어문학회",
    url: "https://clsyn.jams.or.kr/",
    noteZh: "영남대학교와 밀접한 대표 학会. 학술지 <중국어문학> 및 온라인 논문투고 시스템 제공.",
    noteKo: "영남대와 밀접한 대표 학회. 학술지 <중국어문학>과 온라인 논문투고 시스템 제공.",
  },
  {
    name: "동아인문학회",
    url: "https://mosan.or.kr/",
    noteZh: "东亚人文学会官网，可查看论文搜索、投稿规定与在线投稿入口。",
    noteKo: "논문검색, 투고규정, 온라인 논문투고 기능을 제공하는 학회 사이트.",
  },
  {
    name: "영남중국어문학회 JAMS",
    url: "https://clsyn.jams.or.kr/",
    noteZh: "JAMS 投稿/审稿系统入口，适合直接放在投稿相关板块。",
    noteKo: "JAMS 투고/심사 시스템 바로가기.",
  },
  {
    name: "동아인문학회 JAMS/학회정보",
    url: "https://mosan.jams.or.kr/",
    noteZh: "学会业务、国际学术大会、学术期刊信息可在此查看。",
    noteKo: "학회 주요사업, 국제학술대회, 학술지 정보를 확인할 수 있음.",
  },
];

const templateItems = [
  {
    type: { zh: "硕士论文模板", ko: "석사논문 템플릿" },
    note: { zh: "暂未上传", ko: "아직 업로드되지 않음" },
    url: "#",
  },
  {
    type: { zh: "博士论文模板", ko: "박사논문 템플릿" },
    note: { zh: "暂未上传", ko: "아직 업로드되지 않음" },
    url: "#",
  },
  {
    type: { zh: "期刊论文投稿规定：영남중국어문학회", ko: "학술지 투고규정: 영남중국어문학회" },
    note: { zh: "建议直接链接学会官网 / JAMS 投稿页面。", ko: "학회 홈페이지/JAMS 투고 페이지로 직접 연결 권장." },
    url: "https://clsyn.jams.or.kr/",
  },
  {
    type: { zh: "期刊论文投稿规定：동아인문학회", ko: "학술지 투고규정: 동아인문학회" },
    note: { zh: "建议使用韩语检索与官网规则页。", ko: "한국어 검색과 공식 규정 페이지 활용 권장." },
    url: "https://mosan.or.kr/",
  },
  {
    type: { zh: "Hancom 官方下载 / 试用", ko: "한컴 공식 다운로드 / 체험" },
    note: { zh: "仅放官方入口，不放非官方网盘分发链接。", ko: "비공식 공유 링크 대신 공식 다운로드/체험 링크만 수록." },
    url: "https://www.hancom.com/",
  },
  {
    type: { zh: "Hancom Docs / 在线编辑", ko: "한컴독스 / 웹 편집" },
    note: { zh: "适合临时查看和编辑 HWP。", ko: "HWP 문서를 임시로 열람·편집할 때 유용." },
    url: "https://www.hancomdocs.com/",
  },
  {
    type: { zh: "Hancom 官方查看器", ko: "한컴 공식 뷰어" },
    note: { zh: "只读查看 HWP/PDF 等文件。", ko: "HWP/PDF 등 파일을 읽기 전용으로 확인 가능." },
    url: "https://www.hancom.com/downLoad.downPU.do?mcd=002",
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
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 24px" },
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
  nav: { display: "flex", gap: "18px", alignItems: "center", flexWrap: "wrap", fontSize: "14px" },
  navLink: { color: "#4b5563", textDecoration: "none" },
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
  hero: { padding: "56px 0 28px" },
  heroGrid: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px", alignItems: "center" },
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
  heroTitle: { fontSize: "48px", lineHeight: 1.15, margin: "0 0 18px", fontWeight: 700, letterSpacing: "-0.02em" },
  heroDesc: { fontSize: "17px", lineHeight: 1.9, color: "#4b5563", maxWidth: "760px", marginBottom: "22px" },
  btnRow: { display: "flex", gap: "12px", flexWrap: "wrap" },
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
  statGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" },
  statCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "22px",
    padding: "22px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
  },
  section: { marginTop: "42px" },
  sectionHeader: { marginBottom: "18px" },
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
  sectionDesc: { color: "#4b5563", lineHeight: 1.9, maxWidth: "840px" },
  subTitle: { display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", fontWeight: 600, margin: "22px 0 14px" },
  cardGrid5: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" },
  cardGrid4: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" },
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
  input: { border: "none", outline: "none", width: "100%", fontSize: "14px", background: "transparent" },
  chipRow: { display: "flex", gap: "8px", flexWrap: "wrap" },
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
  tableWrap: { overflowX: "auto", border: "1px solid #e5e7eb", borderRadius: "18px" },
  table: { width: "100%", borderCollapse: "collapse", minWidth: "980px" },
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
  infoGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginTop: "22px" },
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

function CardLink({ item, lang }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" style={styles.linkCard}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={styles.tag}>{item.tag}</span>
        <ExternalLink size={16} color="#6b7280" />
      </div>
      <div style={{ fontSize: "16px", fontWeight: 600, marginTop: "4px" }}>{item.name}</div>
      <div style={{ fontSize: "13px", color: "#4b5563", marginTop: "10px", lineHeight: 1.7 }}>
        {lang === "zh" ? item.descZh : item.descKo}
      </div>
    </a>
  );
}

export default function App() {
  const [lang, setLang] = useState("zh");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const t = content[lang];
  const [category, setCategory] = useState(content.zh.all);

  useEffect(() => {
    setCategory(content[lang].all);
  }, [lang]);

  const categoryOptions = [t.all, t.literature, t.linguistics, t.paleography, t.philology, t.nlp, t.contentTag];

  const sortedPapers = useMemo(() => {
    return [...paperData].sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title, lang));
  }, [lang]);

  const filteredPapers = useMemo(() => {
    return sortedPapers.filter((paper) => {
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
  }, [sortedPapers, lang, category, query, t.all]);

  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(filteredPapers.length / pageSize));

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages));
  }, [totalPages]);

  const visiblePapers = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredPapers.slice(start, start + pageSize);
  }, [filteredPapers, currentPage]);

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
              <a href="#societies" style={styles.navLink}>{t.navSocieties}</a>
              <a href="#templates" style={styles.navLink}>{t.navTemplates}</a>
              <a href="#about" style={styles.navLink}>{t.navAbout}</a>
            </nav>
            <button
              style={styles.langBtn}
              onClick={() => {
                const next = lang === "zh" ? "ko" : "zh";
                setLang(next);
                setQuery("");
                setCurrentPage(1);
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
              <div style={styles.badge}><Sparkles size={16} />{t.heroBadge}</div>
              <h1 style={styles.heroTitle}>{t.heroTitle1}<br />{t.heroTitle2}</h1>
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
                { label: "KCI", value: `${paperData.length}+`, icon: FileText },
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
            <div style={styles.sectionTitleBadge}><Bookmark size={16} />{t.toolsTitle}</div>
            <div style={styles.sectionDesc}>{t.toolsDesc}</div>
          </div>

          <div style={styles.subTitle}><Sparkles size={20} />{t.aiTools}</div>
          <div style={styles.cardGrid5}>
            {aiTools.map((item) => <CardLink key={item.name} item={item} lang={lang} />)}
          </div>

          <div style={styles.subTitle}><Library size={20} />{t.dbTools}</div>
          <div style={styles.cardGrid4}>
            {resourceTools.map((item) => <CardLink key={item.name} item={item} lang={lang} />)}
          </div>
        </section>

        <section id="papers" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleBadge}><FileText size={16} />{t.papersTitle}</div>
            <div style={styles.sectionDesc}>{t.papersDesc}</div>
          </div>

          <div style={styles.paperWrap}>
            <div style={styles.filterBar}>
              <div style={styles.searchBox}>
                <Search size={16} color="#6b7280" />
                <input
                  style={styles.input}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder={t.searchPlaceholder}
                />
              </div>
              <div id="categories" style={styles.chipRow}>
                {categoryOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setCategory(item);
                      setCurrentPage(1);
                    }}
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
                  {visiblePapers.map((paper) => (
                    <tr key={`${paper.title}-${paper.year}`}>
                      <td style={styles.td}>{paper.title}</td>
                      <td style={styles.td}>{paper.author}</td>
                      <td style={styles.td}><span style={styles.miniTag}>{paper.category[lang]}</span></td>
                      <td style={styles.td}>{paper.year}</td>
                      <td style={styles.td}>
                        <a href={paper.link} target="_blank" rel="noreferrer" style={{ color: "#111827", textDecoration: "underline" }}>
                          {t.view}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "13px", color: "#6b7280" }}>
                {filteredPapers.length} records · Page {currentPage} / {totalPages}
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  style={{ ...styles.chip, opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
                >
                  {t.prev}
                </button>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  style={{ ...styles.chip, opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
                >
                  {t.next}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="societies" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleBadge}><Building2 size={16} />{t.societiesTitle}</div>
            <div style={styles.sectionDesc}>{t.societiesDesc}</div>
          </div>
          <div style={styles.cardGrid4}>
            {societies.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noreferrer" style={styles.linkCard}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={styles.tag}>Society</span>
                  <ExternalLink size={16} color="#6b7280" />
                </div>
                <div style={{ fontSize: "16px", fontWeight: 600, marginTop: "4px" }}>{item.name}</div>
                <div style={{ fontSize: "14px", color: "#4b5563", marginTop: "10px", lineHeight: 1.8 }}>
                  {lang === "zh" ? item.noteZh : item.noteKo}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="templates" style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleBadge}><Download size={16} />{t.templatesTitle}</div>
            <div style={styles.sectionDesc}>{t.templatesDesc}</div>
          </div>
          <div style={styles.paperWrap}>
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>{t.typeCol}</th>
                    <th style={styles.th}>{t.noteCol}</th>
                    <th style={styles.th}>{t.linkCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {templateItems.map((item) => (
                    <tr key={item.type.zh}>
                      <td style={styles.td}>{item.type[lang]}</td>
                      <td style={styles.td}>{item.note[lang]}</td>
                      <td style={styles.td}>
                        <a href={item.url} target="_blank" rel="noreferrer" style={{ color: "#111827", textDecoration: "underline" }}>
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
          <div style={styles.sectionTitleBadge}><GraduationCap size={16} />{t.aboutTitle}</div>
          <p style={{ color: "#4b5563", lineHeight: 2, marginTop: "10px" }}>{t.aboutDesc}</p>
        </section>
      </main>
    </div>
  );
}
