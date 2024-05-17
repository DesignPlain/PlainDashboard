import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Recaptcha_EnterpriseKeyWafSettings {
  // Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS
  WafFeature?: string;

  // The WAF service that uses this key. Possible values: CA, FASTLY
  WafService?: string;
}

export function Recaptcha_EnterpriseKeyWafSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "WafFeature",
      "Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "WafService",
      "The WAF service that uses this key. Possible values: CA, FASTLY",
      [],
      true,
      true,
    ),
  ];
}
