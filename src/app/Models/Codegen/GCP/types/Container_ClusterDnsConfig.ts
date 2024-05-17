import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterDnsConfig {
  // Which in-cluster DNS provider should be used. `PROVIDER_UNSPECIFIED` (default) or `PLATFORM_DEFAULT` or `CLOUD_DNS`.
  ClusterDns?: string;

  // The suffix used for all cluster service records.
  ClusterDnsDomain?: string;

  // The scope of access to cluster DNS records. `DNS_SCOPE_UNSPECIFIED` (default) or `CLUSTER_SCOPE` or `VPC_SCOPE`.
  ClusterDnsScope?: string;
}

export function Container_ClusterDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClusterDns",
      "Which in-cluster DNS provider should be used. `PROVIDER_UNSPECIFIED` (default) or `PLATFORM_DEFAULT` or `CLOUD_DNS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterDnsDomain",
      "The suffix used for all cluster service records.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterDnsScope",
      "The scope of access to cluster DNS records. `DNS_SCOPE_UNSPECIFIED` (default) or `CLUSTER_SCOPE` or `VPC_SCOPE`.",
      [],
      false,
      false,
    ),
  ];
}
