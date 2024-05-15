import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint,
  Accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint_GetTypes,
} from "./Accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint";

export interface Accesscontextmanager_AccessLevelBasicConditionDevicePolicy {
  /*
Whether or not screenlock is required for the DevicePolicy
to be true. Defaults to false.
*/
  RequireScreenLock?: boolean;

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
  OsConstraints?: Array<Accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint>;

  // Whether the device needs to be approved by the customer admin.
  RequireAdminApproval?: boolean;

  // Whether the device needs to be corp owned.
  RequireCorpOwned?: boolean;
}

export function Accesscontextmanager_AccessLevelBasicConditionDevicePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "RequireScreenLock",
      "Whether or not screenlock is required for the DevicePolicy\nto be true. Defaults to false.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowedDeviceManagementLevels",
      "A list of allowed device management levels.\nAn empty list allows all management levels.\nEach value may be one of: `MANAGEMENT_UNSPECIFIED`, `NONE`, `BASIC`, `COMPLETE`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AllowedEncryptionStatuses",
      "A list of allowed encryptions statuses.\nAn empty list allows all statuses.\nEach value may be one of: `ENCRYPTION_UNSPECIFIED`, `ENCRYPTION_UNSUPPORTED`, `UNENCRYPTED`, `ENCRYPTED`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OsConstraints",
      "A list of allowed OS versions.\nAn empty list allows all types and all versions.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelBasicConditionDevicePolicyOsConstraint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RequireAdminApproval",
      "Whether the device needs to be approved by the customer admin.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RequireCorpOwned",
      "Whether the device needs to be corp owned.",
      [],
      false,
      false,
    ),
  ];
}
