import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudbuild_getTriggerBuildArtifactObjectTiming,
  cloudbuild_getTriggerBuildArtifactObjectTiming_GetTypes,
} from './cloudbuild_getTriggerBuildArtifactObjectTiming';

export interface cloudbuild_getTriggerBuildArtifactObject {
  // Path globs used to match files in the build's workspace.
  paths?: Array<string>;

  // Output only. Stores timing information for pushing all artifact objects.
  timings?: Array<cloudbuild_getTriggerBuildArtifactObjectTiming>;

  /*
The Cloud Build location for the trigger.

- - -
*/
  location?: string;
}

export function cloudbuild_getTriggerBuildArtifactObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'location',
      'The Cloud Build location for the trigger.\n\n- - -',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'paths',
      "Path globs used to match files in the build's workspace.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'timings',
      'Output only. Stores timing information for pushing all artifact objects.',
      () => cloudbuild_getTriggerBuildArtifactObjectTiming_GetTypes(),
      true,
      false,
    ),
  ];
}
