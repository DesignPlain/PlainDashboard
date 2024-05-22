import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface servicecatalog_ServiceActionDefinition {
  // SSM document version. For example, `1`.
  version?: string;

  // ARN of the role that performs the self-service actions on your behalf. For example, `arn:aws:iam::12345678910:role/ActionRole`. To reuse the provisioned product launch role, set to `LAUNCH_ROLE`.
  assumeRole?: string;

  // Name of the SSM document. For example, `AWS-RestartEC2Instance`. If you are using a shared SSM document, you must provide the ARN instead of the name.
  name?: string;

  // List of parameters in JSON format. For example: `[{\"Name\":\"InstanceId\",\"Type\":\"TARGET\"}]` or `[{\"Name\":\"InstanceId\",\"Type\":\"TEXT_VALUE\"}]`.
  parameters?: string;

  // Service action definition type. Valid value is `SSM_AUTOMATION`. Default is `SSM_AUTOMATION`.
  type?: string;
}

export function servicecatalog_ServiceActionDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "SSM document version. For example, `1`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "assumeRole",
      "ARN of the role that performs the self-service actions on your behalf. For example, `arn:aws:iam::12345678910:role/ActionRole`. To reuse the provisioned product launch role, set to `LAUNCH_ROLE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the SSM document. For example, `AWS-RestartEC2Instance`. If you are using a shared SSM document, you must provide the ARN instead of the name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parameters",
      'List of parameters in JSON format. For example: `[{\\"Name\\":\\"InstanceId\\",\\"Type\\":\\"TARGET\\"}]` or `[{\\"Name\\":\\"InstanceId\\",\\"Type\\":\\"TEXT_VALUE\\"}]`.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Service action definition type. Valid value is `SSM_AUTOMATION`. Default is `SSM_AUTOMATION`.",
      [],
      false,
      true,
    ),
  ];
}
