export interface AccessLevelBasicConditionDevicePolicyOsConstraint {
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