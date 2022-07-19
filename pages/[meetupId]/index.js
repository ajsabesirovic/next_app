import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="A first meetup"
      address="Some street 5, Some City"
      description="This is a first meetup"
    />
  );
}
export async function getStaticProps(ctx) {
  const meetupId = ctx.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "A first meetup",
        address: "Some street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
export default MeetupDetails;
