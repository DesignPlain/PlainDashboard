import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getInstanceGroupManagerVersionTargetSize,
  Compute_getInstanceGroupManagerVersionTargetSize_GetTypes,
} from "./Compute_getInstanceGroupManagerVersionTargetSize";

export interface Compute_getInstanceGroupManagerVersion {
  // The full URL to an instance template from which all new instances of this version will be created.
  InstanceTemplate?: string;

  // The name of the instance group. Either `name` or `self_link` must be provided.
  Name?: string;

  // The number of instances calculated as a fixed number or a percentage depending on the settings.
  TargetSizes?: Array<Compute_getInstanceGroupManagerVersionTargetSize>;
}

export function Compute_getInstanceGroupManagerVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InstanceTemplate",
      "The full URL to an instance template from which all new instances of this version will be created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the instance group. Either `name` or `self_link` must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TargetSizes",
      "The number of instances calculated as a fixed number or a percentage depending on the settings.",
      Compute_getInstanceGroupManagerVersionTargetSize_GetTypes(),
      true,
      false,
    ),
  ];
}
