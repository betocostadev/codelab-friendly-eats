import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
} from 'firebase/auth'

import { auth } from '@/src/lib/firebase/clientApp'

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb)
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)
    console.log('User signed in', result.user)
    return result.user
  } catch (error) {
    console.error('Error signing in with Google', error)
  }
}

export async function signOut() {
  try {
    return await signOut(auth)
  } catch (error) {
    console.error('Error signing out', error)
  }
}
