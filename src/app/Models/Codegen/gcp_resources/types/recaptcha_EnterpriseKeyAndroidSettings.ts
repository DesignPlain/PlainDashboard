import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface recaptcha_EnterpriseKeyAndroidSettings {
  // If set to true, it means allowed_package_names will not be enforced.
  allowAllPackageNames?: boolean;

  // Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
  allowedPackageNames?: Array<string>;
}

export function recaptcha_EnterpriseKeyAndroidSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedPackageNames",
      "Android package names of apps allowed to use the key. Example: 'com.companyname.appname'",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowAllPackageNames",
      "If set to true, it means allowed_package_names will not be enforced.",
      [],
      false,
      false,
    ),
  ];
}
