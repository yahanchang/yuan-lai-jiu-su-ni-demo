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
    availability: '週二下午、週五上午',
    methods: ['線上', '文字訊息'],
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
    skills: ['職涯諮詢', '學習設計', '知識整理'],
    interests: ['音樂祭', '桌遊', '寫作'],
    topics: ['職涯發展', '工作生活平衡', '跨部門交流'],
    intro: '最喜歡把人與人連起來，讓每一次交流都變成新的可能。',
    canMentor: true,
    match: 88,
    availability: '週二下午、週四晚間',
    methods: ['線上', '文字訊息'],
    highlights: ['設計新人 Onboarding Journey', '策劃內部學習社群'],
    experiences: ['自我探索工具', '職涯訪談', '問題整理'],
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
    availability: '週三下午、週五上午',
    methods: ['線上', '文字訊息'],
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
    availability: '週一下午、週四上午',
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
    availability: '週一下午、週三晚間',
    methods: ['文字訊息', '線上'],
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
    availability: '週二晚間、週五下午',
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
    intro: '把新人常遇到的問題問出來，也把適應公司、理解流程與找資源的方法留下來。',
    members: 238,
    tags: ['新人訓', '同梯交流', '問題解決'],
    visibility: 'members',
    joinPolicy: 'approval',
    eligibilityRule: '員工編號 FP-0001 至 FP-0030，或屬於 2026 七月新人訓梯次',
    posts: [
      { id: 'p1', author: '張庭安', meta: '人才發展部', time: '今天 10:20', content: '新人剛進公司時，最常卡住的是「不知道要問誰」。大家通常怎麼判斷問題該問主管、同部門同事，還是跨部門窗口？', saves: 34, comments: 12 },
      { id: 'p2', author: '周明翰', meta: '採購專員', time: '昨天 18:05', content: '我把新人期常問的問題整理成一份「前 30 天問題清單」，包含系統權限、流程窗口、常用表單位置，給剛報到的同仁參考。', saves: 28, comments: 8 },
    ],
  },
  {
    id: 'c2',
    name: 'HeyGen 交流社群',
    category: '工作技能',
    intro: '分享 HeyGen 影片製作、腳本撰寫、虛擬人設定與內部教學素材應用經驗，讓影音工具更快被用在工作場景。',
    members: 186,
    tags: ['HeyGen', '影音工具', '教學素材'],
    posts: [
      { id: 'p3', author: '許哲維', meta: '資料平台部', time: '今天 09:12', content: '我整理了一份 HeyGen 影片製作流程：先寫 90 秒腳本，再做角色設定，最後統一字幕格式，給要做內訓素材的同仁參考。', saves: 46, comments: 15 },
    ],
  },
  {
    id: 'c3',
    name: '專案管理社群',
    category: '工作技能',
    intro: '分享會議、時程、風險與跨部門協作的實戰做法，讓專案問題可以被拆解、被回覆、被留下來。',
    members: 312,
    tags: ['專案管理', '溝通', 'PM'],
    posts: [
      { id: 'p4', author: '林若涵', meta: '產品策略部', time: '週一 14:20', content: '推薦大家在專案啟動前先寫一頁 Project Brief，包含目標、範圍、決策者與風險，能少掉很多後面的誤會。', saves: 63, comments: 21 },
    ],
  },
  {
    id: 'c4',
    name: '跨部門交流社群',
    category: '職涯',
    intro: '把跨部門合作中的問題、窗口經驗與溝通方式整理起來，讓資訊不只停留在單一部門。',
    members: 421,
    tags: ['跨部門', '交流', '組織理解'],
    posts: [
      { id: 'p5', author: '陳柏宇', meta: '智慧製造部', time: '週二 11:30', content: '想請問跨部門專案在需求還不明確時，大家會先用什麼格式整理問題，才不會讓對方覺得太零散？', saves: 71, comments: 26 },
    ],
  },
  {
    id: 'c5',
    name: '女性成長社群',
    category: '職涯',
    intro: '討論職涯、領導與工作節奏，把不同階段的實務經驗留下來給後續同仁參考。',
    members: 204,
    tags: ['女性成長', '領導', '工作生活平衡'],
    posts: [
      { id: 'p6', author: '劉怡君', meta: '法遵長', time: '週三 16:40', content: '在高壓職務裡，大家如何設定工作界線，又不影響跨部門協作的回覆效率？', saves: 58, comments: 18 },
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
      { id: 'p7', author: '吳品萱', meta: 'ESG 策略部', time: '週四 20:10', content: '在職研究所最難的是時間配置，我整理了當時每週讀書節奏與請假安排，給正在評估進修的同仁參考。', saves: 37, comments: 11 },
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
      { id: 'p8', author: '吳品萱', meta: '永續專案主任', time: '昨天 12:15', content: '整理 ESG 報告時常看到很多縮寫，大家有沒有推薦的內部或外部字彙表可以參考？', saves: 42, comments: 14 },
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
      { id: 'p9', author: '許哲維', meta: '資料平台部', time: '今天 08:45', content: '整理了 5 個部門可以先嘗試的自動化場景：報表彙整、資料清理、通知寄送、表單檢核、文件命名。', saves: 54, comments: 17 },
    ],
  },
  {
    id: 'c9',
    name: '平台建議社群',
    category: '工作技能',
    intro: '如果使用台塑 Connect 時遇到問題、想建議新功能，或不知道某個功能怎麼用，可以集中在這裡發問與回饋。',
    members: 96,
    tags: ['平台建議', '使用問題', '功能回饋'],
    visibility: 'public',
    joinPolicy: 'open',
    posts: [
      { id: 'p10', author: '塑寶', meta: '人資組', time: '今天 11:05', content: '歡迎把平台使用問題、功能建議或操作上不清楚的地方留在這裡，平台管理小組會定期整理常見問題。', saves: 22, comments: 9 },
      { id: 'p11', author: '許哲維', meta: '資料平台部', time: '昨天 15:30', content: '建議社群搜尋可以支援用標籤快速篩選，這樣找工具教學或流程問題會更快。', saves: 17, comments: 5 },
    ],
  },
  {
    id: 'c10',
    name: '企業 AI 平台交流社群',
    category: '工作技能',
    intro: '討論企業 AI 平台的使用情境、提示詞寫法、資料安全注意事項與部門導入經驗，讓 AI 工具更穩定地支援日常工作。',
    members: 254,
    tags: ['企業AI', '提示詞', '資安'],
    visibility: 'public',
    joinPolicy: 'open',
    posts: [
      { id: 'p12', author: '林若涵', meta: '產品策略部', time: '今天 13:20', content: '分享一個我常用的提示詞格式：先寫角色、任務、輸入資料、輸出格式，再補充限制條件，產出的內容會穩很多。', saves: 61, comments: 18 },
      { id: 'p13', author: '吳品萱', meta: 'ESG 策略部', time: '昨天 17:45', content: '想請問大家用企業 AI 平台整理會議紀錄時，會怎麼避免放入不適合上傳的敏感資訊？', saves: 39, comments: 12 },
    ],
  },
]

const activeUserAnalytics = {
  ageGroups: [
    { label: '20-29 歲', value: 142 },
    { label: '30-39 歲', value: 186 },
    { label: '40-49 歲', value: 118 },
    { label: '50 歲以上', value: 64 },
  ],
  departments: [
    { label: '產品體驗部', value: 86 },
    { label: '資料平台部', value: 74 },
    { label: '人才發展部', value: 68 },
    { label: '智慧製造部', value: 61 },
    { label: '採購管理部', value: 45 },
  ],
}

