import React from "react";

export function ContentArea({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="p-4 sm:mr-64">{children}</div>
    </div>
  );
}
