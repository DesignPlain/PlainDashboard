import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions {
  //
  version?: string;
}

export function datasync_LocationFsxOntapFileSystemProtocolNfsMountOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'version', '', () => [], false, true),
  ];
}
