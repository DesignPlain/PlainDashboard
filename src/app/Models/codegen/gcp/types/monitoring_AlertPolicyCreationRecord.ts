import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface monitoring_AlertPolicyCreationRecord {
  /*
(Output)
When the change occurred.
*/
  mutateTime?: string;

  /*
(Output)
The email address of the user making the change.
*/
  mutatedBy?: string;
}

export function monitoring_AlertPolicyCreationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mutateTime',
      '(Output)\nWhen the change occurred.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mutatedBy',
      '(Output)\nThe email address of the user making the change.',
      () => [],
      false,
      false,
    ),
  ];
}
