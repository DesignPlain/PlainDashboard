import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun {
  // Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
  automaticTrafficControl?: boolean;

  // Optional. A list of tags that are added to the canary revision while the canary phase is in progress.
  canaryRevisionTags?: Array<string>;

  // Optional. A list of tags that are added to the prior revision while the canary phase is in progress.
  priorRevisionTags?: Array<string>;

  // Optional. A list of tags that are added to the final stable revision when the stable phase is applied.
  stableRevisionTags?: Array<string>;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "automaticTrafficControl",
      "Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "canaryRevisionTags",
      "Optional. A list of tags that are added to the canary revision while the canary phase is in progress.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "priorRevisionTags",
      "Optional. A list of tags that are added to the prior revision while the canary phase is in progress.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "stableRevisionTags",
      "Optional. A list of tags that are added to the final stable revision when the stable phase is applied.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
