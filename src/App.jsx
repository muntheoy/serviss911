import Button from './components/Button';
import { FiHeart, FiArrowRight, FiShoppingCart, FiStar, FiSettings, FiUser } from 'react-icons/fi';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px', 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px'
    }}>
      <h1>Демонстрация кнопок</h1>
      
      <h2>Основные варианты</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {/* Закрашенная кнопка */}
        <Button variant="filled">Купить</Button>
        
        {/* С обводкой */}
        <Button variant="outlined">Подробнее</Button>
        
        {/* Текстовая кнопка */}
        <Button variant="text">Отмена</Button>
      </div>

      <h2>Кнопки с иконками</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {/* С обводкой + иконка слева */}
        <Button variant="outlined" icon={<FiShoppingCart />}>
          Корзина
        </Button>
        
        {/* Текстовая кнопка + иконка справа */}
        <Button variant="text" icon={<FiArrowRight />} iconPosition="right">
          Подробнее
        </Button>
        
        {/* Закрашенная с иконкой слева */}
        <Button variant="filled" icon={<FiStar />}>
          В избранное
        </Button>
      </div>

      <h2>Кнопки-иконки</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {/* Просто иконка (круглая) */}
        <Button 
          variant="icon" 
          icon={<FiHeart />} 
          ariaLabel="Добавить в избранное"
        />
        
        <Button 
          variant="icon" 
          icon={<FiSettings />} 
          ariaLabel="Настройки"
        />
        
        <Button 
          variant="icon" 
          icon={<FiUser />} 
          ariaLabel="Профиль"
        />
      </div>

      <h2>Разные состояния</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {/* Disabled кнопки */}
        <Button variant="filled" disabled>Неактивная</Button>
        <Button variant="outlined" disabled>Неактивная</Button>
        <Button variant="text" disabled>Неактивная</Button>
        <Button 
          variant="icon" 
          icon={<FiHeart />} 
          ariaLabel="Неактивная"
          disabled
        />
      </div>

      <h2>Цветовые варианты</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <Button variant="filled" color="primary">Основная</Button>
        <Button variant="filled" color="secondary">Вторичная</Button>
        <Button variant="filled" color="success">Успех</Button>
        <Button variant="filled" color="danger">Ошибка</Button>
      </div>
    </div>
  );
}

export default App;