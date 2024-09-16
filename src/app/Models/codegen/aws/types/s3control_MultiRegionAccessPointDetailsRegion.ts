import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3control_MultiRegionAccessPointDetailsRegion {
  //
  bucket?: string;

  //
  bucketAccountId?: string;

  //
  region?: string;
}

export function s3control_MultiRegionAccessPointDetailsRegion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'bucket', '', () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      'bucketAccountId',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, 'region', '', () => [], false, false),
  ];
}
