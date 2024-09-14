import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_VirtualNodeSpecServiceDiscoveryDns {
  // DNS host name for your virtual node.
  hostname?: string;

  // The preferred IP version that this virtual node uses. Valid values: `IPv6_PREFERRED`, `IPv4_PREFERRED`, `IPv4_ONLY`, `IPv6_ONLY`.
  ipPreference?: string;

  // The DNS response type for the virtual node. Valid values: `LOADBALANCER`, `ENDPOINTS`.
  responseType?: string;
}

export function appmesh_VirtualNodeSpecServiceDiscoveryDns_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostname",
      "DNS host name for your virtual node.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipPreference",
      "The preferred IP version that this virtual node uses. Valid values: `IPv6_PREFERRED`, `IPv4_PREFERRED`, `IPv4_ONLY`, `IPv6_ONLY`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "responseType",
      "The DNS response type for the virtual node. Valid values: `LOADBALANCER`, `ENDPOINTS`.",
      () => [],
      false,
      false,
    ),
  ];
}
