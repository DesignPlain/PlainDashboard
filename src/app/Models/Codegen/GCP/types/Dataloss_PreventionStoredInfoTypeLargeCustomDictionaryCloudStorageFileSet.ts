import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet {
  // The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the path is allowed.
  Url?: string;
}

export function Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Url",
      "The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the path is allowed.",
      [],
      true,
      false,
    ),
  ];
}
