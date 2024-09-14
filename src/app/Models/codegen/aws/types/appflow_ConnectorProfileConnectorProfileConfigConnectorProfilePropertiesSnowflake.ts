import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake {
  // AWS Region of the Snowflake account.
  region?: string;

  // Name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: `<Database>.<Schema>.<Stage Name>`.
  stage?: string;

  // The name of the Snowflake warehouse.
  warehouse?: string;

  // The name of the account.
  accountName?: string;

  //
  bucketName?: string;

  //
  bucketPrefix?: string;

  //
  privateLinkServiceName?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateLinkServiceName",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "AWS Region of the Snowflake account.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stage",
      "Name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: `<Database>.<Schema>.<Stage Name>`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "warehouse",
      "The name of the Snowflake warehouse.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accountName",
      "The name of the account.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
