import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cognito_UserPoolSchemaStringAttributeConstraints,
  cognito_UserPoolSchemaStringAttributeConstraints_GetTypes,
} from './cognito_UserPoolSchemaStringAttributeConstraints';
import {
  cognito_UserPoolSchemaNumberAttributeConstraints,
  cognito_UserPoolSchemaNumberAttributeConstraints_GetTypes,
} from './cognito_UserPoolSchemaNumberAttributeConstraints';

export interface cognito_UserPoolSchema {
  // Configuration block for the constraints for an attribute of the number type. Detailed below.
  numberAttributeConstraints?: cognito_UserPoolSchemaNumberAttributeConstraints;

  // Whether a user pool attribute is required. If the attribute is required and the user does not provide a value, registration or sign-in will fail.
  required?: boolean;

  // Constraints for an attribute of the string type. Detailed below.
  stringAttributeConstraints?: cognito_UserPoolSchemaStringAttributeConstraints;

  // Attribute data type. Must be one of `Boolean`, `Number`, `String`, `DateTime`.
  attributeDataType?: string;

  // Whether the attribute type is developer only.
  developerOnlyAttribute?: boolean;

  // Whether the attribute can be changed once it has been created.
  mutable?: boolean;

  // Name of the attribute.
  name?: string;
}

export function cognito_UserPoolSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'developerOnlyAttribute',
      'Whether the attribute type is developer only.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'mutable',
      'Whether the attribute can be changed once it has been created.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the attribute.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'numberAttributeConstraints',
      'Configuration block for the constraints for an attribute of the number type. Detailed below.',
      () => cognito_UserPoolSchemaNumberAttributeConstraints_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'required',
      'Whether a user pool attribute is required. If the attribute is required and the user does not provide a value, registration or sign-in will fail.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'stringAttributeConstraints',
      'Constraints for an attribute of the string type. Detailed below.',
      () => cognito_UserPoolSchemaStringAttributeConstraints_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'attributeDataType',
      'Attribute data type. Must be one of `Boolean`, `Number`, `String`, `DateTime`.',
      () => [],
      true,
      false,
    ),
  ];
}
