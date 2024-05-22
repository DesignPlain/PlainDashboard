import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  mwaa_EnvironmentLastUpdatedError,
  mwaa_EnvironmentLastUpdatedError_GetTypes,
} from "./mwaa_EnvironmentLastUpdatedError";

export interface mwaa_EnvironmentLastUpdated {
  /*
The Created At date of the MWAA Environment
- `logging_configuration[0].<LOG_CONFIGURATION_TYPE>[0].cloud_watch_log_group_arn` - Provides the ARN for the CloudWatch group where the logs will be published
*/
  createdAt?: string;

  //
  errors?: Array<mwaa_EnvironmentLastUpdatedError>;

  // The status of the Amazon MWAA Environment
  status?: string;
}

export function mwaa_EnvironmentLastUpdated_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the Amazon MWAA Environment",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createdAt",
      "The Created At date of the MWAA Environment\n* `logging_configuration[0].<LOG_CONFIGURATION_TYPE>[0].cloud_watch_log_group_arn` - Provides the ARN for the CloudWatch group where the logs will be published",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "errors",
      "",
      mwaa_EnvironmentLastUpdatedError_GetTypes(),
      false,
      false,
    ),
  ];
}
