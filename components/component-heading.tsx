export const ComponentHeading = ({ id }: { id: string }) => {
  const removeHyphen = (id: string) => {
    return id.replace(/-/g, " ");
  };
  return (
    <div id={id}>
      <h1 className="capitalize">{removeHyphen(id)}</h1>
    </div>
  );
};
