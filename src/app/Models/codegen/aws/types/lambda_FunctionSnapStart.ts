import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lambda_FunctionSnapStart {
  // Conditions where snap start is enabled. Valid values are `PublishedVersions`.
  applyOn?: string;

  // Optimization status of the snap start configuration. Valid values are `On` and `Off`.
  optimizationStatus?: string;
}

export function lambda_FunctionSnapStart_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'applyOn',
      'Conditions where snap start is enabled. Valid values are `PublishedVersions`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'optimizationStatus',
      'Optimization status of the snap start configuration. Valid values are `On` and `Off`.',
      () => [],
      false,
      false,
    ),
  ];
}
