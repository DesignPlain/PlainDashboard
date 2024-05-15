import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionInstanceGroupManagerVersionTargetSize {
  // , The number of instances which are managed for this version. Conflicts with `percent`.
  Fixed?: number;

  /*
, The number of instances (calculated as percentage) which are managed for this version. Conflicts with `fixed`.
Note that when using `percent`, rounding will be in favor of explicitly set `target_size` values; a managed instance group with 2 instances and 2 `version`s,
one of which has a `target_size.percent` of `60` will create 2 instances of that `version`.
*/
  Percent?: number;
}

export function Compute_RegionInstanceGroupManagerVersionTargetSize_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Fixed",
      ", The number of instances which are managed for this version. Conflicts with `percent`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Percent",
      ", The number of instances (calculated as percentage) which are managed for this version. Conflicts with `fixed`.\nNote that when using `percent`, rounding will be in favor of explicitly set `target_size` values; a managed instance group with 2 instances and 2 `version`s,\none of which has a `target_size.percent` of `60` will create 2 instances of that `version`.",
      [],
      false,
      false,
    ),
  ];
}
