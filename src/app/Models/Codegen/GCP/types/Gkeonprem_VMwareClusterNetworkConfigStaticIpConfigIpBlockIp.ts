import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp {
  // Hostname of the machine. VM's name will be used if this field is empty.
  Hostname?: string;

  // IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
  Ip?: string;
}

export function Gkeonprem_VMwareClusterNetworkConfigStaticIpConfigIpBlockIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Hostname",
      "Hostname of the machine. VM's name will be used if this field is empty.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Ip",
      "IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).",
      [],
      true,
      false,
    ),
  ];
}
