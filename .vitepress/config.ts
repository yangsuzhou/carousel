import { defineConfig } from "vitepress";

const base = process.env.VITEPRESS_BASE || "/";

export default defineConfig({
    title: "Carousel 轮播组件",
    description: "@punish/carousel 组件文档",
    lang: "zh-CN",
    base,
    head: [["link", { rel: "icon", href: `${base}favicon.ico` }]],
    themeConfig: {
        nav: [{ text: "首页", link: "/" }],
        socialLinks: [
            // { icon: "github", link: "https://github.com/your-repo/carousel-docs" }
        ],
        footer: {
            message: "基于 MIT 协议开源",
            copyright: "Copyright © 2024-present Monster UI",
        },
    },
});
