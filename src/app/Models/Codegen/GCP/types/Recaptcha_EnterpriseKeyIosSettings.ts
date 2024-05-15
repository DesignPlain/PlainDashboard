import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Recaptcha_EnterpriseKeyIosSettings {
  // If set to true, it means allowed_bundle_ids will not be enforced.
  AllowAllBundleIds?: boolean;

  // iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
  AllowedBundleIds?: Array<string>;
}

export function Recaptcha_EnterpriseKeyIosSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowAllBundleIds",
      "If set to true, it means allowed_bundle_ids will not be enforced.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowedBundleIds",
      "iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
