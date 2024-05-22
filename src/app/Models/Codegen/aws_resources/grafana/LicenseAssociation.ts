import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LicenseAssociationArgs {
  // The type of license for the workspace license association. Valid values are `ENTERPRISE` and `ENTERPRISE_FREE_TRIAL`.
  licenseType?: string;

  // The workspace id.
  workspaceId?: string;
}
export class LicenseAssociation extends Resource {
  // If `license_type` is set to `ENTERPRISE`, this is the expiration date of the enterprise license.
  public licenseExpiration?: string;

  // The type of license for the workspace license association. Valid values are `ENTERPRISE` and `ENTERPRISE_FREE_TRIAL`.
  public licenseType?: string;

  // The workspace id.
  public workspaceId?: string;

  // If `license_type` is set to `ENTERPRISE_FREE_TRIAL`, this is the expiration date of the free trial.
  public freeTrialExpiration?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "licenseType",
        "The type of license for the workspace license association. Valid values are `ENTERPRISE` and `ENTERPRISE_FREE_TRIAL`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workspaceId",
        "The workspace id.",
        [],
        true,
        true,
      ),
    ];
  }
}
