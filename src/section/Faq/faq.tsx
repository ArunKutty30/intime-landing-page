import React,{useState}from 'react'
import './faq.scss'
const faq=[
    {
        question:'What is Intime?',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia iste nisi rerum placeat voluptate perferendis quidem voluptatem. Modi autem adipisci ipsa rem, quo porro vel impedit a! Mollitia, quos.',
    },
    {
        question:'How many can we mint per wallet?',
        answer:'2'
    },
    {
        question:'What is Time NFT',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia iste nisi rerum placeat voluptate perferendis quidem voluptatem. Modi autem adipisci ipsa rem, quo porro vel impedit a! Mollitia, quos.'
    },
    {
        question:'What is Character NFT',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia iste nisi rerum placeat voluptate perferendis quidem voluptatem. Modi autem adipisci ipsa rem, quo porro vel impedit a! Mollitia, quos.'
    }
]

interface IFaqCard{
    question:string,
    answer:string
}


const Faqcard:React.FC<IFaqCard>=({question,answer}) =>{
    const [value,setValue] =useState(false);
    return(
        <div className='faq_section' data-aos='fade-up'>
            <div onClick={() =>setValue(!value)}>
                {question}
            </div>
            {
                value&&
                <div className='mt-20'>
                {answer}
              </div>
            }
           
        </div>
    )
}

export const Faq = () => {

  return (
    <div className='faq'>
        <h1 data-aos='fade-up'>FREQUENTLY ASKED QUESTIONS</h1>
        <div className='container' >
            {
                faq.map((faq,index) =>{
                    return(
                    <>   
                    <Faqcard  question={faq.question} answer={faq.answer}></Faqcard>
                    </>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Faq