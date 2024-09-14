import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface composer_EnvironmentConfigDatabaseConfig {
  // Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.
  machineType?: string;

  // Optional. Cloud SQL database preferred zone.
  zone?: string;
}

export function composer_EnvironmentConfigDatabaseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      "Optional. Cloud SQL database preferred zone.",
      () => [],
      false,
      true,
    ),
  ];
}
