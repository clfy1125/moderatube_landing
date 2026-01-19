import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  Share2,
  Plus,
  MoreHorizontal,
  LayoutGrid,
  List as ListIcon,
  Filter,
  Search,
  Link as LinkIcon,
  RefreshCw,
  TrendingUp,
  ShieldAlert,
  ArrowUp,
  ArrowDown,
  Trash2,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { Toaster, toast } from 'sonner@2.0.3';
import ModeratubeLogo from './ModeratubeLogo';
import moderatubeLogo from 'figma:asset/d3253dfcd7571b4d74f48b634f2f649438085078.png';
import adminProfile from 'figma:asset/361e04d3b0d9db1c922f626d1a0c8ddd19e93b7b.png';
import youtubeIcon from 'figma:asset/6a8f10feba381d68be99d719e724f8c1108519ed.png';
import instagramIcon from 'figma:asset/888432ea81a88ca3fcd74af0a85bb6604cf4998f.png';
import tiktokIcon from 'figma:asset/2d7fe57797a1f7eb5e5d4576d7a8d656eebd4829.png';
import nineteenIcon from 'figma:asset/a2586f8428b27104e4e7661cbb181fc5f5604576.png';
import bikiniGirl1 from 'figma:asset/2431bb25a150242539d067b8ee7ede9514f03b85.png';
import bikiniGirl2 from 'figma:asset/41b4457fa0646d79f31fb7db93293a380db82a62.png';
import googleLogo from 'figma:asset/d8e6402e01078f9ea83b9f47b085e97b6a530a99.png';

// --- Components Helpers ---

const NavItem = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${active
      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/20'
      : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }`}
  >
    <div className={`transition-colors ${active ? 'text-white' : 'group-hover:text-white'}`}>
      {icon}
    </div>
    <span className="font-medium">{label}</span>
  </button>
);

const StatCard = ({ label, value, trend, color, iconColor, iconBg, icon }: any) => (
  <div className={`${color} rounded-lg p-6 shadow-sm`}>
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      {trend && (
        <span className={`text-sm font-bold ${trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'} bg-white px-2 py-1 rounded-full shadow-sm`}>
          {trend}
        </span>
      )}
    </div>
    <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

// --- Constants ---

const LOADING_MESSAGES = [
  "계정 정보를 불러오는 중...",
  "최근 댓글 데이터를 분석 중...",
  "스팸 필터링 엔진 가동 중...",
  "대시보드 구성 중..."
];

const PLATFORM_STATS = [
  { name: 'YouTube', value: '1,842', trend: 12.5, up: true },
  { name: 'Instagram', value: '654', trend: 5.2, up: true },
  { name: 'TikTok', value: '128', trend: 2.1, up: false },
];

const SPAM_TREND_DATA = [
  { name: '10일', value: 420 },
  { name: '11일', value: 380 },
  { name: '12일', value: 550 },
  { name: '13일', value: 720 },
  { name: '14일', value: 450 },
  { name: '15일', value: 280 },
  { name: '16일', value: 150 },
];

const PIE_DATA = [
  { name: '스팸', value: 65, color: '#6366f1' },     // Indigo-500
  { name: '욕설', value: 20, color: '#f43f5e' },     // Rose-500
  { name: '정상', value: 15, color: '#10b981' },     // Emerald-500
];

const INITIAL_COMMENTS = [
  {
    id: 1,
    author: "MakeMoneyFast",
    platform: "youtube",
    content: "하루 30분 투자로 월 500만원 버는 법! 제 채널에서 확인하세요 👇👇 https://bit.ly/...",
    timestamp: "방금 전",
    type: "spam",
    avatar: nineteenIcon
  },
  {
    id: 2,
    author: "김철수",
    platform: "youtube",
    content: "영상 내용이 정말 유익하네요. 잘 보고 갑니다!",
    timestamp: "1분 전",
    type: "normal",
    avatar: googleLogo
  },
  {
    id: 3,
    author: "HotGirl_99",
    platform: "instagram",
    content: "오빠 오늘 밤에 뭐해? 제 프로필 놀러오세요 ❤️💋",
    timestamp: "5분 전",
    type: "sexual",
    avatar: bikiniGirl1
  },
  {
    id: 4,
    author: "AngryBird",
    platform: "tiktok",
    content: "노잼이네 ㅡㅡ 이딴걸 영상이라고 올리냐? 나가 죽어라",
    timestamp: "12분 전",
    type: "hatespeech",
    avatar: googleLogo
  },
  {
    id: 5,
    author: "CoinMaster",
    platform: "youtube",
    content: "비트코인 지금이 기회입니다. 500% 수익 보장 리딩방 무료 초대",
    timestamp: "24분 전",
    type: "spam",
    avatar: nineteenIcon
  },
  {
    id: 6,
    author: "Lovely_Sue",
    platform: "instagram",
    content: "사진 분위기 너무 좋아요! 맞팔해요 ㅎㅎ",
    timestamp: "35분 전",
    type: "normal",
    avatar: bikiniGirl2
  }
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'youtube': return youtubeIcon;
    case 'instagram': return instagramIcon;
    case 'tiktok': return tiktokIcon;
    default: return youtubeIcon;
  }
};

