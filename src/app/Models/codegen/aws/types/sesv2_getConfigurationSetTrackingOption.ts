import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sesv2_getConfigurationSetTrackingOption {
  // The domain to use for tracking open and click events.
  customRedirectDomain?: string;
}

export function sesv2_getConfigurationSetTrackingOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'customRedirectDomain',
      'The domain to use for tracking open and click events.',
      () => [],
      true,
      false,
    ),
  ];
}
