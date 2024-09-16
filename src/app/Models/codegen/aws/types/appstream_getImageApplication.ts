import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appstream_getImageApplicationIconS3Location,
  appstream_getImageApplicationIconS3Location_GetTypes,
} from './appstream_getImageApplicationIconS3Location';

export interface appstream_getImageApplication {
  // Image name to display.
  displayName?: string;

  // List of the instance families of the application.
  instanceFamilies?: Array<string>;

  // Arguments that are passed to the application at it's launch.
  launchParameters?: string;

  // Name of the image being searched for. Cannot be used with name_regex or arn.
  name?: string;

  // Description of image.
  description?: string;

  // A list named icon_s3_location that contains the following:
  iconS3Locations?: Array<appstream_getImageApplicationIconS3Location>;

  // Path to the application's excecutable in the instance.
  launchPath?: string;

  // Bool based on if the application is enabled.
  enabled?: boolean;

  /*
Array of strings describing the platforms on which the application can run.
Values will be from: WINDOWS | WINDOWS_SERVER_2016 | WINDOWS_SERVER_2019 | WINDOWS_SERVER_2022 | AMAZON_LINUX2
*/
  platforms?: Array<string>;

  // Working directory for the application.
  workingDirectory?: string;

  // Arn of the image being searched for. Cannot be used with name_regex or name.
  arn?: string;

  // Time at which this image was created.
  createdTime?: string;

  // URL of the application icon. This URL may be time-limited.
  iconUrl?: string;

  /*
String to string map that contains additional attributes used to describe the application.
- `Name` - Name of the application.
*/
  metadata?: Map<string, string>;

  // The app block ARN of the application.
  appBlockArn?: string;
}

export function appstream_getImageApplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'workingDirectory',
      'Working directory for the application.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'arn',
      'Arn of the image being searched for. Cannot be used with name_regex or name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the image being searched for. Cannot be used with name_regex or arn.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Bool based on if the application is enabled.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'iconUrl',
      'URL of the application icon. This URL may be time-limited.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'appBlockArn',
      'The app block ARN of the application.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'Image name to display.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'launchParameters',
      "Arguments that are passed to the application at it's launch.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'iconS3Locations',
      'A list named icon_s3_location that contains the following:',
      () => appstream_getImageApplicationIconS3Location_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'platforms',
      'Array of strings describing the platforms on which the application can run.\nValues will be from: WINDOWS | WINDOWS_SERVER_2016 | WINDOWS_SERVER_2019 | WINDOWS_SERVER_2022 | AMAZON_LINUX2',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'instanceFamilies',
      'List of the instance families of the application.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of image.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'launchPath',
      "Path to the application's excecutable in the instance.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'createdTime',
      'Time at which this image was created.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'metadata',
      'String to string map that contains additional attributes used to describe the application.\n* `Name` - Name of the application.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
