import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  guardduty_OrganizationConfigurationDatasources,
  guardduty_OrganizationConfigurationDatasources_GetTypes,
} from "../types/guardduty_OrganizationConfigurationDatasources";

export interface OrganizationConfigurationArgs {
  // -Deprecated:- Use `auto_enable_organization_members` instead. When this setting is enabled, all new accounts that are created in, or added to, the organization are added as a member accounts of the organization’s GuardDuty delegated administrator and GuardDuty is enabled in that AWS Region.
  autoEnable?: boolean;

  // Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. Valid values are `ALL`, `NEW`, `NONE`.
  autoEnableOrganizationMembers?: string;

  // Configuration for the collected datasources.
  datasources?: guardduty_OrganizationConfigurationDatasources;

  // The detector ID of the GuardDuty account.
  detectorId?: string;
}
export class OrganizationConfiguration extends Resource {
  // Configuration for the collected datasources.
  public datasources?: guardduty_OrganizationConfigurationDatasources;

  // The detector ID of the GuardDuty account.
  public detectorId?: string;

  // -Deprecated:- Use `auto_enable_organization_members` instead. When this setting is enabled, all new accounts that are created in, or added to, the organization are added as a member accounts of the organization’s GuardDuty delegated administrator and GuardDuty is enabled in that AWS Region.
  public autoEnable?: boolean;

  // Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. Valid values are `ALL`, `NEW`, `NONE`.
  public autoEnableOrganizationMembers?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "autoEnable",
        "*Deprecated:* Use `auto_enable_organization_members` instead. When this setting is enabled, all new accounts that are created in, or added to, the organization are added as a member accounts of the organization’s GuardDuty delegated administrator and GuardDuty is enabled in that AWS Region.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoEnableOrganizationMembers",
        "Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. Valid values are `ALL`, `NEW`, `NONE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "datasources",
        "Configuration for the collected datasources.",
        guardduty_OrganizationConfigurationDatasources_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "detectorId",
        "The detector ID of the GuardDuty account.",
        [],
        true,
        true,
      ),
    ];
  }
}
