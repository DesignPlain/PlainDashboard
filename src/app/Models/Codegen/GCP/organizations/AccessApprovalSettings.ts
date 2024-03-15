import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AccessApprovalSettingsEnrolledService } from "../types/AccessApprovalSettingsEnrolledService";

export interface AccessApprovalSettingsArgs {
  // ID of the organization of the access approval settings.
  OrganizationId?: string;

  /*
The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
*/
  ActiveKeyVersion?: string;

  /*
A list of Google Cloud Services for which the given resource has Access Approval enrolled.
Access requests for the resource given by name against any of these services contained here will be required
to have explicit approval. Enrollment can be done for individual services.
A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
Structure is documented below.
*/
  EnrolledServices?: Array<AccessApprovalSettingsEnrolledService>;

  /*
A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
*/
  NotificationEmails?: Array<string>;
}
export class AccessApprovalSettings extends Resource {
  // ID of the organization of the access approval settings.
  public OrganizationId?: string;

  /*
The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
*/
  public ActiveKeyVersion?: string;

  // This field will always be unset for the organization since organizations do not have ancestors.
  public AncestorHasActiveKeyVersion?: boolean;

  // This field will always be unset for the organization since organizations do not have ancestors.
  public EnrolledAncestor?: boolean;

  /*
A list of Google Cloud Services for which the given resource has Access Approval enrolled.
Access requests for the resource given by name against any of these services contained here will be required
to have explicit approval. Enrollment can be done for individual services.
A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
Structure is documented below.
*/
  public EnrolledServices?: Array<AccessApprovalSettingsEnrolledService>;

  /*
If the field is true, that indicates that there is some configuration issue with the active_key_version
configured on this Organization (e.g. it doesn't exist or the Access Approval service account doesn't have the
correct permissions on it, etc.).
*/
  public InvalidKeyVersion?: boolean;

  // The resource name of the settings. Format is "organizations/{organization_id}/accessApprovalSettings"
  public Name?: string;

  /*
A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
*/
  public NotificationEmails?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ActiveKeyVersion",
        "The asymmetric crypto key version to use for signing approval requests.\nEmpty active_key_version indicates that a Google-managed key should be used for signing.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "EnrolledServices",
        "A list of Google Cloud Services for which the given resource has Access Approval enrolled.\nAccess requests for the resource given by name against any of these services contained here will be required\nto have explicit approval. Enrollment can be done for individual services.\nA maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NotificationEmails",
        "A list of email addresses to which notifications relating to approval requests should be sent.\nNotifications relating to a resource will be sent to all emails in the settings of ancestor\nresources of that resource. A maximum of 50 email addresses are allowed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrganizationId",
        "ID of the organization of the access approval settings.",
      ),
    ];
  }
}
