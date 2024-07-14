import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface evidently_ProjectDataDeliveryCloudwatchLogs {
  /*
The name of the log group where the project stores evaluation events.

The `s3_destination` block supports the following arguments:
*/
  logGroup?: string;
}

export function evidently_ProjectDataDeliveryCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroup",
      "The name of the log group where the project stores evaluation events.\n\nThe `s3_destination` block supports the following arguments:",
      [],
      false,
      false,
    ),
  ];
}
