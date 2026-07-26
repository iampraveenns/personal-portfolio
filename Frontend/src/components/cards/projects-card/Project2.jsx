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
        <CardTitle>Personal Notes App</CardTitle>
        <CardDescription>
          •	Built a full-stack notes application using React.js, Node.js, Express.js, and MongoDB Atlas
          <br /><br />
          •	Built 6-endpoint REST API handling ~500 req/day with Redis rate limiting (100 req/15 min window)
          <br /><br />
          •	Integrated Upstash Redis rate limiting (sliding-window algorithm) to protect API from abuse
          <br /><br />
          •	Deployed frontend and backend as independent services on Netlify and Render

        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://remaindme.netlify.app/">
          <Button variant="outline">Live Demo</Button>
        </a>
        <a href="https://github.com/iampraveenns/Todo_List">
          <Button>GitHub</Button>
        </a>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  )
}

export default Component;