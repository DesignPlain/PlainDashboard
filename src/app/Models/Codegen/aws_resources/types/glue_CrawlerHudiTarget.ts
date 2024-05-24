import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CrawlerHudiTarget {
  // The name of the connection to use to connect to the Hudi target.
  connectionName?: string;

  // A list of glob patterns used to exclude from the crawl.
  exclusions?: Array<string>;

  // The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. Used to limit the crawler run time. Valid values are between `1` and `20`.
  maximumTraversalDepth?: number;

  // One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix.
  paths?: Array<string>;
}

export function glue_CrawlerHudiTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "The name of the connection to use to connect to the Hudi target.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exclusions",
      "A list of glob patterns used to exclude from the crawl.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumTraversalDepth",
      "The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Hudi metadata folder in your Amazon S3 path. Used to limit the crawler run time. Valid values are between `1` and `20`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "paths",
      "One or more Amazon S3 paths that contains Hudi metadata folders as s3://bucket/prefix.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}