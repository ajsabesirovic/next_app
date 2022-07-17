import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const dummy_meetups = [
  {
    id: "m1",
    title: "The first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    adress: "Some adress 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "The second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    adress: "Some adress 10, 12345 Some City",
    description: "This is a second meetup",
  },
];
function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={dummy_meetups} />
    </Layout>
  );
}
export default HomePage;
