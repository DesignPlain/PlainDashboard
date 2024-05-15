import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsAdvancedMachineFeatures {
  // The number of threads per core. The value of this flag can be 1 or 2. To disable SMT, set this flag to 1. Only available in Cloud SQL for SQL Server instances. See [smt](https://cloud.google.com/sql/docs/sqlserver/create-instance#smt-create-instance) for more details.
  ThreadsPerCore?: number;
}

export function Sql_DatabaseInstanceSettingsAdvancedMachineFeatures_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ThreadsPerCore",
      "The number of threads per core. The value of this flag can be 1 or 2. To disable SMT, set this flag to 1. Only available in Cloud SQL for SQL Server instances. See [smt](https://cloud.google.com/sql/docs/sqlserver/create-instance#smt-create-instance) for more details.",
      [],
      false,
      false,
    ),
  ];
}
