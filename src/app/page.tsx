import { HomeHero } from '@/sections/home/HomeHero'
import { BeyondGoodMarks } from '@/sections/home/BeyondGoodMarks'
import { WhySchoolExists } from '@/sections/home/WhySchoolExists'
import { ChildWeNurture } from '@/sections/home/ChildWeNurture'
import { LearningThatMatters } from '@/sections/home/ChildGrowthTimeline'
import { JourneyOfGrowth } from '@/sections/home/JourneyOfGrowth'
import {
  BeginTheJourney,
  CampusDesignedAroundChildren,
  FutureStillBeingWritten,
  TogetherWithFamilies,
} from '@/sections/home/FinalChapters'

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#eef3e8]">
      <HomeHero />
      <BeyondGoodMarks />
      <WhySchoolExists />
      <ChildWeNurture />
      <LearningThatMatters />
      <JourneyOfGrowth />
      <FutureStillBeingWritten />
      <CampusDesignedAroundChildren />
      <TogetherWithFamilies />
      <BeginTheJourney />
    </main>
  )
}
