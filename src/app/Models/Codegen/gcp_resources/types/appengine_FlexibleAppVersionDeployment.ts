import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appengine_FlexibleAppVersionDeploymentFile,
  appengine_FlexibleAppVersionDeploymentFile_GetTypes,
} from "./appengine_FlexibleAppVersionDeploymentFile";
import {
  appengine_FlexibleAppVersionDeploymentZip,
  appengine_FlexibleAppVersionDeploymentZip_GetTypes,
} from "./appengine_FlexibleAppVersionDeploymentZip";
import {
  appengine_FlexibleAppVersionDeploymentCloudBuildOptions,
  appengine_FlexibleAppVersionDeploymentCloudBuildOptions_GetTypes,
} from "./appengine_FlexibleAppVersionDeploymentCloudBuildOptions";
import {
  appengine_FlexibleAppVersionDeploymentContainer,
  appengine_FlexibleAppVersionDeploymentContainer_GetTypes,
} from "./appengine_FlexibleAppVersionDeploymentContainer";

export interface appengine_FlexibleAppVersionDeployment {
  /*
Manifest of the files stored in Google Cloud Storage that are included as part of this version.
All files must be readable using the credentials supplied with this call.
Structure is documented below.
*/
  files?: Array<appengine_FlexibleAppVersionDeploymentFile>;

  /*
Zip File
Structure is documented below.
*/
  zip?: appengine_FlexibleAppVersionDeploymentZip;

  /*
Options for the build operations performed as a part of the version deployment. Only applicable when creating a version using source code directly.
Structure is documented below.
*/
  cloudBuildOptions?: appengine_FlexibleAppVersionDeploymentCloudBuildOptions;

  /*
The Docker image for the container that runs the version.
Structure is documented below.
*/
  container?: appengine_FlexibleAppVersionDeploymentContainer;
}

export function appengine_FlexibleAppVersionDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "files",
      "Manifest of the files stored in Google Cloud Storage that are included as part of this version.\nAll files must be readable using the credentials supplied with this call.\nStructure is documented below.",
      appengine_FlexibleAppVersionDeploymentFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "zip",
      "Zip File\nStructure is documented below.",
      appengine_FlexibleAppVersionDeploymentZip_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "cloudBuildOptions",
      "Options for the build operations performed as a part of the version deployment. Only applicable when creating a version using source code directly.\nStructure is documented below.",
      appengine_FlexibleAppVersionDeploymentCloudBuildOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "container",
      "The Docker image for the container that runs the version.\nStructure is documented below.",
      appengine_FlexibleAppVersionDeploymentContainer_GetTypes(),
      false,
      false,
    ),
  ];
}
