import underweight from '../images/underweight.png';
import normal from '../images/normal.png';
import overweight from '../images/overweight.png';
import obese from '../images/obese.png';

import { Flex, Text, Image } from "@chakra-ui/react";

const ImageResult = ({bmi}) => {
    const BmiImage = () => {
        if( bmi < 18.5 ){
            return <Image src={underweight} alt='underweight'
            boxSize='110px' h='150px' objectFit='contain' />
        } else if( (bmi > 18.5) && (bmi < 24.9) ) {
            return <Image src={normal} alt='normal'
            boxSize='110px' h='150px' objectFit='contain' />
        } else if( (bmi > 25) && (bmi < 29.9) ) {
            return <Image src={overweight} alt='overweight'
            boxSize='110px' h='150px' objectFit='contain' />
        } else if( bmi > 30 ) {
            return <Image src={obese} alt='obese'
            boxSize='110px' h='150px' objectFit='contain' />
        }
    }

    return (
        <Flex justifyContent='center' alignItems='center' flexDirection='column'>
            <Text mb='10px' fontWeight='bold'>Your BMI is:</Text>
            {
                BmiImage()
            }
               
        </Flex>
    )
}

export default ImageResult;
