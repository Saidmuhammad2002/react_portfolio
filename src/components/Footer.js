import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      max-width: 700px;
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .footer__col1__title {
      font-size: 2.8rem;
    }
    .para {
      padding: 1rem;
    }
  }
  a {
    font-size: 1.7rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Saidmuhammad</h1>
          <PText>
            A web designer and developer from Tashkent, Uzbekistan. I always
            make websites that have unique designs and also have a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+998900240750',
                path: 'tel:+998900240750',
              },
              {
                title: 'sololearner567@gmail.com',
                path: 'mailto:sololearner567@gmail.com',
              },
              {
                title: 'TUIT, Tashkent, Uzbekistan',
                path: 'https://www.google.com/maps/place/Tashkent+University+of+Information+Technologies/@41.3408335,69.2846262,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b534175ed31:0x52a8f9d9414a2ad8!8m2!3d41.3408335!4d69.2868149',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/saidmuhammad.boboyev',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/saidmuhammadboboyev',
              },
              {
                title: 'Telegram',
                path: 'https://www.t.me//Said0130702',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            &copy; 2021 - Saidmuhammad | Designed By Saidmuhammad Group
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
