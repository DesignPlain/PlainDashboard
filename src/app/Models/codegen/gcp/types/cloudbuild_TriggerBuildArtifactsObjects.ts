import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudbuild_TriggerBuildArtifactsObjectsTiming,
  cloudbuild_TriggerBuildArtifactsObjectsTiming_GetTypes,
} from './cloudbuild_TriggerBuildArtifactsObjectsTiming';

export interface cloudbuild_TriggerBuildArtifactsObjects {
  /*
Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".
Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.
*/
  location?: string;

  // Path globs used to match files in the build's workspace.
  paths?: Array<string>;

  /*
(Output)
Output only. Stores timing information for pushing all artifact objects.
Structure is documented below.


<a name="nested_timing"></a>The `timing` block contains:
*/
  timings?: Array<cloudbuild_TriggerBuildArtifactsObjectsTiming>;
}

export function cloudbuild_TriggerBuildArtifactsObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'paths',
      "Path globs used to match files in the build's workspace.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'timings',
      '(Output)\nOutput only. Stores timing information for pushing all artifact objects.\nStructure is documented below.\n\n\n<a name="nested_timing"></a>The `timing` block contains:',
      () => cloudbuild_TriggerBuildArtifactsObjectsTiming_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".\nFiles in the workspace matching any path pattern will be uploaded to Cloud Storage with\nthis location as a prefix.',
      () => [],
      false,
      false,
    ),
  ];
}
