import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function One({ setIsLoading, setStudentsData }) {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`https://capsules7.herokuapp.com/api/group/one/`);
        // setStudentsData((prev) => {
        //   const res = {};
        //   data.forEach((student) => {
        //     res[student.id] = student;
        //   });
        //   return { ...prev, ...res };
        // });
        setStudents(data);
      } catch (e) {
        console.log(e.message); // ! Handle Error message
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setIsLoading]);

  const insertStudents = () => {
    return students.map((s) => {
      return (
        <div key={s.id}>
          <Link to={`/group-one/${s.id}`}>
            {s.firstName} {s.lastName}
          </Link>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>group-one</h1>

      {insertStudents()}
    </div>
  );
}
export default One;
