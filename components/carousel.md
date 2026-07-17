---
outline: deep
---

<script setup>
import CarouselDemo from './carousel.demo.vue'
import CarouselDemoSingle from './carousel-demo-single.vue'
import CarouselDemoControls from './carousel-demo-controls.vue'
import CarouselDemoRtl from './carousel-demo-rtl.vue'
import CarouselDemoAutoplay from './carousel-demo-autoplay.vue'
</script>

# Carousel 轮播组件

一个轻量、高性能的 Vue 3 轮播组件，支持触摸拖拽、无限循环、RTL 布局。

## 安装

该组件已发布为 `@punish/carousel` 包，可直接引入使用：

```bash
pnpm add @punish/carousel
```

## 全局注册

```ts
import { createApp } from "vue";
import Carousel from "@punish/carousel"; // 无需 额外引入 css 文件
// import "@punish/carousel/dist/style.css"; // 如果使用SSR 或者 SSG 且出现样式闪烁情况，可以 手动引入样式来避免问题

const app = createApp(App);
app.use(Carousel);
```

## 按需引入

```vue
<script setup lang="ts">
import { Slider } from "@punish/carousel"; // 无需 额外引入 css 文件
</script>
```

## 基础示例

每页只显示一张内容，适合做 Banner 轮播或图片幻灯片。

### 在线演示

<br/>

<CarouselDemoSingle />

### 示例代码

::: details 点击展开代码

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Slider } from "@punish/carousel";

const items = ref([
    { title: "山川壮丽", desc: "感受大自然的鬼斧神工", color: "#2d3436" },
    { title: "海洋秘境", desc: "探索深蓝世界的奥秘", color: "#0984e3" },
    { title: "城市光影", desc: "夜幕下的繁华都市", color: "#6c5ce7" },
    { title: "森林物语", desc: "聆听自然的低语", color: "#00b894" },
    { title: "沙漠星辰", desc: "仰望浩瀚的星空", color: "#e17055" },
]);

const currentIndex = ref(0);
function onChange(index: number) {
    currentIndex.value = index;
}
</script>

<template>
    <Slider :items="items" :gap="0" :duration="500" :displayCount="1" paginationVisible @change="onChange">
        <template #default="{ item, active, index }">
            <div
                :class="{ active }"
                :style="{ backgroundColor: item.color }"
                style="
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    color: #fff;
                "
            >
                <div style="text-align: center;">
                    <h3 style="margin: 0 0 8px; font-size: 28px;">{{ item.title }}</h3>
                    <p style="margin: 0; opacity: 0.85;">{{ item.desc }}</p>
                </div>
            </div>
        </template>
    </Slider>
</template>
```

:::

## 自动轮播

通过 `autoplay` 开启自动播放，并用 `delay` 控制切换间隔（单位 ms）。

### 在线演示

<br />

<CarouselDemoAutoplay />

### 示例代码

:::: details 点击展开代码

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Slider } from "@punish/carousel";

const items = ref([
    { title: "山川壮丽", desc: "感受大自然的鬼斧神工", color: "#2d3436" },
    { title: "海洋秘境", desc: "探索深蓝世界的奥秘", color: "#0984e3" },
    { title: "城市光影", desc: "夜幕下的繁华都市", color: "#6c5ce7" },
    { title: "森林物语", desc: "聆听自然的低语", color: "#00b894" },
    { title: "沙漠星辰", desc: "仰望浩瀚的星空", color: "#e17055" },
]);

const autoplay = ref(true);
const delay = ref(2500);
const currentIndex = ref(0);

function onChange(index: number) {
    currentIndex.value = index;
}
</script>

<template>
    <Slider
        :items="items"
        :gap="0"
        :duration="500"
        :displayCount="1"
        paginationVisible
        :autoplay="autoplay"
        :delay="delay"
        @change="onChange"
    >
        <template #default="{ item, active, index }">
            <div
                :class="{ active }"
                :style="{ backgroundColor: item.color }"
                style="
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    color: #fff;
                "
            >
                <div style="text-align: center;">
                    <h3 style="margin: 0 0 8px; font-size: 28px;">{{ item.title }}</h3>
                    <p style="margin: 0; opacity: 0.85;">{{ item.desc }}</p>
                </div>
            </div>
        </template>
    </Slider>

    <!-- 可交互地开关自动播放、调整间隔 -->
    <label><input type="checkbox" v-model="autoplay" /> 自动播放</label>
    <label>间隔：{{ delay }} ms <input type="range" min="1000" max="5000" step="500" v-model.number="delay" /></label>
</template>
```

