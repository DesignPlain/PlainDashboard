import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_DataTransferConfigSensitiveParams {
  /*
The Secret Access Key of the AWS account transferring data from.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  SecretAccessKey?: string;
}

export function Bigquery_DataTransferConfigSensitiveParams_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SecretAccessKey",
      "The Secret Access Key of the AWS account transferring data from.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      true,
      false,
    ),
  ];
}
