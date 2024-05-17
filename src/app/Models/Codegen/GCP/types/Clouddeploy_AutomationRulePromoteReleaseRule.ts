import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_AutomationRulePromoteReleaseRule {
  // Optional. The starting phase of the rollout created by this operation. Default to the first phase.
  DestinationPhase?: string;

  // Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: - The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. - "@next", the next target in the promotion sequence.
  DestinationTargetId?: string;

  // Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.
  Id?: string;

  // Optional. How long the release need to be paused until being promoted to the next target.
  Wait?: string;
}

export function Clouddeploy_AutomationRulePromoteReleaseRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DestinationTargetId",
      'Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Wait",
      "Optional. How long the release need to be paused until being promoted to the next target.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DestinationPhase",
      "Optional. The starting phase of the rollout created by this operation. Default to the first phase.",
      [],
      false,
      false,
    ),
  ];
}
