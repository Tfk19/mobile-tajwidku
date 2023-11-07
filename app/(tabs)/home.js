import {
    Heading,
    FlatList,
    Box,
    Divider,
    Spinner,
    Center,
  } from "@gluestack-ui/themed";
  import { Header, NewsItem } from "../../components";
  import { useEffect, useState } from "react";
  
  const Home = () => {
    // const [isLoadingNews, setIsLoadingNews] = useState(true);
    // const [isFetching, setIsFetching] = useState(false);
    // const [news, setNews] = useState([]);
    // const [activeCategoryNews, setActiveCategoryNews] = useState("terbaru");
  
    // const getNews = (categoryName) => {
    //   fetch(`https://api-berita-indonesia.vercel.app/cnn/${categoryName}/`)
    //     .then((response) => response.json())
    //     .then((json) => setNews(json.data.posts))
    //     .catch((error) => console.error(error))
    //     .finally(() => {
    //       setIsLoadingNews(false);
    //       setIsFetching(false);
    //     });
    // };
  
    // const categoriesHandler = (categoryName) => {
    //   setIsLoadingNews(true);
    //   setActiveCategoryNews(categoryName);
    //   getNews(categoryName);
    // };
  
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
  