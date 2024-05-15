import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_PrivateCloudManagementClusterNodeTypeConfig {
  /*
Customized number of cores available to each node of the type.
This number must always be one of `nodeType.availableCustomCoreCounts`.
If zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.
This cannot be changed once the PrivateCloud is created.

- - -
*/
  CustomCoreCount?: number;

  // The number of nodes of this type in the cluster.
  NodeCount?: number;

  // The identifier for this object. Format specified above.
  NodeTypeId?: string;
}

export function Vmwareengine_PrivateCloudManagementClusterNodeTypeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "NodeCount",
      "The number of nodes of this type in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NodeTypeId",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "CustomCoreCount",
      "Customized number of cores available to each node of the type.\nThis number must always be one of `nodeType.availableCustomCoreCounts`.\nIf zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.\nThis cannot be changed once the PrivateCloud is created.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
