import { RegionInstanceGroupManagerVersionTargetSize } from "./RegionInstanceGroupManagerVersionTargetSize";

export interface RegionInstanceGroupManagerVersion {
  // The full URL to an instance template from which all new instances of this version will be created.
  InstanceTemplate?: string;

  // Version name.
  Name?: string;

  /*
The number of instances calculated as a fixed number or a percentage depending on the settings. Structure is documented below.

> Exactly one `version` you specify must not have a `target_size` specified. During a rolling update, the instance group manager will fulfill the `target_size`
constraints of every other `version`, and any remaining instances will be provisioned with the version where `target_size` is unset.
*/
  TargetSize?: RegionInstanceGroupManagerVersionTargetSize;
}
