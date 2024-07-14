import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_PerInstanceConfigPreservedStateExternalIpIpAddress,
  compute_PerInstanceConfigPreservedStateExternalIpIpAddress_GetTypes,
} from "./compute_PerInstanceConfigPreservedStateExternalIpIpAddress";

export interface compute_PerInstanceConfigPreservedStateExternalIp {
  /*
Ip address representation
Structure is documented below.
*/
  ipAddress?: compute_PerInstanceConfigPreservedStateExternalIpIpAddress;

  /*
These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted.
Default value is `NEVER`.
Possible values are: `NEVER`, `ON_PERMANENT_INSTANCE_DELETION`.
*/
  autoDelete?: string;

  // The identifier for this object. Format specified above.
  interfaceName?: string;
}

export function compute_PerInstanceConfigPreservedStateExternalIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ipAddress",
      "Ip address representation\nStructure is documented below.",
      compute_PerInstanceConfigPreservedStateExternalIpIpAddress_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "autoDelete",
      "These stateful IPs will never be released during autohealing, update or VM instance recreate operations. This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted.\nDefault value is `NEVER`.\nPossible values are: `NEVER`, `ON_PERMANENT_INSTANCE_DELETION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "interfaceName",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
