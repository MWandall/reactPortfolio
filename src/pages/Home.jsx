import ProfilePicture from "../components/ProfilePicture";
import Hello from "../components/HelloAnimate";


export default function Home() {
  return (
    
    <div className=" flex flex-col items-center justify-between p-5 ">
      <h1>console.log(< Hello />)</h1>
      <ProfilePicture />

      {/* <p className="p-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p> */}
      {/* <h1 className="text-3xl font-bold p-5">{`</helloWorld>`}</h1> */}
    </div>
  );
}
