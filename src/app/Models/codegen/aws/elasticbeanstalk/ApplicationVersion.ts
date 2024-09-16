import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ApplicationVersionArgs {
  // S3 bucket that contains the Application Version source bundle.
  bucket?: string;

  // Short description of the Application Version.
  description?: string;

  // On delete, force an Application Version to be deleted when it may be in use by multiple Elastic Beanstalk Environments.
  forceDelete?: boolean;

  // S3 object that is the Application Version source bundle.
  key?: string;

  /*
Unique name for the this Application Version.

The following arguments are optional:
*/
  name?: string;

  // Pre-processes and validates the environment manifest (env.yaml ) and configuration files (-.config files in the .ebextensions folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment. You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional. It validates Elastic Beanstalk configuration files. It doesn’t validate your application’s configuration files, like proxy server or Docker configuration.
  process?: boolean;

  // Key-value map of tags for the Elastic Beanstalk Application Version. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Name of the Beanstalk Application the version is associated with.
  application?: string;
}
export class ApplicationVersion extends DS_Resource {
  // Pre-processes and validates the environment manifest (env.yaml ) and configuration files (-.config files in the .ebextensions folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment. You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional. It validates Elastic Beanstalk configuration files. It doesn’t validate your application’s configuration files, like proxy server or Docker configuration.
  public process?: boolean;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Name of the Beanstalk Application the version is associated with.
  public application?: string;

  // S3 bucket that contains the Application Version source bundle.
  public bucket?: string;

  /*
Unique name for the this Application Version.

The following arguments are optional:
*/
  public name?: string;

  // S3 object that is the Application Version source bundle.
  public key?: string;

  // Key-value map of tags for the Elastic Beanstalk Application Version. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN assigned by AWS for this Elastic Beanstalk Application.
  public arn?: string;

  // Short description of the Application Version.
  public description?: string;

  // On delete, force an Application Version to be deleted when it may be in use by multiple Elastic Beanstalk Environments.
  public forceDelete?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'application',
        'Name of the Beanstalk Application the version is associated with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'S3 bucket that contains the Application Version source bundle.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Short description of the Application Version.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDelete',
        'On delete, force an Application Version to be deleted when it may be in use by multiple Elastic Beanstalk Environments.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'key',
        'S3 object that is the Application Version source bundle.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name for the this Application Version.\n\nThe following arguments are optional:',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'process',
        'Pre-processes and validates the environment manifest (env.yaml ) and configuration files (*.config files in the .ebextensions folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment. You must turn processing on for application versions that you create using AWS CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional. It validates Elastic Beanstalk configuration files. It doesn’t validate your application’s configuration files, like proxy server or Docker configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of tags for the Elastic Beanstalk Application Version. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
