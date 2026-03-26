const AlbertFooter = () => (
    <footer className="py-8 bg-foreground">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <img src="https://albert.evolves.site/img/logo-green.png" alt="Albert IA" className="h-6 brightness-200" />
            <p className="text-xs text-primary-foreground/40">
                © {new Date().getFullYear()} Albert IA. Todos os direitos reservados.
            </p>
        </div>
    </footer>
);

export default AlbertFooter;
