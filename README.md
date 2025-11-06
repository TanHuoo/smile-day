# 📱 Smile Day

<div align="center">

**把复杂天气翻译成直观建议**

[![iOS](https://img.shields.io/badge/iOS-17.0+-blue.svg)](https://developer.apple.com/ios/)
[![Swift](https://img.shields.io/badge/Swift-6.0+-orange.svg)](https://swift.org/)
[![SwiftUI](https://img.shields.io/badge/SwiftUI-5.0+-green.svg)](https://developer.apple.com/xcode/swiftui/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)

[English](#-smile-day) | [中文](#-smile-day-1)

</div>

---

## 🌟 项目简介

**Smile Day** 是一款基于**三天情境对比**与**极简文字交互**的生活决策型天气应用。它通过独特的滑屏交互，将复杂的天气数据转化为直观的冷暖感知与清晰的行动指南，帮助用户在3秒内做出出行决策。

### 核心价值

- ⚡ **3秒决策** - 快速获取核心天气信息
- 📊 **情境对比** - 昨日-今日-明日温度对比
- 🎨 **现代设计** - 遵循Apple设计规范，简约美观
- 🌡️ **温度感知** - 动态渐变背景传达温度感受
- 📱 **全平台** - 支持iPhone和iPad

---

## ✨ 主要功能

### 🌤️ 核心天气功能

- ✅ **三日天气对比** - 昨日/今日/明日温度对比，直观感受温度变化
- ✅ **实时天气数据** - 基于WeatherAPI.com的准确天气数据
- ✅ **7天天气预报** - 未来一周详细天气预报
- ✅ **历史天气数据** - 查看过去天气记录
- ✅ **24小时预报** - 精确到小时的天气变化
- ✅ **温度趋势图表** - 可视化温度变化趋势

### 🏙️ 城市管理

- ✅ **多城市支持** - 免费版1个城市，订阅版10个城市
- ✅ **全国城市搜索** - 支持拼音、中文搜索
- ✅ **城市切换** - 快速切换不同城市天气
- ✅ **位置服务** - 自动获取当前位置天气

### 🎨 用户体验

- ✅ **滑屏交互** - 流畅的左右滑屏体验
- ✅ **动态背景** - 根据温度自动调整渐变背景
- ✅ **智能建议** - 穿衣建议、出行建议
- ✅ **iOS小组件** - 桌面小组件支持
- ✅ **iPad适配** - 完美支持iPad全屏显示

### 💰 订阅功能

- ✅ **免费版** - 基础功能免费使用
  - 每日3次刷新
  - 1个城市
  - 基础通知
- ✅ **订阅版** - 解锁全部功能
  - 无限制刷新
  - 10个城市
  - 7天预报
  - 历史数据
  - 个性化推送
  - 高级建议

---

## 🛠️ 技术栈

### 开发环境

- **平台**: iOS 17.0+
- **语言**: Swift 6.0+
- **UI框架**: SwiftUI + UIKit
- **架构**: MVVM + Repository Pattern
- **状态管理**: Combine

### 核心技术

- **依赖注入**: 自定义DI容器
- **网络请求**: URLSession + async/await
- **数据缓存**: NSCache + 磁盘缓存
- **位置服务**: CoreLocation
- **推送通知**: UserNotifications
- **订阅管理**: StoreKit 2
- **数据共享**: App Groups

### 第三方服务

- **天气API**: WeatherAPI.com
- **地理编码**: Open-Meteo Geocoding API

---

## 📸 应用截图

> 💡 提示：截图将在App Store审核通过后添加

### 主界面
- 三日天气对比视图
- 温度感知动态背景
- 滑屏交互体验

### 功能页面
- 7天天气预报
- 天气详情页面
- 城市管理界面
- 设置页面

---

## 🚀 快速开始

### 环境要求

- Xcode 15.0+ (推荐 Xcode 16.0+)
- iOS 17.0+ 设备或模拟器
- Swift 6.0+
- CocoaPods (如需要)

### 安装步骤

1. **appstore**
   - 搜索“smile day”
---

## 📖 使用说明

### 基本操作

1. **查看今日天气** - 启动应用默认显示今日天气
2. **查看昨日天气** - 向右滑动或点击左侧圆点
3. **查看明日天气** - 向左滑动或点击右侧圆点
4. **查看详情** - 点击页面任意位置查看详细天气信息
5. **切换城市** - 点击城市名称进入城市管理

### 功能说明

- **温度对比**: 自动计算与昨日的温度差异，显示"热多了"、"凉快些"等描述
- **穿衣建议**: 根据温度自动生成穿衣建议
- **出行建议**: 提供是否需要带伞等出行建议
- **通知设置**: 免费用户可开启基础通知，订阅用户解锁个性化推送

---

---


### 贡献方式

1. **报告问题** - 在 [Issues](https://github.com/TanHuoo/smile-day/issues) 中报告bug或提出建议


---

## 📄 许可证

本项目采用 MIT 许可证。详情请查看 [LICENSE](LICENSE) 文件。

---

## 📞 联系方式

- **开发者**: TanHuoo.com
- **GitHub**: [@TanHuoo](https://github.com/TanHuoo)
- **项目地址**: https://github.com/TanHuoo/smile-day
- **问题反馈**: [Issues](https://github.com/TanHuoo/smile-day/issues)

---

## 🙏 致谢

- WeatherAPI.com - 天气数据服务
- Open-Meteo - 地理编码服务
- Apple - SwiftUI框架和开发工具

---

### 最近更新

- ✅ **App Store合规修复** (2025-11-06)
  - 基础通知权限免费化
  - 添加隐私政策和服务条款链接
- ✅ **设置页面美化** (2025-11-04)
  - 按照Apple设计规范全面美化
  - 8pt网格系统，统一组件化设计
- ✅ **iPad适配优化** (2025-11-04)
  - iPad上模态视图全屏显示
  - 解决内容截断问题


---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给个Star支持一下！**

Made with ❤️ by [TanHuoo](https://github.com/TanHuoo)

</div>
