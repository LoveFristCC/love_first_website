import React from "react";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, ...props }) => {
  return <button className={`daniel-fast-button ${className}`} {...props} />;
};

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={`daniel-fast-card ${className}`} {...props} />;
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={`daniel-fast-card-header ${className}`} {...props} />;
};

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return <h3 className={`daniel-fast-card-title ${className}`} {...props} />;
};

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={`daniel-fast-card-content ${className}`} {...props} />;
};

export const Tabs: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={`daniel-fast-tabs ${className}`} {...props} />;
};

export const TabsTrigger: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }
> = ({ className, active, ...props }) => {
  return (
    <button
      className={`daniel-fast-tab ${active ? "active" : ""} ${className}`}
      {...props}
    />
  );
};

export const TabsContent: React.FC<
  React.HTMLAttributes<HTMLDivElement> & { active?: boolean }
> = ({ className, active, ...props }) => {
  return (
    <div
      className={`daniel-fast-tab-content ${active ? "active" : ""} ${className}`}
      {...props}
    />
  );
};
