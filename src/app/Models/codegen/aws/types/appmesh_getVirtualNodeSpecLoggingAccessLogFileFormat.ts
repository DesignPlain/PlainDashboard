import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecLoggingAccessLogFileFormatJson,
  appmesh_getVirtualNodeSpecLoggingAccessLogFileFormatJson_GetTypes,
} from './appmesh_getVirtualNodeSpecLoggingAccessLogFileFormatJson';

export interface appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat {
  //
  jsons?: Array<appmesh_getVirtualNodeSpecLoggingAccessLogFileFormatJson>;

  //
  text?: string;
}

export function appmesh_getVirtualNodeSpecLoggingAccessLogFileFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'jsons',
      '',
      () => appmesh_getVirtualNodeSpecLoggingAccessLogFileFormatJson_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'text', '', () => [], true, false),
  ];
}
