# @punish/carousel

一个轻量、高性能的 Vue 3 轮播组件，支持触摸拖拽、无限循环、RTL 布局。

## ✨ 特性

- 🚀 **高性能** - 基于 CSS3 动画，流畅无卡顿
- 📱 **触摸支持** - 原生触摸拖拽体验
- 🔄 **无限循环** - 无缝滚动切换
- 🌍 **RTL 支持** - 支持从右向左布局
- 🎨 **高度可定制** - 丰富的 Props 和插槽
- ⚡ **轻量级** - 无依赖，体积小巧

## 📦 安装

```bash
pnpm add @punish/carousel
```

## 🚀 快速开始

### 全局注册

```ts
import { createApp } from "vue";
import Carousel from "@punish/carousel";

const app = createApp(App);
app.use(Carousel);
```

### 按需引入

```vue
<script setup lang="ts">
import { Slider } from "@punish/carousel";
</script>
```

### 基础用法

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Slider } from "@punish/carousel";

const items = ref([
    { title: "山川壮丽", color: "#2d3436" },
    { title: "海洋秘境", color: "#0984e3" },
    { title: "城市光影", color: "#6c5ce7" },
]);
</script>

<template>
    <Slider :items="items" paginationVisible>
        <template #default="{ item }">
            <div :style="{ backgroundColor: item.color }">
                {{ item.title }}
            </div>
        </template>
    </Slider>
</template>
```

## 📖 文档

查看完整的 API 文档和示例：

[在线文档](https://your-username.github.io/carousel-docs/)

## 🎯 Props

| 参数                | 类型                       | 默认值      | 说明                  |
| ------------------- | -------------------------- | ----------- | --------------------- |
| `items`             | `Array`                    | `[]`        | 数据数组              |
| `displayCount`      | `number`                   | `1`         | 同时显示的卡片数量    |
| `gap`               | `number`                   | `0`         | 列表项间距 (px)       |
| `duration`          | `number`                   | `300`       | 动画过渡时长 (ms)     |
| `paginationVisible` | `boolean`                  | `true`      | 是否显示分页器        |
| `dir`               | `"ltr" \| "rtl" \| "auto"` | `undefined` | 布局方向              |
| `exposureWidth`     | `number`                   | `0`         | 相邻项的露出宽度 (px) |

## 🎪 插槽

| 名称      | 参数               | 说明           |
| --------- | ------------------ | -------------- |
| `default` | `{ item, active }` | 轮播列表项内容 |

## 📡 事件

| 事件名   | 参数              | 说明                     |
| -------- | ----------------- | ------------------------ |
| `change` | `(index: number)` | 当前激活项索引变化时触发 |

## 🧩 暴露的方法

通过组件 ref 可调用以下方法：

| 方法     | 签名                      | 说明           |
| -------- | ------------------------- | -------------- |
| `moveTo` | `(index: number) => void` | 跳转到指定索引 |
| `next`   | `() => void`              | 切换到下一项   |
| `prev`   | `() => void`              | 切换到上一项   |

## 📄 许可证

MIT License
