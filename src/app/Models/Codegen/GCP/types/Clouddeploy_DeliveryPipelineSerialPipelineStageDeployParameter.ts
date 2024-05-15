import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter {
  // Required. Values are deploy parameters in key-value pairs.
  Values?: Map<string, string>;

  // Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
  MatchTargetLabels?: Map<string, string>;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Values",
      "Required. Values are deploy parameters in key-value pairs.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "MatchTargetLabels",
      "Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
