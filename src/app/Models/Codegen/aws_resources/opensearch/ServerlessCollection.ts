import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearch_ServerlessCollectionTimeouts,
  opensearch_ServerlessCollectionTimeouts_GetTypes,
} from "../types/opensearch_ServerlessCollectionTimeouts";

export interface ServerlessCollectionArgs {
  // Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
  standbyReplicas?: string;

  // A map of tags to assign to the collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: opensearch_ServerlessCollectionTimeouts;

  // Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`.
  type?: string;

  // Description of the collection.
  description?: string;

  /*
Name of the collection.

The following arguments are optional:
*/
  name?: string;
}
export class ServerlessCollection extends Resource {
  // Collection-specific endpoint used to access OpenSearch Dashboards.
  public dashboardEndpoint?: string;

  // Description of the collection.
  public description?: string;

  /*
Name of the collection.

The following arguments are optional:
*/
  public name?: string;

  // A map of tags to assign to the collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public timeouts?: opensearch_ServerlessCollectionTimeouts;

  // Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`.
  public type?: string;

  // Amazon Resource Name (ARN) of the collection.
  public arn?: string;

  // Collection-specific endpoint used to submit index, search, and data upload requests to an OpenSearch Serverless collection.
  public collectionEndpoint?: string;

  // The ARN of the Amazon Web Services KMS key used to encrypt the collection.
  public kmsKeyArn?: string;

  // Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`.
  public standbyReplicas?: string;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of collection. One of `SEARCH`, `TIMESERIES`, or `VECTORSEARCH`. Defaults to `TIMESERIES`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the collection.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the collection.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "standbyReplicas",
        "Indicates whether standby replicas should be used for a collection. One of `ENABLED` or `DISABLED`. Defaults to `ENABLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the collection. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        opensearch_ServerlessCollectionTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
