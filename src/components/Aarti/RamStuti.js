import React from "react";
import { Link } from 'react-router-dom'

const RamStuti = () => {
  return (
    <>
      <div className="container text-center my-5">
        <p class="text-success">
            <h2 class="mb-4"> श्री राम स्तुति </h2>
            ॥दोहा॥ <br /> <br />
            श्री रामचन्द्र कृपालु भजुमन <br />
            हरण भवभय दारुणं । <br />
            नव कंज लोचन कंज मुख <br />
            कर कंज पद कंजारुणं ॥१॥ <br /> <br />
            कन्दर्प अगणित अमित छवि <br />
            नव नील नीरद सुन्दरं । <br />
            पटपीत मानहुँ तडित रुचि शुचि <br />
            नोमि जनक सुतावरं ॥२॥ <br /> <br />
            भजु दीनबन्धु दिनेश दानव <br />
            दैत्य वंश निकन्दनं । <br />
            रघुनन्द आनन्द कन्द कोशल <br />
            चन्द दशरथ नन्दनं ॥३॥ <br /> <br />
            शिर मुकुट कुंडल तिलक <br />
            चारु उदारु अङ्ग विभूषणं । <br />
            आजानु भुज शर चाप धर <br />
            संग्राम जित खरदूषणं ॥४॥ <br /> <br />
            इति वदति तुलसीदास शंकर <br />
            शेष मुनि मन रंजनं । <br />
            मम् हृदय कंज निवास कुरु <br />
            कामादि खलदल गंजनं ॥५॥ <br /> <br />
            मन जाहि राच्यो मिलहि सो <br />
            वर सहज सुन्दर सांवरो । <br />
            करुणा निधान सुजान शील <br />
            स्नेह जानत रावरो ॥६॥ <br /> <br />
            एहि भांति गौरी असीस सुन सिय <br />
            सहित हिय हरषित अली। <br />
            तुलसी भवानिहि पूजी पुनि-पुनि <br />
            मुदित मन मन्दिर चली ॥७॥ <br /> <br />
            ॥सोरठा॥ <br /> <br />
            जानी गौरी अनुकूल सिय <br />
            हिय हरषु न जाइ कहि । <br />
            मंजुल मंगल मूल वाम <br />
            अङ्ग फरकन लगे। <br />
        </p>
        <div class="container text-center">
        <h5 class="text-body-tertiary my-5">अन्य आरती व मंत्र</h5>
        <ul>
             <Link to="/aarti/chalisa">  <li className='mylinks'>हनुमान चालीसा </li> </Link>  <br />
             <Link to="/aarti/hanumanaarti">  <li className='mylinks'>हनुमान जी की आरती </li> </Link> <br />
             <Link to="/aarti/ramaarti">  <li className='mylinks'>श्री राम की आरती </li> </Link> <br />
     </ul>
    </div>
      </div>
    </>
  );
};

export default RamStuti;
