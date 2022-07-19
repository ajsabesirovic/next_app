import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
function NewMeetup() {
  const router = useRouter();
  const addMeetupHandler = async (enteredData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = res.json();
    console.log(data);
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetup;
