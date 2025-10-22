# uni-unocss

采用更激进的语法、更加便捷的配置在 UniApp 中使用 UnoCSS

[![NPM version](https://img.shields.io/npm/v/uni-unocss?color=A12AEB&labelColor=18181B&label=npm)](https://www.npmjs.com/package/uni-unocss)
[![NPM downloads](https://img.shields.io/npm/dm/uni-unocss?color=A12AEB&labelColor=18181B&label=downloads)](https://www.npmjs.com/package/uni-unocss)
[![LICENSE](https://img.shields.io/github/license/skiyee/uni-unocss?style=flat&color=A12AEB&labelColor=18181B&label=license)](https://www.npmjs.com/package/uni-unocss)

### 📖 简介

`uni-unocss` 是一个为 UniApp 平台量身定制的 UnoCSS，它让你能够在 UniApp 项目中无缝使用 UnoCSS 的原子化 CSS 类

### ✨ 特性

- 🚀 **零配置开箱即用** - 无需复杂配置即可在 UniApp 中使用 UnoCSS
- 📱 **多平台支持** - 同时支持 Web、App和小程序平台
- 🔧 **自动平台检测** - 根据运行环境自动适配不同的平台
- 🎨 **丰富的原子类** - 基于 UnoCSS 完整原子类支持
- 🛠️ **自定义配置** - 支持自定义 UnoCSS 配置
- 📦 **轻量级** - 只包含必要的功能，保持包体积最小化
- 🐛 **兼容性** - 解决 [unocss-applet](https://github.com/unocss-applet/unocss-applet) 由兼容性引起的BUG

### 🦾 支持

> [!NOTE]
> 均以 UniApp 为基准， √：支持 ×：不支持 -：未知
> 
> 对于 未知 支持的平台，如果您愿意，可以帮助我们测试一下！

| 平台         | 支持程度 |
|--------------|----------|
| H5           | √        |
| app-vue      | √        |
| app-nvue     | ×        |
| 微信小程序   | √        |
| 支付宝小程序 | √        |
| 抖音小程序   | -        |
| 小红书小程序 | -        |
| 百度小程序   | -        |
| 快手小程序   | -        |
| 京东小程序   | -        |

### 📦 安装

```bash
npm install uni-unocss
# 或
pnpm add uni-unocss
# 或
yarn add uni-unocss
```

### 🚀 使用

#### 1. 设定

在 Vite.config.(ts|js) 文件中设定

```ts
import UniUnoCSS from 'uni-unocss'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    //...
    UniUnoCSS(),
    Uni(),
  ],
})

```

#### 2. 配置

在项目根目录创建 `uno.config.ts` 文件：

```ts
import {
  defineConfig,
  presetUni,
  transformerDirectives,
  transformerVariantGroup,
} from 'uni-unocss'

export default defineConfig({
  presets: [presetUni()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
```

#### 2. 在 UniApp 中使用

在 `main.ts` 中引入：

```ts
import "virtual:uno.css";
```

#### 3. 在组件中使用

```vue
<template>
  <div class="h-screen text-center flex select-none transition-all">
    <div class="ma">
      <div
        class="text-3xl m-2.5 fw600 animate-bounce-alt animate-count-infinite animate-duration-1s"
      >
        uni-unocss
      </div>
      <div class="op30 text-lg fw300 m1">
        采用更激进的语法在 UniApp 中使用 UnoCSS
      </div>
    </div>
  </div>
</template>
```

### ⚙️ 配置选项

```ts
import { presetUni } from 'uni-unocss'

presetUni({
  // 运行平台，默认自动检测环境
  platform: 'web' | 'miniapp',
  // 一比一的 @unocss/preset-wind3 配置信息
  wind?: PresetWind3Options,
})
```

### 📝 示例

查看 `example` 目录中的完整示例项目。

### 👥 社区

- QQ 交流群 ([976866565](https://qm.qq.com/q/FyHN1X5qwK))

### 💝 赞赏

如果我的工作帮助到了您，可以请我吃辣条，使我能量满满 ⚡

> 请留下您的Github用户名，感谢 ❤

#### 爱发电赞赏

[https://afdian.com/a/skiyee](https://afdian.com/a/skiyee)

#### 微信赞赏

<img src="https://cdn.jsdelivr.net/gh/Skiyee/sponsors@main/assets/wechat-pay.png" alt="wechat-pay" width="320" />

#### 赞赏榜单

<p align="center">
  <a href="https://github.com/Skiyee/sponsors">
    <img alt="sponsors" src="https://cdn.jsdelivr.net/gh/Skiyee/Skiyee@main/sponsors.svg"/>
  </a>
</p>

### 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 🔗 周边

| 项目                                                               | 描述                                                                    |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| [Uni Ku](https://github.com/uni-ku)                                | 有很多 Uniapp(Uni) 的酷(Ku)的组织                                       |
| [Skiyee UI](https://github.com/skiyee/ui)                          | 一个由原子化CSS驱动、符合直觉设计、高度定制化、面向AI时代的移动端 UI 库 |
| [Wot Design Uni](https://github.com/Moonofweisheng/wot-design-uni) | 一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件                   |
| [Create Uni](https://github.com/uni-helper/create-uni)             | 一个用于快速创建 uni-app 项目的轻量脚手架工具                           |
| [Uni Best](https://github.com/unibest-tech/unibest)                | 最好用的 uniapp 开发框架                                                |

### ⚖ 许可证

MIT

### 🙏 致谢

特别感谢以下项目：

- [UnoCSS](https://github.com/unocss/unocss) - 提供了强大的原子化 CSS 引擎
- [UnoCSS Applet](https://github.com/unocss-applet/unocss-applet) - 为小程序平台提供的 UnoCSS 支持

没有这些优秀项目的基础，`uni-unocss` 将无法实现。
