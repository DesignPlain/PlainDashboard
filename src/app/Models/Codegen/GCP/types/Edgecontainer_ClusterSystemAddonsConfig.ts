import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_ClusterSystemAddonsConfigIngress,
  Edgecontainer_ClusterSystemAddonsConfigIngress_GetTypes,
} from "./Edgecontainer_ClusterSystemAddonsConfigIngress";

export interface Edgecontainer_ClusterSystemAddonsConfig {
  /*
Config for the Ingress add-on which allows customers to create an Ingress
object to manage external access to the servers in a cluster. The add-on
consists of istiod and istio-ingress.
Structure is documented below.
*/
  Ingress?: Edgecontainer_ClusterSystemAddonsConfigIngress;
}

export function Edgecontainer_ClusterSystemAddonsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Ingress",
      "Config for the Ingress add-on which allows customers to create an Ingress\nobject to manage external access to the servers in a cluster. The add-on\nconsists of istiod and istio-ingress.\nStructure is documented below.",
      Edgecontainer_ClusterSystemAddonsConfigIngress_GetTypes(),
      false,
      false,
    ),
  ];
}
