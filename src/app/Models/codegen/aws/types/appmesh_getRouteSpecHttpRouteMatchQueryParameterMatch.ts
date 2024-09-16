import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch {
  //
  exact?: string;
}

export function appmesh_getRouteSpecHttpRouteMatchQueryParameterMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'exact', '', () => [], true, false),
  ];
}
