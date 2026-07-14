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
    <div class="demo-autoplay">
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
            <template #default="{ item, active }">
                <div
                    :class="{ active }"
                    :style="{ backgroundColor: item.color }"
                    style="height: 200px; display: flex; align-items: center; justify-content: center; border-radius: 8px; color: #fff"
                >
                    <div style="text-align: center">
                        <h3 style="margin: 0 0 8px; font-size: 28px">{{ item.title }}</h3>
                        <p style="margin: 0; opacity: 0.85">{{ item.desc }}</p>
                    </div>
                </div>
            </template>
        </Slider>

        <div class="control-bar">
            <label class="switch">
                <input type="checkbox" v-model="autoplay" />
                <span>自动播放</span>
            </label>
            <label class="delay-control">
                <span>间隔：{{ delay }} ms</span>
                <input type="range" min="1000" max="5000" step="500" v-model.number="delay" />
            </label>
        </div>
    </div>
</template>

<style scoped>
.demo-autoplay {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px 16px;
    background: #fafafa;
}
.control-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 16px;
    font-size: 14px;
    color: #333;
}
.switch {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;
}
.delay-control {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}
.delay-control input[type="range"] {
    cursor: pointer;
}
.hint {
    margin: 12px 0 0;
    font-size: 12px;
    color: #888;
    line-height: 1.6;
}
</style>
