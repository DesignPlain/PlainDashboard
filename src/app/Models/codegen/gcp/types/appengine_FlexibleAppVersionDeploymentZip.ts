import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appengine_FlexibleAppVersionDeploymentZip {
  // files count
  filesCount?: number;

  // Source URL
  sourceUrl?: string;
}

export function appengine_FlexibleAppVersionDeploymentZip_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sourceUrl',
      'Source URL',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'filesCount',
      'files count',
      () => [],
      false,
      false,
    ),
  ];
}
