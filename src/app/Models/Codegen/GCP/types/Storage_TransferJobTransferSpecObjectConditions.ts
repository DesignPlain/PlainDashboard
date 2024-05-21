import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_TransferJobTransferSpecObjectConditions {
  // A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  minTimeElapsedSinceLastModification?: string;

  // `exclude_prefixes` must follow the requirements described for `include_prefixes`. See [Requirements](https://cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec#ObjectConditions).
  excludePrefixes?: Array<string>;

  // If `include_prefixes` is specified, objects that satisfy the object conditions must have names that start with one of the `include_prefixes` and that do not start with any of the `exclude_prefixes`. If `include_prefixes` is not specified, all objects except those that have names starting with one of the `exclude_prefixes` must satisfy the object conditions. See [Requirements](https://cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec#ObjectConditions).
  includePrefixes?: Array<string>;

  // If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  lastModifiedBefore?: string;

  // If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  lastModifiedSince?: string;

  // A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  maxTimeElapsedSinceLastModification?: string;
}

export function storage_TransferJobTransferSpecObjectConditions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "minTimeElapsedSinceLastModification",
      "A duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludePrefixes",
      "`exclude_prefixes` must follow the requirements described for `include_prefixes`. See [Requirements](https://cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec#ObjectConditions).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includePrefixes",
      "If `include_prefixes` is specified, objects that satisfy the object conditions must have names that start with one of the `include_prefixes` and that do not start with any of the `exclude_prefixes`. If `include_prefixes` is not specified, all objects except those that have names starting with one of the `exclude_prefixes` must satisfy the object conditions. See [Requirements](https://cloud.google.com/storage-transfer/docs/reference/rest/v1/TransferSpec#ObjectConditions).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastModifiedBefore",
      'If specified, only objects with a "last modification time" before this timestamp and objects that don\'t have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lastModifiedSince",
      'If specified, only objects with a "last modification time" on or after this timestamp and objects that don\'t have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxTimeElapsedSinceLastModification",
      "A duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
