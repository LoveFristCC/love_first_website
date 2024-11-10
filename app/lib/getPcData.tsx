export const getPcData = async (url: string) => {
  const appId = process.env.PLANNING_CENTER_ID;
  const secret = process.env.PLANNING_CENTER_SECRET;

  const credentials = btoa(`${appId}:${secret}`);

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("error");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
