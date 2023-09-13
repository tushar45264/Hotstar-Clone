import styled from "styled-components";
import ImgSlider from "./imgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { onSnapshot, collection } from 'firebase/firestore';
import { useDispatch, useSelector } from "react-redux";
import db from "../Firebase";
import { setMovies } from "../features/Movies/movieSlice";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const moviesCollectionRef = collection(db, 'movies');

    const unsubscribe = onSnapshot(moviesCollectionRef, (snapshot) => {
      let recommends = [];
      let newDisneys = [];
      let originals = [];
      let trending = [];

      snapshot.docs?.map((doc) => {
        const movieData = doc.data();
        console.log(movieData);
        switch (movieData.type) {
          case "recommend":
            recommends.push({ id: doc.id, ...movieData });
            break;

          case "new":
            newDisneys.push({ id: doc.id, ...movieData });
            break;

          case "original":
            originals.push({ id: doc.id, ...movieData });
            break;

          case "trending":
            trending.push({ id: doc.id, ...movieData });
            break;

          default:
            break;
        }
      });
        console.log("++++++++++++=> ",{recommends});
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });

    return () => {
      unsubscribe();
    }; 
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

