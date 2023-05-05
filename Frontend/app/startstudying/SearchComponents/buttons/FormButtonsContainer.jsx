
import FormButton from "./FormButton";

function TitleButtonContainer(props) {
 
  

  return (
    <div className=" flex flex-col">
      <span>Target Title</span>
      <div>
        {props.data.titles.map((button) => (
          <FormButton
            onClick={props.onClick}
            
            key={button.id}
            data={button.title}
            name={button.type}
            styles={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28 mr-2 ${
              props.active === button.title ? "bg-orange-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TitleButtonContainer;