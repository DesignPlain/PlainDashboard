import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { StreamBackfillAll } from "../types/StreamBackfillAll";
import { StreamDestinationConfig } from "../types/StreamDestinationConfig";
import { StreamSourceConfig } from "../types/StreamSourceConfig";
import { StreamBackfillNone } from "../types/StreamBackfillNone";

export interface StreamArgs {
  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
Structure is documented below.
*/
  BackfillAll?: StreamBackfillAll;

  /*
A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
*/
  CustomerManagedEncryptionKey?: string;

  // Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.
  DesiredState?: string;

  /*
Destination connection profile configuration.
Structure is documented below.
*/
  DestinationConfig?: StreamDestinationConfig;

  // Display name.
  DisplayName?: string;

  // The name of the location this stream is located in.
  Location?: string;

  /*
Source connection profile configuration.
Structure is documented below.
*/
  SourceConfig?: StreamSourceConfig;

  // The stream identifier.
  StreamId?: string;

  // Backfill strategy to disable automatic backfill for the Stream's objects.
  BackfillNone?: StreamBackfillNone;
}
export class Stream extends Resource {
  // The state of the stream.
  public State?: string;

  // Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.
  public DesiredState?: string;

  // The name of the location this stream is located in.
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
Structure is documented below.
*/
  public BackfillAll?: StreamBackfillAll;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The stream's name.
  public Name?: string;

  /*
Source connection profile configuration.
Structure is documented below.
*/
  public SourceConfig?: StreamSourceConfig;

  // The stream identifier.
  public StreamId?: string;

  // Display name.
  public DisplayName?: string;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Backfill strategy to disable automatic backfill for the Stream's objects.
  public BackfillNone?: StreamBackfillNone;

  /*
A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
*/
  public CustomerManagedEncryptionKey?: string;

  /*
Destination connection profile configuration.
Structure is documented below.
*/
  public DestinationConfig?: StreamDestinationConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BackfillAll",
        "Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DesiredState",
        "Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DestinationConfig",
        "Destination connection profile configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BackfillNone",
        "Backfill strategy to disable automatic backfill for the Stream's objects.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomerManagedEncryptionKey",
        "A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data\nwill be encrypted using an internal Stream-specific encryption key provisioned through KMS.",
      ),
      new DynamicUIProps(InputType.String, "DisplayName", "Display name."),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this stream is located in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceConfig",
        "Source connection profile configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StreamId",
        "The stream identifier.",
      ),
    ];
  }
}
