// AI 创作工具箱 - 应用逻辑

const CATEGORIES = [
    { id: "all", label: "全部", icon: "&#9733;" },
    { id: "writing", label: "核心写作", icon: "&#128221;" },
    { id: "planning", label: "构思规划", icon: "&#128161;" },
    { id: "character", label: "人设世界观", icon: "&#128100;" },
    { id: "package", label: "包装推广", icon: "&#128200;" },
    { id: "video", label: "剧本视频", icon: "&#127916;" },
];

const TOOLS = [
    { id: 1, category: "writing", icon: "&#9998;", name: "AI 写作", tag: "hot", tagText: "热门", desc: "一句话生成 2000 字以上正文，支持长篇小说、短篇小说、公众号文章、剧本等多种文体", detailDesc: "基于多轮对话上下文理解，一键生成长篇正文。内置多种写作风格模板，可自定义输出长度和文风，是整个创作流程的核心引擎。", models: ["GPT-4o", "Claude", "DeepSeek"], features: ["一句话指令即可生成 2000~5000 字正文", "支持长篇小说 / 短篇小说 / 公众号 / 剧本等多种体裁", "自动保持上下文连贯性，续写不跑偏", "内置爆款写作模板与行业风格库"], accent: "linear-gradient(135deg, #6366f1, #8b5cf6)", iconBg: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))" },
    { id: 2, category: "writing", icon: "&#10024;", name: "AI 扩写润色", tag: null, tagText: "", desc: "一键扩写现有情节、润色文笔、优化对话，让内容更加生动饱满", detailDesc: "对已有文本进行深度扩写与润色处理。通过 AI 理解上下文语义，在保留原意基础上丰富细节描写、优化语言表达。", models: ["GPT-4o", "Claude"], features: ["智能识别扩写位置，精准插入细节描写", "对话润色：让角色说话更有个性", "去 AI 味处理，文字自然流畅", "支持批量段落处理"], accent: "linear-gradient(135deg, #06b6d4, #0ea5e9)", iconBg: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(14,165,233,0.1))" },
    { id: 3, category: "writing", icon: "&#128221;", name: "AI 续写正文", tag: "new", tagText: "升级", desc: "关联上文剧情后自动理解上下文，根据大纲思路智能续写下一章节", detailDesc: "强大的上下文关联能力，自动分析前文剧情走向、人物性格、叙事节奏，确保续写内容与前文无缝衔接。", models: ["Claude", "GPT-4o", "DeepSeek"], features: ["最长支持 50 万字级超长文本上下文", "自动记忆前文人物关系与伏笔", "根据大纲节点精准推进剧情", "支持多分支剧情选择续写方向"], accent: "linear-gradient(135deg, #8b5cf6, #a78bfa)", iconBg: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(167,139,250,0.1))" },
    { id: 4, category: "planning", icon: "&#128161;", name: "AI 生成脑洞", tag: "pro", tagText: "推荐", desc: "将零散的想法快速拓展为成熟的故事框架，激发无限创作灵感", detailDesc: "输入任意关键词、灵感碎片或模糊想法，AI 将其扩展为完整的故事框架，包含冲突设计、高潮布局、反转设置等。", models: ["GPT-4o", "Claude", "Kimi"], features: ["关键词 → 故事框架 一键转换", "自动设计冲突点和高潮节奏", "提供多个脑洞方案供选择", "支持融合多个创意方向"], accent: "linear-gradient(135deg, #f59e0b, #f97316)", iconBg: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(249,115,22,0.1))" },
    { id: 5, category: "planning", icon: "&#128203;", name: "AI 生成大纲", tag: null, tagText: "", desc: "梳理完善作品脉络，快速生成结构清晰的作品大纲，规划全书走向", detailDesc: "根据故事类型、目标字数、读者群体等信息，自动生成包含卷章划分、主线副线、关键转折点的完整作品大纲。", models: ["GPT-4o", "DeepSeek"], features: ["自动拆分卷章结构，合理分配篇幅", "主副线交织设计，层次分明", "关键转折点与伏笔标注", "支持番茄 / 起点等平台结构规范"], accent: "linear-gradient(135deg, #10b981, #059669)", iconBg: "linear-gradient(rgba(16,185,129,0.15), rgba(5,150,105,0.1))" },
    { id: 6, category: "planning", icon: "&#128241;", name: "AI 生成细纲", tag: null, tagText: "", desc: "结合番茄爆款公式将大纲拆分为条理分明的细纲，每章都有明确任务", detailDesc: "在大纲基础上进一步细化到每一章的具体内容安排，结合平台爆款公式确保每章都有吸引读者的钩子。", models: ["GPT-4o", "Claude"], features: ["按章细化，明确每章核心任务", "融入番茄 / 七猫等平台爆款公式", "自动设置章末悬念钩子", "爆点分布均匀，避免节奏拖沓"], accent: "linear-gradient(135deg, #ec4899, #db2777)", iconBg: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.1))" },
    { id: 7, category: "character", icon: "&#127917;", name: "AI 生成人设", tag: "hot", tagText: "热门", desc: "快速生成富有代入感的人物设定，包括外貌、性格、背景、成长弧光", detailDesc: "创建立体丰满的角色档案，涵盖外貌特征、性格缺陷、成长动机、人际关系网等全方位人设信息。", models: ["Claude", "GPT-4o"], features: ["完整角色档案：外貌 / 性格 / 背景 / 动机", "角色成长弧光设计，有血有肉", "自动生成角色之间的人物关系图", "避免模板化人设，保证独特性"], accent: "linear-gradient(135deg, #8b5cf6, #6366f1)", iconBg: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(99,102,241,0.1))" },
    { id: 8, category: "character", icon: "&#127757;", name: "AI 世界观设定", tag: null, tagText: "", desc: "构建符合作品需求的完整世界观，包括力量体系、社会结构、地理环境", detailDesc: "针对玄幻 / 科幻 / 都市 / 历史等不同题材，自动生成自洽的世界观体系，确保设定无逻辑矛盾。", models: ["GPT-4o", "Claude", "Kimi"], features: ["力量等级体系自动构建", "社会结构 / 阶层 / 组织设计", "地理地图与区域特色描述", "设定自洽性检测，发现矛盾自动提示"], accent: "linear-gradient(135deg, #0ea5e9, #06b6d4)", iconBg: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(6,182,212,0.1))" },
    { id: 9, category: "character", icon: "&#9889;", name: "AI 生成金手指", tag: "new", tagText: "新", desc: "生成富有创意且具备成长性的小说金手指设定，增强爽感体验", detailDesc: "围绕主角身份和题材特点，设计具有独特性、成长空间和爽感的金手指系统，避免千篇一律的套路化设定。", models: ["GPT-4o", "DeepSeek"], features: ["多类型金手指：系统 / 物品 / 血脉 / 天赋", "成长路径设计，随剧情逐步解锁能力", "代价机制设计，增加戏剧张力", "与世界观高度融合，不突兀"], accent: "linear-gradient(135deg, #f59e0b, #eab308)", iconBg: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,179,8,0.1))" },
    { id: 10, category: "character", icon: "&#128433;", name: "AI 生成名字", tag: null, tagText: "", desc: "批量生成人名、地名、功法名、武器名等命名素材，解决取名难题", detailDesc: "根据作品题材风格批量生成各类命名素材，名字自带气质属性，符合角色定位和世界观设定。", models: ["GPT-4o"], features: ["人名 / 地名 / 功法 / 武器 / 宗门等多类别", "古风 / 仙侠 / 都市 / 西幻等风格适配", "一键生成 20 个备选方案", "名字附带寓意解析"], accent: "linear-gradient(135deg, #64748b, #94a3b8)", iconBg: "linear-gradient(135deg, rgba(100,116,139,0.15), rgba(148,163,184,0.1))" },
    { id: 11, category: "package", icon: "&#128214;", name: "AI 生成书名", tag: null, tagText: "", desc: "结合最新爆款趋势，生成最具竞争力的吸睛作品名称", detailDesc: "分析当前各平台热门书名的命名规律，结合你的作品类型和大纲，生成高点击率的书名候选方案。", models: ["GPT-4o", "DeepSeek"], features: ["实时分析各平台热门书名趋势", "SEO 优化，提升搜索曝光率", "多风格：直白型 / 悬念型 / 反差型", "每个书名附带推荐理由"], accent: "linear-gradient(135deg, #ef4444, #dc2626)", iconBg: "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.1))" },
    { id: 12, category: "package", icon: "&#128226;", name: "AI 生成简介", tag: "pro", tagText: "必备", desc: "根据书名和大纲快速生成能引发读者兴趣的爆款简介文案", detailDesc: "提炼作品最吸引人的核心卖点，生成符合各平台简介规范的引流文案，最大化点击转化率。", models: ["GPT-4o", "Claude"], features: ["黄金三段式简介结构", "突出核心卖点和独特看点", "悬念钩子设计，引发阅读欲望", "自动适配不同平台简介字数限制"], accent: "linear-gradient(135deg, #f43f5e, #e11d48)", iconBg: "linear-gradient(135deg, rgba(244,63,94,0.15), rgba(225,29,72,0.1))" },
    { id: 13, category: "package", icon: "&#127775;", name: "AI 黄金开篇", tag: "hot", tagText: "爆款", desc: "学习番茄、起点等平台爆款开篇风格，自动生成黄金前三章", detailDesc: "深度分析头部平台的爆款开篇规律——黄金三章法则，为你量身打造高留存率的开篇章节。", models: ["GPT-4o", "Claude", "DeepSeek"], features: ["黄金三章法则深度应用", "首章即高潮，三行内出冲突", "代入感极强的开篇切入方式", "针对不同平台的调优策略"], accent: "linear-gradient(135deg, #f59e0b, #ef4444)", iconBg: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))" },
    { id: 14, category: "package", icon: "&#128269;", name: "AI 拆书", tag: "new", tagText: "新", desc: "一键分析书籍的核心要素：世界观、人设、大纲、金手指、吸引点", detailDesc: "上传书籍内容后，AI 自动拆解其世界设定、主角人设、剧情大纲、金手指设计等核心要素，供参考借鉴。", models: ["Claude", "GPT-4o", "Kimi"], features: ["全自动拆解书籍核心要素", "输出结构化的分析报告", "识别成功作品的底层规律", "支持导出拆书报告用于团队学习"], accent: "linear-gradient(135deg, #14b8a6, #0d9488)", iconBg: "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(13,148,136,0.1))" },
    { id: 15, category: "video", icon: "&#127916;", name: "AI 生成剧本", tag: null, tagText: "", desc: "将文章内容转化为短剧剧本或短视频分镜脚本", detailDesc: "智能提取文章中的关键情节和对话，转换为标准格式短剧剧本或短视频拍摄分镜脚本。", models: ["GPT-4o", "Claude"], features: ["短剧剧本 / 短视频脚本双模式", "自动提取对话与动作描述", "分镜画面建议与时长估算", "支持导出专业格式剧本文件"], accent: "linear-gradient(135deg, #a855f7, #7c3aed)", iconBg: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(124,58,237,0.1))" },
    { id: 16, category: "video", icon: "&#127909;", name: "AI 视频提示词", tag: "pro", tagText: "进阶", desc: "将剧情转化为 AI 视频大模型能理解的专业导演视角提示词", detailDesc: "将文字剧情转化为 Sora、Runway、即梦等 AI 视频模型可用的专业提示词，包含画面描述、镜头运动，光影氛围等参数。", models: ["GPT-4o", "Claude", "Gemini"], features: ["导演级提示词自动生成", "支持 Sora-2 / Veo / Runway / 即梦", "包含镜头运动 / 光影 / 构图参数", "一键复制直接使用于视频平台"], accent: "linear-gradient(135deg, #3b82f6, #2563eb)", iconBg: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.1))" },
];

