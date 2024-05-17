import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterMasterAuthClientCertificateConfig {
  // Whether client certificate authorization is enabled for this cluster.
  IssueClientCertificate?: boolean;
}

export function Container_getClusterMasterAuthClientCertificateConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "IssueClientCertificate",
      "Whether client certificate authorization is enabled for this cluster.",
      [],
      true,
      false,
    ),
  ];
}
