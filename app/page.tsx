import { Header } from "./_components/header"
import { SearchIcon } from "lucide-react"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import { BarberShopItem } from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import { BookingItem } from "./_components/bookingItem"

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
          {quickSearchOptions.map(item => (
            <Button key={item.title} className="px-6 gap-2" variant="secondary">
              <Image alt={item.title} src={item.imageUrl} width={16} height={16} />
              {item.title}
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image
            src="/banner-01.png"
            alt="banner barber"
            className="object-cover rounded-xl"
            fill
          />
        </div>

        <BookingItem />

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
