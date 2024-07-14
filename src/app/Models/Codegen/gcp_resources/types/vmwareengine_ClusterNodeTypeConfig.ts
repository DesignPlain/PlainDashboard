import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vmwareengine_ClusterNodeTypeConfig {
  /*
Customized number of cores available to each node of the type.
This number must always be one of `nodeType.availableCustomCoreCounts`.
If zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.
Once the customer is created then corecount cannot be changed.
*/
  customCoreCount?: number;

  // The number of nodes of this type in the cluster.
  nodeCount?: number;

  // The identifier for this object. Format specified above.
  nodeTypeId?: string;
}

export function vmwareengine_ClusterNodeTypeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "nodeTypeId",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "customCoreCount",
      "Customized number of cores available to each node of the type.\nThis number must always be one of `nodeType.availableCustomCoreCounts`.\nIf zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.\nOnce the customer is created then corecount cannot be changed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "nodeCount",
      "The number of nodes of this type in the cluster.",
      [],
      true,
      false,
    ),
  ];
}
