import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface evidently_LaunchScheduledSplitsConfigStepSegmentOverride {
  // Specifies a number indicating the order to use to evaluate segment overrides, if there are more than one. Segment overrides with lower numbers are evaluated first.
  evaluationOrder?: number;

  // The name or ARN of the segment to use.
  segment?: string;

  // The traffic allocation percentages among the feature variations to assign to this segment. This is a set of key-value pairs. The keys are variation names. The values represent the amount of traffic to allocate to that variation for this segment. This is expressed in thousandths of a percent, so a weight of 50000 represents 50%!o(MISSING)f traffic.
  weights?: Map<string, number>;
}

export function evidently_LaunchScheduledSplitsConfigStepSegmentOverride_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "evaluationOrder",
      "Specifies a number indicating the order to use to evaluate segment overrides, if there are more than one. Segment overrides with lower numbers are evaluated first.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "segment",
      "The name or ARN of the segment to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "weights",
      "The traffic allocation percentages among the feature variations to assign to this segment. This is a set of key-value pairs. The keys are variation names. The values represent the amount of traffic to allocate to that variation for this segment. This is expressed in thousandths of a percent, so a weight of 50000 represents 50% of traffic.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
