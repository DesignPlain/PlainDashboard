import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake {
  // A name for the associated Amazon S3 bucket.
  bucketName?: string;

  // The object key for the destination bucket in which Amazon AppFlow places the files.
  bucketPrefix?: string;

  // The SAPOData Private Link service name to be used for private data transfers.
  privateLinkServiceName?: string;

  // AWS Region of the Snowflake account.
  region?: string;

  // Name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: `<Database>.<Schema>.<Stage Name>`.
  stage?: string;

  // The name of the Snowflake warehouse.
  warehouse?: string;

  // The name of the account.
  accountName?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSnowflake_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "A name for the associated Amazon S3 bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "The object key for the destination bucket in which Amazon AppFlow places the files.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateLinkServiceName",
      "The SAPOData Private Link service name to be used for private data transfers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "AWS Region of the Snowflake account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stage",
      "Name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: `<Database>.<Schema>.<Stage Name>`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "warehouse",
      "The name of the Snowflake warehouse.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accountName",
      "The name of the account.",
      [],
      false,
      false,
    ),
  ];
}
