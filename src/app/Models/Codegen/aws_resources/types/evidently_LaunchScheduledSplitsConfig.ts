import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  evidently_LaunchScheduledSplitsConfigStep,
  evidently_LaunchScheduledSplitsConfigStep_GetTypes,
} from "./evidently_LaunchScheduledSplitsConfigStep";

export interface evidently_LaunchScheduledSplitsConfig {
  // One or up to six blocks that define the traffic allocation percentages among the feature variations during each step of the launch. This also defines the start time of each step. Detailed below.
  steps?: Array<evidently_LaunchScheduledSplitsConfigStep>;
}

export function evidently_LaunchScheduledSplitsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "steps",
      "One or up to six blocks that define the traffic allocation percentages among the feature variations during each step of the launch. This also defines the start time of each step. Detailed below.",
      evidently_LaunchScheduledSplitsConfigStep_GetTypes(),
      true,
      false,
    ),
  ];
}
