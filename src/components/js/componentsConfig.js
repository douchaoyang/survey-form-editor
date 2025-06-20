export const basicComponents = [
	{
		type: "input",
		meta: "input",
		name: "文本框",
		icon: "el-icon-edit-outline",
		options: {
			// 题目名称
			label_active: true,
			label_text: "请填写本项内容",
			// 占位文案
			placeholder: "",
			// 此题必答
			required_active: false,
			required_tip: "",
			// 正则表达式
			pattern_active: false,
			pattern_regexp: "",
			pattern_tip: "",
		},
	},
	{
		type: "single",
		meta: "single",
		name: "单选题",
		icon: "el-icon-apple",
		options: {
			// radio 或者 select
			type: "radio",
			// 题目名称
			label_active: true,
			label_text: "请填写本项内容",
			// 此题必答
			required_active: false,
			required_tip: "",
			options: [
				{
					value: "选项1"
				},
				{
					value: "选项2"
				}
			]
		},
	},
	{
		type: "multiple",
		meta: "multiple",
		name: "多选题",
		icon: "el-icon-cherry",
		options: {
			// radio 或者 select
			type: "radio",
			// 题目名称
			label_active: true,
			label_text: "请填写本项内容",
			// 此题必答
			required_active: false,
			required_tip: "",
			options: [
				{
					value: "选项1"
				},
				{
					value: "选项2"
				}
			]
		},
	},
	{
		type: "cascader",
		meta: "cascader",
		name: "级联选择器",
		icon: "el-icon-grape",
		options: {
			// 题目名称
			label_active: true,
			label_text: "请填写本项内容",
			// 占位文案
			placeholder: "请选择",
			// 此题必答
			required_active: false,
			required_tip: "",
			options: [
				{
					value: "选项1",
					children: [
						{
							value: "选项1-1",
							children: []
						}
					]
				},
			]
		},
	},
];

