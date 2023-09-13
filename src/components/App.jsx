import { StyledApp } from 'App.styled';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { StyledButtonDiv } from './Button/Button.styled';

export const App = () => {
  return (
    // <div
    //   style={{
    // height: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >

    // </div>
    <>
      <StyledApp>
        <Searchbar />
        <ImageGallery />
        {/* <Loader/> */}
        {/* <Modal /> */}
      </StyledApp>
      <Button title="Load More" />
    </>
  );
};
