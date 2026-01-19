import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldAlert,
  TrendingUp,
  Share2,
  Play,
  Menu,
  X,
  Star,
  ChevronRight,
  Zap,
  Lock,
  Globe,
  BarChart3,
  ThumbsUp,
  ThumbsDown,
  MoreVertical,
  LayoutDashboard,
  Plus,
  ArrowUp,
  ArrowDown,
  Trash2,
  Search,
  Filter,
  LayoutGrid,
  List as ListIcon,
  MoreHorizontal,
  Link as LinkIcon,
  RefreshCw,
  ChevronDown,
  Award
} from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import ModeratubeLogo from './ModeratubeLogo';
import googleLogo from 'figma:asset/d8e6402e01078f9ea83b9f47b085e97b6a530a99.png';
import adminProfile from 'figma:asset/361e04d3b0d9db1c922f626d1a0c8ddd19e93b7b.png';
import youtubeIcon from 'figma:asset/6a8f10feba381d68be99d719e724f8c1108519ed.png';
import instagramIcon from 'figma:asset/888432ea81a88ca3fcd74af0a85bb6604cf4998f.png';
import spamAvatar from 'figma:asset/910cbc5025224d4c8ba75cc5fef1ba666e0082a1.png';
import normalAvatar from 'figma:asset/07cfe5800127f89fb7b2c734ae4501232d023b10.png';
import trustedByImage from 'figma:asset/f0f31e1c044ff1382346627c25f9b520049284d5.png';
import bikiniGirl1 from 'figma:asset/2431bb25a150242539d067b8ee7ede9514f03b85.png';
import imgUlsan from "figma:asset/1f6b90a249d0d8ce18bf3cb0b5e562078c62bf3f.png";
import imgUnist from "figma:asset/e1b217c40708335d981f1562083ba49de158efb5.png";
import imgMSS from "figma:asset/c16e0adb87e91cbfc0637c6d1c735a87f0c86a16.png";
import imgTips from "figma:asset/203c80972e39d6c9ce2dbfe6d711f76e6db28c1f.png";
import prohibitedIcon from 'figma:asset/d82143bd43aa7b89f575483cf25b2e25bb7de2b5.png';
import moderatubeLogo from 'figma:asset/d3253dfcd7571b4d74f48b634f2f649438085078.png';
import whiteLogo from '../assets/white_logo.png';

// --- Feature Showcase Components ---

