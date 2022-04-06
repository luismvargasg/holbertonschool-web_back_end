export default function getStudentIdsSum(list) {
  return list.reduce((prevValue, currValue) => prevValue + currValue.id, 0);
}
