import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getLaunchConfigurationMetadataOption {
  // State of the metadata service: `enabled`, `disabled`.
  httpEndpoint?: string;

  // The desired HTTP PUT response hop limit for instance metadata requests.
  httpPutResponseHopLimit?: number;

  // If session tokens are required: `optional`, `required`.
  httpTokens?: string;
}

export function ec2_getLaunchConfigurationMetadataOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'httpEndpoint',
      'State of the metadata service: `enabled`, `disabled`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'httpPutResponseHopLimit',
      'The desired HTTP PUT response hop limit for instance metadata requests.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'httpTokens',
      'If session tokens are required: `optional`, `required`.',
      () => [],
      true,
      false,
    ),
  ];
}
