import { useRouter } from 'next/router';


const DetailPage = () => {
  const router = useRouter();

  router.query.newsId; // get the newsId from the url query

  return <h1>Detail Page</h1>;
};

export default DetailPage;
