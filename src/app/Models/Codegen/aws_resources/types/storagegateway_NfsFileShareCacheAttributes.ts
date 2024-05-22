import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storagegateway_NfsFileShareCacheAttributes {
  /*
Refreshes a file share's cache by using Time To Live (TTL).
TTL is the length of time since the last refresh after which access to the directory would cause the file gateway
to first refresh that directory's contents from the Amazon S3 bucket. Valid Values: 300 to 2,592,000 seconds (5 minutes to 30 days)
*/
  cacheStaleTimeoutInSeconds?: number;
}

export function storagegateway_NfsFileShareCacheAttributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cacheStaleTimeoutInSeconds",
      "Refreshes a file share's cache by using Time To Live (TTL).\nTTL is the length of time since the last refresh after which access to the directory would cause the file gateway\nto first refresh that directory's contents from the Amazon S3 bucket. Valid Values: 300 to 2,592,000 seconds (5 minutes to 30 days)",
      [],
      false,
      false,
    ),
  ];
}
