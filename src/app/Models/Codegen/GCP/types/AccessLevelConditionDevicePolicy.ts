import { AccessLevelConditionDevicePolicyOsConstraint } from "./AccessLevelConditionDevicePolicyOsConstraint";

export interface AccessLevelConditionDevicePolicy {
  /*
A list of allowed device management levels.
An empty list allows all management levels.
Each value may be one of: `MANAGEMENT_UNSPECIFIED`, `NONE`, `BASIC`, `COMPLETE`.
*/
  AllowedDeviceManagementLevels?: Array<string>;

  /*
A list of allowed encryptions statuses.
An empty list allows all statuses.
Each value may be one of: `ENCRYPTION_UNSPECIFIED`, `ENCRYPTION_UNSUPPORTED`, `UNENCRYPTED`, `ENCRYPTED`.
*/
  AllowedEncryptionStatuses?: Array<string>;

  /*
A list of allowed OS versions.
An empty list allows all types and all versions.
Structure is documented below.
*/
  OsConstraints?: Array<AccessLevelConditionDevicePolicyOsConstraint>;

  // Whether the device needs to be approved by the customer admin.
  RequireAdminApproval?: boolean;

  // Whether the device needs to be corp owned.
  RequireCorpOwned?: boolean;

  /*
Whether or not screenlock is required for the DevicePolicy
to be true. Defaults to false.
*/
  RequireScreenLock?: boolean;
}