// 应用状态
let activeCategory = "all";
let searchQuery = "";

// Dify API 配置
const DIFY_API_KEY = "app-qA7PWBKSzeSfzmiBea6NM712";
const DIFY_BASE_URL = "https://api.dify.ai/v1";

let currentTool = null;
let chatConversationId = null;

// DOM 元素
let modalOverlay, modalDialog, toolsGrid, filterTabs, searchInput, searchClear, themeToggle;

// 初始化
document.addEventListener("DOMContentLoaded", () => {
    modalOverlay = document.getElementById("modalOverlay");
    modalDialog = document.getElementById("modalDialog");
    toolsGrid = document.getElementById("toolsGrid");
    filterTabs = document.getElementById("filterTabs");
    searchInput = document.getElementById("searchInput");
    searchClear = document.getElementById("searchClear");
    themeToggle = document.getElementById("themeToggle");

    renderFilterTabs();
    renderToolsGrid();
    bindEvents();
    injectChatStyles();
});

function bindEvents() {
    searchInput?.addEventListener("input", () => {
        searchQuery = searchInput.value;
        searchClear.classList.toggle("show", searchQuery.length > 0);
        renderToolsGrid();
    });

    searchClear?.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        searchClear.classList.remove("show");
        renderToolsGrid();
    });

    let isDark = true;
    themeToggle?.addEventListener("click", () => {
        isDark = !isDark;
        document.body.dataset.theme = isDark ? "dark" : "light";
        themeToggle.innerHTML = isDark ? "&#127769;" : "&#9788;";
    });

    modalOverlay?.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
            closeChat();
        }
    });
}

