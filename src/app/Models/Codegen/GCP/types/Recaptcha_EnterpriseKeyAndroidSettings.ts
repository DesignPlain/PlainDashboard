import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Recaptcha_EnterpriseKeyAndroidSettings {
  // If set to true, it means allowed_package_names will not be enforced.
  AllowAllPackageNames?: boolean;

  // Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
  AllowedPackageNames?: Array<string>;
}

export function Recaptcha_EnterpriseKeyAndroidSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedPackageNames",
      "Android package names of apps allowed to use the key. Example: 'com.companyname.appname'",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowAllPackageNames",
      "If set to true, it means allowed_package_names will not be enforced.",
      [],
      false,
      false,
    ),
  ];
}
