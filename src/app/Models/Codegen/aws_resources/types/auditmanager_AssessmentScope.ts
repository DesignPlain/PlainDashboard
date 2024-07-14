import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  auditmanager_AssessmentScopeAwsService,
  auditmanager_AssessmentScopeAwsService_GetTypes,
} from "./auditmanager_AssessmentScopeAwsService";
import {
  auditmanager_AssessmentScopeAwsAccount,
  auditmanager_AssessmentScopeAwsAccount_GetTypes,
} from "./auditmanager_AssessmentScopeAwsAccount";

export interface auditmanager_AssessmentScope {
  // Amazon Web Services accounts that are in scope for the assessment. See `aws_accounts` below.
  awsAccounts?: Array<auditmanager_AssessmentScopeAwsAccount>;

  // Amazon Web Services services that are included in the scope of the assessment. See `aws_services` below.
  awsServices?: Array<auditmanager_AssessmentScopeAwsService>;
}

export function auditmanager_AssessmentScope_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "awsAccounts",
      "Amazon Web Services accounts that are in scope for the assessment. See `aws_accounts` below.",
      auditmanager_AssessmentScopeAwsAccount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "awsServices",
      "Amazon Web Services services that are included in the scope of the assessment. See `aws_services` below.",
      auditmanager_AssessmentScopeAwsService_GetTypes(),
      false,
      false,
    ),
  ];
}
