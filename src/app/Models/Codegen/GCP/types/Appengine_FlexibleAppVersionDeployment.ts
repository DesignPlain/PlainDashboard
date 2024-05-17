import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_FlexibleAppVersionDeploymentFile,
  Appengine_FlexibleAppVersionDeploymentFile_GetTypes,
} from "./Appengine_FlexibleAppVersionDeploymentFile";
import {
  Appengine_FlexibleAppVersionDeploymentZip,
  Appengine_FlexibleAppVersionDeploymentZip_GetTypes,
} from "./Appengine_FlexibleAppVersionDeploymentZip";
import {
  Appengine_FlexibleAppVersionDeploymentCloudBuildOptions,
  Appengine_FlexibleAppVersionDeploymentCloudBuildOptions_GetTypes,
} from "./Appengine_FlexibleAppVersionDeploymentCloudBuildOptions";
import {
  Appengine_FlexibleAppVersionDeploymentContainer,
  Appengine_FlexibleAppVersionDeploymentContainer_GetTypes,
} from "./Appengine_FlexibleAppVersionDeploymentContainer";

export interface Appengine_FlexibleAppVersionDeployment {
  /*
Manifest of the files stored in Google Cloud Storage that are included as part of this version.
All files must be readable using the credentials supplied with this call.
Structure is documented below.
*/
  Files?: Array<Appengine_FlexibleAppVersionDeploymentFile>;

  /*
Zip File
Structure is documented below.
*/
  Zip?: Appengine_FlexibleAppVersionDeploymentZip;

  /*
Options for the build operations performed as a part of the version deployment. Only applicable when creating a version using source code directly.
Structure is documented below.
*/
  CloudBuildOptions?: Appengine_FlexibleAppVersionDeploymentCloudBuildOptions;

  /*
The Docker image for the container that runs the version.
Structure is documented below.
*/
  Container?: Appengine_FlexibleAppVersionDeploymentContainer;
}

export function Appengine_FlexibleAppVersionDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Files",
      "Manifest of the files stored in Google Cloud Storage that are included as part of this version.\nAll files must be readable using the credentials supplied with this call.\nStructure is documented below.",
      Appengine_FlexibleAppVersionDeploymentFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Zip",
      "Zip File\nStructure is documented below.",
      Appengine_FlexibleAppVersionDeploymentZip_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "CloudBuildOptions",
      "Options for the build operations performed as a part of the version deployment. Only applicable when creating a version using source code directly.\nStructure is documented below.",
      Appengine_FlexibleAppVersionDeploymentCloudBuildOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Container",
      "The Docker image for the container that runs the version.\nStructure is documented below.",
      Appengine_FlexibleAppVersionDeploymentContainer_GetTypes(),
      false,
      false,
    ),
  ];
}
