import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datazone_FormTypeModel {
  /*
Smithy document that indicates the model of the API. Must be between the lengths 1 and 100,000 and be encoded as a smithy document.

The following arguments are optional:
*/
  smithy?: string;
}

export function datazone_FormTypeModel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'smithy',
      'Smithy document that indicates the model of the API. Must be between the lengths 1 and 100,000 and be encoded as a smithy document.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
  ];
}
