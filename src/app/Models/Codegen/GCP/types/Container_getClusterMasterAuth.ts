import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterMasterAuthClientCertificateConfig,
  Container_getClusterMasterAuthClientCertificateConfig_GetTypes,
} from "./Container_getClusterMasterAuthClientCertificateConfig";

export interface Container_getClusterMasterAuth {
  // Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.
  ClientCertificate?: string;

  // Whether client certificate authorization is enabled for this cluster.
  ClientCertificateConfigs?: Array<Container_getClusterMasterAuthClientCertificateConfig>;

  // Base64 encoded private key used by clients to authenticate to the cluster endpoint.
  ClientKey?: string;

  // Base64 encoded public certificate that is the root of trust for the cluster.
  ClusterCaCertificate?: string;
}

export function Container_getClusterMasterAuth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClientCertificate",
      "Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ClientCertificateConfigs",
      "Whether client certificate authorization is enabled for this cluster.",
      Container_getClusterMasterAuthClientCertificateConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientKey",
      "Base64 encoded private key used by clients to authenticate to the cluster endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClusterCaCertificate",
      "Base64 encoded public certificate that is the root of trust for the cluster.",
      [],
      true,
      false,
    ),
  ];
}
