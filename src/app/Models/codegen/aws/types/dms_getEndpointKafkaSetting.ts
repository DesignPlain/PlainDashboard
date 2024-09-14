import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dms_getEndpointKafkaSetting {
  //
  sslCaCertificateArn?: string;

  //
  sslClientCertificateArn?: string;

  //
  includeTableAlterOperations?: boolean;

  //
  noHexPrefix?: boolean;

  //
  saslPassword?: string;

  //
  topic?: string;

  //
  broker?: string;

  //
  includeTransactionDetails?: boolean;

  //
  saslUsername?: string;

  //
  sslClientKeyArn?: string;

  //
  partitionIncludeSchemaTable?: boolean;

  //
  securityProtocol?: string;

  //
  sslClientKeyPassword?: string;

  //
  includeControlDetails?: boolean;

  //
  includeNullAndEmpty?: boolean;

  //
  includePartitionValue?: boolean;

  //
  messageFormat?: string;

  //
  messageMaxBytes?: number;
}

export function dms_getEndpointKafkaSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "messageMaxBytes",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "broker", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "securityProtocol",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includePartitionValue",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageFormat",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "saslUsername",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeNullAndEmpty",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslCaCertificateArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslClientCertificateArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "saslPassword",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeTransactionDetails",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeTableAlterOperations",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noHexPrefix",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "topic", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "sslClientKeyPassword",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sslClientKeyArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "partitionIncludeSchemaTable",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "includeControlDetails",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
