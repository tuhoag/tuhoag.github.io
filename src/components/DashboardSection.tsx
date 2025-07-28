import type React from "react";

function DashboardSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="pb-5">
      <h2 className="display-5 mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default DashboardSection;