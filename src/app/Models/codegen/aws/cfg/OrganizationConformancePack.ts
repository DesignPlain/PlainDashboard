import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cfg_OrganizationConformancePackInputParameter,
  cfg_OrganizationConformancePackInputParameter_GetTypes,
} from '../types/cfg_OrganizationConformancePackInputParameter';

export interface OrganizationConformancePackArgs {
  // Amazon S3 bucket where AWS Config stores conformance pack templates. Delivery bucket must begin with `awsconfigconforms` prefix. Maximum length of 63.
  deliveryS3Bucket?: string;

  // The prefix for the Amazon S3 bucket. Maximum length of 1024.
  deliveryS3KeyPrefix?: string;

  // Set of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. Maximum of 1000 accounts.
  excludedAccounts?: Array<string>;

  // Set of configuration blocks describing input parameters passed to the conformance pack template. Documented below. When configured, the parameters must also be included in the `template_body` or in the template stored in Amazon S3 if using `template_s3_uri`.
  inputParameters?: Array<cfg_OrganizationConformancePackInputParameter>;

  // The name of the organization conformance pack. Must begin with a letter and contain from 1 to 128 alphanumeric characters and hyphens.
  name?: string;

  // A string containing full conformance pack template body. Maximum length of 51200. Drift detection is not possible with this argument.
  templateBody?: string;

  // Location of file, e.g., `s3://bucketname/prefix`, containing the template body. The uri must point to the conformance pack template that is located in an Amazon S3 bucket in the same region as the conformance pack. Maximum length of 1024. Drift detection is not possible with this argument.
  templateS3Uri?: string;
}
export class OrganizationConformancePack extends DS_Resource {
  // Set of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. Maximum of 1000 accounts.
  public excludedAccounts?: Array<string>;

  // Set of configuration blocks describing input parameters passed to the conformance pack template. Documented below. When configured, the parameters must also be included in the `template_body` or in the template stored in Amazon S3 if using `template_s3_uri`.
  public inputParameters?: Array<cfg_OrganizationConformancePackInputParameter>;

  // The name of the organization conformance pack. Must begin with a letter and contain from 1 to 128 alphanumeric characters and hyphens.
  public name?: string;

  // A string containing full conformance pack template body. Maximum length of 51200. Drift detection is not possible with this argument.
  public templateBody?: string;

  // Location of file, e.g., `s3://bucketname/prefix`, containing the template body. The uri must point to the conformance pack template that is located in an Amazon S3 bucket in the same region as the conformance pack. Maximum length of 1024. Drift detection is not possible with this argument.
  public templateS3Uri?: string;

  // Amazon Resource Name (ARN) of the organization conformance pack.
  public arn?: string;

  // Amazon S3 bucket where AWS Config stores conformance pack templates. Delivery bucket must begin with `awsconfigconforms` prefix. Maximum length of 63.
  public deliveryS3Bucket?: string;

  // The prefix for the Amazon S3 bucket. Maximum length of 1024.
  public deliveryS3KeyPrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'excludedAccounts',
        'Set of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack. Maximum of 1000 accounts.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'inputParameters',
        'Set of configuration blocks describing input parameters passed to the conformance pack template. Documented below. When configured, the parameters must also be included in the `template_body` or in the template stored in Amazon S3 if using `template_s3_uri`.',
        () => cfg_OrganizationConformancePackInputParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the organization conformance pack. Must begin with a letter and contain from 1 to 128 alphanumeric characters and hyphens.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'templateBody',
        'A string containing full conformance pack template body. Maximum length of 51200. Drift detection is not possible with this argument.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'templateS3Uri',
        'Location of file, e.g., `s3://bucketname/prefix`, containing the template body. The uri must point to the conformance pack template that is located in an Amazon S3 bucket in the same region as the conformance pack. Maximum length of 1024. Drift detection is not possible with this argument.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'deliveryS3Bucket',
        'Amazon S3 bucket where AWS Config stores conformance pack templates. Delivery bucket must begin with `awsconfigconforms` prefix. Maximum length of 63.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'deliveryS3KeyPrefix',
        'The prefix for the Amazon S3 bucket. Maximum length of 1024.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
