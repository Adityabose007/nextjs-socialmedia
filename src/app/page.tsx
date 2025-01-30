import { Addpost } from "@/components/Addpost"
import { Feed } from "@/components/Feed"
import { LeftMenu } from "@/components/LeftMenu"
import { RightMenu } from "@/components/RightMenu"
import { AddStories } from "@/components/AddStories"

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
        {/* left part */}
        <div className="hidden xl:block w-[20%]"><LeftMenu type="home"/></div>
        {/* center part - mobile view*/}
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <AddStories/>
            <Addpost/>
            <Feed/>
          </div>
        </div>
        {/* right part */}
        <div className="hidden lg:block w-[30%]"><RightMenu/></div>
    </div>
  )
}

export default Homepage