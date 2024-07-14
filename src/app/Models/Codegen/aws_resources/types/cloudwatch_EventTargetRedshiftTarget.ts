import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudwatch_EventTargetRedshiftTarget {
  // The name of the database.
  database?: string;

  // The database user name.
  dbUser?: string;

  // The name or ARN of the secret that enables access to the database.
  secretsManagerArn?: string;

  // The SQL statement text to run.
  sql?: string;

  // The name of the SQL statement.
  statementName?: string;

  // Indicates whether to send an event back to EventBridge after the SQL statement runs.
  withEvent?: boolean;
}

export function cloudwatch_EventTargetRedshiftTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "statementName",
      "The name of the SQL statement.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "withEvent",
      "Indicates whether to send an event back to EventBridge after the SQL statement runs.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "database",
      "The name of the database.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dbUser",
      "The database user name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretsManagerArn",
      "The name or ARN of the secret that enables access to the database.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sql",
      "The SQL statement text to run.",
      [],
      false,
      false,
    ),
  ];
}
