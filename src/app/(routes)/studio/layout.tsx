

export default function StudioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-0">
            <div>{children}</div>
        </div>
    );
};

