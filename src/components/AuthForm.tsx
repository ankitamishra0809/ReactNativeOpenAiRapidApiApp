// import { Pressable, Text, TextInput, View } from 'react-native';

// import { appStyles as styles } from '../styles/appStyles';
// import { AuthMode } from '../types/auth';

// type AuthFormProps = {
//   mode: AuthMode;
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   message: string;
//   onModeChange: (mode: AuthMode) => void;
//   onNameChange: (value: string) => void;
//   onEmailChange: (value: string) => void;
//   onPasswordChange: (value: string) => void;
//   onConfirmPasswordChange: (value: string) => void;
//   onSubmit: () => void;
// };

// export function AuthForm({
//   mode,
//   name,
//   email,
//   password,
//   confirmPassword,
//   message,
//   onModeChange,
//   onNameChange,
//   onEmailChange,
//   onPasswordChange,
//   onConfirmPasswordChange,
//   onSubmit,
// }: AuthFormProps) {
//   return (
//     <View style={styles.formCard}>
//       <View style={styles.tabRow}>
//         <Pressable
//           style={[styles.tabButton, mode === 'login' && styles.tabButtonActive]}
//           onPress={() => onModeChange('login')}
//         >
//           <Text style={[styles.tabText, mode === 'login' && styles.tabTextActive]}>Login</Text>
//         </Pressable>
//         <Pressable
//           style={[styles.tabButton, mode === 'register' && styles.tabButtonActive]}
//           onPress={() => onModeChange('register')}
//         >
//           <Text style={[styles.tabText, mode === 'register' && styles.tabTextActive]}>
//             Register
//           </Text>
//         </Pressable>
//       </View>

//       <Text style={styles.formTitle}>
//         {mode === 'login' ? 'Sign in to continue' : 'Create your account'}
//       </Text>

//       {mode === 'register' ? (
//         <View style={styles.fieldGroup}>
//           <Text style={styles.label}>Full name</Text>
//           <TextInput
//             placeholder="Ankita Sharma"
//             placeholderTextColor="#6d7a8a"
//             style={styles.input}
//             value={name}
//             onChangeText={onNameChange}
//           />
//         </View>
//       ) : null}

//       <View style={styles.fieldGroup}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           autoCapitalize="none"
//           keyboardType="email-address"
//           placeholder="you@example.com"
//           placeholderTextColor="#6d7a8a"
//           style={styles.input}
//           value={email}
//           onChangeText={onEmailChange}
//         />
//       </View>

//       <View style={styles.fieldGroup}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           secureTextEntry
//           placeholder="Enter your password"
//           placeholderTextColor="#6d7a8a"
//           style={styles.input}
//           value={password}
//           onChangeText={onPasswordChange}
//         />
//       </View>

//       {mode === 'register' ? (
//         <View style={styles.fieldGroup}>
//           <Text style={styles.label}>Confirm password</Text>
//           <TextInput
//             secureTextEntry
//             placeholder="Confirm your password"
//             placeholderTextColor="#6d7a8a"
//             style={styles.input}
//             value={confirmPassword}
//             onChangeText={onConfirmPasswordChange}
//           />
//         </View>
//       ) : null}

//       {message ? <Text style={styles.message}>{message}</Text> : null}

//       <Pressable style={[styles.button, styles.primaryButton, styles.submitButton]} onPress={onSubmit}>
//         <Text style={styles.primaryButtonText}>{mode === 'login' ? 'Login' : 'Create Account'}</Text>
//       </Pressable>
//     </View>
//   );
// }
