import InfiniteScrollComponent from "@/components/InfiniteScrollComponent";

export default function InfiniteScrollPage(props) {
  return (
    <>
      <div>
        <InfiniteScrollComponent data={props.data} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=50"
  ).then((response) => response.json());

  return {
    props: { data },
  };
};
