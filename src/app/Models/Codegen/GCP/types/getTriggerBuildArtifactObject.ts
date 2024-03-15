import { getTriggerBuildArtifactObjectTiming } from "./getTriggerBuildArtifactObjectTiming";

export interface getTriggerBuildArtifactObject {
  /*
The Cloud Build location for the trigger.

- - -
*/
  Location?: string;

  // Path globs used to match files in the build's workspace.
  Paths?: Array<string>;

  // Output only. Stores timing information for pushing all artifact objects.
  Timings?: Array<getTriggerBuildArtifactObjectTiming>;
}
