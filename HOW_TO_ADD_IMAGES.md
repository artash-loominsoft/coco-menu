# راهنمای اضافه کردن عکس به پروژه

## 📁 محل قرارگیری عکس‌ها

عکس‌های خود را در پوشه **`public`** قرار دهید.

```
coco/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   ├── menu/
│   │   │   ├── kebab-1.jpg
│   │   │   ├── kebab-2.jpg
│   │   │   └── ...
│   │   └── ...
│   └── ...
```

## 🖼️ ساختار پیشنهادی پوشه public

```
public/
├── images/
│   ├── logo.png              # لوگوی رستوران
│   ├── hero-bg.jpg           # عکس پس‌زمینه صفحه اصلی
│   ├── menu/                 # عکس‌های منو
│   │   ├── kebabs/
│   │   ├── rice/
│   │   ├── stews/
│   │   └── fastfood/
│   ├── about/                # عکس‌های صفحه درباره ما
│   └── gallery/               # گالری عکس‌ها
├── icons/
│   └── favicon.ico
└── ...
```

## 💻 نحوه استفاده از عکس‌ها در کد

### روش 1: استفاده با Next.js Image Component (توصیه می‌شود)

```tsx
import Image from 'next/image'

// عکس از پوشه public
<Image
  src="/images/logo.png"
  alt="COCO Logo"
  width={200}
  height={200}
/>

// یا با fill برای container
<div className="relative w-full h-64">
  <Image
    src="/images/hero-bg.jpg"
    alt="Hero background"
    fill
    className="object-cover"
  />
</div>
```

### روش 2: استفاده مستقیم در HTML

```tsx
<img src="/images/logo.png" alt="COCO Logo" />
```

## 📝 مثال: اضافه کردن عکس به منو

### 1. عکس را در پوشه public قرار دهید:
```
public/images/menu/kebab-vaziri.jpg
```

### 2. در فایل `lib/menu.ts` آدرس را تغییر دهید:

```typescript
{
  id: '1',
  name: { en: 'Chelo Kebab Vaziri', fa: 'چلو کباب وزیری', hy: '...' },
  description: { ... },
  price: 4500,
  category: 'kebab',
  image: '/images/menu/kebab-vaziri.jpg', // آدرس عکس محلی
  // یا از URL خارجی:
  // image: 'https://images.unsplash.com/...',
}
```

### 3. در کامپوننت استفاده کنید:

```tsx
<Image
  src={item.image}
  alt={item.name[language]}
  fill
  className="object-cover"
/>
```

## 🌐 استفاده از عکس‌های خارجی (URL)

اگر می‌خواهید از عکس‌های خارجی استفاده کنید، باید دامنه را در `next.config.js` اضافه کنید:

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-domain.com',
      },
    ],
  },
}
```

## 📦 بهینه‌سازی عکس‌ها

برای عملکرد بهتر:
- فرمت‌های پیشنهادی: WebP, AVIF
- اندازه مناسب: عکس‌های بزرگ را قبل از آپلود بهینه کنید
- استفاده از Next.js Image Component برای بهینه‌سازی خودکار

## 🔧 مثال کامل: اضافه کردن لوگو

### 1. لوگو را در `public/images/logo.png` قرار دهید

### 2. در کامپوننت Logo استفاده کنید:

```tsx
import Image from 'next/image'

<Image
  src="/images/logo.png"
  alt="COCO Restaurant Logo"
  width={120}
  height={120}
  priority // برای عکس‌های مهم
/>
```

## 📍 نکات مهم

1. **مسیر عکس‌ها**: همیشه با `/` شروع می‌شوند (مثل `/images/logo.png`)
2. **نام فایل**: از کاراکترهای خاص و فاصله خودداری کنید
3. **اندازه فایل**: سعی کنید عکس‌ها را قبل از آپلود فشرده کنید
4. **فرمت**: PNG برای لوگو، JPG برای عکس‌ها، WebP برای بهینه‌سازی

## 🎨 مثال: ساختار کامل

```
public/
├── images/
│   ├── logo.png
│   ├── hero/
│   │   └── hero-bg.jpg
│   ├── menu/
│   │   ├── chelo-kebab-vaziri.jpg
│   │   ├── saffron-koobideh.jpg
│   │   └── ...
│   └── about/
│       └── restaurant-interior.jpg
└── favicon.ico
```

