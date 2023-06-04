import { Box, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import BmiForm from "./components/BmiForm";
import ImageResult from "./components/ImageResult";

function App() {
  const [values, setValues] = useState({
    weight: "",
    height: ""
  });

  const [ bmi, setBmi ] = useState(0);

  const [error, setError] = useState({});

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  } 

  const submitHandler = (e) => {
    e.preventDefault();
    setError(Validation());
    if(values.weight && values.height) {
      setValues({
        weight: "",
        height: ""
      });
    }
    setBmi(
      (values.weight / ( values.height * values.height )) * 703
    )
    console.log('the bmi is: ', bmi);
  }

  const reloadHandler = () => {
    window.location.reload();
  }

  const Validation = () => {
    let formError = {};

    if( !values.weight ) {
      formError.weight = "Please, fill the weight";
    } else if( values.weight.length === 0 ) {
      formError.weight = "Weight should be more then 0";
    }
    
    if( !values.height ) {
      formError.height = "Please, fill the weight";
    } else if( values.height.length === 0 ) {
      formError.height = "Height should be more then 0";
    }
    return formError;
  }

  return (
    <Container maxW='3xl' mt='30px'>
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
        <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>BMI Calculator</Heading>
        <BmiForm values={values} changeHandler={changeHandler} error={error} reloadHandler={reloadHandler} submitHandler={submitHandler} />

        <ImageResult bmi={bmi} />
      </Box>
    </Container>
  );
}

export default App;
