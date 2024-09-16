import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DomainPermissionsArgs {
  // The name of the domain on which to set the resource policy.
  domain?: string;

  // The account number of the AWS account that owns the domain.
  domainOwner?: string;

  // A JSON policy string to be set as the access control resource policy on the provided domain.
  policyDocument?: string;

  // The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.
  policyRevision?: string;
}
export class DomainPermissions extends DS_Resource {
  // The account number of the AWS account that owns the domain.
  public domainOwner?: string;

  // A JSON policy string to be set as the access control resource policy on the provided domain.
  public policyDocument?: string;

  // The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.
  public policyRevision?: string;

  // The ARN of the resource associated with the resource policy.
  public resourceArn?: string;

  // The name of the domain on which to set the resource policy.
  public domain?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'domain',
        'The name of the domain on which to set the resource policy.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainOwner',
        'The account number of the AWS account that owns the domain.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyDocument',
        'A JSON policy string to be set as the access control resource policy on the provided domain.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyRevision',
        "The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
