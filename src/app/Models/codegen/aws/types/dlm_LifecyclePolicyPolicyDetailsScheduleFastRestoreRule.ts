import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule {
  // The Availability Zones in which to enable fast snapshot restore.
  availabilityZones?: Array<string>;

  //
  count?: number;

  //
  interval?: number;

  //
  intervalUnit?: string;
}

export function dlm_LifecyclePolicyPolicyDetailsScheduleFastRestoreRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "intervalUnit",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "The Availability Zones in which to enable fast snapshot restore.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "count", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
