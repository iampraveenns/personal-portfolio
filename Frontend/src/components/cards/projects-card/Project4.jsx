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
        <CardTitle>Weather Tracker - Frontend</CardTitle>
        <CardDescription>

          🔹Built a weather lookup app using vanilla HTML, CSS, and JavaScript, fetching real-time data from the OpenWeatherMap API
          <br /><br />
          🔹Implemented async city search with the native HTML5 search input event, displaying temperature, pressure, and humidity for any location entered
          <br /><br />
          🔹Handled invalid/not-found city inputs gracefully with clear user-facing error messaging
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="#" onClick={(e) => e.preventDefault()} aria-disabled="true" tabIndex={-1}>
          <Button variant="outline" className="border-2 border-red-600 cursor-not-allowed" >Not Available</Button>
        </a>
        <a href="https://github.com/iampraveenns/WeatherFinder">
          <Button>GitHub</Button>
        </a>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  )
}

export default Component;