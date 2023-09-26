import React from "react";
import styled from "@emotion/styled";

type IBadgeProps = {
  label: string;
};

const StBadge = styled.span`
  background-color: #b6c0ff;
  color: black;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  margin-right: 1rem;
  font-size: 0.8rem;
`;

export const Badge = ({ label }: IBadgeProps) => {
  return <StBadge>{label}</StBadge>;
};
