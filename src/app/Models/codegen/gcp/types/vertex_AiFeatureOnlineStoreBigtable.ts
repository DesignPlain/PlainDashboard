import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vertex_AiFeatureOnlineStoreBigtableAutoScaling,
  vertex_AiFeatureOnlineStoreBigtableAutoScaling_GetTypes,
} from './vertex_AiFeatureOnlineStoreBigtableAutoScaling';

export interface vertex_AiFeatureOnlineStoreBigtable {
  /*
Autoscaling config applied to Bigtable Instance.
Structure is documented below.
*/
  autoScaling?: vertex_AiFeatureOnlineStoreBigtableAutoScaling;
}

export function vertex_AiFeatureOnlineStoreBigtable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'autoScaling',
      'Autoscaling config applied to Bigtable Instance.\nStructure is documented below.',
      () => vertex_AiFeatureOnlineStoreBigtableAutoScaling_GetTypes(),
      true,
      false,
    ),
  ];
}
