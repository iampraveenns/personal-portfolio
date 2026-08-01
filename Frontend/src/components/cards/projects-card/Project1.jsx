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
        <CardTitle>X-Clone Application</CardTitle>
        <CardDescription>
          🔹Developed a full-stack social media application using React.js, Node.js, Express.js, and MongoDB
          <br /><br />
          🔹Built JWT-based auth system with protected routes, refresh token handling, and bcrypt password hashing
          <br /><br />
          🔹Built 8 RESTful API endpoints for full CRUD operations, secured with JWT middleware
          <br /><br />
          🔹Integrated TanStack Query for efficient data fetching and state management

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
        <a href="https://xclonne.netlify.app/">
          <Button variant="outline">Live Demo</Button>
        </a>
        <a href="https://github.com/iampraveenns/X-Clone">
          <Button>GitHub</Button>
        </a>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  )
}

export default Component;