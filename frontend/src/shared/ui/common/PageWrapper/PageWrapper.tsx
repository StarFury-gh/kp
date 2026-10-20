interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return <div className="min-h-screen bg-(--bg-primary)">{children}</div>;
}

export default PageWrapper;
