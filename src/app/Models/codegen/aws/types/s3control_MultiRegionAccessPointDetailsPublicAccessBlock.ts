import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface s3control_MultiRegionAccessPointDetailsPublicAccessBlock {
  //
  ignorePublicAcls?: boolean;

  //
  restrictPublicBuckets?: boolean;

  //
  blockPublicAcls?: boolean;

  //
  blockPublicPolicy?: boolean;
}

export function s3control_MultiRegionAccessPointDetailsPublicAccessBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'restrictPublicBuckets',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'blockPublicAcls',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'blockPublicPolicy',
      '',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'ignorePublicAcls',
      '',
      () => [],
      false,
      true,
    ),
  ];
}
