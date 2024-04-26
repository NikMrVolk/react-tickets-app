interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
    <div className="flex min-h-svh flex-col gap-10 bg-main-bg px-mainLayoutCalc py-12">
        <header className="flex items-center justify-center">
            <img src="/images/appLogo.png" alt="The best air booking app" draggable="false" className="size-24" />
        </header>
        <main>{children}</main>
    </div>
)
