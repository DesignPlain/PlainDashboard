import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bigquery_ConnectionCloudSpanner {
  /*
(Optional, Deprecated)
If the serverless analytics service should be used to read data from Cloud Spanner. `useParallelism` must be set when using serverless analytics.

> --Warning:-- `useServerlessAnalytics` is deprecated and will be removed in a future major release. Use `useDataBoost` instead.
*/
  useServerlessAnalytics?: boolean;

  // Cloud Spanner database in the form `project/instance/database'.
  database?: string;

  // Cloud Spanner database role for fine-grained access control. The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as `SELECT` and `INSERT`. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.
  databaseRole?: string;

  // Allows setting max parallelism per query when executing on Spanner independent compute resources. If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. `useParallelism` and `useDataBoost` must be set when setting max parallelism.
  maxParallelism?: number;

  // If set, the request will be executed via Spanner independent compute resources. `use_parallelism` must be set when using data boost.
  useDataBoost?: boolean;

  // If parallelism should be used when reading from Cloud Spanner.
  useParallelism?: boolean;
}

export function bigquery_ConnectionCloudSpanner_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "useDataBoost",
      "If set, the request will be executed via Spanner independent compute resources. `use_parallelism` must be set when using data boost.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useParallelism",
      "If parallelism should be used when reading from Cloud Spanner.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useServerlessAnalytics",
      "(Optional, Deprecated)\nIf the serverless analytics service should be used to read data from Cloud Spanner. `useParallelism` must be set when using serverless analytics.\n\n> **Warning:** `useServerlessAnalytics` is deprecated and will be removed in a future major release. Use `useDataBoost` instead.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "database",
      "Cloud Spanner database in the form `project/instance/database'.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseRole",
      "Cloud Spanner database role for fine-grained access control. The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as `SELECT` and `INSERT`. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxParallelism",
      "Allows setting max parallelism per query when executing on Spanner independent compute resources. If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. `useParallelism` and `useDataBoost` must be set when setting max parallelism.",
      () => [],
      false,
      false,
    ),
  ];
}
