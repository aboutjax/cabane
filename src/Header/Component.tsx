import { getCachedGlobal } from '@/utilities/getGlobals'
import { HeaderNav } from './HeaderNav'
import type { Header as HeaderType } from '@/payload-types'

export async function Header() {
  const headerData = await getCachedGlobal('header', 1)() as HeaderType
  return <HeaderNav data={headerData} />
}
