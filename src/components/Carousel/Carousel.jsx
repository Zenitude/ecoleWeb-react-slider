import React, { useState } from 'react';
import { CarouselContainer, CarouselItem, SwitchItem, RadioContainer, Radio, ValidRadio } from './Carousel.style';
import dataSlider from '../../utils/datas/dataSlider';
import { ReactComponent as Previous } from './icons/left-arrow.svg';
import { ReactComponent as Next } from './icons/right-arrow.svg';

export default function Carousel() {

    const [ slideAnim, setSlideAnim ] = useState({
        index: 1,
        inProgress: false
    });

    const switchingItem = (e) => {
        if(e.target.parentElement.getAttribute('id') === 'previous') {
            let previousIndex = slideAnim.index - 1;
            
            previousIndex < 1
            ? setSlideAnim({...slideAnim, index: dataSlider.length})
            : setSlideAnim({...slideAnim, index: previousIndex});
            
            
        } else if(e.target.parentElement.getAttribute('id') === 'next') {
            let nextIndex = slideAnim.index + 1;
            
            nextIndex > dataSlider.length
            ? setSlideAnim({...slideAnim, index: 1})
            : setSlideAnim({...slideAnim, index: nextIndex});      
        }
    }


    return (
        <CarouselContainer>
        <SwitchItem id={'previous'} switcher={'previous'} onClick={switchingItem}><Previous /></SwitchItem>
        <SwitchItem id={'next'} switcher={'next'} onClick={switchingItem}><Next /></SwitchItem>
        { 
            dataSlider.map((item, index) => (
                <CarouselItem src={`/assets/images/img${index+1}.jpg`} key={item.id} display={slideAnim.index === index + 1 ? 'yes' : 'no'} />
            ))
        }
        <RadioContainer>
            {
                dataSlider.map((item, index) => (
                    <Radio key={`${index}-${item.id}`}>
                        {
                            slideAnim.index === index + 1 
                            && (<ValidRadio></ValidRadio>)
                        }
                    </Radio>
                ))
            }
        </RadioContainer>
        </CarouselContainer>
    )
}
