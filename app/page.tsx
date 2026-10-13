import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import BentoMetrics, { defaultMetrics } from './components/sections/BentoMetrics'
import HeroSection from './components/sections/HeroSection'
import HomeProjectsSection from './components/sections/HomeProjectsSection'
import { PORTFOLIO_ITEMS } from '../lib/content/portfolio-items'

export default async function HomePage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // Fetch user profile (editable via dashboard); portfolio content itself is static, see HOME_PROJECTS
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .single()

  const profile = {
    fullName: user?.name ?? 'Putri Wulandari',
    headline: user?.headline ?? 'AI Product Manager & Service Designer',
    bio: user?.bio ?? null,
    avatarUrl: user?.avatar ?? null,
    location: user?.location ?? 'Jakarta, Indonesia',
    openToWork: true,
  }

  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-8 space-y-3">
        <HeroSection profile={profile} projectCount={PORTFOLIO_ITEMS.length} />
        <BentoMetrics metrics={defaultMetrics} />
        <HomeProjectsSection />
      </div>
    </div>
  )
}
