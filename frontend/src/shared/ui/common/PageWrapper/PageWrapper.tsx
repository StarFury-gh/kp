interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-(--bg-primary) px-6 py-4 md:px-12 lg:px-16">
      {children}
    </div>
  );
}

export default PageWrapper;
