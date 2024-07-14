import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PermissionArgs {
  // Actions that the specified AWS service principal can use. These include `IssueCertificate`, `GetCertificate`, and `ListPermissions`. Note that in order for ACM to automatically rotate certificates issued by a PCA, it must be granted permission on all 3 actions, as per the example above.
  actions?: Array<string>;

  // ARN of the CA that grants the permissions.
  certificateAuthorityArn?: string;

  // AWS service or identity that receives the permission. At this time, the only valid principal is `acm.amazonaws.com`.
  principal?: string;

  // ID of the calling account
  sourceAccount?: string;
}
export class Permission extends Resource {
  // Actions that the specified AWS service principal can use. These include `IssueCertificate`, `GetCertificate`, and `ListPermissions`. Note that in order for ACM to automatically rotate certificates issued by a PCA, it must be granted permission on all 3 actions, as per the example above.
  public actions?: Array<string>;

  // ARN of the CA that grants the permissions.
  public certificateAuthorityArn?: string;

  // IAM policy that is associated with the permission.
  public policy?: string;

  // AWS service or identity that receives the permission. At this time, the only valid principal is `acm.amazonaws.com`.
  public principal?: string;

  // ID of the calling account
  public sourceAccount?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "actions",
        "Actions that the specified AWS service principal can use. These include `IssueCertificate`, `GetCertificate`, and `ListPermissions`. Note that in order for ACM to automatically rotate certificates issued by a PCA, it must be granted permission on all 3 actions, as per the example above.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateAuthorityArn",
        "ARN of the CA that grants the permissions.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "principal",
        "AWS service or identity that receives the permission. At this time, the only valid principal is `acm.amazonaws.com`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceAccount",
        "ID of the calling account",
        [],
        false,
        true,
      ),
    ];
  }
}
