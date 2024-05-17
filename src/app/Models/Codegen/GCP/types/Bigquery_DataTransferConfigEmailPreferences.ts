import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_DataTransferConfigEmailPreferences {
  // If true, email notifications will be sent on transfer run failures.
  EnableFailureEmail?: boolean;
}

export function Bigquery_DataTransferConfigEmailPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableFailureEmail",
      "If true, email notifications will be sent on transfer run failures.",
      [],
      true,
      false,
    ),
  ];
}