const bulletinSeed = [
  {
    id: 'b1',
    type: '系統更新',
    title: '台塑 Connect 定位更新：實名發文與經驗沉澱',
    date: '2026/07/23',
    owner: '平台管理小組',
    summary: '台塑 Connect 調整為企業內部實名學習交流平台，聚焦發文、留言、收藏與使用經驗整理，讓問題與解法可以被後續同仁查找。',
    body: [
      '平台採公司帳號實名制，發文、留言與聊天室都會顯示公司匯入的姓名與部門職位。',
      '社群貼文改為單一發文入口，讓同仁直接留下問題、使用經驗、流程提醒或常見錯誤。',
      '聊天室作為延續討論的空間，可示意支援文字、圖片、檔案與連結分享。',
      'Connect News 目前只放系統更新與常見問題，避免資訊過度分散。',
    ],
    tags: ['實名制', '發文', '收藏'],
    cta: '查看完整內文',
  },
  {
    id: 'b2',
    type: '常見問題',
    title: '社群發文可以寫什麼？',
    date: '2026/07/25',
    owner: '平台管理小組',
    summary: '社群發文不需要先選類別，遇到問題、用過的方法、流程提醒或常見錯誤都可以直接寫成貼文。',
    body: [
      '如果你正在卡關，可以直接描述問題背景、卡住的地方與希望大家協助的內容。',
      '如果你已經用過某個工具、模板、流程或方法，可以整理成貼文給其他同仁參考。',
      '貼文可以被收藏，也可以透過留言補充不同部門的做法。',
    ],
    tags: ['發文', '留言', '收藏'],
    cta: '查看完整內文',
  },
  {
    id: 'b3',
    type: '常見問題',
    title: '聊天室可以拿來做什麼？',
    date: '2026/07/26',
    owner: '平台管理小組',
    summary: '聊天室用來延續一對一討論，可分享文字、圖片、檔案與連結，但不取代社群中可被搜尋的公開經驗整理。',
    body: [
      '社群適合留下可被其他同仁搜尋與參考的問題和經驗。',
      '聊天室適合進一步討論細節、補充圖片或文件、確認後續協作方式。',
      '請避免在聊天室或社群中上傳企業機密、未核准文件或敏感個人資料。',
    ],
    tags: ['聊天室', '附件', '資訊安全'],
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
  division: '總管理處',
  department: '人資組',
  role: '人資管理師',
  seniority: '5',
  location: '台北總部',
  adminRole: 'hr',
  canMentor: false,
  seekingMentor: true,
  intro: '',
  interests: '',
  skills: '',
  learning: '',
  guidanceTypes: [],
  mentorPrefs: [],
  availability: '',
  privacy: {
    showAge: true,
    showSeniority: true,
  },
  favorites: [],
  joinedCommunities: ['c1', 'c4'],
}

const joinRequestSeed = [
  {
    id: 'jr-1',
    communityId: 'c1',
    requester: '周明翰',
    employeeId: 'FP-0021',
    cohort: '2026 七月新人訓',
    department: '採購部',
    role: '採購專員',
    eligibility: '員工編號符合 FP-0001 至 FP-0030 梯次範圍',
    time: '今天 09:25',
    status: '待審核',
  },
  {
    id: 'jr-2',
    communityId: 'c1',
    requester: '劉怡君',
    employeeId: 'FP-0027',
    cohort: '2026 七月新人訓',
    department: '法遵室',
    role: '法遵專員',
    eligibility: '員工編號符合 FP-0001 至 FP-0030 梯次範圍',
    time: '昨天 16:40',
    status: '待審核',
  },
]

const guidanceOptions = ['職涯發展', '專業技能', '跨部門交流', '領導管理', '工作生活平衡', '理財規劃', '研究所／進修', '其他']
const mentorPrefOptions = ['同部門', '跨部門', '年資較深', '年齡相近', '共同興趣', '互補專長', '不限']
const methodOptions = ['線上', '實體', '文字訊息']
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
const demoStorageVersion = '2026-07-24-chat-groups-owner-approval-ai'

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
    localStorage.setItem('yl_join_requests', JSON.stringify(joinRequestSeed))
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
  return items.map((item) => ({
    ...item,
    category: normalizeCommunityCategory(item.category),
    owner: item.owner || '平台管理小組',
    visibility: item.visibility || 'public',
    joinPolicy: item.joinPolicy || 'open',
    restrictions: {
      companies: item.restrictions?.companies || [],
      departments: item.restrictions?.departments || [],
      minSeniority: item.restrictions?.minSeniority || '',
    },
  }))
}

function communityVisibilityLabel(community) {
  return community.visibility === 'members' ? '加入後查看貼文' : '公開瀏覽'
}

function communityJoinPolicyLabel(community) {
  if (community.joinPolicy === 'approval') return '版主審核'
  if (community.joinPolicy === 'restricted') return '條件加入'
  return '自由加入'
}

function isHrAdmin(profile) {
  return profile.adminRole === 'hr' || profile.department?.includes('人資') || profile.role?.includes('人資')
}

function canJoinCommunity(profile, community) {
  if (community.joinPolicy !== 'restricted') return true
  const restrictions = community.restrictions || {}
  const companies = restrictions.companies || []
  const departments = restrictions.departments || []
  const minSeniority = Number(restrictions.minSeniority || 0)
  const userSeniority = Number(profile.seniority || 0)
  if (companies.length && !companies.includes(profile.company)) return false
  if (departments.length && !departments.includes(profile.department)) return false
  if (minSeniority && userSeniority < minSeniority) return false
  return true
}

function toggleCommunityMembership({ community, profile, setProfile, notify, setJoinRequests }) {
  const joined = profile.joinedCommunities.includes(community.id)
  if (joined) {
    setProfile((prev) => ({ ...prev, joinedCommunities: prev.joinedCommunities.filter((item) => item !== community.id) }))
    notify('已退出社群。')
    return
  }
  if (community.joinPolicy === 'approval') {
    setJoinRequests?.((prev) => {
      if (prev.some((item) => item.communityId === community.id && item.requester === profile.name && item.status === '待審核')) return prev
      return [
        {
          id: `jr-${Date.now()}`,
          communityId: community.id,
          requester: profile.name,
          employeeId: profile.employeeId || 'FP-0028',
          cohort: community.id === 'c1' ? '2026 七月新人訓' : '系統判定',
          department: profile.department,
          role: profile.role,
          eligibility: community.id === 'c1' ? '員工編號符合新人訓梯次範圍' : '符合社群審核條件',
          time: '剛剛',
          status: '待審核',
        },
        ...prev,
      ]
    })
    notify(community.id === 'c1' ? '已送出新人訓梯次資格確認。' : '已送出版主審核申請。')
    return
  }
  if (!canJoinCommunity(profile, community)) {
    notify('目前員工資料未符合這個社群的加入條件。')
    return
  }
  setProfile((prev) => ({ ...prev, joinedCommunities: [...prev.joinedCommunities, community.id] }))
  notify('已加入社群。')
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
  const [joinRequests, setJoinRequests] = useState(() => storageGet('yl_join_requests', joinRequestSeed))
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
  useEffect(() => localStorage.setItem('yl_join_requests', JSON.stringify(joinRequests)), [joinRequests])

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
          status: '討論中',
          messages: [
            {
              id: `msg-${Date.now()}`,
              from: 'mentor',
              text: `嗨，我是${mentor.name}。可以直接把想討論的問題、連結或檔案說明放在這裡。`,
              time: '剛剛',
            },
          ],
        },
        ...prev,
      ]
    })
    setActiveChatId(mentor.id)
    notify(`已開啟與 ${mentor.name} 的對話。`)
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

  const appState = { profile, setProfile, isAuthed, setIsAuthed, communities, setCommunities, conversations, activeChatId, setActiveChatId, incomingInvites, joinRequests, setJoinRequests, acceptIncomingInvite, dismissIncomingInvite, inviteMentor, sendChatMessage, navigate, notify, logout }
  const authedRoutes = ['/dashboard', '/mentors', '/chat', '/communities', '/rules', '/profile']
  const adminRoutes = ['/admin', '/admin/communities', '/admin/requests', '/admin/content']
  const isBulletinDetail = route.startsWith('/bulletin/')
  const isMentorDetail = route.startsWith('/mentor/')
  const isCommunityDetail = route.startsWith('/community/')
  const isAdminRoute = adminRoutes.includes(route) || route.startsWith('/admin/post/') || route.startsWith('/admin/community/')
  const showShell = isAuthed && !isAdminRoute && (authedRoutes.includes(route) || isBulletinDetail || isMentorDetail || isCommunityDetail)
  const showAdminShell = isAuthed && isAdminRoute && isHrAdmin(profile)

  return (
    <div className="min-h-screen bg-mist text-ink">
      {showShell && <AppNav route={route} profile={profile} navigate={navigate} logout={logout} />}
      {showAdminShell && <AdminNav route={route} navigate={navigate} logout={logout} />}
      <main className={showShell || showAdminShell ? 'pb-24 pt-5 lg:pb-10 lg:pl-80 lg:pr-8' : ''}>
        <Router route={route} appState={appState} />
      </main>
      {showShell && <MobileTabs route={route} navigate={navigate} />}
      {showAdminShell && <AdminMobileTabs route={route} navigate={navigate} />}
      {toast && <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-navy px-5 py-3 text-sm text-white shadow-soft lg:bottom-8">{toast}</div>}
    </div>
  )
}

