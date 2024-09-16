import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface recaptcha_EnterpriseKeyWafSettings {
  // Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS
  wafFeature?: string;

  // The WAF service that uses this key. Possible values: CA, FASTLY
  wafService?: string;
}

export function recaptcha_EnterpriseKeyWafSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'wafFeature',
      'Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'wafService',
      'The WAF service that uses this key. Possible values: CA, FASTLY',
      () => [],
      true,
      true,
    ),
  ];
}