function renderFilterTabs() {
    filterTabs.innerHTML = CATEGORIES.map(cat => {
        const count = cat.id === "all"
            ? TOOLS.length
            : TOOLS.filter(t => t.category === cat.id).length;
        return `<button class="filter-tab${cat.id === activeCategory ? " active" : ""}" data-category="${cat.id}">${cat.icon} ${cat.label}<span class="filter-count">${count}</span></button>`;
    }).join("");

    filterTabs.querySelectorAll(".filter-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            activeCategory = tab.dataset.category;
            renderFilterTabs();
            renderToolsGrid();
        });
    });
}

function renderToolsGrid() {
    let filtered = TOOLS;

    if (activeCategory !== "all") {
        filtered = filtered.filter(t => t.category === activeCategory);
    }
    if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        filtered = filtered.filter(t => t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
        toolsGrid.innerHTML = `<div class="empty-state stagger-1"><div class="empty-state-icon">&#128269;</div><p class="empty-state-text">没有找到匹配的工具，换个关键词试试？</p></div>`;
        return;
    }

    toolsGrid.innerHTML = filtered.map((tool, i) => {
        const tagHtml = tool.tag ? `<span class="card-tag tag-${tool.tag}">${tool.tagText}</span>` : "";
        const modelChips = tool.models.slice(0, 3).map(m => `<span class="model-chip">${m}</span>`).join("");
        const staggerClass = `stagger-${Math.min(i % 16 + 1, 16)}`;

        return `<article class="tool-card ${staggerClass}" data-id="${tool.id}" style="--card-accent:${tool.accent}">
            <div class="card-glow-line"></div>
            <div class="card-header">
                <div class="card-icon-wrap" style="background:${tool.iconBg}">${tool.icon}</div>
                <div class="card-info"><h3 class="card-name">${tool.name} ${tagHtml}</h3></div>
            </div>
            <p class="card-desc">${tool.desc}</p>
            <div class="card-footer">
                <div class="card-models">${modelChips}</div>
                <button class="card-action-btn" data-tool-id="${tool.id}">立即使用 &#8594;</button>
            </div>
        </article>`;
    }).join("");

    toolsGrid.querySelectorAll(".card-action-btn").forEach(btn => {
        btn.addEventListener("click", () => openModal(parseInt(btn.dataset.toolId)));
    });
}

