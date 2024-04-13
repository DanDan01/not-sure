import Image from 'next/image';
import Header from '@/app/components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header></Header>
      <div>
        <h2 className="text-5xl font-black">Not Sure</h2>
          <p>A presentation of things and ideas....really i'm not sure?
          </p>

     </div>
    </main>
  );
}
