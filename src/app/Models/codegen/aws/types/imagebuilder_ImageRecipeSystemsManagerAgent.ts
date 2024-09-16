import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_ImageRecipeSystemsManagerAgent {
  // Whether to remove the Systems Manager Agent after the image has been built. Defaults to `false`.
  uninstallAfterBuild?: boolean;
}

export function imagebuilder_ImageRecipeSystemsManagerAgent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'uninstallAfterBuild',
      'Whether to remove the Systems Manager Agent after the image has been built. Defaults to `false`.',
      () => [],
      true,
      true,
    ),
  ];
}
