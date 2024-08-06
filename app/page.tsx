import { Header } from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Julio!</h2>
        <p>Segunda, 6 de Agosto</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="faca a sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-[150px]">
          <Image
            src="/banner-01.png"
            alt="banner barber"
            className="object-cover mt-6 rounded-xl"
            fill
          />
        </div>
      </div>
    </div>
  )
}

export default Home
