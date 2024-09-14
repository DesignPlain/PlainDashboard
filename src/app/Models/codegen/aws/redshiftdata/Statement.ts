import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  redshiftdata_StatementParameter,
  redshiftdata_StatementParameter_GetTypes,
} from "../types/redshiftdata_StatementParameter";

export interface StatementArgs {
  // The database user name.
  dbUser?: string;

  // The name or ARN of the secret that enables access to the database.
  secretArn?: string;

  /*
The SQL statement text to run.

The following arguments are optional:
*/
  sql?: string;

  // The serverless workgroup name. This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.
  workgroupName?: string;

  // The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials.
  clusterIdentifier?: string;

  // The name of the database.
  database?: string;

  //
  parameters?: Array<redshiftdata_StatementParameter>;

  // The name of the SQL statement. You can name the SQL statement when you create it to identify the query.
  statementName?: string;

  // A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statement runs.
  withEvent?: boolean;
}
export class Statement extends DS_Resource {
  // The name or ARN of the secret that enables access to the database.
  public secretArn?: string;

  /*
The SQL statement text to run.

The following arguments are optional:
*/
  public sql?: string;

  // A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statement runs.
  public withEvent?: boolean;

  // The serverless workgroup name. This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.
  public workgroupName?: string;

  // The name of the database.
  public database?: string;

  // The database user name.
  public dbUser?: string;

  //
  public parameters?: Array<redshiftdata_StatementParameter>;

  // The name of the SQL statement. You can name the SQL statement when you create it to identify the query.
  public statementName?: string;

  // The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials.
  public clusterIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "statementName",
        "The name of the SQL statement. You can name the SQL statement when you create it to identify the query.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "withEvent",
        "A value that indicates whether to send an event to the Amazon EventBridge event bus after the SQL statement runs.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "secretArn",
        "The name or ARN of the secret that enables access to the database.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sql",
        "The SQL statement text to run.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workgroupName",
        "The serverless workgroup name. This parameter is required when connecting to a serverless workgroup and authenticating using either Secrets Manager or temporary credentials.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "The cluster identifier. This parameter is required when connecting to a cluster and authenticating using either Secrets Manager or temporary credentials.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "database",
        "The name of the database.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dbUser",
        "The database user name.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "",
        () => redshiftdata_StatementParameter_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
