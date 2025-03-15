import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { getImages } from './apiService/getAPI';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Error from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [altDescription, setAltDescription] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateModalStateData = (src, alt) => {
    setModalImage(src);
    setAltDescription(alt);
  };
  useEffect(() => {
    if (!query) return;

    async function handleSearch() {
      try {
        setIsError(false);
        setLoading(true);
        const data = await getImages(query, page);
        setTotalPages(data.total_pages);
        console.log(data);
        if (data.total === 0) {
          toast.error(
            'Извините, нет результатов, соответствующих вашему поисковому запросу. Попробуйте еще раз!'
          );
        }
        setImages(prevImages => [...prevImages, ...data.results]);
        if (page >= data.total_pages) {
          toast('Сожалеем, но больше нет информации по Вашему запросу!');
        }
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
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
      {loading && <Loader loading={loading} />}
      {isError && <Error />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          updateModalStateData={updateModalStateData}
        />
      )}
      {images.length > 0 && !loading && !isError && page < totalPages && (
        <LoadMoreBtn
          onClick={() => setPage(page + 1)}
          pages={page}
          totalPages={totalPages}
        />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage}
        alt={altDescription}
      />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: '1px solid rgb(45, 90, 236)',
            padding: '16px',
            color: '#00000',
          },
        }}
      />
    </>
  );
}

export default App;
