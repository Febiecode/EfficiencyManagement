import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet"
import { MenuIcon } from "lucide-react"
import SideNavbarMenu from "./SideNavBarMenu"

const SideBar = () => {
  return (
    <Sheet width={200}>
      <SheetTrigger asChild>
        <div className="m-5">
          <MenuIcon width={40} height={40} />
        </div>
      </SheetTrigger>
      <SheetContent side='left'>
        <SideNavbarMenu />
      </SheetContent>
    </Sheet>
  )
}


export default SideBar;