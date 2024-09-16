import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_DefaultRouteTableRoute,
  ec2_DefaultRouteTableRoute_GetTypes,
} from '../types/ec2_DefaultRouteTableRoute';

export interface DefaultRouteTableArgs {
  /*
ID of the default route table.

The following arguments are optional:
*/
  defaultRouteTableId?: string;

  // List of virtual gateways for propagation.
  propagatingVgws?: Array<string>;

  // Set of objects. Detailed below
  routes?: Array<ec2_DefaultRouteTableRoute>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class DefaultRouteTable extends DS_Resource {
  // The ARN of the route table.
  public arn?: string;

  /*
ID of the default route table.

The following arguments are optional:
*/
  public defaultRouteTableId?: string;

  // ID of the AWS account that owns the route table.
  public ownerId?: string;

  // List of virtual gateways for propagation.
  public propagatingVgws?: Array<string>;

  // Set of objects. Detailed below
  public routes?: Array<ec2_DefaultRouteTableRoute>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ID of the VPC.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'defaultRouteTableId',
        'ID of the default route table.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'propagatingVgws',
        'List of virtual gateways for propagation.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'routes',
        'Set of objects. Detailed below',
        () => ec2_DefaultRouteTableRoute_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
