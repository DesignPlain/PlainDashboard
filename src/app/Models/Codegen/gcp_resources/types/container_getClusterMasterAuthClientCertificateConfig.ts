import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterMasterAuthClientCertificateConfig {
  // Whether client certificate authorization is enabled for this cluster.
  issueClientCertificate?: boolean;
}

export function container_getClusterMasterAuthClientCertificateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "issueClientCertificate",
      "Whether client certificate authorization is enabled for this cluster.",
      [],
      true,
      false,
    ),
  ];
}
