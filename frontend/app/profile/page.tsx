import { ProfileLayout } from "@/components/layout/profile-layout"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileContent } from "@/components/profile/profile-content"
import { ProfileSidebar } from "@/components/profile/profile-sidebar"
import { ProfileInfo } from "@/components/profile/profile-info"

export default function ProfilePage() {
  return (
    <ProfileLayout>
      <ProfileHeader />
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        <ProfileSidebar />
        <div className="flex flex-col xl:flex-row gap-6 flex-1">
          <ProfileContent />
          <ProfileInfo />
        </div>
      </div>
    </ProfileLayout>
  )
}

