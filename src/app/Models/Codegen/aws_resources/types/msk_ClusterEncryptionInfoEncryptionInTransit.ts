import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface msk_ClusterEncryptionInfoEncryptionInTransit {
  // Encryption setting for data in transit between clients and brokers. Valid values: `TLS`, `TLS_PLAINTEXT`, and `PLAINTEXT`. Default value is `TLS`.
  clientBroker?: string;

  // Whether data communication among broker nodes is encrypted. Default value: `true`.
  inCluster?: boolean;
}

export function msk_ClusterEncryptionInfoEncryptionInTransit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clientBroker",
      "Encryption setting for data in transit between clients and brokers. Valid values: `TLS`, `TLS_PLAINTEXT`, and `PLAINTEXT`. Default value is `TLS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "inCluster",
      "Whether data communication among broker nodes is encrypted. Default value: `true`.",
      [],
      false,
      true,
    ),
  ];
}
