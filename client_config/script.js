// Define main function (script entry)

// function main(config, profileName) {
//     return config;
//   }

// 规则集通用配置
const ruleProviderCommon = {
    type: "http",
    format: "yaml",
    interval: 86400,
  };
  
  // 规则集配置
  const ruleProviders = {
    ai: {
      ...ruleProviderCommon,
      behavior: "classical",
      //   "type": "http",
      //   "url": "https://raw.githubusercontent.com/klierbyck/clash/refs/heads/main/txt/AI.txt",
      type: "file",
      path: "./ruleset/ai.yaml",
    },
    github: {
      ...ruleProviderCommon,
      behavior: "classical",
      //   "type": "http",
      //   "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/GitHub/GitHub.list",
      type: "file",
      path: "./ruleset/github.yaml",
    },
    telegram: {
      ...ruleProviderCommon,
      behavior: "classical",
      //   "type": "http",
      //   "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.list",
      type: "file",
      path: "./ruleset/telegram.yaml",
    },
    media: {
      ...ruleProviderCommon,
      behavior: "classical",
      //   "type": "http",
      //   "url": "https://raw.githubusercontent.com/liandu2024/clash/refs/heads/main/YouTube.list",
  
      type: "file",
      path: "./ruleset/media.yaml",
    },
    global: {
      ...ruleProviderCommon,
      behavior: "classical",
      //   "type": "http",
      //   "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Global/Global.list",
      type: "file",
      path: "./ruleset/global.yaml",
    },
  };
  
  // 规则
  const rules = [
    "RULE-SET,ai,👽 AI",
    "RULE-SET,github,📘 GitHub",
    "RULE-SET,telegram,🙋 Telegram",
    "RULE-SET,media,📀 流媒体",
    "RULE-SET,global,🌍 国外",
    "MATCH,➡️ 国内",
  ];
  
  // 代理组通用配置
  const groupBaseOption = {
    interval: 300,
    timeout: 3000,
    url: "http://www.gstatic.com/generate_204",
    lazy: true,
    "max-failed-times": 3,
    hidden: false,
  };
  
  // 程序入口
  function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
      typeof config?.["proxy-providers"] === "object"
        ? Object.keys(config["proxy-providers"]).length
        : 0;
    if (proxyCount === 0 && proxyProviderCount === 0) {
      throw new Error("配置文件中未找到任何代理");
    }
  
    // 覆盖原配置中DNS配置
    // config["dns"] = dnsConfig;
  
    // 覆盖原配置中的代理组
    config["proxy-groups"] = [
      {
        ...groupBaseOption,
        name: "所有-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "港台日新韩-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter:
          "(广港|广台|广日|广新|广韩|广美|香港|HK|Hong Kong|🇭🇰|HongKong|台湾|TW|Tai Wan|🇹🇼|🇨🇳|TaiWan|Taiwan|日本|JP|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan|新加坡|SG|坡|狮城|🇸🇬|Singapore|韩国|KR|首尔|春川|🇰🇷|Korea)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "台日新韩-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter:
          "(广台|广日|广新|广韩|广美|台湾|TW|Tai Wan|🇹🇼|🇨🇳|TaiWan|Taiwan|日本|JP|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan|新加坡|SG|坡|狮城|🇸🇬|Singapore|韩国|KR|首尔|春川|🇰🇷|Korea)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "日新韩-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter:
          "(广台|广日|广新|广韩|广美|日本|JP|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan|新加坡|SG|坡|狮城|🇸🇬|Singapore|韩国|KR|首尔|春川|🇰🇷|Korea)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "香港-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter: "(广港|香港|HK|Hong Kong|🇭🇰|HongKong)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "台湾-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter: "(广台|台湾|台灣|TW|Tai Wan|🇹🇼|🇨🇳|TaiWan|Taiwan)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "日本-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter: "(广日|日本|JP|川日|东京|大阪|泉日|埼玉|沪日|深日|🇯🇵|Japan)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "新加坡-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter: "(广新|新加坡|SG|坡|狮城|🇸🇬|Singapore)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "韩国-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter: "(广韩|韩国|韓國|KR|首尔|春川|🇰🇷|Korea)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "美国-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter:
          "(广美|美|US|纽约|波特兰|达拉斯|俄勒|凤凰城|费利蒙|硅谷|拉斯|洛杉|圣何塞|圣克拉|西雅|芝加|🇺🇸|United States)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "其他-自动",
        type: "url-test",
        proxies: [],
        "include-all": true,
        filter:
          "(波|柬|尼|也|克|比|尔|立|冰|秘|耳|利|埃|希|孟|芬|愛|澳|英|德|南|意|法|拿|墨|印|越|俄|瑞|智|荷|比|巴|沙|班|泰|德|烏|以|Australia|Konghwaguk)",
        url: "http://www.gstatic.com/generate_204",
        interval: 60,
        tolerance: 150,
      },
      {
        ...groupBaseOption,
        name: "👽 AI",
        type: "select",
        proxies: [
          "港台日新韩-自动",
          "台日新韩-自动",
          "日新韩-自动",
          "美国-自动",
          "其他-自动",
        ],
      },
      // {
      //   ...groupBaseOption,
      //   "name": "👽 AI2",
      //   "type": "select",
      //   "proxies": ["DIRECT", "所有-自动", "港台日新韩-自动", "台日新韩-自动", "香港-自动", "台湾-自动", "日本-自动", "新加坡-自动", "韩国-自动", "美国-自动", "其他-自动", "REJECT"]
      // },
      {
        ...groupBaseOption,
        name: "📘 GitHub",
        type: "select",
        proxies: [
          "DIRECT",
          "所有-自动",
          "港台日新韩-自动",
          "台日新韩-自动",
          "香港-自动",
          "台湾-自动",
          "日本-自动",
          "新加坡-自动",
          "韩国-自动",
          "美国-自动",
          "其他-自动",
          "REJECT",
        ],
      },
      {
        ...groupBaseOption,
        name: "🙋 Telegram",
        type: "select",
        proxies: [
          "DIRECT",
          "所有-自动",
          "港台日新韩-自动",
          "台日新韩-自动",
          "香港-自动",
          "台湾-自动",
          "日本-自动",
          "新加坡-自动",
          "韩国-自动",
          "美国-自动",
          "其他-自动",
          "REJECT",
        ],
      },
      {
        ...groupBaseOption,
        name: "📀 流媒体",
        type: "select",
        proxies: [
          "DIRECT",
          "所有-自动",
          "港台日新韩-自动",
          "台日新韩-自动",
          "香港-自动",
          "台湾-自动",
          "日本-自动",
          "新加坡-自动",
          "韩国-自动",
          "美国-自动",
          "其他-自动",
          "REJECT",
        ],
      },
      {
        ...groupBaseOption,
        name: "🌍 国外",
        type: "select",
        proxies: [
          "DIRECT",
          "所有-自动",
          "港台日新韩-自动",
          "台日新韩-自动",
          "香港-自动",
          "台湾-自动",
          "日本-自动",
          "新加坡-自动",
          "韩国-自动",
          "美国-自动",
          "其他-自动",
          "REJECT",
        ],
      },
      {
        ...groupBaseOption,
        name: "➡️ 国内",
        type: "select",
        proxies: [
          "DIRECT",
          "所有-自动",
          "港台日新韩-自动",
          "台日新韩-自动",
          "香港-自动",
          "台湾-自动",
          "日本-自动",
          "新加坡-自动",
          "韩国-自动",
          "美国-自动",
          "其他-自动",
          "REJECT",
        ],
      },
    ];
  
    // 覆盖原配置中的规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
  
    // 返回修改后的配置
    return config;
  }
  