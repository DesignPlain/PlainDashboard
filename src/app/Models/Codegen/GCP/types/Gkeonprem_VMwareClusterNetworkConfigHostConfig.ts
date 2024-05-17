import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterNetworkConfigHostConfig {
  /*
DNS search domains.

<a name="nested_control_plane_v2_config"></a>The `control_plane_v2_config` block supports:
*/
  DnsSearchDomains?: Array<string>;

  // DNS servers.
  DnsServers?: Array<string>;

  // NTP servers.
  NtpServers?: Array<string>;
}

export function Gkeonprem_VMwareClusterNetworkConfigHostConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "DnsSearchDomains",
      'DNS search domains.\n\n<a name="nested_control_plane_v2_config"></a>The `control_plane_v2_config` block supports:',
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DnsServers",
      "DNS servers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NtpServers",
      "NTP servers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
