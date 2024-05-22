import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface connect_PhoneNumberStatus {
  // The status message.
  message?: string;

  // The status of the phone number. Valid Values: `CLAIMED` | `IN_PROGRESS` | `FAILED`.
  status?: string;
}

export function connect_PhoneNumberStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "message",
      "The status message.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "The status of the phone number. Valid Values: `CLAIMED` | `IN_PROGRESS` | `FAILED`.",
      [],
      false,
      false,
    ),
  ];
}
