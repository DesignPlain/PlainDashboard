import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecLoggingAccessLogFileFormatJson,
  appmesh_VirtualNodeSpecLoggingAccessLogFileFormatJson_GetTypes,
} from './appmesh_VirtualNodeSpecLoggingAccessLogFileFormatJson';

export interface appmesh_VirtualNodeSpecLoggingAccessLogFileFormat {
  // The logging format for JSON.
  jsons?: Array<appmesh_VirtualNodeSpecLoggingAccessLogFileFormatJson>;

  // The logging format for text. Must be between 1 and 1000 characters in length.
  text?: string;
}

export function appmesh_VirtualNodeSpecLoggingAccessLogFileFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'text',
      'The logging format for text. Must be between 1 and 1000 characters in length.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'jsons',
      'The logging format for JSON.',
      () => appmesh_VirtualNodeSpecLoggingAccessLogFileFormatJson_GetTypes(),
      false,
      false,
    ),
  ];
}
