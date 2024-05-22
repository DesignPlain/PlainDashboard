import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  container_getClusterMasterAuthClientCertificateConfig,
  container_getClusterMasterAuthClientCertificateConfig_GetTypes,
} from "./container_getClusterMasterAuthClientCertificateConfig";

export interface container_getClusterMasterAuth {
  // Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.
  clientCertificate?: string;

  // Whether client certificate authorization is enabled for this cluster.
  clientCertificateConfigs?: Array<container_getClusterMasterAuthClientCertificateConfig>;

  // Base64 encoded private key used by clients to authenticate to the cluster endpoint.
  clientKey?: string;

  // Base64 encoded public certificate that is the root of trust for the cluster.
  clusterCaCertificate?: string;
}

export function container_getClusterMasterAuth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientCertificate",
      "Base64 encoded public certificate used by clients to authenticate to the cluster endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "clientCertificateConfigs",
      "Whether client certificate authorization is enabled for this cluster.",
      container_getClusterMasterAuthClientCertificateConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientKey",
      "Base64 encoded private key used by clients to authenticate to the cluster endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clusterCaCertificate",
      "Base64 encoded public certificate that is the root of trust for the cluster.",
      [],
      true,
      false,
    ),
  ];
}
