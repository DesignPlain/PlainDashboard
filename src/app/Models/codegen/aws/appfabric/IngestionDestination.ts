import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appfabric_IngestionDestinationProcessingConfiguration,
  appfabric_IngestionDestinationProcessingConfiguration_GetTypes,
} from "../types/appfabric_IngestionDestinationProcessingConfiguration";
import {
  appfabric_IngestionDestinationTimeouts,
  appfabric_IngestionDestinationTimeouts_GetTypes,
} from "../types/appfabric_IngestionDestinationTimeouts";
import {
  appfabric_IngestionDestinationDestinationConfiguration,
  appfabric_IngestionDestinationDestinationConfiguration_GetTypes,
} from "../types/appfabric_IngestionDestinationDestinationConfiguration";

export interface IngestionDestinationArgs {
  //
  timeouts?: appfabric_IngestionDestinationTimeouts;

  // The Amazon Resource Name (ARN) of the app bundle to use for the request.
  appBundleArn?: string;

  // Contains information about the destination of ingested data.
  destinationConfiguration?: appfabric_IngestionDestinationDestinationConfiguration;

  // The Amazon Resource Name (ARN) of the ingestion to use for the request.
  ingestionArn?: string;

  // Contains information about how ingested data is processed.
  processingConfiguration?: appfabric_IngestionDestinationProcessingConfiguration;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class IngestionDestination extends DS_Resource {
  // Contains information about how ingested data is processed.
  public processingConfiguration?: appfabric_IngestionDestinationProcessingConfiguration;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: appfabric_IngestionDestinationTimeouts;

  // The Amazon Resource Name (ARN) of the app bundle to use for the request.
  public appBundleArn?: string;

  // ARN of the Ingestion Destination.
  public arn?: string;

  // Contains information about the destination of ingested data.
  public destinationConfiguration?: appfabric_IngestionDestinationDestinationConfiguration;

  // The Amazon Resource Name (ARN) of the ingestion to use for the request.
  public ingestionArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => appfabric_IngestionDestinationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appBundleArn",
        "The Amazon Resource Name (ARN) of the app bundle to use for the request.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "destinationConfiguration",
        "Contains information about the destination of ingested data.",
        () => appfabric_IngestionDestinationDestinationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ingestionArn",
        "The Amazon Resource Name (ARN) of the ingestion to use for the request.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "processingConfiguration",
        "Contains information about how ingested data is processed.",
        () => appfabric_IngestionDestinationProcessingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
