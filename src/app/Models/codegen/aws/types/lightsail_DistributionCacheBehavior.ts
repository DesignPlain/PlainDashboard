import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lightsail_DistributionCacheBehavior {
  // The cache behavior for the specified path.
  behavior?: string;

  // The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (path/to/assets/\-), and file types (\-.html, \-jpg, \-js). Directories and file paths are case-sensitive.
  path?: string;
}

export function lightsail_DistributionCacheBehavior_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'behavior',
      'The cache behavior for the specified path.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'path',
      'The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (path/to/assets/\\*), and file types (\\*.html, \\*jpg, \\*js). Directories and file paths are case-sensitive.',
      () => [],
      true,
      false,
    ),
  ];
}
