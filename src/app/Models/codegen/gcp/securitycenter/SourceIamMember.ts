import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitycenter_SourceIamMemberCondition,
  securitycenter_SourceIamMemberCondition_GetTypes,
} from '../types/securitycenter_SourceIamMemberCondition';

export interface SourceIamMemberArgs {
  //
  condition?: securitycenter_SourceIamMemberCondition;

  //
  member?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  organization?: string;

  //
  role?: string;

  //
  source?: string;
}
export class SourceIamMember extends DS_Resource {
  //
  public etag?: string;

  //
  public member?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public organization?: string;

  //
  public role?: string;

  //
  public source?: string;

  //
  public condition?: securitycenter_SourceIamMemberCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => securitycenter_SourceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        'organization',
        'The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, 'role', '', () => [], true, true),
      new DynamicUIProps(InputType.String, 'source', '', () => [], true, true),
    ];
  }
}