const CommentManagerScreen = () => (
  <div className="bg-white h-full flex flex-col">
    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-xs font-bold text-slate-400">AI COMMENT MANAGER</div>
    </div>
    <div className="flex-1 p-6 overflow-hidden relative">
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse shadow-md">
          신종 변종 스팸 감지중
        </div>
      </div>
      <div className="space-y-4">
        {[
          { author: "@GOLD로얄ON팬NEW클00릭", content: "들어갔는데 쥬. 소 지리네..", type: "spam", time: "12시간 전" },
          { author: "@19이상프.사눌러a", content: "프러필 좌아표에 다른거풀린것도있냐", type: "spam", time: "12시간 전" },
          { author: "@GOLD로얄온팬클릭", content: "남.. 자만 드루. 와", type: "spam", time: "8시간 전" },
          { author: "@1.9이.상프사눌러", content: "내 닉..넴 확..인", type: "spam", time: "4일 전" },
          { author: "김철수", content: "오늘 영상 진짜 유익하네요! 감사합니다.", type: "normal", time: "1분 전" },
        ].map((c, i) => (
          <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border ${c.type === 'spam' ? 'bg-rose-50 border-rose-100' : 'bg-white border-slate-100'}`}>
            <div className={`w-10 h-10 rounded-full shrink-0 overflow-hidden ${c.type === 'spam' ? 'bg-rose-100' : 'bg-slate-100'}`}>
              {c.type === 'spam' ? (
                <img src={prohibitedIcon} alt="Spam" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-slate-200" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between mb-1">
                <span className="font-bold text-sm truncate">{c.author}</span>
                <span className="text-xs text-gray-400 shrink-0 ml-2">{c.time}</span>
              </div>
              <p className={`text-sm ${c.type === 'spam' ? 'text-rose-700 font-medium' : 'text-gray-600'}`}>{c.content}</p>
              {c.type === 'spam' && (
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-[10px] text-rose-500 font-bold bg-rose-100 px-1.5 py-0.5 rounded">키워드 우회 감지</span>
                </div>
              )}
            </div>
            {c.type === 'spam' && (
              <div className="px-3 py-1 bg-rose-600 text-white text-xs font-bold rounded-full shadow-sm shrink-0">
                차단됨
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hand Cursor Animation */}
      <motion.div
        initial={{ x: 300, y: 300, opacity: 0 }}
        animate={{
          x: [300, 250, 250, 300],
          y: [300, 80, 80, 300],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
        className="absolute z-20 pointer-events-none"
      >
        <div className="w-12 h-12 bg-black/20 rounded-full absolute -inset-2 animate-ping"></div>
        <div className="w-8 h-8 bg-slate-900 rounded-full border-2 border-white shadow-xl flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  </div>
);

const DashboardScreen = () => (
  <div className="bg-white h-full flex flex-col">
    <div className="p-6 border-b border-slate-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-slate-800">실시간 탐지 현황</h3>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold animate-pulse">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
          LIVE
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100 relative overflow-hidden group">
          <div className="text-xs text-slate-400 mb-1 z-10 relative">총 차단 수</div>
          <div className="text-2xl font-bold text-rose-600 z-10 relative">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={Date.now()}
            >
              12,450
            </motion.span>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-rose-200"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="flex-1 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="text-xs text-slate-400 mb-1">보호된 댓글</div>
          <div className="text-2xl font-bold text-slate-800">85,201</div>
        </div>
      </div>
    </div>
    <div className="flex-1 p-6 flex flex-col justify-center">
      <div className="h-40 w-full bg-slate-50 rounded-lg mb-4 relative overflow-hidden flex items-end px-4 pb-0 gap-3">
        {[40, 65, 30, 85, 45, 95, 60, 75, 50, 80].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-indigo-50 rounded-t-sm relative group overflow-hidden"
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <motion.div
              className="absolute bottom-0 w-full bg-indigo-500 rounded-t-sm"
              initial={{ height: "0%" }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5
              }}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between items-center text-xs text-slate-400 px-1">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>Now</span>
      </div>
    </div>
  </div>
);

const ChannelScreen = () => (
  <div className="bg-slate-900 h-full flex flex-col text-white p-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-transparent pointer-events-none"></div>
    <div className="relative z-10 mb-8">
      <h3 className="text-xl font-bold">다중 채널 통합 관리</h3>
      <p className="text-sm text-slate-400 mt-1">운영 중인 모든 유튜브 채널을 한 곳에서 보호하세요.</p>
    </div>

    <div className="space-y-4 relative z-10">
      {[
        { name: "Moderatube Official", sub: "본채널", icon: youtubeIcon, status: "보호 중", color: "bg-indigo-600" },
        { name: "Moderatube Shorts", sub: "숏폼 채널", icon: youtubeIcon, status: "보호 중", color: "bg-indigo-600" },
        { name: "Moderatube Live", sub: "라이브 하이라이트", icon: youtubeIcon, status: "동기화 중", color: "bg-indigo-600" }
      ].map((ch, i) => (
        <div key={i} className="bg-white/10 border border-white/10 p-4 rounded-xl flex items-center justify-between backdrop-blur-sm group hover:bg-white/15 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
              <img src={ch.icon} className="w-6 h-6 object-contain" />
            </div>
            <div>
              <div className="font-bold text-sm flex items-center gap-2">
                {ch.name}
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/80 font-normal">{ch.sub}</span>
              </div>
              <div className="text-xs text-gray-400">마지막 점검: 방금 전</div>
            </div>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1.5 ${ch.status === '보호 중' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${ch.status === '보호 중' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></div>
            {ch.status}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-auto flex justify-center">
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-indigo-900/50 hover:scale-105 transition-transform">
        <Plus size={16} /> 채널 추가하기
      </button>
    </div>
  </div>
);

const MainDashboardPreview = () => {
  return (
    <div className="flex w-full h-[640px] bg-slate-50 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 text-left">
      {/* Sidebar */}
      <div className="w-60 bg-slate-900 flex flex-col p-5 shrink-0">
        <div className="mb-10 px-2 opacity-90 hover:opacity-100 transition-opacity">
          <img src={whiteLogo} alt="Moderatube" className="h-4 w-auto object-contain mt-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-indigo-600 rounded-xl text-white font-bold text-sm shadow-lg shadow-indigo-900/50 cursor-pointer">
            <LayoutDashboard size={18} />
            <span>대시보드</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium cursor-pointer transition-colors">
            <Share2 size={18} />
            <span>SNS 계정</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium cursor-pointer transition-colors">
            <MessageSquare size={18} />
            <span>댓글 관리</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium cursor-pointer transition-colors">
            <BarChart3 size={18} />
            <span>통계</span>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white cursor-pointer text-sm transition-colors">
            <ArrowRight size={18} className="rotate-180" />
            <span>로그아웃</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50/30">
        {/* Header */}
        <div className="h-16 border-b border-slate-200 bg-white px-8 flex items-center justify-between shrink-0">
          <h2 className="text-lg font-bold text-slate-800">안녕하세요, 관리자님</h2>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="검색..." className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all" />
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-slate-800">관리자</div>
                <div className="text-[10px] text-slate-400">Moderatube Manager</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-slate-200 ring-2 ring-white shadow-sm">
                <img src={adminProfile} alt="Admin" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-5 mb-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-slate-500 text-xs font-bold mb-1">전체 댓글</div>
                  <div className="text-2xl font-black text-slate-900">12,543</div>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl text-white">
                  <MessageSquare size={18} />
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-50 w-fit px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                <span>+12%</span>
                <span className="text-emerald-600/70 font-medium ml-1">전주 대비</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-slate-500 text-xs font-bold mb-1">차단된 스팸</div>
                  <div className="text-2xl font-black text-rose-600">2,624</div>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl text-white">
                  <ShieldAlert size={18} />
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-50 w-fit px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                <span>+8.4%</span>
                <span className="text-emerald-600/70 font-medium ml-1">전주 대비</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-slate-500 text-xs font-bold mb-1">정확도</div>
                  <div className="text-2xl font-black text-indigo-600">99.8%</div>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-xl text-white">
                  <Award size={18} />
                </div>
              </div>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-50 w-fit px-2 py-1 rounded-full">
                <TrendingUp size={12} />
                <span>+0.5%</span>
                <span className="text-emerald-600/70 font-medium ml-1">전주 대비</span>
              </div>
            </div>
          </div>

          {/* Main Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Spam Detection Detail */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 flex flex-col h-[340px]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-slate-900 font-bold text-lg mb-1">전체 스팸 탐지</div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-slate-900">2,624</span>
                    <span className="text-emerald-500 font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                      2.6% <ArrowUp size={12} />
                    </span>
                  </div>
                </div>
                <button className="text-indigo-600 text-xs font-bold hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">상세 리포트</button>
              </div>

              <div className="flex-1 flex flex-col">
                {/* Platform Stats List */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center py-1">
                    <div className="flex items-center gap-2.5 font-bold text-slate-700 text-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm shadow-red-200"></div> YouTube
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-slate-900 text-sm">1,245건</span>
                      <span className="text-emerald-500 text-xs font-bold w-14 text-right bg-emerald-50 py-0.5 rounded">↑ 12.5%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <div className="flex items-center gap-2.5 font-bold text-slate-700 text-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-sm shadow-pink-200"></div> Instagram
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-slate-900 text-sm">856건</span>
                      <span className="text-emerald-500 text-xs font-bold w-14 text-right bg-emerald-50 py-0.5 rounded">↑ 3.2%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <div className="flex items-center gap-2.5 font-bold text-slate-700 text-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-black shadow-sm"></div> TikTok
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-slate-900 text-sm">523건</span>
                      <span className="text-rose-500 text-xs font-bold w-14 text-right bg-rose-50 py-0.5 rounded">↓ 7%</span>
                    </div>
                  </div>
                </div>

                {/* Area Chart at Bottom */}
                <div className="h-[120px] w-full mt-auto -mx-4 -mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={SPAM_TREND_DATA} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorSpamBig" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#6366f1"
                        strokeWidth={3}
                        fill="url(#colorSpamBig)"
                        animationDuration={2000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Classification Donut */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 flex flex-col h-[340px]">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-bold text-slate-900">분류 비율</div>
                <button className="text-slate-400 text-xs hover:text-slate-600">상세 보기</button>
              </div>

              <div className="flex-1 flex items-center justify-center min-h-0 w-full relative">
                <div className="w-full h-[160px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={PIE_DATA}
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={4}
                        dataKey="value"
                        cornerRadius={4}
                      >
                        <Cell fill="#3b82f6" /> {/* 광고 - Blue */}
                        <Cell fill="#ec4899" /> {/* 성적 유해 - Pink */}
                        <Cell fill="#ef4444" /> {/* 악플 - Red */}
                        <Cell fill="#64748b" /> {/* 기타 - Gray */}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-0">
                  <div className="text-2xl font-black text-slate-900">1.2만</div>
                  <div className="text-xs text-slate-400 font-bold">전체</div>
                </div>
              </div>

              <div className="space-y-2.5 mt-2">
                {[
                  { label: '광고', color: 'bg-blue-500', val: '45%' },
                  { label: '성적 유해', color: 'bg-pink-500', val: '20%' },
                  { label: '악플', color: 'bg-red-500', val: '15%' },
                  { label: '기타', color: 'bg-slate-500', val: '20%' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                      <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                      {item.label}
                    </div>
                    <div className="font-bold text-slate-800">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { title: "AI 댓글 관리", desc: "실시간 스팸 자동 삭제", icon: <Trash2 size={18} /> },
    { title: "실시간 감지 현황", desc: "데이터 대시보드", icon: <BarChart3 size={18} /> },
    { title: "다중 채널 관리", desc: "여러 채널을 한 곳에서", icon: <LayoutGrid size={18} /> }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Navigation */}
        <div className="lg:col-span-4 space-y-4">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${activeTab === idx
                ? 'bg-white border-indigo-200 shadow-xl scale-105 z-10'
                : 'bg-white border-transparent hover:bg-slate-50 text-slate-400'
                }`}
            >
              <div className={`absolute inset-0 bg-indigo-50 transform origin-left transition-transform duration-[4000ms] ease-linear ${activeTab === idx ? 'scale-x-100' : 'scale-x-0'}`} style={{ opacity: 0.1 }}></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className={`p-3 rounded-xl ${activeTab === idx ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'bg-slate-100 text-slate-400'}`}>
                  {tab.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${activeTab === idx ? 'text-slate-900' : 'text-slate-500'}`}>{tab.title}</h3>
                  <p className="text-sm text-slate-400 mt-1">{tab.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right: Screen Preview */}
        <div className="lg:col-span-8">
          <div className="relative mx-auto rounded-[2.5rem] bg-slate-900 p-4 shadow-2xl border-4 border-slate-900 aspect-[4/3] lg:aspect-[16/10] overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-slate-800 rounded-[2rem] overflow-hidden">
              <div className="w-full h-full relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-white"
                  >
                    {activeTab === 0 && <CommentManagerScreen />}
                    {activeTab === 1 && <DashboardScreen />}
                    {activeTab === 2 && <ChannelScreen />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Glossy Overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};


const PricingSection = () => (
  <section id="pricing" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">합리적인 요금제</h2>
        <p className="text-slate-500">채널 규모에 맞는 최적의 플랜을 선택하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Basic */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all relative">
          <h3 className="text-xl font-bold text-slate-900">Basic</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-slate-900">0</span>
            <span className="text-slate-500">원 / 월</span>
          </div>
          <p className="text-sm text-slate-500 mb-8 h-10">댓글 관리를 처음 시작하는 크리에이터를 위한 기본 기능</p>
          <button className="w-full py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-colors">출시예정</button>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-slate-400" /> 스팸 자동 차단 (월 100건)</div>
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-slate-400" /> 1개 채널 연동</div>
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-slate-400" /> 기본 대시보드</div>
          </div>
        </div>

        {/* Pro */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-indigo-600 relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
          <h3 className="text-xl font-bold text-indigo-600">Pro</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-slate-900">9,900</span>
            <span className="text-slate-500">원 / 월</span>
          </div>
          <p className="text-sm text-slate-500 mb-8 h-10">성장하는 채널을 위한 강력한 AI 분석 및 보호</p>
          <button className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">출시예정</button>
          <div className="mt-8 space-y-4 text-sm text-slate-600 font-medium">
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-indigo-600" /> 무제한 스팸 차단</div>
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-indigo-600" /> 3개 채널 연동</div>
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-indigo-600" /> 고급 분석 리포트</div>
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-indigo-600" /> 24/7 우선 지원</div>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-slate-900">문의</span>
          </div>
          <p className="text-sm text-slate-500 mb-8 h-10">MCN 및 기업을 위한 맞춤형 솔루션</p>
          <button className="w-full py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-colors">출시예정</button>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-slate-400" /> 무제한 채널 연동</div>
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-slate-400" /> 커스텀 AI 모델 학습</div>
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-slate-400" /> 전담 매니저 배정</div>
            <div className="flex gap-2"><CheckCircle2 size={16} className="text-slate-400" /> API 연동 지원</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustedSection = () => {
  const logos = [
    { src: imgMSS, alt: "중소벤처기업부", scale: 1 },
    { src: imgTips, alt: "TIPS", scale: 1 },
    { src: imgUnist, alt: "유니스트기술지주", scale: 0.9 },
    { src: imgUlsan, alt: "울산창조경제혁신센터", scale: 1 },
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-bold">정부 지원사업 선정</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            검증된 기술력을 인정받았습니다
          </h2>
          <p className="text-lg text-slate-500">
            정부 및 공공기관의 지원을 받는 신뢰할 수 있는 기술입니다
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10" />

          <motion.div
            className="flex items-center"
            animate={{
              x: ["0%", "-30%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-[280px] h-[120px] mx-6 flex items-center justify-center shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-[#F5F6F9] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="relative max-w-full max-h-full object-contain origin-center"
                  style={{ transform: `scale(${logo.scale})` }}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};



const SPAM_TREND_DATA = [
  { name: '10일', value: 420 },
  { name: '11일', value: 380 },
  { name: '12일', value: 550 },
  { name: '13일', value: 720 },
  { name: '14일', value: 450 },
  { name: '15일', value: 280 },
  { name: '16일', value: 150 },
];

const PLATFORM_STATS = [
  { name: 'YouTube', value: 1840, trend: 12.5, up: true },
  { name: 'Instagram', value: 645, trend: 8.2, up: true },
  { name: 'TikTok', value: 139, trend: 2.1, up: false },
];

const PIE_DATA = [
  { name: '스팸', value: 45, color: '#ef4444' }, // red-500
  { name: '성인', value: 30, color: '#f97316' }, // orange-500
  { name: '욕설', value: 15, color: '#eab308' }, // yellow-500
  { name: '정상', value: 10, color: '#22c55e' }, // green-500
];

const LOADING_MESSAGES = [
  "SNS 계정 정보를 불러오는 중...",
  "최근 댓글 데이터를 분석 중...",
  "스팸 패턴을 감지하는 중...",
  "대시보드를 구성하는 중..."
];

// --- Components ---

const StatCard = ({ label, value, trend, color, iconColor, iconBg, icon }: any) => (
  <div className={`${color} rounded-xl p-6 shadow-sm`}>
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

const CommentItem = ({ author, content, type, avatar, timestamp, likes = 0, isReply = false }: any) => {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    if (type !== 'normal') {
      const timer = setTimeout(() => setIsBlocked(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [type]);

  return (
    <div className={`flex items-start gap-3 p-3 ${isReply ? 'ml-12 bg-slate-50 rounded-xl mt-2' : 'bg-white'} hover:bg-slate-100 transition-colors group relative`}>
      <img src={avatar} alt={author} className="w-8 h-8 rounded-full object-cover" />
      <div className="flex-1 min-w-0 relative">
        <div className="flex items-center gap-2 mb-1">
          <h4 className={`font-semibold text-[13px] ${isBlocked ? 'text-gray-400' : 'text-gray-900'} ${type === 'spam' && !isBlocked ? 'text-rose-600' : ''}`}>
            {author}
          </h4>
          <span className="text-[12px] text-gray-500">{timestamp}</span>
        </div>

        <div className="relative">
          <p className={`text-[14px] leading-snug text-gray-800 mb-2 transition-all duration-500 ${isBlocked ? 'blur-sm opacity-20 select-none' : ''}`}>
            {content}
          </p>

          <AnimatePresence>
            {isBlocked && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center gap-2"
              >
                <div className="flex-1 bg-gray-100 rounded-lg h-full min-h-[32px] flex items-center px-3 gap-2 text-xs font-medium text-gray-500">
                  <ShieldAlert size={14} className="text-rose-500" />
                  <span className="truncate">Moderatube가 스팸 댓글을 차단했습니다.</span>
                </div>
                <button
                  onClick={() => setIsBlocked(false)}
                  className="text-xs text-blue-600 font-medium hover:underline whitespace-nowrap px-2"
                >
                  표시
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={`flex items-center gap-4 ${isBlocked ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
          <button className="flex items-center gap-1.5 text-gray-600 hover:bg-gray-200 p-1 -ml-1 rounded-full transition-colors">
            <ThumbsUp size={14} />
            <span className="text-xs font-medium">{likes || 0}</span>
          </button>
          <button className="text-gray-600 hover:bg-gray-200 p-1 rounded-full transition-colors">
            <ThumbsDown size={14} />
          </button>
          <button className="text-xs font-medium text-gray-600 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors">
            답글
          </button>
        </div>
      </div>
      <button className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 rounded-full absolute top-2 right-2">
        <MoreVertical size={16} />
      </button>
    </div>
  );
};

export default function LandingPage({ onStart }: { onStart: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // iframe을 사용한 form submit으로 CORS 우회
    const form = e.currentTarget;
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    form.target = 'hidden_iframe';
    form.submit();

    // 2초 후 성공 메시지 (실제 응답을 받을 수 없으므로 타이머 사용)
    setTimeout(() => {
      alert('사전체험 신청이 완료되었습니다!');
      form.reset();
      setIsSubmitting(false);
      document.body.removeChild(iframe);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800" style={{ fontFamily: '"Noto Sans KR", sans-serif' }}>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ModeratubeLogo className="h-8" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => scrollToSection('service')} className="hover:text-indigo-600 transition-colors">서비스 소개</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-indigo-600 transition-colors">요금제</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-colors">문의하기</button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-bold hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              사전체험 신청하기
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              AI로 끝내는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-500">유튜브 스팸댓글</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed break-keep">
              Moderatube는 최신 AI 기술로 스팸댓글을 1초 만에 자동 차단해드립니다. <br />
              크리에이터는 오직 콘텐츠 제작에만 집중하세요.
            </p>
          </motion.div>

          {/* Hero Visual - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto relative text-left mt-8"
          >
            <MainDashboardPreview />

            {/* Floating Elements - Hidden for cleaner look with dashboard */}
            {/* <motion.div ... > ... </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase (Unified) */}
      <section id="service" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-bold mb-4">FEATURES</div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              유튜브 채널 관리를 위한<br className="md:hidden" />
              <span className="relative inline-block">
                <span className="relative z-10">완벽한 솔루션</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-indigo-100 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Moderatube 하나로 댓글 관리부터 채널 분석까지 한 번에 해결하세요.
            </p>
          </div>

          <FeatureShowcase />
        </div>
      </section>

      {/* AI Differentiation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold mb-4">
              <Zap size={12} fill="currentColor" /> AI TECHNOLOGY
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">단순 키워드 차단으로는 막을 수 없습니다</h2>
            <p className="text-slate-500">교묘하게 빗겨가는 신종 스팸, 문맥을 이해하는 AI만이 잡을 수 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Old Way */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                  <Filter size={20} />
                </div>
                <h3 className="font-bold text-xl text-slate-700">기존 금칙어 필터링</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-slate-400 line-through text-sm">바카라 사이트 접속...</div>
                <div className="bg-white p-3 rounded-lg border border-red-200 text-red-600 font-bold text-sm flex justify-between items-center">
                  <span>바.카.라 사.이.트...</span>
                  <span className="text-xs bg-red-100 px-2 py-1 rounded">뚫림</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-red-200 text-red-600 font-bold text-sm flex justify-between items-center">
                  <span>내 닉..넴 확..인...</span>
                  <span className="text-xs bg-red-100 px-2 py-1 rounded">뚫림</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-500">변형된 키워드를 일일이 등록해야 하며, 새로운 패턴에 취약합니다.</p>
            </div>

            {/* New Way */}
            <div className="bg-white p-8 rounded-2xl border-2 border-indigo-600 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">MODERATUBE AI</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <Zap size={20} fill="currentColor" />
                </div>
                <h3 className="font-bold text-xl text-slate-900">AI 문맥 분석 엔진</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-400 line-through text-sm flex justify-between items-center opacity-50">
                  <span>바카라 사이트 접속...</span>
                  <span className="text-xs bg-slate-200 px-2 py-1 rounded">차단</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 text-slate-700 text-sm flex justify-between items-center">
                  <span>바.카.라 사.이.트...</span>
                  <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded font-bold shadow-sm">AI 차단 성공</span>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 text-slate-700 text-sm flex justify-between items-center">
                  <span>내 닉..넴 확..인...</span>
                  <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded font-bold shadow-sm">AI 차단 성공</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-600 font-medium">유해성 점수와 문맥을 분석하여 변종 스팸까지 99.8% 잡아냅니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Government */}
      <TrustedSection />

      {/* Pricing */}
      <PricingSection />

      {/* Pre-Experience Form (New) */}
      <section id="contact" className="py-24 bg-slate-50" ref={formRef}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-transparent"></div>
              <h2 className="text-3xl font-bold relative z-10 mb-4">사전체험 신청하기</h2>
              <p className="text-gray-300 relative z-10">지금 신청하시면 1개월 무료 체험 혜택을 드립니다.</p>
            </div>

            <form
              className="p-10 space-y-6"
              onSubmit={handleFormSubmit}
              action="https://script.google.com/macros/s/AKfycbzuxzeo41D9Q9CT--TqnE5v6rEOMjD-JAlh3aFDLt0qgl_b9-9YyiAQ-s3AP4y0HJBy/exec"
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">이름</label>
                  <input name="name" type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="홍길동" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">이메일</label>
                  <input name="email" type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="example@email.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">채널 URL (YouTube/Instagram)</label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input name="channel" type="url" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="https://youtube.com/@channel" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">관심 분야</label>
                <div className="flex flex-wrap gap-3">
                  {['스팸 차단', '악플 관리', '채널 분석', '기타'].map((tag) => (
                    <label key={tag} className="flex items-center gap-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100">
                      <input name="interests" type="checkbox" value={tag} className="rounded text-indigo-600 focus:ring-indigo-500" />
                      <span className="text-sm text-slate-700">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:bg-indigo-400 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? '제출 중...' : '무료 사전체험 신청하기'}
              </button>

              <p className="text-xs text-center text-gray-400 mt-4">
                * 신청해 주시면 담당자가 24시간 이내에 연락드립니다.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <ModeratubeLogo className="h-6 opacity-50 grayscale" />
            </div>
            <div className="text-sm text-slate-400">
              © 2026 Moderatube. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href={import.meta.env.VITE_TERMS_OF_SERVICE_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600">이용약관</a>
              <a href={import.meta.env.VITE_PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
