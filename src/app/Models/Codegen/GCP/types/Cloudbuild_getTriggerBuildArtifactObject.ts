import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_getTriggerBuildArtifactObjectTiming,
  Cloudbuild_getTriggerBuildArtifactObjectTiming_GetTypes,
} from "./Cloudbuild_getTriggerBuildArtifactObjectTiming";

export interface Cloudbuild_getTriggerBuildArtifactObject {
  /*
The Cloud Build location for the trigger.

- - -
*/
  Location?: string;

  // Path globs used to match files in the build's workspace.
  Paths?: Array<string>;

  // Output only. Stores timing information for pushing all artifact objects.
  Timings?: Array<Cloudbuild_getTriggerBuildArtifactObjectTiming>;
}

export function Cloudbuild_getTriggerBuildArtifactObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The Cloud Build location for the trigger.\n\n- - -",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Paths",
      "Path globs used to match files in the build's workspace.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Timings",
      "Output only. Stores timing information for pushing all artifact objects.",
      Cloudbuild_getTriggerBuildArtifactObjectTiming_GetTypes(),
      true,
      false,
    ),
  ];
}
