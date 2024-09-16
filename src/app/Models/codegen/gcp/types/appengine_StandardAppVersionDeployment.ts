import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appengine_StandardAppVersionDeploymentFile,
  appengine_StandardAppVersionDeploymentFile_GetTypes,
} from './appengine_StandardAppVersionDeploymentFile';
import {
  appengine_StandardAppVersionDeploymentZip,
  appengine_StandardAppVersionDeploymentZip_GetTypes,
} from './appengine_StandardAppVersionDeploymentZip';

export interface appengine_StandardAppVersionDeployment {
  /*
Manifest of the files stored in Google Cloud Storage that are included as part of this version.
All files must be readable using the credentials supplied with this call.
Structure is documented below.
*/
  files?: Array<appengine_StandardAppVersionDeploymentFile>;

  /*
Zip File
Structure is documented below.
*/
  zip?: appengine_StandardAppVersionDeploymentZip;
}

export function appengine_StandardAppVersionDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'files',
      'Manifest of the files stored in Google Cloud Storage that are included as part of this version.\nAll files must be readable using the credentials supplied with this call.\nStructure is documented below.',
      () => appengine_StandardAppVersionDeploymentFile_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'zip',
      'Zip File\nStructure is documented below.',
      () => appengine_StandardAppVersionDeploymentZip_GetTypes(),
      false,
      false,
    ),
  ];
}
