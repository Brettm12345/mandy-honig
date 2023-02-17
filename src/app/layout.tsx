import Link from 'next/link'
import {ServerThemeProvider} from '@wits/next-themes'
import {Inter} from '@next/font/google'
import './globals.css'
import {ThemeToggle} from '@/components/ThemeToggle'
import Providers from '@/components/Providers'

const inter = Inter({subsets: ['latin']})
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className={inter.className}>
        <head>
          <script
            defer
            data-domain="livewellwithmandy.com"
            src="https://plausible.io/js/script.js"
          ></script>
        </head>

        <body>
          <Providers>
            <div className="w-full bg-gray-50 text-gray-700 px-3 md:px-0 dark:bg-gray-900 dark:text-gray-50 transition-colors ease-linear min-h-screen">
              <div className="max-w-screen-md mx-auto">
                <div className="border-b border-gray-300 dark:border-gray-800 pb-4">
                  <div className="flex flex-row justify-between items-center">
                    <div className="pt-16 pb-8">
                      <div className="font-semibold text-3xl text-gray-900 dark:text-gray-50">
                        Mandy Honig
                      </div>
                      <div className="text-xl">
                        A blog for health, fitness and sobriety advice.
                      </div>
                    </div>
                    <ThemeToggle />
                  </div>
                  <div>
                    <ul className="flex text-xl space-x-6">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about/">About</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-xl py-5">{children}</div>

                <div className="border-t border-gray-300 dark:border-gray-800 text-center py-8 text-sm">
                  © Copyright {new Date().getFullYear()} Mandy Honig. Powered
                  with{' '}
                  <span role="img" aria-label="Love">
                    ♥
                  </span>
                </div>
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
