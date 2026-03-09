/**
 * Admin Account Seeder Script
 * 
 * Run this once to create admin accounts in Firebase Auth + Firestore.
 * Usage: node scripts/seedAdmins.mjs
 */

import { config } from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

config({ path: '.env' });

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const adminAccounts = [
    {
        email: 'admin@careeros.com',
        password: 'Admin@2026',
        fullName: 'Super Admin',
    },
    {
        email: 'placement.admin@careeros.com',
        password: 'Placement@2026',
        fullName: 'Placement Admin',
    },
    {
        email: 'nikhil.admin@careeros.com',
        password: 'Nikhil@2026',
        fullName: 'Nikhil Admin',
    },
];

async function seedAdmin(account) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, account.email, account.password);

        await updateProfile(user, { displayName: account.fullName });

        await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            email: account.email,
            fullName: account.fullName,
            role: 'admin',
            verified: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });

        console.log(`✅ Created admin: ${account.email} (UID: ${user.uid})`);
        return true;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log(`⚠️  Already exists: ${account.email}`);
        } else {
            console.error(`❌ Failed to create ${account.email}:`, error.message);
        }
        return false;
    }
}

async function main() {
    console.log('🔐 Seeding admin accounts...\n');

    // Must create sequentially because Firebase client SDK keeps auth state
    for (const account of adminAccounts) {
        await seedAdmin(account);
        // Sign out after each creation so we can create the next
        await auth.signOut();
    }

    console.log('\n✅ Done! Admin accounts are ready.');
    console.log('\n📋 Credentials:');
    for (const acc of adminAccounts) {
        console.log(`   Email: ${acc.email} | Password: ${acc.password}`);
    }
    // eslint-disable-next-line no-undef
    process.exit(0);
}

main();
