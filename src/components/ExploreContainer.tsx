import { IonButton, useIonActionSheet } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [presentActionSheet] = useIonActionSheet();
  function present() {
    presentActionSheet([{ text: "Foo" }, { text: "Baz" }]);
  }
  return (
    <div id="container">
      <IonButton onClick={present}>Present action sheet</IonButton>
    </div>
  );
};

export default ExploreContainer;
