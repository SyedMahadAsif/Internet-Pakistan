import "./globals.css";

export const metadata = {
  title: "Internet Pakistan - Sports Venue Booking",
  description: "Book premium sports venues across Karachi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
