import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UserPoolDomainArgs {
  // The ARN of an ISSUED ACM certificate in us-east-1 for a custom domain.
  certificateArn?: string;

  // For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth.
  domain?: string;

  // The user pool ID.
  userPoolId?: string;
}
export class UserPoolDomain extends DS_Resource {
  // The Amazon CloudFront endpoint (e.g. `dpp0gtxikpq3y.cloudfront.net`) that you use as the target of the alias that you set up with your Domain Name Service (DNS) provider.
  public cloudfrontDistribution?: string;

  // The Route 53 hosted zone ID of the CloudFront distribution.
  public cloudfrontDistributionZoneId?: string;

  // The S3 bucket where the static files for this domain are stored.
  public s3Bucket?: string;

  // The app version.
  public version?: string;

  // The AWS account ID for the user pool owner.
  public awsAccountId?: string;

  // The URL of the CloudFront distribution. This is required to generate the ALIAS `aws.route53.Record`
  public cloudfrontDistributionArn?: string;

  // For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth.
  public domain?: string;

  // The user pool ID.
  public userPoolId?: string;

  // The ARN of an ISSUED ACM certificate in us-east-1 for a custom domain.
  public certificateArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'domain',
        'For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userPoolId',
        'The user pool ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'certificateArn',
        'The ARN of an ISSUED ACM certificate in us-east-1 for a custom domain.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
