interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-(--bg-primary) px-10 py-4">{children}</div>
  );
}

export default PageWrapper;
