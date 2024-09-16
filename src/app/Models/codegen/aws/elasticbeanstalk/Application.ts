import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  elasticbeanstalk_ApplicationAppversionLifecycle,
  elasticbeanstalk_ApplicationAppversionLifecycle_GetTypes,
} from '../types/elasticbeanstalk_ApplicationAppversionLifecycle';

export interface ApplicationArgs {
  //
  appversionLifecycle?: elasticbeanstalk_ApplicationAppversionLifecycle;

  // Short description of the application
  description?: string;

  // The name of the application, must be unique within your account
  name?: string;

  // Key-value map of tags for the Elastic Beanstalk Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Application extends DS_Resource {
  // The ARN assigned by AWS for this Elastic Beanstalk Application.
  public arn?: string;

  // Short description of the application
  public description?: string;

  // The name of the application, must be unique within your account
  public name?: string;

  // Key-value map of tags for the Elastic Beanstalk Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public appversionLifecycle?: elasticbeanstalk_ApplicationAppversionLifecycle;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'appversionLifecycle',
        '',
        () => elasticbeanstalk_ApplicationAppversionLifecycle_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Short description of the application',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the application, must be unique within your account',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of tags for the Elastic Beanstalk Application. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
