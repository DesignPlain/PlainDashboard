import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_InstanceGroupManagerVersionTargetSize,
  Compute_InstanceGroupManagerVersionTargetSize_GetTypes,
} from "./Compute_InstanceGroupManagerVersionTargetSize";

export interface Compute_InstanceGroupManagerVersion {
  // The full URL to an instance template from which all new instances of this version will be created. It is recommended to reference instance templates through their unique id (`self_link_unique` attribute).
  InstanceTemplate?: string;

  // Version name.
  Name?: string;

  /*
The number of instances calculated as a fixed number or a percentage depending on the settings. Structure is documented below.

> Exactly one `version` you specify must not have a `target_size` specified. During a rolling update, the instance group manager will fulfill the `target_size`
constraints of every other `version`, and any remaining instances will be provisioned with the version where `target_size` is unset.
*/
  TargetSize?: Compute_InstanceGroupManagerVersionTargetSize;
}

export function Compute_InstanceGroupManagerVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Version name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TargetSize",
      "The number of instances calculated as a fixed number or a percentage depending on the settings. Structure is documented below.\n\n> Exactly one `version` you specify must not have a `target_size` specified. During a rolling update, the instance group manager will fulfill the `target_size`\nconstraints of every other `version`, and any remaining instances will be provisioned with the version where `target_size` is unset.",
      Compute_InstanceGroupManagerVersionTargetSize_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceTemplate",
      "The full URL to an instance template from which all new instances of this version will be created. It is recommended to reference instance templates through their unique id (`self_link_unique` attribute).",
      [],
      true,
      false,
    ),
  ];
}
