import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterDnsConfig {
  // The suffix used for all cluster service records.
  clusterDnsDomain?: string;

  // The scope of access to cluster DNS records. `DNS_SCOPE_UNSPECIFIED` (default) or `CLUSTER_SCOPE` or `VPC_SCOPE`.
  clusterDnsScope?: string;

  // Which in-cluster DNS provider should be used. `PROVIDER_UNSPECIFIED` (default) or `PLATFORM_DEFAULT` or `CLOUD_DNS`.
  clusterDns?: string;
}

export function container_ClusterDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clusterDns",
      "Which in-cluster DNS provider should be used. `PROVIDER_UNSPECIFIED` (default) or `PLATFORM_DEFAULT` or `CLOUD_DNS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterDnsDomain",
      "The suffix used for all cluster service records.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterDnsScope",
      "The scope of access to cluster DNS records. `DNS_SCOPE_UNSPECIFIED` (default) or `CLUSTER_SCOPE` or `VPC_SCOPE`.",
      [],
      false,
      false,
    ),
  ];
}
