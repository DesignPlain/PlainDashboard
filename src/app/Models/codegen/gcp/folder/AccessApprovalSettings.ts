import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  folder_AccessApprovalSettingsEnrolledService,
  folder_AccessApprovalSettingsEnrolledService_GetTypes,
} from "../types/folder_AccessApprovalSettingsEnrolledService";

export interface AccessApprovalSettingsArgs {
  /*
The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.
*/
  activeKeyVersion?: string;

  /*
A list of Google Cloud Services for which the given resource has Access Approval enrolled.
Access requests for the resource given by name against any of these services contained here will be required
to have explicit approval. Enrollment can only be done on an all or nothing basis.
A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
Structure is documented below.
*/
  enrolledServices?: Array<folder_AccessApprovalSettingsEnrolledService>;

  // ID of the folder of the access approval settings.
  folderId?: string;

  /*
A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
*/
  notificationEmails?: Array<string>;
}
export class AccessApprovalSettings extends DS_Resource {
  /*
A list of Google Cloud Services for which the given resource has Access Approval enrolled.
Access requests for the resource given by name against any of these services contained here will be required
to have explicit approval. Enrollment can only be done on an all or nothing basis.
A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
Structure is documented below.
*/
  public enrolledServices?: Array<folder_AccessApprovalSettingsEnrolledService>;

  // ID of the folder of the access approval settings.
  public folderId?: string;

  /*
If the field is true, that indicates that there is some configuration issue with the active_key_version
configured on this Folder (e.g. it doesn't exist or the Access Approval service account doesn't have the
correct permissions on it, etc.) This key version is not necessarily the effective key version at this level,
as key versions are inherited top-down.
*/
  public invalidKeyVersion?: boolean;

  // The resource name of the settings. Format is "folders/{folder_id}/accessApprovalSettings"
  public name?: string;

  /*
A list of email addresses to which notifications relating to approval requests should be sent.
Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.
*/
  public notificationEmails?: Array<string>;

  /*
The asymmetric crypto key version to use for signing approval requests.
Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.
*/
  public activeKeyVersion?: string;

  // If the field is true, that indicates that an ancestor of this Folder has set active_key_version.
  public ancestorHasActiveKeyVersion?: boolean;

  // If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Folder.
  public enrolledAncestor?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "activeKeyVersion",
        "The asymmetric crypto key version to use for signing approval requests.\nEmpty active_key_version indicates that a Google-managed key should be used for signing.\nThis property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "enrolledServices",
        "A list of Google Cloud Services for which the given resource has Access Approval enrolled.\nAccess requests for the resource given by name against any of these services contained here will be required\nto have explicit approval. Enrollment can only be done on an all or nothing basis.\nA maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.\nStructure is documented below.",
        () => folder_AccessApprovalSettingsEnrolledService_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "folderId",
        "ID of the folder of the access approval settings.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationEmails",
        "A list of email addresses to which notifications relating to approval requests should be sent.\nNotifications relating to a resource will be sent to all emails in the settings of ancestor\nresources of that resource. A maximum of 50 email addresses are allowed.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
