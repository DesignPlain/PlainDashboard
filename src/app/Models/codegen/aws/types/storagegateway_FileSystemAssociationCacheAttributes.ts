import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface storagegateway_FileSystemAssociationCacheAttributes {
  /*
Refreshes a file share's cache by using Time To Live (TTL).
TTL is the length of time since the last refresh after which access to the directory would cause the file gateway
to first refresh that directory's contents from the Amazon S3 bucket. Valid Values: `0` or `300` to `2592000` seconds (5 minutes to 30 days). Defaults to `0`
*/
  cacheStaleTimeoutInSeconds?: number;
}

export function storagegateway_FileSystemAssociationCacheAttributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cacheStaleTimeoutInSeconds",
      "Refreshes a file share's cache by using Time To Live (TTL).\nTTL is the length of time since the last refresh after which access to the directory would cause the file gateway\nto first refresh that directory's contents from the Amazon S3 bucket. Valid Values: `0` or `300` to `2592000` seconds (5 minutes to 30 days). Defaults to `0`",
      () => [],
      false,
      false,
    ),
  ];
}
