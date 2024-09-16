import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3control_ObjectLambdaAccessPointConfiguration,
  s3control_ObjectLambdaAccessPointConfiguration_GetTypes,
} from '../types/s3control_ObjectLambdaAccessPointConfiguration';

export interface ObjectLambdaAccessPointArgs {
  // The AWS account ID for the owner of the bucket for which you want to create an Object Lambda Access Point. Defaults to automatically determined account ID of the AWS provider.
  accountId?: string;

  // A configuration block containing details about the Object Lambda Access Point. See Configuration below for more details.
  configuration?: s3control_ObjectLambdaAccessPointConfiguration;

  // The name for this Object Lambda Access Point.
  name?: string;
}
export class ObjectLambdaAccessPoint extends DS_Resource {
  // A configuration block containing details about the Object Lambda Access Point. See Configuration below for more details.
  public configuration?: s3control_ObjectLambdaAccessPointConfiguration;

  // The name for this Object Lambda Access Point.
  public name?: string;

  // The AWS account ID for the owner of the bucket for which you want to create an Object Lambda Access Point. Defaults to automatically determined account ID of the AWS provider.
  public accountId?: string;

  // Alias for the S3 Object Lambda Access Point.
  public alias?: string;

  // Amazon Resource Name (ARN) of the Object Lambda Access Point.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'accountId',
        'The AWS account ID for the owner of the bucket for which you want to create an Object Lambda Access Point. Defaults to automatically determined account ID of the AWS provider.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'configuration',
        'A configuration block containing details about the Object Lambda Access Point. See Configuration below for more details.',
        () => s3control_ObjectLambdaAccessPointConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name for this Object Lambda Access Point.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
