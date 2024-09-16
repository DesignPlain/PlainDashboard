import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat,
  appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat_GetTypes,
} from './appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat';

export interface appmesh_getVirtualNodeSpecLoggingAccessLogFile {
  //
  formats?: Array<appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat>;

  //
  path?: string;
}

export function appmesh_getVirtualNodeSpecLoggingAccessLogFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'formats',
      '',
      () => appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'path', '', () => [], true, false),
  ];
}
