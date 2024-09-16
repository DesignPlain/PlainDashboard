import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  synthetics_CanaryArtifactConfig,
  synthetics_CanaryArtifactConfig_GetTypes,
} from '../types/synthetics_CanaryArtifactConfig';
import {
  synthetics_CanaryVpcConfig,
  synthetics_CanaryVpcConfig_GetTypes,
} from '../types/synthetics_CanaryVpcConfig';
import {
  synthetics_CanaryRunConfig,
  synthetics_CanaryRunConfig_GetTypes,
} from '../types/synthetics_CanaryRunConfig';
import {
  synthetics_CanarySchedule,
  synthetics_CanarySchedule_GetTypes,
} from '../types/synthetics_CanarySchedule';
import {
  synthetics_CanaryTimeline,
  synthetics_CanaryTimeline_GetTypes,
} from '../types/synthetics_CanaryTimeline';

export interface CanaryArgs {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. See Artifact Config.
  artifactConfig?: synthetics_CanaryArtifactConfig;

  // Location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary.
  artifactS3Location?: string;

  // Entry point to use for the source code when running the canary. This value must end with the string `.handler` .
  handler?: string;

  // Runtime version to use for the canary. Versions change often so consult the [Amazon CloudWatch documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html) for the latest valid versions. Values include `syn-python-selenium-1.0`, `syn-nodejs-puppeteer-3.0`, `syn-nodejs-2.2`, `syn-nodejs-2.1`, `syn-nodejs-2.0`, and `syn-1.0`.
  runtimeVersion?: string;

  // Full bucket name which is used if your canary script is located in S3. The bucket must already exist. --Conflicts with `zip_file`.--
  s3Bucket?: string;

  // S3 key of your script. --Conflicts with `zip_file`.--
  s3Key?: string;

  // Whether to run or stop the canary.
  startCanary?: boolean;

  // ZIP file that contains the script, if you input your canary script directly into the canary instead of referring to an S3 location. It can be up to 225KB. --Conflicts with `s3_bucket`, `s3_key`, and `s3_version`.--
  zipFile?: string;

  // ARN of the IAM role to be used to run the canary. see [AWS Docs](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html#API_CreateCanary_RequestSyntax) for permissions needs for IAM Role.
  executionRoleArn?: string;

  // Number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
  failureRetentionPeriod?: number;

  // Name for this canary. Has a maximum length of 21 characters. Valid characters are lowercase alphanumeric, hyphen, or underscore.
  name?: string;

  // Configuration block. Detailed below.
  vpcConfig?: synthetics_CanaryVpcConfig;

  // Specifies whether to also delete the Lambda functions and layers used by this canary. The default is `false`.
  deleteLambda?: boolean;

  // Configuration block for individual canary runs. Detailed below.
  runConfig?: synthetics_CanaryRunConfig;

  // S3 version ID of your script. --Conflicts with `zip_file`.--
  s3Version?: string;

  /*
Configuration block providing how often the canary is to run and when these test runs are to stop. Detailed below.

The following arguments are optional:
*/
  schedule?: synthetics_CanarySchedule;

  // Number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
  successRetentionPeriod?: number;
}
export class Canary extends DS_Resource {
  // Full bucket name which is used if your canary script is located in S3. The bucket must already exist. --Conflicts with `zip_file`.--
  public s3Bucket?: string;

  // S3 version ID of your script. --Conflicts with `zip_file`.--
  public s3Version?: string;

  // configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. See Artifact Config.
  public artifactConfig?: synthetics_CanaryArtifactConfig;

  // Location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary.
  public artifactS3Location?: string;

  // ARN of the Lambda function that is used as your canary's engine.
  public engineArn?: string;

  // Number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
  public failureRetentionPeriod?: number;

  // Configuration block for individual canary runs. Detailed below.
  public runConfig?: synthetics_CanaryRunConfig;

  // Runtime version to use for the canary. Versions change often so consult the [Amazon CloudWatch documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html) for the latest valid versions. Values include `syn-python-selenium-1.0`, `syn-nodejs-puppeteer-3.0`, `syn-nodejs-2.2`, `syn-nodejs-2.1`, `syn-nodejs-2.0`, and `syn-1.0`.
  public runtimeVersion?: string;

