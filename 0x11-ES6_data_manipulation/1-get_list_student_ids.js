export default function getListStudentIds(obj) {
  const idsArray = [];
  if (obj.idsArray()) {
    idsArray = obj.map((item) => item.id);
  }
  return idsArray;
}
