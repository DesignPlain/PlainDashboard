import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_ClusterNodeTypeConfig {
  // The identifier for this object. Format specified above.
  NodeTypeId?: string;

  /*
Customized number of cores available to each node of the type.
This number must always be one of `nodeType.availableCustomCoreCounts`.
If zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.
Once the customer is created then corecount cannot be changed.
*/
  CustomCoreCount?: number;

  // The number of nodes of this type in the cluster.
  NodeCount?: number;
}

export function Vmwareengine_ClusterNodeTypeConfig_GetTypes(): DynamicUIProps[] {
  return [
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
      "Customized number of cores available to each node of the type.\nThis number must always be one of `nodeType.availableCustomCoreCounts`.\nIf zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.\nOnce the customer is created then corecount cannot be changed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NodeCount",
      "The number of nodes of this type in the cluster.",
      [],
      true,
      false,
    ),
  ];
}
