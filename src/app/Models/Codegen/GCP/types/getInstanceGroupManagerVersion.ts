import { getInstanceGroupManagerVersionTargetSize } from "./getInstanceGroupManagerVersionTargetSize";

export interface getInstanceGroupManagerVersion {
  // The full URL to an instance template from which all new instances of this version will be created.
  InstanceTemplate?: string;

  // The name of the instance group. Either `name` or `self_link` must be provided.
  Name?: string;

  // The number of instances calculated as a fixed number or a percentage depending on the settings.
  TargetSizes?: Array<getInstanceGroupManagerVersionTargetSize>;
}
