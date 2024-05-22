import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_DataTransferConfigEmailPreferences {
  // If true, email notifications will be sent on transfer run failures.
  enableFailureEmail?: boolean;
}

export function bigquery_DataTransferConfigEmailPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableFailureEmail",
      "If true, email notifications will be sent on transfer run failures.",
      [],
      true,
      false,
    ),
  ];
}
