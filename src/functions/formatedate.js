const options = { year: "numeric", month: "long", day: "numeric" };
const formatedate = function (date) {
  const dateobject = new Date(date);
  const formatteddate = dateobject.toLocaleDateString("en-US", options);
  return formatteddate;
};
export default formatedate;
