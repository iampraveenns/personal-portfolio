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
        <CardTitle>MovieFinder 🎬</CardTitle>
        <CardDescription>
          • Working with APIs and handling API integration
          <br /><br />
          • Fetching and managing real-time data
          <br /><br />
          • Improving frontend development skills using HTML, CSS, and JavaScript
          <br /><br />
          • Deploying a live project successfully
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://moodfinder.netlify.app/">
          <Button variant="outline">Live Demo</Button>
        </a>
        <a href="https://github.com/iampraveenns/MovieFinder">
          <Button>GitHub</Button>
        </a>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  )
}

export default Component;