function openModal(toolId) {
    const tool = TOOLS.find(t => t.id === toolId);
    if (!tool) return;

    const tagHtml = tool.tag ? `<span class="card-tag tag-${tool.tag}">${tool.tagText}</span>` : "";

    modalDialog.innerHTML = `<header class="modal-header">
        <div class="modal-icon" style="background:${tool.iconBg}">${tool.icon}</div>
        <div class="modal-title-group">
            <h2 class="modal-name">${tool.name} ${tagHtml}</h2>
            <p class="modal-category">${CATEGORIES.find(c => c.id === tool.category)?.label || ""}</p>
        </div>
        <button class="modal-close" id="modalCloseBtn">&#10005;</button>
    </header>
    <div class="modal-body">
        <p class="modal-desc">${tool.detailDesc}</p>
        <div class="modal-features"><h4>&#10024; 功能特性</h4><ul class="feature-list">${tool.features.map(f => `<li class="feature-item"><span class="feature-check">&#10003;</span>${f}</li>`).join("")}</ul></div>
        <div class="modal-models"><h4>&#128187; 支持的大模型</h4><div class="model-list">${tool.models.map(m => `<span class="model-badge">${m}</span>`).join("")}</div></div>
    </div>
    <footer class="modal-footer">
        <button class="modal-btn primary" id="startChatBtn">&#128640; 开始使用</button>
        <button class="modal-btn secondary" id="closeModalBtn">&#128203; 复制说明</button>
    </footer>`;

    modalOverlay.classList.add("show");
    document.body.style.overflow = "hidden";

    document.getElementById("startChatBtn")?.addEventListener("click", () => openAIChat(toolId));
    document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
    document.getElementById("modalCloseBtn")?.addEventListener("click", closeModal);
}

function closeModal() {
    modalOverlay?.classList.remove("show");
    document.body.style.overflow = "";
}

// AI 聊天功能
function openAIChat(toolId) {
    closeModal();
    currentTool = TOOLS.find(t => t.id === toolId);
    if (!currentTool) return;
    createChatUI();
    addChatMessage("assistant", `你好！我是 AI 写作助手，可以帮你完成【${currentTool.name}】任务。请告诉我你的需求，我来帮你生成内容。`);
}

function createChatUI() {
    const existing = document.getElementById("chatOverlay");
    if (existing) existing.remove();

    const chatHTML = `<div id="chatOverlay" class="chat-overlay">
        <div class="chat-container">
            <header class="chat-header">
                <div class="chat-title"><span class="chat-icon">${currentTool?.icon || "&#128172;"}</span><span>${currentTool?.name || "AI 写作助手"}</span></div>
                <button class="chat-close" id="closeChatBtn">&#10005;</button>
            </header>
            <div class="chat-messages" id="chatMessages"></div>
            <div class="chat-input-area">
                <textarea id="chatInput" placeholder="输入你的问题或需求..." rows="1"></textarea>
                <button class="chat-send" id="sendChatBtn">&#10148;</button>
            </div>
            <div class="chat-loading" id="chatLoading" style="display:none;"><span class="loading-dots">AI 思考中<span>.</span><span>.</span><span>.</span></span></div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", chatHTML);

    const chatInput = document.getElementById("chatInput");

    document.getElementById("closeChatBtn")?.addEventListener("click", closeChat);
    document.getElementById("sendChatBtn")?.addEventListener("click", sendChatMessage);

    chatInput?.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChatMessage(); }
    });

    chatInput?.addEventListener("input", () => {
        chatInput.style.height = "auto";
        chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + "px";
    });

    setTimeout(() => chatInput?.focus(), 100);
}

