import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const mentorSeed = [
  {
    id: 'm1',
    name: '林若涵',
    age: 38,
    gender: '女性',
    company: '塑新控股',
    division: '數位轉型事業部',
    department: '產品策略部',
    role: '資深產品經理',
    seniority: 12,
    location: '台北總部',
    avatar: 'RH',
    skills: ['產品策略', '跨部門溝通', '敏捷開發'],
    interests: ['展覽', '咖啡', '瑜伽'],
    topics: ['職涯發展', '專業技能', '跨部門交流'],
    intro: '擅長把模糊需求變成可落地的產品方向，也喜歡陪新人梳理職涯選擇。',
    canMentor: true,
    match: 96,
    availability: '週二下午、週五午餐',
    methods: ['線上', '午餐交流'],
    highlights: ['帶領內部平台從 0 到 1', '跨三個事業部推動數位流程改造'],
    experiences: ['產品 Roadmap 規劃', '利害關係人溝通', '從工程轉產品的路徑'],
  },
  {
    id: 'm2',
    name: '陳柏宇',
    age: 45,
    gender: '男性',
    company: '塑新控股',
    division: '製造營運事業部',
    department: '智慧製造部',
    role: '協理',
    seniority: 18,
    location: '台中廠',
    avatar: 'BY',
    skills: ['製程改善', '領導管理', '智慧製造'],
    interests: ['登山', '攝影', '棒球'],
    topics: ['領導管理', '跨部門交流', '專業技能'],
    intro: '相信好的管理不是控制，而是讓團隊看見共同方向。',
    canMentor: true,
    match: 92,
    availability: '週三上午、週四下午',
    methods: ['實體', '線上'],
    highlights: ['導入智慧製造看板', '培育 20 位以上主管職人才'],
    experiences: ['一線主管轉管理職', '製造現場溝通', '跨廠區協作'],
  },
  {
    id: 'm3',
    name: '吳品萱',
    age: 33,
    gender: '女性',
    company: '塑新控股',
    division: '永續發展中心',
    department: 'ESG 策略部',
    role: '永續專案主任',
    seniority: 8,
    location: '高雄辦公室',
    avatar: 'PX',
    skills: ['ESG', '專案管理', '簡報溝通'],
    interests: ['閱讀', '料理', '淨灘'],
    topics: ['專業技能', '研究所／進修', '工作生活平衡'],
    intro: '從工程背景走到永續策略，樂於分享跨領域轉換與進修經驗。',
    canMentor: true,
    match: 89,
    availability: '週一晚間、週五下午',
    methods: ['線上', '文字訊息'],
    highlights: ['主導年度永續報告書', '完成在職研究所進修'],
    experiences: ['跨領域轉職', '永續職能建立', '研究所申請準備'],
  },
  {
    id: 'm4',
    name: '張庭安',
    age: 29,
    gender: '女性',
    company: '塑新控股',
    division: '人資暨文化處',
    department: '人才發展部',
    role: '人才發展專員',
    seniority: 5,
    location: '台北總部',
    avatar: 'TA',
    skills: ['職涯諮詢', '學習設計', '活動企劃'],
    interests: ['音樂祭', '桌遊', '寫作'],
    topics: ['職涯發展', '工作生活平衡', '跨部門交流'],
    intro: '最喜歡把人與人連起來，讓每一次交流都變成新的可能。',
    canMentor: true,
    match: 88,
    availability: '週二午餐、週四晚間',
    methods: ['午餐交流', '文字訊息'],
    highlights: ['設計新人 Onboarding Journey', '策劃內部學習社群'],
    experiences: ['自我探索工具', '職涯訪談', '活動設計'],
  },
  {
    id: 'm5',
    name: '黃冠廷',
    age: 41,
    gender: '男性',
    company: '塑新控股',
    division: '財務投資中心',
    department: '投資管理部',
    role: '投資經理',
    seniority: 15,
    location: '台北總部',
    avatar: 'GT',
    skills: ['理財規劃', '財務分析', '策略投資'],
    interests: ['慢跑', '電影', '指數投資'],
    topics: ['理財規劃', '職涯發展', '專業技能'],
    intro: '用簡單的語言聊財務，幫你建立長期且安心的規劃方式。',
    canMentor: true,
    match: 86,
    availability: '週三午餐、週五上午',
    methods: ['線上', '午餐交流'],
    highlights: ['參與海外投資案評估', '內部財務課程講師'],
    experiences: ['個人理財入門', '財務模型', '投資職涯'],
  },
  {
    id: 'm6',
    name: '鄭雅琪',
    age: 36,
    gender: '女性',
    company: '塑新控股',
    division: '行銷品牌中心',
    department: '品牌溝通部',
    role: '品牌副理',
    seniority: 10,
    location: '台北總部',
    avatar: 'YQ',
    skills: ['品牌策略', '內容企劃', '故事敘事'],
    interests: ['設計雜誌', '插花', '旅行'],
    topics: ['專業技能', '跨部門交流', '職涯發展'],
    intro: '喜歡用清楚又有溫度的方式，讓複雜的企業故事被看見。',
    canMentor: true,
    match: 84,
    availability: '週一下午、週四午餐',
    methods: ['實體', '文字訊息'],
    highlights: ['品牌識別更新專案', '年度企業形象影片企劃'],
    experiences: ['內容策略', '品牌轉型', '跨供應商協作'],
  },
  {
    id: 'm7',
    name: '許哲維',
    age: 31,
    gender: '男性',
    company: '塑新控股',
    division: '資訊服務處',
    department: '資料平台部',
    role: '資料工程師',
    seniority: 7,
    location: '新竹辦公室',
    avatar: 'ZW',
    skills: ['資料工程', 'Python', '自動化'],
    interests: ['單車', '科幻小說', '露營'],
    topics: ['專業技能', '研究所／進修', '跨部門交流'],
    intro: '從營運分析轉到資料工程，願意分享技術轉職與自學節奏。',
    canMentor: true,
    match: 82,
    availability: '週三晚間、週五下午',
    methods: ['線上', '文字訊息'],
    highlights: ['建立資料湖流程', '自學完成後端與雲端證照'],
    experiences: ['技術學習地圖', '資料職涯', '自動化工具'],
  },
  {
    id: 'm8',
    name: '劉怡君',
    age: 48,
    gender: '女性',
    company: '塑新控股',
    division: '法務稽核中心',
    department: '法遵部',
    role: '法遵長',
    seniority: 22,
    location: '台北總部',
    avatar: 'YJ',
    skills: ['風險管理', '談判溝通', '領導管理'],
    interests: ['古典樂', '園藝', '散步'],
    topics: ['領導管理', '職涯發展', '工作生活平衡'],
    intro: '職涯很長，重要的是建立判斷力，也保留能好好生活的力氣。',
    canMentor: true,
    match: 80,
    availability: '週二上午、週四下午',
    methods: ['實體', '線上'],
    highlights: ['建立集團法遵制度', '帶領高壓專案團隊'],
    experiences: ['高階溝通', '女性領導', '壓力管理'],
  },
  {
    id: 'm9',
    name: '周明翰',
    age: 27,
    gender: '男性',
    company: '塑新控股',
    division: '供應鏈事業部',
    department: '採購管理部',
    role: '採購專員',
    seniority: 3,
    location: '台南廠',
    avatar: 'MH',
    skills: ['供應商管理', '談判', '新人適應'],
    interests: ['籃球', 'Podcast', '城市散步'],
    topics: ['職涯發展', '跨部門交流', '工作生活平衡'],
    intro: '剛走過新人迷惘期，知道那種卡住的感覺，也願意一起拆解。',
    canMentor: true,
    match: 78,
    availability: '週一午餐、週三晚間',
    methods: ['文字訊息', '午餐交流'],
    highlights: ['新人代表分享講者', '跨廠採購流程改善'],
    experiences: ['新人適應', '向上溝通', '採購入門'],
  },
  {
    id: 'm10',
    name: '蔡孟霖',
    age: 39,
    gender: '男性',
    company: '塑新控股',
    division: '客戶成功中心',
    department: '企業客戶部',
    role: '客戶成功總監',
    seniority: 14,
    location: '台北總部',
    avatar: 'ML',
    skills: ['客戶經營', '簡報提案', '團隊管理'],
    interests: ['烘豆', '健身', '商業傳記'],
    topics: ['領導管理', '專業技能', '職涯發展'],
    intro: '擅長從客戶視角反推策略，協助夥伴建立影響力與表達力。',
    canMentor: true,
    match: 76,
    availability: '週二晚間、週五午餐',
    methods: ['線上', '實體'],
    highlights: ['建立客戶成功方法論', '帶領業務與產品共同成長'],
    experiences: ['商務簡報', '客戶溝通', '管理職轉換'],
  },
]

