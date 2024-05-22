import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSetRowLevelPermissionDataSet {
  // ARN of the dataset that contains permissions for RLS.
  arn?: string;

  // User or group rules associated with the dataset that contains permissions for RLS.
  formatVersion?: string;

  // Namespace associated with the dataset that contains permissions for RLS.
  namespace?: string;

  // Type of permissions to use when interpreting the permissions for RLS. Valid values are `GRANT_ACCESS` and `DENY_ACCESS`.
  permissionPolicy?: string;

  // Status of the row-level security permission dataset. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`.
  status?: string;
}

export function quicksight_DataSetRowLevelPermissionDataSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status of the row-level security permission dataset. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the dataset that contains permissions for RLS.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "formatVersion",
      "User or group rules associated with the dataset that contains permissions for RLS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Namespace associated with the dataset that contains permissions for RLS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "permissionPolicy",
      "Type of permissions to use when interpreting the permissions for RLS. Valid values are `GRANT_ACCESS` and `DENY_ACCESS`.",
      [],
      true,
      false,
    ),
  ];
}
