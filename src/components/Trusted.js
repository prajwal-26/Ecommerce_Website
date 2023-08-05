import React from 'react'
import { styled } from 'styled-components'
const Trusted = () => {
  return (
    <div>
      <Wrapper clasName='brand-section'>
        <div className="container">
          <h3>Trusted By 100+ Companies</h3>
          <div className="brand-section-slider">
            <div className="slide">
              <img src="./images/britania.png" alt="amazon" />
            </div>
            <div className="slide">
              <img src="./images/nike.png" alt="amazon" />
            </div>
            <div className="slide">
              <img src="./images/puma.png" alt="amazon" />
            </div>
            <div className="slide">
              <img src="./images/gucci.png" alt="amazon" />
            </div>
            <div className="slide">
              <img src="./images/armani.png" alt="amazon" />
            </div>
            <div className="slide">
              <img src="./images/zara.png" alt="amazon" />
            </div>
          </div>
        </div>

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 8rem;
    height: 8rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted
