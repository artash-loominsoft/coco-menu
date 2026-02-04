# Yandex Delivery Integration Guide

This document explains how to integrate the Yandex Delivery service with the COCO restaurant website.

## Overview

The website includes a complete Yandex Delivery integration structure that is ready to be connected to the Yandex Delivery API. The integration includes:

- UI component for displaying delivery information
- API route structure for handling orders
- Delivery zone checking
- Estimated delivery time display

## Components

### 1. YandexDelivery Component
**Location**: `components/sections/YandexDelivery.tsx`

This component displays:
- Delivery zone information
- Estimated delivery time
- Order via Yandex button
- Multi-language support (EN/FA/HY)

### 2. API Route
**Location**: `app/api/yandex-delivery/route.ts`

Handles:
- POST: Create new delivery order
- GET: Check delivery zone and availability

## Setup Instructions

### Step 1: Get Yandex Delivery Credentials

1. Register as a partner at [Yandex Delivery Partner Portal](https://yandex.ru/dev/delivery/)
2. Get your API credentials:
   - API Key
   - Restaurant ID
   - Secret Key

### Step 2: Set Environment Variables

Create `.env.local` file in the project root:

```env
YANDEX_DELIVERY_API_KEY=your_api_key_here
YANDEX_DELIVERY_RESTAURANT_ID=your_restaurant_id_here
YANDEX_DELIVERY_SECRET=your_secret_key_here
```

### Step 3: Install Yandex Delivery SDK (if available)

```bash
npm install @yandex/delivery-sdk
```

Or use REST API directly with `fetch` or `axios`.

### Step 4: Update API Route

Edit `app/api/yandex-delivery/route.ts`:

```typescript
import { YandexDeliveryClient } from '@yandex/delivery-sdk'

const client = new YandexDeliveryClient({
  apiKey: process.env.YANDEX_DELIVERY_API_KEY!,
  restaurantId: process.env.YANDEX_DELIVERY_RESTAURANT_ID!,
  secret: process.env.YANDEX_DELIVERY_SECRET!,
})

// In POST handler:
const order = await client.createOrder({
  items: items.map(item => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
  })),
  delivery: {
    address: address,
    coordinates: await geocodeAddress(address),
  },
  customer: {
    name: name,
    phone: phone,
  },
})
```

### Step 5: Update Component

Update `components/sections/YandexDelivery.tsx` to call the API:

```typescript
const handleYandexOrder = async () => {
  try {
    const response = await fetch('/api/yandex-delivery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: cartItems,
        address: userAddress,
        phone: userPhone,
        name: userName,
      }),
    })
    
    const order = await response.json()
    // Handle success
  } catch (error) {
    // Handle error
  }
}
```

## API Endpoints

### POST `/api/yandex-delivery`

Creates a new delivery order.

**Request Body**:
```json
{
  "items": [
    {
      "id": "1",
      "name": "Chelo Kebab Vaziri",
      "quantity": 2,
      "price": 4500
    }
  ],
  "address": "Baghramyan 77, Yerevan, Armenia",
  "phone": "098595438",
  "name": "John Doe"
}
```

**Response**:
```json
{
  "orderId": "YD-1234567890",
  "estimatedDeliveryTime": 35,
  "status": "pending"
}
```

### GET `/api/yandex-delivery?address=...`

Checks if an address is in the delivery zone.

**Response**:
```json
{
  "inZone": true,
  "estimatedTime": 30,
  "deliveryFee": 500,
  "available": true
}
```

## Testing

1. Use the mock responses for development
2. Test with real addresses in Yerevan
3. Verify order creation flow
4. Test error handling

## Production Checklist

- [ ] Set up Yandex Delivery partner account
- [ ] Get API credentials
- [ ] Set environment variables
- [ ] Install SDK or configure REST API
- [ ] Update API route with real implementation
- [ ] Test order creation
- [ ] Test delivery zone checking
- [ ] Set up error monitoring
- [ ] Configure webhook for order status updates (if needed)

## Support

For Yandex Delivery API documentation:
- https://yandex.ru/dev/delivery/doc/
- Contact Yandex Delivery support for partner integration

