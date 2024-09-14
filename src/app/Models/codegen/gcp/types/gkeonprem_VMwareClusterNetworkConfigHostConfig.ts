import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gkeonprem_VMwareClusterNetworkConfigHostConfig {
  /*
DNS search domains.

<a name="nested_control_plane_v2_config"></a>The `control_plane_v2_config` block supports:
*/
  dnsSearchDomains?: Array<string>;

  // DNS servers.
  dnsServers?: Array<string>;

  // NTP servers.
  ntpServers?: Array<string>;
}

export function gkeonprem_VMwareClusterNetworkConfigHostConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dnsSearchDomains",
      'DNS search domains.\n\n<a name="nested_control_plane_v2_config"></a>The `control_plane_v2_config` block supports:',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dnsServers",
      "DNS servers.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ntpServers",
      "NTP servers.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
