# AgriKalcer - Agricultural Management System

Sistem manajemen pertanian modern yang membantu petani mengelola lahan, tanaman, panen, dan keuangan dengan mudah.

## 🌾 Fitur Utama

### 📊 Dashboard Komprehensif
- Statistik real-time lahan, tanaman, dan panen
- Grafik produktivitas dan keuangan
- Notifikasi sistem otomatis
- Monitoring kesehatan tanaman

### 🗺️ Sistem Peta Interaktif
- **Geocoding Otomatis**: Input alamat → auto koordinat GPS
- **Leaflet Maps**: Peta gratis dan reliable
- **Marker Management**: Tambah/edit lokasi lahan
- **Multiple Views**: Grid view dan map view

### 🌱 Manajemen Tanaman
- Tracking pertumbuhan tanaman
- Perkiraan tanggal panen
- Jenis tanah dan lokasi
- Status kesehatan real-time

### 💰 Keuangan Pertanian
- Pencatatan pendapatan panen
- Analisis profitabilitas
- Export data ke Excel/CSV
- Grafik tren keuangan

### 🔔 Sistem Notifikasi
- Reminder perawatan tanaman
- Notifikasi panen
- Alert kesehatan tanaman
- Maintenance schedule

## 🏗️ Teknologi

### Frontend (AgriFront)
- **React 18** dengan Hooks
- **Vite** untuk build tool
- **TailwindCSS** untuk styling
- **Leaflet** untuk peta interaktif
- **Recharts** untuk grafik
- **Lucide React** untuk icons

### Backend (AgriBack)
- **Node.js** dengan Express
- **SQLite** untuk database
- **JWT** untuk authentication
- **CORS** untuk API security
- **Pagination** untuk performance

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm atau yarn

### Installation

1. **Clone Repository**
```bash
git clone https://github.com/Frito-Radestya/AgriKalcer.git
cd AgriKalcer
```

2. **Install Backend Dependencies**
```bash
cd AgriBack
npm install
```

3. **Setup Database**
```bash
# Database akan otomatis dibuat saat pertama kali running
npm start
```

4. **Install Frontend Dependencies**
```bash
cd ../AgriFront
npm install
```

5. **Start Development Servers**
```bash
# Backend (terminal 1)
cd AgriBack
npm start

# Frontend (terminal 2)  
cd AgriFront
npm run dev
```

6. **Access Application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 📱 Screenshots

### Dashboard
- Overview statistik pertanian
- Grafik produktivitas real-time
- Quick actions untuk common tasks

### Peta Interaktif
- Input alamat → auto geocoding
- Drag & drop marker untuk adjustment
- Multiple markers untuk semua lahan

### Analytics
- Financial trends analysis
- Harvest productivity charts
- Plant status distribution

## 🔧 Configuration

### Environment Variables
```bash
# Backend (.env)
PORT=3000
JWT_SECRET=your-secret-key
DB_PATH=./database.sqlite

# Frontend (.env)
VITE_API_URL=http://localhost:3000
```

### Database Schema
- **users**: Authentication & user management
- **lands**: Data lahan & lokasi
- **plants**: Data tanaman & tracking
- **harvests**: Data panen & hasil
- **finances**: Data keuangan & transaksi
- **notifications**: Sistem notifikasi

## 🌍 Geocoding System

### Cara Kerja
1. **Input Alamat**: User ketik alamat lengkap
2. **Auto Geocoding**: System cari koordinat GPS
3. **Map Display**: Peta menunjukkan lokasi
4. **Manual Adjustment**: User bisa seret marker

### API Geocoding
- **Nominatim (OpenStreetMap)**: Gratis & reliable
- **Debounce 1.5s**: Tunggu user selesai mengetik
- **Fallback**: Manual input jika geocoding gagal

## 📊 Data Export

### Format Support
- **Excel (.xlsx)**: Financial reports
- **CSV (.csv)**: Data analysis
- **PDF**: Print-friendly reports

### Export Features
- Date range filtering
- Multiple data types
- Custom formatting
- Batch export

## 🔐 Authentication

### User Roles
- **Admin**: Full access
- **Farmer**: Limited access
- **Viewer**: Read-only

### Security Features
- JWT token authentication
- Password hashing
- CORS protection
- Input validation

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Upload dist/ folder
```

### Backend (Heroku/Railway)
```bash
npm run start
# Set environment variables
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- **Leaflet**: Open-source maps
- **OpenStreetMap**: Free map tiles
- **Nominatim**: Geocoding service
- **React**: Frontend framework
- **Express**: Backend framework

## 📞 Support

Hubungi saya di:
- GitHub: @Frito-Radestya
- Email: frito.radestya@example.com

---

**AgriKalcer** - Solusi pertanian digital untuk masa depan pertanian Indonesia 🌾