const getStatusColor = (type: string) => {
  switch (type) {
    case 'spam': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
    case 'sexual': return 'bg-rose-50 text-rose-600 border-rose-100';
    case 'hatespeech': return 'bg-orange-50 text-orange-600 border-orange-100';
    case 'normal': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
    default: return 'bg-slate-50 text-slate-600 border-slate-100';
  }
};

const getStatusLabel = (type: string) => {
  switch (type) {
    case 'spam': return '광고/스팸';
    case 'sexual': return '성적 유해';
    case 'hatespeech': return '악플/욕설';
    case 'normal': return '정상';
    default: return '기타';
  }
};

const getStatusIcon = (type: string) => {
  switch (type) {
    case 'spam': return <ShieldAlert size={12} />;
    case 'sexual': return <AlertOctagon size={12} />; // Using AlertOctagon as placeholder if HeartOff not available or similar
    case 'hatespeech': return <Megaphone size={12} />;
    case 'normal': return <CheckCircle2 size={12} />;
    default: return <ShieldAlert size={12} />;
  }
};

import { Megaphone, AlertOctagon } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isInitializing, setIsInitializing] = useState(true);
  const [isDashboardReady, setIsDashboardReady] = useState(false);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const [snsAccounts, setSnsAccounts] = useState<any[]>([
    {
      id: 1,
      platform: 'youtube',
      name: '슈카월드',
      handle: '@syukaworld',
      description: '경제/시사 종합 채널',
      status: 'active',
      connectedAt: '2023.10.15',
      lastSync: '방금 전'
    },
    {
      id: 2,
      platform: 'instagram',
      name: 'Moderatube_Official',
      handle: '@moderatube_ai',
      description: '공식 인스타그램 계정',
      status: 'warning',
      connectedAt: '2023.11.02',
      lastSync: '2시간 전'
    }
  ]);

  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [isPlatformSelectOpen, setIsPlatformSelectOpen] = useState(false);

  // Loading Sequence
  useEffect(() => {
    if (snsAccounts.length > 0) {
      const messageInterval = setInterval(() => {
        setLoadingMessageIndex(prev => (prev + 1) % LOADING_MESSAGES.length);
      }, 2000);

      const readyTimer = setTimeout(() => {
        setIsInitializing(false);
        setIsDashboardReady(true);
        clearInterval(messageInterval);
      }, 2500); // 2.5 seconds for demo

      return () => {
        clearInterval(messageInterval);
        clearTimeout(readyTimer);
      };
    }
  }, [snsAccounts.length]);

  const handleDelete = (id: number) => {
    setComments(prev => prev.filter(c => c.id !== id));
    toast.success('댓글이 삭제되었습니다.');
  };

  const handleDeleteAll = () => {
    setComments(prev => prev.filter(c => c.type === 'normal'));
    toast.success('모든 스팸/악성 댓글이 삭제되었습니다.');
  };

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  const handleNavClick = (tab: string) => {
    if (['comments', 'stats', 'config'].includes(tab)) {
      toast.info("데모 사이트이므로 현 기능은 보이지 않습니다.", {
        style: { background: '#334155', color: '#fff', border: 'none' }
      });
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen bg-[#F8FAFA] font-sans text-slate-800 overflow-hidden" style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1C23] text-white flex flex-col flex-shrink-0">
        <div className="p-8 flex items-center justify-center">
          <img src={moderatubeLogo} alt="Moderatube" className="h-8 w-auto object-contain brightness-0 invert" />
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavItem
            icon={<LayoutDashboard size={20} />}
            label="대시보드"
            active={activeTab === 'dashboard'}
            onClick={() => handleNavClick('dashboard')}
          />
          <NavItem
            icon={<Share2 size={20} />}
            label="SNS 계정"
            active={activeTab === 'sns'}
            onClick={() => handleNavClick('sns')}
          />
          <NavItem
            icon={<MessageSquare size={20} />}
            label="댓글 관리"
            active={activeTab === 'comments'}
            onClick={() => handleNavClick('comments')}
          />
          <NavItem
            icon={<TrendingUp size={20} />}
            label="통계"
            active={activeTab === 'stats'}
            onClick={() => handleNavClick('stats')}
          />
          <div className="pt-8 pb-2 px-4 text-xs text-gray-500 uppercase tracking-wider font-semibold">설정</div>
          <NavItem
            icon={<Settings size={20} />}
            label="환경 설정"
            active={activeTab === 'config'}
            onClick={() => handleNavClick('config')}
          />
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
            <img src={adminProfile} alt="Admin" className="w-8 h-8 rounded-full bg-indigo-500" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Admin User</div>
              <div className="text-xs text-gray-400 truncate">admin@moderatube.com</div>
            </div>
            <Settings size={16} className="text-gray-400" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm z-20">
          <h1 className="text-xl font-bold text-gray-800">
            {activeTab === 'dashboard' && '대시보드'}
            {activeTab === 'sns' && 'SNS 계정 관리'}
            {activeTab === 'comments' && '댓글 관리'}
            {activeTab === 'stats' && '통계 분석'}
            {activeTab === 'config' && '환경 설정'}
          </h1>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell size={20} className="text-gray-500 hover:text-indigo-600 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
            </div>
            <div className="w-px h-4 bg-slate-300"></div>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              <LogOut size={18} />
              <span>로그아웃</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 relative">

          {activeTab === 'dashboard' && (
            <>
              {/* 1. Empty State - No Accounts */}
              {snsAccounts.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center -mt-20">
                  <div className="bg-white p-12 rounded-2xl shadow-sm border border-slate-200 text-center max-w-lg w-full">
                    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Share2 size={40} className="text-indigo-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">연결된 계정이 없습니다</h2>
                    <p className="text-gray-500 mb-8 break-keep leading-relaxed">
                      SNS 계정을 연결하여 실시간 댓글 모니터링과 스팸 차단 기능을 시작해보세요. YouTube, Instagram 등 다양한 플랫폼을 지원합니다.
                    </p>
                    <button
                      onClick={() => setActiveTab('sns')}
                      className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 mx-auto"
                    >
                      <Plus size={20} />
                      <span>SNS 계정 연결하기</span>
                    </button>
                  </div>
                </div>
              )}

              {/* 2. Loading State - Initializing */}
              {snsAccounts.length > 0 && isInitializing && (
                <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-32 h-32 mb-8">
                      {/* Rotating Ring */}
                      <motion.div
                        className="absolute inset-0 border-4 border-indigo-100 rounded-full"
                      ></motion.div>
                      <motion.div
                        className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      ></motion.div>
                      {/* Icon in Center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <LayoutDashboard size={40} className="text-indigo-600" />
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">초기화 작업 중</h2>
                    <motion.p
                      key={loadingMessageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-gray-500 font-medium"
                    >
                      {LOADING_MESSAGES[loadingMessageIndex]}
                    </motion.p>
                  </motion.div>
                </div>
              )}

              {/* 3. Dashboard Content - Ready */}
              {snsAccounts.length > 0 && isDashboardReady && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard
                      label="전체 댓글"
                      value="12,543"
                      trend="+12%"
                      color="bg-white border border-slate-300"
                      iconColor="text-white"
                      iconBg="bg-black"
                      icon={<MessageSquare size={24} />}
                    />
                    <StatCard
                      label="차단된 스팸"
                      value="2,624"
                      trend="+8.4%"
                      color="bg-white border border-slate-300"
                      iconColor="text-white"
                      iconBg="bg-black"
                      icon={<ShieldAlert size={24} />}
                    />
                    <StatCard
                      label="정확도"
                      value="99.8%"
                      trend="+0.5%"
                      color="bg-white border border-slate-300"
                      iconColor="text-white"
                      iconBg="bg-black"
                      icon={<TrendingUp size={24} />}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column (Takes up 2 cols) */}
                    <div className="lg:col-span-2 space-y-8 min-w-0">

                      {/* Chart Section */}
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-300">

                        {/* Chart Header with Total */}
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-1">전체 스팸 탐지</h2>
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-bold text-slate-900">2,624</span>
                              <span className="text-sm font-medium text-emerald-500 flex items-center">
                                2.6% <ArrowUp size={14} className="ml-0.5" />
                              </span>
                            </div>
                          </div>
                          <button className="text-sm text-indigo-600 font-semibold hover:underline">상세 리포트</button>
                        </div>

                        {/* Platform Breakdown */}
                        <div className="space-y-3 mb-8 border-t border-b border-slate-100 py-4">
                          {PLATFORM_STATS.map((stat) => (
                            <div key={stat.name} className="flex items-center justify-between text-sm">
                              <span className="font-semibold text-slate-700 w-24">{stat.name}</span>
                              <div className="flex-1 mx-4">
                                {/* Simple Bar visual could go here, but text is cleaner for this layout */}
                              </div>
                              <div className="flex items-center gap-6">
                                <span className="text-slate-500 font-medium">{stat.value}건</span>
                                <span className={`flex items-center w-16 justify-end ${stat.up ? 'text-emerald-500' : 'text-rose-500'}`}>
                                  {stat.up ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
                                  {stat.trend}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mb-2 text-center text-xs text-slate-400 tracking-widest uppercase">기간별 스팸 탐지 추이</div>

                        {/* Area Chart */}
                        <div className="h-48 w-full min-h-[192px] min-w-0">
                          <ResponsiveContainer width="99%" height="100%">
                            <AreaChart data={SPAM_TREND_DATA}>
                              <defs>
                                <linearGradient id="colorSpamTrend" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                </linearGradient>
                              </defs>
                              <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                dy={10}
                              />
                              <Tooltip
                                contentStyle={{
                                  borderRadius: '8px',
                                  border: 'none',
                                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                  padding: '8px 12px',
                                  fontSize: '12px'
                                }}
                                itemStyle={{ color: '#6366f1' }}
                              />
                              <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#6366f1"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorSpamTrend)"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                          <div className="w-3 h-3 bg-indigo-500 border-2 border-white shadow-sm rounded-sm"></div>
                          <span className="text-xs text-slate-500 font-medium">전체 스팸량</span>
                        </div>
                      </div>

                      {/* Comment Management Section */}
                      <div className="bg-white rounded-lg shadow-sm border border-slate-300 overflow-hidden">
                        <div className="flex items-center justify-between p-6 border-b border-slate-300">
                          <h2 className="text-xl font-bold text-gray-800">실시간 탐지 현황</h2>
                          <button
                            onClick={handleDeleteAll}
                            className="px-4 py-2 bg-rose-50 text-rose-600 rounded-lg text-sm font-semibold hover:bg-rose-100 transition-colors flex items-center gap-2"
                          >
                            <Trash2 size={16} />
                            <span>전체 삭제</span>
                          </button>
                        </div>

                        <div className="">
                          <AnimatePresence>
                            {comments
                              .filter(c => c.type !== 'normal')
                              .slice(0, visibleCount)
                              .map((comment, index, arr) => (
                                <motion.div
                                  key={comment.id}
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className={`flex items-start gap-4 p-5 hover:bg-slate-50 transition-colors group ${index !== arr.length - 1 ? 'border-b border-slate-300' : ''
                                    }`}
                                >
                                  <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full object-cover" />

                                  <div className="flex-1 min-w-0 pt-1">
                                    <div className="flex items-center gap-2 mb-1.5">
                                      <h4 className="font-bold text-sm text-gray-800">{comment.author}</h4>
                                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                      <img
                                        src={getPlatformIcon(comment.platform)}
                                        alt={comment.platform}
                                        className="h-4 w-4 object-contain opacity-80"
                                      />
                                      <span className="text-xs text-gray-400 ml-1">{comment.timestamp}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3 break-keep leading-relaxed group-hover:text-gray-900 transition-colors">{comment.content}</p>

                                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(comment.type)}`}>
                                      {getStatusIcon(comment.type)}
                                      <span>{getStatusLabel(comment.type)}</span>
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => handleDelete(comment.id)}
                                    className="p-2 text-gray-300 hover:text-rose-500 hover:bg-rose-50 rounded-md transition-all opacity-0 group-hover:opacity-100"
                                    title="댓글 삭제"
                                  >
                                    <Trash2 size={18} />
                                  </button>
                                </motion.div>
                              ))}
                          </AnimatePresence>

                          {comments.filter(c => c.type !== 'normal').length === 0 && (
                            <div className="text-center py-12 text-gray-400">
                              <CheckCircle2 size={48} className="mx-auto mb-3 text-emerald-500 opacity-50" />
                              <p>깨끗합니다! 검토할 댓글이 없습니다.</p>
                            </div>
                          )}
                        </div>

                        {visibleCount < comments.filter(c => c.type !== 'normal').length && (
                          <div className="bg-gray-50 p-3 text-center border-t border-slate-200">
                            <button
                              onClick={handleShowMore}
                              className="text-sm font-semibold text-gray-600 hover:text-indigo-600 flex items-center justify-center gap-1 w-full"
                            >
                              <span>더 보기</span>
                              <ChevronDown size={16} />
                            </button>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Right Column - Stats & Other Info */}
                    <div className="space-y-8 min-w-0">

                      {/* Pie Chart Card */}
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-300">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-lg font-bold text-gray-800">분류 비율</h2>
                          <button className="text-xs text-gray-400 hover:text-indigo-600">상세 보기</button>
                        </div>
                        <div className="h-64 relative min-h-[256px] min-w-0">
                          <ResponsiveContainer width="99%" height="100%">
                            <PieChart>
                              <Pie
                                data={PIE_DATA}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                              >
                                {PIE_DATA.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                          {/* Center Text */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-bold text-gray-800">1.2만</span>
                            <span className="text-xs text-gray-400">전체</span>
                          </div>
                        </div>
                        <div className="space-y-3 mt-2">
                          {PIE_DATA.map((item) => (
                            <div key={item.name} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                                <span className="text-gray-600">{item.name}</span>
                              </div>
                              <span className="font-bold text-gray-800">{item.value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </>
          )}

          {activeTab === 'sns' && (
            <div className="space-y-6">
              {/* SNS Page Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="계정 검색..."
                    className="pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5 w-full md:w-80 transition-all"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex bg-white border border-slate-300 rounded-lg p-1">
                    <button className="p-2 hover:bg-slate-50 rounded-md text-gray-600"><Filter size={18} /></button>
                    <div className="w-px bg-slate-200 mx-1 my-1"></div>
                    <button className="p-2 bg-slate-100 rounded-md text-gray-900"><LayoutGrid size={18} /></button>
                    <button className="p-2 hover:bg-slate-50 rounded-md text-gray-600"><ListIcon size={18} /></button>
                  </div>
                  <button
                    onClick={() => setIsPlatformSelectOpen(true)}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <span>새 계정 연결</span>
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800">연결된 계정</h3>

              {/* SNS Account Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {snsAccounts.map((account) => (
                  <motion.div
                    key={account.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-slate-300 rounded-lg p-6 hover:shadow-lg transition-all group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <img
                            src={getPlatformIcon(account.platform)}
                            alt={account.platform}
                            className="w-12 h-12 object-contain"
                          />
                          {account.status === 'active' && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
                          )}
                          {account.status === 'warning' && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 leading-tight">{account.name}</h4>
                          <span className="text-sm text-gray-500">{account.platform}</span>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>

                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600 mb-3">
                        {account.platform === 'youtube' && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
                        {account.platform === 'instagram' && <span className="w-2 h-2 rounded-full bg-pink-500"></span>}
                        {account.platform === 'tiktok' && <span className="w-2 h-2 rounded-full bg-black"></span>}
                        {account.handle}
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{account.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <LinkIcon size={14} />
                        <span>{account.connectedAt}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <RefreshCw size={14} />
                        <span>{account.lastSync}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Add New Placeholder Card */}
                <button
                  onClick={() => setIsPlatformSelectOpen(true)}
                  className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/50 transition-all min-h-[240px]"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-indigo-100 transition-colors">
                    <Plus size={24} />
                  </div>
                  <span className="font-medium">새 계정 연결하기</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Platform Selection Modal */}
      <AnimatePresence>
        {isPlatformSelectOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlatformSelectOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative overflow-hidden"
            >
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">어떤 플랫폼을 연결하시겠어요?</h3>
                <p className="text-gray-500 mb-8">연결할 SNS 플랫폼을 선택해주세요.</p>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center p-6 border border-slate-200 rounded-xl hover:bg-red-50 hover:border-red-200 transition-all group">
                    <img src={youtubeIcon} alt="YouTube" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-gray-700">YouTube</span>
                  </button>
                  <button className="flex flex-col items-center p-6 border border-slate-200 rounded-xl hover:bg-pink-50 hover:border-pink-200 transition-all group">
                    <img src={instagramIcon} alt="Instagram" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-gray-700">Instagram</span>
                  </button>
                  <button className="flex flex-col items-center p-6 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all group">
                    <img src={tiktokIcon} alt="TikTok" className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-gray-700">TikTok</span>
                  </button>
                  <button className="flex flex-col items-center p-6 border border-dashed border-slate-300 rounded-xl text-gray-400 hover:bg-slate-50 transition-all">
                    <Plus size={32} className="mb-2" />
                    <span className="text-sm">More coming soon</span>
                  </button>
                </div>
              </div>
              <div className="bg-slate-50 p-4 flex justify-center border-t border-slate-100">
                <button
                  onClick={() => setIsPlatformSelectOpen(false)}
                  className="text-sm font-medium text-gray-500 hover:text-gray-800"
                >
                  취소하기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
