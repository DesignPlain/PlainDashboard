import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface monitoring_UptimeCheckConfigHttpCheckAcceptedResponseStatusCode {
  /*
A class of status codes to accept.
Possible values are: `STATUS_CLASS_1XX`, `STATUS_CLASS_2XX`, `STATUS_CLASS_3XX`, `STATUS_CLASS_4XX`, `STATUS_CLASS_5XX`, `STATUS_CLASS_ANY`.
*/
  statusClass?: string;

  // A status code to accept.
  statusValue?: number;
}

export function monitoring_UptimeCheckConfigHttpCheckAcceptedResponseStatusCode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "statusClass",
      "A class of status codes to accept.\nPossible values are: `STATUS_CLASS_1XX`, `STATUS_CLASS_2XX`, `STATUS_CLASS_3XX`, `STATUS_CLASS_4XX`, `STATUS_CLASS_5XX`, `STATUS_CLASS_ANY`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "statusValue",
      "A status code to accept.",
      () => [],
      false,
      false,
    ),
  ];
}
