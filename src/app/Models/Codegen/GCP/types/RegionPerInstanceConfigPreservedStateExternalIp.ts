import { RegionPerInstanceConfigPreservedStateExternalIpIpAddress } from "./RegionPerInstanceConfigPreservedStateExternalIpIpAddress";

export interface RegionPerInstanceConfigPreservedStateExternalIp {
  /*
These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted.
Default value is `NEVER`.
Possible values are: `NEVER`, `ON_PERMANENT_INSTANCE_DELETION`.
*/
  AutoDelete?: string;

  // The identifier for this object. Format specified above.
  InterfaceName?: string;

  /*
Ip address representation
Structure is documented below.
*/
  IpAddress?: RegionPerInstanceConfigPreservedStateExternalIpIpAddress;
}