function Router({ route, appState }) {
  if (route === '/') return <Landing {...appState} />
  if (route === '/register') return <Login {...appState} />
  if (route === '/login') return <Login {...appState} />
  if (route === '/choose') return <RoleChoice {...appState} />
  if (route.startsWith('/admin')) {
    if (!isHrAdmin(appState.profile)) return <Dashboard {...appState} />
    if (route.startsWith('/admin/community/')) return <CommunityDetail id={route.split('/').pop()} adminMode {...appState} />
    if (route.startsWith('/admin/post/')) return <AdminPostDetail postId={route.split('/').pop()} {...appState} />
    if (route === '/admin') return <AdminOverview {...appState} />
    if (route === '/admin/communities') return <AdminCommunities {...appState} />
    if (route === '/admin/requests') return <AdminRequests {...appState} />
    if (route === '/admin/content') return <AdminContent {...appState} />
  }
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
        <button onClick={() => navigate('/')} className="text-left text-2xl font-black tracking-wide text-navy">台塑 Connect</button>
        <div className="flex gap-3">
          <button onClick={() => navigate('/login')} className="btn-ghost">登入平台</button>
        </div>
      </header>
      <section className="relative overflow-hidden border-y border-line bg-gradient-to-br from-white via-skysoft to-mist">
        <div className="absolute right-[-8rem] top-16 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-5rem] h-72 w-72 rounded-full bg-skysoft blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-24">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-navy shadow-card">台塑企業員工交流與共學平台</p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">台塑 Connect</h1>
            <p className="mt-4 max-w-3xl text-2xl font-black leading-tight text-ink sm:text-3xl">把問題問出來，把經驗留下來。</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">台塑 Connect 是台塑企業內部的實名制員工學習交流平台，讓同仁可以在社群中發問、回覆、分享使用經驗，並把常見問題與解決方式留下來給後續同仁參考。</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => navigate('/login')} className="btn-primary h-13 justify-center px-8 text-base">登入平台</button>
              <span className="flex items-center px-2 text-sm font-semibold text-slate-500">登入後確認公司匯入資料</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="magazine-frame">
              <div className="hero-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">共學平台總覽</p>
                    <h2 className="mt-2 text-3xl font-black">4 個入口</h2>
                  </div>
                </div>
                <p className="mt-8 text-2xl font-bold leading-snug">發問、回覆、收藏，讓答案不只停在一次對話裡。</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Connect News｜公告與常見問題', 'Connect Chat｜一對一討論', 'Connect Hub｜學習社群', 'Connect Guide｜交流守則'].map((tag) => <span key={tag} className="pill">{tag}</span>)}
                </div>
              </div>
              <div className="floating-note">公司帳號登入 → 查看系統更新與常見問題 → 到社群發問或分享經驗 → 用聊天室延續細節討論。</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Core Features</p>
          <h2 className="section-title">四個核心功能，讓問題更快被解決、經驗更容易被找到</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          <FeatureCard title="Connect News｜公告與常見問題" text="只保留系統更新與常見問題，讓平台重要資訊清楚集中。" />
          <FeatureCard title="Connect Chat｜一對一討論" text="搜尋同仁並延續一對一討論，可示意分享文字、圖片、檔案與連結。" />
          <FeatureCard title="Connect Hub｜學習社群" text="用發文、留言與收藏，累積可搜尋、可回看的工作知識。" />
          <FeatureCard title="Connect Guide｜交流守則" text="採公司帳號實名制，清楚說明資訊安全、發文與留言原則。" />
        </div>
      </section>
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">User Journey</p>
            <h2 className="section-title">從發問到留下答案，讓知識有地方沉澱</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              ['01', '確認員工資料', '登入後確認公司匯入的基本資料。'],
              ['02', '查看 Connect News', '掌握公告與常見問題。'],
              ['03', '進入 Connect Hub', '用發文與留言留下可被搜尋的內容。'],
              ['04', '開啟 Connect Chat', '需要補充細節時，用聊天室延續一對一討論。'],
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
  const [form] = useState(defaultProfile)

  const submit = () => {
    setProfile({ ...form, favorites: [], joinedCommunities: ['c1'] })
    setIsAuthed(true)
    notify('員工資料確認完成，歡迎來到台塑 Connect。')
    navigate(isHrAdmin(form) ? '/choose' : '/dashboard')
  }

  return (
    <AuthLayout title="確認員工資料" subtitle="以下資料由企業帳號與人資系統匯入，平台不提供自行填寫或編輯。確認無誤後即可進入台塑 Connect。">
      <div className="space-y-5">
        <div className="rounded-card bg-mist p-5">
          <h2 className="text-xl font-black text-ink">公司已匯入你的基本資料</h2>
          <p className="mt-2 leading-7 text-slate-600">這裡只供確認。若資料有誤，請洽人資或系統管理單位更新。</p>
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
        <button className="btn-primary w-full justify-center" onClick={submit}>確認並進入平台</button>
      </div>
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
    notify(isHrAdmin(profile) ? '登入成功，請選擇使用入口。' : '登入成功，先確認你的員工資料。')
    navigate(isHrAdmin(profile) ? '/choose' : '/onboarding')
  }
  return (
    <AuthLayout title="登入平台" subtitle="使用企業帳號登入後，確認公司匯入的員工資料。">
      <div className="space-y-4">
        <Input label="帳號" value={email} onChange={setEmail} />
        <Input label="密碼" type="password" value={password} onChange={setPassword} />
        {error && <p className="form-error">{error}</p>}
        <button className="btn-primary w-full justify-center" onClick={submit}>登入</button>
        <p className="text-center text-sm font-semibold text-slate-500">登入後會進入員工資料確認流程。</p>
      </div>
    </AuthLayout>
  )
}

function RoleChoice({ profile, navigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-mist to-skysoft px-5 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-black text-navy">台塑 Connect</h1>
        <section className="mt-10 rounded-[32px] bg-white p-8 shadow-soft lg:p-10">
          <p className="eyebrow">Welcome Back</p>
          <h2 className="mt-3 text-4xl font-black text-ink">歡迎回來，{profile.name}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">你目前是 {profile.division} · {profile.department} 的人資管理者，可以選擇使用員工平台，或進入後台查看社群營運與審核資訊。</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <button onClick={() => navigate('/dashboard')} className="rounded-card border border-line bg-mist p-6 text-left transition hover:-translate-y-1 hover:bg-skysoft">
              <p className="eyebrow">Employee Platform</p>
              <h3 className="mt-3 text-2xl font-black text-ink">使用台塑 Connect</h3>
              <p className="mt-3 leading-7 text-slate-600">以一般員工視角瀏覽公布欄、聊天室、學習社群與個人資料。</p>
            </button>
            <button onClick={() => navigate('/admin')} className="rounded-card bg-navy p-6 text-left text-white shadow-card transition hover:-translate-y-1">
              <p className="text-xs font-black uppercase tracking-[.22em] text-white/60">Admin Console</p>
              <h3 className="mt-3 text-2xl font-black">進入人資後台</h3>
              <p className="mt-3 leading-7 text-white/75">查看所有社群內容、加入申請、熱門討論與平台營運狀態。</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-mist to-skysoft px-5 py-8">
      <button onClick={() => (location.hash = '/')} className="mx-auto mb-8 block max-w-4xl text-2xl font-black text-navy">台塑 Connect</button>
      <section className="mx-auto grid max-w-5xl overflow-hidden rounded-[28px] border border-white bg-white shadow-soft lg:grid-cols-[.8fr_1.2fr]">
        <div className="bg-navy p-8 text-white lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-skysoft">Employee Connection</p>
          <h1 className="mt-5 text-4xl font-black leading-tight">{title}</h1>
          <p className="mt-4 leading-7 text-slate-200">{subtitle}</p>
          <p className="mt-10 rounded-card bg-white/10 p-5 leading-7 text-slate-100">從 Connect News、Connect Chat 到 Connect Hub，讓經驗在組織裡真正流動。</p>
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
      <PageTitle eyebrow="Bulletin" title={`Hi，${profile.name}！Connect News｜公告與常見問題`} text="集中查看系統更新與常見問題，避免重要平台資訊散落在聊天室或社群貼文裡。" />
      <section className="rounded-[28px] bg-gradient-to-br from-white to-skysoft p-6 shadow-card lg:p-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Today</p>
            <h2 className="mt-2 text-3xl font-black">系統更新與常見問題放在這裡</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">Connect News 只放平台相關的系統更新與常見問題，讓同仁快速掌握功能變更、使用方式與資訊安全提醒。</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <Info label="系統更新" value={`${bulletinSeed.filter((item) => item.type === '系統更新').length} 則`} />
            <Info label="常見問題" value={`${bulletinSeed.filter((item) => item.type === '常見問題').length} 則`} />
          </div>
        </div>
      </section>
      <section className="mt-6">
        <SectionHeader title="系統更新與常見問題" />
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
    </PageWrap>
  )
}

