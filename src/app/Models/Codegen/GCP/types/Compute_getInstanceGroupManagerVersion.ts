import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getInstanceGroupManagerVersionTargetSize,
  compute_getInstanceGroupManagerVersionTargetSize_GetTypes,
} from "./compute_getInstanceGroupManagerVersionTargetSize";

export interface compute_getInstanceGroupManagerVersion {
  // The full URL to an instance template from which all new instances of this version will be created.
  instanceTemplate?: string;

  // The name of the instance group. Either `name` or `self_link` must be provided.
  name?: string;

  // The number of instances calculated as a fixed number or a percentage depending on the settings.
  targetSizes?: Array<compute_getInstanceGroupManagerVersionTargetSize>;
}

export function compute_getInstanceGroupManagerVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "targetSizes",
      "The number of instances calculated as a fixed number or a percentage depending on the settings.",
      compute_getInstanceGroupManagerVersionTargetSize_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceTemplate",
      "The full URL to an instance template from which all new instances of this version will be created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the instance group. Either `name` or `self_link` must be provided.",
      [],
      true,
      false,
    ),
  ];
}
