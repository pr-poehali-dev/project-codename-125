import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">EduMethod</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">Обо мне</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Услуги</a>
              <a href="#kwork" className="text-slate-600 hover:text-slate-900 transition-colors">Кворк</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Проекты</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Открыта для проектов</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Превращаю знания в <span className="text-blue-600">работающие</span> образовательные продукты
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Методолог онлайн-образования с 10-летним опытом. Создаю курсы «под ключ», внедряю ИИ-инструменты
                и автоматизирую обучающие процессы — от идеи до готового продукта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Обсудить проект
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Смотреть кейсы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="BookOpen" className="h-6 w-6" />
                    <span className="font-semibold">Педагогический дизайн</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Bot" className="h-6 w-6" />
                    <span className="font-semibold">ИИ-автоматизация и ИИ-ассистенты</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="BarChart2" className="h-6 w-6" />
                    <span className="font-semibold">Аналитика и A/B-тестирование</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Layers" className="h-6 w-6" />
                    <span className="font-semibold">Курсы «под ключ»</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Обо мне</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Методолог онлайн-образования, педагогический дизайнер, эксперт по ИИ-инструментам
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Системный подход к обучению</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                10 лет работаю методистом: от офлайн-программ ДОСААФ до современных онлайн-курсов.
                Умею переводить сложные данные в структурированный контент для любой аудитории —
                от школьников до корпоративных команд. Сочетаю аналитику, креативность и внимание к деталям.
                В 2017 году награждена медалью «90 лет ДОСААФ» за вклад в воспитание молодёжи.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Дизайн и разработка</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">Supa</Badge>
                    <Badge variant="secondary">Articulate</Badge>
                    <Badge variant="secondary">Canva</Badge>
                    <Badge variant="secondary">Tilda</Badge>
                    <Badge variant="secondary">WordPress</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">ИИ и автоматизация</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">n8n</Badge>
                    <Badge variant="secondary">LLM/LMM API</Badge>
                    <Badge variant="secondary">RAG</Badge>
                    <Badge variant="secondary">Suvvy</Badge>
                    <Badge variant="secondary">Salebot</Badge>
                    <Badge variant="secondary">Cursor</Badge>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Обучение и EdTech / e-learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Skillspace</Badge>
                    <Badge variant="secondary">iSpring Learn</Badge>
                    <Badge variant="secondary">GetCourse</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Аналитика</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">A/B-тесты</Badge>
                    <Badge variant="secondary">Метрики</Badge>
                    <Badge variant="secondary">ЦА-исследования</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.poehali.dev/projects/4aead618-0d59-45c8-8e7a-ab51d6e5e1f5/bucket/260af31b-e616-4582-857b-4e6ced73bed0.jpg"
                alt="Фото методолога"
                className="rounded-2xl shadow-xl w-full max-w-[360px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный цикл создания образовательных продуктов — от концепции до запуска и аналитики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Курсы «под ключ»</CardTitle>
                <CardDescription>
                  Полный цикл создания онлайн-курса: от распаковки идеи и фирменного стиля до линейки продуктов.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Разработка структуры курса и пути студента</li>
                  <li>• Сценарии для EdTech / e-learning (Articulate, Figma)</li>
                  <li>• Создание фирменного стиля и голоса проекта</li>
                  <li>• Интеграция с LMS-платформами</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Bot" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>ИИ-инструменты и автоматизация</CardTitle>
                <CardDescription>
                  Внедрение искусственного интеллекта в обучающие процессы и бизнес-операции.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Создание ИИ-ассистентов и ТГ-ботов (Suvvy, Salebot)</li>
                  <li>• Автоматизация на n8n</li>
                  <li>• LLM/LMM API — российские и зарубежные решения</li>
                  <li>• Промпт-инжиниринг и RAG-системы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart2" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Аналитика и масштабирование</CardTitle>
                <CardDescription>
                  Исследование целевой аудитории, A/B-тестирование и анализ эффективности обучения.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Исследования целевой аудитории</li>
                  <li>• Сбор и анализ метрик эффективности</li>
                  <li>• A/B-тестирование образовательных решений</li>
                  <li>• Масштабирование существующих проектов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="PenLine" className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Копирайтинг и контент</CardTitle>
                <CardDescription>
                  Создание структурированного контента, понятного любой аудитории.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Копирайтинг и рерайтинг</li>
                  <li>• Перевод сложных данных в понятный контент</li>
                  <li>• Материалы для школьников и корпораций</li>
                  <li>• Методология и учебные программы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Palette" className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Сайты и фирменный стиль</CardTitle>
                <CardDescription>
                  Разработка визуального и вербального бренда проекта.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Разработка фирменного стиля</li>
                  <li>• Создание сайтов в конструкторах (Tilda, WP)</li>
                  <li>• Прототипирование в Figma и Supa</li>
                  <li>• Голос и позиционирование проекта</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Методология обучения</CardTitle>
                <CardDescription>
                  Гибкий подход к построению образовательных программ для любых форматов.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Создание методологии «с нуля»</li>
                  <li>• Офлайн и онлайн форматы</li>
                  <li>• Программы для корпоративных команд</li>
                  <li>• Педагогический дизайн по современным трендам</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kwork Section */}
      <section id="kwork" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Кворк #1</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Запуск MVP онлайн-курса за 2 недели
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Фокус на практике и продажах. Под ключ для экспертов.
            </p>
          </div>

          {/* For whom */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Icon name="UserCheck" className="h-7 w-7 text-blue-600" />
                Для кого эта услуга?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <Icon name="Lightbulb" className="h-6 w-6 text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-slate-700">Эксперты с знаниями и материалами, но без структуры курса</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                  <Icon name="Video" className="h-6 w-6 text-purple-600 mt-0.5 shrink-0" />
                  <p className="text-slate-700">Преподаватели живых вебинаров, которые хотят масштабироваться и автоматизировать процесс</p>
                </div>
              </div>

              <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">Что такое MVP?</p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong>MVP (Minimum Viable Product)</strong> — минимально жизнеспособный продукт. Запускаем базовую версию курса, чтобы быстро получить обратную связь от первых студентов и проверить гипотезу спроса.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  <strong>Преимущество:</strong> Экономия бюджета и времени. Вы не создаёте «идеальный» курс полгода, а запускаете работающий прототип за 2 недели, тестируете и дорабатываете.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  <strong>Оценка эффективности:</strong> В курс сразу закладывается стратегия оценки (KPI, тесты, практические задания), чтобы вы видели результат студентов.
                </p>
              </div>
            </div>

            {/* Result */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Icon name="CheckCircle" className="h-7 w-7 text-green-600" />
                Результат
              </h3>
              <ul className="space-y-3">
                {[
                  "Готовая программа курса с модулями и уроками",
                  "Сценарии для видео/вебинаров",
                  "Комплект учебных материалов (презентации, раздаточные материалы, шаблоны)",
                  "Банк заданий (кейсы, тесты, практические работы)",
                  "Система оценки эффективности (критерии, чек-листы проверки)",
                  "Рекомендации по масштабированию после MVP",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="Check" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stages */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Этапы работы</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: "01", title: "Анализ и CustDev", icon: "Search" },
                { num: "02", title: "Проектирование", icon: "Layout" },
                { num: "03", title: "Разработка материалов", icon: "FileText" },
                { num: "04", title: "Создание ИИ-ассистента", icon: "Bot" },
                { num: "05", title: "Сборка и запуск MVP", icon: "Rocket" },
                { num: "06", title: "Сбор метрик", icon: "BarChart2" },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                    {step.num}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name={step.icon} className="h-4 w-4 text-slate-500" />
                    <span className="font-medium text-slate-800">{step.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">14</div>
                <div className="text-blue-100">дней на выполнение</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-blue-100">базовый MVP онлайн-курса</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">доработка до результата</div>
              </div>
            </div>
            <div className="mt-8 border-t border-white/20 pt-6 text-center">
              <p className="text-blue-100 mb-4 text-sm">
                Для продуктивного старта: заполните бриф и ознакомьтесь с детализацией услуги перед первым звонком
              </p>
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Заказать кворк
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Избранные проекты</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Кейсы в онлайн-образовании, автоматизации и разработке образовательных продуктов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src="/modern-web-dashboard.png"
                  alt="Онлайн-курс под ключ"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Онлайн-курс «под ключ»</CardTitle>
                    <CardDescription>
                      Полный цикл создания образовательного продукта: от распаковки идеи до запуска линейки курсов и ИИ-ассистента Службы заботы.
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="ExternalLink" className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">Articulate</Badge>
                  <Badge variant="outline">GetCourse</Badge>
                  <Badge variant="outline">LLM API</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Полная линейка продуктов + ИИ-ассистент</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-purple-500 to-pink-600">
                <img
                  src="/ecommerce-mobile-app.png"
                  alt="ИИ-автоматизация"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>ИИ-ассистент и автоматизация</CardTitle>
                    <CardDescription>
                      Разработка ТГ-бота и ИИ-ассистента для образовательного проекта с интеграцией n8n и RAG-системой.
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Icon name="ExternalLink" className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">n8n</Badge>
                  <Badge variant="outline">RAG</Badge>
                  <Badge variant="outline">Suvvy</Badge>
                  <Badge variant="outline">Salebot</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Автоматизация бизнес-процессов обучения</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Создадим образовательный продукт вместе</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Реализую ваши идеи с применением искусственного и натурального интеллектов, практических навыков и современных инструментов.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Связаться со мной</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Есть идея курса, нужен ИИ-ассистент или хотите масштабировать обучающий проект?
                Давайте обсудим — найдём оптимальное решение под вашу задачу.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">hello@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Send" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-slate-300">@your_telegram</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Linkedin" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-slate-300">Ваш профиль</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Обсудить проект</CardTitle>
                <CardDescription className="text-slate-300">
                  Расскажите о задаче — я предложу решение на стыке методологии и современных технологий.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Анна"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Фамилия</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иванова"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="anna@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">О проекте</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Опишите вашу задачу: курс, ИИ-инструмент, автоматизация..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">EduMethod</div>
            <p className="text-center md:text-right">
              2026 EduMethod. Методолог онлайн-образования — от идеи до готового продукта.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
