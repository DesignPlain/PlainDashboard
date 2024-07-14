import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface emr_ClusterBootstrapAction {
  // Name of the bootstrap action.
  name?: string;

  // Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system.
  path?: string;

  // List of command line arguments to pass to the bootstrap action script.
  args?: Array<string>;
}

export function emr_ClusterBootstrapAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the bootstrap action.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Location of the script to run during a bootstrap action. Can be either a location in Amazon S3 or on a local file system.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "args",
      "List of command line arguments to pass to the bootstrap action script.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
