import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AmiLaunchPermissionArgs {
  // Name of the group for the launch permission. Valid values: `"all"`.
  group?: string;

  // ID of the AMI.
  imageId?: string;

  // ARN of an organization for the launch permission.
  organizationArn?: string;

  // ARN of an organizational unit for the launch permission.
  organizationalUnitArn?: string;

  // AWS account ID for the launch permission.
  accountId?: string;
}
export class AmiLaunchPermission extends DS_Resource {
  // AWS account ID for the launch permission.
  public accountId?: string;

  // Name of the group for the launch permission. Valid values: `"all"`.
  public group?: string;

  // ID of the AMI.
  public imageId?: string;

  // ARN of an organization for the launch permission.
  public organizationArn?: string;

  // ARN of an organizational unit for the launch permission.
  public organizationalUnitArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "group",
        'Name of the group for the launch permission. Valid values: `"all"`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageId",
        "ID of the AMI.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "organizationArn",
        "ARN of an organization for the launch permission.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "organizationalUnitArn",
        "ARN of an organizational unit for the launch permission.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "AWS account ID for the launch permission.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
