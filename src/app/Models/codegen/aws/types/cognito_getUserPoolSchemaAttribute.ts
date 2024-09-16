import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cognito_getUserPoolSchemaAttributeStringAttributeConstraint,
  cognito_getUserPoolSchemaAttributeStringAttributeConstraint_GetTypes,
} from './cognito_getUserPoolSchemaAttributeStringAttributeConstraint';
import {
  cognito_getUserPoolSchemaAttributeNumberAttributeConstraint,
  cognito_getUserPoolSchemaAttributeNumberAttributeConstraint_GetTypes,
} from './cognito_getUserPoolSchemaAttributeNumberAttributeConstraint';

export interface cognito_getUserPoolSchemaAttribute {
  /*
- Whether the attribute is required during user registration.
- number_attribute_constraints - Constraints for numeric attributes.
- string_attribute_constraints - Constraints for string attributes.
*/
  required?: boolean;

  //
  stringAttributeConstraints?: Array<cognito_getUserPoolSchemaAttributeStringAttributeConstraint>;

  // - Data type of the attribute (e.g., string, number).
  attributeDataType?: string;

  // - Whether the attribute is for developer use only.
  developerOnlyAttribute?: boolean;

  // - Whether the attribute can be changed after user creation.
  mutable?: boolean;

  // - Name of the attribute.
  name?: string;

  //
  numberAttributeConstraints?: Array<cognito_getUserPoolSchemaAttributeNumberAttributeConstraint>;
}

export function cognito_getUserPoolSchemaAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'attributeDataType',
      '- Data type of the attribute (e.g.,\u00a0string,\u00a0number).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'developerOnlyAttribute',
      '- Whether the attribute is for developer use only.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'mutable',
      '- Whether the attribute can be changed after user creation.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      '- Name of the attribute.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'numberAttributeConstraints',
      '',
      () =>
        cognito_getUserPoolSchemaAttributeNumberAttributeConstraint_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'required',
      '- Whether the attribute is required during user registration.\n* number_attribute_constraints\u00a0- Constraints for numeric attributes.\n* string_attribute_constraints\u00a0- Constraints for string attributes.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'stringAttributeConstraints',
      '',
      () =>
        cognito_getUserPoolSchemaAttributeStringAttributeConstraint_GetTypes(),
      true,
      false,
    ),
  ];
}
