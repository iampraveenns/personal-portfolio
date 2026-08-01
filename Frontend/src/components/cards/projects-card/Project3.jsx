import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BorderBeam } from "@/components/ui/border-beam"

import image1 from "../../../assets/profile-img.png"

export function Component() {
  return (
    <Card className="relative w-[350px] h-auto overflow-hidden hover:cursor-auto hover:scale-[102%] transition-all duration-[1s]">
      <CardHeader>
        <CardTitle>BookHive E-Commerce Platform</CardTitle>
        <CardDescription>
          🔹 LocalStorage — for persisting cart data and user state across sessions without a backend
          <br /><br />
          🔹 Page Navigation & Routing — handling multi-page links (Home, Books, About, Contact, Cart, Login) for a seamless user flow
          <br /><br />
          🔹 DOM Manipulation — dynamically rendering books, categories, and cart updates
          <br /><br />
          🔹 Event Handling — building interactive features like add-to-cart and dynamic category filters for smoother browsing
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://bookhiveweb.netlify.app/">
          <Button variant="outline">Live Demo</Button>
        </a>
        <a href="https://github.com/iampraveenns/BookHive">
          <Button>GitHub</Button>
        </a>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  )
}

export default Component;