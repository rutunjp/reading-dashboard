import { initializeApp } from 'firebase/app'    
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyBwoDD-ZZG6EZVk3QVTtRh4ewMvYIGBLdg',
  authDomain: 'bookrack-40f2a.firebaseapp.com',
  projectId: 'bookrack-40f2a',
  storageBucket: 'bookrack-40f2a.appspot.com',
  messagingSenderId: '775762010157',
  appId: '1:775762010157:web:a184c6ccea2c6e649058a4',
  measurementId: 'G-8LQYV0BJR7',
}
 
const app = initializeApp(firebaseConfig) 
export const db = getFirestore(app)