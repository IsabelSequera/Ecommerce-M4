import Link from "next/link";

function notFound() {
    return (
        <>
            <main className="flex items-center justify-center bg-background_light min-h-screen sm:py-32 lg:px-8 h-full">
                <div className="text-center">
                    <p className="text-3x1 font-semibold text-error">400</p>
                    <h1 className="mt-4 text-3x1 font-bold tracking-tight text-primary sm:text-5xl">
                        Page notFound
                    </h1>

                    <p className="mt-6 text-base leading-7 text-primary">
                        Sorry
                    </p>
                    
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-background_light shadow-sm hover:bg-tertiary">
                            Go back home
                        </Link>
                        <a href="#" className="text-sm font-semibold text-primary">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default notFound;