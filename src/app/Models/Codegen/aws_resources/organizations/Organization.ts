import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  organizations_OrganizationNonMasterAccount,
  organizations_OrganizationNonMasterAccount_GetTypes,
} from "../types/organizations_OrganizationNonMasterAccount";
import {
  organizations_OrganizationRoot,
  organizations_OrganizationRoot_GetTypes,
} from "../types/organizations_OrganizationRoot";
import {
  organizations_OrganizationAccount,
  organizations_OrganizationAccount_GetTypes,
} from "../types/organizations_OrganizationAccount";

export interface OrganizationArgs {
  // List of AWS service principal names for which you want to enable integration with your organization. This is typically in the form of a URL, such as service-abbreviation.amazonaws.com. Organization must have `feature_set` set to `ALL`. Some services do not support enablement via this endpoint, see [warning in aws docs](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html).
  awsServiceAccessPrincipals?: Array<string>;

  // List of Organizations policy types to enable in the Organization Root. Organization must have `feature_set` set to `ALL`. For additional information about valid policy types (e.g., `AISERVICES_OPT_OUT_POLICY`, `BACKUP_POLICY`, `SERVICE_CONTROL_POLICY`, and `TAG_POLICY`), see the [AWS Organizations API Reference](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html).
  enabledPolicyTypes?: Array<string>;

  // Specify "ALL" (default) or "CONSOLIDATED_BILLING".
  featureSet?: string;
}
export class Organization extends Resource {
  // ARN of the root
  public arn?: string;

  // List of Organizations policy types to enable in the Organization Root. Organization must have `feature_set` set to `ALL`. For additional information about valid policy types (e.g., `AISERVICES_OPT_OUT_POLICY`, `BACKUP_POLICY`, `SERVICE_CONTROL_POLICY`, and `TAG_POLICY`), see the [AWS Organizations API Reference](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html).
  public enabledPolicyTypes?: Array<string>;

  // Email address of the master account
  public masterAccountEmail?: string;

  // Identifier of the master account
  public masterAccountId?: string;

  // List of organization accounts excluding the master account. For a list including the master account, see the `accounts` attribute. All elements have these attributes:
  public nonMasterAccounts?: Array<organizations_OrganizationNonMasterAccount>;

  // List of organization roots. All elements have these attributes:
  public roots?: Array<organizations_OrganizationRoot>;

  // List of organization accounts including the master account. For a list excluding the master account, see the `non_master_accounts` attribute. All elements have these attributes:
  public accounts?: Array<organizations_OrganizationAccount>;

  // List of AWS service principal names for which you want to enable integration with your organization. This is typically in the form of a URL, such as service-abbreviation.amazonaws.com. Organization must have `feature_set` set to `ALL`. Some services do not support enablement via this endpoint, see [warning in aws docs](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html).
  public awsServiceAccessPrincipals?: Array<string>;

  // Specify "ALL" (default) or "CONSOLIDATED_BILLING".
  public featureSet?: string;

  // ARN of the master account
  public masterAccountArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "awsServiceAccessPrincipals",
        "List of AWS service principal names for which you want to enable integration with your organization. This is typically in the form of a URL, such as service-abbreviation.amazonaws.com. Organization must have `feature_set` set to `ALL`. Some services do not support enablement via this endpoint, see [warning in aws docs](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enabledPolicyTypes",
        "List of Organizations policy types to enable in the Organization Root. Organization must have `feature_set` set to `ALL`. For additional information about valid policy types (e.g., `AISERVICES_OPT_OUT_POLICY`, `BACKUP_POLICY`, `SERVICE_CONTROL_POLICY`, and `TAG_POLICY`), see the [AWS Organizations API Reference](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnablePolicyType.html).",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "featureSet",
        'Specify "ALL" (default) or "CONSOLIDATED_BILLING".',
        [],
        false,
        false,
      ),
    ];
  }
}
