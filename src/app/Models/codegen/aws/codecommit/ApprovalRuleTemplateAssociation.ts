import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ApprovalRuleTemplateAssociationArgs {
  // The name for the approval rule template.
  approvalRuleTemplateName?: string;

  // The name of the repository that you want to associate with the template.
  repositoryName?: string;
}
export class ApprovalRuleTemplateAssociation extends DS_Resource {
  // The name for the approval rule template.
  public approvalRuleTemplateName?: string;

  // The name of the repository that you want to associate with the template.
  public repositoryName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'approvalRuleTemplateName',
        'The name for the approval rule template.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'repositoryName',
        'The name of the repository that you want to associate with the template.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
