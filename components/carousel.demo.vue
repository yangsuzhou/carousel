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
    <div class="carousel-demo">
        <Slider
            :items="items"
            :gap="16"
            :duration="400"
            :displayCount="3"
            :exposureWidth="30"
            paginationVisible
            @change="onChange"
        >
            <template #default="{ item, active }">
                <div
                    class="demo-card"
                    :class="{ 'demo-card--active': active }"
                    :style="{
                        backgroundColor: colors[items.indexOf(item)],
                        transform: active ? 'scale(1.05)' : 'scale(0.95)',
                    }"
                >
                    {{ item }}
                </div>
            </template>
        </Slider>
        <p class="demo-tip">当前索引: {{ currentIndex }}</p>
    </div>
</template>

<style scoped>
.carousel-demo {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px 16px;
    background: #fafafa;
}
.demo-card {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.demo-card--active {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
.demo-tip {
    text-align: center;
    margin-top: 16px;
    color: #666;
    font-size: 14px;
}
</style>
