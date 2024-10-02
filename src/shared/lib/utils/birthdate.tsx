// Возраст будет вычислен исходя из текущей даты.
export const getAgeFromBirthDate = (birthDateString) => {
  const today = new Date();
  const birthDate = new Date(
    birthDateString.slice(0, 4),
    birthDateString.slice(5, 7),
    birthDateString.slice(8, 10),
  );

  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
