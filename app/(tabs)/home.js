  import { Header, NewsItem } from "../../components";
  import { useEffect, useState } from "react";
  
  const Home = () => {
    useEffect(() => {
      // getNews(activeCategoryNews);
    }, []);
  
    const onRefresh = () => {
      setIsFetching(true);
      // getNews(activeCategoryNews);
    };
  
    const renderitem = ({ item }) => {
      return <NewsItem item={item} />;
    };
  
    return (
      <>
        <Header title={""} />
      </>
    );
  };
  
  export default Home;
  