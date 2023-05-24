import { query } from "firebase/firestore";
import { db } from "../firebase";

const ViewCandData = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export const getServerSideProps = async (context) => {
  
    const {candidate} = context.query

    const candidatescollection = collection(db, "candidates");
    // Query all Id cards
    const candidateQuery = query(candidatescollection);

    // get id cards
    const querySnapshot = await getDocs(candidateQuery);

    // Map through the ids and add them to a new array
    const results = [];

    querySnapshot.forEach((snapshot) => {
      results.push(snapshot.data());
    });

  return {
    props: {
      student: JSON.parse(JSON.stringify(student)),
    },
  };
};

export default ViewCandData;