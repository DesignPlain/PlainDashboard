import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identityplatform_ConfigBlockingFunctionsTrigger {
  // The identifier for this object. Format specified above.
  eventType?: string;

  // HTTP URI trigger for the Cloud Function.
  functionUri?: string;

  /*
(Output)
When the trigger was changed.
*/
  updateTime?: string;
}

export function identityplatform_ConfigBlockingFunctionsTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'updateTime',
      '(Output)\nWhen the trigger was changed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'eventType',
      'The identifier for this object. Format specified above.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'functionUri',
      'HTTP URI trigger for the Cloud Function.',
      () => [],
      true,
      false,
    ),
  ];
}
