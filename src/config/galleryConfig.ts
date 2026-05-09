import type { GalleryConfig } from "@/types/config";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 支持jpg/png/webp/avif/gif格式
		// id: 相册唯一标识符（用于目录命名和URL路径），比如设置：id: "firefly-2026", 对应 public/gallery/firefly-2026/目录
		// cover: 手动指定封面图（可选，不填会把cover.*文件作为封面图，如果没有cover.*文件，则使用第一张图片作为封面图）
		// name: 相册名称
		// description: 相册描述
		// location: 相册拍摄地点
		// date: 相册日期，格式为 YYYY-MM-DD，用于排序和显示
		// tags: 相册标签，用于分类和过滤
		// 每添加一个数组项就相当于添加了一个相册，记得在 public/gallery/ 目录下创建对应的子目录并放入图片
		
		{
			id: "Akiyama Mizuki",
			name: "晓山瑞希",
			description: "我开始觉得，自己不用去改变什么，现在这样也挺好的。",
			location: "感谢各位画师大大",
			date: "2026-05-20",
			tags: ["晓山瑞希"],
		},
		{
			id: "Yamamoto Ryo",
			name: "山田凉",
			description: "一旦舍弃了个性，就跟死了没区别。",
			location: "孤独摇滚",
			date: "2026-05-20",
			tags: ["山田凉"],
		},
		{
			id: "千面Melancholy Love",
			name: "千面",
			description: "如果被埋在雪里的人是我，你会来寻找我吗？挖开一千层的雪？",
			location: "Yuri❤️",
			date: "2026-05-20",
			tags: ["Gal: 千面"],
		},
		{
			id: "Flowers -Le volume sur printemps-",
			name: "Flowers春",
			description: "如花四散,余香绕指,心中的裂痕亦能被填补。简而言之,这是“一个少女们与季节一起成长的故事”。",
			location: "Yuri❤️",
			date: "2026-05-20",
			tags: ["Gal: Flowers春"],
		},
		{
			id: "Flowers -Le volume sur ete-",
			name: "Flowers夏",
			description: "如花四散,余香绕指,心中的裂痕亦能被填补。简而言之,这是“一个少女们与季节一起成长的故事”。",
			location: "Yuri❤️",
			date: "2026-05-20",
			tags: ["Gal: Flowers夏"],
			cover:"/gallery/Flowers -Le volume sur ete-/00-07.jpg"
		},


















		{
			id: "firefly-2026",
			name: "可爱流萤(原作者很喜欢哦,遂保留)",
			description: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
			location: "崩坏：星穹铁道",
			date: "2026-01-01",
			tags: ["流萤"],
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};
