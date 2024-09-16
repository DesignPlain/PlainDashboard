import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codepipeline_CustomActionTypeSettings {
  // The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system.
  entityUrlTemplate?: string;

  // The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system.
  executionUrlTemplate?: string;

  // The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.
  revisionUrlTemplate?: string;

  // The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.
  thirdPartyConfigurationUrl?: string;
}

export function codepipeline_CustomActionTypeSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'thirdPartyConfigurationUrl',
      'The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'entityUrlTemplate',
      'The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'executionUrlTemplate',
      'The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'revisionUrlTemplate',
      'The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.',
      () => [],
      false,
      false,
    ),
  ];
}