export const layoutComponents = [
	{
		type: "input",
		meta: "contact_email",
		key: "contact_email",
		name: "邮箱",
		icon: "el-icon-message",
		options: {
			// 题目名称
			label_active: true,
			label_text: "邮箱",
			// 占位文案
			placeholder: "请输入您的邮箱",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的邮箱",
			// 正则表达式
			pattern_active: true,
			pattern_regexp:
				"^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$",
			pattern_tip: "请输入合法的邮箱",
			emailcode_active: false

		},
	},
	{
		type: "input",
		meta: "telephone",
		key: "telephone",
		name: "手机",
		icon: "el-icon-mobile",
		options: {
			// 题目名称
			label_active: true,
			label_text: "手机号",
			// 占位文案
			placeholder: "请输入您的手机号",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的手机号",
			// 正则表达式
			pattern_active: true,
			pattern_regexp: "^1[3-9]\\d{9}$|^\\+852\\d{8}$|^\\+853\\d{8}$|^\\+8860?9\\d{8}$",
			pattern_tip: "请填写正确的中国地区手机号",
			smscode_active: false
		},
	},
	{
		type: "input",
		meta: "fullname",
		key: "fullname",
		name: "姓名",
		icon: "el-icon-user",
		options: {
			// 题目名称
			label_active: true,
			label_text: "姓名",
			// 占位文案
			placeholder: "请输入您的姓名",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的姓名",
			// 正则表达式
			pattern_active: true,
			pattern_regexp: "^.{0,150}$",
			pattern_tip: "",
		},
	},
	{
		type: "cascader",
		meta: "position",
		key: "position",
		name: "地区",
		icon: "el-icon-location-outline",
		options: {
			// 题目名称
			label_active: true,
			label_text: "地区",
			// 占位文案
			placeholder: "请选择省市",
			// 此题必答
			required_active: true,
			required_tip: "请选择省市",
		},
	},
	{
		type: "input",
		meta: "phone",
		key: "phone",
		name: "电话",
		icon: "el-icon-phone-outline",
		options: {
			// 题目名称
			label_active: true,
			label_text: "电话",
			// 占位文案
			placeholder: "请输入您的电话",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的电话",
			// 正则表达式
			pattern_active: false,
			pattern_regexp: "",
			pattern_tip: "",
		},
	},
	{
		type: "input",
		meta: "address",
		key: "address",
		name: "详细地址",
		icon: "el-icon-house",
		options: {
			// 题目名称
			label_active: true,
			label_text: "详细地址",
			// 占位文案
			placeholder: "请输入您的详细地址",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的详细地址",
		},
	},
	{
		type: "input",
		meta: "postcode",
		key: "postcode",
		name: "邮编",
		icon: "el-icon-truck",
		options: {
			// 题目名称
			label_active: true,
			label_text: "邮编",
			// 占位文案
			placeholder: "请输入您的邮编",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的邮编",
			// 正则表达式
			pattern_active: false,
			pattern_regexp: "",
			pattern_tip: "",
		},
	},
	{
		type: "multiple",
		meta: "interest",
		key: "interest",
		name: "感兴趣的产品技术",
		icon: "el-icon-data-analysis",
		options: {
			// radio 或者 select
			type: "radio",
			// 题目名称
			label_active: true,
			label_text: "感兴趣的产品技术",
			// 此题必答
			required_active: false,
			required_tip: "",
			options: [
				{ value: "传感/MEMS", },
				{ value: "控制器/处理器/DSP", },
				{ value: "开关/多路复用器", },
				{ value: "放大和线性产品", },
				{ value: "存储", },
				{ value: "连接器", },
				{ value: "测试测量", },
				{ value: "光电/显示", },
				{ value: "嵌入式开发工具", },
				{ value: "电源/电池管理", },
				{ value: "音/视频", },
				{ value: "RF/微波", },
				{ value: "EDA/IP/IC/PCB设计", },
				{ value: "数字/可编程逻辑", },
				{ value: "分立/无源器件", },
				{ value: "通信/网络IC", },
				{ value: "制造/封装", },
				{ value: "时钟/定时", },
			]
		},
	},
	{
		type: "input",
		meta: "family_name",
		key: "family_name",
		name: "姓",
		icon: "el-icon-user",
		options: {
			// 题目名称
			label_active: true,
			label_text: "姓",
			// 占位文案
			placeholder: "请输入您的姓",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的姓",
			// 正则表达式
			pattern_active: true,
			pattern_regexp: "^.{0,150}$",
			pattern_tip: "",
		},
	},
	{
		type: "input",
		meta: "first_name",
		key: "first_name",
		name: "名",
		icon: "el-icon-user",
		options: {
			// 题目名称
			label_active: true,
			label_text: "名",
			// 占位文案
			placeholder: "请输入您的名",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的名",
			// 正则表达式
			pattern_active: true,
			pattern_regexp: "^.{0,150}$",
			pattern_tip: "",
		},
	},
	{
		type: "input",
		meta: "work-company",
		key: "work-company",
		name: "公司",
		icon: "el-icon-office-building",
		options: {
			// 题目名称
			label_active: true,
			label_text: "公司",
			// 占位文案
			placeholder: "请输入您的公司名称",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的公司名称",
		},
	},
	{
		type: "input",
		meta: "work-department",
		key: "work-department",
		name: "部门",
		icon: "el-icon-service",
		options: {
			// 题目名称
			label_active: true,
			label_text: "部门",
			// 占位文案
			placeholder: "请输入您的部门名称",
			// 此题必答
			required_active: true,
			required_tip: "请输入您的部门名称",
		},
	},
	{
		type: "cascader",
		meta: "work-industry-sector",
		key: "work-industry-sector",
		name: "行业",
		icon: "el-icon-brush",
		options: {
			// 题目名称
			label_active: true,
			label_text: "行业",
			// 占位文案
			placeholder: "请选择您的行业",
			// 此题必答
			required_active: true,
			required_tip: "请选择您的行业",
			second_active: true
		},
	},
	{
		type: "single",
		meta: "work-position",
		key: "work-position",
		name: "职位",
		icon: "el-icon-connection",
		options: {
			// radio 或者 select
			type: "select",
			// 题目名称
			label_active: true,
			label_text: "职位",
			// 此题必答
			required_active: true,
			required_tip: "请描述您的职位",
			options: [
				{
					value: "研发"
				},
				{
					value: "研发管理/项目管理"
				},
				{
					value: "公司管理"
				},
				{
					value: "采购/市场/服务"
				},
				{
					value: "生产管理/质量控制"
				},
				{
					value: "教师/学术研究"
				},
				{
					value: "学生"
				},
			]
		},
	},
	{
		type: "privacy",
		meta: "terms_of_service",
		key: "terms_of_service",
		name: "用户告知书",
		icon: "el-icon-lock",
		options: {
			title: "我已阅读并同意<em>用户告知书</em>",
			name: "用户告知书",
			content: "请更新用户告知书内容",
			// 此题必答
			required_active: true,
			required_tip: "*需要阅读并同意用户告知书",
			// 正则表达式
			pattern_active: true,
			pattern_regexp: "^[01]$",
			pattern_tip: "",
		},
	},
];