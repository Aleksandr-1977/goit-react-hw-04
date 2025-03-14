import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { getImages } from './apiService/getAPI';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Error from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const maxImages = 50;

  useEffect(() => {
    if (!query) return;

    const handleSearch = async () => {
      try {
        setIsError(false);
        setLoading(true);
        setImages([]);
        setPage(1);
        const data = await getImages(query, page);
        console.log(data);
        if (data.total === 0) return;
        setImages(prevImages => {
          const updateImages = [...prevImages, ...data.results];
          if (updateImages.length > maxImages) {
            return updateImages.slice(0, maxImages);
          }
          return updateImages;
        });
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, [query, page]);

  const getQuery = image => {
    setQuery(image);
    setImages([]);
    setPage(1);
  };
  return (
    <>
      <SearchBar onSubmit={getQuery} />
      {loading && <Loader />}
      {isError && <Error />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !loading && !isError&&<LoadMoreBtn}
      {/* <Toaster /> */}
    </>
  );
}

export default App;
