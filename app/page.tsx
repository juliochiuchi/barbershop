import { Header } from "./_components/header"
import { EyeIcon, FootprintsIcon, SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import { BarberShopItem } from "./_components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})

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

        <div className="flex gap-3 mt-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <Button className="px-6 gap-2" variant="secondary">
            <Image alt="cabelo" src="./cabelo.svg" width={16} height={16} />
            Cabelo
          </Button>

          <Button className="px-6 gap-2" variant="secondary">
            <Image alt="barba" src="./barba.svg" width={16} height={16} />
            Barba
          </Button>

          <Button className="px-6 gap-2" variant="secondary">
            <Image alt="acabamento" src="./acabamento.svg" width={16} height={16} />
            Acabamento
          </Button>

          <Button className="px-6 gap-2" variant="secondary">
            <FootprintsIcon size={16} />
            Pezinho
          </Button>

          <Button className="px-6 gap-2" variant="secondary">
            <EyeIcon size={16} />
            Sobrancelha
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/banner-01.png"
            alt="banner barber"
            className="object-cover rounded-xl"
            fill
          />
        </div>

        <h2 className="mt-6 mb-3 uppercase font-bold text-xs text-gray-400">Agendamentos</h2>
        <Card className="">
          <CardContent className="flex justify-between items-stretch p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>

              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>

                <p className="text-sm">Barbearia JCC</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl text-semibold">06</p>
              <p className="text-sm">09:45</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mt-6 mb-3 uppercase font-bold text-xs text-gray-400">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {
            barbershops.map((barbershop) => (
              <BarberShopItem key={barbershop.id}
                barbershop={barbershop}
              />
            ))
          }
        </div>

        <h2 className="mt-6 mb-3 uppercase font-bold text-xs text-gray-400">Populares</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {
            barbershops.map((barbershop) => (
              <BarberShopItem key={barbershop.id}
                barbershop={barbershop}
              />
            ))
          }
        </div>
      </div>

      <footer>
        <Card className="">
          <CardContent className="px-5 py-6 text-center">
            <p className="text-xs text-gray-400">© 2023 Copyright | <span className="text-sm font-bold">Barber Shop</span></p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
