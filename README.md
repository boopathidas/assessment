# Assessment App - Professional Learning & Testing Platform

A comprehensive React Native/Expo application for educational institutions to manage courses, conduct assessments, and track student performance.

## 🚀 Features

### Student Features
- **User Registration & Login**: Secure student account creation and authentication
- **Course Enrollment**: Browse and enroll in available courses
- **Test Taking**: Take assessments with multiple-choice questions
- **Results & Certificates**: View detailed test results and download certificates
- **Profile Management**: Update personal information and preferences

### Admin Features
- **Student Management**: Add, edit, and manage student accounts
- **Course Management**: Create and manage courses with detailed information
- **Test Creation**: Build comprehensive assessments with custom questions
- **Question Management**: Add questions manually or bulk upload via CSV
- **Test Monitoring**: Real-time monitoring of ongoing tests
- **Analytics Dashboard**: Comprehensive performance metrics and reports
- **Result Management**: Export results to Excel/PDF formats

## 🛠️ Technology Stack

- **Frontend**: React Native with Expo
- **Navigation**: React Navigation (Stack & Tab Navigation)
- **UI Components**: Custom components with React Native StyleSheet
- **Icons**: Expo Vector Icons (Ionicons)
- **Gradients**: Expo Linear Gradient
- **Storage**: AsyncStorage for local data persistence
- **State Management**: React Context API

## 📱 Screenshots

The app includes the following main screens:

### Authentication Screens
- Welcome Screen
- Student Login/Registration
- Admin Login

### Student Screens
- Dashboard with statistics and quick actions
- Course browsing and enrollment
- Test taking interface
- Results and certificates
- Profile management

### Admin Screens
- Admin dashboard with system overview
- Student management interface
- Course creation and management
- Test creation and question management
- Real-time test monitoring
- Analytics and reporting

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assessment-app-expo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app on your phone

## 📱 Running the App

### Development Mode
```bash
npm start
```

### Android
```bash
npm run android
```

### iOS (macOS only)
```bash
npm run ios
```

### Web
```bash
npm run web
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
EXPO_PUBLIC_API_URL=your_api_url_here
EXPO_PUBLIC_APP_NAME=Assessment App
```

### App Configuration
Edit `app.json` to customize:
- App name and version
- Bundle identifier
- Permissions
- Platform-specific settings

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
│   ├── auth/          # Authentication screens
│   ├── student/       # Student-specific screens
│   └── admin/         # Admin-specific screens
├── navigation/         # Navigation configuration
├── utils/             # Utility functions and contexts
└── data/              # Mock data and constants
```

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Responsive Layout**: Adapts to different screen sizes
- **Intuitive Navigation**: Tab-based navigation for easy access
- **Visual Feedback**: Loading states, success/error messages
- **Accessibility**: Proper contrast ratios and touch targets

## 🔐 Security Features

- **Authentication**: Secure login/logout system
- **Role-based Access**: Separate interfaces for students and admins
- **Data Validation**: Form validation and error handling
- **Session Management**: Persistent login sessions

## 📊 Data Management

- **Local Storage**: AsyncStorage for offline functionality
- **Mock Data**: Sample data for demonstration purposes
- **State Management**: React Context for global state
- **Data Persistence**: User preferences and session data

## 🚀 Deployment

### Building for Production

1. **Configure app.json** with production settings
2. **Build the app**:
   ```bash
   expo build:android  # For Android
   expo build:ios      # For iOS
   ```

### Publishing Updates
```bash
expo publish
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Future Enhancements

- **Real-time Notifications**: Push notifications for test reminders
- **Video Integration**: Support for video-based questions
- **Advanced Analytics**: Machine learning-based performance insights
- **Multi-language Support**: Internationalization features
- **Offline Mode**: Enhanced offline functionality
- **API Integration**: Backend service integration
- **Cloud Storage**: File upload and management
- **Social Features**: Student collaboration tools

## 📱 Platform Support

- ✅ Android (API 21+)
- ✅ iOS (iOS 11+)
- ✅ Web (Chrome, Firefox, Safari, Edge)

## 🎯 Target Audience

- **Educational Institutions**: Schools, colleges, universities
- **Corporate Training**: Employee skill assessment
- **Online Learning Platforms**: E-learning providers
- **Certification Bodies**: Professional certification programs

---

**Built with ❤️ using React Native & Expo**
# assessment
