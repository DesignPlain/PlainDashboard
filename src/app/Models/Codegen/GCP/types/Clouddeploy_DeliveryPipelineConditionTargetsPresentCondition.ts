import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_DeliveryPipelineConditionTargetsPresentCondition {
  // True if there aren't any missing Targets.
  Status?: boolean;

  // Output only. Most recent time at which the pipeline was updated.
  UpdateTime?: string;

  // The list of Target names that are missing. For example, projects/{project_id}/locations/{location_name}/targets/{target_name}.
  MissingTargets?: Array<string>;
}

export function Clouddeploy_DeliveryPipelineConditionTargetsPresentCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "MissingTargets",
      "The list of Target names that are missing. For example, projects/{project_id}/locations/{location_name}/targets/{target_name}.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Status",
      "True if there aren't any missing Targets.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "Output only. Most recent time at which the pipeline was updated.",
      [],
      false,
      false,
    ),
  ];
}
