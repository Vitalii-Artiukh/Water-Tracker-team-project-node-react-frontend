import Header from '@components/Header/Header.jsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@components/ui/Container/Container';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Suspense fallback={<p>...Loading</p>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
