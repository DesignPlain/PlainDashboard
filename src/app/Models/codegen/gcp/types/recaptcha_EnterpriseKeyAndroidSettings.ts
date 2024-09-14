import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface recaptcha_EnterpriseKeyAndroidSettings {
  // Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
  allowedPackageNames?: Array<string>;

  // If set to true, it means allowed_package_names will not be enforced.
  allowAllPackageNames?: boolean;
}

export function recaptcha_EnterpriseKeyAndroidSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedPackageNames",
      "Android package names of apps allowed to use the key. Example: 'com.companyname.appname'",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowAllPackageNames",
      "If set to true, it means allowed_package_names will not be enforced.",
      () => [],
      false,
      false,
    ),
  ];
}
