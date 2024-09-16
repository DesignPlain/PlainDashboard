import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ApprovalRuleTemplateArgs {
  // The content of the approval rule template. Maximum of 3000 characters.
  content?: string;

  // The description of the approval rule template. Maximum of 1000 characters.
  description?: string;

  // The name for the approval rule template. Maximum of 100 characters.
  name?: string;
}
export class ApprovalRuleTemplate extends DS_Resource {
  // The description of the approval rule template. Maximum of 1000 characters.
  public description?: string;

  // The date the approval rule template was most recently changed, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public lastModifiedDate?: string;

  // The Amazon Resource Name (ARN) of the user who made the most recent changes to the approval rule template.
  public lastModifiedUser?: string;

  // The name for the approval rule template. Maximum of 100 characters.
  public name?: string;

  // The SHA-256 hash signature for the content of the approval rule template.
  public ruleContentSha256?: string;

  // The ID of the approval rule template
  public approvalRuleTemplateId?: string;

  // The content of the approval rule template. Maximum of 3000 characters.
  public content?: string;

  // The date the approval rule template was created, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public creationDate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'content',
        'The content of the approval rule template. Maximum of 3000 characters.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the approval rule template. Maximum of 1000 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name for the approval rule template. Maximum of 100 characters.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
