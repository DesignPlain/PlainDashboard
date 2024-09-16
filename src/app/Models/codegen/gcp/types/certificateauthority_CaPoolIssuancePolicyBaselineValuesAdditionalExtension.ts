import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId,
  certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId_GetTypes,
} from './certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId';

export interface certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension {
  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  critical?: boolean;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  objectId?: certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId;

  // The value of this X.509 extension. A base64-encoded string.
  value?: string;
}

export function certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value of this X.509 extension. A base64-encoded string.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'critical',
      'Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'objectId',
      'Describes values that are relevant in a CA certificate.\nStructure is documented below.',
      () =>
        certificateauthority_CaPoolIssuancePolicyBaselineValuesAdditionalExtensionObjectId_GetTypes(),
      true,
      false,
    ),
  ];
}
