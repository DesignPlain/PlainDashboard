import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_TriggerBuildArtifactsObjectsTiming,
  Cloudbuild_TriggerBuildArtifactsObjectsTiming_GetTypes,
} from "./Cloudbuild_TriggerBuildArtifactsObjectsTiming";

export interface Cloudbuild_TriggerBuildArtifactsObjects {
  /*
Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".
Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
this location as a prefix.
*/
  Location?: string;

  // Path globs used to match files in the build's workspace.
  Paths?: Array<string>;

  /*
(Output)
Output only. Stores timing information for pushing all artifact objects.
Structure is documented below.


<a name="nested_timing"></a>The `timing` block contains:
*/
  Timings?: Array<Cloudbuild_TriggerBuildArtifactsObjectsTiming>;
}

export function Cloudbuild_TriggerBuildArtifactsObjects_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Paths",
      "Path globs used to match files in the build's workspace.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Timings",
      '(Output)\nOutput only. Stores timing information for pushing all artifact objects.\nStructure is documented below.\n\n\n<a name="nested_timing"></a>The `timing` block contains:',
      Cloudbuild_TriggerBuildArtifactsObjectsTiming_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      'Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".\nFiles in the workspace matching any path pattern will be uploaded to Cloud Storage with\nthis location as a prefix.',
      [],
      false,
      false,
    ),
  ];
}
