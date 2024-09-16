import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfunctionsv2_FunctionBuildConfigSourceRepoSource,
  cloudfunctionsv2_FunctionBuildConfigSourceRepoSource_GetTypes,
} from './cloudfunctionsv2_FunctionBuildConfigSourceRepoSource';
import {
  cloudfunctionsv2_FunctionBuildConfigSourceStorageSource,
  cloudfunctionsv2_FunctionBuildConfigSourceStorageSource_GetTypes,
} from './cloudfunctionsv2_FunctionBuildConfigSourceStorageSource';

export interface cloudfunctionsv2_FunctionBuildConfigSource {
  /*
If provided, get the source from this location in a Cloud Source Repository.
Structure is documented below.
*/
  repoSource?: cloudfunctionsv2_FunctionBuildConfigSourceRepoSource;

  /*
If provided, get the source from this location in Google Cloud Storage.
Structure is documented below.
*/
  storageSource?: cloudfunctionsv2_FunctionBuildConfigSourceStorageSource;
}

export function cloudfunctionsv2_FunctionBuildConfigSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'repoSource',
      'If provided, get the source from this location in a Cloud Source Repository.\nStructure is documented below.',
      () => cloudfunctionsv2_FunctionBuildConfigSourceRepoSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'storageSource',
      'If provided, get the source from this location in Google Cloud Storage.\nStructure is documented below.',
      () => cloudfunctionsv2_FunctionBuildConfigSourceStorageSource_GetTypes(),
      false,
      false,
    ),
  ];
}
