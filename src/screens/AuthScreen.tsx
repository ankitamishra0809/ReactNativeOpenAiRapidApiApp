// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

// import { AuthForm } from '../components/AuthForm';
// import { BenefitList } from '../components/BenefitList';
// import { appStyles as styles } from '../styles/appStyles';
// import { AuthMode } from '../types/auth';

// export function AuthScreen() {
//   const [mode, setMode] = useState<AuthMode>('login');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [sessionName, setSessionName] = useState('');

//   const resetForm = () => {
//     setName('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//   };

//   const switchMode = (nextMode: AuthMode) => {
//     setMode(nextMode);
//     setMessage('');
//   };

//   const handleSubmit = () => {
//     const trimmedName = name.trim();
//     const trimmedEmail = email.trim().toLowerCase();

//     if (!trimmedEmail || !password) {
//       setMessage('Email and password are required.');
//       return;
//     }

//     if (mode === 'register') {
//       if (!trimmedName) {
//         setMessage('Please enter your full name to create an account.');
//         return;
//       }

//       if (password.length < 6) {
//         setMessage('Use a password with at least 6 characters.');
//         return;
//       }

//       if (password !== confirmPassword) {
//         setMessage('Passwords do not match yet.');
//         return;
//       }

//       setSessionName(trimmedName);
//       setMessage('Account created successfully.');
//       resetForm();
//       return;
//     }

//     setSessionName(trimmedEmail.split('@')[0] || 'there');
//     setMessage('Signed in successfully.');
//     resetForm();
//   };

//   const handleLogout = () => {
//     setSessionName('');
//     setMessage('');
//     setMode('login');
//   };

//   if (sessionName) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <StatusBar style="light" />
//         <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
//           <View style={styles.hero}>
//             <Text style={styles.eyebrow}>Welcome back</Text>
//             <Text style={styles.heroTitle}>Hi, {sessionName}.</Text>
//             <Text style={styles.heroText}>
//               Your Expo app now has working login and registration behavior on the client side.
//               This is a clean base for connecting Firebase, Supabase, or your own API next.
//             </Text>

//             <Pressable style={[styles.button, styles.primaryButton]} onPress={handleLogout}>
//               <Text style={styles.primaryButtonText}>Sign Out</Text>
//             </Pressable>
//           </View>

//           <BenefitList
//             title="What is ready now"
//             subtitle="The auth UI is live, validation is wired in, and the form state is easy to extend."
//           />
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar style="light" />
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         style={styles.flex}
//       >
//         <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
//           <View style={styles.hero}>
//             <Text style={styles.eyebrow}>Expo Auth Starter</Text>
//             <Text style={styles.heroTitle}>Login and register from one clean mobile screen.</Text>
//             <Text style={styles.heroText}>
//               This starter keeps the flow simple now and leaves us a neat place to connect real
//               authentication later.
//             </Text>
//           </View>

//           <AuthForm
//             mode={mode}
//             name={name}
//             email={email}
//             password={password}
//             confirmPassword={confirmPassword}
//             message={message}
//             onModeChange={switchMode}
//             onNameChange={setName}
//             onEmailChange={setEmail}
//             onPasswordChange={setPassword}
//             onConfirmPasswordChange={setConfirmPassword}
//             onSubmit={handleSubmit}
//           />

//           <BenefitList
//             title="Included in this screen"
//             subtitle="Enough structure to demo auth now, with room to plug in a real user service next."
//           />
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }
