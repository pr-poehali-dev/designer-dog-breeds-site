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
    image: "https://cdn.poehali.dev/projects/89b246bd-3921-46d0-a9e1-b385e720dee9/files/8f05939f-158b-4f06-bd9d-e8672c99fd70.jpg",
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
    image: "https://cdn.poehali.dev/projects/89b246bd-3921-46d0-a9e1-b385e720dee9/files/1d4d7216-dc27-496b-b853-af6e56a6309c.jpg",
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
    image: "https://cdn.poehali.dev/projects/89b246bd-3921-46d0-a9e1-b385e720dee9/files/e0edcd02-a278-4dbc-8c9d-65fb5033ea52.jpg",
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
    image: "https://cdn.poehali.dev/projects/89b246bd-3921-46d0-a9e1-b385e720dee9/files/5b193874-75be-469c-a4cc-c9b17b0cf4bf.jpg",
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
    image: "https://cdn.poehali.dev/projects/89b246bd-3921-46d0-a9e1-b385e720dee9/files/9f9ded14-6470-4ec3-ba0b-ce1f9374394f.jpg",
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
    image: "https://cdn.poehali.dev/projects/89b246bd-3921-46d0-a9e1-b385e720dee9/files/335e38ae-4cc5-4ccb-8637-8c92bc2f01ac.jpg",
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
        <p className="text-xl text-brown-400 max-w-2xl mx-auto mb-12">
          Современные гибриды
        </p>
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-3 mx-auto border-4 border-pink-200">
                  <span className="text-3xl">🐕</span>
                </div>
                <div className="text-sm font-semibold text-pink-600">♀ ПОРОДА А</div>
                <div className="text-xs text-brown-400">Мать</div>
              </div>
              
              <div className="flex flex-col items-center">
                <Icon name="Plus" size={32} className="text-brown-400 mb-2" />
                <div className="text-xs text-brown-400 font-medium">гибрид</div>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto border-4 border-blue-200">
                  <span className="text-3xl">🐕</span>
                </div>
                <div className="text-sm font-semibold text-blue-600">♂ ПОРОДА Б</div>
                <div className="text-xs text-brown-400">Отец</div>
              </div>
              
              <div className="flex flex-col items-center">
                <Icon name="ArrowRight" size={32} className="text-brown-400 mb-2" />
                <div className="text-xs text-brown-400 font-medium">результат</div>
              </div>
              
              <div className="text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-beige-200 to-brown-200 rounded-full flex items-center justify-center mb-3 mx-auto border-4 border-brown-300 shadow-lg">
                  <span className="text-4xl">🐶</span>
                </div>
                <div className="text-sm font-bold text-brown-600">ДИЗАЙНЕРСКАЯ</div>
                <div className="text-sm font-bold text-brown-600">ПОРОДА</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-24">
          {breeds.map((breed, index) => (
            <div 
              key={breed.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden bg-brown-600 border-brown-500 shadow-lg hover-scale">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6 text-beige-50">
                    <div>
                      <h2 className="text-4xl font-bold text-beige-50 mb-2">
                        {breed.name}
                      </h2>
                      <div className="flex flex-wrap items-center gap-3 text-beige-100 text-sm">
                        <div className="flex items-center gap-2 bg-pink-50 border border-pink-200 px-4 py-2 rounded-full">
                          <span className="text-xs font-semibold text-pink-600">♀ МАТЬ:</span>
                          <span className="font-medium text-gray-800">{breed.mother}</span>
                        </div>
                        <Icon name="Plus" size={16} className="text-beige-200" />
                        <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
                          <span className="text-xs font-semibold text-blue-600">♂ ОТЕЦ:</span>
                          <span className="font-medium text-gray-800">{breed.father}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-beige-100 p-4 rounded-lg text-center">
                        <Icon name="Clock" size={24} className="mx-auto mb-2 text-brown-500" />
                        <div className="text-xs text-gray-600 mb-1">Продолжительность жизни</div>
                        <div className="font-semibold text-gray-800">{breed.lifespan}</div>
                      </div>
                      <div className="bg-beige-100 p-4 rounded-lg text-center">
                        <Icon name="Ruler" size={24} className="mx-auto mb-2 text-brown-500" />
                        <div className="text-xs text-gray-600 mb-1">Рост</div>
                        <div className="font-semibold text-gray-800">{breed.height}</div>
                      </div>
                      <div className="bg-beige-100 p-4 rounded-lg text-center">
                        <Icon name="Weight" size={24} className="mx-auto mb-2 text-brown-500" />
                        <div className="text-xs text-gray-600 mb-1">Вес</div>
                        <div className="font-semibold text-gray-800">{breed.weight}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-beige-50 mb-3">
                        <Icon name="Sparkles" size={20} />
                        Темперамент
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {breed.temperament.map((trait) => (
                          <span 
                            key={trait}
                            className="px-3 py-1 bg-beige-100 text-brown-600 rounded-full text-sm"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-beige-50 mb-3">
                        <Icon name="Scissors" size={20} />
                        Особенности ухода
                      </h3>
                      <ul className="space-y-2">
                        {breed.care.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-beige-100 text-sm">
                            <Icon name="Check" size={16} className="mt-0.5 text-beige-200 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-beige-50 mb-3">
                        <Icon name="AlertCircle" size={20} />
                        Минусы породы
                      </h3>
                      <ul className="space-y-2">
                        {breed.cons.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-beige-100 text-sm">
                            <Icon name="AlertTriangle" size={16} className="mt-0.5 text-beige-200 flex-shrink-0" />
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

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-brown-600 text-center mb-12">Сравнительная таблица пород</h2>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-brown-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Порода</th>
                  <th className="px-6 py-4 text-center font-semibold">Размер</th>
                  <th className="px-6 py-4 text-center font-semibold">Вес</th>
                  <th className="px-6 py-4 text-center font-semibold">Уровень активности</th>
                  <th className="px-6 py-4 text-center font-semibold">Сложность ухода</th>
                  <th className="px-6 py-4 text-center font-semibold">Для семьи с детьми</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-beige-200">
                <tr className="hover:bg-beige-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brown-600">Мальтипу</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Маленький</span>
                  </td>
                  <td className="px-6 py-4 text-center text-brown-500">2-7 кг</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-200 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-200 rounded-full"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Высокая</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Icon name="Check" size={20} className="mx-auto text-green-600" />
                  </td>
                </tr>
                <tr className="hover:bg-beige-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brown-600">Пуделетой</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Маленький</span>
                  </td>
                  <td className="px-6 py-4 text-center text-brown-500">2-4 кг</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-200 rounded-full"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Средняя</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Icon name="AlertCircle" size={20} className="mx-auto text-orange-500" />
                  </td>
                </tr>
                <tr className="hover:bg-beige-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brown-600">Лабрадудль</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Большой</span>
                  </td>
                  <td className="px-6 py-4 text-center text-brown-500">22-30 кг</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Высокая</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Icon name="Check" size={20} className="mx-auto text-green-600" />
                  </td>
                </tr>
                <tr className="hover:bg-beige-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brown-600">Кокапу</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Средний</span>
                  </td>
                  <td className="px-6 py-4 text-center text-brown-500">5-11 кг</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-200 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-200 rounded-full"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Средняя</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Icon name="Check" size={20} className="mx-auto text-green-600" />
                  </td>
                </tr>
                <tr className="hover:bg-beige-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brown-600">Шнудель</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Средний</span>
                  </td>
                  <td className="px-6 py-4 text-center text-brown-500">6-9 кг</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-200 rounded-full"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Высокая</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Icon name="Check" size={20} className="mx-auto text-green-600" />
                  </td>
                </tr>
                <tr className="hover:bg-beige-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brown-600">Кавапу</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Средний</span>
                  </td>
                  <td className="px-6 py-4 text-center text-brown-500">5-10 кг</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-200 rounded-full"></div>
                      <div className="w-3 h-3 bg-brown-200 rounded-full"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Средняя</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Icon name="Check" size={20} className="mx-auto text-green-600" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-beige-50 px-6 py-4 border-t border-beige-200">
            <div className="flex flex-wrap gap-6 text-sm text-brown-500">
              <div className="flex items-center gap-2">
                <Icon name="Info" size={16} />
                <span>Уровень активности: от 1 до 5 точек</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-green-600" />
                <span>Подходит для семьи с детьми</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="AlertCircle" size={16} className="text-orange-500" />
                <span>Требует осторожности с маленькими детьми</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-12 px-4 text-center bg-beige-100 mt-24">
        <p className="text-brown-400">
          Информация носит ознакомительный характер. Перед приобретением собаки проконсультируйтесь с ветеринаром.
        </p>
      </footer>
    </div>
  );
};

export default Index;