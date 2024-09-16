import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pipes_PipeTargetParametersRedshiftDataParameters {
  // List of SQL statements text to run, each of maximum length of 100,000.
  sqls?: Array<string>;

  // The name of the SQL statement. You can name the SQL statement when you create it to identify the query.
  statementName?: string;

  // Indicates whether to send an event back to EventBridge after the SQL statement runs.
  withEvent?: boolean;

  // The name of the database. Required when authenticating using temporary credentials.
  database?: string;

  // The database user name. Required when authenticating using temporary credentials.
  dbUser?: string;

  // The name or ARN of the secret that enables access to the database. Required when authenticating using Secrets Manager.
  secretManagerArn?: string;
}

export function pipes_PipeTargetParametersRedshiftDataParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'statementName',
      'The name of the SQL statement. You can name the SQL statement when you create it to identify the query.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'withEvent',
      'Indicates whether to send an event back to EventBridge after the SQL statement runs.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'database',
      'The name of the database. Required when authenticating using temporary credentials.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dbUser',
      'The database user name. Required when authenticating using temporary credentials.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secretManagerArn',
      'The name or ARN of the secret that enables access to the database. Required when authenticating using Secrets Manager.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sqls',
      'List of SQL statements text to run, each of maximum length of 100,000.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
