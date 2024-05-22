import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_getEndpointKafkaSetting {
  //
  messageMaxBytes?: number;

  //
  securityProtocol?: string;

  //
  sslCaCertificateArn?: string;

  //
  topic?: string;

  //
  includeControlDetails?: boolean;

  //
  includePartitionValue?: boolean;

  //
  partitionIncludeSchemaTable?: boolean;

  //
  saslUsername?: string;

  //
  sslClientKeyArn?: string;

  //
  sslClientKeyPassword?: string;

  //
  broker?: string;

  //
  includeNullAndEmpty?: boolean;

  //
  includeTableAlterOperations?: boolean;

  //
  includeTransactionDetails?: boolean;

  //
  sslClientCertificateArn?: string;

  //
  messageFormat?: string;

  //
  noHexPrefix?: boolean;

  //
  saslPassword?: string;
}

export function dms_getEndpointKafkaSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sslClientKeyPassword",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslClientCertificateArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "messageFormat", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "messageMaxBytes",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeNullAndEmpty",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeTableAlterOperations",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "saslPassword", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "includePartitionValue",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "noHexPrefix", "", [], true, false),
    new DynamicUIProps(InputType.String, "saslUsername", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "sslCaCertificateArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "topic", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "includeControlDetails",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "partitionIncludeSchemaTable",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslClientKeyArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "broker", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "includeTransactionDetails",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "securityProtocol",
      "",
      [],
      true,
      false,
    ),
  ];
}