function BulletinDetail({ id, navigate }) {
  const item = bulletinSeed.find((entry) => entry.id === id) || bulletinSeed[0]
  return (
    <PageWrap>
      <button className="mb-5 text-sm font-bold text-navy hover:underline" onClick={() => navigate('/dashboard')}>返回 Connect News</button>
      <article className="rounded-[28px] bg-white p-6 shadow-card lg:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <p className="eyebrow">{item.type}</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight">{item.title}</h1>
            <p className="mt-3 font-semibold text-slate-500">{item.owner} · {item.date}</p>
          </div>
          <span className="pill-dark w-fit">Connect News｜公告與常見問題</span>
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
      <button className="mb-5 text-sm font-bold text-navy hover:underline" onClick={() => navigate('/dashboard')}>返回 Connect News</button>
      <section className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
        <aside className="rounded-[28px] border border-line bg-white p-6 shadow-card">
          <h1 className="text-4xl font-black">{mentor.name}</h1>
          <p className="mt-2 text-lg font-semibold text-slate-600">{mentor.department} · {mentor.role}</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <Info label="年資" value={`${mentor.seniority} 年`} />
            <Info label="工作地點" value={mentor.location} />
            <Info label="年齡" value={`${mentor.age} 歲`} />
            <Info label="員工編號" value={employeeCode(mentor)} />
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <button className="btn-primary justify-center" onClick={() => inviteMentor(mentor)}>{conversation ? '已建立對話，繼續聊' : '開始對話'}</button>
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
          <DetailBlock title="可以延伸討論的情境">
            <div className="grid gap-3 sm:grid-cols-2">
              {['你想了解跨部門工作內容', '你想確認一項實務流程', '你想整理工作經驗或模板', '你想延續社群貼文裡的細節討論'].map((item) => <div key={item} className="rounded-card bg-mist p-4 font-semibold">{item}</div>)}
            </div>
          </DetailBlock>
        </div>
      </section>
    </PageWrap>
  )
}

function CommunitiesPage({ communities, setCommunities, profile, setProfile, setJoinRequests, navigate, notify }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [showCreate, setShowCreate] = useState(false)
  const categories = ['', ...new Set(communities.map((c) => c.category))]
  const filtered = communities.filter((c) => (!query || `${c.name}${c.intro}${c.tags.join('')}`.includes(query)) && (!category || c.category === category))
  return (
    <PageWrap>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <PageTitle eyebrow="Communities" title="Connect Hub｜學習社群" text="依專業工作、職涯經驗與生活興趣加入社群，讓知識整理、問題討論與同仁交流持續累積。" />
        <button className="btn-primary justify-center" onClick={() => setShowCreate(true)}>創建社群</button>
      </div>
      <div className="mb-6 mt-2 grid gap-3 rounded-card border border-line bg-white p-5 shadow-card md:grid-cols-[1fr_220px]">
        <Input label="搜尋社群" value={query} onChange={setQuery} dense />
        <Select label="主題分類" value={category} onChange={setCategory} options={categories} dense />
      </div>
      {filtered.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((community) => <CommunityCard key={community.id} community={community} navigate={navigate} profile={profile} setProfile={setProfile} setJoinRequests={setJoinRequests} notify={notify} />)}
        </div>
      ) : <EmptyState title="還沒有符合的社群" text="試著換一個關鍵字，或調整主題分類再看看。" />}
      {showCreate && <CreateCommunityModal profile={profile} onClose={() => setShowCreate(false)} setCommunities={setCommunities} setProfile={setProfile} notify={notify} />}
    </PageWrap>
  )
}

