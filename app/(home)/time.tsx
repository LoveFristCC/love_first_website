import { format } from "date-fns";

const TimeComponent = ({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
}) => {
  return (
    <div className="timeComponent">
      <p>
        {format(new Date(startTime), "h:mm a")} -{" "}
        {format(new Date(endTime), "h:mm a")}
      </p>
    </div>
  );
};

export default TimeComponent;
