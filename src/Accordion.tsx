import {useState} from 'react'
export default function Accordion(props) {

	const [isActive, setIsActive] = useState(false)
	const [contents, setContents] = useState(props.content)
	return (
		<section className='accordion-card'>
			<div className='header' onClick={() => setIsActive(!isActive)}>
				<div>{props.StageName}</div>
				<p className='icon'>{isActive ? '-' : '+'}</p>
			</div>

		{isActive && (
        <div>
          {contents.map((content, index) => (
            <div key={index}>
              {Object.entries(content).map(([key, value]) => (
                <p key={key}>
                  {key}: {value}
                </p>
              ))}
            </div>
          ))}
          </div>)}
		</section>
		)
}