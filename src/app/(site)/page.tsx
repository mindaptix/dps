import { HomeHero } from '@/features/home/sections/HomeHero'
import { HomeIntroNote } from '@/features/home/sections/HomeIntroNote'
import { BeyondGoodMarks } from '@/features/home/sections/BeyondGoodMarks'
import { WhySchoolExists } from '@/features/home/sections/WhySchoolExists'
import { ChildWeNurture } from '@/features/home/sections/ChildWeNurture'
import { LearningThatMatters } from '@/features/home/sections/ChildGrowthTimeline'
import { JourneyOfGrowth } from '@/features/home/sections/JourneyOfGrowth'
import {
  BeginTheJourney,
  CampusDesignedAroundChildren,
  FutureStillBeingWritten,
  TogetherWithFamilies,
} from '@/features/home/sections/FinalChapters'

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#f7f1e6]">
      <HomeHero />
      <HomeIntroNote />
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
