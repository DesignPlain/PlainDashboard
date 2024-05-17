import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_TriggerBuildArtifactsMavenArtifact,
  Cloudbuild_TriggerBuildArtifactsMavenArtifact_GetTypes,
} from "./Cloudbuild_TriggerBuildArtifactsMavenArtifact";
import {
  Cloudbuild_TriggerBuildArtifactsNpmPackage,
  Cloudbuild_TriggerBuildArtifactsNpmPackage_GetTypes,
} from "./Cloudbuild_TriggerBuildArtifactsNpmPackage";
import {
  Cloudbuild_TriggerBuildArtifactsObjects,
  Cloudbuild_TriggerBuildArtifactsObjects_GetTypes,
} from "./Cloudbuild_TriggerBuildArtifactsObjects";
import {
  Cloudbuild_TriggerBuildArtifactsPythonPackage,
  Cloudbuild_TriggerBuildArtifactsPythonPackage_GetTypes,
} from "./Cloudbuild_TriggerBuildArtifactsPythonPackage";

export interface Cloudbuild_TriggerBuildArtifacts {
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
Structure is documented below.
*/
  MavenArtifacts?: Array<Cloudbuild_TriggerBuildArtifactsMavenArtifact>;

  /*
Npm package to upload to Artifact Registry upon successful completion of all build steps.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  NpmPackages?: Array<Cloudbuild_TriggerBuildArtifactsNpmPackage>;

  /*
A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.
Files in the workspace matching specified paths globs will be uploaded to the
Cloud Storage location using the builder service account's credentials.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  Objects?: Cloudbuild_TriggerBuildArtifactsObjects;

  /*
Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  PythonPackages?: Array<Cloudbuild_TriggerBuildArtifactsPythonPackage>;
}

export function Cloudbuild_TriggerBuildArtifacts_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Objects",
      "A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.\nFiles in the workspace matching specified paths globs will be uploaded to the\nCloud Storage location using the builder service account's credentials.\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\nIf any objects fail to be pushed, the build is marked FAILURE.\nStructure is documented below.",
      Cloudbuild_TriggerBuildArtifactsObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PythonPackages",
      "Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\nIf any objects fail to be pushed, the build is marked FAILURE.\nStructure is documented below.",
      Cloudbuild_TriggerBuildArtifactsPythonPackage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Images",
      "A list of images to be pushed upon the successful completion of all build steps.\nThe images will be pushed using the builder service account's credentials.\nThe digests of the pushed images will be stored in the Build resource's results field.\nIf any of the images fail to be pushed, the build is marked FAILURE.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "MavenArtifacts",
      "A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\nIf any objects fail to be pushed, the build is marked FAILURE.\nStructure is documented below.",
      Cloudbuild_TriggerBuildArtifactsMavenArtifact_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "NpmPackages",
      "Npm package to upload to Artifact Registry upon successful completion of all build steps.\nThe location and generation of the uploaded objects will be stored in the Build resource's results field.\nIf any objects fail to be pushed, the build is marked FAILURE.\nStructure is documented below.",
      Cloudbuild_TriggerBuildArtifactsNpmPackage_GetTypes(),
      false,
      false,
    ),
  ];
}
