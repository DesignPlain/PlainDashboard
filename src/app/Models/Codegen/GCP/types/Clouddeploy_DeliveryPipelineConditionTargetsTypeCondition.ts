import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_DeliveryPipelineConditionTargetsTypeCondition {
  // Human readable error message.
  ErrorDetails?: string;

  // True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.
  Status?: boolean;
}

export function Clouddeploy_DeliveryPipelineConditionTargetsTypeCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ErrorDetails",
      "Human readable error message.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Status",
      "True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.",
      [],
      false,
      false,
    ),
  ];
}
