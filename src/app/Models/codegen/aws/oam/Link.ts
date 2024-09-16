import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  oam_LinkLinkConfiguration,
  oam_LinkLinkConfiguration_GetTypes,
} from '../types/oam_LinkLinkConfiguration';

export interface LinkArgs {
  // Configuration for creating filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account. See `link_configuration` Block for details.
  linkConfiguration?: oam_LinkLinkConfiguration;

  // Types of data that the source account shares with the monitoring account.
  resourceTypes?: Array<string>;

  /*
Identifier of the sink to use to create this link.

The following arguments are optional:
*/
  sinkIdentifier?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.
  labelTemplate?: string;
}
export class Link extends DS_Resource {
  // ARN of the link.
  public arn?: string;

  // Label that is assigned to this link.
  public label?: string;

  // Human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.
  public labelTemplate?: string;

  // Configuration for creating filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account. See `link_configuration` Block for details.
  public linkConfiguration?: oam_LinkLinkConfiguration;

  //
  public tagsAll?: Map<string, string>;

  // ID string that AWS generated as part of the link ARN.
  public linkId?: string;

  // Types of data that the source account shares with the monitoring account.
  public resourceTypes?: Array<string>;

  // ARN of the sink that is used for this link.
  public sinkArn?: string;

  /*
Identifier of the sink to use to create this link.

The following arguments are optional:
*/
  public sinkIdentifier?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'linkConfiguration',
        'Configuration for creating filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account. See `link_configuration` Block for details.',
        () => oam_LinkLinkConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'resourceTypes',
        'Types of data that the source account shares with the monitoring account.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'sinkIdentifier',
        'Identifier of the sink to use to create this link.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'labelTemplate',
        'Human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
