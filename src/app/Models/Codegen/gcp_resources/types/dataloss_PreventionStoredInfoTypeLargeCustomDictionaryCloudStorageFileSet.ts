import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet {
  // The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the path is allowed.
  url?: string;
}

export function dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "url",
      "The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the path is allowed.",
      [],
      true,
      false,
    ),
  ];
}