const communitySeed = [
  {
    id: 'c1',
    name: '新人職涯探索社群',
    category: '職涯',
    intro: '一起把第一份工作裡的疑問攤開來聊，從一次交流開始，遇見新的職涯可能。',
    members: 238,
    tags: ['新人', '職涯探索', '跨部門'],
    posts: [
      { id: 'p1', author: '張庭安', meta: '人才發展部', time: '今天 10:20', content: '你最近在工作裡最想突破的是什麼？歡迎用一句話留言，我們週五午餐交流會一起聊。', likes: 34, comments: 12 },
      { id: 'p2', author: '周明翰', meta: '採購專員', time: '昨天 18:05', content: '新人期最有幫助的是找到一位可以問笨問題的人，推薦大家主動約一次 30 分鐘咖啡聊聊。', likes: 28, comments: 8 },
    ],
  },
  {
    id: 'c2',
    name: '理財交流社群',
    category: '興趣',
    intro: '用簡單、長期、可持續的方式討論理財，不追求一夜致富，只追求更安心的選擇。',
    members: 186,
    tags: ['理財規劃', '投資', '生活品質'],
    posts: [
      { id: 'p3', author: '黃冠廷', meta: '投資管理部', time: '今天 09:12', content: '本週分享主題：新鮮人如何建立第一版現金流表。會附上簡單模板。', likes: 46, comments: 15 },
    ],
  },
  {
    id: 'c3',
    name: '專案管理社群',
    category: '工作技能',
    intro: '分享會議、時程、風險與跨部門協作的實戰方法，讓專案不只靠意志力推動。',
    members: 312,
    tags: ['專案管理', '溝通', 'PM'],
    posts: [
      { id: 'p4', author: '林若涵', meta: '產品策略部', time: '週一 14:20', content: '推薦大家在專案啟動前先寫一頁 Project Brief，能少掉很多後面的誤會。', likes: 63, comments: 21 },
    ],
  },
  {
    id: 'c4',
    name: '跨部門交流社群',
    category: '職涯',
    intro: '讓經驗不只停留在部門裡，而是流動成彼此的力量。',
    members: 421,
    tags: ['跨部門', '交流', '組織理解'],
    posts: [
      { id: 'p5', author: '陳柏宇', meta: '智慧製造部', time: '週二 11:30', content: '這週開放製造現場導覽名額 12 位，歡迎想了解供應鏈與製程的夥伴報名。', likes: 71, comments: 26 },
    ],
  },
  {
    id: 'c5',
    name: '女性成長社群',
    category: '職涯',
    intro: '討論職涯、領導、生活與自我照顧，在工作裡長出自己的節奏。',
    members: 204,
    tags: ['女性成長', '領導', '工作生活平衡'],
    posts: [
      { id: 'p6', author: '劉怡君', meta: '法遵長', time: '週三 16:40', content: '下次聚會想聊：如何在高壓職務裡維持界線感。歡迎提出你想問的問題。', likes: 58, comments: 18 },
    ],
  },
  {
    id: 'c6',
    name: '研究所與進修社群',
    category: '職涯',
    intro: '給正在考慮在職進修、轉領域學習或申請研究所的你。',
    members: 149,
    tags: ['研究所', '進修', '自學'],
    posts: [
      { id: 'p7', author: '吳品萱', meta: 'ESG 策略部', time: '週四 20:10', content: '在職研究所最難的是時間配置，分享我當時的每週讀書節奏給大家參考。', likes: 37, comments: 11 },
    ],
  },
  {
    id: 'c7',
    name: 'ESG 與永續社群',
    category: '工作技能',
    intro: '從政策、企業策略到日常行動，探索永續如何真正進入工作現場。',
    members: 173,
    tags: ['ESG', '永續', '企業責任'],
    posts: [
      { id: 'p8', author: '吳品萱', meta: '永續專案主任', time: '昨天 12:15', content: '下週會整理一份初學者 ESG 字彙包，歡迎補充你常看到但不確定意思的詞。', likes: 42, comments: 14 },
    ],
  },
  {
    id: 'c8',
    name: '數位轉型社群',
    category: '工作技能',
    intro: '討論 AI、自動化、資料平台與流程改造，讓工具變成真正改善工作的力量。',
    members: 267,
    tags: ['數位轉型', 'AI', '自動化'],
    posts: [
      { id: 'p9', author: '許哲維', meta: '資料平台部', time: '今天 08:45', content: '整理了 5 個部門可先嘗試的自動化場景，下午會放在社群檔案區。', likes: 54, comments: 17 },
    ],
  },
]

const bulletinSeed = [
  {
    id: 'b1',
    type: '系統更新',
    title: '聊天室與社群首頁改版更新',
    date: '2026/07/23',
    owner: '平台管理小組',
    summary: '本次更新將首頁調整為公布欄，並新增聊天室搜尋邀請、創建社群與平台規範頁，讓資訊發布與同仁交流更集中。',
    body: [
      '首頁已由推薦頁調整為全公司公布欄，集中呈現平台更新、重要公告與社群精選內容。',
      '聊天室頁調整為一對一交流入口，可搜尋員工姓名或員工編號並發送交流邀請。',
      '社群頁新增創建社群功能，社群分類維持工作技能、職涯、興趣三大類，方便後續整理與管理。',
      '新增平台規範頁，說明聊天室、社群與資料使用原則，讓交流更清楚也更安心。',
    ],
    tags: ['改版更新', '聊天室', '社群'],
    cta: '查看完整內文',
  },
  {
    id: 'b2',
    type: '功能說明',
    title: '聊天室搜尋邀請功能更新',
    date: '2026/07/25',
    owner: '平台管理小組',
    summary: '聊天室新增員工搜尋入口，可用姓名、部門、職位或員工編號找到同仁並發送一對一交流邀請。',
    body: [
      '搜尋框支援輸入同仁姓名、員工編號、部門或職位。',
      '找到同仁後可直接發送交流邀請，對方接受後會開啟一對一聊天室。',
      '一對一聊天室仍須遵守平台規範，不得傳送企業機密、個人敏感資料或私人交易內容。',
    ],
    tags: ['聊天室', '使用說明', '資訊安全'],
    cta: '查看完整內文',
  },
  {
    id: 'b3',
    type: '社群精選',
    title: '新人職涯探索社群：本週熱門提問',
    date: '2026/07/26',
    owner: '人才發展部',
    summary: '你最近在工作裡最想突破的是什麼？社群將整理大家的回覆，轉成下週午餐交流題綱。',
    body: [
      '新人職涯探索社群本週最熱門的討論是：你最近在工作裡最想突破的是什麼？',
      '常見回覆包含跨部門溝通、會議表達、時間安排與不熟悉公司資源。',
      '社群管理者會將回覆整理為討論題綱，提供後續社群交流使用。',
    ],
    tags: ['職涯', '新人', '社群討論'],
    cta: '查看完整內文',
  },
]

const defaultProfile = {
  name: '塑寶',
  email: 'subao',
  password: 'demo123',
  age: '28',
  gender: '',
  company: '塑新控股',
  division: '數位轉型事業部',
  department: '產品體驗部',
  role: '產品企劃',
  seniority: '3',
  location: '台北總部',
  canMentor: false,
  seekingMentor: true,
  intro: '我塑一個正在尋找交流夥伴的人，想透過不同同仁的經驗看見更多工作改善與成長可能。',
  interests: '設計、閱讀、咖啡、城市散步',
  skills: '需求訪談、使用者研究、簡報整理',
  learning: '產品策略、專案管理、跨部門溝通',
  guidanceTypes: ['職涯發展', '專業技能', '跨部門交流'],
  mentorPrefs: ['跨部門', '年資較深', '不限'],
  availability: '平日午餐、週三晚間',
  privacy: {
    showAge: true,
    showSeniority: true,
  },
  favorites: [],
  joinedCommunities: ['c1', 'c4'],
}

const guidanceOptions = ['職涯發展', '專業技能', '跨部門交流', '領導管理', '工作生活平衡', '理財規劃', '研究所／進修', '其他']
const mentorPrefOptions = ['同部門', '跨部門', '年資較深', '年齡相近', '共同興趣', '互補專長', '不限']
const methodOptions = ['線上', '實體', '午餐交流', '文字訊息']
const incomingInviteSeed = [
  {
    id: 'invite-m4',
    mentorId: 'm4',
    topic: '資料分析入門與報表整理',
    message: '看到你也對資料整理和使用者研究有興趣，想邀請你聊聊怎麼把需求訪談結果轉成好讀的報表。',
    time: '今天 09:40',
  },
  {
    id: 'invite-m7',
    mentorId: 'm7',
    topic: '跨部門專案合作方式',
    message: '我們最近在整理跨部門專案的溝通模板，想聽聽你在產品企劃端的觀察。',
    time: '昨天 16:15',
  },
]
const demoStorageVersion = '2026-07-22-account-reset'

function storageGet(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback
  } catch {
    return fallback
  }
}

function normalizeProfile(profile) {
  const demoNames = ['Yahan', 'YA', '雅涵', 'Yahan Chang']
  const demoEmails = ['demo@yuanlai.com', 'subao@yuanlai.com']
  return {
    ...defaultProfile,
    ...profile,
    name: demoNames.includes(profile?.name) ? defaultProfile.name : (profile?.name || defaultProfile.name),
    email: demoEmails.includes(profile?.email) ? defaultProfile.email : (profile?.email || defaultProfile.email),
  }
}

