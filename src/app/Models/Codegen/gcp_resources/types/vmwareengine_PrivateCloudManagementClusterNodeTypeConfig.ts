import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vmwareengine_PrivateCloudManagementClusterNodeTypeConfig {
  /*
Customized number of cores available to each node of the type.
This number must always be one of `nodeType.availableCustomCoreCounts`.
If zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.
This cannot be changed once the PrivateCloud is created.

- - -
*/
  customCoreCount?: number;

  // The number of nodes of this type in the cluster.
  nodeCount?: number;

  // The identifier for this object. Format specified above.
  nodeTypeId?: string;
}

export function vmwareengine_PrivateCloudManagementClusterNodeTypeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "customCoreCount",
      "Customized number of cores available to each node of the type.\nThis number must always be one of `nodeType.availableCustomCoreCounts`.\nIf zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.\nThis cannot be changed once the PrivateCloud is created.\n\n- - -",
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
    new DynamicUIProps(
      InputType.String,
      "nodeTypeId",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
