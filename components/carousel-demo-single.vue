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
    <div class="demo-single">
        <Slider
            :items="items"
            :gap="0"
            :duration="500"
            :displayCount="1"
            paginationVisible
            @change="onChange"
        >
            <template #default="{ item, active }">
                <div class="slide-card" :class="{ 'slide-card--active': active }" :style="{ backgroundColor: item.color }">
                    <div class="slide-content">
                        <h3 class="slide-title">{{ item.title }}</h3>
                        <p class="slide-desc">{{ item.desc }}</p>
                    </div>
                </div>
            </template>
        </Slider>
        <p class="demo-tip">当前第 {{ currentIndex + 1 }} 张 / 共 {{ items.length }} 张</p>
    </div>
</template>

<style scoped>
.demo-single {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px 16px;
    background: #fafafa;
}
.slide-card {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.slide-card--active {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}
.slide-content {
    text-align: center;
    color: #fff;
}
.slide-title {
    margin: 0 0 8px;
    font-size: 28px;
    font-weight: 700;
}
.slide-desc {
    margin: 0;
    font-size: 16px;
    opacity: 0.85;
}
.demo-tip {
    text-align: center;
    margin-top: 16px;
    color: #666;
    font-size: 14px;
}
</style>
