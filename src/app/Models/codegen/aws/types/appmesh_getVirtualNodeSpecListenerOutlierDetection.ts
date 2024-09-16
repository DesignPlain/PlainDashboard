import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration,
  appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration_GetTypes,
} from './appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration';
import {
  appmesh_getVirtualNodeSpecListenerOutlierDetectionInterval,
  appmesh_getVirtualNodeSpecListenerOutlierDetectionInterval_GetTypes,
} from './appmesh_getVirtualNodeSpecListenerOutlierDetectionInterval';

export interface appmesh_getVirtualNodeSpecListenerOutlierDetection {
  //
  maxEjectionPercent?: number;

  //
  maxServerErrors?: number;

  //
  baseEjectionDurations?: Array<appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration>;

  //
  intervals?: Array<appmesh_getVirtualNodeSpecListenerOutlierDetectionInterval>;
}

export function appmesh_getVirtualNodeSpecListenerOutlierDetection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxServerErrors',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'baseEjectionDurations',
      '',
      () =>
        appmesh_getVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'intervals',
      '',
      () =>
        appmesh_getVirtualNodeSpecListenerOutlierDetectionInterval_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxEjectionPercent',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
