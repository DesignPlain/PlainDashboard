import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from 'src/app/enum/InputType';
import { Resource as BaseResource } from 'src/app/Models/CloudResource';
import { DynamicUIProps } from 'src/app/components/resource-config/resource-config.component';

export interface ResourceArgs {
  /*
Amazon Resource Name (ARN) of the resource.

The following arguments are optional:
*/
  arn?: string;

  /*
Flag to enable AWS LakeFormation hybrid access permission mode.

> --NOTE:-- AWS does not support registering an S3 location with an IAM role and subsequently updating the S3 location registration to a service-linked role.
*/
  hybridAccessEnabled?: boolean;

  // Role that has read/write access to the resource.
  roleArn?: string;

  // Designates an AWS Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog.
  useServiceLinkedRole?: boolean;

  //
  withFederation?: boolean;
}
export class Resource extends BaseResource {
  /*
Amazon Resource Name (ARN) of the resource.

The following arguments are optional:
*/
  public arn?: string;

  /*
Flag to enable AWS LakeFormation hybrid access permission mode.

> --NOTE:-- AWS does not support registering an S3 location with an IAM role and subsequently updating the S3 location registration to a service-linked role.
*/
  public hybridAccessEnabled?: boolean;

  // Date and time the resource was last modified in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public lastModified?: string;

  // Role that has read/write access to the resource.
  public roleArn?: string;

  // Designates an AWS Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog.
  public useServiceLinkedRole?: boolean;

  //
  public withFederation?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'arn',
        'Amazon Resource Name (ARN) of the resource.\n\nThe following arguments are optional:',
        [],
        true,
        true
      ),
      new DynamicUIProps(
        InputType.Bool,
        'hybridAccessEnabled',
        'Flag to enable AWS LakeFormation hybrid access permission mode.\n\n> **NOTE:** AWS does not support registering an S3 location with an IAM role and subsequently updating the S3 location registration to a service-linked role.',
        [],
        false,
        true
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'Role that has read/write access to the resource.',
        [],
        false,
        true
      ),
      new DynamicUIProps(
        InputType.Bool,
        'useServiceLinkedRole',
        'Designates an AWS Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog.',
        [],
        false,
        true
      ),
      new DynamicUIProps(InputType.Bool, 'withFederation', '', [], false, true),
    ];
  }
}
