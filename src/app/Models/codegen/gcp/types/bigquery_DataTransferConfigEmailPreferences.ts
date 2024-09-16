import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bigquery_DataTransferConfigEmailPreferences {
  // If true, email notifications will be sent on transfer run failures.
  enableFailureEmail?: boolean;
}

export function bigquery_DataTransferConfigEmailPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableFailureEmail',
      'If true, email notifications will be sent on transfer run failures.',
      () => [],
      true,
      false,
    ),
  ];
}
