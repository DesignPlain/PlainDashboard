import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emr_ClusterBootstrapAction {
  // List of command line arguments to pass to the bootstrap action script.
  args?: Array<string>;

  // Name of the bootstrap action.
  name?: string;

  // Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system.
  path?: string;
}

export function emr_ClusterBootstrapAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'args',
      'List of command line arguments to pass to the bootstrap action script.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the bootstrap action.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'path',
      'Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system.',
      () => [],
      true,
      false,
    ),
  ];
}
