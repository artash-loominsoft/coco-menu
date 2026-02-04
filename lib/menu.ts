export interface MenuItem {
  id: string
  name: {
    en: string
    fa: string
    hy: string
  }
  description: {
    en: string
    fa: string
    hy: string
  }
  price: number
  category: 'kebab' | 'rice' | 'stew' | 'fastfood' | 'special'
  image: string
  isNew?: boolean
}

export const menuItems: MenuItem[] = [
  // Kebabs
  {
    id: '1',
    name: { en: 'Chelo Kebab Vaziri', fa: 'چلو کباب وزیری', hy: 'Չելո քաբաբ Վազիրի' },
    description: { en: 'Premium mixed kebab with rice', fa: 'کباب مخلوط ممتاز با برنج', hy: 'Պրեմիում խառը քաբաբ բրնձով' },
    price: 4500,
    category: 'kebab',
    image: '/images/vaziri.jpg',
  },
  {
    id: '2',
    name: { en: 'Saffron Koobideh Kebab', fa: 'کباب کوبیده زعفرانی', hy: 'Զաֆրանով Կուբիդե քաբաբ' },
    description: { en: 'Traditional minced meat kebab with saffron', fa: 'کباب کوبیده سنتی با زعفران', hy: 'Ավանդական մանրացված մսով քաբաբ զաֆրանով' },
    price: 2500,
    category: 'kebab',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    name: { en: 'Saffron Joojeh Kebab', fa: 'کباب جوجه زعفرانی', hy: 'Զաֆրանով Ջուջե քաբաբ' },
    description: { en: 'Grilled chicken kebab with saffron', fa: 'کباب جوجه کبابی با زعفران', hy: 'Խորոված հավի քաբաբ զաֆրանով' },
    price: 2500,
    category: 'kebab',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop',
  },
  {
    id: '4',
    name: { en: 'Negini Kebab', fa: 'کباب نگینی', hy: 'Նեգինի քաբաբ' },
    description: { en: 'Cubed meat kebab', fa: 'کباب نگینی', hy: 'Խորանարդաձև մսով քաբաբ' },
    price: 3000,
    category: 'kebab',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
  },
  {
    id: '12',
    name: { en: 'Chicken Koobideh', fa: 'کباب کوبیده مرغ', hy: 'Հավի Կուբիդե' },
    description: { en: 'Minced chicken kebab', fa: 'کباب کوبیده مرغ', hy: 'Մանրացված հավի քաբաբ' },
    price: 2000,
    category: 'kebab',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop',
    isNew: true,
  },
  {
    id: '13',
    name: { en: 'Pan Kebab with Rice', fa: 'کباب تابه‌ای با برنج', hy: 'Տապակած քաբաբ բրնձով' },
    description: { en: 'Pan-fried kebab with rice', fa: 'کباب تابه‌ای با برنج', hy: 'Տապակած քաբաբ բրնձով' },
    price: 2500,
    category: 'kebab',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
    isNew: true,
  },
  // Rice Dishes
  {
    id: '5',
    name: { en: 'Zereshk Polo with Chicken', fa: 'زرشک پلو با مرغ', hy: 'Զերեշկ պոլո հավով' },
    description: { en: 'Barberry rice with chicken', fa: 'برنج زرشک با مرغ', hy: 'Բրինձ զերեշկով հավով' },
    price: 2500,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
  },
  {
    id: '6',
    name: { en: 'Beef Stew with Rice', fa: 'خورش گوشت با برنج', hy: 'Տավարի խաշած բրնձով' },
    description: { en: 'Traditional beef stew served with rice', fa: 'خورش سنتی گوشت با برنج', hy: 'Ավանդական տավարի խաշած բրնձով' },
    price: 3000,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  },
  {
    id: '7',
    name: { en: 'Dill Rice with Meat', fa: 'شوید پلو با گوشت', hy: 'Շումբուլով բրինձ մսով' },
    description: { en: 'Dill rice with tender meat', fa: 'برنج شوید با گوشت نرم', hy: 'Շումբուլով բրինձ նուրբ մսով' },
    price: 3000,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop',
  },
  {
    id: '11',
    name: { en: 'Dill Rice with Fish', fa: 'شوید پلو با ماهی', hy: 'Շումբուլով բրինձ ձկով' },
    description: { en: 'Dill rice with grilled fish', fa: 'برنج شوید با ماهی کبابی', hy: 'Շումբուլով բրինձ խորոված ձկով' },
    price: 2500,
    category: 'rice',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&h=600&fit=crop',
  },
  // Stews
  {
    id: '8',
    name: { en: 'Ghormeh Sabzi', fa: 'قورمه سبزی', hy: 'Ղորմե Սաբզի' },
    description: { en: 'Traditional herb stew with beans', fa: 'خورش سنتی سبزی با لوبیا', hy: 'Ավանդական խոտաբույսերի խաշած լոբիով' },
    price: 2000,
    category: 'stew',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  },
  {
    id: '9',
    name: { en: 'Gheymeh Stew', fa: 'قیمه', hy: 'Ղեյմե' },
    description: { en: 'Split pea stew with meat', fa: 'خورش لپه با گوشت', hy: 'Բաժանված ոլոռով խաշած մսով' },
    price: 2000,
    category: 'stew',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop',
  },
  {
    id: '10',
    name: { en: 'Cutlet with Rice', fa: 'کتلت با برنج', hy: 'Քաթլետ բրնձով' },
    description: { en: 'Persian cutlet with rice', fa: 'کتلت ایرانی با برنج', hy: 'Պարսկական քաթլետ բրնձով' },
    price: 2000,
    category: 'stew',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800&h=600&fit=crop',
  },
  // Fast Food
  {
    id: '14',
    name: { en: 'Pizza', fa: 'پیتزا', hy: 'Պիցցա' },
    description: { en: 'Delicious pizza with fresh ingredients', fa: 'پیتزای خوشمزه با مواد تازه', hy: 'Համեղ պիցցա թարմ բաղադրիչներով' },
    price: 3000,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop',
  },
  {
    id: '15',
    name: { en: 'Burger', fa: 'برگر', hy: 'Բուրգեր' },
    description: { en: 'Juicy burger with special sauce', fa: 'برگر آبدار با سس ویژه', hy: 'Հյութեղ բուրգեր հատուկ սոուսով' },
    price: 2500,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
  },
  {
    id: '16',
    name: { en: 'Hot Dog', fa: 'هات داگ', hy: 'Հոթ դոգ' },
    description: { en: 'Classic hot dog', fa: 'هات داگ کلاسیک', hy: 'Դասական հոթ դոգ' },
    price: 1500,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af0a6?w=800&h=600&fit=crop',
  },
  {
    id: '17',
    name: { en: 'Salad', fa: 'سالاد', hy: 'Աղցան' },
    description: { en: 'Fresh mixed salad', fa: 'سالاد مخلوط تازه', hy: 'Թարմ խառը աղցան' },
    price: 1500,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
  },
  {
    id: '18',
    name: { en: 'French Fries', fa: 'سیب زمینی سرخ شده', hy: 'Ֆրի' },
    description: { en: 'Crispy golden fries', fa: 'سیب زمینی سرخ شده طلایی ترد', hy: 'Պարկուճ ոսկեգույն ֆրի' },
    price: 1200,
    category: 'fastfood',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop',
  },
]

export const categories = {
  kebab: { en: 'Kebabs', fa: 'کباب‌ها', hy: 'Քաբաբներ' },
  rice: { en: 'Rice Dishes', fa: 'غذاهای برنجی', hy: 'Բրնձով ուտեստներ' },
  stew: { en: 'Stews', fa: 'خورش‌ها', hy: 'Խաշածներ' },
  fastfood: { en: 'Fast Food', fa: 'فست فود', hy: 'Ֆաստ ֆուդ' },
  special: { en: 'Specials', fa: 'ویژه', hy: 'Հատուկ' },
}
