const getUpcomingServiceDates = () => {
  const now = new Date();
  const timeZone = "America/New_York"; // Adjust based on your church's time zone

  // Define service times
  const serviceTimes = [
    { day: 0, time: "07:45" }, // Sunday 7:45 AM
    { day: 0, time: "09:45" }, // Sunday 9:45 AM
    { day: 0, time: "11:45" }, // Sunday 11:45 AM
    { day: 3, time: "19:00" }, // Wednesday 7:00 PM
  ];

  // Find the next upcoming service
  for (let i = 0; i < 7; i++) {
    const futureDate = new Date(now);
    futureDate.setDate(now.getDate() + i);
    const serviceDay = futureDate.getDay();

    for (const service of serviceTimes) {
      if (service.day === serviceDay) {
        const [hours, minutes] = service.time.split(":");
        futureDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

        if (futureDate > now) {
          return futureDate.toISOString();
        }
      }
    }
  }
  return null;
};

export const serviceDate = getUpcomingServiceDates();