function resetDemoStorageIfNeeded() {
  try {
    if (localStorage.getItem('yl_storage_version') === demoStorageVersion) return
    localStorage.setItem('yl_profile', JSON.stringify(defaultProfile))
    localStorage.setItem('yl_communities', JSON.stringify(communitySeed))
    localStorage.setItem('yl_conversations', JSON.stringify([]))
    localStorage.setItem('yl_active_chat', JSON.stringify(''))
    localStorage.setItem('yl_incoming_invites', JSON.stringify(incomingInviteSeed))
    localStorage.setItem('yl_storage_version', demoStorageVersion)
  } catch {
    // localStorage can be unavailable in restricted browser modes.
  }
}

function normalizeCommunityCategory(category) {
  if (['技能', '永續', '科技'].includes(category)) return '工作技能'
  if (['交流', '成長', '進修'].includes(category)) return '職涯'
  if (category === '生活') return '興趣'
  return ['工作技能', '職涯', '興趣'].includes(category) ? category : '職涯'
}

function normalizeCommunities(items) {
  return items.map((item) => ({ ...item, category: normalizeCommunityCategory(item.category) }))
}

function canShow(profile, key) {
  return profile.privacy?.[key] ?? true
}

function employeeCode(mentor) {
  return `FP-${mentor.id.replace('m', '').padStart(4, '0')}`
}

