import localFont from "next/font/local";
import "./globals.css";

const Terminus = localFont({
  src: "./fonts/Terminus.woff",
});


export const metadata = {
  title: "MultiVerse",
  description: "A social and immersive gaming metaverse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Terminus.className}>
      <body
      >
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}
