import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  chime_SdkvoiceSipMediaApplicationEndpoints,
  chime_SdkvoiceSipMediaApplicationEndpoints_GetTypes,
} from '../types/chime_SdkvoiceSipMediaApplicationEndpoints';

export interface SdkvoiceSipMediaApplicationArgs {
  // List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported. See `endpoints`.
  endpoints?: chime_SdkvoiceSipMediaApplicationEndpoints;

  /*
The name of the AWS Chime SDK Voice Sip Media Application.

The following arguments are optional:
*/
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The AWS Region in which the AWS Chime SDK Voice Sip Media Application is created.
  awsRegion?: string;
}
export class SdkvoiceSipMediaApplication extends DS_Resource {
  // The AWS Region in which the AWS Chime SDK Voice Sip Media Application is created.
  public awsRegion?: string;

  // List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported. See `endpoints`.
  public endpoints?: chime_SdkvoiceSipMediaApplicationEndpoints;

  /*
The name of the AWS Chime SDK Voice Sip Media Application.

The following arguments are optional:
*/
  public name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN (Amazon Resource Name) of the AWS Chime SDK Voice Sip Media Application
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'endpoints',
        'List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported. See `endpoints`.',
        () => chime_SdkvoiceSipMediaApplicationEndpoints_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the AWS Chime SDK Voice Sip Media Application.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'awsRegion',
        'The AWS Region in which the AWS Chime SDK Voice Sip Media Application is created.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
