import { HomeHero } from '@/sections/home/HomeHero'
import { WhySchoolExists } from '@/sections/home/WhySchoolExists'
import { ChildWeNurture } from '@/sections/home/ChildWeNurture'
import { ChildGrowthTimeline } from '@/sections/home/ChildGrowthTimeline'
import { FutureReadyEducation } from '@/sections/home/FutureReadyEducation'
import { CampusOfPossibility } from '@/sections/home/CampusOfPossibility'
import { FoundingFamilies } from '@/sections/home/FoundingFamilies'
import { ParentVoices } from '@/sections/home/ParentVoices'
import { InsightsForModernParents } from '@/sections/home/InsightsForModernParents'
import { AdmissionsCTA } from '@/sections/home/AdmissionsCTA'

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f4f8f3]">
      <HomeHero />
      <WhySchoolExists />
      <ChildWeNurture />
      <ChildGrowthTimeline />
      <FutureReadyEducation />
      <CampusOfPossibility />
      <FoundingFamilies />
      <ParentVoices />
      <InsightsForModernParents />
      <AdmissionsCTA />
    </main>
  )
}
