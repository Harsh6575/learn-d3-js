import { marginClass } from "@/contants";

export const ComponentWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div className={`${marginClass}`} id={id}>
      {children}
    </div>
  );
};
