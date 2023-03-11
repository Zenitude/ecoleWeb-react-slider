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
            
            if(previousIndex < 1 && slideAnim.inProgress === false) {
                setSlideAnim({index: dataSlider.length, inProgress: true});
                setTimeout(() => {
                    setSlideAnim({index: dataSlider.length, inProgress: false})
                }, 400);
            } else {
                setSlideAnim({index: previousIndex, inProgress:true});
                setTimeout(() => {
                    setSlideAnim({index: previousIndex, inProgress: false})
                }, 400);
            }
            
        } else if(e.target.parentElement.getAttribute('id') === 'next') {
            let nextIndex = slideAnim.index + 1;
            
            if(nextIndex > dataSlider.length && slideAnim.inProgress === false) {
                setSlideAnim({index: 1, inProgress: true});
                e.target.parentElement.setAttribute('disabled', '');
                setTimeout(() => {
                    setSlideAnim({index: 1, inProgress: false})
                }, 1000)
            } else {
                setSlideAnim({index: nextIndex, inProgress: true}); 
                setTimeout(() => {
                    setSlideAnim({index: nextIndex, inProgress: false})
                }, 1000);
            }
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
