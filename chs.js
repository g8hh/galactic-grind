/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    'Build New': '新建',
    'ON': '开启',
    'Options': '选项',
    'Periodically gain research points, which can be used to unlock unique upgrades from different research paths via the icons below.': '定期获得研究点数，可用于通过以下图标解锁来自不同研究路径的独特升级。',
    'Periodically merchants will drop a package that will grant a random bonus.': '商人会定期掉落一个包裹，该包裹将授予随机奖金。',
    'Power Plant': '发电厂',
    'Power Saver': '节电器',
    'Production': '生产',
    'Propaganda Center': '宣传中心',
    'Propaganda Centers increase the base production of all tier 1 buildings by 1500 per 10 propaganda centers, and all tier 2 buildings by 8000 per 10 propaganda centers.': '每 10 个宣传中心增加所有 1 级建筑 1500 的基础产量，每 10 个宣传中心增加所有 2 级建筑 8000 的基础产量。',
    'Research Center': '研究中心',
    'Reset': '重置',
    'Reseting now will grant': '现在重置将授予',
    'Reseting now will grant the following': '立即重置将授予以下权限',
    'Temple': '神庙',
    'Wipe Save': '擦除存档',
    'Yes': '是',
    'You can automate': '你可以自动化',
    'UPGRADES': '升级',
    'Tutorial': '教程',
    'Unlocks a clicking sub-game, that can unlock various upgrades and effects.': '解锁一个点击子游戏，可以解锁各种升级和效果。',
    'Alien Research Facilities slowly unlock unique upgrades every hour. This upgrade rate does not change with game speed.': '外星研究设施每小时都会缓慢解锁独特的升级。 这个升级率不会随着游戏速度而变化。',
    'Alien Research Facility': '外星研究设施',
    'Asteroid Miner': '小行星矿工',
    'Autosave': '自动保存',
    'Autoupgrade': '自动升级',
    'Background': '背景',
    'Bank': '银行',
    'Banks slowly increase production over time (1% per 20 minutes).': '银行会随着时间的推移缓慢增加产量（每 20 分钟增加 1%）。',
    'Bought Upgrades': '已购买升级',
    'Black Hole': '黑洞',
    'BUILDINGS': '建筑',
    'Choose': '选择',
    'Choose A Building To Unlock': '选择要解锁的建筑物',
    'Click Farm': '点击农场',
    'Click Farms grant the ability to place autoclickers that simulate real clicks anywhere on the screen once every 3 seconds. This is available with the blue mouse icon to the left of this menu.': '点击农场允许每 3 秒在屏幕上的任何位置放置模拟真实点击的自动点击器。 这可通过此菜单左侧的蓝色鼠标图标获得。',
    'Click one of the icons below to begin worshipping an Aztec deity. The longer a deity is worshipped the more powerful their bonuses will be up to a point.': '单击下面的图标之一开始崇拜阿兹特克神祇。 一个神被崇拜的时间越长，他们的奖励就越强大。',
    'Click the dice to gain a random bonus or loss based on how the die rolls. Gain 1 roll every 150 seconds.': '单击骰子以根据骰子的投掷方式获得随机奖励或损失。 每 150 秒获得 1 次掷骰。',
    'Cultist': '信徒',
    'Cultist generate blood that can be used to preform rituals. Click the blue a red icons to perform a ritual.': '信徒生成可用于执行仪式的血液。 单击蓝色和红色图标以执行仪式。',
    'Enter': '进入',
    'Gambler': '赌徒',
    'Generates energy, which can be used to activate various production boosting effects.': '产生能源，可用于激活各种生产促进效果。',
    'Import save': '导入存档',
    'Import/Export Save': '导入/导出存档',
    'Input': '输入',
    'karma points. Each karma point grants +1% production that does not disappear after resets.': '业力点。 每个业力点都会提供 +1% 的生产力，并且在重置后不会消失。',
    'Loading': '加载中',
    'LOADING': '加载中',
    'Merchant': '商人',
    'Mine': '矿山',
    'Mines slowly grant gold, which can be used in exchange for other buildings currencies.': '矿山慢慢产出黄金，可以用来换取其他建筑货币。',
    'Monospace Font': '面包车字体',
    'Never': '从不',
    'OFF': '关闭',
    'Sacrificial Shrine': '祭祀神殿',
    'Stock Exchange': '股票交易',
    'Stock markets value fluctuates over time, sometimes giving large production bonuses, and sometimes large production reductions.': '股票市场价值会随着时间的推移而波动，有时会提供大量生产奖金，有时会大幅减产。',
    'Sure?': '确定?',
    'tasks': '任务',
    'Asteroid Miners slowly increase their base production. This rate is increased for every 10 asteroid miners.': '小行星矿工缓慢地增加他们的基础产量。 每 10 个小行星矿工，这个比率就会增加。',
    'Error Console': '错误控制台',
    'Factories grant gears periodically, and these can be used to upgrade various stats via the gray icons below.': '工厂会定期生成齿轮，这些可用于通过下面的灰色图标升级各种统计数据。',
    'Frozen Wasteland': '冰封荒原',
    'Factory': '工厂',
    'Frozen Wastelands slowly produce snowflakes, that can be used for various effects. The generation rate does not change with the game speed.': '冰冻荒原会慢慢产生雪花，可以用于各种效果。 生成率不随游戏速度变化。',
    'Gold': '黄金',
    'Gold 1': '黄金 1',
    'Increases favor production by 1% per Worshipper': '每个崇拜者增加 1% 的恩惠产量',
    'Increases normal production by 5% + 1% per reset.': '每次重置使正常产量提高 5% + 1%。',
    'Research': '研究',
    'Increases production by 5%.': '提高产量 5%。',
    'Increases research centers base production by 2.': '研究中心基础产量增加2。',
    'Increases the base production of factories by 1 every 2 minutes from now on.': '从现在开始每2分钟增加工厂的基础产量 1。',
    'Increases the base production of mines by 1 every 2 minutes from now on.': '从现在开始每 2 分钟增加矿山的基础产量 1。',
    'Increases the base production of research centers by 1 every 2 minutes from now on.': '从现在开始每2分钟增加研究中心的基础产量 1。',
    'Increases the base production of stock markets by 1 every 2 minutes from now on.': '从现在开始每2分钟增加股票市场的基础产量 1。',
    'Loaded Dice': '加载骰子',
    'Lower Wages': '降低工资',
    'Mad Scientists': '疯狂科学家',
    'Mutual Funds': '共同基金',
    'Free': '免费',
    'Requires': '需要',
    'Shorter Breaks': '更短的休息时间',
    'Six hours later': '六小时后',
    'Stock': '股票',
    'Temporal Mastery': '时间管理大师',
    'Time For Genius': '天才的时间',
    'Time For Gold': '黄金时间',
    'Time For Labor': '劳动时间',
    'Time To Mine': '采矿时间',
    'Trading Post': '贸易站',
    'Two hours later': '两小时后',
    'Unlocks the ability to automate simple tasks.': '解锁自动执行简单任务的能力。',
    'Unlocks the ability to change the passage of time.': '解锁改变时间流逝的能力。',
    'Allows you to exchange building currencies for different goods.': '允许您为不同的商品交换建筑货币。',
    'Autoclicker': '自动点击器',
    'Automation': '自动化',
    'Bet on Black': '投注黑色',
    'Building Resources': '建筑资源',
    'Charging Bull': '华尔街铜牛',
    'Cheap Labor': '廉价劳动力',
    'Click Combo': '点击组合',
    'Click to change various aspects of the game.': '点击以更改游戏的各个方面。',
    'Click to save.': '点击保存。',
    'Click to toggle autoclicking. If on the game will autoclick twice per second. This will disable all regular clicks and will not occur when normal clicks cannot occur (being in a different tab or similar).': '点击以切换自动点击。 如果在游戏中会每秒自动点击两次。 这将禁用所有常规点击，并且不会在无法发生正常点击（在不同的选项卡或类似选项卡中）时发生。',
    'Click to view all upgrades bought separated into 4 distinct categories.': '点击以查看分为 4 个不同类别的所有购买升级。',
    'Click to view various statistics and graphs about your game-play.': '点击以查看有关您的游戏的各种统计数据和图表。',
    'Clock Ticks': '时钟刻度',
    'Counterfeit Quarters': '伪造宿舍',
    'Davy Lamp': '戴维灯',
    'Deeper Mines': '更深的矿山',
    'Each tick is worth 1 second and can be used to speed up the game. Gain ticks while this game is closed. Click to change game speed.': '每个刻度值 1 秒，可用于加快游戏速度。 在此游戏关闭时获得滴答声。 单击以更改游戏速度。',
    'Eight hours later': '八小时后',
    'Every 100 real clicks increases production by 1%. This caps out at 100%.': '每 100 次实际点击将生产增加 1%。 这上限为 100%。',
    'Fearless Girl': '无畏的女孩',
    'Four hours later': '四小时后',
    'Gambling Mice': '赌博老鼠',
    'Gearsplosion': '齿轮爆炸',
    'Genius Mice': '天才老鼠',
    'Grants 10 ticks every time stocks markets reaches peak market value.': '每次股票市场达到最高市值时授予 10 个时刻。',
    'Grinding Gears': '磨齿轮',
    'Improved Clicking': '改进点击',
    'Increased Machanization': '提高机械化',
    'Increases base clicking reward by 1% of total production.': '将基本点击奖励提高总产量的 1%。',
    'Increases clicking reward by 1% of total production.': '将点击奖励提高总产量的 1%。',
    'Increases max blood by 50.': '最大血量增加 50。',
    'Increases production based on total time spent playing.': '根据游戏总时间增加产量。',
    'Increases production by 0.04% for each roll activated.': '每激活一投掷，产量提高 0.04%。',
    'Increases total production by 15%.': '将总产量提高 15%。',
    'Investing Mice': '投资老鼠',
    'Just Beginning': '刚开始',
    'Mensa': '笨蛋',
    'Mining Mice': '采矿老鼠',
    'Metal Mouse': '金属鼠标',
    'Opens the Trade menu.': '打开交易菜单。',
    'Permanently increases clicking reward by 0.2%.': '永久增加点击奖励 0.2%。',
    'Permanently increases maximum game speed by 1.': '永久性地将最大游戏速度提高 1。',
    'Permanently increases production by 1%.': '永久增加 1% 的产量。',
    'Refill Dice': '填充骰子',
    'Secert Labrotories': '秘密实验室',
    'Slave Mice': '奴隶老鼠',
    'Synergy': '协同作用',
    'Time Boost': '时间提升',
    'Trading Menu': '交易菜单',
    'Unlocks an upgrade that improves specific buildings.': '解锁可改善特定建筑的升级。',
    'Unlocks an upgrade that increases production in some form.': '解锁以某种形式增加产量的升级。',
    'Unlocks an upgrade that increases the productivity of research centers.': '解锁可提高研究中心生产力的升级。',
    'Utility': '效用',
    'Advanced Dice': '高级骰子',
    'Advanced Gears': '高级齿轮',
    'Advanced Markets': '高级市场',
    'Advanced Mining': '高级矿山',
    'Augmented Clicking': '强化点击',
    'Automation Boost': '自动提升',
    'Basic Dice': '基础骰子',
    'Basic Gears': '基础齿轮',
    'Basic Markets': '基础市场',
    'Basic Mining': '基础矿山',
    'Basic Research': '基础研究',
    'Boxcars': '棚车',
    'Click Boost': '点击提升',
    'Click Workers': '点击工人',
    'Clicking reward is increased by 0.5 for every other previous click, this effect is increased for every 10 mines owned.': '之前每点击一次点击奖励增加 0.5，每拥有 10 个矿山增加此效果。',
    'Clicking reward is increased by 5 per research center.': '每个研究中心点击奖励增加5。',
    'Conveyor Belts': '传送带',
    'Decreaes production by 33%.': '产量减少 33%。',
    'Decreases gear time by 10 seconds.': '齿轮时间减少 10 秒。',
    'Decreases mine time by 4 minutes.': '将采矿时间减少 4 分钟。',
    'Deep Mines': '深矿',
    'Each real click decreases the amount of time left to mine a gold bar by 1 second. This cannot occur more than 60 times a minute.': '每次真正的点击都会将挖掘金条的剩余时间减少 1 秒。 这种情况每分钟不能超过 60 次。',
    'Every 10 real clicks decreases the amount of time to obtain the next roll by 2 seconds.': '每 10 次真正的点击会减少 2 秒获得下一个投掷的时间。',
    'Every 100 clicks increases factories base production by 1.': '每点击 100 次，工厂基础产量就会增加 1。',
    'Every 100 clicks increases gambers base production by 1.': '每点击 100 次，赌徒 基础产量就会增加 1。',
    'Every 100 clicks increases mines base production by 1.': '每点击 100 次，矿山基础产量就会增加 1。',
    'Every 100 clicks increases research centers base production by 1.': '每点击 100 次，研究中心的基础产量就会增加 1。',
    'Every 100 clicks increases stock markets base production by 1.': '每点击 100 次，股票市场基础产量就会增加 1。',
    'Exchange 1 gold for a dice refill.': '用 1 金币换取一个填充骰子。',
    'Extreme Clicking': '极端点击',
    'Flynn Effect': '弗林效应',
    'Fountain of Blood': '血之泉',
    'Futuristic Production': '未来生产',
    '5: No Effect': '5: 无效果',
    '6: 2 extra rolls': '6：2次额外的投掷',
    'Increases production by 10%, this bonus is amplified based on how many buildings are owned.': '将产量提高 10%，此奖励会根据拥有的建筑物数量而放大。',
    'Instantly grants 10 gold': '立即授予 10 黄金',
    'Piles of Gold': '成堆的黄金',
    'Bountiful Construction': '丰富多样的建筑',
    'Advanced Research': '高级研究',
    'Better Drills': '更好地钻',
    'Dice': '骰子',
    'Doubles total production of your gamblers.': '赌徒的总产量翻倍。',
    'Every 2 clicks decreases the amount of time until the next research point is gained by 1.': '每点击 2 次，下一个研究点的时间就会减少 1。',
    'Experienced Gamblers': '经验丰富的赌徒',
    'Get 2 extra rolls when rolling boxcars.': '投掷棚车时获得 2 个额外的投掷。',
    'Increases production by 0.05% per research center.': '每个研究中心的产量提高 0.05%。',
    'Increases the base production of gamblers by 1 every 2 minutes from now on.': '从现在开始每 2 分钟将赌徒的基础产量增加 1。',
    'Mechanical Enchacements': '机械增强',
    'Proper laboratory Attire': '合适的实验室着装',
    'Snake Eyes': '蛇眼',
    'Time For Gambling': '赌徒时间',
    'Adding On': '增加',
    'Union Busters': '联盟克星',
    'Cultist generate blood that can be used to preform rituals.': '邪教徒生成可用于执行仪式的血液。',
    'Temples allow you to worship an ancient Aztec god, granting a bonus from this.': '神庙允许您崇拜古代阿兹特克神，从而获得奖励。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //树游戏
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Gold: ": "黄金: ",
    "Production Bonus: ": "生产奖励: ",
    "Production: ": "生产: ",
    "Ritual Bonus: ": "仪式奖励：",
    "Total Rituals: ": "总计仪式: ",
    "Total Rolls: ": "总计投掷: ",
    "Version ": "版本 ",
    "Autobuy": "自动购买",
    "Autoclicks per second": "每秒自动点击次数",
    "Click Bonus: ": "点击奖励: ",
    "Current Roll: ": "当前卷轴: ",
    "Gambling Bonus: ": "赌徒奖励: ",
    "Gears Obtained: ": "获得的齿轮：",
    "Gold Mined: ": "开采的黄金：",
    "Last Roll: ": "最近卷轴: ",
    "Market Bonus: ": "市场奖励: ",
    "Max Blood: ": "最大血液: ",
    "Blood: ": "血液: ",
    "Max Time Bonus: ": "最大时间奖励: ",
    "Total Buildings: ": "总建筑量：",
    "Total Clicks: ": "总点击数: ",
    "Total Real Clicks: ": "总真实点击数: ",
    "Total Real Time: ": "总真实时间: ",
    "Total Time: ": "总时间: ",
    "Total Upgrades: ": "总升级: ",
    "Click Bonus ": "点击奖励 ",
    "Max Time Bonus ": "最大时间奖励 ",
    "Power: ": "力量: ",
    "Price: ": "价格: ",
    "Research Points: ": "研究点: ",
    "Rolls: ": "投掷: ",
    "Snowballs ": "雪球 ",
    "Gears: ": "齿轮: ",
    "Futuristic Production Mk ": "未来生产Mk ",
    "Hotkey: ": "快捷键: ",
    "Lucky ": "幸运 ",
    "Unlucky ": "不幸 ",
    "Click Workers Mk ": "点击工人 Mk ",
    "Base Production: ": "基础产量: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    'Buy up to': '批量购买',
    " ✓": " ✓",
    " X": " X",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) Million p$/,
    /^([\d\.]+) Million$/,
    /^([\d\.]+) Billion$/,
    /^([\d\.]+) p$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^Increases total production by (.+)\%, and increases stock exchanges base production by (.+).$/, '总产量增加 $1\%，股票市场基础产量增加 $2。'],
    [/^Increases mines base production by (.+).$/, '增加矿山基础产量 $1。'],
    [/^Increases gamblers base production by (.+).$/, '增加赌徒基础产量 $1。'],
    [/^Increases factories base production by (.+).$/, '增加工厂基础产量 $1。'],
    [/^Increases base clicking reward by ([\d\.,]+).$/, '将基础点击奖励提高 $1。'],
    [/^Increases research centers base production by ([\d\.,]+).$/, '将研究中心基础产量增加 $1。'],
    [/^Increases production by ([\d\.,]+)\%.$/, '提高产量 $1\%。'],
    [/^Cost: (.+) Research Points$/, '成本: $1 研究点'],
    [/^Cost: (.+) Gears.$/, '成本: $1 齿轮。'],
    [/^Cost: (.+) favor$/, '成本: $1 恩惠'],
    [/^Cost: (.+) \((.+)x$/, '成本: $1 \($2x'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^Gold ([\d\.]+)$/, '黄金 $1'],
	[/^([\d\.]+): (.+) production permanently$/, '$1: $2 永久生产'],
	[/^([\d\.]+): (.+) production$/, '$1: $2 生产'],
	[/^([\d\.,]+)\/([\d\.,]+) Rolls$/, '$1\/$2 投掷'],
	[/^([\d\.,]+)s left$/, '剩余 $1 秒'],
	[/^([\d\.,]+) Gears$/, '$1 齿轮'],
	[/^([\d\.,]+) Factories$/, '$1 工厂'],
	[/^([\d\.,]+) Temples$/, '$1 神庙'],
	[/^([\d\.,]+) Stock Exchanges$/, '$1 股票市场'],
	[/^([\d\.,]+) Gamblers$/, '$1 赌徒'],
	[/^([\d\.,]+) Cultists$/, '$1 邪教徒'],
	[/^([\d\.,]+) Gold$/, '$1 黄金'],
	[/^([\d\.,]+) Research Points$/, '$1 研究点'],
	[/^([\d\.]+) Karma Points$/, '$1 业力点数'],
	[/^([\d\.]+) Karma Points$/, '$1 业力点数'],
	[/^([\d\.]+) Quadrillion$/, '$1 Quadrillion'],
	[/^([\d\.]+) Octillion$/, '$1 Octillion'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);