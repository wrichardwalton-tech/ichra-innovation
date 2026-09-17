import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4 px-6">
        <h1 className="text-6xl font-display font-bold">404</h1>
        <p className="text-xl text-muted-foreground">Page not found</p>
        <Link to="/" className="text-primary font-bold hover:underline block mt-4">
          Return Home
        </Link>
      </div>
    </div>
  )
}
