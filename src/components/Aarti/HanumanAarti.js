import React from "react";
import { Link } from 'react-router-dom'

const HanumanAarti = () => {
  return (
    <>
        <div className="container text-center my-5">
          <p class="text-success">
              <h2 class="mb-4"> हनुमान जी की आरती </h2>
              आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की।। <br />
               जाके बल से गिरिवर कांपे। रोग दोष जाके निकट न झांके।। <br /> <br />
               अंजनि पुत्र महाबलदायी। संतान के प्रभु सदा सहाई। <br />
               दे बीरा रघुनाथ पठाए। लंका जारी सिया सुध लाए। <br /> <br />
               लंका सो कोट समुद्र सी खाई। जात पवनसुत बार न लाई। <br />
               लंका जारी असुर संहारे। सियारामजी के काज संवारे। <br /> <br />
               लक्ष्मण मूर्छित पड़े सकारे। आणि संजीवन प्राण उबारे। <br />
               पैठी पताल तोरि जमकारे। अहिरावण की भुजा उखाड़े। <br /> <br />
                बाएं भुजा असुर दल मारे। दाहिने भुजा संतजन तारे। <br />
              सुर-नर-मुनि जन आरती उतारे। जै जै जै हनुमान उचारे।  <br /> <br />
              कंचन थार कपूर लौ छाई। आरती करत अंजना माई।  <br />
               लंकविध्वंस कीन्ह रघुराई। तुलसीदास प्रभु कीरति गाई।  <br />  <br />
                जो हनुमानजी की आरती गावै। बसी बैकुंठ परमपद पावै। <br />
                आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की।
          </p>
          <div class="container text-center">
          <h5 class="text-body-tertiary my-5">अन्य आरती व मंत्र</h5>
          <ul>
             <Link to="/aarti/chalisa">  <li className='mylinks'>हनुमान चालीसा </li> </Link>  <br />
             <Link to="/aarti/ramaarti">  <li className='mylinks'>श्री राम की आरती </li> </Link> <br />
             <Link to="/aarti/ramstuti">  <li className='mylinks'>श्री राम स्तुति </li> </Link> <br />
     </ul>
    </div>
        </div>
    </>
  );
};

export default HanumanAarti;
