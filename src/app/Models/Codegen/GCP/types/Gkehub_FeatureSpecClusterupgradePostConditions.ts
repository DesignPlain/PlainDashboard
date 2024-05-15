import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FeatureSpecClusterupgradePostConditions {
  // Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.
  Soaking?: string;
}

export function Gkehub_FeatureSpecClusterupgradePostConditions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Soaking",
      'Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.',
      [],
      true,
      false,
    ),
  ];
}
