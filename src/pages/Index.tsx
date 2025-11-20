import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface DogBreed {
  name: string;
  mother: string;
  father: string;
  image: string;
  lifespan: string;
  height: string;
  weight: string;
  temperament: string[];
  care: string[];
  cons: string[];
}

const breeds: DogBreed[] = [
  {
    name: "Мальтипу",
    mother: "Мальтийская болонка",
    father: "Той-пудель",
    image: "/placeholder.svg",
    lifespan: "12-15 лет",
    height: "20-35 см",
    weight: "2-7 кг",
    temperament: ["Игривый", "Ласковый", "Умный", "Энергичный"],
    care: ["Ежедневное расчесывание", "Стрижка каждые 6-8 недель", "Чистка зубов 3 раза в неделю"],
    cons: ["Склонность к тревожности при разлуке", "Требует много внимания", "Может быть шумным"]
  },
  {
    name: "Пуделетой",
    mother: "Той-пудель",
    father: "Русский той-терьер",
    image: "/placeholder.svg",
    lifespan: "12-16 лет",
    height: "20-28 см",
    weight: "2-4 кг",
    temperament: ["Активный", "Преданный", "Любопытный", "Бдительный"],
    care: ["Регулярная стрижка", "Уход за шерстью 2-3 раза в неделю", "Защита от холода"],
    cons: ["Хрупкое телосложение", "Может быть нервным", "Плохо переносит одиночество"]
  },
  {
    name: "Лабрадудль",
    mother: "Лабрадор-ретривер",
    father: "Пудель (стандартный)",
    image: "/placeholder.svg",
    lifespan: "12-14 лет",
    height: "50-65 см",
    weight: "22-30 кг",
    temperament: ["Дружелюбный", "Умный", "Общительный", "Энергичный"],
    care: ["Расчесывание 3-4 раза в неделю", "Стрижка раз в 2-3 месяца", "Длительные прогулки"],
    cons: ["Требует много физической активности", "Может страдать от дисплазии", "Дорогой груминг"]
  },
  {
    name: "Кокапу",
    mother: "Кокер-спаниель",
    father: "Пудель (миниатюрный)",
    image: "/placeholder.svg",
    lifespan: "14-18 лет",
    height: "25-38 см",
    weight: "5-11 кг",
    temperament: ["Жизнерадостный", "Добрый", "Общительный", "Легко обучаемый"],
    care: ["Ежедневное расчесывание", "Груминг каждые 6-8 недель", "Проверка ушей"],
    cons: ["Склонность к ушным инфекциям", "Может набирать лишний вес", "Чувствителен к одиночеству"]
  },
  {
    name: "Шнудель",
    mother: "Цвергшнауцер",
    father: "Пудель (миниатюрный)",
    image: "/placeholder.svg",
    lifespan: "12-15 лет",
    height: "30-40 см",
    weight: "6-9 кг",
    temperament: ["Бдительный", "Умный", "Преданный", "Активный"],
    care: ["Регулярная стрижка", "Уход за бородой", "Тримминг жесткой шерсти"],
    cons: ["Может быть упрямым", "Требует последовательной дрессировки", "Склонность к лаю"]
  },
  {
    name: "Кавапу",
    mother: "Кавалер кинг чарльз спаниель",
    father: "Пудель (миниатюрный)",
    image: "/placeholder.svg",
    lifespan: "12-15 лет",
    height: "25-35 см",
    weight: "5-10 кг",
    temperament: ["Нежный", "Ласковый", "Игривый", "Общительный"],
    care: ["Расчесывание 3-4 раза в неделю", "Стрижка каждые 2 месяца", "Уход за глазами"],
    cons: ["Предрасположенность к сердечным заболеваниям", "Может страдать от тревожности", "Требует регулярного ветеринарного осмотра"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-beige-50">
      <header className="py-16 px-4 text-center bg-gradient-to-b from-beige-100 to-beige-50">
        <h1 className="text-5xl md:text-6xl font-bold text-brown-600 mb-4">
          Дизайнерские породы собак
        </h1>
        <p className="text-xl text-brown-400 max-w-2xl mx-auto">
          Современные гибриды, сочетающие лучшие качества родительских пород
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-24">
          {breeds.map((breed, index) => (
            <div 
              key={breed.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden bg-white border-beige-200 shadow-lg hover-scale">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-brown-600 mb-2">
                        {breed.name}
                      </h2>
                      <div className="flex items-center gap-3 text-brown-400 text-sm">
                        <div className="flex items-center gap-2 bg-beige-100 px-4 py-2 rounded-full">
                          <Icon name="Heart" size={16} className="text-brown-400" />
                          <span className="font-medium">{breed.mother}</span>
                        </div>
                        <Icon name="Plus" size={16} />
                        <div className="flex items-center gap-2 bg-beige-100 px-4 py-2 rounded-full">
                          <Icon name="Heart" size={16} className="text-brown-400" />
                          <span className="font-medium">{breed.father}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-beige-100 p-4 rounded-lg text-center">
                        <Icon name="Clock" size={24} className="mx-auto mb-2 text-brown-500" />
                        <div className="text-xs text-brown-400 mb-1">Продолжительность жизни</div>
                        <div className="font-semibold text-brown-600">{breed.lifespan}</div>
                      </div>
                      <div className="bg-beige-100 p-4 rounded-lg text-center">
                        <Icon name="Ruler" size={24} className="mx-auto mb-2 text-brown-500" />
                        <div className="text-xs text-brown-400 mb-1">Рост</div>
                        <div className="font-semibold text-brown-600">{breed.height}</div>
                      </div>
                      <div className="bg-beige-100 p-4 rounded-lg text-center">
                        <Icon name="Weight" size={24} className="mx-auto mb-2 text-brown-500" />
                        <div className="text-xs text-brown-400 mb-1">Вес</div>
                        <div className="font-semibold text-brown-600">{breed.weight}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-brown-600 mb-3">
                        <Icon name="Sparkles" size={20} />
                        Темперамент
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {breed.temperament.map((trait) => (
                          <span 
                            key={trait}
                            className="px-3 py-1 bg-brown-100 text-brown-600 rounded-full text-sm"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-brown-600 mb-3">
                        <Icon name="Scissors" size={20} />
                        Особенности ухода
                      </h3>
                      <ul className="space-y-2">
                        {breed.care.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-brown-500 text-sm">
                            <Icon name="Check" size={16} className="mt-0.5 text-brown-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-brown-600 mb-3">
                        <Icon name="AlertCircle" size={20} />
                        Минусы породы
                      </h3>
                      <ul className="space-y-2">
                        {breed.cons.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-brown-500 text-sm">
                            <Icon name="AlertTriangle" size={16} className="mt-0.5 text-brown-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-beige-200 to-beige-300 rounded-2xl transform rotate-3"></div>
                      <img 
                        src={breed.image}
                        alt={breed.name}
                        className="relative w-full h-full object-cover rounded-2xl shadow-xl"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-brown-500 text-white p-4 rounded-full shadow-lg">
                        <Icon name="Dog" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-12 px-4 text-center bg-beige-100 mt-24">
        <p className="text-brown-400">
          Информация носит ознакомительный характер. Перед приобретением собаки проконсультируйтесь с ветеринаром.
        </p>
      </footer>
    </div>
  );
};

export default Index;
