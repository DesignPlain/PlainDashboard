import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lambda_CodeSigningConfigAllowedPublishers {
  // The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package.
  signingProfileVersionArns?: Array<string>;
}

export function lambda_CodeSigningConfigAllowedPublishers_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'signingProfileVersionArns',
      'The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
