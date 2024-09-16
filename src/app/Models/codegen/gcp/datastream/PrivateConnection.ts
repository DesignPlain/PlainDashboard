import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_PrivateConnectionVpcPeeringConfig,
  datastream_PrivateConnectionVpcPeeringConfig_GetTypes,
} from '../types/datastream_PrivateConnectionVpcPeeringConfig';
import {
  datastream_PrivateConnectionError,
  datastream_PrivateConnectionError_GetTypes,
} from '../types/datastream_PrivateConnectionError';

export interface PrivateConnectionArgs {
  /*
The VPC Peering configuration is used to create VPC peering
between Datastream and the consumer's VPC.
Structure is documented below.
*/
  vpcPeeringConfig?: datastream_PrivateConnectionVpcPeeringConfig;

  // Display name.
  displayName?: string;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name of the location this private connection is located in.
  location?: string;

  // The private connectivity identifier.
  privateConnectionId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class PrivateConnection extends DS_Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The PrivateConnection error in case of failure.
Structure is documented below.
*/
  public errors?: Array<datastream_PrivateConnectionError>;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // State of the PrivateConnection.
  public state?: string;

  /*
The VPC Peering configuration is used to create VPC peering
between Datastream and the consumer's VPC.
Structure is documented below.
*/
  public vpcPeeringConfig?: datastream_PrivateConnectionVpcPeeringConfig;

  // Display name.
  public displayName?: string;

  // The name of the location this private connection is located in.
  public location?: string;

  // The resource's name.
  public name?: string;

  // The private connectivity identifier.
  public privateConnectionId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Display name.',
        () => [],
        true,
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
        'The name of the location this private connection is located in.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'privateConnectionId',
        'The private connectivity identifier.',
        () => [],
        true,
        true,
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
        'vpcPeeringConfig',
        "The VPC Peering configuration is used to create VPC peering\nbetween Datastream and the consumer's VPC.\nStructure is documented below.",
        () => datastream_PrivateConnectionVpcPeeringConfig_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
