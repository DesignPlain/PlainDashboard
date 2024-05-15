import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionPerInstanceConfigPreservedStateExternalIpIpAddress,
  Compute_RegionPerInstanceConfigPreservedStateExternalIpIpAddress_GetTypes,
} from "./Compute_RegionPerInstanceConfigPreservedStateExternalIpIpAddress";

export interface Compute_RegionPerInstanceConfigPreservedStateExternalIp {
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
  IpAddress?: Compute_RegionPerInstanceConfigPreservedStateExternalIpIpAddress;
}

export function Compute_RegionPerInstanceConfigPreservedStateExternalIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IpAddress",
      "Ip address representation\nStructure is documented below.",
      Compute_RegionPerInstanceConfigPreservedStateExternalIpIpAddress_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "AutoDelete",
      "These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted.\nDefault value is `NEVER`.\nPossible values are: `NEVER`, `ON_PERMANENT_INSTANCE_DELETION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InterfaceName",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
