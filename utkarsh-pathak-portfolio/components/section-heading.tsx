export function SectionHeading({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={id}
      className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
    >
      {children}
    </h2>
  )
}
