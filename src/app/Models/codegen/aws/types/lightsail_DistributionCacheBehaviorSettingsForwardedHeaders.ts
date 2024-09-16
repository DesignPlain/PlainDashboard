import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lightsail_DistributionCacheBehaviorSettingsForwardedHeaders {
  // The specific headers to forward to your distribution's origin.
  headersAllowLists?: Array<string>;

  // The headers that you want your distribution to forward to your origin and base caching on.
  option?: string;
}

export function lightsail_DistributionCacheBehaviorSettingsForwardedHeaders_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'headersAllowLists',
      "The specific headers to forward to your distribution's origin.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'option',
      'The headers that you want your distribution to forward to your origin and base caching on.',
      () => [],
      false,
      false,
    ),
  ];
}
