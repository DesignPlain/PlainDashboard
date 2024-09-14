import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RegionArgs {
  // Whether the region is enabled.
  enabled?: boolean;

  // The region name to manage.
  regionName?: string;

  // The ID of the target account when managing member accounts. Will manage current user's account by default if omitted. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned.
  accountId?: string;
}
export class Region extends DS_Resource {
  // The region opt status.
  public optStatus?: string;

  // The region name to manage.
  public regionName?: string;

  // The ID of the target account when managing member accounts. Will manage current user's account by default if omitted. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned.
  public accountId?: string;

  // Whether the region is enabled.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the region is enabled.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "regionName",
        "The region name to manage.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The ID of the target account when managing member accounts. Will manage current user's account by default if omitted. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