function CommunityDetail({ id, communities, setCommunities, profile, setProfile, joinRequests, setJoinRequests, navigate, notify, adminMode = false }) {
  const community = communities.find((item) => item.id === id) || communities[0]
  const [content, setContent] = useState('')
  const joined = profile.joinedCommunities.includes(community.id)
  const hrAdmin = isHrAdmin(profile)
  const postsVisible = hrAdmin || joined || community.visibility !== 'members'
  const isOwner = community.owner === profile.name
  const toggleJoin = () => {
    toggleCommunityMembership({ community, profile, setProfile, notify, setJoinRequests })
  }
  const reviewOwnerRequest = (requestId, status) => {
    setJoinRequests((prev) => prev.map((request) => request.id === requestId ? { ...request, status } : request))
    if (status === '已核准') {
      setCommunities((prev) => prev.map((item) => item.id === community.id ? { ...item, members: item.members + 1 } : item))
    }
    notify(status === '已核准' ? '已核准加入社群。' : '已退回加入申請。')
  }
  const publish = () => {
    if (!joined && !adminMode) {
      notify('加入社群後才能發布貼文。')
      return
    }
    if (!content.trim()) {
      notify('先寫一點想分享的內容吧。')
      return
    }
    const post = {
      id: `p${Date.now()}`,
      author: adminMode ? '平台管理小組' : profile.name,
      meta: adminMode ? '台塑 Connect 官方發文' : `${profile.department} · ${profile.role}`,
      time: '剛剛',
      content,
      saves: 0,
      comments: 0,
    }
    setCommunities((prev) => prev.map((item) => item.id === community.id ? { ...item, posts: [post, ...item.posts] } : item))
    setContent('')
    notify(adminMode ? '平台發文已發布。' : '貼文已發布。')
  }
  return (
    <PageWrap>
      <button className="mb-5 text-sm font-bold text-navy hover:underline" onClick={() => navigate(adminMode ? '/admin/communities' : '/communities')}>{adminMode ? '返回社群管理' : '返回社群列表'}</button>
      <section className="rounded-[28px] bg-white p-6 shadow-card lg:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
          <div>
            <p className="eyebrow">{community.category}</p>
            <h1 className="mt-2 text-4xl font-black">{community.name}</h1>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">{community.intro}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="pill-dark">{community.members} 位成員</span>
              <span className="pill">{communityVisibilityLabel(community)}</span>
              <span className="pill">{communityJoinPolicyLabel(community)}</span>
              {community.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
            </div>
          </div>
          {!adminMode && <button className={joined ? 'btn-secondary justify-center' : 'btn-primary justify-center'} onClick={toggleJoin}>{joined ? '退出社群' : '加入社群'}</button>}
        </div>
      </section>
      {adminMode && (
        <section className="mt-6 rounded-card border border-line bg-white p-5 shadow-card">
          <h2 className="text-xl font-black">後台發文身份</h2>
          <p className="mt-2 leading-7 text-slate-600">你目前以人資後台查看此社群，發布貼文會顯示為「平台管理小組｜台塑 Connect 官方發文」，不會顯示個人姓名。</p>
        </section>
      )}
      <section className="mt-6 rounded-card border border-line bg-white p-5 shadow-card">
        <h2 className="text-xl font-black">社群加入與瀏覽規則</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Info label="貼文可見性" value={communityVisibilityLabel(community)} />
          <Info label="加入方式" value={communityJoinPolicyLabel(community)} />
          <Info label="版主" value={community.owner || '平台管理小組'} />
        </div>
        {community.joinPolicy === 'restricted' && (
          <p className="mt-4 rounded-card bg-mist p-4 text-sm font-semibold leading-7 text-slate-600">
            加入條件：
            {community.restrictions?.companies?.length ? ` 公司為 ${community.restrictions.companies.join('、')}。` : ' 不限公司。'}
            {community.restrictions?.departments?.length ? ` 部門為 ${community.restrictions.departments.join('、')}。` : ' 不限部門。'}
            {community.restrictions?.minSeniority ? ` 年資 ${community.restrictions.minSeniority} 年以上。` : ' 不限年資。'}
          </p>
        )}
        {community.eligibilityRule && (
          <p className="mt-4 rounded-card bg-mist p-4 text-sm font-semibold leading-7 text-slate-600">
            加入資格：{community.eligibilityRule}。系統會依公司匯入資料判斷，不需要另外填寫加入動機。
          </p>
        )}
      </section>
      {!adminMode && isOwner && community.joinPolicy === 'approval' && (
        <CommunityOwnerReviewPanel
          community={community}
          requests={joinRequests.filter((request) => request.communityId === community.id && request.status === '待審核')}
          onApprove={(request) => reviewOwnerRequest(request.id, '已核准')}
          onReject={(request) => reviewOwnerRequest(request.id, '已退回')}
        />
      )}
      {joined || adminMode ? (
        <section className="mt-6 rounded-card border border-line bg-white p-5 shadow-card">
          <h2 className="mb-3 text-xl font-black">{adminMode ? '發布平台貼文' : '發布貼文'}</h2>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="寫下想問的問題、用過的方法、流程提醒或給同仁參考的內容..." className="field min-h-28" />
          <div className="mt-3 flex justify-end"><button className="btn-primary" onClick={publish}>發布</button></div>
        </section>
      ) : (
        <section className="mt-6 rounded-card border border-dashed border-line bg-white p-5 text-center shadow-card">
          <h2 className="text-xl font-black">加入社群後即可發文與留言</h2>
          <p className="mt-2 text-slate-500">{community.eligibilityRule ? '此社群依新人訓梯次與員工編號確認資格，送出後等待系統或管理者確認。' : community.joinPolicy === 'approval' ? '此社群需要版主審核，送出申請後等待確認。' : '先加入社群，再一起把問題問出來、把經驗留下來。'}</p>
        </section>
      )}
      {postsVisible ? (
        <section className="mt-6">
          <SectionHeader title="社群貼文" />
          <div className="space-y-4">
          {community.posts.map((post) => <PostCard key={post.id} post={post} canComment={joined && !adminMode} />)}
        </div>
          {hrAdmin && !joined && <p className="mt-4 rounded-card bg-white p-4 text-sm font-semibold text-slate-500 shadow-card">人資後台權限：你可查看此社群貼文，但仍需加入社群才可用員工身份留言。</p>}
        </section>
      ) : (
        <EmptyState title="貼文內容限成員查看" text="這個社群由版主設定為加入後才能查看貼文，加入或通過審核後即可閱讀完整內容。" />
      )}
    </PageWrap>
  )
}

function ChatPage({ conversations, activeChatId, setActiveChatId, sendChatMessage, inviteMentor, communities, profile, navigate }) {
  const activeConversation = conversations.find((conversation) => conversation.mentorId === activeChatId) || conversations[0]
  const activeMentor = activeConversation ? mentorSeed.find((mentor) => mentor.id === activeConversation.mentorId) : null
  const joinedCommunities = communities.filter((community) => profile.joinedCommunities.includes(community.id)).slice(0, 4)

  return (
    <PageWrap>
      <PageTitle eyebrow="Chat" title="Connect Chat｜訊息中心" text="直接搜尋同仁開啟對話，也可以從已加入的社群進入群組討論，讓問題、檔案、連結與後續確認集中在這裡。" />
      <section className="grid gap-5 xl:grid-cols-[1fr_.9fr]">
        <EmployeeInviteSearch conversations={conversations} onInvite={inviteMentor} setActiveChatId={setActiveChatId} />
        <section className="rounded-[28px] border border-line bg-white p-5 shadow-card lg:p-6">
          <h2 className="text-2xl font-black">群組</h2>
          <p className="mt-2 text-slate-600">從已加入的社群進入群組討論，適合多人一起補充經驗與資源。</p>
          <div className="mt-4 space-y-3">
            {joinedCommunities.map((community) => (
              <button key={community.id} className="w-full rounded-card bg-mist p-4 text-left transition hover:bg-skysoft" onClick={() => navigate(`/community/${community.id}`)}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-black text-ink">{community.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{community.members} 位成員 · {community.category}</p>
                  </div>
                  <span className="pill whitespace-nowrap">進入群組</span>
                </div>
              </button>
            ))}
            {!joinedCommunities.length && <EmptyState title="尚未加入群組" text="加入社群後，群組討論入口會出現在這裡。" />}
          </div>
        </section>
      </section>
      {activeConversation && activeMentor ? (
        <section className="mt-6">
          <SectionHeader title="對話" />
          <ChatPanel
            mentor={activeMentor}
            conversation={activeConversation}
            conversations={conversations}
            setActiveChatId={setActiveChatId}
            onSend={(text) => sendChatMessage(activeMentor.id, text)}
          />
        </section>
      ) : (
        <EmptyState title="尚未建立對話" text="從好友搜尋直接開啟對話後，聊天內容會出現在這裡。" />
      )}
      <section className="mt-8 rounded-card bg-white p-5 shadow-card">
        <h2 className="text-xl font-black">聊天室使用原則</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {['公司實名制交流', '可分享文字、圖片、檔案與連結', '不得商業推銷、私人交易或散播企業機密'].map((item) => <div key={item} className="rounded-card bg-mist p-4 font-bold text-navy">{item}</div>)}
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
        <h2 className="text-2xl font-black">好友</h2>
        <p className="mt-2 text-slate-600">可輸入姓名、員工編號、部門或職位，直接開啟一對一對話。</p>
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
              </div>
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
                {hasConversation ? '開啟對話' : '開始對話'}
              </button>
            </article>
          )
        }) : <EmptyState title="找不到符合的同仁" text="請試試姓名、員工編號或部門關鍵字。" />}
      </div>
    </section>
  )
}

function CommunityOwnerReviewPanel({ community, requests, onApprove, onReject }) {
  return (
    <section className="mt-6 rounded-card border border-line bg-white p-5 shadow-card">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Moderator Review</p>
          <h2 className="mt-1 text-xl font-black">版主加入審核</h2>
        </div>
        <span className="pill-dark w-fit">{requests.length} 件待確認</span>
      </div>
      <p className="mt-3 leading-7 text-slate-600">此社群由你擔任版主，若設定為人工審核，加入申請會集中在這裡確認。</p>
      <div className="mt-4 space-y-3">
        {requests.map((request) => (
          <article key={request.id} className="rounded-card bg-mist p-4">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <h3 className="font-black text-ink">{request.requester}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{request.employeeId || '員工編號待同步'} · {request.department} · {request.role}</p>
              </div>
              <span className="pill whitespace-nowrap">{community.name}</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-600">{request.eligibility || request.reason || '等待版主確認是否可加入社群。'}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <button className="btn-primary justify-center" onClick={() => onApprove(request)}>核准加入</button>
              <button className="btn-secondary justify-center" onClick={() => onReject(request)}>退回申請</button>
            </div>
          </article>
        ))}
        {!requests.length && <EmptyState title="目前沒有待審核申請" text="有人申請加入這個社群時，版主可以在這裡核准或退回。" />}
      </div>
    </section>
  )
}

function ProfilePage({ profile }) {
  const importedFields = [
    ['姓名', profile.name],
    ['帳號', profile.email],
    ['所屬公司', profile.company],
    ['事業部', profile.division],
    ['部門', profile.department],
    ['職位', profile.role],
    ['年齡', `${profile.age} 歲`],
    ['年資', `${profile.seniority} 年`],
    ['工作地點', profile.location],
  ]

  return (
    <PageWrap>
      <PageTitle eyebrow="Employee Profile" title="My Profile｜我的資料" text="此頁以公司匯入的員工資料為主，僅供平台識別與同仁確認使用；若資料有誤，請洽人資或系統管理單位更新。" />
      <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
        <section className="rounded-[28px] bg-white p-6 shadow-card">
          <div className="rounded-card bg-mist p-5">
            <p className="eyebrow">Company Imported</p>
            <h1 className="mt-3 text-4xl font-black">{profile.name}</h1>
            <p className="mt-2 font-semibold text-slate-600">{profile.department} · {profile.role}</p>
          </div>
          <div className="mt-5 rounded-card border border-line bg-white p-5">
            <h2 className="text-xl font-black text-ink">資料狀態</h2>
            <p className="mt-3 leading-7 text-slate-600">個人檔案資料由公司系統匯入，平台 Demo 暫不提供自行編輯，避免員工資料與公司紀錄不一致。</p>
          </div>
        </section>
        <section className="rounded-[28px] bg-white p-6 shadow-card">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Employee Data</p>
              <h2 className="mt-2 text-2xl font-black text-ink">公司匯入資料</h2>
            </div>
            <span className="pill w-fit">唯讀資料</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {importedFields.map(([label, value]) => <Info key={label} label={label} value={value} />)}
          </div>
        </section>
      </div>
    </PageWrap>
  )
}

