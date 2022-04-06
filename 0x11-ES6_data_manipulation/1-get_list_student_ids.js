export default function getListStudentIds(obj) {
  let idsArray = [];
  if (isArray(obj)) {
    idsArray = obj.map((item) => item.id);
  }
  return idsArray;
}
