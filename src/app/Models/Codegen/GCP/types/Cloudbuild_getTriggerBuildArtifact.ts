import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_getTriggerBuildArtifactPythonPackage,
  Cloudbuild_getTriggerBuildArtifactPythonPackage_GetTypes,
} from "./Cloudbuild_getTriggerBuildArtifactPythonPackage";
import {
  Cloudbuild_getTriggerBuildArtifactMavenArtifact,
  Cloudbuild_getTriggerBuildArtifactMavenArtifact_GetTypes,
} from "./Cloudbuild_getTriggerBuildArtifactMavenArtifact";
import {
  Cloudbuild_getTriggerBuildArtifactNpmPackage,
  Cloudbuild_getTriggerBuildArtifactNpmPackage_GetTypes,
} from "./Cloudbuild_getTriggerBuildArtifactNpmPackage";
import {
  Cloudbuild_getTriggerBuildArtifactObject,
  Cloudbuild_getTriggerBuildArtifactObject_GetTypes,
} from "./Cloudbuild_getTriggerBuildArtifactObject";

export interface Cloudbuild_getTriggerBuildArtifact {
  /*
Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  PythonPackages?: Array<Cloudbuild_getTriggerBuildArtifactPythonPackage>;

  /*
A list of images to be pushed upon the successful completion of all build steps.

The images will be pushed using the builder service account's credentials.

The digests of the pushed images will be stored in the Build resource's results field.

If any of the images fail to be pushed, the build is marked FAILURE.
*/
  Images?: Array<string>;

  /*
A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  MavenArtifacts?: Array<Cloudbuild_getTriggerBuildArtifactMavenArtifact>;

  /*
Npm package to upload to Artifact Registry upon successful completion of all build steps.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  NpmPackages?: Array<Cloudbuild_getTriggerBuildArtifactNpmPackage>;

  /*
A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.

Files in the workspace matching specified paths globs will be uploaded to the
Cloud Storage location using the builder service account's credentials.

The location and generation of the uploaded objects will be stored in the Build resource's results field.

If any objects fail to be pushed, the build is marked FAILURE.
*/
  Objects?: Array<Cloudbuild_getTriggerBuildArtifactObject>;
}

export function Cloudbuild_getTriggerBuildArtifact_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PythonPackages",
      "Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.\n\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\n\nIf any objects fail to be pushed, the build is marked FAILURE.",
      Cloudbuild_getTriggerBuildArtifactPythonPackage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Images",
      "A list of images to be pushed upon the successful completion of all build steps.\n\nThe images will be pushed using the builder service account's credentials.\n\nThe digests of the pushed images will be stored in the Build resource's results field.\n\nIf any of the images fail to be pushed, the build is marked FAILURE.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MavenArtifacts",
      "A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.\n\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\n\nIf any objects fail to be pushed, the build is marked FAILURE.",
      Cloudbuild_getTriggerBuildArtifactMavenArtifact_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NpmPackages",
      "Npm package to upload to Artifact Registry upon successful completion of all build steps.\n\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\n\nIf any objects fail to be pushed, the build is marked FAILURE.",
      Cloudbuild_getTriggerBuildArtifactNpmPackage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Objects",
      "A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.\n\nFiles in the workspace matching specified paths globs will be uploaded to the\nCloud Storage location using the builder service account's credentials.\n\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\n\nIf any objects fail to be pushed, the build is marked FAILURE.",
      Cloudbuild_getTriggerBuildArtifactObject_GetTypes(),
      true,
      false,
    ),
  ];
}