::::

## 多卡片并排展示

同时展示多个卡片，适合横向列表展示场景。

### 在线演示

<br/>

<CarouselDemo />

### 示例代码

:::: details 点击展开代码

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Slider } from "@punish/carousel";

const items = ref(["红色", "蓝色", "绿色", "黄色", "紫色", "橙色"]);
const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#a29bfe", "#fd79a8"];
const currentIndex = ref(0);

function onChange(index: number) {
    currentIndex.value = index;
}
</script>

<template>
    <Slider :items="items" :gap="16" :duration="400" :displayCount="3" :exposureWidth="30" paginationVisible @change="onChange">
        <template #default="{ item, active, index }">
            <div
                :class="{ active }"
                :style="{
                    backgroundColor: colors[items.indexOf(item)],
                    transform: active ? 'scale(1.05)' : 'scale(0.95)',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: '600',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: active ? '0 8px 24px rgba(0, 0, 0, 0.15)' : 'none',
                }"
            >
                {{ item }}
            </div>
        </template>
    </Slider>
    <p style="text-align: center; margin-top: 16px; color: #666; font-size: 14px;">当前索引: {{ currentIndex }}</p>
</template>
```

::::

## 暴露的方法

通过组件 ref 可调用以下方法：

| 方法     | 签名                      | 说明           |
| -------- | ------------------------- | -------------- |
| `moveTo` | `(index: number) => void` | 跳转到指定索引 |
| `next`   | `() => void`              | 切换到下一项   |
| `prev`   | `() => void`              | 切换到上一项   |

### 示例：通过 ref 调用（在线演示）

下面是一个可交互的示例，你可以点击按钮切换轮播，也可以直接拖拽卡片：

<CarouselDemoControls />

### 示例代码

:::: details 点击展开代码

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Slider } from "@punish/carousel";
import type { SliderRef } from "@punish/carousel";

const sliderRef = ref<SliderRef | null>(null);
const items = ref(["A", "B", "C", "D", "E", "F"]);
const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#a29bfe", "#fd79a8"];
const currentIndex = ref(0);

function onChange(index: number) {
    currentIndex.value = index;
}

function goNext() {
    sliderRef.value?.next();
}
function goPrev() {
    sliderRef.value?.prev();
}
function goTo(index: number) {
    sliderRef.value?.moveTo(index);
}
</script>

<template>
    <Slider
        ref="sliderRef"
        :items="items"
        :gap="12"
        :duration="400"
        :displayCount="3"
        :exposureWidth="20"
        :paginationVisible="false"
        @change="onChange"
    >
        <template #default="{ item, active }">
            <div
                :style="{
                    backgroundColor: colors[items.indexOf(item)],
                    transform: active ? 'scale(1.08)' : 'scale(0.95)',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '20px',
                    fontWeight: '700',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: active ? '0 8px 24px rgba(0, 0, 0, 0.15)' : 'none',
                }"
            >
                {{ item }}
            </div>
        </template>
    </Slider>

    <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 16px;">
        <button
            style="padding: 8px 20px; border: 1px solid #d0d5dd; border-radius: 6px; background: #fff; color: #333; font-size: 14px; cursor: pointer;"
            @click="goPrev"
        >
            ◀ 上一项
        </button>
        <span style="font-size: 14px; color: #666; min-width: 60px; text-align: center;">{{ currentIndex + 1 }} / {{ items.length }}</span>
        <button
            style="padding: 8px 20px; border: 1px solid #d0d5dd; border-radius: 6px; background: #fff; color: #333; font-size: 14px; cursor: pointer;"
            @click="goNext"
        >
            下一项 ▶
        </button>
    </div>

    <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 12px; font-size: 14px; color: #666;">
        <span>跳转到：</span>
        <button
            v-for="(_, i) in items"
            :key="i"
            :style="{
                padding: '4px 12px',
                border: '1px solid #d0d5dd',
                borderRadius: '4px',
                background: i === currentIndex ? '#4ecdc4' : '#fff',
                color: i === currentIndex ? '#fff' : '#333',
                fontSize: '12px',
                cursor: 'pointer',
            }"
            @click="goTo(i)"
        >
            第 {{ i + 1 }} 项
        </button>
    </div>
</template>
```

