type StatusProps = {
  status: 'loading' | 'success' | 'error';
};
export const Status = (props: StatusProps) => {
  let messsage;
  if (props.status === "loading") {
    messsage = "Loading....";
  } else if (props.status === "success") {
    messsage = "Data fetched successfully!";
  } else if (props.status === "error") {
    messsage = "Error fetching data";
  }
  return <div>Status - {messsage}</div>;
};
