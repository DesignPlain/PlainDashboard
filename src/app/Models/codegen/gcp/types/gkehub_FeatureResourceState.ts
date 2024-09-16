import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkehub_FeatureResourceState {
  /*
(Output)
Whether this Feature has outstanding resources that need to be cleaned up before it can be disabled.
*/
  hasResources?: boolean;

  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  state?: string;
}

export function gkehub_FeatureResourceState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'hasResources',
      '(Output)\nWhether this Feature has outstanding resources that need to be cleaned up before it can be disabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      '(Output)\nOutput only. The "running state" of the Feature in this Hub.\nStructure is documented below.',
      () => [],
      false,
      false,
    ),
  ];
}
