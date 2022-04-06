export default function getListStudentIds(obj) {
  let idsArray = [];
  if (obj.isArray()) {
    idsArray = obj.map((item) => item.id);
  }
  return idsArray;
}
