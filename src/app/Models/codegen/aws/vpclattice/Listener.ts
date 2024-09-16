import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpclattice_ListenerDefaultAction,
  vpclattice_ListenerDefaultAction_GetTypes,
} from '../types/vpclattice_ListenerDefaultAction';

export interface ListenerArgs {
  // Name of the listener. A listener name must be unique within a service. Valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
  name?: string;

  // Listener port. You can specify a value from 1 to 65535. If `port` is not specified and `protocol` is HTTP, the value will default to 80. If `port` is not specified and `protocol` is HTTPS, the value will default to 443.
  port?: number;

  // Protocol for the listener. Supported values are `HTTP`, `HTTPS` or `TLS_PASSTHROUGH`
  protocol?: string;

  // Amazon Resource Name (ARN) of the VPC Lattice service. You must include either the `service_arn` or `service_identifier` arguments.
  serviceArn?: string;

  /*
ID of the VPC Lattice service. You must include either the `service_arn` or `service_identifier` arguments.
> --NOTE:-- You must specify one of the following arguments: `service_arn` or `service_identifier`.
*/
  serviceIdentifier?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Default action block for the default listener rule. Default action blocks are defined below.
  defaultAction?: vpclattice_ListenerDefaultAction;
}
export class Listener extends DS_Resource {
  // Default action block for the default listener rule. Default action blocks are defined below.
  public defaultAction?: vpclattice_ListenerDefaultAction;

  // Standalone ID of the listener, e.g. `listener-0a1b2c3d4e5f6g`.
  public listenerId?: string;

  // Name of the listener. A listener name must be unique within a service. Valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
  public name?: string;

  /*
ID of the VPC Lattice service. You must include either the `service_arn` or `service_identifier` arguments.
> --NOTE:-- You must specify one of the following arguments: `service_arn` or `service_identifier`.
*/
  public serviceIdentifier?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // ARN of the listener.
  public arn?: string;

  // Date and time that the listener was created, specified in ISO-8601 format.
  public createdAt?: string;

  //
  public lastUpdatedAt?: string;

  // Listener port. You can specify a value from 1 to 65535. If `port` is not specified and `protocol` is HTTP, the value will default to 80. If `port` is not specified and `protocol` is HTTPS, the value will default to 443.
  public port?: number;

  // Protocol for the listener. Supported values are `HTTP`, `HTTPS` or `TLS_PASSTHROUGH`
  public protocol?: string;

  // Amazon Resource Name (ARN) of the VPC Lattice service. You must include either the `service_arn` or `service_identifier` arguments.
  public serviceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'defaultAction',
        'Default action block for the default listener rule. Default action blocks are defined below.',
        () => vpclattice_ListenerDefaultAction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        "Name of the listener. A listener name must be unique within a service. Valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'port',
        'Listener port. You can specify a value from 1 to 65535. If `port` is not specified and `protocol` is HTTP, the value will default to 80. If `port` is not specified and `protocol` is HTTPS, the value will default to 443.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'protocol',
        'Protocol for the listener. Supported values are `HTTP`, `HTTPS` or `TLS_PASSTHROUGH`',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceArn',
        'Amazon Resource Name (ARN) of the VPC Lattice service. You must include either the `service_arn` or `service_identifier` arguments.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceIdentifier',
        'ID of the VPC Lattice service. You must include either the `service_arn` or `service_identifier` arguments.\n> **NOTE:** You must specify one of the following arguments: `service_arn` or `service_identifier`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
