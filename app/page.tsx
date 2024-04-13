import Image from 'next/image';
import Header from '@/app/components/header'

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <div>
        <h2 className="text-4xl">Intro...</h2>
          <p>
            A presentation of things and ideas....really i'm not sure?
          </p>

     </div>
    </main>
  );
}
