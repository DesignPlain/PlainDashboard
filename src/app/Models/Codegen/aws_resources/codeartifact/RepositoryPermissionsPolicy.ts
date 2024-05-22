import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RepositoryPermissionsPolicyArgs {
  // The name of the domain on which to set the resource policy.
  domain?: string;

  // The account number of the AWS account that owns the domain.
  domainOwner?: string;

  // A JSON policy string to be set as the access control resource policy on the provided domain.
  policyDocument?: string;

  // The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.
  policyRevision?: string;

  // The name of the repository to set the resource policy on.
  repository?: string;
}
export class RepositoryPermissionsPolicy extends Resource {
  // The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.
  public policyRevision?: string;

  // The name of the repository to set the resource policy on.
  public repository?: string;

  // The ARN of the resource associated with the resource policy.
  public resourceArn?: string;

  // The name of the domain on which to set the resource policy.
  public domain?: string;

  // The account number of the AWS account that owns the domain.
  public domainOwner?: string;

  // A JSON policy string to be set as the access control resource policy on the provided domain.
  public policyDocument?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The name of the domain on which to set the resource policy.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainOwner",
        "The account number of the AWS account that owns the domain.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyDocument",
        "A JSON policy string to be set as the access control resource policy on the provided domain.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyRevision",
        "The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "repository",
        "The name of the repository to set the resource policy on.",
        [],
        true,
        true,
      ),
    ];
  }
}
