# Quick Start Guide

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Overview

This is a complete restaurant website for COCO, an Iranian restaurant in Yerevan, Armenia.

### Key Features Implemented:

✅ **Modern UI/UX** - Clean, elegant design with soft color palette  
✅ **Fully Responsive** - Mobile-first design, optimized for all devices  
✅ **RTL Support** - Full Persian/Farsi language support with RTL layout  
✅ **Dark/Light Mode** - Theme switching with persistent preference  
✅ **Language Switching** - English ↔ Persian with full translations  
✅ **Online Ordering** - Complete cart system with quantity management  
✅ **Payment Ready** - Secure checkout UI (ready for gateway integration)  
✅ **SEO Optimized** - Proper metadata and semantic HTML  
✅ **Smooth Animations** - Framer Motion animations throughout  
✅ **Performance** - Optimized images and code splitting  

### Pages:

- **Home** (`/`) - Hero, intro, featured dishes, why choose us
- **Menu** (`/menu`) - Full menu with categories and filtering
- **Order** (`/order`) - Shopping cart with quantity controls
- **Payment** (`/payment`) - Checkout form (mock payment)
- **About** (`/about`) - Restaurant story and values
- **Contact** (`/contact`) - Contact info, map, and form

### Tech Stack:

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Zustand (state management)
- Framer Motion (animations)
- React Icons

## Customization

### Adding Menu Items

Edit `lib/menu.ts`:

```typescript
{
  id: 'unique-id',
  name: { en: 'English Name', fa: 'نام فارسی' },
  description: { en: 'English description', fa: 'توضیحات فارسی' },
  price: 2500,
  category: 'kebab' | 'rice' | 'stew' | 'fastfood' | 'special',
  image: 'https://image-url.com/image.jpg',
  isNew: false, // optional
}
```

### Adding Translations

Edit `contexts/LanguageContext.tsx` and add keys to both `en` and `fa` objects.

### Changing Colors

Edit `tailwind.config.ts` - modify the `primary`, `secondary`, and `accent` color values.

## Production Deployment

### Build for Production:

```bash
npm run build
npm start
```

### Recommended Platforms:

- **Vercel** (best for Next.js) - Connect GitHub repo
- **Netlify** - Drag & drop or Git integration
- **Any Node.js host** - Upload built files

### Environment Variables (Optional):

Create `.env.local` for production:
- Payment gateway API keys
- Analytics IDs
- Contact form API endpoint

## Payment Integration

The payment page includes a mock form. To integrate real payments:

1. Choose a payment gateway (Stripe, PayPal, ArCa, IDram)
2. Add API keys to environment variables
3. Update `components/payment/PaymentSection.tsx` with real API calls
4. Handle success/error responses

## Support

For questions or issues, refer to the main README.md file.

