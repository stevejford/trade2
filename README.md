# TrustTrades - Professional Tradesperson Directory

A modern, full-featured platform connecting homeowners with trusted tradespeople across Australia.

## Core Features

### Authentication & User Management
- ✅ Email and password authentication
- ✅ Google sign-in integration
- ✅ Dual account support (Homeowner/Tradesperson)
- ✅ Password reset functionality
- ✅ Role-based authorization
- ✅ Protected routes and middleware

### User Interface
- ✅ Responsive layout with mobile-first design
- ✅ Modern UI using shadcn/ui components
- ✅ Dark mode support
- ✅ SEO optimization with metadata
- ✅ Loading states and error boundaries
- ✅ Toast notifications

### Homepage
- ✅ Hero section with search
- ✅ User type selection (Homeowner/Tradesperson)
- ✅ Popular areas showcase
- ✅ Featured tradespeople section
- ✅ Latest articles section
- ✅ Benefits overview
- ✅ How it works section

### Area Coverage
- ✅ All Australian states and territories
- ✅ Location-based search
- ✅ Area-specific landing pages
- ✅ Professional count by region

### Dashboard Features
- ✅ Homeowner dashboard
- ✅ Tradesperson dashboard
- ✅ Role-specific navigation
- ✅ Quick action cards

## Technology Stack

- **Frontend**: Next.js 13 with App Router
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **State Management**: React Context

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/trusttrades.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                  # Next.js 13 app directory
│   ├── (auth)/          # Authentication routes
│   ├── homeowner/       # Homeowner dashboard
│   ├── tradesperson/    # Tradesperson dashboard
│   └── layout.tsx       # Root layout
├── components/          # Reusable components
│   ├── auth/           # Authentication components
│   ├── home/           # Homepage components
│   └── ui/             # UI components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions and types
└── public/            # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details