import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_UptimeCheckConfigHttpCheckAcceptedResponseStatusCode {
  /*
A class of status codes to accept.
Possible values are: `STATUS_CLASS_1XX`, `STATUS_CLASS_2XX`, `STATUS_CLASS_3XX`, `STATUS_CLASS_4XX`, `STATUS_CLASS_5XX`, `STATUS_CLASS_ANY`.
*/
  StatusClass?: string;

  // A status code to accept.
  StatusValue?: number;
}

export function Monitoring_UptimeCheckConfigHttpCheckAcceptedResponseStatusCode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StatusClass",
      "A class of status codes to accept.\nPossible values are: `STATUS_CLASS_1XX`, `STATUS_CLASS_2XX`, `STATUS_CLASS_3XX`, `STATUS_CLASS_4XX`, `STATUS_CLASS_5XX`, `STATUS_CLASS_ANY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "StatusValue",
      "A status code to accept.",
      [],
      false,
      false,
    ),
  ];
}
