import React from "react";
interface PersonCardProps {
  name?: string;
  position?: string;
  cell?: string;
  country?: string;
}

export default function PersonCard(props: PersonCardProps) {
  return <div>Personal card</div>;
}
