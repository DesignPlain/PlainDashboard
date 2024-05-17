import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterClusterAutoscalingResourceLimit {
  // Maximum amount of the resource in the cluster.
  Maximum?: number;

  // Minimum amount of the resource in the cluster.
  Minimum?: number;

  // The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.
  ResourceType?: string;
}

export function Container_getClusterClusterAutoscalingResourceLimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Maximum",
      "Maximum amount of the resource in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Minimum",
      "Minimum amount of the resource in the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResourceType",
      "The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.",
      [],
      true,
      false,
    ),
  ];
}
