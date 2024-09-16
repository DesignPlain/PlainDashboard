import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3control_MultiRegionAccessPointDetailsPublicAccessBlock,
  s3control_MultiRegionAccessPointDetailsPublicAccessBlock_GetTypes,
} from './s3control_MultiRegionAccessPointDetailsPublicAccessBlock';
import {
  s3control_MultiRegionAccessPointDetailsRegion,
  s3control_MultiRegionAccessPointDetailsRegion_GetTypes,
} from './s3control_MultiRegionAccessPointDetailsRegion';

export interface s3control_MultiRegionAccessPointDetails {
  //
  name?: string;

  //
  publicAccessBlock?: s3control_MultiRegionAccessPointDetailsPublicAccessBlock;

  //
  regions?: Array<s3control_MultiRegionAccessPointDetailsRegion>;
}

export function s3control_MultiRegionAccessPointDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'name', '', () => [], true, true),
    new DynamicUIProps(
      InputType.Object,
      'publicAccessBlock',
      '',
      () => s3control_MultiRegionAccessPointDetailsPublicAccessBlock_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'regions',
      '',
      () => s3control_MultiRegionAccessPointDetailsRegion_GetTypes(),
      true,
      true,
    ),
  ];
}
