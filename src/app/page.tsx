import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin']})

export default function Page() {

  return (
    <main className="bg-gray-500">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
    </main>
  )
}