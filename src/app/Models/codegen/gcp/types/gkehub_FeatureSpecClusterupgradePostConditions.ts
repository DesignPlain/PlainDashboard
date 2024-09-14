import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkehub_FeatureSpecClusterupgradePostConditions {
  // Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.
  soaking?: string;
}

export function gkehub_FeatureSpecClusterupgradePostConditions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "soaking",
      'Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.',
      () => [],
      true,
      false,
    ),
  ];
}
