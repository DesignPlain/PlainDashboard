import { TriggerBuildArtifactsPythonPackage } from "./TriggerBuildArtifactsPythonPackage";
import { TriggerBuildArtifactsMavenArtifact } from "./TriggerBuildArtifactsMavenArtifact";
import { TriggerBuildArtifactsNpmPackage } from "./TriggerBuildArtifactsNpmPackage";
import { TriggerBuildArtifactsObjects } from "./TriggerBuildArtifactsObjects";

export interface TriggerBuildArtifacts {
  /*
A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps.
Files in the workspace matching specified paths globs will be uploaded to the
Cloud Storage location using the builder service account's credentials.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  Objects?: TriggerBuildArtifactsObjects;

  /*
Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  PythonPackages?: Array<TriggerBuildArtifactsPythonPackage>;

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
  MavenArtifacts?: Array<TriggerBuildArtifactsMavenArtifact>;

  /*
Npm package to upload to Artifact Registry upon successful completion of all build steps.
The location and generation of the uploaded objects will be stored in the Build resource's results field.
If any objects fail to be pushed, the build is marked FAILURE.
Structure is documented below.
*/
  NpmPackages?: Array<TriggerBuildArtifactsNpmPackage>;
}
