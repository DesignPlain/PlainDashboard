import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getRegionInstanceGroupInstanceNamedPort,
  compute_getRegionInstanceGroupInstanceNamedPort_GetTypes,
} from "./compute_getRegionInstanceGroupInstanceNamedPort";

export interface compute_getRegionInstanceGroupInstance {
  // URL to the instance.
  instance?: string;

  // List of named ports in the group, as a list of resources, each containing:
  namedPorts?: Array<compute_getRegionInstanceGroupInstanceNamedPort>;

  // String description of current state of the instance.
  status?: string;
}

export function compute_getRegionInstanceGroupInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "namedPorts",
      "List of named ports in the group, as a list of resources, each containing:",
      compute_getRegionInstanceGroupInstanceNamedPort_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "String description of current state of the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instance",
      "URL to the instance.",
      [],
      true,
      false,
    ),
  ];
}
