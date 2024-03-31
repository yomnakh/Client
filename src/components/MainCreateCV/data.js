export const stepperData = [
	{ id: 1, link: "main-information", title: "Main Information" },
	{ id: 2, link: "summary", title: "Summary" },
	{ id: 3, link: "skills", title: "Skills" },
	{ id: 4, link: "experience", title: "Experience" },
	{ id: 5, link: "education", title: "Education" },
	{ id: 6, link: "honers-and-awards", title: "Honers & Awards" },
	{ id: 7, link: "hobbies-and-interests", title: "Hobbies & Interests" },
	{ id: 8, link: "links", title: "Links" },
];


export const websiteAvailableIcons = [
	"linkedin",
	"github",
	"facebook",
	"twitter",
	"instagram",
	"youtube",
	"whatsapp",
	"telegram",
];

const iniInputsCount = 3;

export const initialformData = {
	image: "",
	main_information: {
		firstName: "",
		LastName: "",
		profession: "",
		city: "",
		country: "",
		mobileNumber: "",
		email: "",
		date: "",
		birthDay: "",
		state: "",
	},
	about: "",
	skills: Array(iniInputsCount).fill(""),
	experience: [
		{
			companyName: "",
			position: "",
			periodFrom: "",
			periodTo: "",
			description: "",
			img: "",
		},
	],
	education: [
		{
			organizationName: "",
			degree: "",
			periodFrom: "",
			periodTo: "",
			description: "",
		},
	],
	honersAndAwards: [
		{
			awardName: "",
			awardYear: "",
			description: "",
		},
	],
	hobbiesAndInterests: Array(iniInputsCount).fill(""),
	links: Array(iniInputsCount).fill({ sitename: "", url: "" }),
};

export const formDataFiled = {
	image: "",
	main_information: {
		firstName: "Hani",
		LastName: "Husamuddin",
		profession: "Frontend Developer",
		city: "Cairo",
		country: "Egypt",
		mobileNumber: "201112223334",
		email: "hani.husam@gmail.com",
	},
	about: "I have a background in information technology, with a focus on frontend development and UI design. I am the type of person who seizes every opportunity to learn something new. That is why I enjoy challenges. From there, I'm under pressure to learn quickly and gain a lot of new experience.",
	skills: [
		"HTML and CSS",
		"Scripting language: Javascript, Typescript, Python, Java",
		"Framework/Library: Django, React, Next, Bootstrap, TailwindCSS, etc",
		"Understanding UI Design; Visual Hierarchy, Design System, etc",
	],
	experience: [
		{
			companyName: "upwork",
			position: "frontend developer",
			periodFrom: "Nov 2019",
			periodTo: "present",
			description:
				"Upwork is an American freelancing platform where enterprises and individuals connect in order to conduct business. I am currently accepting remote or freelance Web Development and UI Design work from this platform",
			img: "",
		},
	],
	education: [
		{
			organizationName: 'Informtics, Universities Pembangunan Nasional "Veteran"* Yogyakarta',
			degree: "Bachelor of Computer Science, Artificial intelligence",
			periodFrom: "2015",
			periodTo: "2019",
			description:
				"I graduated in July 2019 with a GPA of 3.63. One of the award recipients for the best graduate of the university at the time. in my thesis, I looked into how Natural Language Processing (NLP) was used in Telegram Bot. For the NLP approach method, I used Neural Network (Deep Learning) and Text Mining.",
		},
	],
	honersAndAwards: [
		{
			awardName: "Best Graduated",
			awardYear: "2019",
			description:
				'included in one of the award recipients of the best graduate students in the IV graduation period of UPN "Veteran" Yogyakarta',
		},
	],
	hobbiesAndInterests: ["video games", "movies", "books"],
	links: [
		{ sitename: "facebook", url: "facebook" },
		{ sitename: "linkedin", url: "facebook" },
		{ sitename: "twitter", url: "facebook" },
		{ sitename: "github", url: "facebook" },
	],
};
