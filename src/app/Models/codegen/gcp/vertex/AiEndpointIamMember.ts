import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vertex_AiEndpointIamMemberCondition,
  vertex_AiEndpointIamMemberCondition_GetTypes,
} from '../types/vertex_AiEndpointIamMemberCondition';

export interface AiEndpointIamMemberArgs {
  //
  condition?: vertex_AiEndpointIamMemberCondition;

  //
  endpoint?: string;

  //
  location?: string;

  //
  member?: string;

  //
  project?: string;

  //
  role?: string;
}
export class AiEndpointIamMember extends DS_Resource {
  //
  public condition?: vertex_AiEndpointIamMemberCondition;

  //
  public endpoint?: string;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public member?: string;

  //
  public project?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, 'role', '', () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => vertex_AiEndpointIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'endpoint',
        '',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        'project',
        '',
        () => [],
        false,
        true,
      ),
    ];
  }
}
