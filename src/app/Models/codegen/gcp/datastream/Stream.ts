import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamDestinationConfig,
  datastream_StreamDestinationConfig_GetTypes,
} from '../types/datastream_StreamDestinationConfig';
import {
  datastream_StreamSourceConfig,
  datastream_StreamSourceConfig_GetTypes,
} from '../types/datastream_StreamSourceConfig';
import {
  datastream_StreamBackfillAll,
  datastream_StreamBackfillAll_GetTypes,
} from '../types/datastream_StreamBackfillAll';
import {
  datastream_StreamBackfillNone,
  datastream_StreamBackfillNone_GetTypes,
} from '../types/datastream_StreamBackfillNone';

export interface StreamArgs {
  /*
Destination connection profile configuration.
Structure is documented below.
*/
  destinationConfig?: datastream_StreamDestinationConfig;

  // Display name.
  displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The stream identifier.
  streamId?: string;

  /*
Source connection profile configuration.
Structure is documented below.
*/
  sourceConfig?: datastream_StreamSourceConfig;

  /*
Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
Structure is documented below.
*/
  backfillAll?: datastream_StreamBackfillAll;

  // Backfill strategy to disable automatic backfill for the Stream's objects.
  backfillNone?: datastream_StreamBackfillNone;

  /*
A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
*/
  customerManagedEncryptionKey?: string;

  // Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.
  desiredState?: string;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name of the location this stream is located in.
  location?: string;
}
export class Stream extends DS_Resource {
  // Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.
  public desiredState?: string;

  // Display name.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
Structure is documented below.
*/
  public backfillAll?: datastream_StreamBackfillAll;

  /*
A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
*/
  public customerManagedEncryptionKey?: string;

  /*
Destination connection profile configuration.
Structure is documented below.
*/
  public destinationConfig?: datastream_StreamDestinationConfig;

  // The name of the location this stream is located in.
  public location?: string;

  /*
Source connection profile configuration.
Structure is documented below.
*/
  public sourceConfig?: datastream_StreamSourceConfig;

  // The stream identifier.
  public streamId?: string;

  // Backfill strategy to disable automatic backfill for the Stream's objects.
  public backfillNone?: datastream_StreamBackfillNone;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The state of the stream.
  public state?: string;

  // The stream's name.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'destinationConfig',
        'Destination connection profile configuration.\nStructure is documented below.',
        () => datastream_StreamDestinationConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Display name.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'backfillNone',
        "Backfill strategy to disable automatic backfill for the Stream's objects.",
        () => datastream_StreamBackfillNone_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'customerManagedEncryptionKey',
        'A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data\nwill be encrypted using an internal Stream-specific encryption key provisioned through KMS.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The name of the location this stream is located in.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'streamId',
        'The stream identifier.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sourceConfig',
        'Source connection profile configuration.\nStructure is documented below.',
        () => datastream_StreamSourceConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'backfillAll',
        "Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.\nStructure is documented below.",
        () => datastream_StreamBackfillAll_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'desiredState',
        'Desired state of the Stream. Set this field to `RUNNING` to start the stream, and `PAUSED` to pause the stream.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
