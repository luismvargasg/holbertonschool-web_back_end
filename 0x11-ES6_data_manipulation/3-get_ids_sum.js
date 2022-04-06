export default function getStudentIdsSum(list) {
  return list.reduce(
    (previousValue, currentValue) => previousValue + currentValue.id,
    0
  );
}
