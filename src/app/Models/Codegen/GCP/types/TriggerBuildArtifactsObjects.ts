import { TriggerBuildArtifactsObjectsTiming } from "./TriggerBuildArtifactsObjectsTiming";

export interface TriggerBuildArtifactsObjects {
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
  Timings?: Array<TriggerBuildArtifactsObjectsTiming>;
}
