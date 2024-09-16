import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp {
  // Hostname of the machine. VM's name will be used if this field is empty.
  hostname?: string;

  // IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
  ip?: string;
}

export function gkeonprem_VMwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'hostname',
      "Hostname of the machine. VM's name will be used if this field is empty.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ip',
      'IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).',
      () => [],
      false,
      false,
    ),
  ];
}
