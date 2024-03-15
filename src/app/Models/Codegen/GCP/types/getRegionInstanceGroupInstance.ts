import { getRegionInstanceGroupInstanceNamedPort } from "./getRegionInstanceGroupInstanceNamedPort";

export interface getRegionInstanceGroupInstance {
  // String description of current state of the instance.
  Status?: string;

  // URL to the instance.
  Instance?: string;

  // List of named ports in the group, as a list of resources, each containing:
  NamedPorts?: Array<getRegionInstanceGroupInstanceNamedPort>;
}
