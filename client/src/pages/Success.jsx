import {React, useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import styled from "styled-components";
import DOMPurify from "dompurify";
// import {useSelector} from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  align-items: center;

  padding: 80px;
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 300px;
  hight: 250px;
  justify-content: center;
  align-items: center;
`;
const TempoHtmlMessage = styled.div`
  margin-top: 1.2rem;
  line-height: 1.6;
  justify-content: center;
  text-align: justify;
  text-justify: inter-word;
`;

const Button = styled.button`
  width: 25%;
  border: none;
  padding: 10px;
  background-color: #1769aa;
  color: white;
  font-weight: 600;
  font-size: 17px;
  letter-spacing: 0.2rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 3.5rem;
  // margin-right: 20px;
  &:active {
    transform: scale(0.96);
  }
`;
const Success = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const history = useHistory();

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(message),
  });
  // const user = useSelector((state) => state.user.currentUser);
  console.log(location.state.data);
  //! should find a way so that i can send email to the customer including order id and amount of money
  //TODO:this is not functional yet the sendEmail function should be imported from dalloEmail file.
  const summaryEmail = async () => {
    try {
      let message = `Dear ${location.state.data.source.name},
      Thanks for choosing DallolMart as your prefered shoping platform.

      Order Summary Report
      New stripe payment has been made on ${new Date()
        .toString()
        .substring(0, 30)}.

      Amount €${
        location.state.data.amount / 100
      }.00 has been deducted from your ${
        location.state.data.source.brand
      } card number: ****${location.state.data.source.last4}.
      we will deliver your orders within the next few days to your address @:${
        location.state.data.source.address_line1
      },${location.state.data.source.address_city},${
        location.state.data.source.address_country
      }`;

      let htmlMessage = `Dear <strong>${
        location.state.data.source.name
      }</strong>,
      Thanks for choosing DallolMart as your prefered shoping platform.<br/>

      New stripe payment has been made on <strong>${new Date()
        .toString()
        .substring(0, 30)}</strong>.<br/>

      Amount <strong>€${
        location.state.data.amount / 100
      }.00</strong> has been deducted from your ${
        location.state.data.source.brand
      } card number: <strong>****${location.state.data.source.last4}</strong>.
      <br/>
      we will deliver your orders within the next few days to your address @:<br/><strong>${
        location.state.data.source.address_line1
      },${location.state.data.source.address_city},${
        location.state.data.source.address_country
      }</strong>`;
      console.log(message);
      setMessage(htmlMessage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    location.state && summaryEmail(); //! this avoides calling the summary email function while there is no state (cart info) which usually would throw an error
  }, [summaryEmail, location.state]);
  return (
    <Container>
      <ImageContainer>
        <Image
          alt="dallolmart-logo"
          src="https://i.pinimg.com/280x280_RS/f0/c7/30/f0c730d4740bcf7ba03fcfa84bfdabbf.jpg"
        />
      </ImageContainer>
      <h1>Thanks for Choosing DallolMart!</h1>
      <p style={{color: "green", marginTop: "0.8rem"}}>Payment successful!</p>
      {message !== "" && (
        <TempoHtmlMessage dangerouslySetInnerHTML={sanitizedData()} />
      )}
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Back Home
      </Button>
    </Container>
  );
};

export default Success;
