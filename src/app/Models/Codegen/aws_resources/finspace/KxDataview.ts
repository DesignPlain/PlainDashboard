import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  finspace_KxDataviewSegmentConfiguration,
  finspace_KxDataviewSegmentConfiguration_GetTypes,
} from "../types/finspace_KxDataviewSegmentConfiguration";

export interface KxDataviewArgs {
  // The option to specify whether you want to apply all the future additions and corrections automatically to the dataview, when you ingest new changesets. The default value is false.
  autoUpdate?: boolean;

  // The number of availability zones you want to assign per cluster. This can be one of the following:
  azMode?: string;

  // A unique identifier of the changeset of the database that you want to use to ingest data.
  changesetId?: string;

  // A description for the dataview.
  description?: string;

  /*
A unique identifier for the dataview.

The following arguments are optional:
*/
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The identifier of the availability zones. If attaching a volume, the volume must be in the same availability zone as the dataview that you are attaching to.
  availabilityZoneId?: string;

  // The name of the database where you want to create a dataview.
  databaseName?: string;

  // Unique identifier for the KX environment.
  environmentId?: string;

  // The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. See segment_configurations below.
  segmentConfigurations?: Array<finspace_KxDataviewSegmentConfiguration>;
}
export class KxDataview extends Resource {
  // The number of availability zones you want to assign per cluster. This can be one of the following:
  public azMode?: string;

  // A description for the dataview.
  public description?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
A unique identifier for the dataview.

The following arguments are optional:
*/
  public name?: string;

  // The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. See segment_configurations below.
  public segmentConfigurations?: Array<finspace_KxDataviewSegmentConfiguration>;

  // Timestamp at which the dataview was created in FinSpace. Value determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
  public createdTimestamp?: string;

  // Unique identifier for the KX environment.
  public environmentId?: string;

  // The last time that the dataview was updated in FinSpace. The value is determined as epoch time in milliseconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000000.
  public lastModifiedTimestamp?: string;

  // A unique identifier of the changeset of the database that you want to use to ingest data.
  public changesetId?: string;

  // The name of the database where you want to create a dataview.
  public databaseName?: string;

  //
  public status?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) identifier of the KX dataview.
  public arn?: string;

  // The option to specify whether you want to apply all the future additions and corrections automatically to the dataview, when you ingest new changesets. The default value is false.
  public autoUpdate?: boolean;

  // The identifier of the availability zones. If attaching a volume, the volume must be in the same availability zone as the dataview that you are attaching to.
  public availabilityZoneId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "autoUpdate",
        "The option to specify whether you want to apply all the future additions and corrections automatically to the dataview, when you ingest new changesets. The default value is false.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "changesetId",
        "A unique identifier of the changeset of the database that you want to use to ingest data.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZoneId",
        "The identifier of the availability zones. If attaching a volume, the volume must be in the same availability zone as the dataview that you are attaching to.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "The name of the database where you want to create a dataview.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "azMode",
        "The number of availability zones you want to assign per cluster. This can be one of the following:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for the dataview.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique identifier for the dataview.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "environmentId",
        "Unique identifier for the KX environment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "segmentConfigurations",
        "The configuration that contains the database path of the data that you want to place on each selected volume. Each segment must have a unique database path for each volume. If you do not explicitly specify any database path for a volume, they are accessible from the cluster through the default S3/object store segment. See segment_configurations below.",
        finspace_KxDataviewSegmentConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
