import { Injectable } from '@angular/core';

export interface Dishes {
  title: string;
  subtitle: string;
  color: string;
  date: string;
  id: number;
  category: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dishess: Dishes[] = [
    {
      title: 'Humus',
      subtitle: 'Humus(230cal), Falafel Wrap(450cal), Baba Ghannouj (413cal), Freshly Cauliflower-Shell Bolognese(804cal)',
      date: '9:32 AM',
      color: 'success',
      id: 0,
      category: 'Vegetarian',
      img: 'https://media.istockphoto.com/photos/homemade-chickpea-hummus-bowl-with-pita-chips-and-paprika-picture-id955998652?k=20&m=955998652&s=612x612&w=0&h=LLYPxaR6YiAmZHaT3-7T1J1FPRdfA6hEvmkT-wjklaQ='
    },
    {
      title: 'Humus',
      subtitle: 'Humus(230cal), Falafel Wrap(450cal), Baba Ghannouj (413cal), Vegan Lasagna(804cal)',
      date: '6:12 AM',
      color: 'warning',
      id: 1,
      category: 'Vegan',
      img: 'https://da28rauy2a860.cloudfront.net/wellbeing/wp-content/uploads/2020/12/03172949/Felafel-Wrap.png'
    },
    {
      title: 'Humus',
      subtitle: 'Humus(230cal), Falafel Wrap(450cal), Baba Ghannouj (413cal), Sppageti with meat sauce( 804cal)',
      date: '4:55 AM',
      color: 'tertiary',
      id: 2,
      category: 'Halal',
      img: 'https://www.cookingclassy.com/wp-content/uploads/2012/11/spaghetti+with+meat+sauce111.jpg'
    },
    {
      title: 'Humus',
      subtitle: 'Humus(230cal), Falafel Wrap(450cal), Baba Ghannouj (413cal), Cheesy Spaghetti Squash with Pesto, Mushrooms, and Parmesan(804cal)',
      date: 'Yesterday',
      color: 'dark',
      id: 3,
      category: 'Kosher',
      img: 'https://www.wellplated.com/wp-content/uploads/2015/10/Cheesy-Roasted-Spaghetti-Squash-with-Garlic-Mushrooms-and-Herbs.-Delicious-healthy-and-gluten-free-500x375.jpg'
    },
    {
      title: 'Fresh apple juice',
      subtitle: 'Fresh apple juice(120cal), Fresh orange juice(112cal), Lemonade(100cal), Ice tea lemon sweetened(89cal), Green tea(0cal), Caffe latte(130cal), Double double(212cal), Cafe Americano(15cal)',
      date: 'Yesterday',
      color: 'medium',
      id: 4,
      category: 'Drinks',
      img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2017%2F06%2Fapple-juice-as-hangover-cure-fwx.jpg'
    },
    {
      title: 'Humus',
      subtitle: 'Humus(230cal), Falafel Wrap(450cal), Baba Ghannouj (413cal), Freshly Cauliflower-Shell Bolognese(804cal), Vegan Lasagna(804cal), Cheesy Spaghetti Squash with Pesto, Mushrooms, and Parmesan(804cal), Spaghetti with meat sauce(804cal)',
      date: 'Yesterday',
      color: 'danger',
      id: 5,
      category: 'None',
      img: 'https://cdn.buttercms.com/AB7ud4YSE6nmOX0iGlgA'
    }
  ];

  constructor() { }

  public getDishess(): Dishes[] {
    return this.dishess;
  }

  public getDishesById(id: number): Dishes {
    return this.dishess[id];
  }
}
