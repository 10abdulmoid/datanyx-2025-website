import MyCustomLayout from "@/components/MyCustomLayout";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black z-[100]">
      <MyCustomLayout>
        {children}
      </MyCustomLayout>
    </div>
  );
}
