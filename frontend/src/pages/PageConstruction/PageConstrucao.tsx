import React from 'react';
import { Container, Image, Spinner } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

interface PageConstrucaoProps {}

const PageConstrucao: React.FC<PageConstrucaoProps> = () => {
    const animationProps = useSpring({
        from: { transform: 'scale(1)' },
        to: async (next: any) => {
            while (true) {
                await next({ transform: 'scale(1.1)' });
                await next({ transform: 'scale(1)' });
            }
        },
        config: { duration: 1000 },
    });

    return (
        <Container
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
                height: '100vh',
            }}
        >
            <Image src="https://images.vexels.com/media/users/3/215113/isolated/preview/9e02b5e0eaf44dc28217adc1360218bc-ilustracao-de-escavadeira-de-construcao.png" style={{ width: '164px' }} />
            <h1 className="construction-title" style={{color:"white"}}>Página em construção</h1>
            <animated.div className="construction-animation" style={{ ...animationProps }}>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            </animated.div>
        </Container>
    );
};

export default PageConstrucao;