function closeChat() {
    const chat = document.getElementById("chatOverlay");
    if (chat) { chat.remove(); currentTool = null; chatConversationId = null; }
}

function addChatMessage(role, content) {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;
    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-message ${role}`;
    msgDiv.innerHTML = role === "user" ? `<div class="message-content">${escapeHtml(content)}</div>` : `<div class="message-content">${content}</div>`;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendChatMessage() {
    const chatInput = document.getElementById("chatInput");
    const chatLoading = document.getElementById("chatLoading");
    const message = chatInput?.value?.trim();
    if (!message) return;

    addChatMessage("user", message);
    chatInput.value = "";
    chatInput.style.height = "auto";
    if (chatLoading) chatLoading.style.display = "block";

    try {
        const response = await fetch(`${DIFY_BASE_URL}/chat-messages`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${DIFY_API_KEY}`, "Content-Type": "application/json" },
            body: JSON.stringify({ inputs: {}, query: message, response_mode: "blocking", conversation_id: chatConversationId || "" })
        });
        const data = await response.json();
        if (data.conversation_id) chatConversationId = data.conversation_id;
        addChatMessage("assistant", data.answer || "抱歉，我没有收到响应。");
    } catch (error) {
        console.error("API Error:", error);
        addChatMessage("assistant", "网络错误，请检查网络连接后重试。");
    }
    if (chatLoading) chatLoading.style.display = "none";
}

