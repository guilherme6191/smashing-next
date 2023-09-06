import { unstable_getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '~/components/footer'
import { GithubLogin } from '~/components/github-login'
import { authConfig } from '~/pages/api/auth/[...nextauth]'

async function IndexPage() {
  const isAuthenticated = Boolean(await unstable_getServerSession(authConfig))

  return (
    <>
      <div className="container px-52 py-24">
        <div className="flex justify-center">
          <Image
            src={'/GitHub_logo_White.png'}
            aria-label="Advanced Next.js Masterclass"
            alt="github white logo"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-4xl text-center font-bold mt-10">Next TODO app</h1>
        {!isAuthenticated ? (
          <GithubLogin />
        ) : (
          <div className="flex justify-center mt-5">
            <Link
              href="/internal"
              className="px-10 py-5 text-5xl text-black transition-transform rounded-lg bg-gradient-to-tr from-orange-200 to-orange-400 hover:scale-125 focus:scale-125"
            >
              Start doing
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
export default IndexPage
