export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  console.log('render layout.tsx');

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}