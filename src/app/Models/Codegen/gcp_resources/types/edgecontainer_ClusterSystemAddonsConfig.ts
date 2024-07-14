import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  edgecontainer_ClusterSystemAddonsConfigIngress,
  edgecontainer_ClusterSystemAddonsConfigIngress_GetTypes,
} from "./edgecontainer_ClusterSystemAddonsConfigIngress";

export interface edgecontainer_ClusterSystemAddonsConfig {
  /*
Config for the Ingress add-on which allows customers to create an Ingress
object to manage external access to the servers in a cluster. The add-on
consists of istiod and istio-ingress.
Structure is documented below.
*/
  ingress?: edgecontainer_ClusterSystemAddonsConfigIngress;
}

export function edgecontainer_ClusterSystemAddonsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ingress",
      "Config for the Ingress add-on which allows customers to create an Ingress\nobject to manage external access to the servers in a cluster. The add-on\nconsists of istiod and istio-ingress.\nStructure is documented below.",
      edgecontainer_ClusterSystemAddonsConfigIngress_GetTypes(),
      false,
      false,
    ),
  ];
}
