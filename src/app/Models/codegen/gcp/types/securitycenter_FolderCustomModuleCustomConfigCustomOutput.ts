import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty,
  securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty_GetTypes,
} from './securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty';

export interface securitycenter_FolderCustomModuleCustomConfigCustomOutput {
  /*
A list of custom output properties to add to the finding.
Structure is documented below.
*/
  properties?: Array<securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty>;
}

export function securitycenter_FolderCustomModuleCustomConfigCustomOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'properties',
      'A list of custom output properties to add to the finding.\nStructure is documented below.',
      () =>
        securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
