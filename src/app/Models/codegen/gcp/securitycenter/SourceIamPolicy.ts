import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SourceIamPolicyArgs {
  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  organization?: string;

  //
  policyData?: string;

  //
  source?: string;
}
export class SourceIamPolicy extends DS_Resource {
  //
  public etag?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public organization?: string;

  //
  public policyData?: string;

  //
  public source?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, 'source', '', () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        'organization',
        'The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyData',
        '',
        () => [],
        true,
        false,
      ),
    ];
  }
}
