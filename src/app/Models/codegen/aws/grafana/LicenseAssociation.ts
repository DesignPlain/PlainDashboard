import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LicenseAssociationArgs {
  // A token from Grafana Labs that ties your AWS account with a Grafana Labs account.
  grafanaToken?: string;

  // The type of license for the workspace license association. Valid values are `ENTERPRISE` and `ENTERPRISE_FREE_TRIAL`.
  licenseType?: string;

  // The workspace id.
  workspaceId?: string;
}
export class LicenseAssociation extends DS_Resource {
  // The workspace id.
  public workspaceId?: string;

  // If `license_type` is set to `ENTERPRISE_FREE_TRIAL`, this is the expiration date of the free trial.
  public freeTrialExpiration?: string;

  // A token from Grafana Labs that ties your AWS account with a Grafana Labs account.
  public grafanaToken?: string;

  // If `license_type` is set to `ENTERPRISE`, this is the expiration date of the enterprise license.
  public licenseExpiration?: string;

  // The type of license for the workspace license association. Valid values are `ENTERPRISE` and `ENTERPRISE_FREE_TRIAL`.
  public licenseType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'grafanaToken',
        'A token from Grafana Labs that ties your AWS account with a Grafana Labs account.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'licenseType',
        'The type of license for the workspace license association. Valid values are `ENTERPRISE` and `ENTERPRISE_FREE_TRIAL`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'workspaceId',
        'The workspace id.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
