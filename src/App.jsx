import React from 'react';
import './App.css';
import carIcon from './assets/icons/car.svg';
import lockIcon from './assets/icons/lock.svg';
import doorIcon from './assets/icons/door.svg';
import ServicesSection from './components/ServicesSection';


function App() {
  const servicesData = [
    {
      title: 'Аварийное открытие автомобилей',
      icon: carIcon,
      services: [
        { name: 'Вскрытие двери', price: 'от 1000 ₽' },
        { name: 'Вскрытие багажника', price: 'от 1000 ₽' },
        { name: 'Открытие двери без ключа', price: 'от 1000 ₽' }
      ]
    },
    {
      title: 'Вскрытие разных замков',
      icon: lockIcon,
      services: [
        { name: 'Вскрыть сейф любого вида', price: 'от 1000 ₽' },
        { name: 'Вскрытие калитки', price: 'от 1000 ₽' },
        { name: 'Вскрытие гаража', price: 'от 1000 ₽' }
      ]
    },
    {
      title: 'Вскрытие дверей',
      icon: doorIcon,
      services: [
        { name: 'Вскрытие входной двери', price: 'от 1000 ₽' },
        { name: 'Вскрытие межкомнатных дверей', price: 'от 1000 ₽' },
        { name: 'Вскрытие дверей', price: 'от 1000 ₽' }
      ]
    }
  ];

  return (
    <div className="app">
      <div className="content">
        {servicesData.map((section, index) => (
          <ServicesSection
            key={index}
            title={section.title}
            services={section.services}
            icon={section.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default App;