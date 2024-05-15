import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamBackfillAll,
  Datastream_StreamBackfillAll_GetTypes,
} from "../types/Datastream_StreamBackfillAll";
import {
  Datastream_StreamBackfillNone,
  Datastream_StreamBackfillNone_GetTypes,
} from "../types/Datastream_StreamBackfillNone";
import {
  Datastream_StreamDestinationConfig,
  Datastream_StreamDestinationConfig_GetTypes,
} from "../types/Datastream_StreamDestinationConfig";
import {
  Datastream_StreamSourceConfig,
  Datastream_StreamSourceConfig_GetTypes,
} from "../types/Datastream_StreamSourceConfig";

export interface StreamArgs {
  // Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.
  DesiredState?: string;

  /*
Destination connection profile configuration.
Structure is documented below.
*/
  DestinationConfig?: Datastream_StreamDestinationConfig;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of the location this stream is located in.
  Location?: string;

  /*
Source connection profile configuration.
Structure is documented below.
*/
  SourceConfig?: Datastream_StreamSourceConfig;

  /*
Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
Structure is documented below.
*/
  BackfillAll?: Datastream_StreamBackfillAll;

  // Backfill strategy to disable automatic backfill for the Stream's objects.
  BackfillNone?: Datastream_StreamBackfillNone;

  /*
A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
*/
  CustomerManagedEncryptionKey?: string;

  // Display name.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The stream identifier.
  StreamId?: string;
}
export class Stream extends Resource {
  // Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.
  public DesiredState?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The name of the location this stream is located in.
  public Location?: string;

  // The stream identifier.
  public StreamId?: string;

  /*
Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
Structure is documented below.
*/
  public BackfillAll?: Datastream_StreamBackfillAll;

  // The state of the stream.
  public State?: string;

  /*
Destination connection profile configuration.
Structure is documented below.
*/
  public DestinationConfig?: Datastream_StreamDestinationConfig;

  // Display name.
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Backfill strategy to disable automatic backfill for the Stream's objects.
  public BackfillNone?: Datastream_StreamBackfillNone;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The stream's name.
  public Name?: string;

  /*
Source connection profile configuration.
Structure is documented below.
*/
  public SourceConfig?: Datastream_StreamSourceConfig;

  /*
A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
*/
  public CustomerManagedEncryptionKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this stream is located in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BackfillAll",
        "Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.\nStructure is documented below.",
        Datastream_StreamBackfillAll_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "StreamId",
        "The stream identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredState",
        "Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DestinationConfig",
        "Destination connection profile configuration.\nStructure is documented below.",
        Datastream_StreamDestinationConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SourceConfig",
        "Source connection profile configuration.\nStructure is documented below.",
        Datastream_StreamSourceConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BackfillNone",
        "Backfill strategy to disable automatic backfill for the Stream's objects.",
        Datastream_StreamBackfillNone_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomerManagedEncryptionKey",
        "A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data\nwill be encrypted using an internal Stream-specific encryption key provisioned through KMS.",
        [],
        false,
        true,
      ),
    ];
  }
}
