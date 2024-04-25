import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capFirstLetter(string) {
    string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObject = filtered.toJS();

  object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    return JSObject[key];
  });

  console.log(JSObject);
}