  // Canary status.
  public status?: string;

  // Name for this canary. Has a maximum length of 21 characters. Valid characters are lowercase alphanumeric, hyphen, or underscore.
  public name?: string;

  // Whether to run or stop the canary.
  public startCanary?: boolean;

  // Number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
  public successRetentionPeriod?: number;

  // ZIP file that contains the script, if you input your canary script directly into the canary instead of referring to an S3 location. It can be up to 225KB. --Conflicts with `s3_bucket`, `s3_key`, and `s3_version`.--
  public zipFile?: string;

  // Amazon Resource Name (ARN) of the Canary.
  public arn?: string;

  // Entry point to use for the source code when running the canary. This value must end with the string `.handler` .
  public handler?: string;

  // S3 key of your script. --Conflicts with `zip_file`.--
  public s3Key?: string;

  // ARN of the Lambda layer where Synthetics stores the canary script code.
  public sourceLocationArn?: string;

  // Configuration block. Detailed below.
  public vpcConfig?: synthetics_CanaryVpcConfig;

  // Specifies whether to also delete the Lambda functions and layers used by this canary. The default is `false`.
  public deleteLambda?: boolean;

  // ARN of the IAM role to be used to run the canary. see [AWS Docs](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html#API_CreateCanary_RequestSyntax) for permissions needs for IAM Role.
  public executionRoleArn?: string;

  /*
Configuration block providing how often the canary is to run and when these test runs are to stop. Detailed below.

The following arguments are optional:
*/
  public schedule?: synthetics_CanarySchedule;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Structure that contains information about when the canary was created, modified, and most recently run. see Timeline.
  public timelines?: Array<synthetics_CanaryTimeline>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'handler',
        'Entry point to use for the source code when running the canary. This value must end with the string `.handler` .',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3Key',
        'S3 key of your script. **Conflicts with `zip_file`.**',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'startCanary',
        'Whether to run or stop the canary.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'artifactConfig',
        'configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3. See Artifact Config.',
        () => synthetics_CanaryArtifactConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3Bucket',
        'Full bucket name which is used if your canary script is located in S3. The bucket must already exist. **Conflicts with `zip_file`.**',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name for this canary. Has a maximum length of 21 characters. Valid characters are lowercase alphanumeric, hyphen, or underscore.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'deleteLambda',
        'Specifies whether to also delete the Lambda functions and layers used by this canary. The default is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'runtimeVersion',
        'Runtime version to use for the canary. Versions change often so consult the [Amazon CloudWatch documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html) for the latest valid versions. Values include `syn-python-selenium-1.0`, `syn-nodejs-puppeteer-3.0`, `syn-nodejs-2.2`, `syn-nodejs-2.1`, `syn-nodejs-2.0`, and `syn-1.0`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'failureRetentionPeriod',
        'Number of days to retain data about failed runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'vpcConfig',
        'Configuration block. Detailed below.',
        () => synthetics_CanaryVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'runConfig',
        'Configuration block for individual canary runs. Detailed below.',
        () => synthetics_CanaryRunConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3Version',
        'S3 version ID of your script. **Conflicts with `zip_file`.**',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'schedule',
        'Configuration block providing how often the canary is to run and when these test runs are to stop. Detailed below.\n\nThe following arguments are optional:',
        () => synthetics_CanarySchedule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'artifactS3Location',
        'Location in Amazon S3 where Synthetics stores artifacts from the test runs of this canary.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'executionRoleArn',
        'ARN of the IAM role to be used to run the canary. see [AWS Docs](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CreateCanary.html#API_CreateCanary_RequestSyntax) for permissions needs for IAM Role.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'successRetentionPeriod',
        'Number of days to retain data about successful runs of this canary. If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'zipFile',
        'ZIP file that contains the script, if you input your canary script directly into the canary instead of referring to an S3 location. It can be up to 225KB. **Conflicts with `s3_bucket`, `s3_key`, and `s3_version`.**',
        () => [],
        false,
        false,
      ),
    ];
  }
}