::::

## 高级用法

### RTL 布局

支持从右向左的布局方向，适合阿拉伯语、希伯来语等 RTL 语言场景。

#### 在线演示

<br />

<CarouselDemoRtl />

#### 示例代码

:::: details 点击展开代码

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Slider } from "@punish/carousel";

const items = ref([
    { title: "山川壮丽", desc: "感受大自然的鬼斧神工", color: "#2d3436" },
    { title: "海洋秘境", desc: "探索深蓝世界的奥秘", color: "#0984e3" },
    { title: "城市光影", desc: "夜幕下的繁华都市", color: "#6c5ce7" },
    { title: "森林物语", desc: "聆听自然的低语", color: "#00b894" },
    { title: "沙漠星辰", desc: "仰望浩瀚的星空", color: "#e17055" },
]);

const currentIndex = ref(0);
function onChange(index: number) {
    currentIndex.value = index;
}
</script>

<template>
    <Slider :items="items" :gap="0" :duration="500" :displayCount="1" paginationVisible dir="rtl" @change="onChange">
        <template #default="{ item, active }">
            <div
                :class="{ active }"
                :style="{ backgroundColor: item.color }"
                style="
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    color: #fff;
                "
            >
                <div style="text-align: center;">
                    <h3 style="margin: 0 0 8px; font-size: 28px;">{{ item.title }}</h3>
                    <p style="margin: 0; opacity: 0.85;">{{ item.desc }}</p>
                </div>
            </div>
        </template>
    </Slider>
</template>
```

::::

### 多卡片展示 + 部分露出

```vue
<template>
    <Slider :items="items" :displayCount="3" :exposureWidth="40" :gap="16" :duration="400">
        <template #default="{ item, active }">
            <div :class="{ active }" style="height: 150px; border-radius: 12px; background: #a29bfe; transition: all 0.3s;">
                <!-- 自定义内容 -->
            </div>
        </template>
    </Slider>
</template>
```

## Props

| 参数                             | 类型                       | 默认值      | 说明                       |
| -------------------------------- | -------------------------- | ----------- | -------------------------- |
| `items`                          | `Array`                    | `[]`        | 数据数组                   |
| `autoplay`                       | `boolean`                  | `false`     | 是否自动轮播               |
| `delay`                          | `number`                   | `3000`      | 自动轮播间隔 (ms)          |
| `initialIndex`                   | `number`                   | `0`         | 当前激活项索引             |
| `threshold`                      | `number`                   | `20`        | 拖拽切换阈值 (px)          |
| `gap`                            | `number`                   | `0`         | 列表项间距 (px)            |
| `duration`                       | `number`                   | `300`       | 动画过渡时长 (ms)          |
| `displayCount`                   | `number`                   | `1`         | 同时显示的卡片数量         |
| `exposureWidth`                  | `number`                   | `0`         | 相邻项的露出宽度 (px)      |
| `dir`                            | `"ltr" \| "rtl" \| "auto"` | `undefined` | 布局方向                   |
| `itemClass`                      | `string`                   | `""`        | 列表项自定义 class         |
| `activeItemClass`                | `string`                   | `""`        | 激活项自定义 class         |
| `paginationVisible`              | `boolean`                  | `true`      | 是否显示分页器             |
| `paginationClass`                | `string`                   | `""`        | 分页器容器自定义 class     |
| `paginationItemClass`            | `string`                   | `""`        | 分页器项自定义 class       |
| `activePaginationItemClass`      | `string`                   | `""`        | 激活的分页器项自定义 class |
| `paginationGap`                  | `number`                   | `24`        | 分页器圆点间距 (px)        |
| `paginationVisibleWhenSingleOne` | `boolean`                  | `false`     | 当只有一项时是否显示分页器 |

## Events

| 事件名   | 参数              | 说明                     |
| -------- | ----------------- | ------------------------ |
| `change` | `(index: number)` | 当前激活项索引变化时触发 |
