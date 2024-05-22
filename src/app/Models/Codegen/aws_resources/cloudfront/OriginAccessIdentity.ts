import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OriginAccessIdentityArgs {
  // An optional comment for the origin access identity.
  comment?: string;
}
export class OriginAccessIdentity extends Resource {
  /*
Internal value used by CloudFront to allow future
updates to the origin access identity.
*/
  public callerReference?: string;

  /*
A shortcut to the full path for the
origin access identity to use in CloudFront, see below.
*/
  public cloudfrontAccessIdentityPath?: string;

  // An optional comment for the origin access identity.
  public comment?: string;

  /*
The current version of the origin access identity's information.
For example: `E2QWRUHAPOMQZL`.
*/
  public etag?: string;

  /*
A pre-generated ARN for use in S3 bucket policies (see below).
Example: `arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity
E2QWRUHAPOMQZL`.
*/
  public iamArn?: string;

  /*
The Amazon S3 canonical user ID for the origin
access identity, which you use when giving the origin access identity read
permission to an object in Amazon S3.
*/
  public s3CanonicalUserId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "comment",
        "An optional comment for the origin access identity.",
        [],
        false,
        false,
      ),
    ];
  }
}
