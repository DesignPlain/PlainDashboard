import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_RegionInstanceGroupManagerVersionTargetSize,
  compute_RegionInstanceGroupManagerVersionTargetSize_GetTypes,
} from "./compute_RegionInstanceGroupManagerVersionTargetSize";

export interface compute_RegionInstanceGroupManagerVersion {
  /*
The number of instances calculated as a fixed number or a percentage depending on the settings. Structure is documented below.

> Exactly one `version` you specify must not have a `target_size` specified. During a rolling update, the instance group manager will fulfill the `target_size`
constraints of every other `version`, and any remaining instances will be provisioned with the version where `target_size` is unset.
*/
  targetSize?: compute_RegionInstanceGroupManagerVersionTargetSize;

  // The full URL to an instance template from which all new instances of this version will be created.
  instanceTemplate?: string;

  // Version name.
  name?: string;
}

export function compute_RegionInstanceGroupManagerVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "targetSize",
      "The number of instances calculated as a fixed number or a percentage depending on the settings. Structure is documented below.\n\n> Exactly one `version` you specify must not have a `target_size` specified. During a rolling update, the instance group manager will fulfill the `target_size`\nconstraints of every other `version`, and any remaining instances will be provisioned with the version where `target_size` is unset.",
      () => compute_RegionInstanceGroupManagerVersionTargetSize_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceTemplate",
      "The full URL to an instance template from which all new instances of this version will be created.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Version name.",
      () => [],
      false,
      false,
    ),
  ];
}
