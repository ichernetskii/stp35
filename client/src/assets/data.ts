import React from "react";

import HomePage from "../components/pages/home/home-page";
import Services from "../components/pages/services/services";
import Price from "../components/pages/price/price";
const About = React.lazy(() => import( /* webpackPrefetch: 80 */ "../components/pages/about/about"));
// import About from "../components/pages/about/about";
import Contacts from "../components/pages/contacts/contacts";

interface IData {
	menuItems: { label: string, href: string, component: React.FC }[],
	contact: {
		email: string,
		phone: string,
		phoneDisp: string,
		workingTime: string,
		address: string,
		name: string,
		geo: [number, number]
	},
	pages: {
		home: {
			services: {
				accordion: { image: string, title: string, text: string }[]
			},
			balls: { image: string, title: string }[],
			works: { image?: string, size: "s" | "m" | "l", title?: string, description?: string }[]
		},
		services: {
			faq: { question: string, answer: string }[]
		},
		price: {
			headers:string[],
			content: Record<string, [string, string, string | number][]>
		},
		about: {
			gallery: { title?: string, date?: Date, image: string }[]
		}
	}
}

const data: IData = {
	menuItems: [
		{ label: "Главная", href: "/", component: HomePage },
		{ label: "Услуги", href: "/services", component: Services },
		{ label: "Цены", href: "/price", component: Price },
		{ label: "О нас", href: "/about", component: About },
		{ label: "Контакты", href: "/contacts", component: Contacts },
	],
	contact: {
		email: "info@stp35.ru",
		phone: "+7 (951) 748-14-10",
		phoneDisp: "8 (800) 510-51-01",
		workingTime: "8:00 - 17:00",
		address: "160029, г.&nbsp;Вологда, ул.&nbsp;Машиностроительная, д.&nbsp;19, офис&nbsp;123",
		name: "Сантехпром",
		geo: [59.212036, 39.912777]
	},
	pages: {
		home: {
			services: {
				accordion: [
					{
						image: require("images/homepage/accordion/1.svg"),
						title: "Подготовка к отопительному сезону",
						text: `
							<p>Ремонт, промывка и гидравлические испытания систем отопления.</p>
							<p>Укомплектованность тепловых узлов, элеваторных и тепловых узлов поверенными контрольно-измерительными приборами.</p>
							<p>Восстановление тепловой изоляции на трубопроводах, расширительных баках, регулирующей аппаратуре</p>
							<p>Наладочные работы по системам тепло-, водоснабжения, где по результатам эксплуатации в предстоящий зимний период не были обеспечены требуемые параметры</p>
						`
					},
					{
						image: require("images/homepage/accordion/2.svg"),
						title: "Капитальный ремонт и реконструкция систем водоснабжения, водоотведения и отопления",
						text: `
							<p>Ремонт или замена инженерных систем холодного водоснабжения, в том числе:</p>
							<ul>
								<li>Ремонт или замена водомерных узлов;</li>
								<li>Ремонт или замена разводящих магистралей и стояков;</li>
								<li>Замена запорной арматуры, в том числе на ответвлении от стояков в квартиру;</li>
								<li>Ремонт или замена в комплексе оборудования повысительных насосных установок;</li>
								<li>Ремонт или замена оборудования, трубопроводов и оснащения пожарного водопровода.</li>
							</ul>
							<p>Ремонт или замена системы горячего водоснабжения, в том числе:</p>
							<ul>
								<li>Ремонт или замена ТРЖ, теплообменников, бойлеров, насосных установок и другого оборудования (в составе общего имущества) в комплексе для приготовления и подачи горячей воды в распределительную сеть;
								<li>Ремонт или замена разводящих магистралей и стояков.
							</ul>
							<p>Замена запорной арматуры, в том числе на ответвлении от стояков в квартиру.</p>
							<p>Ремонт или замена системы канализации и водоотведения, в том числе ремонт или замена выпусков, сборных трубопроводов, стояков и вытяжек.</p>
							<p>Замена задвижек при их наличии.</p>
							<p>Ремонт или замена системы отопления, в том числе:</p>
							<ul>
								<li>Ремонт или замена разводящих магистралей и стояков;</li>
								<li>Замена запорной и регулировочной арматуры, в том числе на ответвлении от стояков к отопительным приборам в жилых помещениях.</li>
							</ul>
							<p>Перегруппировка или замена отопительных приборов в местах общего пользования, замена ответвлений от стояков и отопительных приборов в жилых помещениях.</p>
							<p>Установка, ремонт или замена в комплексе оборудования ИТП (индивидуальных тепловых пунктов) и при наличии повысительных насосных установок.</p>
						`
					},
					{
						image: require("images/homepage/accordion/3.svg"),
						title: "Текущий ремонт систем водоснабжения, водоотведения и отопления",
						text: `
							<p>Установка, замена и восстановление работоспособности отдельных элементов и частей элементов внутренних систем центрального отопления;</p>
							<p>Установка, замена и восстановление работоспособности отдельных элементов и частей элементов внутренних систем водопроводов и канализации, горячего водоснабжения, включая насосные установки в жилых зданиях.</p>
						`
					},
					{
						image: require("images/homepage/accordion/4.svg"),
						title: "Аварийно-диспетчерское обслуживание круглосуточно",
						text: `
							<p>Работа ОДС осуществляется круглосуточно. Служба ОДС ведет непрерывный контроль за работой инженерного оборудования, регистрирует его работу в соответствующих журналах и немедленно устраняет мелкие неисправности и аварии; о всех авариях или перерывах в работе систем водоснабжения, канализации, тепло-, электроснабжения срочно сообщает в аварийную службу организации по обслуживанию жилищного фонда, а также в специализированные организации, обслуживающие лифты, газовое оборудование, водопроводно-канализационное и др.</p>
						`
					},
					{
						image: require("images/homepage/accordion/5.svg"),
						title: "Сантехнические работы любой сложности",
						text: `
							<p>Виды работ согласно прайсу.</p>
						`
					}
				]
			},
			balls: [
				{ image: require("images/homepage/balls-1.svg"), title: "Скидка 5% льготным категориям граждан" },
				{ image: require("images/homepage/balls-2.svg"), title: "Гарантия на текущий ремонт от полугода до года на капитальный ремонт до  5 лет" },
				{ image: require("images/homepage/balls-3.svg"), title: "Мастер реагирует на вызов быстро" },
				{ image: require("images/homepage/balls-4.svg"), title: "Работаем круглосуточно без выходных" }
			],
			works: [
				{ image: require("images/homepage/objects-1.jpg"), size: "l", title: "Смеситель", description: "ул. Дзержинского, д. 17" },
				{ image: require("images/homepage/objects-2.jpg"), size: "m", title: "Смеситель", description: "ул. Московская, д. 33" },
				{ image: require("images/homepage/objects-3.jpg"), size: "m", title: "Смеситель", description: "ул. Текстильщиков, д. 21в" },
				{ size: "s" },
				{ size: "s" },
				{ image: require("images/homepage/objects-4.jpg"), size: "m", title: "Смеситель", description: "ул. Дзержинского, д. 39" },
				{ image: require("images/homepage/objects-5.jpg"), size: "m", title: "Смеситель", description: "ул. Текстильщиков, д. 20" },
				{ image: require("images/homepage/objects-6.jpg"), size: "l", title: "Смеситель", description: "ул. Дзержинского, д. 35" }
			]
		},
		services: {
			faq: [
				{
					question: "Сколько по времени происходит смена разливовводоснабжения?",
					answer: "Гарантийный срок – 15 лет, при правильно проведенном монтаже срок службы радиаторов «САНТЕХПРОМ» – не менее 25 лет!"
				},
				{
					question: "Есть ли гарантия на выполненные работы?",
					answer: "Гарантийный срок – 15 лет, при правильно проведенном монтаже срок службы радиаторов «САНТЕХПРОМ» – не менее 25 лет!"
				},
				{
					question: "Могу ли я выбрать мастера сам?",
					answer: "Гарантийный срок – 15 лет, при правильно проведенном монтаже срок службы радиаторов «САНТЕХПРОМ» – не менее 25 лет!"
				},
				{
					question: "Будет ли скидка для пенсионеров?",
					answer: "Гарантийный срок – 15 лет, при правильно проведенном монтаже срок службы радиаторов «САНТЕХПРОМ» – не менее 25 лет!"
				}
			]
		},
		price: {
			headers: [
				"Наименование услуги",
				"Единица измерения",
				"Цена"
			],
			content: {
				"Смесители": [
					["Демонтаж смесителя ванно-душевого", "1 шт.", 150],
					["Демонтаж смесителя кухонного", "1 шт.", 150],
					["Установка смесителя на мойку", "1 шт.", 550],
					["Установка ванно-душевого смесителя", "1 шт.", 500],
					["Установка сложного смесителя со сборкой", "1 шт.", 1150],
					["Установка стойки с тропическим душем", "1 шт.", 550],
					["Установка гигиенического душа", "1 шт.", 850],
					["Ремонт смесителя", "1 шт.", "от 250 ₽"]
				],
				"Унитазы, биде, инсталляции": [
					["Установка и врезка дополнительного крана в мойку", "1 шт.", 800],
					["Монтаж трех-ступенчатого фильтра", "1 шт.", 1300],
					["Монтаж фильтра с обратным осмосом", "1 шт.", 2400],
					["Установка фильтра грубой очистки Ø15", "1 шт.", 350],
					["Чистка фильтра Ø15", "1 шт.", 220],
					["Замена картриджа", "1 шт.", 250],
					["Монтаж фильтра мелкой очистки ", "1 шт.", 550]
				],
				"Трубы ВГП, ПП-Р, ПЭ, РЕХ, ПП-У, ПВХ, дренажная": [
					["Демонтаж труб водоснабжения и канализации", "1 м.п.", 250],
					["Прокладка пластиковых труб до Ø60 с креплениями", "1 м.п.", 540],
					["Установка фасонных частей пластиковых канализационныз труб", "1 шт.", 250],
					["Установка переходника диаметром до Ø¾", "1 м.п.", 250],
					["Установка хомута", "1 шт.", 250],
					["Установка тройника", "1 шт.", 410],
					["Установка заглушки на трубу", "1 шт.", 90]
				],
				"Работа с металлом": [
					["Нарезка резьбы клуппом Ø15", "1 шт.", 350],
					["Нарезка резьбы клуппом Ø20", "1 шт.", 400],
					["Нарезка резьбы клуппом Ø25", "1 шт.", 450],
					["Нарезка резьбы клуппом Ø32", "1 шт.", 500]
				],
				"Штробление, бурение, сверление": [
					["Штробление под трубу Ø20(кирпич, гипс, пенобетон)", "1 м.п.", 200],
					["Устройство отверстия Ø20 (дерево, перегородка)", "1 шт.", 200],
					["Заделка отверстий вокруг труб до 10 шт.", "1 шт.", 150]
				],
				"Запорная арматура": [
					["Монтаж шарового крана Ø15", "1 шт.", "от 400 ₽"],
					["Монтаж крана Ø20", "1 шт.", "от 420 ₽"],
					["Монтаж кранбуксы на водозапорной арматуре", "1 шт.", 230]
				],
				"Отопление, полотенцесушители": [
					["Демонтаж радиатора алюминиевого (биметалл, металл) ", "1 шт.", 400],
					["Демонтаж радиатора чугунного", "1 шт.", 600],
					["Монтаж радиатора стального и биметаллического", "1 шт.", 2000],
					["Монтаж крана на радиатор (запорного блока) Ø15", "1 шт.", "от 500 ₽"],
					["Переборка (деление сложение) радиатора алюм. (биметал)", "1 стык", 300],
					["Демонтаж полотенцесушителя", "1 шт.", 400],
					["Монтаж полотенцесушителя простого", "1 шт.", 1600],
					["Монтаж полотенцесушителя с заменой подводки", "1 шт.", 2800],
					["Установка крана на радиатор", "1 шт.", 1500],
					["Устранение течи полотенцесушителя", "1 шт.", 350]
				],
				"Прочее": [
					["Вызов сантехника для консультации", "15 мин.", 200],
					["Вызов мастера на диагностирование работы узлов учета ХВС и ГВС", "1 узел", 200],
					["Устранение засоров в лежачей каналищации до общего стояка", "1 м.п.", 450],
					["Устранение засоров сантехнических приборов: моек, раковин, умывальников, с промывкой сифона", "1 шт.", 450],
					["Устранение засоров унитазов", "1 шт.", 550],
					["Слив и наполнение водой системы водоснабжения", "1 стояк", 450],
					["Подъем строительных материалов (до 50 кг.)", "1 этаж", 50],
					["Вынос мусора до мусорного контейнера (до 50 кг.)", "1 этаж", 200]
				]
			}
		},
		about: {
			gallery: [
				{
					title: "ул. Конева, д. 3, кв. 30: входной кран",
					date: new Date(2021, 3, 14),
					image: require("images/about/gallery-01.jpg")
				},
				{
					title: "ул. Дзержинского, д. 27: узел",
					date: new Date(2021, 0, 22),
					image: require("images/about/gallery-02.jpg")
				},
				{
					title: "ул. Текстильщиков, д. 18А: ТУ",
					date: new Date(2020, 10, 13),
					image: require("images/about/gallery-03.jpg")
				},
				{
					title: "ул. Дзержинского, д. 117: шлагбаум",
					date: new Date(2021, 3, 20),
					image: require("images/about/gallery-04.jpg")
				},
				{
					title: "ул. Дзержинского, д. 41: ремонт стояка полотенцесушителя",
					date: new Date(2021, 0, 29),
					image: require("images/about/gallery-05.jpg")
				},
				{
					title: "ул. Дзержинского, д. 39: стояки",
					date: new Date(2021, 4, 15),
					image: require("images/about/gallery-06.jpg")
				},
				{
					title: "ул. Конева, д. 3: входные краны",
					date: new Date(2021, 3, 14),
					image: require("images/about/gallery-07.jpg")
				},
				{
					title: "ул. Текстильщиков, д. 22",
					date: new Date(2020, 7, 19),
					image: require("images/about/gallery-08.jpg")
				},
				{
					title: "ул. Можайского, д. 68: замена сборки",
					date: new Date(2020, 5, 8),
					image: require("images/about/gallery-09.jpg")
				},
				{
					title: "ул. Дзержинского, д. 17: входные вентили",
					date: new Date(2020, 11, 15),
					image: require("images/about/gallery-10.jpg")
				},
				{
					title: "ул. Конева, д. 3: почитка отломленного входного вентиля",
					date: new Date(2020, 4, 12),
					image: require("images/about/gallery-11.jpg")
				},
				{
					title: "ул. Дзержинского, д. 35: розлив отпления",
					date: new Date(2021, 3, 30),
					image: require("images/about/gallery-12.jpg")
				},
				{
					title: "ул. Конева, д. 3: установка входных ветилей",
					date: new Date(2021, 2, 4),
					image: require("images/about/gallery-13.jpg")
				}
			]
		}
	}
};

export default data;
