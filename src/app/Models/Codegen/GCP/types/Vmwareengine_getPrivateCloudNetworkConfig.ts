import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_getPrivateCloudNetworkConfig {
  // Management CIDR used by VMware management appliances.
  ManagementCidr?: string;

  /*
The IP address layout version of the management IP address range.
Possible versions include:
- managementIpAddressLayoutVersion=1: Indicates the legacy IP address layout used by some existing private clouds. This is no longer supported for new private clouds
as it does not support all features.
- managementIpAddressLayoutVersion=2: Indicates the latest IP address layout
used by all newly created private clouds. This version supports all current features.
*/
  ManagementIpAddressLayoutVersion?: number;

  /*
The relative resource name of the VMware Engine network attached to the private cloud.
Specify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
where {project} can either be a project number or a project ID.
*/
  VmwareEngineNetwork?: string;

  /*
The canonical name of the VMware Engine network in
the form: projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
*/
  VmwareEngineNetworkCanonical?: string;

  // DNS Server IP of the Private Cloud.
  DnsServerIp?: string;
}

export function Vmwareengine_getPrivateCloudNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ManagementCidr",
      "Management CIDR used by VMware management appliances.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ManagementIpAddressLayoutVersion",
      "The IP address layout version of the management IP address range.\nPossible versions include:\n* managementIpAddressLayoutVersion=1: Indicates the legacy IP address layout used by some existing private clouds. This is no longer supported for new private clouds\nas it does not support all features.\n* managementIpAddressLayoutVersion=2: Indicates the latest IP address layout\nused by all newly created private clouds. This version supports all current features.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VmwareEngineNetwork",
      "The relative resource name of the VMware Engine network attached to the private cloud.\nSpecify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}\nwhere {project} can either be a project number or a project ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VmwareEngineNetworkCanonical",
      "The canonical name of the VMware Engine network in\nthe form: projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DnsServerIp",
      "DNS Server IP of the Private Cloud.",
      [],
      true,
      false,
    ),
  ];
}
