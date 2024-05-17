import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_StandardAppVersionDeploymentFile,
  Appengine_StandardAppVersionDeploymentFile_GetTypes,
} from "./Appengine_StandardAppVersionDeploymentFile";
import {
  Appengine_StandardAppVersionDeploymentZip,
  Appengine_StandardAppVersionDeploymentZip_GetTypes,
} from "./Appengine_StandardAppVersionDeploymentZip";

export interface Appengine_StandardAppVersionDeployment {
  /*
Manifest of the files stored in Google Cloud Storage that are included as part of this version.
All files must be readable using the credentials supplied with this call.
Structure is documented below.
*/
  Files?: Array<Appengine_StandardAppVersionDeploymentFile>;

  /*
Zip File
Structure is documented below.
*/
  Zip?: Appengine_StandardAppVersionDeploymentZip;
}

export function Appengine_StandardAppVersionDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Files",
      "Manifest of the files stored in Google Cloud Storage that are included as part of this version.\nAll files must be readable using the credentials supplied with this call.\nStructure is documented below.",
      Appengine_StandardAppVersionDeploymentFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Zip",
      "Zip File\nStructure is documented below.",
      Appengine_StandardAppVersionDeploymentZip_GetTypes(),
      false,
      false,
    ),
  ];
}
