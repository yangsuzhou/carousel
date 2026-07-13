<script setup lang="ts">
import { ref } from "vue";
import { Slider } from "@punish/carousel";
import type { SliderRef } from "@punish/carousel";

const sliderRef = ref<SliderRef | null>(null);
const items = ref(["A", "B", "C", "D", "E", "F"]);
const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#a29bfe", "#fd79a8"];
const currentIndex = ref(0);
const jumpIndex = ref(0);

function onChange(index: number) {
    currentIndex.value = index;
}

function goNext() {
    sliderRef.value?.next();
}
function goPrev() {
    sliderRef.value?.prev();
}
function goTo() {
    sliderRef.value?.moveTo(jumpIndex.value);
}
</script>

<template>
    <div class="demo-controls">
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
                    class="ctrl-card"
                    :class="{ 'ctrl-card--active': active }"
                    :style="{
                        backgroundColor: colors[items.indexOf(item)],
                        transform: active ? 'scale(1.08)' : 'scale(0.95)',
                    }"
                >
                    {{ item }}
                </div>
            </template>
        </Slider>

        <div class="controls-bar">
            <button class="btn" @click="goPrev">◀ 上一项</button>
            <span class="current-label">{{ currentIndex + 1 }} / {{ items.length }}</span>
            <button class="btn" @click="goNext">下一项 ▶</button>
        </div>

        <div class="jump-bar">
            <span>跳转到：</span>
            <button
                v-for="(_, i) in items"
                :key="i"
                class="jump-btn"
                :class="{ 'jump-btn--active': i === currentIndex }"
                @click="sliderRef?.moveTo(i)"
            >
                第 {{ i + 1 }} 项
            </button>
        </div>
    </div>
</template>

<style scoped>
.demo-controls {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px 16px;
    background: #fafafa;
}
.ctrl-card {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.ctrl-card--active {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
.controls-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
}
.btn {
    padding: 8px 20px;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    background: #fff;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
}
.btn:hover {
    background: #f0f0f0;
    border-color: #a0a5ad;
}
.current-label {
    font-size: 14px;
    color: #666;
    min-width: 60px;
    text-align: center;
}
.jump-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
    font-size: 14px;
    color: #666;
}
.jump-btn {
    padding: 4px 12px;
    border: 1px solid #d0d5dd;
    border-radius: 4px;
    background: #fff;
    color: #333;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
}
.jump-btn:hover {
    background: #f0f0f0;
}
.jump-btn--active {
    background: #4ecdc4;
    color: #fff;
    border-color: #4ecdc4;
}
</style>
