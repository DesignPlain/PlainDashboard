import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift {
  //
  bucketName?: string;

  //
  bucketPrefix?: string;

  // The unique ID that's assigned to an Amazon Redshift cluster.
  clusterIdentifier?: string;

  // ARN of the IAM role that permits AppFlow to access the database through Data API.
  dataApiRoleArn?: string;

  // The name of an Amazon Redshift database.
  databaseName?: string;

  // The JDBC URL of the Amazon Redshift cluster.
  databaseUrl?: string;

  // ARN of the IAM role.
  roleArn?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesRedshift_GetTypes(): DynamicUIProps[] {
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
      "clusterIdentifier",
      "The unique ID that's assigned to an Amazon Redshift cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataApiRoleArn",
      "ARN of the IAM role that permits AppFlow to access the database through Data API.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "The name of an Amazon Redshift database.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseUrl",
      "The JDBC URL of the Amazon Redshift cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "ARN of the IAM role.",
      () => [],
      true,
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
