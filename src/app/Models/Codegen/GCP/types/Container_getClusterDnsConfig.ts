import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterDnsConfig {
  // Which in-cluster DNS provider should be used.
  clusterDns?: string;

  // The suffix used for all cluster service records.
  clusterDnsDomain?: string;

  // The scope of access to cluster DNS records.
  clusterDnsScope?: string;
}

export function container_getClusterDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clusterDns",
      "Which in-cluster DNS provider should be used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterDnsDomain",
      "The suffix used for all cluster service records.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterDnsScope",
      "The scope of access to cluster DNS records.",
      [],
      true,
      false,
    ),
  ];
}
