import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_ClusterMasterAuthClientCertificateConfig,
  Container_ClusterMasterAuthClientCertificateConfig_GetTypes,
} from "./Container_ClusterMasterAuthClientCertificateConfig";

export interface Container_ClusterMasterAuth {
  // Base64 encoded public certificate that is the root of trust for the cluster.
  ClusterCaCertificate?: string;

  // Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.
  ClientCertificate?: string;

  // Whether client certificate authorization is enabled for this cluster.  For example:
  ClientCertificateConfig?: Container_ClusterMasterAuthClientCertificateConfig;

  // Base64 encoded private key used by clients to authenticate to the cluster endpoint.
  ClientKey?: string;
}

export function Container_ClusterMasterAuth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClusterCaCertificate",
      "Base64 encoded public certificate that is the root of trust for the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientCertificate",
      "Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ClientCertificateConfig",
      "Whether client certificate authorization is enabled for this cluster.  For example:",
      Container_ClusterMasterAuthClientCertificateConfig_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ClientKey",
      "Base64 encoded private key used by clients to authenticate to the cluster endpoint.",
      [],
      false,
      false,
    ),
  ];
}
