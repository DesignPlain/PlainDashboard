import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface HostedConfigurationVersionArgs {
  // Application ID.
  applicationId?: string;

  // Configuration profile ID.
  configurationProfileId?: string;

  // Content of the configuration or the configuration data.
  content?: string;

  // Standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
  contentType?: string;

  // Description of the configuration.
  description?: string;
}
export class HostedConfigurationVersion extends DS_Resource {
  // Configuration profile ID.
  public configurationProfileId?: string;

  // Content of the configuration or the configuration data.
  public content?: string;

  // Standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
  public contentType?: string;

  // Description of the configuration.
  public description?: string;

  // Version number of the hosted configuration.
  public versionNumber?: number;

  // Application ID.
  public applicationId?: string;

  // ARN of the AppConfig  hosted configuration version.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'configurationProfileId',
        'Configuration profile ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'content',
        'Content of the configuration or the configuration data.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'contentType',
        'Standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the configuration.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'applicationId',
        'Application ID.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
