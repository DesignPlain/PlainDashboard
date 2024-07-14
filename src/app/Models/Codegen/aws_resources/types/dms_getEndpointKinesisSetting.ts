import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dms_getEndpointKinesisSetting {
  //
  includeControlDetails?: boolean;

  //
  includePartitionValue?: boolean;

  //
  includeTransactionDetails?: boolean;

  //
  serviceAccessRoleArn?: string;

  //
  includeNullAndEmpty?: boolean;

  //
  includeTableAlterOperations?: boolean;

  //
  messageFormat?: string;

  //
  partitionIncludeSchemaTable?: boolean;

  //
  streamArn?: string;
}

export function dms_getEndpointKinesisSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "includePartitionValue",
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
    new DynamicUIProps(InputType.String, "messageFormat", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "partitionIncludeSchemaTable",
      "",
      [],
      true,
      false,
    ),
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
      "includeTransactionDetails",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccessRoleArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "streamArn", "", [], true, false),
  ];
}
