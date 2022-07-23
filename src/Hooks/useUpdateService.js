// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const useUpdateService = () => {
//   const { id } = useParams();
//   const [updateService, setUpdateService] = useState([]);

//   useEffect(() => {
//     const url = `http://localhost:5000/service/${id}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setUpdateService(data));
//   }, []);
//   return [updateService, setUpdateService];
// };
// export default useUpdateService;
