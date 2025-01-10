import Main from '../components/Main'
import LeftBar from '../components/LeftBar';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="bg-black text-white font-semibold flex flex-col justify-between min-h-screen w-full">
        <NavBar/>
      <div className="flex gap-4 px-4 py-2">
        <LeftBar/>
        <Main/>
      </div>
    </div>
  )
}
