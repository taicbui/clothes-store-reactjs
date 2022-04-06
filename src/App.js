import CategoryItem from './components/category-item/category-item.component';

import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: "iPhone",
      imageUrl: 'https://images.pexels.com/photos/8066715/pexels-photo-8066715.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: "iPad",
      imageUrl: 'https://images.pexels.com/photos/3944392/pexels-photo-3944392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: "Mac",
      imageUrl: 'https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: "Apple Watch",
      imageUrl: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: "AirPods",
      imageUrl: 'https://images.pexels.com/photos/4812934/pexels-photo-4812934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      title: "Accessories",
      imageUrl: 'https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ]

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;