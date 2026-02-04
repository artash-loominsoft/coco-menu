# COCO Restaurant Website

A modern, production-ready website for COCO, an Iranian restaurant located in Yerevan, Armenia.

## Features

- 🎨 Modern, premium UI/UX with harmonious color palette (soft red, green, blue tones)
- 📱 Fully responsive design (mobile-first, optimized for in-app mobile view)
- 🌐 **Multi-language support**: Persian (RTL), Armenian, and English
- 🔄 Easy language switching with dropdown menu (FA/HY/EN)
- 🌓 Dark & Light mode
- 🛒 Online ordering system with cart functionality
- 🚴 **Yandex Delivery integration** (ready for API connection)
- 💳 Payment gateway ready (Visa & MasterCard structure)
- ⚡ Fast performance and SEO-friendly
- 🎭 Smooth animations with Framer Motion
- 📍 Google Maps integration
- 🎯 Accessibility best practices

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + React + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── menu/              # Menu page
│   ├── order/             # Online order page
│   ├── payment/            # Payment page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Home page sections
│   ├── menu/              # Menu components
│   ├── order/             # Order components
│   ├── payment/            # Payment components
│   ├── about/             # About components
│   ├── contact/           # Contact components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── Logo.tsx           # Logo component
│   ├── LanguageSwitcher.tsx
│   └── ThemeToggle.tsx
├── contexts/              # React contexts
│   └── LanguageContext.tsx
├── lib/                   # Utilities and data
│   └── menu.ts            # Menu items data
├── store/                 # State management
│   └── cartStore.ts       # Shopping cart store
└── public/               # Static assets
```

## Pages

1. **Home** (`/`) - Hero section, introduction, featured dishes, **Yandex Delivery section**, why choose us
2. **Menu** (`/menu`) - Categorized menu with images and prices (all 3 languages)
3. **Order** (`/order`) - Shopping cart with quantity management (multi-language)
4. **Payment** (`/payment`) - Secure checkout UI with payment form
5. **About** (`/about`) - Restaurant story and values (all 3 languages)
6. **Contact** (`/contact`) - Contact information, Google Maps, and contact form

## Menu Items

The menu includes:
- **Kebabs**: Chelo Kebab Vaziri, Saffron Koobideh, Joojeh Kebab, etc.
- **Rice Dishes**: Zereshk Polo, Dill Rice with Meat/Fish, etc.
- **Stews**: Ghormeh Sabzi, Gheymeh, Cutlet
- **Fast Food**: Pizza, Burger, Hot Dog, Salad, French Fries

## Payment Integration

The payment page includes a mock payment form structure. For production, integrate with:
- Stripe
- PayPal
- Local Armenian payment processors (e.g., ArCa, IDram)

## Yandex Delivery Integration

The website includes a complete Yandex Delivery integration structure:

### Features:
- Delivery zone display
- Estimated delivery time (30-45 minutes)
- Order via Yandex button
- API route structure (`/api/yandex-delivery`)

### To Connect Yandex Delivery:

1. **Get API Credentials** from Yandex Delivery partner portal
2. **Set Environment Variables**:
   ```env
   YANDEX_DELIVERY_API_KEY=your_api_key
   YANDEX_DELIVERY_RESTAURANT_ID=your_restaurant_id
   YANDEX_DELIVERY_SECRET=your_secret
   ```

3. **Update API Route** (`app/api/yandex-delivery/route.ts`):
   - Uncomment and configure the Yandex Delivery SDK
   - Implement actual API calls
   - Handle order creation and status updates

4. **Documentation**: https://yandex.ru/dev/delivery/doc/

The component is ready at `components/sections/YandexDelivery.tsx` and can be easily connected to the real API.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `primary`: Red tones
- `secondary`: Green tones  
- `accent`: Blue tones

### Menu Items

Edit `lib/menu.ts` to add/modify menu items.

### Translations

Edit `contexts/LanguageContext.tsx` to add/modify translations. The site supports:
- **Persian (fa)** - RTL layout
- **Armenian (hy)** - LTR layout  
- **English (en)** - LTR layout

All menu items, pages, and UI elements are fully translated in all three languages.

## Deployment

The site is ready for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## Environment Variables

For production, you may want to add:
- Payment gateway API keys
- Analytics IDs
- Contact form API endpoint

## License

This project is created for COCO Restaurant.

## Contact

- **Address**: Baghramyan 77, Yerevan, Armenia
- **Phone**: 098595438
- **Instagram**: @mr.mrs.coco

