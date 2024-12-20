import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import {Josefin_Sans} from "next/font/google"
import "@/app/_styles/globals.css"

const josafin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description: "Luxurious cabin hotel"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${josafin.className} bg-primary-950 text-primary-100 min-h-screen`}>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>copyright by @wild-oasis</footer>
      </body>
    </html>
  );
}
