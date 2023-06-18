import{ useState } from 'react';
import AboutImage from '../../assets/Banner-Image/About.png'
const About = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex pb-1 bg-slate-800">
      <div className="w-1/3">
        <img src={AboutImage} alt="About" className="h-auto max-w-full" />
      </div>
      <div className="w-2/3 p-4 text-white">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis vitae turpis malesuada
          posuere. Aenean vel urna a urna porttitor vestibulum. Aliquam erat volutpat. Integer sit amet
          rhoncus risus, quis aliquet enim. Vivamus sed nisl et est accumsan pellentesque a sit amet justo.
        </p>
        <div className="mt-4">
          <h3 className="mb-2 font-bold">Options:</h3>
          <ul className="list-none flex gap-10">
            <li
              className={`cursor-pointer ${selectedOption === 'option1' ? 'font-bold' : ''}`}
              onClick={() => handleOptionClick('option1')}
            >
              MainSkills 
            </li>
            <li
              className={`cursor-pointer ${selectedOption === 'option2' ? 'font-bold' : ''}`}
              onClick={() => handleOptionClick('option2')}
            >
              Awards
            </li>
            <li
              className={`cursor-pointer ${selectedOption === 'option3' ? 'font-bold' : ''}`}
              onClick={() => handleOptionClick('option3')}
            >
              Experience
            </li>
            <li
              className={`cursor-pointer ${selectedOption === 'option4' ? 'font-bold' : ''}`}
              onClick={() => handleOptionClick('option4')}
            >
              Education & Certification
            </li>
          </ul>
        </div>
        {selectedOption && (
          <div className="mt-4">
            {selectedOption === 'option1' && (
              <div className='flex gap-10'>
               <div> 
                <p>HTML , CSS</p>
                <p>Bootstrap</p>
                <p>Tailwind Css</p>
                <p>Java Script</p>
                <p>React</p>
                <p>Node Js</p>
                <p>Next js</p>
                <p>MongoDB</p></div>
               <div>
                <p>WordPress</p>
                <p>Laravel</p>
                <p>PhP</p>
                

               </div>

              </div>
            )}
            {selectedOption === 'option2' && (
              <p>Data for Option 2</p>
            )}
            {selectedOption === 'option3' && (
              <p>Data for Option 3</p>
            )}
            {selectedOption === 'option4' && (
             <div>
               <p>BSc In CSE -  Atish Dipankar University of Science & Technology (ADUST) 
              </p>
              <p>Diploma in Computer Science - Model Institute of Science and Technology Ltd.
              2015</p>
              <p>
              Mern Stack Developer  - Programming hero
              2023</p>
              <p>T-Shirt Designer - 10 Minute School</p>
             </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
