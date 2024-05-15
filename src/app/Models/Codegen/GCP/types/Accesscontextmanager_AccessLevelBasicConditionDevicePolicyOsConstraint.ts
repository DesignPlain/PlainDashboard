import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint {
  /*
The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".
*/
  MinimumVersion?: string;

  /*
The operating system type of the device.
Possible values are: `OS_UNSPECIFIED`, `DESKTOP_MAC`, `DESKTOP_WINDOWS`, `DESKTOP_LINUX`, `DESKTOP_CHROME_OS`, `ANDROID`, `IOS`.
*/
  OsType?: string;

  // If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.
  RequireVerifiedChromeOs?: boolean;
}

export function Accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "RequireVerifiedChromeOs",
      "If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinimumVersion",
      'The minimum allowed OS version. If not set, any version\nof this OS satisfies the constraint.\nFormat: "major.minor.patch" such as "10.5.301", "9.2.1".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OsType",
      "The operating system type of the device.\nPossible values are: `OS_UNSPECIFIED`, `DESKTOP_MAC`, `DESKTOP_WINDOWS`, `DESKTOP_LINUX`, `DESKTOP_CHROME_OS`, `ANDROID`, `IOS`.",
      [],
      true,
      false,
    ),
  ];
}