function RulesPage() {
  const rules = [
    {
      title: '平台定位',
      items: ['台塑 Connect 採公司帳號實名制，發文、留言與聊天室以公司匯入資料識別。', '平台聚焦於發文、留言、收藏與常見問題沉澱，讓討論內容可以被信任與管理。'],
    },
    {
      title: '社群發文',
      items: ['社群發文不需要先選類別，直接寫下問題、使用經驗、流程提醒或常見錯誤。', '發文時請盡量描述背景、已嘗試的方法與希望獲得的協助。', '回覆時請提供具體做法、參考文件位置或可被其他同仁理解的經驗。'],
    },
    {
      title: '聊天室使用',
      items: ['聊天室適合延續一對一討論，可分享文字、圖片、檔案與連結。', '社群貼文適合留下可搜尋的問題與經驗，聊天室適合補充細節與後續確認。', '請避免張貼薪資、考績、健康、家庭或其他敏感個人資料。'],
    },
    {
      title: '禁止事項',
      items: ['不得進行未經許可的商業推銷、投資招攬、借貸、兼職招募或私人交易。', '不得散播企業機密、未公開財務資訊、客戶資料或任何未經核准的內部文件。', '不得使用攻擊、歧視、騷擾或讓他人感到不舒服的文字。'],
    },
  ]
  return (
    <PageWrap>
      <PageTitle eyebrow="Guidelines" title="Connect Guide｜交流守則" text="台塑 Connect 採公司實名制，讓每一則發文、留言與討論都能被信任，也讓資訊安全與交流品質被妥善管理。" />
      <section className="rounded-[28px] bg-white p-6 shadow-card lg:p-8">
        <h2 className="text-3xl font-black">共同使用原則</h2>
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">台塑 Connect 是企業內部學習交流平台，內容應聚焦於問題解決、工作使用經驗、工具心得與跨部門知識流動。平台資料僅作為交流與知識沉澱用途，不應直接作為績效評價或私人用途。</p>
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

function AdminOverview({ profile, communities, joinRequests, navigate }) {
  const allPosts = communities.flatMap((community) => community.posts.map((post) => ({ ...post, communityId: community.id, communityName: community.name, category: community.category })))
  const pendingRequests = joinRequests.filter((request) => request.status === '待審核')
  const approvalCommunities = communities.filter((community) => community.joinPolicy === 'approval')
  return (
    <PageWrap>
      <PageTitle eyebrow="HR Admin" title="台塑 Connect｜人資後台" text={`${profile.department} 可查看所有社群內容與營運狀態，協助平台維持知識交流品質。`} />
      <div className="grid gap-4 md:grid-cols-4">
        <Info label="總社群數" value={`${communities.length} 個`} />
        <Info label="總貼文數" value={`${allPosts.length} 則`} />
        <Info label="待審加入申請" value={`${pendingRequests.length} 件`} />
        <Info label="審核加入社群" value={`${approvalCommunities.length} 個`} />
      </div>
      <section className="mt-6 rounded-card border border-line bg-white p-5 shadow-card">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Monthly Active Users</p>
            <h2 className="mt-1 text-2xl font-black">活躍用戶觀察</h2>
          </div>
          <span className="pill-dark w-fit">本月活躍 510 人</span>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <BarList title="年齡層分布" items={activeUserAnalytics.ageGroups} />
          <BarList title="部門分布" items={activeUserAnalytics.departments} />
        </div>
      </section>
      <section className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <article className="rounded-card border border-line bg-white p-5 shadow-card">
          <SectionHeader title="需要人資注意" />
          <div className="space-y-3">
            {pendingRequests.map((request) => <AdminRequestRow key={request.id} request={request} communities={communities} compact />)}
            {!pendingRequests.length && <EmptyState title="目前沒有待審申請" text="加入申請處理完畢，平台狀態很乾淨。" />}
          </div>
          <button className="btn-secondary mt-4 w-full justify-center" onClick={() => navigate('/admin/requests')}>查看加入申請</button>
        </article>
        <article className="rounded-card border border-line bg-white p-5 shadow-card">
          <SectionHeader title="熱門內容觀察" />
          <div className="space-y-3">
            {allPosts.sort((a, b) => (b.saves || b.likes || 0) - (a.saves || a.likes || 0)).slice(0, 3).map((post) => (
              <button key={post.id} className="w-full rounded-card bg-mist p-4 text-left transition hover:-translate-y-0.5 hover:bg-skysoft" onClick={() => navigate(`/admin/post/${post.id}`)}>
                <p className="text-sm font-black text-navy">{post.communityName}</p>
                <p className="mt-2 line-clamp-2 leading-7 text-slate-650">{post.content}</p>
                <p className="mt-2 text-xs font-bold text-slate-500">收藏 {(post.saves ?? post.likes ?? 0)} · 留言 {post.comments ?? 0}</p>
              </button>
            ))}
          </div>
          <button className="btn-secondary mt-4 w-full justify-center" onClick={() => navigate('/admin/content')}>查看內容觀察</button>
        </article>
      </section>
    </PageWrap>
  )
}

function BarList({ title, items }) {
  const max = Math.max(...items.map((item) => item.value), 1)
  return (
    <div className="rounded-card bg-mist p-4">
      <h3 className="text-lg font-black text-ink">{title}</h3>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="text-sm font-bold text-slate-600">{item.label}</span>
              <span className="text-sm font-black text-navy">{item.value} 人</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white">
              <div className="h-full rounded-full bg-azure" style={{ width: `${Math.max((item.value / max) * 100, 8)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AdminCommunities({ communities, profile, navigate }) {
  return (
    <PageWrap>
      <PageTitle eyebrow="Community Admin" title="社群管理" text="人資組可查看所有社群與貼文可見性設定；社群由員工創建後即成立，建立者自動成為版主。" />
      <div className="grid gap-4">
        {communities.map((community) => (
          <article key={community.id} className="rounded-card border border-line bg-white p-5 shadow-card">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
              <div>
                <p className="text-sm font-bold text-azure">{community.category}</p>
                <h2 className="mt-1 text-2xl font-black">{community.name}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-slate-600">{community.intro}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="pill-dark">{community.members} 人</span>
                  <span className="pill">版主：{community.owner || '平台管理小組'}</span>
                  <span className="pill">{communityVisibilityLabel(community)}</span>
                  <span className="pill">{communityJoinPolicyLabel(community)}</span>
                </div>
              </div>
              <button className="btn-secondary justify-center" onClick={() => navigate(`/admin/community/${community.id}`)}>以人資查看</button>
            </div>
            {community.visibility === 'members' && isHrAdmin(profile) && <p className="mt-4 rounded-card bg-mist p-4 text-sm font-semibold text-slate-500">此社群為成員可見，但人資後台仍可查看內容以利平台管理。</p>}
          </article>
        ))}
      </div>
    </PageWrap>
  )
}

function AdminRequests({ joinRequests, setJoinRequests, communities, notify }) {
  const pendingRequests = joinRequests.filter((request) => request.status === '待審核')
  const resolvedRequests = joinRequests.filter((request) => request.status !== '待審核')
  const updateRequest = (id, status) => {
    setJoinRequests((prev) => prev.map((request) => request.id === id ? { ...request, status } : request))
    notify(status === '已核准' ? '已核准加入申請。' : '已退回加入申請。')
  }
  return (
    <PageWrap>
      <PageTitle eyebrow="Join Requests" title="加入申請" text="新人訓社群以員工編號與梯次名單判斷資格，不需要填寫加入動機；社群創建本身不需要審核。" />
      <section className="rounded-card border border-line bg-white p-5 shadow-card">
        <SectionHeader title="待審核" />
        <div className="space-y-3">
          {pendingRequests.map((request) => (
            <AdminRequestRow key={request.id} request={request} communities={communities} onApprove={() => updateRequest(request.id, '已核准')} onReject={() => updateRequest(request.id, '已退回')} />
          ))}
          {!pendingRequests.length && <EmptyState title="沒有待審核申請" text="目前沒有需要人資處理的加入申請。" />}
        </div>
      </section>
      {resolvedRequests.length > 0 && (
        <section className="mt-6 rounded-card border border-line bg-white p-5 shadow-card">
          <SectionHeader title="已處理紀錄" />
          <div className="space-y-3">
            {resolvedRequests.map((request) => <AdminRequestRow key={request.id} request={request} communities={communities} compact />)}
          </div>
        </section>
      )}
    </PageWrap>
  )
}

function AdminContent({ communities, navigate }) {
  const [period, setPeriod] = useState('week')
  const allPosts = communities.flatMap((community) => community.posts.map((post) => ({ ...post, communityName: community.name, category: community.category })))
  const visiblePosts = allPosts
    .sort((a, b) => (b.saves || b.likes || 0) - (a.saves || a.likes || 0))
    .slice(0, period === 'week' ? 4 : period === 'month' ? 6 : allPosts.length)
  return (
    <PageWrap>
      <PageTitle eyebrow="Content Monitor" title="內容觀察" text="觀察熱門貼文、常見問題方向與高收藏內容，協助人資判斷哪些知識值得整理成公告或 FAQ。" />
      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <section className="rounded-card border border-line bg-white p-5 shadow-card">
          <SectionHeader title="常見議題" />
          <div className="grid gap-3">
            {['新人找窗口', '跨部門需求整理', '自動化報表', '工具使用流程'].map((topic, index) => (
              <div key={topic} className="rounded-card bg-mist p-4">
                <p className="text-2xl font-black text-navy">{index + 1}</p>
                <p className="mt-1 font-black">{topic}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-card border border-line bg-white p-5 shadow-card">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-black">熱門貼文</h2>
            <ChoiceButtons
              label="統計區間"
              value={period}
              onChange={setPeriod}
              options={[
                ['week', '本週'],
                ['month', '本月'],
                ['quarter', '本季'],
              ]}
            />
          </div>
          <div className="space-y-3">
            {visiblePosts.map((post) => (
              <button key={post.id} className="w-full rounded-card bg-mist p-4 text-left transition hover:-translate-y-0.5 hover:bg-skysoft" onClick={() => navigate(`/admin/post/${post.id}`)}>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm font-black text-navy">{post.communityName} · {post.category}</p>
                    <p className="mt-2 leading-7 text-slate-650">{post.content}</p>
                  </div>
                  <span className="pill-dark whitespace-nowrap">收藏 {post.saves ?? post.likes ?? 0}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </PageWrap>
  )
}

function AdminPostDetail({ postId, communities, navigate }) {
  const community = communities.find((item) => item.posts.some((post) => post.id === postId))
  const post = community?.posts.find((item) => item.id === postId)
  if (!community || !post) {
    return (
      <PageWrap>
        <button className="mb-5 text-sm font-bold text-navy hover:underline" onClick={() => navigate('/admin/content')}>返回內容觀察</button>
        <EmptyState title="找不到這篇貼文" text="可能是貼文已被移除，或目前資料尚未同步。" />
      </PageWrap>
    )
  }
  return (
    <PageWrap>
      <button className="mb-5 text-sm font-bold text-navy hover:underline" onClick={() => navigate('/admin/content')}>返回內容觀察</button>
      <PageTitle eyebrow="Post Detail" title="貼文詳情" text="人資可從熱門貼文直接查看完整內容與留言脈絡，判斷是否需要整理成公告、FAQ 或內部知識文件。" />
      <section className="rounded-card border border-line bg-white p-5 shadow-card">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="pill-dark">{community.name}</span>
          <span className="pill">{community.category}</span>
          <span className="pill">版主：{community.owner || '平台管理小組'}</span>
        </div>
        <PostCard post={post} canComment={false} />
      </section>
    </PageWrap>
  )
}

function AdminRequestRow({ request, communities, onApprove, onReject, compact = false }) {
  const community = communities.find((item) => item.id === request.communityId)
  return (
    <article className="rounded-card bg-mist p-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h3 className="font-black text-ink">{request.requester} 申請加入 {community?.name || '社群'}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500">{request.employeeId || '員工編號待同步'} · {request.department} · {request.role} · {request.time}</p>
        </div>
        <span className={request.status === '待審核' ? 'pill-dark' : 'pill'}>{request.status}</span>
      </div>
      {!compact && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Info label="新人訓梯次" value={request.cohort || '系統判定'} />
          <Info label="資格判定" value={request.eligibility || request.reason || '符合社群審核條件'} />
        </div>
      )}
      {onApprove && onReject && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <button className="btn-primary justify-center" onClick={onApprove}>核准加入</button>
          <button className="btn-secondary justify-center" onClick={onReject}>退回申請</button>
        </div>
      )}
    </article>
  )
}

function AppNav({ route, profile, navigate, logout }) {
  const items = [
    ['Connect News', '公告與常見問題', '/dashboard'],
    ['Connect Chat', '一對一討論', '/chat'],
    ['Connect Hub', '學習社群', '/communities'],
    ['Connect Guide', '交流守則', '/rules'],
    ['My Profile', '我的資料', '/profile'],
  ]
  return (
    <aside className="fixed left-5 top-5 z-40 hidden h-[calc(100vh-2.5rem)] w-72 flex-col rounded-[28px] bg-white p-5 shadow-soft lg:flex">
      <button onClick={() => navigate('/dashboard')} className="mb-9 text-left text-2xl font-black text-navy">台塑 Connect</button>
      <nav className="flex flex-1 flex-col gap-2">
        {items.map(([english, chinese, path]) => {
          const active = route === path || route.startsWith(path + '/')
          return (
            <button key={path} onClick={() => navigate(path)} className={`nav-item items-start text-left ${active ? 'active' : ''}`}>
              <span className="block text-base font-black">{english}</span>
              <span className={`mt-1 block text-xs font-bold ${active ? 'text-navy/70' : 'text-slate-500'}`}>{chinese}</span>
            </button>
          )
        })}
      </nav>
      {isHrAdmin(profile) && <button onClick={() => navigate('/admin')} className="nav-item text-left">進入人資後台</button>}
      <button onClick={logout} className="nav-item text-left">登出</button>
    </aside>
  )
}

function AdminNav({ route, navigate, logout }) {
  const items = [
    ['Admin Overview', '後台總覽', '/admin'],
    ['Communities', '社群管理', '/admin/communities'],
    ['Requests', '加入申請', '/admin/requests'],
    ['Content Monitor', '內容觀察', '/admin/content'],
  ]
  return (
    <aside className="fixed left-5 top-5 z-40 hidden h-[calc(100vh-2.5rem)] w-72 flex-col rounded-[28px] bg-white p-5 shadow-soft lg:flex">
      <button onClick={() => navigate('/admin')} className="mb-7 text-left">
        <span className="block text-2xl font-black text-navy">HR Console</span>
        <span className="mt-1 block text-sm font-bold text-slate-500">台塑 Connect 後台</span>
      </button>
      <nav className="flex flex-1 flex-col gap-2">
        {items.map(([english, chinese, path]) => {
          const active = route === path
          return (
            <button key={path} onClick={() => navigate(path)} className={`nav-item items-start text-left ${active ? 'active' : ''}`}>
              <span className="block text-base font-black">{english}</span>
              <span className={`mt-1 block text-xs font-bold ${active ? 'text-navy/70' : 'text-slate-500'}`}>{chinese}</span>
            </button>
          )
        })}
      </nav>
      <button onClick={() => navigate('/dashboard')} className="nav-item text-left">回員工平台</button>
      <button onClick={logout} className="nav-item text-left">登出</button>
    </aside>
  )
}

function MobileTabs({ route, navigate }) {
  const items = [
    ['News', '/dashboard'],
    ['Chat', '/chat'],
    ['Hub', '/communities'],
    ['Guide', '/rules'],
    ['My', '/profile'],
  ]
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-[22px] border border-line bg-white/95 p-2 shadow-soft backdrop-blur lg:hidden">
      {items.map(([label, path]) => <button key={path} onClick={() => navigate(path)} className={`rounded-2xl px-2 py-3 text-sm font-bold ${route === path || route.startsWith(path + '/') ? 'bg-skysoft text-navy' : 'text-slate-500'}`}>{label}</button>)}
    </nav>
  )
}

function AdminMobileTabs({ route, navigate }) {
  const items = [
    ['總覽', '/admin'],
    ['社群', '/admin/communities'],
    ['申請', '/admin/requests'],
    ['內容', '/admin/content'],
    ['平台', '/dashboard'],
  ]
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-[22px] border border-line bg-white/95 p-2 shadow-soft backdrop-blur lg:hidden">
      {items.map(([label, path]) => <button key={path} onClick={() => navigate(path)} className={`rounded-2xl px-2 py-3 text-sm font-bold ${route === path ? 'bg-skysoft text-navy' : 'text-slate-500'}`}>{label}</button>)}
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
      {compact && <button className="mt-2 w-full rounded-full px-4 py-3 text-sm font-bold text-navy hover:bg-mist" onClick={() => inviteMentor(mentor)}>開始對話</button>}
    </article>
  )
}

function CreateCommunityModal({ profile, onClose, setCommunities, setProfile, notify }) {
  const [form, setForm] = useState({
    name: '',
    intro: '',
    category: '工作技能',
    tags: '',
    visibility: 'public',
    joinPolicy: 'open',
    companies: '',
    departments: '',
    minSeniority: '',
  })
  const [error, setError] = useState('')
  const create = () => {
    if (!form.name.trim() || !form.intro.trim()) {
      setError('請填寫社群名稱與簡介')
      return
    }
    const newCommunityId = `c${Date.now()}`
    const newCommunity = {
      id: newCommunityId,
      name: form.name.trim(),
      category: form.category,
      intro: form.intro.trim(),
      members: 1,
      tags: splitText(form.tags).length ? splitText(form.tags) : [form.category],
      owner: profile.name,
      visibility: form.visibility,
      joinPolicy: form.joinPolicy,
      restrictions: {
        companies: splitText(form.companies),
        departments: splitText(form.departments),
        minSeniority: form.minSeniority,
      },
      posts: [
        {
          id: `p${Date.now()}`,
          author: profile.name,
          meta: `${profile.department} · 社群版主`,
          time: '剛剛',
          content: `歡迎加入 ${form.name.trim()}，可以先分享一個你想討論的問題或經驗。`,
          likes: 0,
          comments: 0,
        },
      ],
    }
    setCommunities((prev) => [newCommunity, ...prev])
    setProfile((prev) => ({ ...prev, joinedCommunities: [...prev.joinedCommunities, newCommunityId] }))
    notify('社群已建立。')
    onClose()
  }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-navy/30 px-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-soft">
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
          <div className="rounded-card border border-line bg-white p-4">
            <p className="label">版主設定</p>
            <p className="mb-4 text-sm font-semibold text-slate-500">預設不加入也能看社群，加入後才能發文與留言；版主可在這裡加上更嚴格的限制。</p>
            <ChoiceButtons
              label="貼文可見性"
              value={form.visibility}
              onChange={(value) => setForm({ ...form, visibility: value })}
              options={[
                ['public', '不加入也可以看貼文'],
                ['members', '加入後才能看貼文'],
              ]}
            />
            <div className="mt-4">
              <ChoiceButtons
                label="加入方式"
                value={form.joinPolicy}
                onChange={(value) => setForm({ ...form, joinPolicy: value })}
                options={[
                  ['open', '自由加入'],
                  ['restricted', '符合條件才能加入'],
                  ['approval', '版主人工審核'],
                ]}
              />
            </div>
          </div>
          {form.joinPolicy === 'restricted' && (
            <div className="rounded-card bg-mist p-4">
              <h3 className="font-black text-ink">加入限制條件</h3>
              <p className="mt-1 text-sm font-semibold text-slate-500">可擇一或多項設定，空白代表不限。</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Input label="限定公司（以逗號分隔）" value={form.companies} onChange={(value) => setForm({ ...form, companies: value })} />
                <Input label="限定部門（以逗號分隔）" value={form.departments} onChange={(value) => setForm({ ...form, departments: value })} />
                <Input label="最低年資" value={form.minSeniority} onChange={(value) => setForm({ ...form, minSeniority: value })} type="number" />
              </div>
            </div>
          )}
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
          placeholder={`輸入想和 ${mentor.name} 討論的問題、檔案說明或連結補充...`}
        />
        <button className="btn-primary justify-center sm:min-w-28" onClick={submit}>送出</button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {['圖片', '檔案', '連結'].map((item) => <button key={item} type="button" className="chip">{item}</button>)}
        <span className="flex items-center text-sm font-semibold text-slate-400">Demo 顯示附件入口，正式版可串接上傳與權限控管。</span>
      </div>
    </div>
  )
}

function CommunityCard({ community, profile, setProfile, setJoinRequests, navigate, notify, horizontal = false }) {
  const joined = profile.joinedCommunities.includes(community.id)
  const toggleJoin = (event) => {
    event.stopPropagation()
    toggleCommunityMembership({ community, profile, setProfile, notify, setJoinRequests })
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
        <span className="pill">{communityVisibilityLabel(community)}</span>
        <span className="pill">{communityJoinPolicyLabel(community)}</span>
        {community.tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-500">最新貼文：{community.posts[0]?.content.slice(0, 32)}...</p>
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
        {options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value
          const optionLabel = typeof option === 'string' ? (option || '不限') : option.label
          return <option key={optionValue} value={optionValue}>{optionLabel}</option>
        })}
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

function ChoiceButtons({ label, options, value, onChange }) {
  return (
    <div>
      <p className="label">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map(([optionValue, optionLabel]) => (
          <button key={optionValue} type="button" onClick={() => onChange(optionValue)} className={value === optionValue ? 'chip active' : 'chip'}>
            {optionLabel}
          </button>
        ))}
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
      { id: 'p1-r1', author: '周明翰', text: '我會先問直屬主管確認方向，再把問題整理成三點去找窗口，避免直接丟一大串訊息。' },
      { id: 'p1-r2', author: '林若涵', text: '可以先寫清楚背景、目前卡點、希望對方協助的地方，跨部門窗口比較容易回覆。' },
      { id: 'p1-r3', author: '吳品萱', text: '我會先搜尋社群有沒有相似問題，再決定要公開發問或私訊補細節。' },
    ],
    p2: [
      { id: 'p2-r1', author: '張庭安', text: '這份清單很實用，尤其是常用表單位置，很多新人第一週都會問。' },
      { id: 'p2-r2', author: '陳柏宇', text: '建議可以加一欄「負責窗口」，未來查找會更快。' },
    ],
    p3: [
      { id: 'p3-r1', author: '塑寶', text: '想知道現金流表要先追哪些項目，期待模板。' },
      { id: 'p3-r2', author: '劉怡君', text: '簡單可持續很重要，初版不用太複雜。' },
    ],
    p4: [
      { id: 'p4-r1', author: '張庭安', text: 'Project Brief 很適合給新人理解專案全貌。' },
      { id: 'p4-r2', author: '許哲維', text: '如果可以加一欄資料需求會更完整。' },
    ],
  }
  return replies[post.id] || [
    { id: `${post.id}-r1`, author: '陳柏宇', text: '這個主題很值得延伸討論，我也想聽聽其他部門的做法。' },
    { id: `${post.id}-r2`, author: '林若涵', text: '可以把問題情境再寫具體一點，大家比較容易提供經驗。' },
  ]
}

function PostCard({ post, canComment = true }) {
  const [saved, setSaved] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [localComments, setLocalComments] = useState([])
  const existingReplies = getPostReplies(post)
  const allReplies = [...existingReplies, ...localComments]
  const saveCount = (post.saves ?? post.likes ?? 0) + (saved ? 1 : 0)
  const commentCount = (post.comments ?? existingReplies.length) + localComments.length
  const submitComment = () => {
    if (!canComment) return
    if (!commentText.trim()) return
    setLocalComments((prev) => [...prev, { id: `local-${Date.now()}`, author: '塑寶', text: commentText.trim() }])
    setCommentText('')
    setShowComments(true)
  }

  return (
    <article className="rounded-card border border-line bg-white p-5 shadow-card">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h3 className="font-black">{post.author}</h3>
          <p className="text-sm text-slate-500">{post.meta} · {post.time}</p>
        </div>
      </div>
      <p className="mt-4 leading-7 text-slate-700">{post.content}</p>
      <div className="mt-4 flex gap-4 text-sm font-bold text-slate-500">
        <button className={saved ? 'text-navy' : 'hover:text-navy'} onClick={() => setSaved((value) => !value)}>{saved ? '已收藏' : '收藏'} {saveCount}</button>
        <button className="hover:text-navy" onClick={() => setShowComments((value) => !value)}>留言 {commentCount}</button>
      </div>
      {showComments && (
        <div className="mt-4 rounded-card bg-mist p-4">
          <div className="space-y-3">
            {allReplies.map((reply) => (
              <div key={reply.id} className="rounded-2xl bg-white p-3 text-sm text-slate-700">
                <p className="leading-6"><span className="font-black text-ink">{reply.author}：</span>{reply.text}</p>
              </div>
            ))}
          </div>
          {canComment ? (
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
          ) : (
            <p className="mt-3 rounded-2xl bg-white p-3 text-sm font-semibold text-slate-500">加入社群後才能留言。</p>
          )}
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
