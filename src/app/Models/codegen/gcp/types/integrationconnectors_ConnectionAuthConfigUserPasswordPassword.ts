import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface integrationconnectors_ConnectionAuthConfigUserPasswordPassword {
  /*
The resource name of the secret version in the format,
format as: projects/-/secrets/-/versions/-.
*/
  secretVersion?: string;
}

export function integrationconnectors_ConnectionAuthConfigUserPasswordPassword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secretVersion',
      'The resource name of the secret version in the format,\nformat as: projects/*/secrets/*/versions/*.',
      () => [],
      true,
      false,
    ),
  ];
}
