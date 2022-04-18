const USERS_API = "https://jsonplaceholder.typicode.com/users";

export const getStaticPaths = async () => {
  const ninjas = await fetch(USERS_API).then((res) => res.json());

  const paths = ninjas.map((ninja) => ({
    params: {
      id: ninja.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const ninja = await fetch(`${USERS_API}/${id}`).then((res) => res.json());
  return {
    props: { ninja },
  };
};

const NinjaDetails = ({ ninja }) => {
  console.log({ ninja });
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default NinjaDetails;
