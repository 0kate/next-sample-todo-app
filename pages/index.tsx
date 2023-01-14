import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect } from 'react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Account from '../components/Account';
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <Account session={session} />
      )}
    </div>
  )
}