function escapeHtml(text) { const div = document.createElement("div"); div.textContent = text; return div.innerHTML; }

function injectChatStyles() {
    const style = document.createElement("style");
    style.textContent = `.chat-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:10000;display:flex;align-items:center;justify-content:center;animation:fadeIn .2s}.chat-container{width:90%;max-width:600px;height:80vh;max-height:600px;background:var(--bg-secondary);border-radius:20px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 25px 80px rgba(0,0,0,.5);border:1px solid var(--glass-border)}.chat-header{padding:16px 20px;background:var(--bg-card);border-bottom:1px solid var(--glass-border);display:flex;align-items:center;justify-content:space-between}.chat-title{display:flex;align-items:center;gap:10px;font-weight:600;color:var(--text-primary)}.chat-icon{font-size:24px}.chat-close{background:0;border:0;color:var(--text-secondary);font-size:20px;cursor:pointer;padding:8px;border-radius:8px;transition:all .2s}.chat-close:hover{background:var(--glass-hover);color:var(--text-primary)}.chat-messages{flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:16px}.chat-message{max-width:85%;animation:slideUp .3s}.chat-message.user{align-self:flex-end}.chat-message.assistant{align-self:flex-start}.message-content{padding:12px 16px;border-radius:16px;line-height:1.6;white-space:pre-wrap}.chat-message.user .message-content{background:var(--accent-gradient);color:#fff;border-bottom-right-radius:4px}.chat-message.assistant .message-content{background:var(--glass-bg);border:1px solid var(--glass-border);color:var(--text-primary);border-bottom-left-radius:4px}.chat-input-area{padding:16px;border-top:1px solid var(--glass-border);display:flex;gap:12px;align-items:flex-end}.chat-input-area textarea{flex:1;padding:12px 16px;border:1px solid var(--glass-border);border-radius:12px;background:var(--bg-card);color:var(--text-primary);font-size:14px;resize:none;outline:0;font-family:inherit;transition:border-color .2s}.chat-input-area textarea:focus{border-color:var(--accent-primary)}.chat-send{width:48px;height:48px;border:0;border-radius:12px;background:var(--accent-gradient);color:#fff;font-size:20px;cursor:pointer;transition:transform .2s,box-shadow .2s}.chat-send:hover{transform:scale(1.05);box-shadow:var(--shadow-glow)}.chat-loading{padding:8px 16px 16px;text-align:center}.loading-dots span{animation:blink 1.4s infinite both}.loading-dots span:nth-child(2){animation-delay:.2s}.loading-dots span:nth-child(3){animation-delay:.4s}@keyframes blink{0%,80%,100%{opacity:0}40%{opacity:1}}`;
    document.head.appendChild(style);
}
