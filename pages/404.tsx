import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Custom404 = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/')
  }, [router])

  return null
}

export default Custom404
