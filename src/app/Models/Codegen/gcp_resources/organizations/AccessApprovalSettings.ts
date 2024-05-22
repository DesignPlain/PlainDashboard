import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  organizations_AccessApprovalSettingsEnrolledService,
  organizations_AccessApprovalSettingsEnrolledService_GetTypes,
} from "../types/organizations_AccessApprovalSettingsEnrolledService";

export interface AccessApprovalSettingsArgs {
  /*
The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
*/
  activeKeyVersion?: string;

  /*
A list of Google Cloud Services for which the given resource has Access Approval enrolled.
Access requests for the resource given by name against any of these services contained here will be required
to have explicit approval. Enrollment can be done for individual services.
A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
Structure is documented below.
*/
  enrolledServices?: Array<organizations_AccessApprovalSettingsEnrolledService>;

  /*
A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
*/
  notificationEmails?: Array<string>;

  // ID of the organization of the access approval settings.
  organizationId?: string;
}
export class AccessApprovalSettings extends Resource {
  // The resource name of the settings. Format is "organizations/{organization_id}/accessApprovalSettings"
  public name?: string;

  /*
A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
*/
  public notificationEmails?: Array<string>;

  // ID of the organization of the access approval settings.
  public organizationId?: string;

  /*
The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
*/
  public activeKeyVersion?: string;

  // This field will always be unset for the organization since organizations do not have ancestors.
  public ancestorHasActiveKeyVersion?: boolean;

  // This field will always be unset for the organization since organizations do not have ancestors.
  public enrolledAncestor?: boolean;

  /*
A list of Google Cloud Services for which the given resource has Access Approval enrolled.
Access requests for the resource given by name against any of these services contained here will be required
to have explicit approval. Enrollment can be done for individual services.
A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
Structure is documented below.
*/
  public enrolledServices?: Array<organizations_AccessApprovalSettingsEnrolledService>;

  /*
If the field is true, that indicates that there is some configuration issue with the active_key_version
configured on this Organization (e.g. it doesn't exist or the Access Approval service account doesn't have the
correct permissions on it, etc.).
*/
  public invalidKeyVersion?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "organizationId",
        "ID of the organization of the access approval settings.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "activeKeyVersion",
        "The asymmetric crypto key version to use for signing approval requests.\nEmpty active_key_version indicates that a Google-managed key should be used for signing.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enrolledServices",
        "A list of Google Cloud Services for which the given resource has Access Approval enrolled.\nAccess requests for the resource given by name against any of these services contained here will be required\nto have explicit approval. Enrollment can be done for individual services.\nA maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.\nStructure is documented below.",
        organizations_AccessApprovalSettingsEnrolledService_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationEmails",
        "A list of email addresses to which notifications relating to approval requests should be sent.\nNotifications relating to a resource will be sent to all emails in the settings of ancestor\nresources of that resource. A maximum of 50 email addresses are allowed.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
