import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_InstanceGroupManagerVersionTargetSize,
  compute_InstanceGroupManagerVersionTargetSize_GetTypes,
} from "./compute_InstanceGroupManagerVersionTargetSize";

export interface compute_InstanceGroupManagerVersion {
  // The full URL to an instance template from which all new instances of this version will be created. It is recommended to reference instance templates through their unique id (`self_link_unique` attribute).
  instanceTemplate?: string;

  // Version name.
  name?: string;

  /*
The number of instances calculated as a fixed number or a percentage depending on the settings. Structure is documented below.

> Exactly one `version` you specify must not have a `target_size` specified. During a rolling update, the instance group manager will fulfill the `target_size`
constraints of every other `version`, and any remaining instances will be provisioned with the version where `target_size` is unset.
*/
  targetSize?: compute_InstanceGroupManagerVersionTargetSize;
}

export function compute_InstanceGroupManagerVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceTemplate",
      "The full URL to an instance template from which all new instances of this version will be created. It is recommended to reference instance templates through their unique id (`self_link_unique` attribute).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Version name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "targetSize",
      "The number of instances calculated as a fixed number or a percentage depending on the settings. Structure is documented below.\n\n> Exactly one `version` you specify must not have a `target_size` specified. During a rolling update, the instance group manager will fulfill the `target_size`\nconstraints of every other `version`, and any remaining instances will be provisioned with the version where `target_size` is unset.",
      compute_InstanceGroupManagerVersionTargetSize_GetTypes(),
      false,
      false,
    ),
  ];
}
