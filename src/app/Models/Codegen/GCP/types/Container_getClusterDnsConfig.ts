import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterDnsConfig {
  // Which in-cluster DNS provider should be used.
  ClusterDns?: string;

  // The suffix used for all cluster service records.
  ClusterDnsDomain?: string;

  // The scope of access to cluster DNS records.
  ClusterDnsScope?: string;
}

export function Container_getClusterDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClusterDnsScope",
      "The scope of access to cluster DNS records.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterDns",
      "Which in-cluster DNS provider should be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterDnsDomain",
      "The suffix used for all cluster service records.",
      [],
      true,
      false,
    ),
  ];
}
