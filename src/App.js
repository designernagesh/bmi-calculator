import { Box, FormControl, FormLabel, FormHelperText, Button, Input, Container, Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    weight: "",
    height: ""
  });

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
    setValues({
      weight: "",
      height: ""
    });
    console.log(values.weight, values.height);
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
    <Container>
      <Box boxShadow='lg' p='6' rounded='md'>
        <Heading as='h1' fontSize='30px' my='20px' align='center'>Form with Validation</Heading>
        <form onSubmit={ submitHandler }>
          <FormControl mb='20px'>
            <FormLabel>Weight(lbs)</FormLabel>
            <Input type='text' 
              name="weight"
              value={values.weight} 
              onChange={ changeHandler } 
              placeholder="weight" />
            {
              error.weight && 
              <FormHelperText>{error.weight}</FormHelperText>
            }
          </FormControl>

          <FormControl mb='20px'>
            <FormLabel>Height(in)</FormLabel>
            <Input type='text' 
              name="height"
              value={values.height} 
              onChange={ changeHandler }
              placeholder="height" />
            {
              error.height &&
              <FormHelperText>{error.height}</FormHelperText>
            }            
          </FormControl>
          
          <Flex justifyContent='space-between' mb='20px'>
            <Button type="button" px='50px' onClick={ reloadHandler }>Reload</Button>
            <Button type="submit" px='50px'>Submit</Button>
          </Flex>

          <Flex justifyContent='center'>
            Your BMI is:
          </Flex>
        </form>
      </Box>
    </Container>
  );
}

export default App;
