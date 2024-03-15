import { FlexibleAppVersionResourcesVolume } from "./FlexibleAppVersionResourcesVolume";

export interface FlexibleAppVersionResources {
  // Memory (GB) needed.
  MemoryGb?: number;

  /*
List of ports, or port pairs, to forward from the virtual machine to the application container.
Structure is documented below.
*/
  Volumes?: Array<FlexibleAppVersionResourcesVolume>;

  // Number of CPU cores needed.
  Cpu?: number;

  // Disk size (GB) needed.
  DiskGb?: number;
}
