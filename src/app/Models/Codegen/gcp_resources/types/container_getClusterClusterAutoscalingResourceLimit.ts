import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterClusterAutoscalingResourceLimit {
  // Maximum amount of the resource in the cluster.
  maximum?: number;

  // Minimum amount of the resource in the cluster.
  minimum?: number;

  // The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.
  resourceType?: string;
}

export function container_getClusterClusterAutoscalingResourceLimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximum",
      "Maximum amount of the resource in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minimum",
      "Minimum amount of the resource in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.",
      [],
      true,
      false,
    ),
  ];
}
