import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Student({ setIsLoading }) {
  const [studentData, setStudentData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`https://capsules7.herokuapp.com/api/user/${id}`);
      setStudentData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id, setIsLoading]);
  return (
    <div>
      {studentData && (
        <>
          <h1>
            {studentData.firstName} {studentData.lastName}
          </h1>
          <h3>Hobby: {studentData.hobby}</h3>
          <h3>City: {studentData.city}</h3>
          <h3>Gender: {studentData.gender}</h3>
        </>
      )}
    </div>
  );
}

export default Student;
