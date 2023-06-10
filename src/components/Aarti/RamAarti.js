import React from "react";
import { Link } from 'react-router-dom'

const RamAarti = () => {
  return (
    <>
      <div className="container text-center my-5">
        <p class="text-primary">
            <h2 class="mb-4"> श्री राम की आरती </h2>
            श्री रामचन्द्र कृपालु भजु मन, <br />
            हरण भवभय दारुणम्। <br /> <br />
            नव कंज लोचन, कंज मुख <br />
            कर कंज पद कंजारुणम्॥ <br /> <br />
            ॥श्री रामचन्द्र कृपालु..॥ <br /> <br />
            कन्दर्प अगणित अमित छवि, <br />
            नव नील नीरद सुन्दरम्। <br /> <br />
            पट पीत मानहुं तड़ित रूचि-शुचि <br />
            नौमि जनक सुतावरम्॥ <br /> <br />
            ॥श्री रामचन्द्र कृपालु..॥ <br /> <br />
            भजु दीनबंधु दिनेश दानव <br />
            दैत्य वंश निकन्दनम्। <br /> <br />
            रघुनन्द आनन्द कन्द कौशल <br />
            चन्द्र दशरथ नन्द्नम्॥ <br /> <br />
            ॥श्री रामचन्द्र कृपालु..॥ <br /> <br />
            सिर मुकुट कुंडल तिलक चारू <br />
            उदारु अंग विभूषणम्। <br /> <br />
            आजानुभुज शर चाप-धर, <br />
            संग्राम जित खरदूषणम्॥ <br /> <br />
            ॥श्री रामचन्द्र कृपालु..॥ <br /> <br />
            इति वदति तुलसीदास, <br />
            शंकर शेष मुनि मन रंजनम्। <br /> <br />
            मम ह्रदय कंज निवास कुरु, <br />
            कामादि खल दल गंजनम्॥ <br /> <br />
            ॥श्री रामचन्द्र कृपालु..॥ <br /> <br />
            मन जाहि राचेऊ मिलहि सो वर <br />
            सहज सुन्दर सांवरो। <br /> <br />
            करुणा निधान सुजान शील <br />
            सनेह जानत रावरो॥ <br /> <br />
            ॥श्री रामचन्द्र कृपालु..॥ <br /> <br />॥ इति श्री राम आरती॥
        </p>
        <div class="container text-center">
        <h5 class="text-body-tertiary my-5">अन्य आरती व मंत्र</h5>
        <ul>
             <Link to="/aarti/chalisa">  <li className='mylinks'>हनुमान चालीसा </li> </Link>  <br />
             <Link to="/aarti/hanumanaarti">  <li className='mylinks'>हनुमान जी की आरती </li> </Link> <br />
             <Link to="/aarti/ramstuti">  <li className='mylinks'>श्री राम स्तुति </li> </Link> <br />
     </ul>
    </div>
      </div>
    </>
  );
};

export default RamAarti;
