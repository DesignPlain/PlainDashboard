import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getRegionInstanceGroupInstanceNamedPort,
  Compute_getRegionInstanceGroupInstanceNamedPort_GetTypes,
} from "./Compute_getRegionInstanceGroupInstanceNamedPort";

export interface Compute_getRegionInstanceGroupInstance {
  // URL to the instance.
  Instance?: string;

  // List of named ports in the group, as a list of resources, each containing:
  NamedPorts?: Array<Compute_getRegionInstanceGroupInstanceNamedPort>;

  // String description of current state of the instance.
  Status?: string;
}

export function Compute_getRegionInstanceGroupInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "NamedPorts",
      "List of named ports in the group, as a list of resources, each containing:",
      Compute_getRegionInstanceGroupInstanceNamedPort_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Status",
      "String description of current state of the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Instance",
      "URL to the instance.",
      [],
      true,
      false,
    ),
  ];
}
