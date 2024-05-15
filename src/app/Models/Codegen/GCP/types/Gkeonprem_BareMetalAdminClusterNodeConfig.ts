import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalAdminClusterNodeConfig {
  /*
The maximum number of pods a node can run. The size of the CIDR range
assigned to the node will be derived from this parameter.
*/
  MaxPodsPerNode?: number;
}

export function Gkeonprem_BareMetalAdminClusterNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxPodsPerNode",
      "The maximum number of pods a node can run. The size of the CIDR range\nassigned to the node will be derived from this parameter.",
      [],
      false,
      false,
    ),
  ];
}
