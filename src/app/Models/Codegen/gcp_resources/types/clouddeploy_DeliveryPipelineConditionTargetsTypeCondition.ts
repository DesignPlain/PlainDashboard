import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface clouddeploy_DeliveryPipelineConditionTargetsTypeCondition {
  // Human readable error message.
  errorDetails?: string;

  // True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.
  status?: boolean;
}

export function clouddeploy_DeliveryPipelineConditionTargetsTypeCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "errorDetails",
      "Human readable error message.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "status",
      "True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.",
      [],
      false,
      false,
    ),
  ];
}
