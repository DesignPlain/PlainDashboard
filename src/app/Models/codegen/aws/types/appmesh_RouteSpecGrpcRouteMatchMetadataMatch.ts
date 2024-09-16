import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange,
  appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange_GetTypes,
} from './appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange';

export interface appmesh_RouteSpecGrpcRouteMatchMetadataMatch {
  // Value sent by the client must match the specified value exactly. Must be between 1 and 255 characters in length.
  exact?: string;

  // Value sent by the client must begin with the specified characters. Must be between 1 and 255 characters in length.
  prefix?: string;

  // Object that specifies the range of numbers that the value sent by the client must be included in.
  range?: appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange;

  // Value sent by the client must include the specified characters. Must be between 1 and 255 characters in length.
  regex?: string;

  // Value sent by the client must end with the specified characters. Must be between 1 and 255 characters in length.
  suffix?: string;
}

export function appmesh_RouteSpecGrpcRouteMatchMetadataMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'range',
      'Object that specifies the range of numbers that the value sent by the client must be included in.',
      () => appmesh_RouteSpecGrpcRouteMatchMetadataMatchRange_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'regex',
      'Value sent by the client must include the specified characters. Must be between 1 and 255 characters in length.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'suffix',
      'Value sent by the client must end with the specified characters. Must be between 1 and 255 characters in length.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'exact',
      'Value sent by the client must match the specified value exactly. Must be between 1 and 255 characters in length.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'Value sent by the client must begin with the specified characters. Must be between 1 and 255 characters in length.',
      () => [],
      false,
      false,
    ),
  ];
}
