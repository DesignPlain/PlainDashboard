import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch,
  appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch_GetTypes,
} from './appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch';

export interface appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName {
  //
  matches?: Array<appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch>;
}

export function appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeName_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'matches',
      '',
      () =>
        appmesh_getVirtualNodeSpecListenerTlValidationSubjectAlternativeNameMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