function App() {
  const [route, setRoute] = useState(() => location.hash.replace('#', '') || '/')
  const [profile, setProfile] = useState(() => {
    resetDemoStorageIfNeeded()
    return normalizeProfile(storageGet('yl_profile', defaultProfile))
  })
  const [isAuthed, setIsAuthed] = useState(() => storageGet('yl_authed', false))
  const [communities, setCommunities] = useState(() => normalizeCommunities(storageGet('yl_communities', communitySeed)))
  const [conversations, setConversations] = useState(() => storageGet('yl_conversations', []))
  const [activeChatId, setActiveChatId] = useState(() => storageGet('yl_active_chat', ''))
  const [incomingInvites, setIncomingInvites] = useState(() => storageGet('yl_incoming_invites', incomingInviteSeed))
  const [toast, setToast] = useState('')

  useEffect(() => {
    const onHash = () => setRoute(location.hash.replace('#', '') || '/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => localStorage.setItem('yl_profile', JSON.stringify(profile)), [profile])
  useEffect(() => localStorage.setItem('yl_authed', JSON.stringify(isAuthed)), [isAuthed])
  useEffect(() => localStorage.setItem('yl_communities', JSON.stringify(communities)), [communities])
  useEffect(() => localStorage.setItem('yl_conversations', JSON.stringify(conversations)), [conversations])
  useEffect(() => localStorage.setItem('yl_active_chat', JSON.stringify(activeChatId)), [activeChatId])
  useEffect(() => localStorage.setItem('yl_incoming_invites', JSON.stringify(incomingInvites)), [incomingInvites])

  const navigate = (path) => {
    location.hash = path
    setRoute(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const notify = (message) => {
    setToast(message)
    setTimeout(() => setToast(''), 2200)
  }

  const inviteMentor = (mentor) => {
    setConversations((prev) => {
      if (prev.some((conversation) => conversation.mentorId === mentor.id)) return prev
      return [
        {
          mentorId: mentor.id,
          status: '邀請已送出',
          messages: [
            {
              id: `msg-${Date.now()}`,
              from: 'mentor',
              text: `嗨，我是${mentor.name}。謝謝你的邀請，可以先跟我說說你最近最想討論的主題。`,
              time: '剛剛',
            },
          ],
        },
        ...prev,
      ]
    })
    setActiveChatId(mentor.id)
    notify(`已送出交流邀請給 ${mentor.name}，可以開始討論。`)
  }

  const sendChatMessage = (mentorId, text) => {
    const cleanText = text.trim()
    if (!cleanText) return
    const mentor = mentorSeed.find((item) => item.id === mentorId)
    setConversations((prev) => prev.map((conversation) => {
      if (conversation.mentorId !== mentorId) return conversation
      return {
        ...conversation,
        status: '討論中',
        messages: [
          ...conversation.messages,
          { id: `msg-${Date.now()}-user`, from: 'user', text: cleanText, time: '剛剛' },
          {
            id: `msg-${Date.now()}-mentor`,
            from: 'mentor',
            text: `收到，我們可以從「${cleanText.slice(0, 18)}」這個方向開始拆解。你也可以補充目前卡住的情境。`,
            time: mentor ? `${mentor.name} 已讀` : '同仁已讀',
          },
        ],
      }
    }))
  }

  const acceptIncomingInvite = (invite) => {
    const mentor = mentorSeed.find((item) => item.id === invite.mentorId)
    if (!mentor) return
    setConversations((prev) => {
      if (prev.some((conversation) => conversation.mentorId === mentor.id)) return prev
      return [
        {
          mentorId: mentor.id,
          status: '已接受邀請',
          messages: [
            {
              id: `msg-invite-${Date.now()}`,
              from: 'mentor',
              text: invite.message,
              time: invite.time,
            },
            {
              id: `msg-accept-${Date.now()}`,
              from: 'user',
              text: '嗨，我已接受邀請，很期待一起交流。',
              time: '剛剛',
            },
          ],
        },
        ...prev,
      ]
    })
    setIncomingInvites((prev) => prev.filter((item) => item.id !== invite.id))
    setActiveChatId(mentor.id)
    notify(`已接受 ${mentor.name} 的交流邀請。`)
  }

  const dismissIncomingInvite = (invite) => {
    const mentor = mentorSeed.find((item) => item.id === invite.mentorId)
    setIncomingInvites((prev) => prev.filter((item) => item.id !== invite.id))
    notify(`已拒絕${mentor ? ` ${mentor.name} 的` : ''}交流邀請。`)
  }

  const logout = () => {
    setIsAuthed(false)
    notify('已登出，期待下一次交流。')
    navigate('/')
  }

  const appState = { profile, setProfile, isAuthed, setIsAuthed, communities, setCommunities, conversations, activeChatId, setActiveChatId, incomingInvites, acceptIncomingInvite, dismissIncomingInvite, inviteMentor, sendChatMessage, navigate, notify, logout }
  const authedRoutes = ['/dashboard', '/mentors', '/chat', '/communities', '/rules', '/profile']
  const isBulletinDetail = route.startsWith('/bulletin/')
  const isMentorDetail = route.startsWith('/mentor/')
  const isCommunityDetail = route.startsWith('/community/')
  const showShell = isAuthed && (authedRoutes.includes(route) || isBulletinDetail || isMentorDetail || isCommunityDetail)

  return (
    <div className="min-h-screen bg-mist text-ink">
      {showShell && <AppNav route={route} navigate={navigate} logout={logout} />}
      <main className={showShell ? 'pb-24 pt-5 lg:pb-10 lg:pl-72 lg:pr-8' : ''}>
        <Router route={route} appState={appState} />
      </main>
      {showShell && <MobileTabs route={route} navigate={navigate} />}
      {toast && <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-navy px-5 py-3 text-sm text-white shadow-soft lg:bottom-8">{toast}</div>}
    </div>
  )
}

function Router({ route, appState }) {
  if (route === '/') return <Landing {...appState} />
  if (route === '/register') return <Login {...appState} />
  if (route === '/login') return <Login {...appState} />
  if (route === '/onboarding') return <ProfileBuilder {...appState} />
  if (route === '/dashboard') return <Dashboard {...appState} />
  if (route.startsWith('/bulletin/')) return <BulletinDetail id={route.split('/').pop()} {...appState} />
  if (route === '/mentors') return <Dashboard {...appState} />
  if (route.startsWith('/mentor/')) return <MentorDetail id={route.split('/').pop()} {...appState} />
  if (route === '/chat') return <ChatPage {...appState} />
  if (route === '/communities') return <CommunitiesPage {...appState} />
  if (route.startsWith('/community/')) return <CommunityDetail id={route.split('/').pop()} {...appState} />
  if (route === '/rules') return <RulesPage />
  if (route === '/profile') return <ProfilePage {...appState} />
  return <Landing {...appState} />
}

function Landing({ navigate }) {
  return (
    <div className="bg-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <button onClick={() => navigate('/')} className="text-left text-2xl font-black tracking-wide text-navy">緣來就塑你</button>
        <div className="flex gap-3">
          <button onClick={() => navigate('/login')} className="btn-ghost">登入平台</button>
        </div>
      </header>
      <section className="relative overflow-hidden border-y border-line bg-gradient-to-br from-white via-skysoft to-mist">
        <div className="absolute right-[-8rem] top-16 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-5rem] h-72 w-72 rounded-full bg-skysoft blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-24">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-navy shadow-card">台塑企業員工交流社群平台</p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">緣來就塑你</h1>
            <p className="mt-4 max-w-3xl text-2xl font-black leading-tight text-ink sm:text-3xl">找到適合的人、加入有興趣的社群，讓知識交流與合作自然發生。</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">緣來就「塑」你透過公布欄、聊天室、主題社群與個人檔案，協助員工跨越公司、部門、職位、世代與工作地點的限制，讓知識交流與合作自然發生。</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigate('/login')} className="btn-primary h-13 justify-center px-8 text-base">登入平台</button>
              <span className="flex items-center px-2 text-sm font-semibold text-slate-500">登入後再建立個人檔案</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="magazine-frame">
              <div className="hero-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">交流平台總覽</p>
                    <h2 className="mt-2 text-3xl font-black">4 個入口</h2>
                  </div>
                </div>
                <p className="mt-8 text-2xl font-bold leading-snug">從一次交流開始，遇見新的職涯可能。</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['公布欄', '聊天室', '社群', '規範'].map((tag) => <span key={tag} className="pill">{tag}</span>)}
                </div>
              </div>
              <div className="floating-note">登入平台 → 查看公布欄 → 搜尋同仁並開啟聊天室 → 加入或創建社群 → 延續請益與合作討論。</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Core Features</p>
          <h2 className="section-title">四個核心功能，讓交流從認識延伸到合作</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          <FeatureCard title="公布欄" text="集中呈現全公司公告、交流活動、社群精選與重要提醒。" />
          <FeatureCard title="聊天室" text="搜尋同仁姓名或員工編號，發送交流邀請並延續一對一討論。" />
          <FeatureCard title="社群" text="依工作專業、職涯經驗與生活興趣集中交流，累積熱門問題與工作案例。" />
          <FeatureCard title="規範" text="清楚說明聊天室、社群與個人資料的使用原則，讓交流更安心。" />
        </div>
      </section>
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">User Journey</p>
            <h2 className="section-title">從建立檔案到聊天室，讓交流自然延伸</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              ['01', '建立個人檔案', '填寫專長、興趣、交流需求與可分享內容。'],
              ['02', '查看公布欄', '掌握全公司公告、活動與熱門社群動態。'],
              ['03', '開啟聊天室', '搜尋同仁並發送交流邀請，延續一對一討論。'],
              ['04', '加入或創建社群', '沉澱熱門問題、工作案例與跨部門經驗。'],
            ].map(([step, title, text]) => (
              <article key={step} className="rounded-card border border-line bg-white p-5 shadow-card">
                <p className="text-4xl font-black text-blueprint">{step}</p>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, text }) {
  return (
    <article className="rounded-card border border-line bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-8 h-2 w-16 rounded-full bg-azure" />
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{text}</p>
    </article>
  )
}

function Register({ setProfile, setIsAuthed, navigate, notify }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(defaultProfile)
  const [errors, setErrors] = useState({})

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }))
  const toggleArray = (key, value) => setForm((prev) => ({ ...prev, [key]: prev[key].includes(value) ? prev[key].filter((item) => item !== value) : [...prev[key], value] }))

  const submit = () => {
    const next = {}
    ;['intro', 'interests', 'skills', 'learning', 'availability'].forEach((field) => {
      if (!form[field]) next[field] = '這個欄位需要填寫'
    })
    setErrors(next)
    if (Object.keys(next).length) return
    setProfile({ ...form, favorites: [], joinedCommunities: ['c1'] })
    setIsAuthed(true)
    notify('個人檔案建立完成，歡迎來到緣來就塑你。')
    navigate('/dashboard')
  }

  return (
    <AuthLayout title="建立個人檔案" subtitle="先讓平台認識你的專長、興趣、交流需求與可分享經驗，再開始參與聊天室與主題社群。">
      <div className="mb-7 flex gap-2">
        <span className={`step-dot ${step === 1 ? 'active' : ''}`}>1 公司匯入資料</span>
        <span className={`step-dot ${step === 2 ? 'active' : ''}`}>2 配對偏好</span>
      </div>
      {step === 1 ? (
        <div className="space-y-5">
          <div className="rounded-card bg-mist p-5">
            <h2 className="text-xl font-black text-ink">公司已匯入你的基本資料</h2>
            <p className="mt-2 leading-7 text-slate-600">以下資料由企業帳號與人資系統帶入，這裡只供確認。若資料有誤，請洽人資或系統管理單位更新。</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ReadOnlyField label="姓名" value={form.name} />
            <ReadOnlyField label="帳號" value={form.email} />
            <ReadOnlyField label="年齡" value={`${form.age} 歲`} />
            <ReadOnlyField label="性別" value={form.gender || '不透露'} />
            <ReadOnlyField label="所屬公司／事業部" value={form.division} />
            <ReadOnlyField label="部門" value={form.department} />
            <ReadOnlyField label="職位" value={form.role} />
            <ReadOnlyField label="年資" value={`${form.seniority} 年`} />
            <ReadOnlyField label="工作地點" value={form.location} />
          </div>
          <div className="md:col-span-2">
            <button className="btn-primary w-full justify-center" onClick={() => setStep(2)}>下一步，填寫交流偏好</button>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <Textarea label="我塑" value={form.intro} onChange={(v) => update('intro', v)} error={errors.intro} />
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="我的興趣：我喜歡討論的主題是" value={form.interests} onChange={(v) => update('interests', v)} error={errors.interests} />
            <Input label="我的專長：我可以分享的經驗是" value={form.skills} onChange={(v) => update('skills', v)} error={errors.skills} />
            <Input label="我想請益的主題：我最近想突破的是" value={form.learning} onChange={(v) => update('learning', v)} error={errors.learning} />
            <Input label="可聯繫時段" value={form.availability} onChange={(v) => update('availability', v)} error={errors.availability} />
          </div>
          <CheckGroup label="我希望獲得的指導類型" options={guidanceOptions} values={form.guidanceTypes} onToggle={(v) => toggleArray('guidanceTypes', v)} />
          <CheckGroup label="我期待遇見的同仁是" options={mentorPrefOptions} values={form.mentorPrefs} onToggle={(v) => toggleArray('mentorPrefs', v)} />
          <div className="grid gap-3 sm:grid-cols-2">
            <button className="btn-secondary justify-center" onClick={() => setStep(1)}>回上一步</button>
            <button className="btn-primary justify-center" onClick={submit}>完成個人檔案</button>
          </div>
        </div>
      )}
    </AuthLayout>
  )
}

function Login({ profile, setIsAuthed, navigate, notify }) {
  const [email, setEmail] = useState(profile.email)
  const [password, setPassword] = useState('demo123')
  const [error, setError] = useState('')
  const submit = () => {
    if (!email || !password) {
      setError('請輸入帳號與密碼')
      return
    }
    setIsAuthed(true)
    notify('登入成功，先建立你的個人檔案。')
    navigate('/onboarding')
  }
  return (
    <AuthLayout title="登入平台" subtitle="使用企業帳號登入後，再建立你的個人檔案與交流偏好。">
      <div className="space-y-4">
        <Input label="帳號" value={email} onChange={setEmail} />
        <Input label="密碼" type="password" value={password} onChange={setPassword} />
        {error && <p className="form-error">{error}</p>}
        <button className="btn-primary w-full justify-center" onClick={submit}>登入</button>
        <p className="text-center text-sm font-semibold text-slate-500">登入後會進入個人檔案建立流程。</p>
      </div>
    </AuthLayout>
  )
}

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-mist to-skysoft px-5 py-8">
      <button onClick={() => (location.hash = '/')} className="mx-auto mb-8 block max-w-4xl text-2xl font-black text-navy">緣來就塑你</button>
      <section className="mx-auto grid max-w-5xl overflow-hidden rounded-[28px] border border-white bg-white shadow-soft lg:grid-cols-[.8fr_1.2fr]">
        <div className="bg-navy p-8 text-white lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-skysoft">Employee Connection</p>
          <h1 className="mt-5 text-4xl font-black leading-tight">{title}</h1>
          <p className="mt-4 leading-7 text-slate-200">{subtitle}</p>
          <p className="mt-10 rounded-card bg-white/10 p-5 leading-7 text-slate-100">從公布欄、聊天室到主題社群，讓經驗在組織裡真正流動。</p>
        </div>
        <div className="p-6 sm:p-8 lg:p-10">{children}</div>
      </section>
    </div>
  )
}

function ProfileBuilder(props) {
  return <Register {...props} />
}

function Dashboard({ profile, navigate }) {
  return (
    <PageWrap>
      <PageTitle eyebrow="Bulletin" title={`Hi，${profile.name}！全公司公布欄`} text="集中查看平台公告、近期交流活動、社群精選與需要大家一起知道的重要資訊。" />
      <section className="rounded-[28px] bg-gradient-to-br from-white to-skysoft p-6 shadow-card lg:p-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Today</p>
            <h2 className="mt-2 text-3xl font-black">讓重要消息不被聊天訊息淹沒</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">公布欄作為全公司資訊入口，整理公告、活動、社群熱門議題與跨部門交流機會，讓同仁可以快速判斷哪些內容值得參與。</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <Info label="本週公告" value={`${bulletinSeed.length} 則`} />
            <Info label="熱門社群" value="新人、數位、跨部門" />
          </div>
        </div>
      </section>
      <section className="mt-6">
        <SectionHeader title="最新公告" />
        <div className="grid gap-5 lg:grid-cols-3">
          {bulletinSeed.map((item) => (
            <article key={item.id} className="rounded-card border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-start justify-between gap-3">
                <span className="pill-dark">{item.type}</span>
                <span className="text-sm font-bold text-slate-400">{item.date}</span>
              </div>
              <h3 className="mt-4 text-2xl font-black leading-tight">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">{item.owner}</p>
              <p className="mt-4 line-clamp-4 leading-7 text-slate-600">{item.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
              </div>
              <button className="btn-secondary mt-5 w-full justify-center" onClick={() => navigate(`/bulletin/${item.id}`)}>{item.cta}</button>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <DetailBlock title="熱門社群動態">
          <div className="space-y-3">
            {communitySeed.slice(0, 3).map((community) => (
              <button key={community.id} className="w-full rounded-card bg-mist p-4 text-left transition hover:bg-skysoft" onClick={() => navigate(`/community/${community.id}`)}>
                <p className="font-black text-ink">{community.name}</p>
                <p className="mt-1 text-sm text-slate-600">{community.posts[0]?.content}</p>
              </button>
            ))}
          </div>
        </DetailBlock>
      </section>
    </PageWrap>
  )
}

function BulletinDetail({ id, navigate }) {
  const item = bulletinSeed.find((entry) => entry.id === id) || bulletinSeed[0]
  return (
    <PageWrap>
      <button className="mb-5 text-sm font-bold text-navy hover:underline" onClick={() => navigate('/dashboard')}>返回公布欄</button>
      <article className="rounded-[28px] bg-white p-6 shadow-card lg:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <p className="eyebrow">{item.type}</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight">{item.title}</h1>
            <p className="mt-3 font-semibold text-slate-500">{item.owner} · {item.date}</p>
          </div>
          <span className="pill-dark w-fit">公布欄</span>
        </div>
        <p className="mt-6 rounded-card bg-mist p-5 text-lg font-semibold leading-8 text-slate-700">{item.summary}</p>
        <div className="mt-6 space-y-4 leading-8 text-slate-650">
          {item.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
        </div>
      </article>
    </PageWrap>
  )
}

function MentorDetail({ id, profile, setProfile, conversations, inviteMentor, sendChatMessage, navigate, notify }) {
  const mentor = mentorSeed.find((item) => item.id === id) || mentorSeed[0]
  const isFav = profile.favorites.includes(mentor.id)
  const conversation = conversations.find((item) => item.mentorId === mentor.id)
  const toggleFavorite = () => {
    setProfile((prev) => ({ ...prev, favorites: isFav ? prev.favorites.filter((item) => item !== mentor.id) : [...prev.favorites, mentor.id] }))
    notify(isFav ? '已取消收藏。' : '已收藏此同仁。')
  }
  return (
    <PageWrap>
      <button className="mb-5 text-sm font-bold text-navy hover:underline" onClick={() => navigate('/dashboard')}>返回公布欄</button>
      <section className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
        <aside className="rounded-[28px] border border-line bg-white p-6 shadow-card">
          <h1 className="text-4xl font-black">{mentor.name}</h1>
          <p className="mt-2 text-lg font-semibold text-slate-600">{mentor.department} · {mentor.role}</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <Info label="年資" value={`${mentor.seniority} 年`} />
            <Info label="工作地點" value={mentor.location} />
            <Info label="年齡" value={`${mentor.age} 歲`} />
            <Info label="契合度" value={`${mentor.match}%`} />
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <button className="btn-primary justify-center" onClick={() => inviteMentor(mentor)}>{conversation ? '已建立交流，繼續聊' : '邀請交流'}</button>
            <button className="btn-secondary justify-center" onClick={toggleFavorite}>{isFav ? '取消收藏' : '收藏此同仁'}</button>
          </div>
        </aside>
        <div className="space-y-5">
          {conversation && (
            <ChatPanel
              mentor={mentor}
              conversation={conversation}
              onSend={(text) => sendChatMessage(mentor.id, text)}
            />
          )}
          <DetailBlock title="個人簡介"><p>{mentor.intro}</p></DetailBlock>
          <DetailBlock title="專長領域"><TagList tags={mentor.skills} /></DetailBlock>
          <DetailBlock title="可分享的經驗"><TagList tags={mentor.experiences} /></DetailBlock>
          <DetailBlock title="可提供的分享與諮詢主題"><TagList tags={mentor.topics} /></DetailBlock>
          <DetailBlock title="過去經歷亮點"><ul className="space-y-2">{mentor.highlights.map((item) => <li key={item}>・{item}</li>)}</ul></DetailBlock>
          <DetailBlock title="興趣與生活面向"><TagList tags={mentor.interests} /></DetailBlock>
          <DetailBlock title="可交流時間"><p>{mentor.availability}，支援 {mentor.methods.join('、')}。</p></DetailBlock>
          <DetailBlock title="適合找他／她交流的情境">
            <div className="grid gap-3 sm:grid-cols-2">
              {['你想了解跨部門工作內容', '你想請益一項實務技能', '你想聽聽不同職涯路徑', '你想找同仁討論工作合作'].map((item) => <div key={item} className="rounded-card bg-mist p-4 font-semibold">{item}</div>)}
            </div>
          </DetailBlock>
        </div>
      </section>
    </PageWrap>
  )
}

function CommunitiesPage({ communities, setCommunities, profile, setProfile, navigate, notify }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [showCreate, setShowCreate] = useState(false)
  const categories = ['', ...new Set(communities.map((c) => c.category))]
  const filtered = communities.filter((c) => (!query || `${c.name}${c.intro}${c.tags.join('')}`.includes(query)) && (!category || c.category === category))
  return (
    <PageWrap>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <PageTitle eyebrow="Communities" title="主題社群" text="依專業工作、職涯經驗與生活興趣加入社群，讓知識整理、問題討論與同仁交流持續累積。" />
        <button className="btn-primary justify-center" onClick={() => setShowCreate(true)}>創建社群</button>
      </div>
      <div className="mb-6 mt-2 grid gap-3 rounded-card border border-line bg-white p-5 shadow-card md:grid-cols-[1fr_220px]">
        <Input label="搜尋社群" value={query} onChange={setQuery} dense />
        <Select label="主題分類" value={category} onChange={setCategory} options={categories} dense />
      </div>
      {filtered.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((community) => <CommunityCard key={community.id} community={community} navigate={navigate} profile={profile} setProfile={setProfile} notify={notify} />)}
        </div>
      ) : <EmptyState title="還沒有符合的社群" text="試著換一個關鍵字，或調整主題分類再看看。" />}
      {showCreate && <CreateCommunityModal onClose={() => setShowCreate(false)} setCommunities={setCommunities} notify={notify} />}
    </PageWrap>
  )
}

function CommunityDetail({ id, communities, setCommunities, profile, setProfile, navigate, notify }) {
  const community = communities.find((item) => item.id === id) || communities[0]
  const [content, setContent] = useState('')
  const joined = profile.joinedCommunities.includes(community.id)
  const toggleJoin = () => {
    setProfile((prev) => ({ ...prev, joinedCommunities: joined ? prev.joinedCommunities.filter((item) => item !== community.id) : [...prev.joinedCommunities, community.id] }))
    notify(joined ? '已退出社群。' : '已加入社群。')
  }
  const publish = () => {
    if (!content.trim()) {
      notify('先寫一點想分享的內容吧。')
      return
    }
    const post = { id: `p${Date.now()}`, author: profile.name, meta: profile.department || profile.role, time: '剛剛', content, likes: 0, comments: 0 }
    setCommunities((prev) => prev.map((item) => item.id === community.id ? { ...item, posts: [post, ...item.posts] } : item))
    setContent('')
    notify('貼文已發布。')
  }
  return (
    <PageWrap>
      <button className="mb-5 text-sm font-bold text-navy hover:underline" onClick={() => navigate('/communities')}>返回社群列表</button>
      <section className="rounded-[28px] bg-white p-6 shadow-card lg:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            <p className="eyebrow">{community.category}</p>
            <h1 className="mt-2 text-4xl font-black">{community.name}</h1>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">{community.intro}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="pill-dark">{community.members} 位成員</span>
              {community.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
            </div>
          </div>
          <button className={joined ? 'btn-secondary justify-center' : 'btn-primary justify-center'} onClick={toggleJoin}>{joined ? '退出社群' : '加入社群'}</button>
        </div>
      </section>
      <section className="mt-6 rounded-card border border-line bg-white p-5 shadow-card">
        <h2 className="mb-3 text-xl font-black">發布貼文</h2>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="分享一個最近的提問、觀察或想約大家討論的主題..." className="field min-h-28" />
        <div className="mt-3 flex justify-end"><button className="btn-primary" onClick={publish}>發布</button></div>
      </section>
      <section className="mt-6">
        <SectionHeader title="熱門貼文" />
        <div className="space-y-4">
          {community.posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>
    </PageWrap>
  )
}

function ChatPage({ conversations, activeChatId, setActiveChatId, sendChatMessage, incomingInvites, acceptIncomingInvite, dismissIncomingInvite, inviteMentor }) {
  const activeConversation = conversations.find((conversation) => conversation.mentorId === activeChatId) || conversations[0]
  const activeMentor = activeConversation ? mentorSeed.find((mentor) => mentor.id === activeConversation.mentorId) : null

  return (
    <PageWrap>
      <PageTitle eyebrow="Chat" title="聊天室" text="搜尋同仁姓名或員工編號，發送交流邀請；對方接受後，就能在這裡延續一對一討論。" />
      <EmployeeInviteSearch conversations={conversations} onInvite={inviteMentor} setActiveChatId={setActiveChatId} />
      <IncomingInvites invites={incomingInvites} onAccept={acceptIncomingInvite} onDismiss={dismissIncomingInvite} />
      {activeConversation && activeMentor ? (
        <section className="mt-6">
          <SectionHeader title="一對一交流" />
          <ChatPanel
            mentor={activeMentor}
            conversation={activeConversation}
            conversations={conversations}
            setActiveChatId={setActiveChatId}
            onSend={(text) => sendChatMessage(activeMentor.id, text)}
          />
        </section>
      ) : (
        <EmptyState title="尚未建立一對一聊天室" text="接受交流邀請後，一對一聊天室會出現在這裡。" />
      )}
      <section className="mt-8 rounded-card bg-white p-5 shadow-card">
        <h2 className="text-xl font-black">聊天室使用原則</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {['先搜尋同仁並發送交流邀請', '一對一聊天室適合延續具體交流', '不得商業推銷、私人交易或散播企業機密'].map((item) => <div key={item} className="rounded-card bg-mist p-4 font-bold text-navy">{item}</div>)}
        </div>
      </section>
    </PageWrap>
  )
}

function EmployeeInviteSearch({ conversations, onInvite, setActiveChatId }) {
  const [query, setQuery] = useState('')
  const cleanQuery = query.trim().toLowerCase()
  const results = cleanQuery
    ? mentorSeed.filter((mentor) => {
      const searchable = `${employeeCode(mentor)} ${mentor.name} ${mentor.department} ${mentor.role} ${mentor.skills.join(' ')}`.toLowerCase()
      return searchable.includes(cleanQuery)
    })
    : mentorSeed.slice(0, 4)

  return (
    <section className="rounded-[28px] border border-line bg-white p-5 shadow-card lg:p-6">
      <div>
        <h2 className="text-2xl font-black">搜尋同仁並邀請交流</h2>
        <p className="mt-2 text-slate-600">可輸入姓名、員工編號、部門或職位，找到想請益或交流的同仁。</p>
      </div>
      <input
        className="field mt-4"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="例如：林若涵、FP-0007、資料平台部、產品經理"
      />
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {results.length ? results.map((mentor) => {
          const hasConversation = conversations.some((conversation) => conversation.mentorId === mentor.id)
          return (
            <article key={mentor.id} className="rounded-card bg-mist p-4">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.16em] text-azure">{employeeCode(mentor)}</p>
                  <h3 className="mt-1 text-xl font-black">{mentor.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{mentor.department} · {mentor.role}</p>
                </div>
                <span className="pill whitespace-nowrap">{mentor.skills[0]}</span>
              </div>
              <p className="mt-3 line-clamp-2 leading-7 text-slate-650">{mentor.intro}</p>
              <button
                className="btn-primary mt-4 w-full justify-center"
                onClick={() => {
                  if (hasConversation) {
                    setActiveChatId(mentor.id)
                    return
                  }
                  onInvite(mentor)
                }}
              >
                {hasConversation ? '開啟聊天室' : '邀請交流'}
              </button>
            </article>
          )
        }) : <EmptyState title="找不到符合的同仁" text="請試試姓名、員工編號或部門關鍵字。" />}
      </div>
    </section>
  )
}

function IncomingInvites({ invites, onAccept, onDismiss }) {
  if (!invites.length) return null
  return (
    <section className="mb-6 rounded-card border border-line bg-white p-5 shadow-card">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Pending Invites</p>
          <h2 className="mt-1 text-2xl font-black">待確認的交流邀請</h2>
        </div>
        <span className="pill-dark w-fit">{invites.length} 則待回覆</span>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {invites.map((invite) => {
          const mentor = mentorSeed.find((item) => item.id === invite.mentorId)
          if (!mentor) return null
          return (
            <article key={invite.id} className="rounded-card bg-mist p-4">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-black text-ink">{mentor.name} 邀請你交流</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{mentor.department} · {mentor.role} · {invite.time}</p>
                </div>
                <span className="pill whitespace-nowrap">{invite.topic}</span>
              </div>
              <p className="mt-3 leading-7 text-slate-650">{invite.message}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <button className="btn-primary justify-center" onClick={() => onAccept(invite)}>接受並開啟聊天室</button>
                <button className="btn-secondary justify-center" onClick={() => onDismiss(invite)}>拒絕邀請</button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function ProfilePage({ profile, setProfile, communities, navigate, notify }) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState({ ...profile, privacy: { showAge: canShow(profile, 'showAge'), showSeniority: canShow(profile, 'showSeniority') } })
  const savedPosts = communities.flatMap((community) => community.posts.map((post) => ({ ...post, communityName: community.name, communityId: community.id }))).slice(0, 3)
  const joinedCommunities = communities.filter((community) => profile.joinedCommunities.includes(community.id))
  const save = () => {
    setProfile(draft)
    setEditing(false)
    notify('個人資料已更新。')
  }
  return (
    <PageWrap>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <PageTitle eyebrow="My Profile" title="我的檔案" text="整理你的專長、興趣、請益主題與可分享內容，讓同仁更容易在聊天室與社群中認識你。" />
        <button className="btn-primary justify-center" onClick={() => editing ? save() : setEditing(true)}>{editing ? '儲存個人資料' : '編輯個人資料'}</button>
      </div>
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <section className="rounded-[28px] bg-white p-6 shadow-card">
          {editing ? (
            <div className="mt-5 space-y-4">
              <Input label="姓名" value={draft.name} onChange={(v) => setDraft({ ...draft, name: v })} />
              <Input label="帳號" value={draft.email} onChange={(v) => setDraft({ ...draft, email: v })} />
              <Input label="部門" value={draft.department} onChange={(v) => setDraft({ ...draft, department: v })} />
              <Input label="職位" value={draft.role} onChange={(v) => setDraft({ ...draft, role: v })} />
              <Input label="年齡" value={draft.age} onChange={(v) => setDraft({ ...draft, age: v })} />
              <Input label="年資" value={draft.seniority} onChange={(v) => setDraft({ ...draft, seniority: v })} />
              <div className="rounded-card bg-mist p-4">
                <p className="mb-3 font-black text-navy">個人資訊顯示設定</p>
                <div className="space-y-3">
                  <Toggle label="在我的檔案顯示年齡" checked={canShow(draft, 'showAge')} onChange={(v) => setDraft({ ...draft, privacy: { ...draft.privacy, showAge: v } })} />
                  <Toggle label="在我的檔案顯示年資" checked={canShow(draft, 'showSeniority')} onChange={(v) => setDraft({ ...draft, privacy: { ...draft.privacy, showSeniority: v } })} />
                </div>
              </div>
            </div>
          ) : (
            <>
              <h1 className="mt-5 text-4xl font-black">{profile.name}</h1>
              <p className="mt-2 font-semibold text-slate-600">{profile.department} · {profile.role}</p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {canShow(profile, 'showAge') && <Info label="年齡" value={`${profile.age} 歲`} />}
                {canShow(profile, 'showSeniority') && <Info label="年資" value={`${profile.seniority} 年`} />}
                <Info label="地點" value={profile.location} />
              </div>
            </>
          )}
        </section>
        <section className="space-y-5">
          {editing ? (
            <div className="rounded-card bg-white p-5 shadow-card">
              <Textarea label="自我介紹" value={draft.intro} onChange={(v) => setDraft({ ...draft, intro: v })} />
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Input label="興趣" value={draft.interests} onChange={(v) => setDraft({ ...draft, interests: v })} />
                <Input label="專長" value={draft.skills} onChange={(v) => setDraft({ ...draft, skills: v })} />
                <Input label="想請益的主題" value={draft.learning} onChange={(v) => setDraft({ ...draft, learning: v })} />
                <Input label="可聯繫時段" value={draft.availability} onChange={(v) => setDraft({ ...draft, availability: v })} />
              </div>
            </div>
          ) : (
            <>
              <DetailBlock title="自我介紹"><p>{profile.intro}</p></DetailBlock>
              <DetailBlock title="興趣"><TagList tags={splitText(profile.interests)} /></DetailBlock>
              <DetailBlock title="專長"><TagList tags={splitText(profile.skills)} /></DetailBlock>
              <DetailBlock title="想請益的主題"><TagList tags={splitText(profile.learning)} /></DetailBlock>
              <DetailBlock title="交流偏好"><TagList tags={[...profile.guidanceTypes, ...profile.mentorPrefs]} /></DetailBlock>
            </>
          )}
        </section>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section>
          <SectionHeader title="已收藏的貼文" />
          {savedPosts.length ? <div className="grid gap-4">{savedPosts.map((post) => <MiniList key={`${post.communityId}-${post.id}`} title={post.content.slice(0, 28)} text={`${post.communityName} · ${post.author}`} onClick={() => navigate(`/community/${post.communityId}`)} />)}</div> : <EmptyState title="尚未收藏貼文" text="看到值得之後再看的社群貼文，就先收藏起來。" />}
        </section>
        <section>
          <SectionHeader title="已加入的社群" />
          {joinedCommunities.length ? <div className="grid gap-4">{joinedCommunities.map((community) => <MiniList key={community.id} title={community.name} text={`${community.members} 位成員 · ${community.tags.join('、')}`} onClick={() => navigate(`/community/${community.id}`)} />)}</div> : <EmptyState title="尚未加入社群" text="加入一個主題，讓交流自然開始。" />}
        </section>
      </div>
    </PageWrap>
  )
}

function RulesPage() {
  const rules = [
    {
      title: '交流目的',
      items: ['以知識交流、工作經驗分享、跨部門請益與社群討論為主。', '鼓勵具體提問、善意回覆與可被其他同仁參考的經驗整理。'],
    },
    {
      title: '聊天室使用',
      items: ['聊天室需先搜尋同仁並發送交流邀請。', '一對一聊天室適合延續邀請後的具體請益與合作討論。', '請避免張貼薪資、考績、健康、家庭或其他敏感個人資料。'],
    },
    {
      title: '社群管理',
      items: ['社群以工作技能、職涯、興趣三類為主，避免主題過度重複。', '創建社群後，請維持清楚簡介、適當標籤與友善討論氣氛。', '熱門問題可以整理成公告、活動或後續交流主題。'],
    },
    {
      title: '禁止事項',
      items: ['不得進行未經許可的商業推銷、投資招攬、借貸、兼職招募或私人交易。', '不得散播企業機密、未公開財務資訊、客戶資料或任何未經核准的內部文件。', '不得使用攻擊、歧視、騷擾或讓他人感到不舒服的文字。'],
    },
  ]
  return (
    <PageWrap>
      <PageTitle eyebrow="Guidelines" title="平台規範" text="讓交流保持開放、可信任，也讓每一位同仁都能安心提問、分享與參與社群。" />
      <section className="rounded-[28px] bg-white p-6 shadow-card lg:p-8">
        <h2 className="text-3xl font-black">共同使用原則</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">緣來就塑你是企業內部交流平台，內容應聚焦於職涯、工作技能、社群共學與跨部門合作。平台資料僅作為交流參考，不應直接作為績效評價或私人用途。</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {rules.map((group) => (
            <article key={group.title} className="rounded-card bg-mist p-5">
              <h3 className="text-xl font-black text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-3 leading-7 text-slate-650">
                {group.items.map((item) => <li key={item}>・{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-6 rounded-card border border-line bg-white p-5 shadow-card">
        <h2 className="text-xl font-black">遇到不適當內容怎麼辦？</h2>
        <p className="mt-3 leading-7 text-slate-600">請先避免公開爭執，保留訊息內容並回報平台管理單位。正式版本可加入檢舉、封鎖與內容審核流程，Demo 先以規範頁呈現治理設計。</p>
      </section>
    </PageWrap>
  )
}

function AppNav({ route, navigate, logout }) {
  const items = [
    ['公布欄', '/dashboard'],
    ['聊天室', '/chat'],
    ['社群', '/communities'],
    ['規範', '/rules'],
    ['我的檔案', '/profile'],
  ]
  return (
    <aside className="fixed left-5 top-5 z-40 hidden h-[calc(100vh-2.5rem)] w-60 flex-col rounded-[28px] bg-white p-5 shadow-soft lg:flex">
      <button onClick={() => navigate('/dashboard')} className="mb-9 text-left text-2xl font-black text-navy">緣來就塑你</button>
      <nav className="flex flex-1 flex-col gap-2">
        {items.map(([label, path]) => <button key={path} onClick={() => navigate(path)} className={`nav-item ${route === path || route.startsWith(path + '/') ? 'active' : ''}`}>{label}</button>)}
      </nav>
      <button onClick={logout} className="nav-item text-left">登出</button>
    </aside>
  )
}

function MobileTabs({ route, navigate }) {
  const items = [
    ['公布欄', '/dashboard'],
    ['聊天', '/chat'],
    ['社群', '/communities'],
    ['規範', '/rules'],
    ['我的', '/profile'],
  ]
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-[22px] border border-line bg-white/95 p-2 shadow-soft backdrop-blur lg:hidden">
      {items.map(([label, path]) => <button key={path} onClick={() => navigate(path)} className={`rounded-2xl px-2 py-3 text-sm font-bold ${route === path || route.startsWith(path + '/') ? 'bg-skysoft text-navy' : 'text-slate-500'}`}>{label}</button>)}
    </nav>
  )
}

function MentorCard({ mentor, profile, setProfile, navigate, notify, inviteMentor, compact = false, hideFavorite = false }) {
  const isFav = profile.favorites.includes(mentor.id)
  const toggleFavorite = (event) => {
    event.stopPropagation()
    setProfile((prev) => ({ ...prev, favorites: isFav ? prev.favorites.filter((item) => item !== mentor.id) : [...prev.favorites, mentor.id] }))
    notify(isFav ? '已取消收藏。' : '已收藏此同仁。')
  }
  return (
    <article className="rounded-card border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black">{mentor.name}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500">{mentor.department} · {mentor.role}</p>
          <p className="mt-1 text-sm text-slate-500">年資 {mentor.seniority} 年</p>
        </div>
        <div className="match">{mentor.match}%</div>
      </div>
      <p className="mt-4 line-clamp-2 leading-7 text-slate-600">{mentor.intro}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {mentor.skills.slice(0, compact ? 2 : 3).map((tag) => <span key={tag} className="pill">{tag}</span>)}
      </div>
      {!compact && <div className="mt-3 flex flex-wrap gap-2">{mentor.topics.map((tag) => <span key={tag} className="pill-light">{tag}</span>)}</div>}
      <div className={`mt-5 grid gap-2 ${hideFavorite ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {!hideFavorite && <button className="btn-secondary justify-center" onClick={toggleFavorite}>{isFav ? '已收藏' : '收藏'}</button>}
        <button className="btn-primary justify-center" onClick={() => navigate(`/mentor/${mentor.id}`)}>查看同仁頁</button>
      </div>
      {compact && <button className="mt-2 w-full rounded-full px-4 py-3 text-sm font-bold text-navy hover:bg-mist" onClick={() => inviteMentor(mentor)}>邀請交流</button>}
    </article>
  )
}

function CreateCommunityModal({ onClose, setCommunities, notify }) {
  const [form, setForm] = useState({ name: '', intro: '', category: '工作技能', tags: '' })
  const [error, setError] = useState('')
  const create = () => {
    if (!form.name.trim() || !form.intro.trim()) {
      setError('請填寫社群名稱與簡介')
      return
    }
    const newCommunity = {
      id: `c${Date.now()}`,
      name: form.name.trim(),
      category: form.category,
      intro: form.intro.trim(),
      members: 1,
      tags: splitText(form.tags).length ? splitText(form.tags) : [form.category],
      posts: [
        {
          id: `p${Date.now()}`,
          author: '塑寶',
          meta: '社群建立者',
          time: '剛剛',
          content: `歡迎加入 ${form.name.trim()}，可以先分享一個你想討論的問題或經驗。`,
          likes: 0,
          comments: 0,
        },
      ],
    }
    setCommunities((prev) => [newCommunity, ...prev])
    notify('社群已建立。')
    onClose()
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-navy/30 px-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[28px] bg-white p-6 shadow-soft">
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <h2 className="text-2xl font-black">創建社群</h2>
            <p className="mt-2 text-slate-600">建立一個可以持續討論工作技能、職涯或興趣主題的交流空間。</p>
          </div>
          <button className="rounded-full bg-mist px-4 py-2 font-bold" onClick={onClose}>關閉</button>
        </div>
        <div className="space-y-4">
          <Input label="社群名稱" value={form.name} onChange={(value) => setForm({ ...form, name: value })} />
          <Textarea label="社群簡介" value={form.intro} onChange={(value) => setForm({ ...form, intro: value })} />
          <Select label="社群分類" value={form.category} onChange={(value) => setForm({ ...form, category: value })} options={['工作技能', '職涯', '興趣']} />
          <Input label="社群標籤（以逗號分隔）" value={form.tags} onChange={(value) => setForm({ ...form, tags: value })} />
          {error && <p className="form-error">{error}</p>}
          <button className="btn-primary w-full justify-center" onClick={create}>建立社群</button>
        </div>
      </div>
    </div>
  )
}

function ChatPanel({ mentor, conversation, conversations = [], setActiveChatId, onSend }) {
  const [message, setMessage] = useState('')
  const submit = () => {
    if (!message.trim()) return
    onSend(message)
    setMessage('')
  }

  return (
    <div className="rounded-[28px] border border-line bg-white p-5 shadow-card lg:p-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 className="text-xl font-black">和 {mentor.name} 討論中</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500">{mentor.department} · {conversation.status}</p>
        </div>
        {conversations.length > 1 && setActiveChatId && (
          <div className="max-w-full">
            <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-slate-400">對話對象</p>
            <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
              {conversations.map((item) => {
                const chatMentor = mentorSeed.find((candidate) => candidate.id === item.mentorId)
                if (!chatMentor) return null
                return (
                  <button
                    key={item.mentorId}
                    onClick={() => setActiveChatId(item.mentorId)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold ${item.mentorId === mentor.id ? 'bg-skysoft text-navy' : 'bg-mist text-navy'}`}
                  >
                    {chatMentor.name}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 max-h-80 space-y-3 overflow-y-auto rounded-[22px] bg-mist p-4">
        {conversation.messages.map((item) => (
          <div key={item.id} className={`flex ${item.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[82%] rounded-[20px] px-4 py-3 shadow-sm ${item.from === 'user' ? 'bg-blueprint text-white' : 'bg-white text-ink'}`}>
              <p className="leading-7">{item.text}</p>
              <p className={`mt-1 text-xs font-semibold ${item.from === 'user' ? 'text-white/70' : 'text-slate-400'}`}>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          className="field mt-0"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') submit()
          }}
          placeholder={`輸入想和 ${mentor.name} 討論的請益、分享或合作問題...`}
        />
        <button className="btn-primary justify-center sm:min-w-28" onClick={submit}>送出</button>
      </div>
    </div>
  )
}

function CommunityCard({ community, profile, setProfile, navigate, notify, horizontal = false }) {
  const joined = profile.joinedCommunities.includes(community.id)
  const toggleJoin = (event) => {
    event.stopPropagation()
    setProfile((prev) => ({ ...prev, joinedCommunities: joined ? prev.joinedCommunities.filter((item) => item !== community.id) : [...prev.joinedCommunities, community.id] }))
    notify(joined ? '已退出社群。' : '已加入社群。')
  }
  return (
    <article className={`rounded-card border border-line bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft ${horizontal ? 'lg:p-5' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-azure">{community.category}</p>
          <h3 className="mt-1 text-xl font-black">{community.name}</h3>
        </div>
        <span className="pill-dark whitespace-nowrap">{community.members} 人</span>
      </div>
      <p className="mt-4 line-clamp-3 leading-7 text-slate-600">{community.intro}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {community.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-500">熱門討論：{community.posts[0]?.content.slice(0, 28)}...</p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <button className={joined ? 'btn-secondary justify-center' : 'btn-primary justify-center'} onClick={toggleJoin}>{joined ? '已加入' : '加入社群'}</button>
        <button className="btn-secondary justify-center" onClick={() => navigate(`/community/${community.id}`)}>查看詳情</button>
      </div>
    </article>
  )
}

function Input({ label, value, onChange, error, type = 'text', dense = false }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <input className={`field ${dense ? 'py-2.5' : ''}`} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      {error && <span className="form-error">{error}</span>}
    </label>
  )
}

function Textarea({ label, value, onChange, error }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <textarea className="field min-h-28" value={value} onChange={(e) => onChange(e.target.value)} />
      {error && <span className="form-error">{error}</span>}
    </label>
  )
}

function Select({ label, value, onChange, options, dense = false }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <select className={`field ${dense ? 'py-2.5' : ''}`} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => <option key={option} value={option}>{option || '不限'}</option>)}
      </select>
    </label>
  )
}

function ReadOnlyField({ label, value }) {
  return (
    <div>
      <p className="label">{label}</p>
      <div className="field bg-mist/60 text-slate-600">{value || '未提供'}</div>
    </div>
  )
}

function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-card border border-line bg-white p-4">
      <span className="font-semibold text-slate-700">{label}</span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-6 w-6 rounded border-line text-navy" />
    </label>
  )
}

function CheckGroup({ label, options, values, onToggle }) {
  return (
    <div>
      <p className="label">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => <button key={option} type="button" onClick={() => onToggle(option)} className={values.includes(option) ? 'chip active' : 'chip'}>{option}</button>)}
      </div>
    </div>
  )
}

function PageWrap({ children }) {
  return <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-0">{children}</div>
}

function PageTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-6">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-2 text-4xl font-black tracking-tight">{title}</h1>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">{text}</p>
    </div>
  )
}

function SectionHeader({ title, action, onAction }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h2 className="text-2xl font-black">{title}</h2>
      {action && <button onClick={onAction} className="text-sm font-bold text-navy hover:underline">{action}</button>}
    </div>
  )
}

function DetailBlock({ title, children }) {
  return (
    <section className="rounded-card border border-line bg-white p-5 leading-7 text-slate-650 shadow-card">
      <h2 className="mb-3 text-xl font-black text-ink">{title}</h2>
      {children}
    </section>
  )
}

function Info({ label, value }) {
  return <div className="rounded-card bg-mist p-4"><p className="text-xs font-bold text-slate-500">{label}</p><p className="mt-1 font-black text-ink">{value}</p></div>
}

function TagList({ tags }) {
  return <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}</div>
}

function getPostReplies(post) {
  const replies = {
    p1: [
      { author: '周明翰', text: '我最近想突破的是跨部門溝通，常常不知道怎麼把需求講得更清楚。' },
      { author: '林若涵', text: '可以先把問題、影響對象、希望得到的協助拆開寫，午餐交流會比較好討論。' },
      { author: '吳品萱', text: '我也想聊時間管理，尤其是同時處理例行工作和專案的節奏。' },
    ],
    p2: [
      { author: '張庭安', text: '很認同，願意問問題的人通常適應得更快。' },
      { author: '陳柏宇', text: '新人期可以先建立三位固定請益對象，會少走很多路。' },
    ],
    p3: [
      { author: '塑寶', text: '想知道現金流表要先追哪些項目，期待模板。' },
      { author: '劉怡君', text: '簡單可持續很重要，初版不用太複雜。' },
    ],
    p4: [
      { author: '張庭安', text: 'Project Brief 很適合給新人理解專案全貌。' },
      { author: '許哲維', text: '如果可以加一欄資料需求會更完整。' },
    ],
  }
  return replies[post.id] || [
    { author: '陳柏宇', text: '這個主題很值得延伸討論，我也想聽聽其他部門的做法。' },
    { author: '林若涵', text: '可以把問題情境再寫具體一點，大家比較容易提供經驗。' },
  ]
}

function PostCard({ post }) {
  const [saved, setSaved] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [localComments, setLocalComments] = useState([])
  const existingReplies = getPostReplies(post)
  const saveCount = (post.saves ?? post.likes ?? 0) + (saved ? 1 : 0)
  const commentCount = (post.comments ?? existingReplies.length) + localComments.length
  const submitComment = () => {
    if (!commentText.trim()) return
    setLocalComments((prev) => [...prev, { id: Date.now(), author: '塑寶', text: commentText.trim() }])
    setCommentText('')
    setShowComments(true)
  }

  return (
    <article className="rounded-card border border-line bg-white p-5 shadow-card">
      <div>
        <h3 className="font-black">{post.author}</h3>
        <p className="text-sm text-slate-500">{post.meta} · {post.time}</p>
      </div>
      <p className="mt-4 leading-7 text-slate-700">{post.content}</p>
      <div className="mt-4 flex gap-4 text-sm font-bold text-slate-500">
        <button className={saved ? 'text-navy' : 'hover:text-navy'} onClick={() => setSaved((value) => !value)}>{saved ? '已收藏' : '收藏'} {saveCount}</button>
        <button className="hover:text-navy" onClick={() => setShowComments((value) => !value)}>留言 {commentCount}</button>
      </div>
      {showComments && (
        <div className="mt-4 rounded-card bg-mist p-4">
          <div className="space-y-3">
            {existingReplies.map((reply) => (
              <div key={`${post.id}-${reply.author}-${reply.text}`} className="rounded-2xl bg-white p-3 text-sm text-slate-700">
                <span className="font-black text-ink">{reply.author}：</span>
                {reply.text}
              </div>
            ))}
            {localComments.map((comment) => (
              <div key={comment.id} className="rounded-2xl bg-white p-3 text-sm text-slate-700">
                <span className="font-black text-ink">{comment.author}：</span>
                {comment.text}
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <input
              className="field mt-0 bg-white"
              value={commentText}
              onChange={(event) => setCommentText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') submitComment()
              }}
              placeholder="寫下你的留言..."
            />
            <button className="btn-primary justify-center sm:min-w-24" onClick={submitComment}>送出</button>
          </div>
        </div>
      )}
    </article>
  )
}

function EmptyState({ title, text }) {
  return (
    <div className="rounded-card border border-dashed border-line bg-white p-8 text-center shadow-card">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-2 text-slate-600">{text}</p>
    </div>
  )
}

function MiniList({ title, text, onClick }) {
  return (
    <button onClick={onClick} className="rounded-card border border-line bg-white p-5 text-left shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </button>
  )
}

function splitText(text = '') {
  return text.split(/[、,，]/).map((item) => item.trim()).filter(Boolean)
}

createRoot(document.getElementById('root')).render(<App />)
