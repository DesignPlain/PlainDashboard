import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityhub_OrganizationConfigurationOrganizationConfiguration,
  securityhub_OrganizationConfigurationOrganizationConfiguration_GetTypes,
} from '../types/securityhub_OrganizationConfigurationOrganizationConfiguration';

export interface OrganizationConfigurationArgs {
  // Provides information about the way an organization is configured in Security Hub.
  organizationConfiguration?: securityhub_OrganizationConfigurationOrganizationConfiguration;

  // Whether to automatically enable Security Hub for new accounts in the organization.
  autoEnable?: boolean;

  // Whether to automatically enable Security Hub default standards for new member accounts in the organization. By default, this parameter is equal to `DEFAULT`, and new member accounts are automatically enabled with default Security Hub standards. To opt out of enabling default standards for new member accounts, set this parameter equal to `NONE`.
  autoEnableStandards?: string;
}
export class OrganizationConfiguration extends DS_Resource {
  // Whether to automatically enable Security Hub for new accounts in the organization.
  public autoEnable?: boolean;

  // Whether to automatically enable Security Hub default standards for new member accounts in the organization. By default, this parameter is equal to `DEFAULT`, and new member accounts are automatically enabled with default Security Hub standards. To opt out of enabling default standards for new member accounts, set this parameter equal to `NONE`.
  public autoEnableStandards?: string;

  // Provides information about the way an organization is configured in Security Hub.
  public organizationConfiguration?: securityhub_OrganizationConfigurationOrganizationConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'organizationConfiguration',
        'Provides information about the way an organization is configured in Security Hub.',
        () =>
          securityhub_OrganizationConfigurationOrganizationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'autoEnable',
        'Whether to automatically enable Security Hub for new accounts in the organization.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'autoEnableStandards',
        'Whether to automatically enable Security Hub default standards for new member accounts in the organization. By default, this parameter is equal to `DEFAULT`, and new member accounts are automatically enabled with default Security Hub standards. To opt out of enabling default standards for new member accounts, set this parameter equal to `NONE`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
