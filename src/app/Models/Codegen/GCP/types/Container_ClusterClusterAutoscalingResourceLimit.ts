import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterClusterAutoscalingResourceLimit {
  // Maximum amount of the resource in the cluster.
  Maximum?: number;

  // Minimum amount of the resource in the cluster.
  Minimum?: number;

  /*
The type of the resource. For example, `cpu` and
`memory`.  See the [guide to using Node Auto-Provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)
for a list of types.
*/
  ResourceType?: string;
}

export function Container_ClusterClusterAutoscalingResourceLimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Maximum",
      "Maximum amount of the resource in the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Minimum",
      "Minimum amount of the resource in the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourceType",
      "The type of the resource. For example, `cpu` and\n`memory`.  See the [guide to using Node Auto-Provisioning](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)\nfor a list of types.",
      [],
      true,
      false,
    ),
  ];
}
