"use client";

import React from "react";

interface PasswordGateProps {
  children: React.ReactNode;
  requiredPassword?: string;
  domainKey?: string;
}

// Password gate disabled - datasets are now publicly accessible
export default function PasswordGate({ 
  children, 
}: PasswordGateProps) {
  return <>{children}</>;
}
