import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ses_ConfigurationSetTrackingOptions {
  // Custom subdomain that is used to redirect email recipients to the Amazon SES event tracking domain.
  customRedirectDomain?: string;
}

export function ses_ConfigurationSetTrackingOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'customRedirectDomain',
      'Custom subdomain that is used to redirect email recipients to the Amazon SES event tracking domain.',
      () => [],
      false,
      false,
    ),
  ];
}
